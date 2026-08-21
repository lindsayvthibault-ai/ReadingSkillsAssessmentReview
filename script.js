// --- Game Data Aligned to 8th Grade Unit 1 Assessment ---
const GAME_DATA = [
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Poetry Adjustment)",
    passage: "My uncle drives the backroads like he's outrunning time itself—flooring the pedal through every straightaway, slamming the brakes at every bend, never holding a steady speed.\n\nWhen you grip the door handle until your knuckles turn white, he just laughs and asks, 'Who told you life was supposed to be a smooth ride?'",
    question: "A reader is confused by the uncle's final question. Which adjustment strategy BEST helps the reader understand why the uncle asks this?",
    options: [
      "Look up local speed limits on country backroads to see if the uncle is breaking traffic laws.",
      "Annotate the detail about 'knuckles turn white' to recognize that the passenger's visible physical tension prompts the uncle's reaction.",
      "Reread the stanza to memorize the exact driving actions described.",
      "Visualize a car parked safely in a driveway to understand what 'smooth' means."
    ],
    correct: 1,
    explanation: "Annotating physical actions like gripping the handle until 'knuckles turn white' reveals the passenger's fear. The uncle asks his question because he notices this physical reaction to his erratic driving."
  },
  {
    level: 2,
    title: "LV.2 — Word Detective (Part A/B Context Clues)",
    passage: "Paragraph 1: When I was assigned the early morning shift, I tried to refuse the schedule. I was determined to win this argument and proved to my boss that I would not be forced into hours I didn't want.\n\nParagraph 2: Standing there, defiant, I told him I wouldn't work weekends. He simply smiled and reminded me that my contract was already signed.",
    question: "Which group of words from the surrounding text serves as the BEST context clues to help the reader understand the meaning of 'defiant'?",
    options: [
      "'early morning shift,' 'assigned,' and 'contract'",
      "'refused,' 'determined to win,' and 'would not be forced'",
      "'standing there,' 'smiled,' and 'reminded me'",
      "'boss,' 'schedule,' and 'hours'"
    ],
    correct: 1,
    explanation: "'Defiant' means boldly resisting or challenging authority[cite: 2]. Words like 'refused,' 'determined to win,' and 'would not be forced' directly show that resistant attitude in action[cite: 2]."
  },
  {
    level: 3,
    title: "LV.3 — Dictionary Dash (Multiple Meanings)",
    passage: "Reading Passage Snippet:\n'After three exhausting months of double shifts, dealing with angry customers, and cleaning late into the night, I felt gritty and real. I had earned every single cent.'\n\nDictionary Entry:\ngritty (adjective)\n1. containing small, rough particles or sand\n2. showing courage, resolve, and toughness of character\n3. unpleasantly dirty or messy\n4. having a harsh, unpleasant texture",
    question: "As used in the reading snippet, which dictionary definition BEST matches the meaning of 'gritty'?",
    options: [
      "Definition 1",
      "Definition 2",
      "Definition 3",
      "Definition 4"
    ],
    correct: 1,
    explanation: "In this context, 'gritty' describes feeling tough and resilient after working hard through challenging circumstances (Definition 2)[cite: 2]. While the work was messy, the narrator is reflecting on their personal growth and determination[cite: 2]."
  },
  {
    level: 4,
    title: "LV.4 — Evidence Hunt (Key Ideas & Inferences)",
    passage: "When my mother refused to let me buy the designer jacket, I went straight out and got a job at the local diner. I thought I was taking control of my life. But after working five evening shifts a week, maintaining my grades, and spending all my earnings on basic expenses, I realized that independence comes with unexpected burdens.",
    question: "Which detail from the passage BEST supports the key idea that gaining independence often brings unexpected challenges?",
    options: [
      "The narrator applied for a job at the local diner.",
      "The narrator's mother refused to purchase the designer jacket.",
      "The narrator realized independence required balancing five work shifts with grades and expenses.",
      "The narrator wanted to take control of their own decisions."
    ],
    correct: 2,
    explanation: "Option C directly highlights the unexpected reality and difficult burden of balancing work, school, and expenses that came with earning their own freedom[cite: 2]."
  },
  {
    level: 5,
    title: "LV.5 — Sentence Sort (Structure Analysis)",
    passage: "Examine the following statement carefully:\n\n'Submerged up to my knees in soapy water while scrubbing the restaurant floor.'",
    question: "Determine whether the statement above is a complete sentence or a sentence fragment.",
    options: [
      "Complete Sentence",
      "Sentence Fragment"
    ],
    correct: 1,
    explanation: "This is a Sentence Fragment[cite: 2]. Although it contains action ('submerged,' 'scrubbing'), it lacks a subject performing the verb (e.g., 'I was submerged...') to express a complete thought[cite: 2]."
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
