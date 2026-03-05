(function () {
  const data = window.AWS_SAA_DATA || { roadmap: [], glossary: [], questions: [] };

  const roadmapGrid = document.getElementById("roadmapGrid");
  const glossaryGrid = document.getElementById("glossaryGrid");
  const glossarySearch = document.getElementById("glossarySearch");

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
            <div class="qa">
              <p><strong>Q.</strong> ${escapeHtml(item.followUpQ)}</p>
              <p><strong>A.</strong> ${escapeHtml(item.followUpA)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function fillPracticeDomainFilter() {
    const domains = ["전체", ...new Set(data.questions.map((q) => q.domain))];
    practiceDomain.innerHTML = domains
      .map((domain) => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`)
      .join("");
  }

  function updatePracticeScore() {
    practiceScore.textContent = `정답 ${state.practice.correct} | 오답 ${state.practice.wrong}`;
  }

  function getPracticePool() {
    const level = practiceLevel.value;
    const domain = practiceDomain.value;

    return data.questions.filter((q) => {
      const levelMatch = level === "전체" || q.level === level;
      const domainMatch = domain === "전체" || q.domain === domain;
      return levelMatch && domainMatch;
    });
  }

  function renderPracticeQuestion(question) {
    practiceCard.classList.remove("hidden");
    practiceMeta.textContent = `${question.level} | ${question.domain} | #${question.id}`;
    practiceQuestion.textContent = question.question;
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
    practiceFeedback.className = "feedback";
    practiceFeedback.textContent = "";
  }

  function drawPracticeQuestion() {
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
    const basics = data.questions.filter((q) => q.level === "기초");
    const mids = data.questions.filter((q) => q.level === "중급");
    const exams = data.questions.filter((q) => q.level === "실전");

    let selected = [
      ...pickRandom(basics, 5),
      ...pickRandom(mids, 6),
      ...pickRandom(exams, 9)
    ];

    if (selected.length < 20) {
      const usedIds = new Set(selected.map((q) => q.id));
      const remain = data.questions.filter((q) => !usedIds.has(q.id));
      selected = [...selected, ...pickRandom(remain, 20 - selected.length)];
    }

    return shuffle(selected).slice(0, 20);
  }

  function renderMockQuestion() {
    const question = state.mock.questions[state.mock.currentIndex];
    if (!question) {
      return;
    }

    mockProgress.textContent = `문항 ${state.mock.currentIndex + 1} / ${state.mock.questions.length}`;
    mockTimer.textContent = formatTime(state.mock.remainingSec);
    mockMeta.textContent = `${question.level} | ${question.domain} | #${question.id}`;
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
    if (state.mock.timerId) {
      clearInterval(state.mock.timerId);
    }

    state.mock.active = true;
    state.mock.questions = buildMockSet();
    state.mock.answers = Array(state.mock.questions.length).fill(null);
    state.mock.currentIndex = 0;
    state.mock.remainingSec = 40 * 60;

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
        wrongs.push({
          question,
          picked
        });
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
    const passed = score >= 72;

    const domainSummary = summarizeByDomain();
    const domainLines = Object.entries(domainSummary)
      .map(([domain, stat]) => {
        const ratio = Math.round((stat.correct / stat.total) * 100);
        return `<span class="tag">${escapeHtml(domain)} ${ratio}% (${stat.correct}/${stat.total})</span>`;
      })
      .join(" ");

    mockResult.innerHTML = `
      <h3>${passed ? "합격권" : "보완 필요"} - ${score}% (${correct}/${total})</h3>
      <p>기준 점수: 72%</p>
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

  function init() {
    renderRoadmap();
    renderGlossary("");
    fillPracticeDomainFilter();
    updatePracticeScore();
    bindEvents();
  }

  init();
})();
