#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");
const legacyPath = path.join(repoRoot, "references", "legacy", "legacy-data.js");
const sourceCode = fs.readFileSync(legacyPath, "utf8");

const sandbox = {
  window: {}
};
vm.createContext(sandbox);
vm.runInContext(sourceCode, sandbox);

const legacy = sandbox.window.AWS_SAA_DATA;
if (!legacy) {
  throw new Error("Could not load AWS_SAA_DATA from legacy file");
}

function writeJson(relPath, payload) {
  const fullPath = path.join(repoRoot, relPath);
  fs.writeFileSync(fullPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

const stageByDomain = {
  "보안 설계": "stage-02-network-security",
  "회복탄력성": "stage-04-resilience-performance",
  "고성능 설계": "stage-04-resilience-performance",
  "비용 최적화": "stage-05-cost-operations"
};

const txtSourceMap = {
  19: "txt:q1",
  20: "txt:q2",
  21: "txt:q7",
  22: "txt:q8"
};

const normalizedQuestions = legacy.questions.map((question) => {
  const source = txtSourceMap[question.id] || "pdf:concept-review";
  const stage = question.level === "실전" ? "stage-06-exam-drills" : stageByDomain[question.domain] || "stage-01-foundations";

  return {
    ...question,
    stage,
    source
  };
});

const foundationQuestions = normalizedQuestions.filter((q) => q.level === "기초");
const intermediateQuestions = normalizedQuestions.filter((q) => q.level === "중급");
const examQuestions = normalizedQuestions.filter((q) => q.level === "실전");

const foundationTerms = legacy.glossary.slice(0, 8).map((term) => ({
  ...term,
  stage: "stage-01-foundations",
  source: "pdf:concept-review"
}));

const architectureTerms = legacy.glossary.slice(8).map((term) => ({
  ...term,
  stage: "stage-03-storage-database",
  source: "pdf:concept-review"
}));

const roadmap = legacy.roadmap.map((stage, index) => ({
  id: `stage-0${index + 1}`,
  stagePath:
    index === 0
      ? "stage-01-foundations"
      : index === 1
        ? "stage-02-network-security"
        : index === 2
          ? "stage-03-storage-database"
          : index === 3
            ? "stage-04-resilience-performance"
            : index === 4
              ? "stage-05-cost-operations"
              : "stage-06-exam-drills",
  ...stage
}));

const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  sources: {
    pdf: "references/raw/saa-c03-source.pdf",
    txt: "references/raw/saa-c03-solution.txt"
  },
  roadmap: "content/roadmap/stages.json",
  glossary: [
    "content/glossary/foundation.json",
    "content/glossary/architecture.json"
  ],
  questions: [
    "content/questions/foundation.json",
    "content/questions/intermediate.json",
    "content/questions/exam.json",
    "content/questions/exam_txt_drills.json"
  ],
  mockConfig: "content/questions/mock_blueprint.json"
};

const mockBlueprint = {
  totalQuestions: 20,
  timeLimitMinutes: 40,
  passScore: 72,
  distribution: [
    { level: "기초", count: 5 },
    { level: "중급", count: 6 },
    { level: "실전", count: 9 }
  ]
};

writeJson("content/roadmap/stages.json", roadmap);
writeJson("content/glossary/foundation.json", foundationTerms);
writeJson("content/glossary/architecture.json", architectureTerms);
writeJson("content/questions/foundation.json", foundationQuestions);
writeJson("content/questions/intermediate.json", intermediateQuestions);
writeJson("content/questions/exam.json", examQuestions);
writeJson("content/questions/mock_blueprint.json", mockBlueprint);
writeJson("content/manifest.json", manifest);

console.log("Generated structured content JSON files from references/legacy/legacy-data.js");
