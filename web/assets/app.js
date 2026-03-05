(async function () {
  const data = {
    roadmap: [],
    glossary: [],
    questions: [],
    mockConfig: {
      totalQuestions: 20,
      timeLimitMinutes: 40,
      passScore: 72,
      distribution: [
        { level: "기초", count: 5 },
        { level: "중급", count: 6 },
        { level: "실전", count: 9 }
      ]
    }
  };

  const stageMetaByPath = new Map();

  const appStatus = document.getElementById("appStatus");
  const roadmapGrid = document.getElementById("roadmapGrid");
  const glossaryGrid = document.getElementById("glossaryGrid");
  const glossarySearch = document.getElementById("glossarySearch");

  const practiceType = document.getElementById("practiceType");
  const practiceStage = document.getElementById("practiceStage");
  const practiceLevel = document.getElementById("practiceLevel");
  const practiceDomain = document.getElementById("practiceDomain");
  const drawQuestionBtn = document.getElementById("drawQuestionBtn");
  const practiceCard = document.getElementById("practiceCard");
  const practiceMeta = document.getElementById("practiceMeta");
  const practiceQuestion = document.getElementById("practiceQuestion");
  const practiceOptions = document.getElementById("practiceOptions");
  const submitPracticeBtn = document.getElementById("submitPracticeBtn");
  const nextPracticeBtn = document.getElementById("nextPracticeBtn");
  const practiceFeedback = document.getElementById("practiceFeedback");
  const practiceScore = document.getElementById("practiceScore");

  const startMockBtn = document.getElementById("startMockBtn");
  const mockContainer = document.getElementById("mockContainer");
  const mockProgress = document.getElementById("mockProgress");
  const mockTimer = document.getElementById("mockTimer");
  const mockMeta = document.getElementById("mockMeta");
  const mockQuestion = document.getElementById("mockQuestion");
  const mockOptions = document.getElementById("mockOptions");
  const mockPrevBtn = document.getElementById("mockPrevBtn");
  const mockNextBtn = document.getElementById("mockNextBtn");
  const submitMockBtn = document.getElementById("submitMockBtn");
  const mockResult = document.getElementById("mockResult");

  const state = {
    loaded: false,
    practice: {
      currentQuestion: null,
      correct: 0,
      wrong: 0
    },
    mock: {
      active: false,
      questions: [],
      answers: [],
      currentIndex: 0,
      remainingSec: 40 * 60,
      timerId: null
    }
  };

  function escapeHtml(input) {
    return String(input)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setStatus(message, isError = false) {
    if (!appStatus) {
      return;
    }
    appStatus.textContent = message;
    appStatus.style.color = isError ? "#b34700" : "#4f6370";
  }

  function stageLabel(stagePath) {
    const stage = stageMetaByPath.get(stagePath);
    if (!stage) {
      return stagePath;
    }
    return `${stage.week} ${stage.title}`;
  }

  function normalizeQuestion(question) {
    const normalized = { ...question };
    normalized.type = normalized.type || "mcq";
    return normalized;
  }

  function questionOrderValue(question) {
    if (typeof question.id === "number") {
      return question.id;
    }
    if (typeof question.id === "string") {
      const txtMatch = question.id.match(/^TXT-(\d+)$/i);
      if (txtMatch) {
        return 100000 + Number(txtMatch[1]);
      }
      const asNumber = Number(question.id);
      if (!Number.isNaN(asNumber)) {
        return asNumber;
      }
    }
    return Number.MAX_SAFE_INTEGER;
  }

  async function loadJson(relativePath) {
    const response = await fetch(relativePath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load ${relativePath} (${response.status})`);
    }
    return response.json();
  }

  async function loadLearningData() {
    const manifest = await loadJson("../content/manifest.json");
    const roadmap = await loadJson(`../${manifest.roadmap}`);
    const glossaryParts = await Promise.all(
      manifest.glossary.map((filePath) => loadJson(`../${filePath}`))
    );
    const questionParts = await Promise.all(
      manifest.questions.map((filePath) => loadJson(`../${filePath}`))
    );

    let mockConfig = data.mockConfig;
    if (manifest.mockConfig) {
      mockConfig = await loadJson(`../${manifest.mockConfig}`);
    }

    data.roadmap = roadmap;
    data.glossary = glossaryParts.flat();
    data.questions = questionParts
      .flat()
      .map(normalizeQuestion)
      .sort((a, b) => questionOrderValue(a) - questionOrderValue(b));
    data.mockConfig = mockConfig;

    stageMetaByPath.clear();
    data.roadmap.forEach((stage) => {
      stageMetaByPath.set(stage.stagePath, stage);
    });

    mockTimer.textContent = formatTime(data.mockConfig.timeLimitMinutes * 60);
  }

  function shuffle(array) {
    const list = [...array];
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  function pickRandom(array, count) {
    return shuffle(array).slice(0, Math.max(0, count));
  }

  function renderRoadmap() {
    roadmapGrid.innerHTML = data.roadmap
      .map(
        (stage) => `
          <article class="roadmap-card">
            <span class="tag">${escapeHtml(stage.week)}</span>
            <h3>${escapeHtml(stage.title)}</h3>
            <p>${escapeHtml(stage.summary)}</p>
            <ul>
              ${stage.goals.map((goal) => `<li>${escapeHtml(goal)}</li>`).join("")}
            </ul>
            <p><strong>체크:</strong> ${escapeHtml(stage.check)}</p>
            <p>
              <a class="doc-link" href="../curriculum/${escapeHtml(stage.stagePath)}/README.md" target="_blank" rel="noopener">
                단계 가이드 열기
              </a>
            </p>
          </article>
        `
      )
      .join("");
  }

  function renderGlossary(keyword = "") {
    const key = keyword.trim().toLowerCase();
    const filtered = data.glossary.filter((item) => {
      if (!key) {
        return true;
      }
      return (
        item.term.toLowerCase().includes(key) ||
        item.meaning.toLowerCase().includes(key) ||
        item.why.toLowerCase().includes(key)
      );
    });

    if (!filtered.length) {
      glossaryGrid.innerHTML = `<article class="glossary-card"><p>검색 결과가 없습니다.</p></article>`;
      return;
    }

    glossaryGrid.innerHTML = filtered
      .map(
        (item) => `
          <article class="glossary-card">
            <h3>${escapeHtml(item.term)}</h3>
            <p><strong>의미:</strong> ${escapeHtml(item.meaning)}</p>
            <p><strong>왜 필요:</strong> ${escapeHtml(item.why)}</p>
            <p><span class="tag">${escapeHtml(stageLabel(item.stage))}</span><span class="tag">${escapeHtml(item.source)}</span></p>
            <div class="qa">
              <p><strong>Q.</strong> ${escapeHtml(item.followUpQ)}</p>
              <p><strong>A.</strong> ${escapeHtml(item.followUpA)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function fillPracticeFilters() {
    const stagePaths = ["전체", ...new Set(data.questions.map((q) => q.stage))];
    const domains = ["전체", ...new Set(data.questions.map((q) => q.domain))];

    practiceStage.innerHTML = stagePaths
      .map((path) => {
        const label = path === "전체" ? path : stageLabel(path);
        return `<option value="${escapeHtml(path)}">${escapeHtml(label)}</option>`;
      })
      .join("");

    practiceDomain.innerHTML = domains
      .map((domain) => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`)
      .join("");
  }

  function updatePracticeScore() {
    practiceScore.textContent = `정답 ${state.practice.correct} | 오답 ${state.practice.wrong}`;
  }

  function getPracticePool() {
    const type = practiceType.value;
    const stage = practiceStage.value;
    const level = practiceLevel.value;
    const domain = practiceDomain.value;

    return data.questions.filter((q) => {
      const typeMatch =
        type === "전체" || (type === "객관식" ? q.type !== "drill" : q.type === "drill");
      const stageMatch = stage === "전체" || q.stage === stage;
      const levelMatch = level === "전체" || q.level === level;
      const domainMatch = domain === "전체" || q.domain === domain;
      return typeMatch && stageMatch && levelMatch && domainMatch;
    });
  }

  function renderPracticeQuestion(question) {
    practiceCard.classList.remove("hidden");
    practiceMeta.textContent = `${stageLabel(question.stage)} | ${question.level} | ${question.domain} | ${question.source} | #${question.id}`;
    practiceQuestion.textContent = question.question;

    if (question.type === "drill") {
      practiceOptions.innerHTML = `
        <p class="small-note">
          TXT 실전 드릴입니다. 먼저 스스로 답안을 말한 뒤 <strong>답안/해설 보기</strong>를 누르세요.
        </p>
      `;
      submitPracticeBtn.textContent = "답안/해설 보기";
    } else {
      practiceOptions.innerHTML = question.options
        .map(
          (option, idx) => `
            <label>
              <input type="radio" name="practiceOption" value="${idx}" />
              <span>${String.fromCharCode(65 + idx)}. ${escapeHtml(option)}</span>
            </label>
          `
        )
        .join("");
      submitPracticeBtn.textContent = "정답 확인";
    }

    practiceFeedback.className = "feedback";
    practiceFeedback.textContent = "";
  }

  function drawPracticeQuestion() {
    if (!state.loaded) {
      return;
    }

    const pool = getPracticePool();
    if (!pool.length) {
      practiceCard.classList.add("hidden");
      alert("현재 필터 조건에 맞는 문제가 없습니다.");
      return;
    }

    const selected = pool[Math.floor(Math.random() * pool.length)];
    state.practice.currentQuestion = selected;
    renderPracticeQuestion(selected);
  }

  function submitPracticeAnswer() {
    const current = state.practice.currentQuestion;
    if (!current) {
      return;
    }

    if (current.type === "drill") {
      practiceFeedback.className = "feedback ok";
      practiceFeedback.innerHTML = `
        <strong>권장 답안</strong><br />
        ${escapeHtml(current.recommendedAnswer)}<br /><br />
        <strong>핵심 근거</strong><br />
        ${escapeHtml(current.explanation)}<br /><br />
        <strong>꼬리질문:</strong> ${escapeHtml(current.followUpQ)}<br />
        <strong>답변:</strong> ${escapeHtml(current.followUpA)}
      `;
      return;
    }

    const checked = practiceOptions.querySelector("input[name='practiceOption']:checked");
    if (!checked) {
      alert("보기를 선택하세요.");
      return;
    }

    const picked = Number(checked.value);
    const isCorrect = picked === current.answer;

    if (isCorrect) {
      state.practice.correct += 1;
      practiceFeedback.className = "feedback ok";
      practiceFeedback.innerHTML = `
        <strong>정답입니다.</strong><br />
        ${escapeHtml(current.explanation)}<br /><br />
        <strong>꼬리질문:</strong> ${escapeHtml(current.followUpQ)}<br />
        <strong>답변:</strong> ${escapeHtml(current.followUpA)}
      `;
    } else {
      state.practice.wrong += 1;
      practiceFeedback.className = "feedback fail";
      practiceFeedback.innerHTML = `
        <strong>오답입니다.</strong> 정답: ${String.fromCharCode(65 + current.answer)}<br />
        ${escapeHtml(current.explanation)}<br /><br />
        <strong>꼬리질문:</strong> ${escapeHtml(current.followUpQ)}<br />
        <strong>답변:</strong> ${escapeHtml(current.followUpA)}
      `;
    }

    updatePracticeScore();
  }

  function formatTime(seconds) {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function buildMockSet() {
    const mcqQuestions = data.questions.filter(
      (q) => q.type !== "drill" && Array.isArray(q.options) && typeof q.answer === "number"
    );
    const totalQuestions = data.mockConfig.totalQuestions || 20;
    const distribution = data.mockConfig.distribution || [];
    const selected = [];
    const usedIds = new Set();

    distribution.forEach((rule) => {
      const levelPool = mcqQuestions.filter(
        (q) => q.level === rule.level && !usedIds.has(q.id)
      );
      const picked = pickRandom(levelPool, rule.count);
      picked.forEach((question) => {
        selected.push(question);
        usedIds.add(question.id);
      });
    });

    if (selected.length < totalQuestions) {
      const remain = mcqQuestions.filter((q) => !usedIds.has(q.id));
      pickRandom(remain, totalQuestions - selected.length).forEach((question) => {
        selected.push(question);
        usedIds.add(question.id);
      });
    }

    return shuffle(selected).slice(0, totalQuestions);
  }

  function renderMockQuestion() {
    const question = state.mock.questions[state.mock.currentIndex];
    if (!question) {
      return;
    }

    mockProgress.textContent = `문항 ${state.mock.currentIndex + 1} / ${state.mock.questions.length}`;
    mockTimer.textContent = formatTime(state.mock.remainingSec);
    mockMeta.textContent = `${stageLabel(question.stage)} | ${question.level} | ${question.domain} | ${question.source} | #${question.id}`;
    mockQuestion.textContent = question.question;

    mockOptions.innerHTML = question.options
      .map((option, idx) => {
        const checked = state.mock.answers[state.mock.currentIndex] === idx ? "checked" : "";
        return `
          <label>
            <input type="radio" name="mockOption" value="${idx}" ${checked} />
            <span>${String.fromCharCode(65 + idx)}. ${escapeHtml(option)}</span>
          </label>
        `;
      })
      .join("");

    mockPrevBtn.disabled = state.mock.currentIndex === 0;
    mockNextBtn.disabled = state.mock.currentIndex === state.mock.questions.length - 1;
  }

  function startMockExam() {
    if (!state.loaded) {
      return;
    }

    if (state.mock.timerId) {
      clearInterval(state.mock.timerId);
    }

    state.mock.active = true;
    state.mock.questions = buildMockSet();
    if (!state.mock.questions.length) {
      alert("모의고사에 사용할 객관식 문제가 없습니다.");
      state.mock.active = false;
      return;
    }
    state.mock.answers = Array(state.mock.questions.length).fill(null);
    state.mock.currentIndex = 0;
    state.mock.remainingSec = (data.mockConfig.timeLimitMinutes || 40) * 60;

    mockResult.classList.add("hidden");
    mockContainer.classList.remove("hidden");

    renderMockQuestion();

    state.mock.timerId = setInterval(() => {
      state.mock.remainingSec -= 1;
      mockTimer.textContent = formatTime(state.mock.remainingSec);

      if (state.mock.remainingSec <= 0) {
        submitMockExam(true);
      }
    }, 1000);
  }

  function summarizeByDomain() {
    const summary = {};

    state.mock.questions.forEach((question, idx) => {
      if (!summary[question.domain]) {
        summary[question.domain] = { correct: 0, total: 0 };
      }

      summary[question.domain].total += 1;
      if (state.mock.answers[idx] === question.answer) {
        summary[question.domain].correct += 1;
      }
    });

    return summary;
  }

  function renderWrongReviews(limit = 5) {
    const wrongs = [];

    state.mock.questions.forEach((question, idx) => {
      const picked = state.mock.answers[idx];
      if (picked !== question.answer) {
        wrongs.push({ question, picked });
      }
    });

    if (!wrongs.length) {
      return "<p>오답이 없습니다. 모든 문항을 맞혔습니다.</p>";
    }

    return wrongs
      .slice(0, limit)
      .map(
        ({ question, picked }) => `
          <p>
            <strong>Q${question.id}.</strong> ${escapeHtml(question.question)}<br />
            내 답: ${picked === null ? "미선택" : String.fromCharCode(65 + picked)} |
            정답: ${String.fromCharCode(65 + question.answer)}
          </p>
        `
      )
      .join("");
  }

  function submitMockExam(isAutoSubmit = false) {
    if (!state.mock.active) {
      return;
    }

    if (!isAutoSubmit) {
      const ok = confirm("모의고사를 제출할까요?");
      if (!ok) {
        return;
      }
    }

    state.mock.active = false;

    if (state.mock.timerId) {
      clearInterval(state.mock.timerId);
      state.mock.timerId = null;
    }

    const total = state.mock.questions.length;
    const correct = state.mock.questions.reduce((count, question, idx) => {
      return count + (state.mock.answers[idx] === question.answer ? 1 : 0);
    }, 0);

    const score = Math.round((correct / total) * 100);
    const passScore = data.mockConfig.passScore || 72;
    const passed = score >= passScore;

    const domainSummary = summarizeByDomain();
    const domainLines = Object.entries(domainSummary)
      .map(([domain, stat]) => {
        const ratio = Math.round((stat.correct / stat.total) * 100);
        return `<span class="tag">${escapeHtml(domain)} ${ratio}% (${stat.correct}/${stat.total})</span>`;
      })
      .join(" ");

    mockResult.innerHTML = `
      <h3>${passed ? "합격권" : "보완 필요"} - ${score}% (${correct}/${total})</h3>
      <p>기준 점수: ${passScore}%</p>
      <p>${domainLines}</p>
      <h4>오답 리뷰 (최대 5문항)</h4>
      ${renderWrongReviews(5)}
      <div class="actions">
        <button id="retryMockBtn" type="button">다시 시작</button>
      </div>
    `;

    mockContainer.classList.add("hidden");
    mockResult.classList.remove("hidden");
  }

  function bindEvents() {
    glossarySearch.addEventListener("input", (event) => {
      renderGlossary(event.target.value);
    });

    drawQuestionBtn.addEventListener("click", drawPracticeQuestion);
    submitPracticeBtn.addEventListener("click", submitPracticeAnswer);
    nextPracticeBtn.addEventListener("click", drawPracticeQuestion);

    startMockBtn.addEventListener("click", startMockExam);

    mockOptions.addEventListener("change", (event) => {
      if (event.target.name !== "mockOption") {
        return;
      }
      state.mock.answers[state.mock.currentIndex] = Number(event.target.value);
    });

    mockPrevBtn.addEventListener("click", () => {
      if (state.mock.currentIndex > 0) {
        state.mock.currentIndex -= 1;
        renderMockQuestion();
      }
    });

    mockNextBtn.addEventListener("click", () => {
      if (state.mock.currentIndex < state.mock.questions.length - 1) {
        state.mock.currentIndex += 1;
        renderMockQuestion();
      }
    });

    submitMockBtn.addEventListener("click", () => submitMockExam(false));

    mockResult.addEventListener("click", (event) => {
      if (event.target.id === "retryMockBtn") {
        startMockExam();
      }
    });
  }

  async function init() {
    bindEvents();

    try {
      await loadLearningData();
      state.loaded = true;
      renderRoadmap();
      renderGlossary("");
      fillPracticeFilters();
      updatePracticeScore();
      const drillCount = data.questions.filter((question) => question.type === "drill").length;
      const mcqCount = data.questions.filter((question) => question.type !== "drill").length;
      setStatus(
        `로드 완료: 용어 ${data.glossary.length}개, 문제 ${data.questions.length}개(객관식 ${mcqCount}, TXT 드릴 ${drillCount}), 모의고사 ${data.mockConfig.totalQuestions}문항`
      );
    } catch (error) {
      console.error(error);
      setStatus("데이터 로딩 실패: 로컬 서버에서 실행 중인지 확인하세요.", true);
      drawQuestionBtn.disabled = true;
      submitPracticeBtn.disabled = true;
      nextPracticeBtn.disabled = true;
      startMockBtn.disabled = true;
    }
  }

  await init();
})();
