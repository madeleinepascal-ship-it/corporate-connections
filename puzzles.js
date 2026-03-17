// Corporate Connections - Puzzle Data
// Each puzzle has 4 groups, each group has:
//   - category: the display name shown after solving
//   - color: yellow | green | blue | purple (difficulty order, yellow = easiest)
//   - words: exactly 4 words/phrases

const PUZZLES = [
  {
    id: 1,
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
        category: "Places you never want to be / things you never want to say",
        color: "blue",
        words: ["ON THE SAME PAGE", "OUTSIDE THE BOX", "IN YOUR BACKPOCKET", "IN THE WEEDS"],
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
    groups: [
      {
        category: "Words you should never ever use in a deck (or ever)",
        color: "yellow",
        words: ["UNC", "IT'S GIVING", "SLAY", "CHOPPED"],
      },
      {
        category: "Doomscroll at your own risk",
        color: "green",
        words: ["NEWS CYCLE", "LINKEDIN", "DOORDASH", "REELS"],
      },
      {
        category: "The stuff dreams are made of",
        color: "blue",
        words: ["ENGAGEMENT", "METRICS", "VIEWS", "CLICKTHROUGHS"],
      },
      {
        category: "Words guaranteed to give everyone the ick",
        color: "purple",
        words: ["VIRAL", "FRICTION-MAXXING", "BRAIN DUMP", "DEEP DIVE"],
      },
    ],
  },
  {
    id: 7,
    groups: [
      {
        category: "The best thing about the office",
        color: "yellow",
        words: ["SNACKS", "JOKES", "ACTUAL HUMANS", "COMMISERATION"],
      },
      {
        category: "LLM's (LinkedIn's Loved Most)",
        color: "green",
        words: ["FRACTIONAL", "GROWTH", "CONTENT STRATEGY", "CADENCE"],
      },
      {
        category: "Gross, but kindaaa makes you hungry",
        color: "blue",
        words: ["SLOP", "LOW-HANGING FRUIT", "A LOT ON MY PLATE", "SOUP TO NUTS"],
      },
      {
        category: "You can talk tech bro, bro",
        color: "purple",
        words: ["EDGE-NATIVE", "AGI", "HARD TECH", "AUTONOMY"],
      },
    ],
  },
  {
    id: 8,
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
