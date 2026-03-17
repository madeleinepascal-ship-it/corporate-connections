// Corporate Connections - Puzzle Data
// Each puzzle has 4 groups, each group has:
//   - category: the display name shown after solving
//   - color: yellow | green | blue | purple (difficulty order, yellow = easiest)
//   - words: exactly 4 words/phrases

const PUZZLES = [
  {
    id: 1,
    title: "AI Is Coming For Your Job",
    groups: [
      {
        category: "Things you better learn to understand, you silly human",
        color: "yellow",
        words: ["AGENTIC", "PROMPT", "LLM", "GENERATIVE"],
      },
      {
        category: "Signs your think piece needs your own thinking",
        color: "green",
        words: ["EM-DASH", "DELVE", "RULE OF THREE", "EMOJIS"],
      },
      {
        category: "Beautiful poetry about your latest social media strategy",
        color: "blue",
        words: ["THINKPIECE", "SUBSTACK", "LINKEDIN POST", "DECKLET"],
      },
      {
        category: "Every brand value ever.",
        color: "purple",
        words: ["HUMAN", "AUTHENTIC", "CREATIVE", "INNOVATIVE"],
      },
    ],
  },
  {
    id: 2,
    title: "Let's Take This Offline",
    groups: [
      {
        category: "Let's push off the work to the next meeting",
        color: "yellow",
        words: ["SYNCH", "CIRCLE BACK", "REGROUP", "TOUCH BASE"],
      },
      {
        category: "Relentlessly pinging you 4ever",
        color: "green",
        words: ["ZOOM", "MEET", "TEAMS", "SLACK"],
      },
      {
        category: "Things the meeting could've been",
        color: "blue",
        words: ["E-MAIL", "TEXT", "HALLWAY CHAT", "PHONE CALL"],
      },
      {
        category: "Let's turn this meeting into another meeting",
        color: "purple",
        words: ["TAKEAWAYS", "ACTION ITEMS", "NEXT STEPS", "PARKING LOT"],
      },
    ],
  },
  {
    id: 3,
    title: "Corporate Casualties",
    groups: [
      {
        category: "What happened to the project",
        color: "yellow",
        words: ["DEPRIORITIZED", "PARKED", "TABLED", "SHELVED"],
      },
      {
        category: "What happened to the jobs",
        color: "green",
        words: ["RESTRUCTURED", "DOWNSIZED", "SUNSETTED", "TRANSITIONED"],
      },
      {
        category: "We never have enough of this",
        color: "blue",
        words: ["BANDWIDTH", "RUNWAY", "CAPACITY", "HEADSPACE"],
      },
      {
        category: "We failed, ok? But let's make it sound cooler",
        color: "purple",
        words: ["LEARNINGS", "PIVOTED", "RECALIBRATED", "ITERATED"],
      },
    ],
  },
  {
    id: 4,
    title: "KPI Me Crazy",
    groups: [
      {
        category: "Things you and Garfield hate",
        color: "yellow",
        words: ["MONDAYS", "WORK", "ANNOYING PEOPLE", "YOUR BOSS"],
      },
      {
        category: "Things we desperately want at work",
        color: "green",
        words: ["ROI", "KPI", "LOL", "PTO"],
      },
      {
        category: "Things we desperately need to move and raise",
        color: "blue",
        words: ["NEEDLE", "DIAL", "GOALPOST", "BAR"],
      },
      {
        category: "All the things we must align, dear cogs!",
        color: "purple",
        words: ["STAKEHOLDERS", "VISION", "PRIORITIES", "INCENTIVES"],
      },
    ],
  },
  {
    id: 5,
    title: "Move Fast & Break Nothing",
    groups: [
      {
        category: "Embarrassing ways to talk about ideas",
        color: "yellow",
        words: ["SANDBOX", "JAM SESSION", "BRAINSTORM", "PLAY"],
      },
      {
        category: "Words to use when you have no clue what you're talking about",
        color: "green",
        words: ["LEVERAGE", "SYNERGIZE", "IDEATE", "DEMOCRATIZE"],
      },
      {
        category: "Phrases that should never come out of your mouth",
        color: "blue",
        words: ["SAME PAGE", "OUTSIDE THE BOX", "YOUR BACKPOCKET", "LOW-HANGING"],
      },
      {
        category: "Ways to sound extremely put together when you're falling apart",
        color: "purple",
        words: ["RAMP UP", "DRILL DOWN", "UNPACK", "LEAN IN"],
      },
    ],
  },
  {
    id: 6,
    title: "Working For The Weekend",
    groups: [
      {
        category: "You are working the weekend, my friend",
        color: "yellow",
        words: ["HOT LIST", "DELIVERABLES", "CRUNCH TIME", "DEADLINE"],
      },
      {
        category: "Things you pretend to understand about software development",
        color: "green",
        words: ["AGILE", "SCRUM", "SPRINT", "STANDUP"],
      },
      {
        category: "Ways to passive-aggressively follow up",
        color: "blue",
        words: ["PING", "NUDGE", "BUMP", "LOOP IN"],
      },
      {
        category: "Your LinkedIn bio, probably",
        color: "purple",
        words: ["VISIONARY", "DISRUPTOR", "THOUGHT LEADER", "CHANGE AGENT"],
      },
    ],
  },
];
