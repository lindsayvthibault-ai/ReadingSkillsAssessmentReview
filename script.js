// --- Game Data Aligned to 8th Grade Unit 1 Assessment (Original Texts) ---
const GAME_DATA = [
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Poetry Adjustment)",
    passage: "Tacking Against the Wind\n\nMy grandfather handles the tiller\nthe way he takes on life,\nhauls the mainsheet tight,\nleans hard into the swell,\nspray flying, wind howling—\nhold on, let go, hold on, let go—\nWhen you clutch the wooden gunwale until your knuckles ache,\nhe cuts a sharp look through the mist:\nWho promised you calm seas every time we set sail?",
    question: "A reader is confused by the grandfather's final question in the poem. Which adjustment strategy BEST helps the reader understand why he asks it?",
    options: [
      "Look up Coast Guard safety regulations to determine if sailing in choppy water is legal.",
      "Annotate the action of 'clutching the wooden gunwale' to recognize that the narrator's visible physical fear prompts the grandfather's question.",
      "Reread the poem out loud to memorize the rhyme scheme and line lengths.",
      "Visualize a boat tied up at a quiet harbor dock to understand what calm seas look like."
    ],
    correct: 1,
    explanation: "Annotating the physical action of clutching the gunwale until knuckles ache reveals the narrator's intense fear[cite: 2]. The grandfather asks his question in response to seeing that physical tension during the rough ride[cite: 2]."
  },
  {
    level: 2,
    title: "LV.2 — Word Detective (Part A/B Context Clues)",
    passage: "Paragraph 1: When the committee demanded that I simplify my mural design, I stood my ground. I had worked too hard on the composition to let them strip away its meaning, and I refused to yield to their pressure.\n\nParagraph 2: Standing before the review board, resolute, I defended every brushstroke. The chairperson smiled faintly and reminded me that the wall belonged to the school, not to me.",
    question: "Which group of phrases from the surrounding text serves as the BEST context clues to help the reader understand the meaning of 'resolute'?",
    options: [
      "'mural design,' 'composition,' and 'brushstroke'",
      "'stood my ground,' 'refused to yield,' and 'defended every brushstroke'",
      "'standing before,' 'smiled faintly,' and 'reminded me'",
      "'committee,' 'review board,' and 'chairperson'"
    ],
    correct: 1,
    explanation: "'Resolute' means admirably purposeful, determined, and unwavering[cite: 2]. Words like 'stood my ground,' 'refused to yield,' and 'defended every brushstroke' directly illustrate that firm determination[cite: 2]."
  },
  {
    level: 3,
    title: "LV.3 — Dictionary Dash (Multiple Meanings)",
    passage: "Reading Passage Snippet:\n'Stepping onto the empty stage after the chaotic dress rehearsal, the sixteen-year-old stage manager realized she couldn't rely on luck. By opening night, after solving dozens of technical failures, she felt seasoned.'\n\nDictionary Entry:\nseasoned (adjective)\n1. treated or aged for use (such as timber or wood)\n2. matured or experienced through practice and discipline\n3. flavored or enhanced with salt, herbs, or spices\n4. dried thoroughly to prevent warping",
    question: "As used in the reading snippet, which dictionary definition BEST matches the meaning of 'seasoned'?",
    options: [
      "Definition 1",
      "Definition 2",
      "Definition 3",
      "Definition 4"
    ],
    correct: 1,
    explanation: "In this context, 'seasoned' describes someone who has gained experience and capability by working through difficult challenges (Definition 2)[cite: 2]."
  },
  {
    level: 4,
    title: "LV.4 — Evidence Hunt (Key Ideas & Inferences)",
    passage: "Determined to prove I was ready for the mountain expedition, I spent four weeks hauling a fifty-pound pack through the heat. I imagined reaching the summit would feel like pure triumph. But when torrential rain soaked my gear on night three and my boots fell apart miles from camp, I learned that true endurance isn't about reaching the top—it's about pushing through the misery when everything goes wrong.",
    question: "Which detail from the passage BEST supports the key idea that growth comes from confronting unexpected hardship?",
    options: [
      "The narrator spent four weeks training with a fifty-pound pack.",
      "The narrator envisioned that reaching the summit would feel like pure triumph.",
      "The narrator pushed through miles of soaked gear and ruined boots far from camp.",
      "The narrator decided to sign up for a mountain expedition."
    ],
    correct: 2,
    explanation: "Option C directly highlights the real, unexpected hardship (ruined gear and broken boots miles from camp) that taught the narrator the true meaning of endurance[cite: 2]."
  },
  {
    level: 5,
    title: "LV.5 — Sentence Sort (Structure Analysis)",
    passage: "Examine the following statement carefully:\n\n'Trudging through three miles of thick mud with a heavy wooden frame on my shoulders.'",
    question: "Determine whether the statement above is a complete sentence or a sentence fragment.",
    options: [
      "Complete Sentence",
      "Sentence Fragment"
    ],
    correct: 1,
    explanation: "This is a Sentence Fragment[cite: 2]. Although it contains action words ('trudging'), it lacks a clear subject performing the main action (e.g., 'We were trudging...') to form a complete thought[cite: 2]."
  }
];

let currentLevelIndex = 0;
let score = 0;
let lives = 3;
let timer = null;
let timeLeft = 30;

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', startGame);
  }
});

function startGame() {
  const startScreen = document.getElementById('start-screen');
  if (startScreen) {
    startScreen.style.display = 'none';
  }
  
  currentLevelIndex = 0;
  score = 0;
  lives = 3;
  loadQuestion();
}

function loadQuestion() {
  const container = document.getElementById('game-container');
  if (!container) return;

  if (currentLevelIndex >= GAME_DATA.length) {
    showEndScreen(true);
    return;
  }

  const data = GAME_DATA[currentLevelIndex];
  timeLeft = 30;

  container.innerHTML = `
    <!-- HUD -->
    <div class="cq-hud">
      <div class="cq-hud-item">
        <i data-lucide="heart" style="color:#FF6FA0;"></i> Lives: ${'❤️'.repeat(lives)}
      </div>
      <div class="cq-hud-item">
        <i data-lucide="trophy" style="color:#FFC857;"></i> Score: ${score}
      </div>
      <div class="cq-hud-item">
        <i data-lucide="clock" style="color:#5CE7DE;"></i> Time: <span id="timer-display">${timeLeft}s</span>
      </div>
    </div>

    <!-- Level Header -->
    <div class="cq-level-head">
      <h2>${data.title}</h2>
      <span>Level ${currentLevelIndex + 1} of ${GAME_DATA.length}</span>
    </div>

    <!-- Passage Box -->
    <div class="cq-passage">
      <h3>Reading Passage / Text Snippet</h3>
      <p style="white-space: pre-line;">${data.passage}</p>
    </div>

    <!-- Question Card -->
    <div class="cq-card">
      <p class="cq-question">${data.question}</p>
      <div class="cq-options">
        ${data.options.map((opt, idx) => `
          <button class="cq-opt" onclick="selectOption(${idx})">
            <span class="cq-opt-letter">${String.fromCharCode(65 + idx)}.</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="feedback-area"></div>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
      timerDisplay.innerText = `${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function selectOption(selectedIndex) {
  clearInterval(timer);
  const data = GAME_DATA[currentLevelIndex];
  const buttons = document.querySelectorAll('.cq-opt');
  const feedbackArea = document.getElementById('feedback-area');

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === data.correct) {
    score += 100 + timeLeft * 2;
    buttons[selectedIndex].classList.add('correct');
    feedbackArea.innerHTML = `
      <div class="cq-feedback correct">
        <div class="cq-feedback-head">✓ Correct Strategy!</div>
        <p>${data.explanation}</p>
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Level →</button>
      </div>
    `;
  } else {
    lives--;
    buttons[selectedIndex].classList.add('wrong');
    buttons[data.correct].classList.add('correct');

    if (lives <= 0) {
      feedbackArea.innerHTML = `
        <div class="cq-feedback wrong">
          <div class="cq-feedback-head">✗ Incorrect</div>
          <p><b>Rationale:</b> ${data.explanation}</p>
          <button class="cq-btn cq-next-btn" onclick="showEndScreen(false)">Game Over</button>
        </div>
      `;
    } else {
      feedbackArea.innerHTML = `
        <div class="cq-feedback wrong">
          <div class="cq-feedback-head">✗ Incorrect</div>
          <p><b>Rationale:</b> ${data.explanation}</p>
          <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Continue →</button>
        </div>
      `;
    }
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function handleTimeout() {
  lives--;
  const data = GAME_DATA[currentLevelIndex];
  const buttons = document.querySelectorAll('.cq-opt');
  const feedbackArea = document.getElementById('feedback-area');

  buttons.forEach(btn => btn.disabled = true);
  buttons[data.correct].classList.add('correct');

  if (lives <= 0) {
    feedbackArea.innerHTML = `
      <div class="cq-feedback wrong">
        <div class="cq-feedback-head">⏰ Time's Up!</div>
        <p><b>Rationale:</b> ${data.explanation}</p>
        <button class="cq-btn cq-next-btn" onclick="showEndScreen(false)">Game Over</button>
      </div>
    `;
  } else {
    feedbackArea.innerHTML = `
      <div class="cq-feedback wrong">
        <div class="cq-feedback-head">⏰ Time's Up!</div>
        <p><b>Rationale:</b> ${data.explanation}</p>
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Continue →</button>
      </div>
    `;
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function nextQuestion() {
  currentLevelIndex++;
  loadQuestion();
}

function showEndScreen(won) {
  clearInterval(timer);
  const container = document.getElementById('game-container');
  if (!container) return;

  const title = won ? "QUEST COMPLETE!" : "GAME OVER";
  const sub = won ? "Mastery achieved across all Unit 1 reading skill modules!" : "Review the reading adjustment strategies and try again.";

  container.innerHTML = `
    <div class="cq-center">
      <h1 class="cq-title cq-pixel">${title}</h1>
      <p class="cq-sub">${sub}</p>
      
      <div class="cq-tier">
        Final Score: <b>${score} Points</b>
      </div>

      <button class="cq-btn" onclick="location.reload()">
        Play Again 🔄
      </button>
    </div>
  `;
}
