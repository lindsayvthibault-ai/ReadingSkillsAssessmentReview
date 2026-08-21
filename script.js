// --- Game State & Questions Data ---
const GAME_DATA = [
  {
    level: 1,
    title: "LV.1 — Fix the Confusion",
    passage: "The arctic fox adapts to severe cold using thick fur and countercurrent heat exchange in its paws. When deep snow covers the ground, tracking prey becomes exceedingly difficult, forcing the fox to rely heavily on its extraordinary hearing rather than sight.",
    question: "When meaning breaks down in a complex passage, which strategy best helps fix confusion about how the fox hunts in deep snow?",
    options: [
      "Skip the section completely and guess the answer.",
      "Reread the last sentence and identify the cause-and-effect relationship between deep snow and hearing.",
      "Memorize every word in the paragraph.",
      "Only read the first sentence of the paragraph."
    ],
    correct: 1,
    explanation: "Rereading tricky sentences to identify cause-and-effect helps clear up confusion when meaning breaks down."
  },
  {
    level: 2,
    title: "LV.2 — Word Detective",
    passage: "The scientist's claims were met with extreme skepticism by the panel; they demanded empirical evidence before accepting any of her unexpected findings.",
    question: "Based on context clues in the sentence, what is the best definition of 'skepticism'?",
    options: [
      "Enthusiastic agreement and praise",
      "Doubt or disbelief",
      "Complete indifference",
      "Immediate acceptance"
    ],
    correct: 1,
    explanation: "The panel's demand for 'empirical evidence before accepting' shows they held doubt or disbelief."
  },
  {
    level: 3,
    title: "LV.3 — Dictionary Dash",
    passage: "Dictionary Entry: draft (verb)\n1. To select for a specific purpose or military service.\n2. To compose or write a preliminary version of a document.\n3. (noun) A current of cool air in a room.\n4. (noun) The depth of water a ship needs to float.",
    question: "Which definition of 'draft' is used in this sentence: 'The team spent three hours trying to draft the first chapter of their report'?",
    options: [
      "Definition 1",
      "Definition 2",
      "Definition 3",
      "Definition 4"
    ],
    correct: 1,
    explanation: "Definition 2 refers to writing or composing a preliminary version of a document."
  },
  {
    level: 4,
    title: "LV.4 — Evidence Hunt",
    passage: "Maya noticed the dark clouds gathering on the horizon and the sudden drop in temperature. She quickly gathered her outdoor gear, secured the lawn furniture, and brought the dog inside.",
    question: "Which piece of textual evidence best supports the inference that a storm is approaching?",
    options: [
      "Maya brought the dog inside.",
      "Maya gathered her outdoor gear.",
      "Dark clouds gathering on the horizon and a sudden temperature drop.",
      "Securing the lawn furniture in the yard."
    ],
    correct: 2,
    explanation: "Dark clouds and a sudden drop in temperature are direct environmental evidence of an incoming storm."
  },
  {
    level: 5,
    title: "LV.5 — Sentence Sort",
    passage: "Determine whether the statement below is a complete sentence or a sentence fragment.",
    question: "'Running through the rain without an umbrella or rain jacket.'",
    options: [
      "Complete Sentence",
      "Sentence Fragment"
    ],
    correct: 1,
    explanation: "This is a fragment because it lacks a subject performing the action."
  }
];

let currentLevelIndex = 0;
let score = 0;
let lives = 3;
let timer = null;
let timeLeft = 30;

// --- DOM Elements ---
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
      <h3>Reading Passage</h3>
      <p>${data.passage}</p>
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
        <div class="cq-feedback-head">✓ Correct!</div>
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
          <p>${data.explanation}</p>
          <button class="cq-btn cq-next-btn" onclick="showEndScreen(false)">Game Over</button>
        </div>
      `;
    } else {
      feedbackArea.innerHTML = `
        <div class="cq-feedback wrong">
          <div class="cq-feedback-head">✗ Incorrect</div>
          <p>${data.explanation}</p>
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
        <p>${data.explanation}</p>
        <button class="cq-btn cq-next-btn" onclick="showEndScreen(false)">Game Over</button>
      </div>
    `;
  } else {
    feedbackArea.innerHTML = `
      <div class="cq-feedback wrong">
        <div class="cq-feedback-head">⏰ Time's Up!</div>
        <p>${data.explanation}</p>
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
  const sub = won ? "Mastery achieved across all reading skill modules!" : "Nice try! Review the concepts and try again.";

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
