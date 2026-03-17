// Corporate Connections - Game Logic

const COLOR_EMOJI = {
  yellow: "🟨",
  green:  "🟩",
  blue:   "🟦",
  purple: "🟪",
};

const COLOR_ORDER = ["yellow", "green", "blue", "purple"];

let currentPuzzleIndex = 0;
let tiles = [];           // { word, groupColor } for grid tiles
let selected = [];        // selected words
let solvedColors = [];    // colors solved so far
let mistakes = 0;
const MAX_MISTAKES = 4;
let guessHistory = [];    // array of color arrays per guess (for share)
let gameOver = false;

// ── DOM refs ────────────────────────────────────────────────────────────────
const gridEl         = document.getElementById("grid");
const solvedEl       = document.getElementById("solved-groups");
const dotsEl         = document.getElementById("dots");
const toastEl        = document.getElementById("toast");
const endScreenEl    = document.getElementById("end-screen");
const endTitleEl     = document.getElementById("end-title");
const endMessageEl   = document.getElementById("end-message");
const shareResultEl  = document.getElementById("share-result");
const btnShuffle     = document.getElementById("btn-shuffle");
const btnDeselect    = document.getElementById("btn-deselect");
const btnSubmit      = document.getElementById("btn-submit");
const btnPrev        = document.getElementById("btn-prev");
const btnNext        = document.getElementById("btn-next");
const inviteScreenEl = document.getElementById("invite-screen");
const inviteFormEl   = document.getElementById("invite-form");
const midNudgeEl     = document.getElementById("mid-nudge");

// ── Puzzle loading ───────────────────────────────────────────────────────────
function loadPuzzle(index) {
  currentPuzzleIndex = index;
  const puzzle = PUZZLES[index];

  // Reset state
  selected = [];
  solvedColors = [];
  mistakes = 0;
  guessHistory = [];
  gameOver = false;

  // Build flat tile list from all groups
  tiles = [];
  for (const group of puzzle.groups) {
    for (const word of group.words) {
      tiles.push({ word, groupColor: group.color });
    }
  }
  shuffleArray(tiles);

  // Reset UI
  window.scrollTo(0, 0);
  solvedEl.innerHTML = "";
  endScreenEl.classList.remove("visible");
  midNudgeEl.classList.remove("visible");
  midNudgeEl.setAttribute("aria-hidden", "true");
  renderDots();
  renderGrid();
  updateButtons();
  updatePuzzleNav();
}

// ── Grid rendering ───────────────────────────────────────────────────────────
function renderGrid() {
  gridEl.innerHTML = "";
  for (const tile of tiles) {
    const el = document.createElement("div");
    el.className = "tile";
    el.textContent = tile.word;
    el.dataset.word = tile.word;
    el.addEventListener("click", () => toggleSelect(tile.word));
    gridEl.appendChild(el);
  }
}

function getTileEl(word) {
  return gridEl.querySelector(`[data-word="${CSS.escape(word)}"]`);
}

function toggleSelect(word) {
  if (gameOver) return;
  const idx = selected.indexOf(word);
  if (idx !== -1) {
    selected.splice(idx, 1);
  } else {
    if (selected.length >= 4) return;
    selected.push(word);
  }
  refreshSelectedState();
  updateButtons();
}

function refreshSelectedState() {
  for (const tile of tiles) {
    const el = getTileEl(tile.word);
    if (!el) continue;
    el.classList.toggle("selected", selected.includes(tile.word));
  }
}

// ── Submit guess ─────────────────────────────────────────────────────────────
function submitGuess() {
  if (selected.length !== 4 || gameOver) return;

  const puzzle = PUZZLES[currentPuzzleIndex];

  // Check which colors were selected
  const colorCounts = {};
  for (const word of selected) {
    const tile = tiles.find(t => t.word === word);
    colorCounts[tile.groupColor] = (colorCounts[tile.groupColor] || 0) + 1;
  }

  const dominantColor = Object.keys(colorCounts).reduce((a, b) =>
    colorCounts[a] > colorCounts[b] ? a : b
  );
  const dominantCount = colorCounts[dominantColor];

  // Record guess for share
  const guessColors = selected.map(w => tiles.find(t => t.word === w).groupColor);
  guessHistory.push(guessColors);

  if (dominantCount === 4) {
    // Correct!
    const group = puzzle.groups.find(g => g.color === dominantColor);
    solvedColors.push(dominantColor);

    // Remove solved tiles from grid
    tiles = tiles.filter(t => !selected.includes(t.word));
    selected = [];

    renderGrid();
    showSolvedGroup(group);
    refreshSelectedState();
    updateButtons();

    // Bounce animation — slight delay after re-render
    setTimeout(() => {
      for (const word of group.words) {
        const el = getTileEl(word);
        if (el) el.classList.add("bounce");
      }
    }, 50);

    if (solvedColors.length === 4) {
      setTimeout(() => endGame(true), 800);
    }
  } else {
    // Wrong guess
    mistakes++;
    renderDots();

    // One away?
    if (dominantCount === 3) {
      showToast("One away…", "one-away");
    } else {
      showToast("Not quite — keep trying!");
    }

    // Shake tiles
    for (const word of selected) {
      const el = getTileEl(word);
      if (el) {
        el.classList.remove("shake");
        void el.offsetWidth; // reflow
        el.classList.add("shake");
      }
    }

    if (mistakes >= MAX_MISTAKES) {
      setTimeout(() => endGame(false), 800);
    }
  }
}

// ── Show solved group banner ─────────────────────────────────────────────────
function showSolvedGroup(group) {
  const el = document.createElement("div");
  el.className = `solved-group color-${group.color}`;
  el.innerHTML = `
    <div class="group-category">${group.category}</div>
    <div class="group-words">${group.words.join(", ")}</div>
  `;
  solvedEl.appendChild(el);
}

// ── Dots ─────────────────────────────────────────────────────────────────────
function renderDots() {
  dotsEl.innerHTML = "";
  for (let i = 0; i < MAX_MISTAKES; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i < mistakes ? " used" : "");
    dotsEl.appendChild(dot);
  }
}

// ── Toast ─────────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg, className = "") {
  toastEl.textContent = msg;
  toastEl.className = "toast" + (className ? ` ${className}` : "");
  void toastEl.offsetWidth;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2000);
}

// ── End game ─────────────────────────────────────────────────────────────────
function endGame(won) {
  gameOver = true;

  if (won) {
    midNudgeEl.classList.add("visible");
    midNudgeEl.removeAttribute("aria-hidden");
  }

  // Reveal any unsolved groups
  const puzzle = PUZZLES[currentPuzzleIndex];
  if (!won) {
    for (const color of COLOR_ORDER) {
      if (!solvedColors.includes(color)) {
        const group = puzzle.groups.find(g => g.color === color);
        showSolvedGroup(group);
      }
    }
    tiles = [];
    renderGrid();
  }

  // Build share string
  const shareLines = guessHistory.map(colors =>
    colors.map(c => COLOR_EMOJI[c]).join("")
  ).join("\n");

  const mistakesMade = mistakes;
  endTitleEl.textContent = won ? "Nice work! 📊" : "Better luck next quarter.";
  endMessageEl.textContent = won
    ? `Solved in ${guessHistory.length} guesses with ${mistakesMade} mistake${mistakesMade !== 1 ? "s" : ""}.`
    : "The groups have been revealed above.";

  shareResultEl.textContent = `Corporate Connections #${puzzle.id}\n${shareLines}`;

  endScreenEl.classList.add("visible");
  updateButtons();
}

// ── Shuffle ───────────────────────────────────────────────────────────────────
function shuffleTiles() {
  shuffleArray(tiles);
  renderGrid();
  refreshSelectedState();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ── Deselect all ──────────────────────────────────────────────────────────────
function deselectAll() {
  selected = [];
  refreshSelectedState();
  updateButtons();
}

// ── Share ─────────────────────────────────────────────────────────────────────
function copyShare() {
  const text = shareResultEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard!");
  }).catch(() => {
    showToast("Couldn't copy — try manually!");
  });
}

// ── Button state ──────────────────────────────────────────────────────────────
function updateButtons() {
  btnDeselect.disabled = selected.length === 0 || gameOver;
  btnSubmit.disabled   = selected.length !== 4 || gameOver;
}

// ── Puzzle navigation ─────────────────────────────────────────────────────────
function updatePuzzleNav() {
btnPrev.disabled = currentPuzzleIndex === 0;
  btnNext.disabled = currentPuzzleIndex === PUZZLES.length - 1;
}

// ── Mid-game nudge ────────────────────────────────────────────────────────
function closeMidNudge() {
  midNudgeEl.classList.remove("visible");
  midNudgeEl.setAttribute("aria-hidden", "true");
}

// ── Invite screen ─────────────────────────────────────────────────────────────
function openInvite() {
  inviteScreenEl.classList.add("open");
  inviteScreenEl.removeAttribute("aria-hidden");
  document.getElementById("friend-name").focus();
}

function closeInvite() {
  inviteScreenEl.classList.remove("open");
  inviteScreenEl.setAttribute("aria-hidden", "true");
}

function sendInvite(e) {
  e.preventDefault();

  const nameEl  = document.getElementById("friend-name");
  const emailEl = document.getElementById("friend-email");
  const noteEl  = document.getElementById("invite-note");

  // Basic validation
  let valid = true;
  [nameEl, emailEl, noteEl].forEach(el => el.classList.remove("error"));

  if (!emailEl.value.trim() || !emailEl.value.includes("@")) {
    emailEl.classList.add("error");
    emailEl.focus();
    valid = false;
  }
  if (!valid) return;

  const name  = nameEl.value.trim() || "hey";
  const email = emailEl.value.trim();
  const note  = noteEl.value.trim() || "I'd rather connect with you";
  const gameUrl = window.location.href;

  const subject = encodeURIComponent("I'd rather connect with you");
  const body = encodeURIComponent(
    `${name},\n\n${note}\n\n` +
    `Play Corporate Connections and you'll see why real connection beats any meeting:\n${gameUrl}\n\n` +
    `Let's actually hang. No agenda. No action items. Just us.`
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// ── Event listeners ───────────────────────────────────────────────────────────
btnShuffle.addEventListener("click", shuffleTiles);
btnDeselect.addEventListener("click", deselectAll);
btnSubmit.addEventListener("click", submitGuess);
btnPrev.addEventListener("click", () => loadPuzzle(currentPuzzleIndex - 1));
btnNext.addEventListener("click", () => loadPuzzle(currentPuzzleIndex + 1));
document.getElementById("btn-copy").addEventListener("click", copyShare);
document.getElementById("btn-show-invite").addEventListener("click", openInvite);
document.getElementById("btn-invite-back").addEventListener("click", closeInvite);
inviteFormEl.addEventListener("submit", sendInvite);

// Close invite on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && inviteScreenEl.classList.contains("open")) closeInvite();
});

// ── Start ─────────────────────────────────────────────────────────────────────
loadPuzzle(Math.floor(Math.random() * PUZZLES.length));
