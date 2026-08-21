import React, { useState, useEffect, useRef, useCallback } from "react";
import { Heart, Zap, Clock, Trophy, Star, Flag, RotateCcw, Play, BookOpen, X, ChevronRight, Award } from "lucide-react";

/* ---------------------------------------------------------
   CONTENT — new passages + practice items covering the same
   skill types as the ADV Unit 1 Reading Skills Assessment:
   monitoring/adjusting comprehension, word meaning in context,
   context clues, multi-definition dictionary use, textual
   evidence/inference, and sentence vs. fragment.
--------------------------------------------------------- */

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

export default function ComprehensionQuest() {
  const [screen, setScreen] = useState("start");
  const [levelIdx, setLevelIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showPassage, setShowPassage] = useState(true);
  const [levelResults, setLevelResults] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [popup, setPopup] = useState(null);
  const timerRef = useRef(null);

  const level = LEVELS[levelIdx];
  const question = level ? level.questions[qIdx] : null;

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startQuestion = useCallback((lvl) => {
    setAnswered(false);
    setSelected(null);
    setTimeLeft(lvl.seconds);
  }, []);

  useEffect(() => {
    if (screen !== "play") return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearTimer();
          handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, levelIdx, qIdx]);

  const handleTimeout = () => {
    setAnswered(true);
    setSelected(-1);
    setLives((l) => Math.max(0, l - 1));
    setStreak(0);
    setTotalCount((c) => c + 1);
    setPopup({ kind: "timeout", text: "Time's up!" });
  };

  const submitAnswer = (choiceValue, isCorrect) => {
    if (answered) return;
    clearTimer();
    setAnswered(true);
    setSelected(choiceValue);
    setTotalCount((c) => c + 1);
    if (isCorrect) {
      const speedBonus = Math.round((timeLeft / level.seconds) * 50);
      const mult = 1 + Math.min(2, Math.floor(streak / 3)) * 0.5;
      const base = level.isSort ? 50 : 100;
      const pts = Math.round((base + speedBonus) * mult);
      setScore((s) => s + pts);
      setStreak((s) => s + 1);
      setCorrectCount((c) => c + 1);
      setPopup({ kind: "correct", text: `+${pts} pts` });
    } else {
      setLives((l) => Math.max(0, l - 1));
      setStreak(0);
      setPopup({ kind: "wrong", text: "Not quite", picked: choiceValue });
    }
  };

  const next = () => {
    setPopup(null);
    const isLastQ = qIdx + 1 >= level.questions.length;
    if (!isLastQ) {
      setQIdx((i) => i + 1);
      startQuestion(level);
    } else {
      setLevelResults((r) => [...r, { name: level.name, correct: correctCount, total: level.questions.length }]);
      setScreen("levelComplete");
    }
  };

  const goToNextLevel = () => {
    const nextIdx = levelIdx + 1;
    setCorrectCount(0);
    if (nextIdx >= LEVELS.length) {
      setScreen("finished");
      return;
    }
    setLevelIdx(nextIdx);
    setQIdx(0);
    setLives(3);
    setShowPassage(true);
    startQuestion(LEVELS[nextIdx]);
    setScreen("play");
  };

  const restart = () => {
    clearTimer();
    setScreen("start");
    setLevelIdx(0);
    setQIdx(0);
    setScore(0);
    setLives(3);
    setStreak(0);
    setAnswered(false);
    setSelected(null);
    setLevelResults([]);
    setCorrectCount(0);
    setTotalCount(0);
    setPopup(null);
  };

  const beginGame = () => {
    setLevelIdx(0);
    setQIdx(0);
    setScore(0);
    setLives(3);
    setStreak(0);
    setLevelResults([]);
    setCorrectCount(0);
    setTotalCount(0);
    startQuestion(LEVELS[0]);
    setScreen("play");
  };

  const maxPossible = LEVELS.reduce((sum, l) => sum + l.questions.length, 0);
  const pct = totalCount ? Math.round((score / (maxPossible * 150)) * 100) : 0;
  const finalPct = Math.min(100, pct);

  // Builds the "why wrong / what's correct" feedback body for MCQ + sort questions
  const renderFeedbackBody = () => {
    if (!popup || popup.kind === "correct") return null;
    if (level.isSort) {
      const correctLabel = question.correct === "complete" ? "COMPLETE SENTENCE" : "FRAGMENT";
      return (
        <div>
          <div>Correct answer: <b>{correctLabel}</b></div>
          <div style={{ marginTop: 4 }}>{question.explain}</div>
        </div>
      );
    }
    const correctLetter = String.fromCharCode(65 + question.correct);
    const pickedIdx = popup.picked;
    const showWhyWrong = popup.kind === "wrong" && pickedIdx !== undefined && pickedIdx >= 0 && question.wrongExplain && question.wrongExplain[pickedIdx];
    return (
      <div>
        {showWhyWrong && (
          <div style={{ marginBottom: 8 }}>
            <b>Why that's wrong:</b> {question.wrongExplain[pickedIdx]}
          </div>
        )}
        <div>
          <b>Correct answer: {correctLetter}.</b> {question.options[question.correct]}
        </div>
        <div style={{ marginTop: 4 }}>{question.explain}</div>
      </div>
    );
  };

  return (
    <div className="cq-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,500;1,500&display=swap');

        .cq-root {
          --bg: #0d1224;
          --bg-2: #151b34;
          --panel: #1b2242;
          --panel-edge: #2a3260;
          --cyan: #5CE7DE;
          --pink: #FF6FA0;
          --amber: #FFC857;
          --text: #EAF0FF;
          --text-dim: #9AA6CC;
          --good: #6EE7A8;
          --bad: #FF6F6F;
          font-family: 'Inter', sans-serif;
          background: radial-gradient(circle at 20% 0%, #1a2148 0%, var(--bg) 55%);
          color: var(--text);
          min-height: 100%;
          padding: 18px;
          box-sizing: border-box;
          border-radius: 16px;
        }
        .cq-root * { box-sizing: border-box; }
        .cq-pixel { font-family: 'Press Start 2P', monospace; letter-spacing: 0.5px; }
        .cq-wrap { max-width: 720px; margin: 0 auto; }

        /* ---- Road / checkpoint track ---- */
        .cq-track { display: flex; align-items: center; gap: 4px; margin-bottom: 22px; padding: 12px 14px; background: var(--panel); border: 1px solid var(--panel-edge); border-radius: 12px; overflow-x: auto; }
        .cq-stop { display:flex; align-items:center; gap:6px; flex-shrink:0; }
        .cq-dot { width: 26px; height: 26px; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-size: 11px; font-weight:800; border: 2px solid var(--panel-edge); background: var(--bg-2); color: var(--text-dim); flex-shrink:0; transition: all .3s; }
        .cq-dot.done { background: var(--cyan); border-color: var(--cyan); color: #0d1224; }
        .cq-dot.active { background: var(--pink); border-color: var(--pink); color: #0d1224; box-shadow: 0 0 0 4px rgba(255,111,160,0.2); }
        .cq-road { width: 22px; height: 3px; background: var(--panel-edge); flex-shrink: 0; }
        .cq-road.done { background: var(--cyan); }

        /* ---- Start screen ---- */
        .cq-start { text-align:center; padding: 30px 14px 10px; }
        .cq-title { font-size: 22px; line-height: 1.6; color: var(--amber); text-shadow: 0 0 14px rgba(255,200,87,0.35); margin-bottom: 6px; }
        .cq-sub { color: var(--text-dim); font-size: 14px; margin-bottom: 26px; }
        .cq-levels-preview { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 26px 0; text-align:left; }
        .cq-lvl-card { background: var(--panel); border: 1px solid var(--panel-edge); border-radius: 10px; padding: 12px 14px; }
        .cq-lvl-card b { color: var(--cyan); font-size: 13px; }
        .cq-lvl-card p { margin: 4px 0 0; font-size: 12px; color: var(--text-dim); }
        .cq-btn { font-family: 'Press Start 2P', monospace; cursor: pointer; border: none; border-radius: 10px; padding: 16px 26px; font-size: 13px; background: linear-gradient(180deg, var(--pink), #e1518a); color: #fff; box-shadow: 0 6px 0 #a83a68, 0 10px 18px rgba(255,111,160,0.25); transition: transform .08s; display:inline-flex; align-items:center; gap:10px; }
        .cq-btn:active { transform: translateY(4px); box-shadow: 0 2px 0 #a83a68; }
        .cq-btn.secondary { background: linear-gradient(180deg, var(--cyan), #35b6ac); box-shadow: 0 6px 0 #1f7f78, 0 10px 18px rgba(92,231,222,0.25); }
        .cq-btn.secondary:active { box-shadow: 0 2px 0 #1f7f78; }

        /* ---- HUD ---- */
        .cq-hud { display:flex; align-items:center; justify-content: space-between; gap: 10px; margin-bottom: 14px; flex-wrap: wrap; }
        .cq-hud-item { display:flex; align-items:center; gap: 6px; background: var(--panel); border: 1px solid var(--panel-edge); padding: 7px 11px; border-radius: 20px; font-size: 13px; font-weight: 700; }
        .cq-hearts { display:flex; gap: 3px; }
        .cq-timer-bar-wrap { width: 100%; height: 10px; background: var(--panel); border-radius: 6px; overflow: hidden; margin-bottom: 16px; border: 1px solid var(--panel-edge); }
        .cq-timer-bar { height: 100%; background: linear-gradient(90deg, var(--cyan), var(--pink)); transition: width 1s linear; }

        .cq-level-head { display:flex; align-items:baseline; justify-content:space-between; margin-bottom: 10px; }
        .cq-level-head h2 { font-size: 17px; margin:0; color: var(--amber); }
        .cq-level-head span { font-size: 12px; color: var(--text-dim); }
        .cq-qcount { font-size: 12px; color: var(--text-dim); margin-bottom: 14px; }

        /* ---- Passage panel ---- */
        .cq-passage-toggle { display:flex; align-items:center; gap:6px; background: var(--panel); border: 1px dashed var(--panel-edge); color: var(--cyan); font-size: 12px; font-weight: 700; padding: 8px 12px; border-radius: 8px; cursor: pointer; margin-bottom: 12px; width: 100%; justify-content: center; }
        .cq-passage { background: #10152b; border: 1px solid var(--panel-edge); border-left: 3px solid var(--cyan); border-radius: 10px; padding: 14px 16px; margin-bottom: 16px; font-family: 'Lora', serif; }
        .cq-passage h3 { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--cyan); margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px; }
        .cq-passage p, .cq-passage .cq-line { font-size: 14.5px; line-height: 1.7; color: #dbe3ff; margin: 0 0 8px; }
        .cq-passage p.hi { background: rgba(92,231,222,0.08); border-radius: 4px; padding: 2px 4px; margin-left: -4px; }
        .cq-para-num { color: var(--text-dim); font-size: 11px; font-family: 'Inter'; margin-right: 4px; }

        /* ---- Question card ---- */
        .cq-card { background: var(--panel); border: 1px solid var(--panel-edge); border-radius: 14px; padding: 18px; }
        .cq-question { font-size: 15.5px; line-height: 1.55; margin: 0 0 16px; font-weight: 600; }
        .cq-entry { background: #10152b; border: 1px solid var(--panel-edge); border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; font-family: 'Lora', serif; }
        .cq-entry b { color: var(--amber); font-family: 'Inter'; font-size: 13px; }
        .cq-entry ol { margin: 6px 0 0; padding-left: 20px; font-size: 13.5px; color: #dbe3ff; }
        .cq-options { display:flex; flex-direction: column; gap: 9px; }
        .cq-opt { text-align:left; background: var(--bg-2); border: 1px solid var(--panel-edge); color: var(--text); padding: 12px 14px; border-radius: 10px; font-size: 14px; cursor: pointer; display:flex; gap: 10px; align-items:flex-start; transition: border-color .15s, background .15s; }
        .cq-opt:hover:not(:disabled) { border-color: var(--cyan); }
        .cq-opt-letter { font-weight: 800; color: var(--cyan); flex-shrink:0; }
        .cq-opt.correct { border-color: var(--good); background: rgba(110,231,168,0.12); }
        .cq-opt.wrong { border-color: var(--bad); background: rgba(255,111,111,0.12); }
        .cq-opt:disabled { cursor: default; opacity: 0.75; }

        /* Sort mode */
        .cq-sort-text { font-size: 20px; text-align:center; font-family: 'Lora', serif; font-style: italic; padding: 26px 10px; color: #f2f5ff; }
        .cq-sort-btns { display:flex; gap: 12px; }
        .cq-sort-btn { flex:1; padding: 18px 10px; border-radius: 12px; border: 2px solid var(--panel-edge); background: var(--bg-2); color: var(--text); font-weight: 800; font-size: 14px; cursor:pointer; }
        .cq-sort-btn.complete-choice { border-color: #4fb0ff33; }
        .cq-sort-btn.fragment-choice { border-color: #ff9f4f33; }
        .cq-sort-btn.correct { border-color: var(--good); background: rgba(110,231,168,0.12); }
        .cq-sort-btn.wrong { border-color: var(--bad); background: rgba(255,111,111,0.12); }

        /* ---- Feedback popup ---- */
        .cq-feedback { margin-top: 14px; padding: 14px 16px; border-radius: 10px; font-size: 13.5px; line-height: 1.5; }
        .cq-feedback.correct { background: rgba(110,231,168,0.1); border: 1px solid var(--good); }
        .cq-feedback.wrong, .cq-feedback.timeout { background: rgba(255,111,111,0.1); border: 1px solid var(--bad); }
        .cq-feedback-head { font-weight: 800; margin-bottom: 8px; display:flex; align-items:center; gap:6px; }
        .cq-feedback.correct .cq-feedback-head { color: var(--good); }
        .cq-feedback.wrong .cq-feedback-head, .cq-feedback.timeout .cq-feedback-head { color: var(--bad); }
        .cq-next-btn { margin-top: 14px; width: 100%; }

        /* ---- Level complete / finished ---- */
        .cq-center { text-align:center; padding: 28px 10px; }
        .cq-stars { display:flex; justify-content:center; gap: 6px; margin: 14px 0 20px; }
        .cq-result-row { display:flex; justify-content:space-between; padding: 10px 14px; background: var(--panel); border: 1px solid var(--panel-edge); border-radius: 8px; margin-bottom: 8px; font-size: 13.5px; }
        .cq-tier { font-size: 16px; margin: 8px 0 18px; padding: 10px; border-radius: 10px; background: var(--panel); border: 1px solid var(--panel-edge); }

        @media (max-width: 480px) {
          .cq-levels-preview { grid-template-columns: 1fr; }
          .cq-title { font-size: 17px; }
        }
      `}</style>

      <div className="cq-wrap">
        {screen === "start" && (
          <div className="cq-start">
            <div className="cq-pixel cq-title">COMPREHENSION<br />QUEST</div>
            <p className="cq-sub">Unit 1 Reading Skills Review · ADV Level</p>

            <div className="cq-levels-preview">
              {LEVELS.map((l) => (
                <div className="cq-lvl-card" key={l.id}>
                  <b>LV.{l.id} — {l.name}</b>
                  <p>{l.subtitle}</p>
                </div>
              ))}
            </div>

            <button className="cq-btn" onClick={beginGame}>
              <Play size={16} /> START GAME
            </button>
            <p style={{ color: "var(--text-dim)", fontSize: 12, marginTop: 18 }}>
              5 levels · read closely, answer fast, chain correct answers for bonus points.
            </p>
          </div>
        )}

        {screen === "play" && level && question && (
          <>
            <div className="cq-track">
              {LEVELS.map((l, i) => (
                <React.Fragment key={l.id}>
                  <div className="cq-stop">
                    <div className={`cq-dot ${i < levelIdx ? "done" : i === levelIdx ? "active" : ""}`}>
                      {i < levelIdx ? "✓" : l.id}
                    </div>
                  </div>
                  {i < LEVELS.length - 1 && <div className={`cq-road ${i < levelIdx ? "done" : ""}`} />}
                </React.Fragment>
              ))}
            </div>

            <div className="cq-hud">
              <div className="cq-hud-item"><Trophy size={14} color="var(--amber)" /> {score}</div>
              <div className="cq-hud-item cq-hearts">
                {[0, 1, 2].map((i) => (
                  <Heart key={i} size={15} color={i < lives ? "var(--bad)" : "var(--panel-edge)"} fill={i < lives ? "var(--bad)" : "none"} />
                ))}
              </div>
              <div className="cq-hud-item"><Zap size={14} color="var(--pink)" /> {streak}x streak</div>
            </div>

            <div className="cq-level-head">
              <h2>LV.{level.id} · {level.name}</h2>
              <span>{qIdx + 1} / {level.questions.length}</span>
            </div>

            <div className="cq-timer-bar-wrap">
              <div className="cq-timer-bar" style={{ width: `${(timeLeft / level.seconds) * 100}%` }} />
            </div>

            {level.passage && level.passage.type !== "none" && (
              <>
                <button className="cq-passage-toggle" onClick={() => setShowPassage((s) => !s)}>
                  <BookOpen size={14} /> {showPassage ? "Hide passage" : "Show passage"}
                </button>
                {showPassage && level.passage.type === "poem" && (
                  <div className="cq-passage">
                    <h3>{level.passage.data.title}</h3>
                    {level.passage.data.lines.map((ln, i) => (
                      <p key={i} className="cq-line">{ln}</p>
                    ))}
                  </div>
                )}
                {showPassage && level.passage.type === "story" && (
                  <div className="cq-passage">
                    <h3>{level.passage.data.title}</h3>
                    {level.passage.data.paragraphs.map((p, i) => (
                      <p key={i} className={level.passage.highlightParagraphs && level.passage.highlightParagraphs.includes(i + 1) ? "hi" : ""}>
                        <span className="cq-para-num">{i + 1}</span>{p}
                      </p>
                    ))}
                  </div>
                )}
              </>
            )}

            <div className="cq-card">
              {level.isSort ? (
                <>
                  <div className="cq-sort-text">"{question.text}"</div>
                  <div className="cq-sort-btns">
                    <button
                      className={`cq-sort-btn complete-choice ${answered ? (question.correct === "complete" ? "correct" : selected === "complete" ? "wrong" : "") : ""}`}
                      disabled={answered}
                      onClick={() => submitAnswer("complete", question.correct === "complete")}
                    >
                      COMPLETE SENTENCE
                    </button>
                    <button
                      className={`cq-sort-btn fragment-choice ${answered ? (question.correct === "fragment" ? "correct" : selected === "fragment" ? "wrong" : "") : ""}`}
                      disabled={answered}
                      onClick={() => submitAnswer("fragment", question.correct === "fragment")}
                    >
                      FRAGMENT
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="cq-question">{question.q}</p>
                  {question.entry && (
                    <div className="cq-entry">
                      <b>{question.entry.word}</b>
                      <ol>
                        {question.entry.defs.map((d, i) => <li key={i}>{d}</li>)}
                      </ol>
                    </div>
                  )}
                  <div className="cq-options">
                    {question.options.map((opt, i) => {
                      let cls = "";
                      if (answered) {
                        if (i === question.correct) cls = "correct";
                        else if (i === selected) cls = "wrong";
                      }
                      return (
                        <button key={i} className={`cq-opt ${cls}`} disabled={answered} onClick={() => submitAnswer(i, i === question.correct)}>
                          <span className="cq-opt-letter">{String.fromCharCode(65 + i)}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {popup && (
                <div className={`cq-feedback ${popup.kind}`}>
                  <div className="cq-feedback-head">
                    {popup.kind === "correct" ? <Star size={15} /> : <X size={15} />} {popup.kind === "correct" ? popup.text : popup.kind === "timeout" ? "Time's up!" : "Not quite"}
                  </div>
                  {popup.kind === "correct" ? <div>{question.explain}</div> : renderFeedbackBody()}
                </div>
              )}

              {answered && (
                <button className="cq-btn secondary cq-next-btn" onClick={next} style={{ width: "100%", justifyContent: "center" }}>
                  {qIdx + 1 >= level.questions.length ? "FINISH LEVEL" : "NEXT"} <ChevronRight size={16} />
                </button>
              )}
            </div>
          </>
        )}

        {screen === "levelComplete" && (
          <div className="cq-center">
            <Flag size={34} color="var(--amber)" />
            <h2 className="cq-pixel" style={{ fontSize: 15, color: "var(--cyan)", margin: "16px 0 6px" }}>
              LEVEL {level.id} CLEAR
            </h2>
            <p style={{ color: "var(--text-dim)" }}>{level.name}</p>
            <div className="cq-stars">
              {[0, 1, 2].map((i) => {
                const acc = levelResults[levelResults.length - 1].correct / levelResults[levelResults.length - 1].total;
                const filled = acc >= (i + 1) / 3 - 0.001 || (i === 0 && acc > 0);
                return <Star key={i} size={30} color="var(--amber)" fill={filled ? "var(--amber)" : "none"} />;
              })}
            </div>
            <p style={{ fontSize: 14, marginBottom: 22 }}>
              {levelResults[levelResults.length - 1].correct} / {levelResults[levelResults.length - 1].total} correct · Score so far: <b style={{ color: "var(--amber)" }}>{score}</b>
            </p>
            <button className="cq-btn" onClick={goToNextLevel}>
              {levelIdx + 1 >= LEVELS.length ? "SEE FINAL RESULTS" : "NEXT LEVEL"} <ChevronRight size={16} />
            </button>
          </div>
        )}

        {screen === "finished" && (
          <div className="cq-center">
            <Award size={40} color="var(--amber)" />
            <h2 className="cq-pixel" style={{ fontSize: 16, color: "var(--amber)", margin: "16px 0 4px" }}>QUEST COMPLETE</h2>
            <p style={{ color: "var(--text-dim)", marginBottom: 16 }}>Final score: <b style={{ color: "var(--text)" }}>{score}</b> pts</p>

            <div className="cq-tier" style={{ color: TIER(finalPct).color }}>
              {TIER(finalPct).label}
            </div>

            {levelResults.map((r, i) => (
              <div className="cq-result-row" key={i}>
                <span>LV.{i + 1} · {r.name}</span>
                <span>{r.correct}/{r.total}</span>
              </div>
            ))}

            <button className="cq-btn secondary" style={{ marginTop: 18 }} onClick={restart}>
              <RotateCcw size={16} /> PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
