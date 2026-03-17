// Corporate Connections - Puzzle Data
// Each puzzle has 4 groups, each group has:
//   - category: the display name shown after solving
//   - color: yellow | green | blue | purple (difficulty order, yellow = easiest)
//   - words: exactly 4 words/phrases

const PUZZLES = [
  {
    id: 1,
    title: "The Monday Morning Meeting",
    groups: [
      {
        category: "Move the ___",
        color: "yellow",
        words: ["NEEDLE", "DIAL", "GOALPOST", "BAR"],
      },
      {
        category: "Types of corporate 'thinking'",
        color: "green",
        words: ["GRANULAR", "HOLISTIC", "LATERAL", "STRATEGIC"],
      },
      {
        category: "Words for 'meeting'",
        color: "blue",
        words: ["SYNC", "HUDDLE", "STANDUP", "TOUCHPOINT"],
      },
      {
        category: "Euphemisms for 'fired'",
        color: "purple",
        words: ["RIGHTSIZED", "SUNSETTED", "TRANSITIONED", "RESTRUCTURED"],
      },
    ],
  },
  {
    id: 2,
    title: "Offsite Agenda",
    groups: [
      {
        category: "___ culture",
        color: "yellow",
        words: ["HUSTLE", "STARTUP", "TOXIC", "GRIND"],
      },
      {
        category: "You never have enough of this",
        color: "green",
        words: ["BANDWIDTH", "HEADSPACE", "RUNWAY", "CAPACITY"],
      },
      {
        category: "___ mindset",
        color: "blue",
        words: ["GROWTH", "AGILE", "FOUNDER", "ENTREPRENEURIAL"],
      },
      {
        category: "What happened to the project",
        color: "purple",
        words: ["DEPRIORITIZED", "PARKED", "TABLED", "SHELVED"],
      },
    ],
  },
  {
    id: 3,
    title: "Q4 All-Hands",
    groups: [
      {
        category: "Ways to say 'talk later'",
        color: "yellow",
        words: ["PING", "SYNC", "CIRCLE BACK", "FOLLOW UP"],
      },
      {
        category: "Things that are always 'aligned'",
        color: "green",
        words: ["STAKEHOLDERS", "INCENTIVES", "PRIORITIES", "VISION"],
      },
      {
        category: "Jargon for 'we failed'",
        color: "blue",
        words: ["LEARNINGS", "PIVOTED", "ITERATED", "RECALIBRATED"],
      },
      {
        category: "Low-value meeting outputs",
        color: "purple",
        words: ["TAKEAWAYS", "ACTION ITEMS", "NEXT STEPS", "PARKING LOT"],
      },
    ],
  },
  {
    id: 4,
    title: "Synergy Summit",
    groups: [
      {
        category: "Things that are always 'robust'",
        color: "yellow",
        words: ["PIPELINE", "SOLUTION", "FRAMEWORK", "ECOSYSTEM"],
      },
      {
        category: "Verbs that mean absolutely nothing",
        color: "green",
        words: ["LEVERAGE", "SYNERGIZE", "IDEATE", "DEMOCRATIZE"],
      },
      {
        category: "What the roadmap always has",
        color: "blue",
        words: ["MILESTONES", "DELIVERABLES", "DEPENDENCIES", "BLOCKERS"],
      },
      {
        category: "Ways to say 'I have no idea'",
        color: "purple",
        words: ["LET ME LOOP IN", "GREAT QUESTION", "OFFLINE THAT", "TAKE IT ON NOTICE"],
      },
    ],
  },
];
