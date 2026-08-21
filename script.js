// --- Game Data Aligned to 8th Grade Unit 1 Reading Skills (15 Questions) ---
const GAME_DATA = [
  // --- LEVEL 1: FIX THE CONFUSION ---
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Q1)",
    passage: "Passage 1: Learning to Skate\n\nMy grandmother taught herself to skate\nthe way she learned to trust,\npush off hard, into the wind,\nwobble, glide,\ncatch yourself, wobble, glide—\nWhen you grip the rail along the boards\nshe gives you a look that asks,\nWho told you falling doesn't count?",
    question: "A reader reaches the final line 'Who told you falling doesn't count?' and doesn't understand why the grandmother asks it. What's the best next step?",
    options: [
      "Annotate the line about 'gripping the rail' to note that it shows the speaker feels nervous or unsteady.",
      "Use background knowledge about ice skating competitions to see if the grandmother is being literal.",
      "Ask why the grandmother learned to skate by herself instead of taking lessons.",
      "Re-read the poem aloud, focusing only on line breaks and punctuation."
    ],
    correct: 0,
    correctRationale: "Great reading move! Annotating the narrator's physical action ('gripping the rail') shows their nervousness. The grandmother's question specifically responds to that visible fear.",
    incorrectRationale: "Not quite. Options B and C focus on outside facts or backstory, while Option D focuses only on structure rather than meaning. Annotating 'gripping the rail' reveals the unsteady feelings that prompt the grandmother's question."
  },
  {
    level: 2,
    title: "LV.1 — Fix the Confusion (Q2)",
    passage: "Passage 1: Learning to Skate\n\nMy grandmother taught herself to skate\nthe way she learned to trust,\npush off hard, into the wind,\nwobble, glide,\ncatch yourself, wobble, glide—\nWhen you grip the rail along the boards\nshe gives you a look that asks,\nWho told you falling doesn't count?",
    question: "One student thinks 'wobble, glide, catch yourself, wobble, glide' means the grandmother kept crashing badly. How can she correct this misunderstanding?",
    options: [
      "Look up the technical figure-skating definitions of 'wobble' and 'glide.'",
      "Visualize an empty ice rink to picture where the grandmother practiced.",
      "Reread the lines and notice how 'wobble, glide' describe the natural rhythm of learning to skate, not repeated falling.",
      "Reread the title to confirm the poem is only about skating equipment."
    ],
    correct: 2,
    correctRationale: "Spot on! Rereading the lines in context shows that 'wobble, glide' describes the back-and-forth rhythm of practice and learning, rather than continuous crashing.",
    incorrectRationale: "Look back at the rhythm of the words. Looking up technical terms (A), picturing an empty rink (B), or checking the title (D) don't fix the confusion. Rereading shows 'wobble, glide' represents the natural back-and-forth process of learning."
  },
  {
    level: 3,
    title: "LV.1 — Fix the Confusion (Q3)",
    passage: "Passage 1: Learning to Skate\n\nMy grandmother taught herself to skate\nthe way she learned to trust,\npush off hard, into the wind,\nwobble, glide,\ncatch yourself, wobble, glide—\nWhen you grip the rail along the boards\nshe gives you a look that asks,\nWho told you falling doesn't count?",
    question: "A reader can't connect 'the way she learned to trust' to the rest of the poem. Which strategy helps make that connection?",
    options: [
      "Reread the poem's ending to notice that learning to skate becomes a stand-in for learning to trust oneself despite falling.",
      "Look up 'trust' in the dictionary to find its most common definition.",
      "Predict what sport the poem will describe next.",
      "Skim the poem quickly to count the total number of lines."
    ],
    correct: 0,
    correctRationale: "Excellent connection! Linking the physical act of skating to the poem's ending reveals that learning to skate is a metaphor for learning self-trust through mistakes.",
    incorrectRationale: "Remember to look for how ideas connect across the poem. Looking up a basic definition (B), predicting a new sport (C), or counting lines (D) won't help you bridge the physical action to the main message."
  },

  // --- LEVEL 2: WORD DETECTIVE ---
  {
    level: 4,
    title: "LV.2 — Word Detective (Q4)",
    passage: "Passage 2 — Paragraph 2:\nThe moment I clipped on his leash, Biscuit took off toward the mail carrier, dragging me behind him like a kite with no string. My sneakers skidded across wet grass. I dug in my heels, leaned back with all my weight, and somehow wrestled him to a stop three feet from the mail carrier's ankles.",
    question: "In paragraph 2, what does the word 'wrestled' most nearly mean as used in the text?",
    options: [
      "gently guided",
      "politely asked",
      "quickly abandoned",
      "struggled with great effort to control"
    ],
    correct: 3,
    correctRationale: "You got it! Actions like 'skidded across wet grass' and 'dug in my heels' prove that 'wrestled' means fighting with great physical effort to regain control.",
    incorrectRationale: "Check the surrounding details. The narrator is skidding across wet grass and leaning back with all their weight—this describes a physical struggle for control, not a gentle or polite interaction."
  },
  {
    level: 5,
    title: "LV.2 — Word Detective (Q5)",
    passage: "Passage 2 — Paragraph 2:\nThe moment I clipped on his leash, Biscuit took off toward the mail carrier, dragging me behind him like a kite with no string. My sneakers skidded across wet grass. I dug in my heels, leaned back with all my weight, and somehow wrestled him to a stop three feet from the mail carrier's ankles.",
    question: "Which detail BEST helps the reader understand the meaning of 'wrestled' in paragraph 2?",
    options: [
      "'dragging me behind him like a kite with no string'",
      "'My sneakers skidded across wet grass. I dug in my heels, leaned back with all my weight'",
      "'the mail carrier's ankles'",
      "'That became the pattern all summer'"
    ],
    correct: 1,
    correctRationale: "Perfect evidence selection! Digging in heels and leaning back with full body weight directly describes the intense physical effort summarized by 'wrestled.'",
    incorrectRationale: "Option A describes what Biscuit was doing, and Options C and D just state locations or patterns. Option B contains the exact physical actions that define 'wrestled.'"
  },
  {
    level: 6,
    title: "LV.2 — Word Detective (Q6)",
    passage: "Passage 2 — Paragraph 9:\nBy August, I had saved enough for the bike. I rode it straight to Miller's, paid in crumpled dollar bills, and pedaled home so fast the wind stung my eyes. But somewhere along the way, I realized the bike wasn't really the point anymore. I had learned to stick with something hard, even on the days I wanted to walk away.",
    question: "In paragraph 9, the narrator feels 'the bike wasn't really the point anymore.' Which group of phrases from the story best supports this idea?",
    options: [
      "'paid in crumpled dollar bills,' 'pedaled home,' 'wind stung my eyes'",
      "'six-block radius,' 'rosebush,' 'poodle named Duchess'",
      "'goldfish, Pretzel,' 'seventy-pound mutt,' 'rocket'",
      "'sprinting turned into jogging,' 'wrestling turned into gentle tugs,' 'stick with something hard'"
    ],
    correct: 3,
    correctRationale: "Awesome work! These phrases trace the narrator's personal growth, perseverance, and skill building over the summer, which became more important than the bike itself.",
    incorrectRationale: "Look for phrases that show internal growth. Options A, B, and C focus on physical items or specific events. Option D shows how the narrator grew stronger and learned to persevere."
  },
  {
    level: 7,
    title: "LV.2 — Word Detective (Q7)",
    passage: "Passage 2 — Paragraph 4:\nI didn't need the job. My parents kept telling me to focus on my summer reading list instead. But there was this bike. A sleek, ten-speed racer in the window of Miller's Cycle Shop, painted the exact shade of blue as the sky right before a storm. I wanted that bike more than I had ever wanted anything.",
    question: "In paragraph 4, what does the word 'sleek' most nearly mean as used in the text?",
    options: [
      "old and worn",
      "loud and colorful",
      "smooth and streamlined",
      "heavy and slow"
    ],
    correct: 2,
    correctRationale: "Right on! A ten-speed racer styled like a sky before a storm represents a high-quality, smooth, and aerodynamic design.",
    incorrectRationale: "Consider what a high-end 'ten-speed racer' in a display window looks like. It is built for speed and style, meaning smooth and streamlined rather than old, loud, or heavy."
  },

  // --- LEVEL 3: DICTIONARY DASH ---
  {
    level: 8,
    title: "LV.3 — Dictionary Dash (Q8)",
    passage: "Passage 2 — Paragraph 3:\nThat became the pattern all summer—sprint, skid, wrestle, stop. By the end of each walk, I was breathless, grass-stained, and covered in slobber, but the dogs always made it home in one piece.\n\nDictionary Entry:\npattern (noun)\n1. a decorative design repeated on fabric or paper\n2. a regular and repeated way in which something happens\n3. a model or guide for making something\n4. a series of shapes forming a design",
    question: "As used in paragraph 3 ('That became the pattern all summer'), which dictionary definition fits best?",
    options: [
      "definition 1",
      "definition 2",
      "definition 3",
      "definition 4"
    ],
    correct: 1,
    correctRationale: "Great job! The narrator is describing a daily sequence of repeated actions (sprint, skid, wrestle, stop), which matches Definition 2.",
    incorrectRationale: "Pay attention to context. Definitions 1, 3, and 4 refer to visual designs, crafts, or fabrics. The text describes a repeated daily sequence of events (Definition 2)."
  },
  {
    level: 9,
    title: "LV.3 — Dictionary Dash (Q9)",
    passage: "Passage 2 — Paragraph 7:\nBy week two, I wanted to quit. Biscuit had pulled me into a rosebush. A poodle named Duchess had refused to walk for twenty straight minutes out of pure spite.\n\nDictionary Entry:\nspite (noun)\n1. a strong desire to hurt or annoy someone\n2. kindness shown despite difficulty\n3. a small amount of something\n4. a sudden feeling of fear",
    question: "As used in paragraph 7 ('out of pure spite'), which dictionary definition fits best?",
    options: [
      "definition 1",
      "definition 2",
      "definition 3",
      "definition 4"
    ],
    correct: 0,
    correctRationale: "Spot on! Duchess stubbornness was done purposefully to be annoying, fitting Definition 1.",
    incorrectRationale: "Look at the character's attitude. The dog is stubbornly refusing to move just to frustrate the walker. This shows a desire to annoy (Definition 1)."
  },
  {
    level: 10,
    title: "LV.3 — Dictionary Dash (Q10)",
    passage: "Passage 2 — Paragraph 8:\nSo I kept walking. Every dog, every morning, rain or shine. Slowly, the sprinting turned into jogging. The wrestling turned into gentle tugs on the leash. Even Biscuit started trotting beside me instead of dragging me down the block.\n\nDictionary Entry:\ntrot (verb)\n1. to move at a speed between a walk and a run, with regular steps\n2. to run away quickly out of fear\n3. to walk with great difficulty\n4. to jump repeatedly in place",
    question: "As used in paragraph 8 ('started trotting beside me'), which dictionary definition fits best?",
    options: [
      "definition 1",
      "definition 2",
      "definition 3",
      "definition 4"
    ],
    correct: 0,
    correctRationale: "Excellent! 'Trotting' describes Biscuit moving calmly at an even, controlled pace between a walk and a run right beside the walker.",
    incorrectRationale: "Notice the improvement in the dog's behavior. Biscuit is no longer dragging or running away in fear; he is moving calmly at an even pace (Definition 1)."
  },
  {
    level: 11,
    title: "LV.3 — Dictionary Dash (Q11)",
    passage: "Passage 2 — Paragraph 9:\nBy August, I had saved enough for the bike. I rode it straight to Miller's, paid in crumpled dollar bills, and pedaled home so fast the wind stung my eyes.\n\nDictionary Entry:\ncrumpled (adjective)\n1. neatly folded and pressed\n2. torn into small pieces\n3. crushed into creases or wrinkles\n4. brand new and unused",
    question: "As used in paragraph 9 ('paid in crumpled dollar bills'), which definition fits best?",
    options: [
      "definition 1",
      "definition 2",
      "definition 3",
      "definition 4"
    ],
    correct: 2,
    correctRationale: "You got it! Paper money carried around in pockets during summer labor becomes wrinkled and creased (Definition 3).",
    incorrectRationale: "Think about cash stored in pockets during a busy summer. It won't be neatly pressed or brand new, nor torn into unusable pieces—it will be creased and wrinkled (Definition 3)."
  },

  // --- LEVEL 4: EVIDENCE HUNT ---
  {
    level: 12,
    title: "LV.4 — Evidence Hunt (Q12)",
    passage: "Passage 2 — Paragraphs 1–3:\nI was not a dog person... Biscuit, a seventy-pound mutt with the energy of a rocket... dragged me behind him like a kite with no string. My sneakers skidded across wet grass. I dug in my heels, leaned back with all my weight, and somehow wrestled him to a stop... By the end of each walk, I was breathless, grass-stained, and covered in slobber.",
    question: "Look back at paragraphs 1-3. Which moment best shows that walking Biscuit was physically demanding?",
    options: [
      "Biscuit was a seventy-pound mutt with a lot of energy.",
      "The dogs always made it home safely.",
      "The narrator had never owned a big dog before.",
      "The narrator was dragged, skidded across grass, and had to wrestle Biscuit to a stop."
    ],
    correct: 3,
    correctRationale: "Bullseye! Option D lists the actual physical struggles experienced by the narrator, making it the strongest evidence.",
    incorrectRationale: "Look for direct evidence of physical strain. Options A and C provide background descriptions, and Option B states the outcome. Option D shows the active physical exhaustion."
  },
  {
    level: 13,
    title: "LV.4 — Evidence Hunt (Q13)",
    passage: "Passage 2 — Paragraph 9:\nBy August, I had saved enough for the bike. I rode it straight to Miller's, paid in crumpled dollar bills, and pedaled home so fast the wind stung my eyes. But somewhere along the way, I realized the bike wasn't really the point anymore. I had learned to stick with something hard, even on the days I wanted to walk away.",
    question: "The story suggests that earning something yourself can change how much it means to you. Which moment best shows this?",
    options: [
      "The narrator's dad reads the newspaper after saying no to buying the bike.",
      "The narrator signs up to walk every dog within six blocks.",
      "By the end of the summer, the narrator realizes the bike 'wasn't really the point anymore' after learning to stick with something hard.",
      "Biscuit starts trotting beside the narrator instead of dragging her."
    ],
    correct: 2,
    correctRationale: "Spot on! Option C directly captures the narrator's reflection on how overcoming a hard challenge altered their perspective on value.",
    incorrectRationale: "Options A, B, and D describe plot events or secondary character actions. Option C is the reflection that directly reveals how earning the bike changed its true value."
  },
  {
    level: 14,
    title: "LV.4 — Evidence Hunt (Q14)",
    passage: "Passage 2 Overview:\nFather's reactions across the story:\n- Refuses to buy the bike and tells her to earn it.\n- Reminds her she isn't allowed to quit halfway.\n- Says nothing when she comes home scraped and upset, letting her make her own choice.\n- Goes back to reading his newspaper after their conversation.",
    question: "Three of these details support the idea that the narrator's father wanted her to learn responsibility. Which one does NOT?",
    options: [
      "He refuses to buy the bike and tells her to earn it herself.",
      "He reminds her she isn't allowed to quit once she starts.",
      "He says nothing when she comes home upset, letting her decide to keep going.",
      "He goes back to reading his newspaper after their conversation."
    ],
    correct: 3,
    correctRationale: "Correct! Reading a newspaper is just a background action; it doesn't teach or enforce responsibility like the other three actions do.",
    incorrectRationale: "Be careful! Options A, B, and C all actively show the father pushing or expecting his daughter to take accountability. Option D is an incidental action."
  },

  // --- LEVEL 5: SENTENCE SORT ---
  {
    level: 15,
    title: "LV.5 — Sentence Sort (Q15)",
    passage: "Review these four excerpts from the practice packet:\n1. 'I dug in my heels.'\n2. 'Grass-stained and covered in slobber.'\n3. 'The dogs always made it home in one piece.'\n4. 'I had saved enough for the bike.'",
    question: "Which of the statements above is a Sentence Fragment?",
    options: [
      "'I dug in my heels.'",
      "'Grass-stained and covered in slobber.'",
      "'The dogs always made it home in one piece.'",
      "'I had saved enough for the bike.'"
    ],
    correct: 1,
    correctRationale: "Bingo! 'Grass-stained and covered in slobber' is a fragment because it lacks both a subject (who was covered?) and a main verb.",
    incorrectRationale: "Check for subjects and main verbs. Options A, C, and D all have complete subjects and predicates. Option B is a descriptive phrase missing a subject and predicate, making it a fragment."
  }
];

let currentLevelIndex = 0;
let score = 0;
let lives = 3;
let timer = null;
let timeLeft = 60;

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
      <span>Question ${currentLevelIndex + 1} of ${GAME_DATA.length}</span>
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
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Question →</button>
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
  const sub = won ? "You successfully applied key reading strategies across all 15 test questions!" : "Review your strategies and give it another shot.";

  container.innerHTML = `
    <div class="cq-center">
      <h1 class="cq-title cq-pixel">${title}</h1>
      <p class="cq-sub">${sub}</p>
      
      <div class="cq-tier" style="margin-bottom: 20px;">
        Final Score: <b>${score} Points</b>
      </div>

      <!-- Post-Game Skill Reflection Module -->
      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 20px; text-align: left; max-width: 600px; margin: 0 auto 25px auto;">
        <h3 style="color: #5CE7DE; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem;">
          🧠 Reading Skill Reflection Checklist
        </h3>
        <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 15px;">Key moves for assessment success:</p>
        <ul style="font-size: 0.9rem; line-height: 1.6; color: #eee; padding-left: 20px; margin-bottom: 0;">
          <li><b>Fix the Confusion:</b> Annotate physical actions or character feelings to reveal emotional context.</li>
          <li><b>Context Clues:</b> Look for active verbs in nearby sentences to see what the word looks like in action.</li>
          <li><b>Dictionary Entry:</b> Match the definition to whether the text describes a <i>person</i>, an <i>action</i>, or a <i>repeated routine</i>.</li>
          <li><b>Textual Evidence:</b> Select details showing direct physical effort or character growth over simple facts.</li>
          <li><b>Sentence Structure:</b> Ensure a complete sentence has both a subject and a verb that expresses a full thought.</li>
        </ul>
      </div>

      <button class="cq-btn" onclick="location.reload()">
        Play Again 🔄
      </button>
    </div>
  `;
}
