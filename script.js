const POEM = {
  title: "Learning to Skate",
  lines: [
    "My grandmother taught herself to skate",
    "the way she learned to trust,",
    "push off hard, into the wind,",
    "wobble, glide,",
    "catch yourself, wobble, glide—",
    "When you grip the rail along the boards",
    "she gives you a look that asks,",
    "Who told you falling doesn't count?",
  ],
};

const STORY = {
  title: "My Summer Walking Dogs",
  paragraphs: [
    "I was not a dog person. At thirteen, the biggest animal I'd ever handled was our goldfish, Pretzel, who mostly just floated. That did not help me on my first morning walking Biscuit, a seventy-pound mutt with the energy of a rocket and zero interest in sidewalks.",
    "The moment I clipped on his leash, Biscuit took off toward the mail carrier, dragging me behind him like a kite with no string. My sneakers skidded across wet grass. I dug in my heels, leaned back with all my weight, and somehow wrestled him to a stop three feet from the mail carrier's ankles.",
    "That became the pattern all summer — sprint, skid, wrestle, stop. By the end of each walk, I was breathless, grass-stained, and covered in slobber, but the dogs always made it home in one piece.",
    "I didn't need the job. My parents kept telling me to focus on my summer reading list instead. But there was this bike. A sleek, ten-speed racer in the window of Miller's Cycle Shop, painted the exact shade of blue as the sky right before a storm. I wanted that bike more than I had ever wanted anything.",
    "One Saturday, I asked my dad for the money to buy it. He said no — if I wanted a bike that badly, I could earn it myself. I was furious. I told him that was unfair, that all my friends' parents just bought them things. He didn't raise his voice. He just said that things you earn yourself tend to mean more, and then he went back to reading his newspaper.",
    "So I marched down to the community bulletin board and signed up to walk every dog in a six-block radius. My dad laughed when I told him. Then he reminded me that once I started, I wasn't allowed to quit halfway through.",
    "By week two, I wanted to quit. Biscuit had pulled me into a rosebush. A poodle named Duchess had refused to walk for twenty straight minutes out of pure spite. I came home with scraped knees and told my dad I was done. He looked at me, said nothing, and went back to folding laundry. We both knew who would win that argument.",
    "So I kept walking. Every dog, every morning, rain or shine. Slowly, the sprinting turned into jogging. The wrestling turned into gentle tugs on the leash. Even Biscuit started trotting beside me instead of dragging me down the block.",
    "By August, I had saved enough for the bike. I rode it straight to Miller's, paid in crumpled dollar bills, and pedaled home so fast the wind stung my eyes. But somewhere along the way, I realized the bike wasn't really the point anymore. I had learned to stick with something hard, even on the days I wanted to walk away.",
  ],
};

const LEVELS = [
  {
    id: 1,
    name: "Fix the Confusion",
    subtitle: "Adjusting when meaning breaks down",
    passage: { type: "poem", data: POEM },
    seconds: 60,
    questions: [
      {
        q: 'A reader reaches the final line — "Who told you falling doesn\'t count?" — and doesn\'t understand why the grandmother asks it. What\'s the best next step?',
        options: [
          'Annotate the line about "gripping the rail" to note that it shows the speaker feels nervous or unsteady.',
          "Use background knowledge about ice skating competitions to see if the grandmother is being literal.",
          "Ask why the grandmother learned to skate by herself instead of taking lessons.",
          "Re-read the poem aloud, focusing only on line breaks and punctuation.",
        ],
        correct: 0,
        explain: 'The speaker\'s nervousness ("gripping the rail") is what the grandmother\'s question responds to — annotating that connection clarifies her tone.',
        wrongExplain: {
          1: "This focuses on literal rules and competition, not the relationship or tone the poem is building.",
          2: "This is a question about the grandmother's backstory, not about interpreting what the final line means.",
          3: "Attending only to line breaks and punctuation looks at form, not meaning, so it won't explain her tone.",
        },
      },
      {
        q: 'One student thinks "wobble, glide, catch yourself, wobble, glide" means the grandmother kept crashing badly. How can she correct this misunderstanding?',
        options: [
          'Look up the technical figure-skating definitions of "wobble" and "glide."',
          "Visualize an empty ice rink to picture where the grandmother practiced.",
          'Reread the lines and notice how "wobble" and "glide" describe the natural rhythm of learning to skate, not repeated falling.',
          "Reread the title to confirm the poem is only about skating equipment.",
        ],
        correct: 2,
        explain: "Rereading in context shows the repetition is describing a rhythm of practice, not a series of falls.",
        wrongExplain: {
          0: "The words aren't used in a specialized skating sense here; the poem uses everyday meanings.",
          1: "Picturing an empty rink doesn't address the misunderstanding about what's actually happening.",
          3: "The title doesn't clarify what the repeated \"wobble, glide\" pattern means.",
        },
      },
      {
        q: 'Rather than explain the skating in one plain sentence, the poem repeats "wobble, glide." A confused reader wants to know why. What should they do?',
        options: [
          "Skip ahead to see if the pattern repeats again later in the poem.",
          "Reread the pattern and think about how the repetition mimics the unsteady rhythm of learning something new.",
          'Look up "wobble" in a rhyming dictionary.',
          "Ask a friend if they have ever been ice skating.",
        ],
        correct: 1,
        explain: "Noticing that the repeated structure mirrors the content (an unsteady, repetitive process) is a comprehension-monitoring move.",
        wrongExplain: {
          0: "Skipping ahead abandons the confusing part instead of resolving it.",
          2: "A rhyming dictionary addresses sound, not the meaning behind the repetition.",
          3: "A friend's personal experience doesn't explain the poem's structural choice.",
        },
      },
      {
        q: 'A reader can\'t connect "the way she learned to trust" to the rest of the poem. Which strategy helps make that connection?',
        options: [
          "Reread the poem's ending to notice that learning to skate becomes a stand-in for learning to trust oneself despite falling.",
          'Look up "trust" in the dictionary to find its most common definition.',
          "Predict what sport the poem will describe next.",
          "Skim the poem quickly to count the total number of lines.",
        ],
        correct: 0,
        explain: "Rereading the ending links the skating imagery back to the abstract idea of trust introduced in line 2.",
        wrongExplain: {
          1: "Knowing a dictionary definition of \"trust\" alone doesn't connect it to the skating metaphor.",
          2: "Predicting what comes next doesn't address the phrase that's already confusing.",
          3: "Counting lines doesn't address meaning at all.",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Word Detective",
    subtitle: "Word meaning & context clues",
    passage: { type: "story", data: STORY, highlightParagraphs: [1, 2, 4, 5, 9] },
    seconds: 70,
    questions: [
      {
        q: 'In paragraph 2, what does the word "wrestled" most nearly mean as used in the text?',
        options: ["gently guided", "politely asked", "quickly abandoned", "struggled with great effort to control"],
        correct: 3,
        explain: '"Dug in my heels" and "leaned back with all my weight" show a physical struggle for control.',
        wrongExplain: {
          0: "This contradicts the forceful actions described — digging in heels and leaning back with all her weight.",
          1: "Nothing about the moment is polite; it's a physical struggle.",
          2: "The narrator doesn't give up — she succeeds in stopping Biscuit.",
        },
      },
      {
        q: 'Which detail BEST helps the reader understand the meaning of "wrestled" in paragraph 2?',
        options: [
          '"dragging me behind him like a kite with no string"',
          '"My sneakers skidded across wet grass. I dug in my heels, leaned back with all my weight"',
          '"the mail carrier\'s ankles"',
          '"That became the pattern all summer"',
        ],
        correct: 1,
        explain: "This is the exact moment of physical effort that the word \"wrestled\" is describing.",
        wrongExplain: {
          0: "This describes Biscuit's action, not the narrator's effort to regain control.",
          2: "This just names what she stopped near — it doesn't show any effort.",
          3: "This is a general statement about the summer, not the specific physical action.",
        },
      },
      {
        q: 'In paragraph 9, the narrator feels "the bike wasn\'t really the point anymore." Which group of phrases from the story best supports this idea?',
        options: [
          '"paid in crumpled dollar bills," "pedaled home," "wind stung my eyes"',
          '"six-block radius," "rosebush," "poodle named Duchess"',
          '"goldfish, Pretzel," "seventy-pound mutt," "rocket"',
          '"sprinting turned into jogging," "wrestling turned into gentle tugs," "stick with something hard"',
        ],
        correct: 3,
        explain: "These phrases trace the narrator's growth over the summer, which is what she values by the end — not the bike itself.",
        wrongExplain: {
          0: "These describe the moment of buying and riding the bike, not her realization about growth.",
          1: "These are setting and plot details, not evidence of how she changed.",
          2: "These describe her starting point at the beginning of summer, not her realization at the end.",
        },
      },
      {
        q: 'In paragraph 7, what does "we both knew who would win that argument" most nearly suggest about the narrator\'s father?',
        options: [
          "He was confident the narrator would keep her commitment.",
          "He was uncertain about how to respond.",
          "He wanted the narrator to quit the job.",
          "He planned to walk the dogs himself.",
        ],
        correct: 0,
        explain: "His calm, silent reaction suggests quiet confidence that she'd follow through, echoing the earlier rule about not quitting.",
        wrongExplain: {
          1: "His calm, silent reaction shows confidence, not uncertainty.",
          2: "He had already told her she couldn't quit — this contradicts that rule.",
          3: "Nothing in the story suggests he considered walking the dogs himself.",
        },
      },
      {
        q: 'In paragraph 4, what does the word "sleek" most nearly mean as used in the text?',
        options: ["old and worn", "loud and colorful", "smooth and streamlined", "heavy and slow"],
        correct: 2,
        explain: 'A "sleek, ten-speed racer" describes a smooth, streamlined bike — reinforced by how badly the narrator wants it.',
        wrongExplain: {
          0: "It's described as new and desirable in a shop window, not old or worn.",
          1: "The text focuses on the bike's color and shape, not sound or busyness.",
          3: "This contradicts a racer bike she's excited about — nothing suggests it's heavy or slow.",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Dictionary Dash",
    subtitle: "Choosing the right definition",
    passage: { type: "story", data: STORY, highlightParagraphs: [3, 5, 7, 8, 9] },
    seconds: 60,
    questions: [
      {
        q: 'Read the dictionary entry for "pattern." As it\'s used in paragraph 3 ("That became the pattern all summer"), which definition fits best?',
        entry: {
          word: "pattern (noun)",
          defs: [
            "a decorative design repeated on fabric or paper",
            "a regular and repeated way in which something happens",
            "a model or guide for making something",
            "a series of shapes forming a design",
          ],
        },
        options: ["definition 1", "definition 2", "definition 3", "definition 4"],
        correct: 1,
        explain: "The sentence describes a repeated sequence of events (sprint, skid, wrestle, stop) — a repeated way something happens.",
        wrongExplain: {
          0: "There's no fabric or paper design being discussed in this sentence.",
          2: "Nothing is being built or copied from a model here.",
          3: "This meaning fits a visual design, not a repeated daily routine.",
        },
      },
      {
        q: 'Read the dictionary entry for "spite." As it\'s used in paragraph 7 ("out of pure spite"), which definition fits best?',
        entry: {
          word: "spite (noun)",
          defs: [
            "a strong desire to hurt or annoy someone",
            "kindness shown despite difficulty",
            "a small amount of something",
            "a sudden feeling of fear",
          ],
        },
        options: ["definition 1", "definition 2", "definition 3", "definition 4"],
        correct: 0,
        explain: "Duchess refusing to walk just to be difficult matches a desire to annoy — definition 1.",
        wrongExplain: {
          1: "Refusing to walk isn't an act of kindness — it's the opposite.",
          2: "\"A small amount of something\" doesn't fit the phrase \"out of pure spite.\"",
          3: "Nothing suggests Duchess was scared — she was being stubborn on purpose.",
        },
      },
      {
        q: 'Read the dictionary entry for "trot." As it\'s used in paragraph 8 ("started trotting beside me"), which definition fits best?',
        entry: {
          word: "trot (verb)",
          defs: [
            "to move at a speed between a walk and a run, with regular steps",
            "to run away quickly out of fear",
            "to walk with great difficulty",
            "to jump repeatedly in place",
          ],
        },
        options: ["definition 1", "definition 2", "definition 3", "definition 4"],
        correct: 0,
        explain: "This shows Biscuit's improved, steady pace beside the narrator — a comfortable in-between speed.",
        wrongExplain: {
          1: "Biscuit isn't fleeing — he's walking calmly beside the narrator.",
          2: "This contradicts the improvement described; walks were getting easier, not harder.",
          3: "Trotting beside her means moving forward together, not staying in place.",
        },
      },
      {
        q: 'Read the dictionary entry for "crumpled." As it\'s used in paragraph 9 ("paid in crumpled dollar bills"), which definition fits best?',
        entry: {
          word: "crumpled (adjective)",
          defs: [
            "neatly folded and pressed",
            "torn into small pieces",
            "crushed into creases or wrinkles",
            "brand new and unused",
          ],
        },
        options: ["definition 1", "definition 2", "definition 3", "definition 4"],
        correct: 2,
        explain: "Dollar bills earned and carried all summer would be worn and creased, not new or torn.",
        wrongExplain: {
          0: "\"Crumpled\" implies messiness, which contradicts neatly folded and pressed.",
          1: "Torn bills wouldn't be usable to pay for anything.",
          3: "Bills earned from a summer of dog walking would be worn, not new.",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Evidence Hunt",
    subtitle: "Best textual evidence & inference",
    passage: { type: "story", data: STORY, highlightParagraphs: [2, 5, 6, 9] },
    seconds: 70,
    questions: [
      {
        q: "Look back at paragraphs 1–3. Which moment best shows that walking Biscuit was physically demanding?",
        options: [
          "Biscuit was a seventy-pound mutt with a lot of energy.",
          "The dogs always made it home safely.",
          "The narrator had never owned a big dog before.",
          "The narrator was dragged, skidded across grass, and had to wrestle Biscuit to a stop.",
        ],
        correct: 3,
        explain: "This is the specific physical action, not just background information about Biscuit.",
        wrongExplain: {
          0: "This describes Biscuit, not the narrator's physical struggle.",
          1: "This is the outcome of the walk, not evidence of how challenging it was.",
          2: "This is background information, not evidence of a physically demanding walk.",
        },
      },
      {
        q: "The story suggests that earning something yourself can change how much it means to you. Which moment best shows this?",
        options: [
          "The narrator's dad reads the newspaper after saying no to buying the bike.",
          "The narrator signs up to walk every dog within six blocks.",
          'By the end of the summer, the narrator realizes the bike "wasn\'t really the point anymore" after learning to stick with something hard.',
          "Biscuit starts trotting beside the narrator instead of dragging her.",
        ],
        correct: 2,
        explain: "This is the moment the narrator directly reflects on what earning the bike actually taught her.",
        wrongExplain: {
          0: "This is a minor detail about the dad's reaction, not about how earning something changes its meaning.",
          1: "This shows action taken, not the narrator's reflection on what it meant.",
          3: "This shows the dog's progress, not the narrator's realization about the bike.",
        },
      },
      {
        q: "Three of these details support the idea that the narrator's father wanted her to learn responsibility. Which one does NOT?",
        options: [
          "He refuses to buy the bike and tells her to earn it herself.",
          "He reminds her she isn't allowed to quit once she starts.",
          "He says nothing when she comes home upset, letting her decide to keep going.",
          "He goes back to reading his newspaper after their conversation.",
        ],
        correct: 3,
        explain: "This detail is true but incidental — it doesn't itself show a lesson about responsibility the way the other three choices do.",
        wrongExplain: {
          0: "This directly shows him teaching her to earn things herself, so it does support the idea.",
          1: "This shows him holding her accountable to a commitment, so it does support the idea.",
          2: "This shows him letting her take ownership of the decision, so it does support the idea.",
        },
      },
      {
        q: "A reader pauses after paragraph 6, unsure why the story spends time on the dad laughing when the narrator signs up to walk every dog. What question should the reader ask to figure out its purpose?",
        options: [
          "What breed of dog does the narrator like best?",
          "How much money does dog walking pay?",
          "Why does the dad find it funny or telling that his daughter made this commitment?",
          "What does the bulletin board look like?",
        ],
        correct: 2,
        explain: "This question targets the author's purpose for including the dad's reaction — foreshadowing that the summer will be harder than she expects.",
        wrongExplain: {
          0: "Dog breed preference has nothing to do with why the dad laughs.",
          1: "Pay rate doesn't explain his reaction to her commitment.",
          3: "The appearance of the bulletin board is irrelevant to his laughter.",
        },
      },
      {
        q: "A student can retell what happened in the story but can't explain the lesson the narrator learned. What's the best next step?",
        options: [
          "Skim the beginning of the text to recall the narrator's age.",
          "Look up unfamiliar words related to dog breeds.",
          "Reread the last paragraph and think about how the narrator changed.",
          "Highlight every time a dog's name is mentioned.",
        ],
        correct: 2,
        explain: "The lesson or theme of a personal narrative is almost always clarified in the closing reflection.",
        wrongExplain: {
          0: "The narrator's age doesn't reveal the lesson she learned.",
          1: "Looking up dog-breed vocabulary won't reveal a theme or lesson.",
          3: "Tracking dog names doesn't help identify the story's takeaway.",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Sentence Sort",
    subtitle: "Complete sentence or fragment?",
    passage: { type: "none" },
    seconds: 12,
    isSort: true,
    questions: [
      { text: "Sprint, skid, wrestle, stop.", correct: "fragment", explain: "There's no subject performing an action with a complete verb — it's a list of actions, not a sentence." },
      { text: "I dug in my heels.", correct: "complete", explain: "This has a subject (I) and a verb (dug) that express a complete thought." },
      { text: "Grass-stained and covered in slobber.", correct: "fragment", explain: "This describes a state but has no subject or main verb of its own." },
      { text: "The dogs always made it home in one piece.", correct: "complete", explain: "This has a subject (dogs) and a verb (made) that express a complete thought." },
      { text: "Wobble, glide, catch yourself, wobble, glide.", correct: "fragment", explain: "This is a string of actions without a subject performing them in a complete sentence." },
      { text: "She gives you a look that asks a question.", correct: "complete", explain: "This has a subject (She) and a verb (gives) that express a complete thought." },
      { text: "By the end of each walk.", correct: "fragment", explain: "This is a prepositional phrase with no subject or verb of its own." },
      { text: "I had saved enough for the bike.", correct: "complete", explain: "This has a subject (I) and a verb (had saved) that express a complete thought." },
    ],
  },
];

const TIER = (pct) => {
  if (pct >= 90) return { label: "GOLD MEDALIST", color: "#FFC857" };
  if (pct >= 75) return { label: "SILVER STREAK", color: "#C9D6E3" };
  if (pct >= 60) return { label: "BRONZE BADGE", color: "#E0995E" };
  return { label: "KEEP TRAINING", color: "#7FE0D6" };
};

// Application State
let state = {
  screen: "start",
  levelIdx: 0,
  qIdx: 0,
  score: 0,
  lives: 3,
  streak: 0,
  timeLeft: 0,
  answered: false,
  selected: null,
  showPassage: true,
  levelResults: [],
  correctCount: 0,
  totalCount: 0,
  popup: null,
  timerRef: null
};

function clearTimer() {
  if (state.timerRef) {
    clearInterval(state.timerRef);
    state.timerRef = null;
  }
}

function startQuestion(lvl) {
  state.answered = false;
  state.selected = null;
  state.timeLeft = lvl.seconds;
  
  clearTimer();
  if (state.screen === "play") {
    state.timerRef = setInterval(() => {
      state.timeLeft--;
      if (state.timeLeft <= 0) {
        clearTimer();
        handleTimeout();
      }
      render();
    }, 1000);
  }
}

function handleTimeout() {
  state.answered = true;
  state.selected = -1;
  state.lives = Math.max(0, state.lives - 1);
  state.streak = 0;
  state.totalCount++;
  state.popup = { kind: "timeout", text: "Time's up!" };
  render();
}

function submitAnswer(choiceValue, isCorrect) {
  if (state.answered) return;
  clearTimer();
  state.answered = true;
  state.selected = choiceValue;
  state.totalCount++;
  
  const level = LEVELS[state.levelIdx];
  if (isCorrect) {
    const speedBonus = Math.round((state.timeLeft / level.seconds) * 50);
    const mult = 1 + Math.min(2, Math.floor(state.streak / 3)) * 0.5;
    const base = level.isSort ? 50 : 100;
    const pts = Math.round((base + speedBonus) * mult);
    state.score += pts;
    state.streak++;
    state.correctCount++;
    state.popup = { kind: "correct", text: `+${pts} pts` };
  } else {
    state.lives = Math.max(0, state.lives - 1);
    state.streak = 0;
    state.popup = { kind: "wrong", text: "Not quite", picked: choiceValue };
  }
  render();
}

function next() {
  state.popup = null;
  const level = LEVELS[state.levelIdx];
  const isLastQ = state.qIdx + 1 >= level.questions.length;
  if (!isLastQ) {
    state.qIdx++;
    startQuestion(level);
  } else {
    state.levelResults.push({ name: level.name, correct: state.correctCount, total: level.questions.length });
    state.screen = "levelComplete";
  }
  render();
}

function goToNextLevel() {
  const nextIdx = state.levelIdx + 1;
  state.correctCount = 0;
  if (nextIdx >= LEVELS.length) {
    state.screen = "finished";
    render();
    return;
  }
  state.levelIdx = nextIdx;
  state.qIdx = 0;
  state.lives = 3;
  state.showPassage = true;
  startQuestion(LEVELS[nextIdx]);
  state.screen = "play";
  render();
}

function restart() {
  clearTimer();
  state.screen = "start";
  state.levelIdx = 0;
  state.qIdx = 0;
  state.score = 0;
  state.lives = 3;
  state.streak = 0;
  state.answered = false;
  state.selected = null;
  state.levelResults = [];
  state.correctCount = 0;
  state.totalCount = 0;
  state.popup = null;
  render();
}

function beginGame() {
  state.levelIdx = 0;
  state.qIdx = 0;
  state.score = 0;
  state.lives = 3;
  state.streak = 0;
  state.levelResults = [];
  state.correctCount = 0;
  state.totalCount = 0;
  state.screen = "play";
  startQuestion(LEVELS[0]);
  render();
}

function togglePassage() {
  state.showPassage = !state.showPassage;
  render();
}

function renderFeedbackBody(level, question) {
  if (!state.popup || state.popup.kind === "correct") return "";
  if (level.isSort) {
    const correctLabel = question.correct === "complete" ? "COMPLETE SENTENCE" : "FRAGMENT";
    return `
      <div>
        <div>Correct answer: <b>${correctLabel}</b></div>
        <div style="margin-top: 4px;">${question.explain}</div>
      </div>
    `;
  }
  const correctLetter = String.fromCharCode(65 + question.correct);
  const pickedIdx = state.popup.picked;
  const showWhyWrong = state.popup.kind === "wrong" && pickedIdx !== undefined && pickedIdx >= 0 && question.wrongExplain && question.wrongExplain[pickedIdx];
  return `
    <div>
      ${showWhyWrong ? `<div style="margin-bottom: 8px;"><b>Why that's wrong:</b> ${question.wrongExplain[pickedIdx]}</div>` : ""}
      <div><b>Correct answer: ${correctLetter}.</b> ${question.options[question.correct]}</div>
      <div style="margin-top: 4px;">${question.explain}</div>
    </div>
  `;
}

function render() {
  const app = document.getElementById("app");
  
  if (state.screen === "start") {
    app.innerHTML = `
      <div className="cq-start">
        <div className="cq-pixel cq-title">COMPREHENSION<br />QUEST</div>
        <p className="cq-sub">Unit 1 Reading Skills Review · ADV Level</p>
        <div className="cq-levels-preview">
          ${LEVELS.map(l => `
            <div className="cq-lvl-card">
              <b>LV.${l.id} — ${l.name}</b>
              <p>${l.subtitle}</p>
            </div>
          `).join('')}
        </div>
        <button className="cq-btn" onclick="beginGame()">
          <i data-lucide="play" style="width: 16px; height: 16px;"></i> START GAME
        </button>
        <p style="color: var(--text-dim); font-size: 12px; margin-top: 18px;">
          5 levels · read closely, answer fast, chain correct answers for bonus points.
        </p>
      </div>
    `;
  } else if (state.screen === "play") {
    const level = LEVELS[state.levelIdx];
    const question = level.questions[state.qIdx];
    
    let passageHTML = "";
    if (level.passage && level.passage.type !== "none") {
      passageHTML = `
        <button className="cq-passage-toggle" onclick="togglePassage()">
          <i data-lucide="book-open" style="width: 14px; height: 14px;"></i> ${state.showPassage ? "Hide passage" : "Show passage"}
        </button>
      `;
      if (state.showPassage && level.passage.type === "poem") {
        passageHTML += `
          <div className="cq-passage">
            <h3>${level.passage.data.title}</h3>
            ${level.passage.data.lines.map(ln => `<p className="cq-line">${ln}</p>`).join('')}
          </div>
        `;
      } else if (state.showPassage && level.passage.type === "story") {
        passageHTML += `
          <div className="cq-passage">
            <h3>${level.passage.data.title}</h3>
            ${level.passage.data.paragraphs.map((p, i) => {
              const isHi = level.passage.highlightParagraphs && level.passage.highlightParagraphs.includes(i + 1);
              return `<p className="${isHi ? "hi" : ""}"><span className="cq-para-num">${i + 1}</span>${p}</p>`;
            }).join('')}
          </div>
        `;
      }
    }

    let questionHTML = "";
    if (level.isSort) {
      questionHTML = `
        <div className="cq-sort-text">"${question.text}"</div>
        <div className="cq-sort-btns">
          <button
            className="cq-sort-btn complete-choice ${state.answered ? (question.correct === "complete" ? "correct" : state.selected === "complete" ? "wrong" : "") : ""}"
            ${state.answered ? "disabled" : ""}
            onclick="submitAnswer('complete', ${question.correct === 'complete'})"
          >
            COMPLETE SENTENCE
          </button>
          <button
            className="cq-sort-btn fragment-choice ${state.answered ? (question.correct === "fragment" ? "correct" : state.selected === "fragment" ? "wrong" : "") : ""}"
            ${state.answered ? "disabled" : ""}
            onclick="submitAnswer('fragment', ${question.correct === 'fragment'})"
          >
            FRAGMENT
          </button>
        </div>
      `;
    } else {
      questionHTML = `
        <p className="cq-question">${question.q}</p>
        ${question.entry ? `
          <div className="cq-entry">
            <b>${question.entry.word}</b>
            <ol>${question.entry.defs.map(d => `<li>${d}</li>`).join('')}</ol>
          </div>
        ` : ""}
        <div className="cq-options">
          ${question.options.map((opt, i) => {
            let cls = "";
            if (state.answered) {
              if (i === question.correct) cls = "correct";
              else if (i === state.selected) cls = "wrong";
            }
            return `
              <button className="cq-opt ${cls}" ${state.answered ? "disabled" : ""} onclick="submitAnswer(${i}, ${i === question.correct})">
                <span className="cq-opt-letter">${String.fromCharCode(65 + i)}.</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    let popupHTML = "";
    if (state.popup) {
      popupHTML = `
        <div className="cq-feedback ${state.popup.kind}">
          <div className="cq-feedback-head">
            <i data-lucide="${state.popup.kind === 'correct' ? 'star' : 'x'}" style="width: 15px; height: 15px;"></i>
            ${state.popup.kind === 'correct' ? state.popup.text : state.popup.kind === 'timeout' ? "Time's up!" : "Not quite"}
          </div>
          ${state.popup.kind === 'correct' ? `<div>${question.explain}</div>` : renderFeedbackBody(level, question)}
        </div>
      `;
    }

    app.innerHTML = `
      <div className="cq-track">
        ${LEVELS.map((l, i) => `
          <div className="cq-stop">
            <div className="cq-dot ${i < state.levelIdx ? "done" : i === state.levelIdx ? "active" : ""}">
              ${i < state.levelIdx ? "✓" : l.id}
            </div>
          </div>
          ${i < LEVELS.length - 1 ? `<div className="cq-road ${i < state.levelIdx ? "done" : ""}"></div>` : ""}
        `).join('')}
      </div>

      <div className="cq-hud">
        <div className="cq-hud-item"><i data-lucide="trophy" style="width: 14px; height: 14px; color: var(--amber);"></i> ${state.score}</div>
        <div className="cq-hud-item cq-hearts">
          ${[0, 1, 2].map(i => `
            <i data-lucide="heart" style="width: 15px; height: 15px; color: ${i < state.lives ? 'var(--bad)' : 'var(--panel-edge)'}; fill: ${i < state.lives ? 'var(--bad)' : 'none'};"></i>
          `).join('')}
        </div>
        <div className="cq-hud-item"><i data-lucide="zap" style="width: 14px; height: 14px; color: var(--pink);"></i> ${state.streak}x streak</div>
      </div>

      <div className="cq-level-head">
        <h2>LV.${level.id} · ${level.name}</h2>
        <span>${state.qIdx + 1} / ${level.questions.length}</span>
      </div>

      <div className="cq-timer-bar-wrap">
        <div className="cq-timer-bar" style="width: ${(state.timeLeft / level.seconds) * 100}%"></div>
      </div>

      ${passageHTML}

      <div className="cq-card">
        ${questionHTML}
        ${popupHTML}
        ${state.answered ? `
          <button className="cq-btn secondary cq-next-btn" onclick="next()" style="width: 100%; justify-content: center;">
            ${state.qIdx + 1 >= level.questions.length ? "FINISH LEVEL" : "NEXT"} <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </button>
        ` : ""}
      </div>
    `;
  } else if (state.screen === "levelComplete") {
    const level = LEVELS[state.levelIdx];
    const lastRes = state.levelResults[state.levelResults.length - 1];
    const acc = lastRes.correct / lastRes.total;

    app.innerHTML = `
      <div className="cq-center">
        <i data-lucide="flag" style="width: 34px; height: 34px; color: var(--amber);"></i>
        <h2 className="cq-pixel" style="font-size: 15px; color: var(--cyan); margin: 16px 0 6px;">
          LEVEL ${level.id} CLEAR
        </h2>
        <p style="color: var(--text-dim);">${level.name}</p>
        <div className="cq-stars">
          ${[0, 1, 2].map(i => {
            const filled = acc >= (i + 1) / 3 - 0.001 || (i === 0 && acc > 0);
            return `<i data-lucide="star" style="width: 30px; height: 30px; color: var(--amber); fill: ${filled ? 'var(--amber)' : 'none'};"></i>`;
          }).join('')}
        </div>
        <p style="font-size: 14px; margin-bottom: 22px;">
          ${lastRes.correct} / ${lastRes.total} correct · Score so far: <b style="color: var(--amber);">${state.score}</b>
        </p>
        <button className="cq-btn" onclick="goToNextLevel()">
          ${state.levelIdx + 1 >= LEVELS.length ? "SEE FINAL RESULTS" : "NEXT LEVEL"} <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
    `;
  } else if (state.screen === "finished") {
    const maxPossible = LEVELS.reduce((sum, l) => sum + l.questions.length, 0);
    const pct = state.totalCount ? Math.round((state.score / (maxPossible * 150)) * 100) : 0;
    const finalPct = Math.min(100, pct);
    const tier = TIER(finalPct);

    app.innerHTML = `
      <div className="cq-center">
        <i data-lucide="award" style="width: 40px; height: 40px; color: var(--amber);"></i>
        <h2 className="cq-pixel" style="font-size: 16px; color: var(--amber); margin: 16px 0 4px;">QUEST COMPLETE</h2>
        <p style="color: var(--text-dim); margin-bottom: 16px;">Final score: <b style="color: var(--text);">${state.score}</b> pts</p>

        <div className="cq-tier" style="color: ${tier.color};">
          ${tier.label}
        </div>

        ${state.levelResults.map((r, i) => `
          <div className="cq-result-row">
            <span>LV.${i + 1} · ${r.name}</span>
            <span>${r.correct}/${r.total}</span>
          </div>
        `).join('')}

        <button className="cq-btn secondary" style="margin-top: 18px;" onclick="restart()">
          <i data-lucide="rotate-ccw" style="width: 16px; height: 16px;"></i> PLAY AGAIN
        </button>
      </div>
    `;
  }

  // Refresh icons after render
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Initial render
render();
