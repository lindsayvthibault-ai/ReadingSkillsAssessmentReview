// --- Game Data Aligned to 8th Grade Unit 1 Reading Skills ---
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
    correctRationale: "Great reading move! Annotating the narrator's physical reaction ('knuckles ache') shows their intense fear. The grandfather asks his question specifically because he notices that fear during the rough sail.",
    incorrectRationale: "Not quite. Options A and D rely on outside facts or calm visuals that ignore the current action. Option C focuses on sound/rhyme rather than meaning. Annotating the narrator's physical reaction (knuckles aching) reveals the fear that prompted the grandfather's question."
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
    correctRationale: "Spot on! 'Resolute' means determined and unwavering. Words like 'stood my ground,' 'refused to yield,' and 'defended' show that firm, unyielding attitude in action.",
    incorrectRationale: "Look closer at the character's actions. Options A and D just list nouns (objects/people), and Option C shows the board's reaction. Option B contains the active verbs ('stood my ground,' 'refused to yield') that show what being 'resolute' actually looks like."
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
    correctRationale: "Excellent analysis! In this context, 'seasoned' describes someone who has gained experience and maturity through practice and overcoming obstacles (Definition 2).",
    incorrectRationale: "Pay attention to how the word describes the person. Definitions 1, 3, and 4 apply to physical materials (wood or food). Definition 2 is correct because the stage manager gained maturity and experience by solving problems."
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
    correctRationale: "You nailed it! Option C directly highlights the real, unexpected hardship (soaked gear and destroyed boots miles from safety) that taught the narrator what endurance actually means.",
    incorrectRationale: "Check which option shows an actual unexpected hardship. Options A, B, and D show planned preparation or expectations. Option C is the only detail describing the real-world struggle that forced the narrator to grow."
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
    correctRationale: "Correct! This is a Sentence Fragment. It contains an action word ('trudging'), but it lacks a subject linked to a main predicate (e.g., 'I was trudging...') to express a complete thought.",
    incorrectRationale: "Be careful with action words! While 'trudging' looks like a verb, this line lacks a subject performing the verb (e.g., 'We were trudging...'). Because it cannot stand alone as a complete thought, it is a Sentence Fragment."
  }
];

let currentLevelIndex = 0;
let score = 0;
let lives = 3;
let timer = null;
let timeLeft = 60; // Standard 60s allocation

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
  timeLeft = 60; // Reset timer for new level

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
        <i data-lucide="clock" style="color:#5CE7DE;"></i> Time: <span id="timer-display">60s</span>
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
        <p><b>Why it works:</b> ${data.correctRationale}</p>
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Level →</button>
      </div>
    `;
  } else {
    lives--;
    buttons[selectedIndex].classList.add('wrong');
    buttons[data.correct].classList.add('correct');

    const nextAction = lives <= 0 ? "showEndScreen(false)" : "nextQuestion()";
    const buttonText = lives <= 0 ? "View Results" : "Continue →";

    feedbackArea.innerHTML = `
      <div class="cq-feedback wrong">
        <div class="cq-feedback-head">✗ Strategy Check</div>
        <p><b>Rationale:</b> ${data.incorrectRationale}</p>
        <button class="cq-btn cq-next-btn" onclick="${nextAction}">${buttonText}</button>
      </div>
    `;
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

  const nextAction = lives <= 0 ? "showEndScreen(false)" : "nextQuestion()";
  const buttonText = lives <= 0 ? "View Results" : "Continue →";

  feedbackArea.innerHTML = `
    <div class="cq-feedback wrong">
      <div class="cq-feedback-head">⏰ Time's Up!</div>
      <p><b>Rationale:</b> ${data.incorrectRationale}</p>
      <button class="cq-btn cq-next-btn" onclick="${nextAction}">${buttonText}</button>
    </div>
  `;

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
  const sub = won ? "You successfully applied key reading strategies across all levels!" : "Review your strategies and give it another shot.";

  container.innerHTML = `
    <div class="cq-center">
      <h1 class="cq-title cq-pixel">${title}</h1>
      <p class="cq-sub">${sub}</p>
      
      <div class="cq-tier" style="margin-bottom: 20px;">
        Final Score: <b>${score} Points</b>
      </div>

      <!-- Post-Game Skill Reflection Module -->
      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 20px; text-align: left; max-width: 600px; margin: 0 auto 25px auto;">
        <h3 style="color: #5CE7DE; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
          🧠 Reading Skill Reflection Checklist
        </h3>
        <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 15px;">Before taking your assessment, review these key reading moves:</p>
        <ul style="font-size: 0.9rem; line-height: 1.6; color: #eee; padding-left: 20px; margin-bottom: 0;">
          <li><b>When confused by poetry:</b> Annotate physical actions or character reactions to reveal emotional context.</li>
          <li><b>For context clues:</b> Highlight action verbs in surrounding sentences to see what the word looks like in practice.</li>
          <li><b>For dictionary definitions:</b> Match the definition to whether the word describes a <i>person</i>, an <i>object</i>, or a <i>metaphor</i>.</li>
          <li><b>For textual evidence:</b> Choose the detail that directly causes character growth, not just background facts.</li>
        </ul>
      </div>

      <button class="cq-btn" onclick="location.reload()">
        Play Again 🔄
      </button>
    </div>
  `;
}
