document.body.dataset.appBootStage = "script-start";
const canvas = document.getElementById("board");
let ctx = canvas?.getContext("2d");
const statusText = document.getElementById("statusText");
const routeText = document.getElementById("routeText");
const moneyText = document.getElementById("moneyText");
const boardCashText = document.getElementById("boardCashText");
const freeBlockText = document.getElementById("freeBlockText");
const livesText = document.getElementById("livesText");
const waveText = document.getElementById("waveText");
const enemyText = document.getElementById("enemyText");
const selectionText = document.getElementById("selectionText");
const upgradeText = document.getElementById("upgradeText");
const nextPieceText = document.getElementById("nextPieceText");
const blockChoicePriceText = document.getElementById("blockChoicePriceText");
const blockChoiceHotkeys = document.getElementById("blockChoiceHotkeys");
const pieceChoicePrimaryButton = document.getElementById("pieceChoicePrimary");
const pieceChoiceSecondaryButton = document.getElementById("pieceChoiceSecondary");
const blockChoicePanel = document.querySelector(".board-piece-choices");
const towerDescription = document.getElementById("towerDescription");
const waveButton = document.getElementById("waveButton");
const autoWaveToggle = document.getElementById("autoWaveToggle");
const speedControls = document.getElementById("speedControls");
const rotateButton = document.getElementById("rotateButton");
const mirrorButton = document.getElementById("mirrorButton");
const pauseButton = document.getElementById("pauseButton");
const toolGrid = document.getElementById("toolGrid");
const towerGrid = document.getElementById("towerGrid");
const boardFrame = document.querySelector(".board-frame");
const sidePanelDock = document.getElementById("sidePanelDock");
const boardPanelDock = document.getElementById("boardPanelDock");
const menuOverlay = document.getElementById("menuOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");
const tutorialOverlay = document.getElementById("tutorialOverlay");
const gameOverOverlay = document.getElementById("gameOverOverlay");
const almanacOverlay = document.getElementById("almanacOverlay");
const startGameButton = document.getElementById("startGameButton");
const openAlmanacButton = document.getElementById("openAlmanacButton");
const resumeGameButton = document.getElementById("resumeGameButton");
const pauseAlmanacButton = document.getElementById("pauseAlmanacButton");
const quitToMenuButton = document.getElementById("quitToMenuButton");
const restartGameButton = document.getElementById("restartGameButton");
const gameOverMenuButton = document.getElementById("gameOverMenuButton");
const gameOverSummary = document.getElementById("gameOverSummary");
const closeAlmanacButton = document.getElementById("closeAlmanacButton");
const almanacGrid = document.getElementById("almanacGrid");
const almanacTabs = document.getElementById("almanacTabs");
const almanacTitle = document.getElementById("almanacTitle");
const almanacBody = document.getElementById("almanacBody");
const almanacDetail = document.getElementById("almanacDetail");
const difficultyOptions = document.getElementById("difficultyOptions");
const mapOptions = document.getElementById("mapOptions");
const menuMapDescription = document.getElementById("menuMapDescription");
const towerPopup = document.getElementById("towerPopup");
const towerPopupTitle = document.getElementById("towerPopupTitle");
const towerPopupSummary = document.getElementById("towerPopupSummary");
const towerPopupActions = document.getElementById("towerPopupActions");
const sandboxControls = document.getElementById("sandboxControls");
const sandboxWaveInput = document.getElementById("sandboxWaveInput");
const sandboxEnemySelect = document.getElementById("sandboxEnemySelect");
const sandboxTierSelect = document.getElementById("sandboxTierSelect");
const sandboxTierLabel = document.getElementById("sandboxTierLabel");
const sandboxSpawnCountInput = document.getElementById("sandboxSpawnCountInput");
const sandboxSpawnSpacingInput = document.getElementById("sandboxSpawnSpacingInput");
const sandboxPortalSelect = document.getElementById("sandboxPortalSelect");
const sandboxSpawnButton = document.getElementById("sandboxSpawnButton");
const sandboxSpawnHidden = document.getElementById("sandboxSpawnHidden");
const sandboxSpawnArmored = document.getElementById("sandboxSpawnArmored");
const sandboxSpawnShielded = document.getElementById("sandboxSpawnShielded");
const sandboxSpawnShelled = document.getElementById("sandboxSpawnShelled");
const airstrikePanel = document.getElementById("airstrikePanel");
const airstrikeButton = document.getElementById("airstrikeButton");
const airstrikeStatusText = document.getElementById("airstrikeStatusText");
const airstrikeTitleText = airstrikeButton?.querySelector(".airstrike-copy > span:first-child");
const tutorialOverlayTitle = document.getElementById("tutorialOverlayTitle");
const tutorialOverlayBody = document.getElementById("tutorialOverlayBody");
const tutorialOverlayButton = document.getElementById("tutorialOverlayButton");
const tutorialDismissButton = document.getElementById("tutorialDismissButton");
const closeTowerPopupButton = document.getElementById("closeTowerPopupButton");
const tutorialList = document.getElementById("tutorialList");
const tutorialHint = document.getElementById("tutorialHint");
const warningPanel = document.getElementById("warningPanel");
const warningPanelTitle = document.getElementById("warningPanelTitle");
const warningPanelBody = document.getElementById("warningPanelBody");
const TARGET_PRIORITIES = ["first", "last", "strong", "weak", "hidden", "random", "cursor"];
const ORB_SPIN_PRIORITIES = ["clockwise", "anticlockwise"];
const ORB_TYPE_PRIORITIES = ["explosive", "energy", "concentrated", "adaptive"];
const PATH_TOWER_TYPES = new Set(["tesla", "missile", "trapper", "laser", "shotgun", "freezer", "drone", "fireball", "dippy", "support", "treasury", "orb", "crossbow", "gate"]);
const TARGET_LABELS = {
  first: "First",
  last: "Last",
  strong: "Strong",
  weak: "Weak",
  hidden: "Hidden",
  random: "Random",
  cursor: "Cursor",
  clockwise: "Clockwise",
  anticlockwise: "Anti Clockwise",
  explosive: "Explosive",
  energy: "Energy",
  concentrated: "Concentrated",
  adaptive: "Adaptive"
};

document.body.dataset.appBootStage = "constants";

const COLS = 34;
const ROWS = 24;
const CELL_SIZE = 28;
const CENTER_COL = Math.floor(COLS / 2);
const CENTER_ROW = Math.floor(ROWS / 2);
const LEGACY_CENTER_COL = 15;
const LEGACY_CENTER_ROW = 9;
const BOARD_CENTER_SHIFT_X = CENTER_COL - LEGACY_CENTER_COL;
const BOARD_CENTER_SHIFT_Y = CENTER_ROW - LEGACY_CENTER_ROW;
const BASE_CANVAS_WIDTH = COLS * CELL_SIZE;
const BASE_CANVAS_HEIGHT = ROWS * CELL_SIZE;
const TOWER_PRICE_MULTIPLIER = 1;
const ENEMY_CASH_DROP_MULTIPLIER = 1;
const START_MONEY = 50;
const START_LIVES = 100;
const DASH_PERIOD = 16;
const BLOCK_COST = 5;
const TOWER_BASE_COST = {
  tesla: 50,
  missile: 52,
  trapper: 31,
  laser: 58,
  shotgun: 24,
  freezer: 34,
  drone: 52,
  fireball: 64,
  dippy: 92,
  support: 44,
  treasury: 60,
  orb: 46,
  crossbow: 30,
  gate: 42
};
const UPGRADE_COSTS = {
  tesla: {
    path1: [12, 58, 52, 624, 7488],
    path2: [24, 50, 300, 3600, 14400]
  },
  missile: {
    path1: [12, 28, 98, 1176, 14112],
    path2: [34, 40, 340, 4080, 24480]
  },
  drone: {
    path1: [14, 56, 136, 1632, 19584],
    path2: [16, 30, 124, 1488, 17856]
  },
  trapper: {
    path1: [12, 22, 94, 1128, 13536],
    path2: [14, 24, 86, 1032, 12384]
  },
  laser: {
    path1: [16, 30, 108, 1296, 15552],
    path2: [20, 60, 144, 1728, 20736]
  },
  shotgun: {
    path1: [12, 22, 84, 960, 5796],
    path2: [12, 24, 90, 1080, 6480]
  },
  freezer: {
    path1: [12, 28, 96, 1152, 13824],
    path2: [12, 26, 92, 1104, 13248]
  },
  fireball: {
    path1: [18, 34, 138, 1656, 19872],
    path2: [16, 28, 120, 1440, 17280]
  },
  dippy: {
    path1: [36, 68, 184, 2208, 26496],
    path2: [30, 82, 170, 2040, 24480]
  },
  support: {
    path1: [24, 52, 126, 1512, 18144],
    path2: [18, 46, 116, 1392, 16704]
  },
  treasury: {
    path1: [19, 52, 340, 2480, 15545],
    path2: [24, 64, 420, 2360, 11800]
  },
  orb: {
    path1: [12, 38, 116, 1480, 8920],
    path2: [14, 34, 124, 1760, 12480]
  },
  crossbow: {
    path1: [8, 12, 39, 468, 5616],
    path2: [9, 19, 62, 744, 8128]
  },
  gate: {
    path1: [14, 32, 94, 1128, 13536],
    path2: [16, 28, 132, 1584, 19008]
  }
};
const TOWER_INFO = {
  tesla: { name: "Tesla", color: "#92d5ff", description: "Tesla chains lightning between nearby enemies and briefly stuns what it hits." },
  missile: { name: "Cannon", color: "#ffae57", description: "Cannon fires heavier explosive shots that deal strong splash damage in an area." },
  trapper: { name: "Trap Setter", color: "#89d37a", description: "Trap Setter seeds temporary traps, mines, or wall turrets depending on its upgrade path. Its traps can catch hidden enemies, but turret mode still cannot detect them." },
  laser: { name: "Laser", color: "#ff7ca8", description: "Laser starts as a single-target burning beam, then branches into plasma or infinite-pierce crystal upgrades." },
  shotgun: { name: "Shotgun", color: "#ffd34d", description: "Shotgun fires short yellow line blasts and can branch into Bullet Storm or the Triple Cannon Wavelength path." },
  freezer: { name: "Freezer", color: "#b5ebff", description: "Freezer launches chilling shots that slow targets, then branches into Permafrost pulses or a constant slowing aura." },
  fireball: { name: "Torch", color: "#ff8b4d", description: "Torch tower. Needs a 2x2 space and can branch into a long-ranged flamethrower or a blazing ring." },
  drone: { name: "Drone", color: "#7de3d6", description: "Drone commands mobile gunships that chase targets inside tower coverage and can branch into support or assault roles." },
  dippy: { name: "Dippy", color: "#fff1b8", description: "Dippy is an egg. A very powerful egg." },
  support: { name: "Support", color: "#c9b6ff", description: "Support fort boosts nearby towers and can branch into a fortress battery or a stronger logistics aura." },
  treasury: { name: "Treasury", color: "#ffd46a", description: "Treasury generates end-of-wave cash and can branch into a trade empire or a loan-and-tax economy hub." },
  orb: { name: "Orb", color: "#9fd0ff", description: "Orb spins satellites around its core, shredding nearby enemies with rotating contact strikes and adaptive orb modes." },
  crossbow: { name: "Crossbow", color: "#8b5d33", description: "Outpost crossbow tower. Branches into a fast repeater path or a heavy ballista path." },
  gate: { name: "Acid", color: "#91e59d", description: "Acid coats enemies in corrosive spray. Direct hits are light, but the damage over time and acid weakening build up fast." }
};
const ENEMY_TYPES = {
  fast: {
    key: "fast",
    name: "Fast",
    color: "#d64545",
    shape: 3,
    hpMultiplier: 0.8,
    speedBonus: 24,
    reward: 2,
    description: "Fast enemies sprint through lanes and punish slow reaction times."
  },
  speedy: {
    key: "speedy",
    name: "Speedy",
    color: "#f0cf42",
    shape: 3,
    hpMultiplier: 1,
    speedBonus: 24,
    reward: 3,
    description: "Speedies trade durability for extreme speed and stronger higher tiers."
  },
  narder: {
    key: "narder",
    name: "Narder",
    color: "#9ff3ff",
    shape: 3,
    hpMultiplier: 3.1,
    speedBonus: 66,
    reward: 10,
    slowResistance: 0.75,
    stunResistance: 0.75,
    spinRate: 11.1,
    description: "Narders resist part of slows and stuns while spinning quickly the entire time."
  },
  pentagon: {
    key: "pentagon",
    name: "Pentagon",
    color: "#7f56d9",
    shape: 5,
    hpMultiplier: 1.85,
    speedBonus: -8,
    reward: 4,
    description: "Pentagons move slower but absorb far more punishment than standard enemies."
  },
  octagon: {
    key: "octagon",
    name: "Pentagon Tier 4",
    color: "#7f56d9",
    shape: 8,
    hpMultiplier: 2.2,
    speedBonus: -20,
    reward: 8,
    description: "Pentagon Tier 4 is the toughest pentagon class, with heavier health and slower movement."
  },
  hexagon: {
    key: "hexagon",
    name: "Hexagon",
    color: "#f1c84c",
    shape: 6,
    hpMultiplier: 2.55,
    speedBonus: -3,
    reward: 5,
    description: "Hexagons are heavy elites with very high health and steady forward pressure."
  },
  diamond: {
    key: "diamond",
    name: "Diamond",
    color: "#8fe4ff",
    shape: 4,
    hpMultiplier: 1.6,
    speedBonus: 12,
    reward: 5,
    description: "Diamonds move faster than pentagons and bring sharper mid-wave pressure."
  },
  health: {
    key: "health",
    name: "Health",
    color: "#d64545",
    shape: 3,
    hpMultiplier: 1.6,
    speedBonus: 24,
    reward: 3,
    description: "Health regenerates over time while keeping strong lane speed."
  },
  life: {
    key: "life",
    name: "Life",
    color: "#bf2e46",
    shape: 3,
    hpMultiplier: 2.45,
    speedBonus: 18,
    reward: 6,
    description: "Life regenerates, heals nearby enemies, and splits into lower tiers when destroyed."
  },
  heavy: {
    key: "heavy",
    name: "Heavy",
    color: "#8e9198",
    shape: 4,
    hpMultiplier: 4.9,
    speedBonus: -16,
    reward: 7,
    description: "Heavies bring very high health and steady forward pressure."
  },
  attacker: {
    key: "attacker",
    name: "Attacker",
    color: "#9d63ff",
    shape: 2,
    hpMultiplier: 3.6,
    speedBonus: 42,
    reward: 6,
    hidden: true,
    description: "Attackers stay hidden and move quickly, demanding detection and burst damage."
  },
  assassin: {
    key: "assassin",
    name: "Assassin",
    color: "#46c36f",
    shape: 2,
    hpMultiplier: 16,
    speedBonus: 50,
    reward: 28,
    hidden: true,
    description: "Assassins stay hidden, move quickly, and carry much heavier health than Attackers."
  },
  shield: {
    key: "shield",
    name: "Shield",
    color: "#8fc7ff",
    shape: 6,
    hpMultiplier: 1.3,
    speedBonus: -4,
    reward: 6,
    description: "Shield enemies project a force field that protects nearby enemies until the field is broken."
  },
  waffle16: {
    key: "waffle16",
    name: "Waffle",
    color: "#d69a43",
    shape: 4,
    hpMultiplier: 2.7,
    speedBonus: -10,
    reward: 10,
    waffleSquares: 16,
    description: "Waffles break apart into smaller waffles when destroyed."
  },
  armored: {
    key: "armored",
    name: "Armoured",
    color: "#93a1b5",
    shape: 6,
    hpMultiplier: 2.15,
    speedBonus: -5,
    reward: 6,
    armor: 4,
    description: "Armoured enemies block kinetic and chemical damage until energy or explosive hits strip the armour away."
  },
  biscuit: {
    key: "biscuit",
    name: "Shortbread",
    color: "#f2dfba",
    shape: 4,
    hpMultiplier: 0.65,
    speedBonus: 56,
    reward: 4,
    description: "Shortbread sprint even faster than Attackers and punish leaks hard."
  },
  sentinel: {
    key: "sentinel",
    name: "Sentinel",
    color: "#9f2323",
    shape: 6,
    hpMultiplier: 27.6,
    speedBonus: -10,
    reward: 24,
    description: "Sentinels scale into much tankier classes and split into more pressure when they fall."
  },
  behemoth: {
    key: "behemoth",
    name: "Behemoth",
    color: "#d88ca8",
    shape: 8,
    hpMultiplier: 260,
    speedBonus: -18,
    reward: 1,
    description: "Behemoth has extreme health and releases six lighter fragments on defeat."
  },
  specialPentagon: {
    key: "specialPentagon",
    name: "Pink",
    color: "#f0a6c4",
    shape: 5,
    hpMultiplier: 54,
    speedBonus: -6,
    reward: 1,
    description: "This is the lighter Behemoth class and it also drops from Behemoths on defeat."
  },
  hydra: {
    key: "hydra",
    name: "Hydra",
    color: "#ffd84f",
    shape: 3,
    hpMultiplier: 4.2,
    speedBonus: 18,
    reward: 12,
    description: "Hydra arrives with hidden, armoured, shelled, and shielded defenses in sequence."
  },
  splitter: {
    key: "splitter",
    name: "Splitter",
    color: "#ffd84f",
    shape: 6,
    hpMultiplier: 1.05,
    speedBonus: 16,
    reward: 8,
    description: "Splitters burst into lower-tier copies when destroyed, keeping lane pressure going after the first pop."
  },
  popcorn: {
    key: "popcorn",
    name: "Popcorn",
    color: "#6fb6ff",
    shape: 32,
    hpMultiplier: 1.74,
    speedBonus: 20,
    reward: 6,
    description: "Popcorn bursts into a wide shower of kernels."
  },
  kernel: {
    key: "kernel",
    name: "Kernel",
    color: "#7abfff",
    shape: 32,
    hpMultiplier: 0.08,
    speedBonus: 46,
    reward: 1,
    description: "Kernels are Popcorn fragments with varying toughness and speed."
  },
  idine: {
    key: "idine",
    name: "Idine",
    color: "#3d1e74",
    shape: 3,
    hpMultiplier: 93.75,
    speedBonus: -6,
    reward: 28,
    armored: true,
    armor: 7,
    description: "Idine bursts into Celuns and Celris, which then fracture again."
  },
  xer: {
    key: "xer",
    name: "Xer",
    color: "#efe6ff",
    shape: 4,
    hpMultiplier: 420,
    speedBonus: -24,
    reward: 1,
    armored: true,
    armor: 14,
    description: "Xer is a siege boss that bursts into Behemoths, Idines, Skreys, Tier 3 Assassins, Tier 3 Breachers, and Popcorn on defeat."
  },
  celun: {
    key: "celun",
    name: "Celun",
    color: "#6a2bbf",
    shape: 32,
    hpMultiplier: 12.375,
    speedBonus: 22,
    reward: 0,
    description: "Celuns split into Cels and Luns on defeat."
  },
  celris: {
    key: "celris",
    name: "Celris",
    color: "#ff74cf",
    shape: 32,
    hpMultiplier: 12.375,
    speedBonus: 24,
    reward: 0,
    allowedDamageClasses: ["energy", "explosive"],
    description: "Celris can only be damaged by energy and explosions."
  },
  cel: {
    key: "cel",
    name: "Cel",
    color: "#274fbe",
    shape: 32,
    hpMultiplier: 7.125,
    speedBonus: 28,
    reward: 0,
    description: "Cels are fragments left from Celuns and Celris."
  },
  lun: {
    key: "lun",
    name: "Lun",
    color: "#c54444",
    shape: 32,
    hpMultiplier: 7.125,
    speedBonus: 30,
    reward: 0,
    description: "Luns split from Celuns."
  },
  ris: {
    key: "ris",
    name: "Ris",
    color: "#f6f8ff",
    shape: 32,
    hpMultiplier: 7.125,
    speedBonus: 30,
    reward: 0,
    armored: true,
    armor: 4,
    description: "Ris split from Celris and keep armour."
  },
  megaWaffle: {
    key: "megaWaffle",
    name: "Mega Waffle",
    color: "#b87d36",
    shape: 4,
    hpMultiplier: 3.9,
    speedBonus: -14,
    reward: 18,
    waffleSquares: 25,
    description: "Mega Waffles briefly disrupt towers when they crash in."
  },
  idaen: {
    key: "idaen",
    name: "Mega Waffle",
    color: "#8d5f2e",
    shape: 4,
    hpMultiplier: 7.5,
    speedBonus: -16,
    reward: 90,
    waffleSquares: 16,
    description: "Mega Waffle throws Tier 2 waffles onto the map."
  },
  adapter: {
    key: "adapter",
    name: "Adapter",
    color: "#b079ff",
    shape: 2,
    hpMultiplier: 16,
    speedBonus: 40,
    reward: 10,
    description: "Adapter ignores the first hit it takes, then permanently becomes immune to that damage class."
  },
  breacher: {
    key: "breacher",
    name: "Breacher",
    color: "#66d8ff",
    shape: 4,
    hpMultiplier: 7.2,
    speedBonus: 30,
    reward: 18,
    description: "Breachers rush while shielded, then slow down sharply once the shield is broken."
  }
};
const DIFFICULTIES = {
  easy: { name: "Easy", money: 60, lives: 140, hp: 0.85, reward: 1.15, interval: 1.08, enemyCount: 1 },
  standard: { name: "Standard", money: 50, lives: 100, hp: 1, reward: 1, interval: 1 },
  hard: { name: "Hard", money: 50, lives: 50, hp: 1.28, reward: 0.9, interval: 0.88, enemyCount: 1 },
  brutal: { name: "Brutal", money: 50, lives: 28, hp: 1.16, reward: 0.65, interval: 0.94, enemyCount: 1.55 },
  sandbox: { name: "Sandbox", money: 999999, lives: 999999, hp: 1, reward: 1, interval: 1, enemyCount: 1 }
};

function cellsFromRects(rects = []) {
  const cells = [];
  for (const rect of rects) {
    for (let y = rect.y; y < rect.y + rect.height; y += 1) {
      for (let x = rect.x; x < rect.x + rect.width; x += 1) {
        cells.push({ x, y });
      }
    }
  }
  return cells;
}

function uniqueCells(cells = []) {
  const seen = new Set();
  const result = [];
  for (const cell of cells) {
    const key = `${cell.x},${cell.y}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(cell);
  }
  return result;
}

function cellsFromPoints(points = []) {
  return points.map(([x, y]) => ({ x, y }));
}

function shiftCells(cells = [], dx = 0, dy = 0) {
  return cells.map((cell) => ({ x: cell.x + dx, y: cell.y + dy }));
}

function shiftRects(rects = [], dx = 0, dy = 0) {
  return rects.map((rect) => ({ ...rect, x: rect.x + dx, y: rect.y + dy }));
}

const MAPS = {
  meadow: {
    name: "Classic",
    description: "Single portal and open beige field with no rocks or sight blockers.",
    scenery: "meadow",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: Math.floor(ROWS / 2) }],
    obstacles: []
  },
  canyon: {
    name: "Canyon Fork",
    description: "Two portals split the lane while canyon pillars block long tower lines.",
    scenery: "canyon",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: 7 }, { x: 0, y: 11 }],
    obstacles: [{ x: 10, y: 7 }, { x: 10, y: 8 }, { x: 15, y: 6 }, { x: 15, y: 12 }, { x: 20, y: 9 }]
  },
  ruins: {
    name: "Sunken Ruins",
    description: "Three portals breach a flooded ruin field. Islands act as fixed build platforms, and blocks must extend outward from islands or existing walls.",
    scenery: "ruins",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: 7 }, { x: 0, y: 9 }, { x: 0, y: 11 }],
    obstacles: uniqueCells([
      ...cellsFromRects([{ x: 5, y: 4, width: 2, height: 3 }]),
      ...cellsFromRects([{ x: 5, y: 8, width: 2, height: 3 }]),
      ...cellsFromRects([{ x: 11, y: 1, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 11, y: 11, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 17, y: 5, width: 3, height: 2 }]),
      ...cellsFromRects([{ x: 17, y: 8, width: 3, height: 2 }])
    ]),
    islandPlacement: true,
    towerSurfaces: "obstacles"
  },
  mango: {
    name: "Mango Pass",
    description: "Two portals attack from opposite edges while the base sits in the middle beneath mango haze and deep yellow ditches cut through the fields.",
    scenery: "mango",
    goal: { x: CENTER_COL, y: CENTER_ROW },
    portals: [{ x: 0, y: 6 }, { x: COLS - 1, y: 10 }],
    obstacles: [{ x: 10, y: 7 }, { x: 10, y: 11 }, { x: 14, y: 5 }, { x: 15, y: 13 }, { x: 19, y: 7 }, { x: 19, y: 11 }],
    noBuildCells: uniqueCells([
      ...cellsFromRects([{ x: 2, y: 2, width: 4, height: 2 }]),
      ...cellsFromPoints([[6, 3], [7, 3], [8, 4], [9, 4], [10, 5]]),
      ...cellsFromRects([{ x: 6, y: 7, width: 5, height: 2 }]),
      ...cellsFromPoints([[11, 6], [12, 6], [13, 7]]),
      ...cellsFromRects([{ x: 2, y: 12, width: 5, height: 2 }]),
      ...cellsFromPoints([[7, 11], [8, 11], [9, 12], [10, 12]]),
      ...cellsFromRects([{ x: 15, y: 2, width: 4, height: 2 }]),
      ...cellsFromPoints([[19, 3], [20, 4], [21, 4], [22, 5]]),
      ...cellsFromRects([{ x: 18, y: 8, width: 5, height: 2 }]),
      ...cellsFromPoints([[23, 7], [24, 7], [25, 8], [26, 8]]),
      ...cellsFromRects([{ x: 14, y: 13, width: 5, height: 2 }]),
      ...cellsFromPoints([[19, 12], [20, 12], [21, 13], [22, 13], [23, 14]])
    ])
  },
  factory: {
    name: "Factory",
    description: "The plant is split into four shifting quarters. One quarter is always a dead gap, and after each wave a full quarter slides into it and leaves a new opening behind.",
    scenery: "factory",
    goal: { x: COLS - 4, y: 4 },
    portals: [{ x: 3, y: 4 }],
    obstacles: [],
    enemySpeed: 1.08
  },
  furnace: {
    name: "Furnace",
    description: "A soot-black foundry full of coal, brimstone, lava vents, pipes, and gears. The furnace core radiates heat, and towers cannot be placed near it.",
    scenery: "furnace",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: Math.floor(ROWS / 2) }],
    obstacles: [
      { x: 15, y: 10 }, { x: 16, y: 10 }, { x: 17, y: 10 }, { x: 18, y: 10 },
      { x: 15, y: 11 }, { x: 16, y: 11 }, { x: 17, y: 11 }, { x: 18, y: 11 },
      { x: 15, y: 12 }, { x: 16, y: 12 }, { x: 17, y: 12 }, { x: 18, y: 12 },
      { x: 15, y: 13 }, { x: 16, y: 13 }, { x: 17, y: 13 }, { x: 18, y: 13 },
      { x: 4, y: 3 }, { x: 8, y: 3 }, { x: 12, y: 3 }, { x: 21, y: 3 }, { x: 25, y: 3 }, { x: 29, y: 3 },
      { x: 4, y: 7 }, { x: 8, y: 7 }, { x: 12, y: 7 }, { x: 21, y: 7 }, { x: 25, y: 7 }, { x: 29, y: 7 },
      { x: 4, y: 16 }, { x: 8, y: 16 }, { x: 12, y: 16 }, { x: 21, y: 16 }, { x: 25, y: 16 }, { x: 29, y: 16 },
      { x: 4, y: 20 }, { x: 8, y: 20 }, { x: 12, y: 20 }, { x: 21, y: 20 }, { x: 25, y: 20 }, { x: 29, y: 20 }
    ],
    furnaceCore: [
      { x: 15, y: 10 }, { x: 16, y: 10 }, { x: 17, y: 10 }, { x: 18, y: 10 },
      { x: 15, y: 11 }, { x: 16, y: 11 }, { x: 17, y: 11 }, { x: 18, y: 11 },
      { x: 15, y: 12 }, { x: 16, y: 12 }, { x: 17, y: 12 }, { x: 18, y: 12 },
      { x: 15, y: 13 }, { x: 16, y: 13 }, { x: 17, y: 13 }, { x: 18, y: 13 }
    ],
    heatRadius: 2.35,
    lavaGrates: [
      { x: 4, y: 3, width: 1, height: 1 },
      { x: 8, y: 3, width: 1, height: 1 },
      { x: 12, y: 3, width: 1, height: 1 },
      { x: 21, y: 3, width: 1, height: 1 },
      { x: 25, y: 3, width: 1, height: 1 },
      { x: 29, y: 3, width: 1, height: 1 },
      { x: 4, y: 7, width: 1, height: 1 },
      { x: 8, y: 7, width: 1, height: 1 },
      { x: 12, y: 7, width: 1, height: 1 },
      { x: 21, y: 7, width: 1, height: 1 },
      { x: 25, y: 7, width: 1, height: 1 },
      { x: 29, y: 7, width: 1, height: 1 },
      { x: 4, y: 16, width: 1, height: 1 },
      { x: 8, y: 16, width: 1, height: 1 },
      { x: 12, y: 16, width: 1, height: 1 },
      { x: 21, y: 16, width: 1, height: 1 },
      { x: 25, y: 16, width: 1, height: 1 },
      { x: 29, y: 16, width: 1, height: 1 },
      { x: 4, y: 20, width: 1, height: 1 },
      { x: 8, y: 20, width: 1, height: 1 },
      { x: 12, y: 20, width: 1, height: 1 },
      { x: 21, y: 20, width: 1, height: 1 },
      { x: 25, y: 20, width: 1, height: 1 },
      { x: 29, y: 20, width: 1, height: 1 }
    ]
  },
  acidcaves: {
    name: "Acid Caves",
    description: "A lightless acid cavern lit by toxic streams and crystal growths. One winding lane cuts through the corrosive pools.",
    scenery: "ruins",
    goal: { x: COLS - 2, y: Math.floor(ROWS / 2) },
    portals: [{ x: 1, y: 4 }, { x: 1, y: 13 }],
    obstacles: uniqueCells([
      ...cellsFromRects([{ x: 6, y: 2, width: 2, height: 4 }]),
      ...cellsFromRects([{ x: 10, y: 10, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 16, y: 4, width: 2, height: 5 }]),
      ...cellsFromRects([{ x: 21, y: 11, width: 3, height: 3 }])
    ]),
    noBuildCells: uniqueCells([
      ...cellsFromRects([{ x: 3, y: 7, width: 4, height: 2 }]),
      ...cellsFromRects([{ x: 12, y: 5, width: 4, height: 2 }]),
      ...cellsFromRects([{ x: 18, y: 8, width: 5, height: 2 }]),
      ...cellsFromRects([{ x: 24, y: 4, width: 3, height: 2 }])
    ])
  },
  shoals: {
    name: "Shoals",
    description: "Build out from scattered islands in shallow water. Islands act as fixed build platforms, and blocks must stay anchored to islands or already placed blocks.",
    scenery: "shoals",
    goal: { x: COLS - 2, y: Math.floor(ROWS / 2) },
    portals: [{ x: 1, y: 3 }, { x: 1, y: 12 }],
    obstacles: uniqueCells([
      ...cellsFromRects([{ x: 4, y: 2, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 9, y: 7, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 16, y: 3, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 19, y: 11, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 24, y: 6, width: 3, height: 3 }])
    ]),
    islandPlacement: true,
    towerSurfaces: "obstacles"
  },
  outpost: {
    name: "Outpost",
    description: "Four portals assault a broken 5x5 fort ring around the base. This map doubles enemies and halves cash gain.",
    scenery: "fortification",
    goal: { x: CENTER_COL, y: CENTER_ROW },
    portals: [
      { x: CENTER_COL, y: 0 },
      { x: COLS - 1, y: CENTER_ROW },
      { x: CENTER_COL, y: ROWS - 1 },
      { x: 0, y: CENTER_ROW }
    ],
    obstacles: [],
    enemyCount: 2,
    reward: 0.5
  },
  fortification: {
    name: "Fortification",
    description: "A mirrored fort corridor with a centered approach, symmetrical walls, and a lighter spread of spike traps.",
    scenery: "fortification",
    goal: { x: COLS - 2, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: Math.floor(ROWS / 2) }],
    obstacles: []
  },
  dippycastle: {
    name: "Dippy Castle",
    description: "Twin eggy 3x3 castle towers guard three middle entrances while three portals press in from the left through bright cream ramparts.",
    scenery: "fortification",
    goal: { x: COLS - 2, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: CENTER_ROW - 5 }, { x: 0, y: CENTER_ROW }, { x: 0, y: CENTER_ROW + 5 }],
    obstacles: shiftCells([
      { x: 18, y: 3 }, { x: 19, y: 3 }, { x: 20, y: 3 },
      { x: 18, y: 4 }, { x: 19, y: 4 }, { x: 20, y: 4 },
      { x: 18, y: 5 }, { x: 19, y: 5 }, { x: 20, y: 5 },
      { x: 18, y: 11 }, { x: 19, y: 11 }, { x: 20, y: 11 },
      { x: 18, y: 12 }, { x: 19, y: 12 }, { x: 20, y: 12 },
      { x: 18, y: 13 }, { x: 19, y: 13 }, { x: 20, y: 13 }
    ], BOARD_CENTER_SHIFT_X, BOARD_CENTER_SHIFT_Y),
    noBuildCells: shiftCells(uniqueCells([
      ...cellsFromRects([{ x: 7, y: 2, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 8, y: 8, width: 3, height: 4 }]),
      ...cellsFromRects([{ x: 7, y: 15, width: 4, height: 3 }]),
      ...cellsFromRects([{ x: 13, y: 1, width: 2, height: 3 }]),
      ...cellsFromRects([{ x: 14, y: 9, width: 2, height: 4 }]),
      ...cellsFromRects([{ x: 13, y: 17, width: 2, height: 2 }]),
      ...cellsFromRects([{ x: 24, y: 3, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 23, y: 8, width: 4, height: 4 }]),
      ...cellsFromRects([{ x: 24, y: 15, width: 3, height: 3 }])
    ]), BOARD_CENTER_SHIFT_X, BOARD_CENTER_SHIFT_Y),
    towerSurfaces: "obstacles"
  },
  cliffs: {
    name: "Cliffs",
    description: "An organic cliff splits the map down the center. The right side is higher ground, the left side is lower, and each side has its own base at the bottom.",
    scenery: "cliffs",
    goal: { x: CENTER_COL - 4, y: ROWS - 2 },
    goals: [{ x: CENTER_COL - 4, y: ROWS - 2 }, { x: CENTER_COL + 3, y: ROWS - 2 }],
    portals: [{ x: 4, y: 1 }, { x: 24, y: 1 }],
    obstacles: shiftCells([
      { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 5 },
      { x: 5, y: 6 }, { x: 6, y: 7 }, { x: 7, y: 7 }, { x: 8, y: 8 }, { x: 9, y: 9 },
      { x: 4, y: 11 }, { x: 5, y: 12 }, { x: 6, y: 12 }, { x: 7, y: 13 }, { x: 8, y: 14 }, { x: 10, y: 15 },
      { x: 26, y: 3 }, { x: 27, y: 3 }, { x: 25, y: 4 }, { x: 26, y: 4 }, { x: 24, y: 5 }, { x: 25, y: 5 },
      { x: 23, y: 7 }, { x: 22, y: 8 }, { x: 21, y: 8 }, { x: 20, y: 9 }, { x: 19, y: 10 },
      { x: 24, y: 12 }, { x: 23, y: 13 }, { x: 22, y: 14 }, { x: 21, y: 14 }, { x: 20, y: 15 }, { x: 18, y: 16 }
    ], BOARD_CENTER_SHIFT_X, BOARD_CENTER_SHIFT_Y),
    noBuildCells: shiftCells(cellsFromPoints([
      [14, 0], [14, 1], [15, 2], [15, 3], [14, 4], [14, 5], [13, 6], [13, 7], [14, 8],
      [15, 9], [15, 10], [16, 11], [16, 12], [15, 13], [15, 14], [14, 15], [14, 16], [14, 17]
    ]), BOARD_CENTER_SHIFT_X, BOARD_CENTER_SHIFT_Y)
  },
  graveyard: {
    name: "Graveyard",
    description: "Triple enemies. The base sits in the middle while enemies emerge evenly from the edges and path into a central build zone.",
    scenery: "graveyard",
    goal: { x: CENTER_COL, y: CENTER_ROW },
    portals: [
      { x: CENTER_COL, y: 0 },
      { x: COLS - 1, y: CENTER_ROW },
      { x: CENTER_COL, y: ROWS - 1 },
      { x: 0, y: CENTER_ROW }
    ],
    hidePortals: true,
    hideRoutes: true,
    buildZone: { x: CENTER_COL - 5, y: CENTER_ROW - 3, width: 11, height: 7 },
    obstacles: [],
    enemyCount: 3,
    reward: 1 / 3
  },
  freezingmountains: {
    name: "Freezing Mountains",
    description: "A blinding frozen pass with one narrow approach. From wave 6 onward, sudden cold snaps can freeze one of your towers for a round before the ice shifts to another target.",
    scenery: "cliffs",
    goal: { x: COLS - 2, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: CENTER_ROW }],
    obstacles: uniqueCells([
      ...cellsFromRects([{ x: 6, y: 2, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 10, y: 13, width: 3, height: 2 }]),
      ...cellsFromRects([{ x: 15, y: 5, width: 4, height: 2 }]),
      ...cellsFromRects([{ x: 21, y: 11, width: 3, height: 3 }]),
      ...cellsFromRects([{ x: 25, y: 4, width: 2, height: 4 }])
    ]),
    freezeHazard: true,
    freezeChance: 0.35
  }
};
const IDAEN_BOSS_WAVES = new Set([25, 50, 75, 100, 125]);
const ADAPTER_BOSS_WAVES = new Set([68, 100, 132]);
const ADAPTER_IMMUNITY_COLORS = {
  chemical: "rgba(158, 255, 136, 0.95)",
  kinetic: "rgba(233, 243, 255, 0.95)",
  energy: "rgba(147, 228, 255, 0.95)",
  explosive: "rgba(255, 197, 116, 0.95)"
};

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 }
];
const polyominoes = [
  {
    name: "Monomino",
    color: "#6d9ef8",
    offsets: [
      { x: 0, y: 0 }
    ]
  },
  {
    name: "Domino",
    color: "#4ebd83",
    offsets: [
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  {
    name: "Tri Bar",
    color: "#5bb6d9",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  {
    name: "Tri Corner",
    color: "#c86ddb",
    offsets: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  {
    name: "I Beam",
    color: "#4574d8",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 }
    ]
  },
  {
    name: "Square",
    color: "#2caf6f",
    offsets: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ]
  },
  {
    name: "T Split",
    color: "#ee8c33",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  {
    name: "L Hook",
    color: "#df5555",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 }
    ]
  },
  {
    name: "J Hook",
    color: "#8a63eb",
    offsets: [
      { x: -1, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  {
    name: "S Slide",
    color: "#ff6497",
    offsets: [
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ]
  },
  {
    name: "Z Slide",
    color: "#f4ca4c",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ]
  },
  {
    name: "X Bastion",
    color: "#5fb8ff",
    offsets: [
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]
  },
  {
    name: "U Keep",
    color: "#57c674",
    offsets: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ]
  },
  {
    name: "P Block",
    color: "#e16060",
    offsets: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 0, y: 2 }
    ]
  },
  {
    name: "W Pentomino",
    color: "#4da7c9",
    offsets: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 2 }
    ]
  },
  {
    name: "Y Pentomino",
    color: "#d38a35",
    offsets: [
      { x: 0, y: -1 },
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 0 }
    ]
  },
  {
    name: "N Pentomino",
    color: "#d95e8c",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 }
    ]
  },
  {
    name: "F Pentomino",
    color: "#cf6bb2",
    offsets: [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 0 }
    ]
  },
  {
    name: "V Pentomino",
    color: "#d3a043",
    offsets: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 }
    ]
  },
  {
    name: "Long L",
    color: "#8f71f2",
    offsets: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: -1, y: 1 }
    ]
  }
];
const TRIOMINO_OR_TETROMINO_SIZES = new Set([3, 4]);
const guaranteedChoicePolyominoes = polyominoes.filter((shape) => TRIOMINO_OR_TETROMINO_SIZES.has(shape.offsets.length));

let currentTool = "wall";
let selectedTowerType = "tesla";
let routes = [];
let hoverCell = null;
let hoverPoint = null;
let activePiece = null;
let pieceChoices = [];
let activePieceChoiceIndex = 0;
let selectedDifficulty = "standard";
let selectedMap = "meadow";
let activeMap = MAPS[selectedMap];
let money = START_MONEY;
let freeBlocks = 3;
let currentBlockCost = BLOCK_COST;
let lives = START_LIVES;
let waveNumber = 0;
let nextBlockId = 1;
let nextTowerId = 1;
let nextEnemyId = 1;
let nextProjectileId = 1;
let nextEffectId = 1;
let nextTrapId = 1;
let enemies = [];
let projectiles = [];
let towers = [];
let effects = [];
let drones = [];
let traps = [];
let blocks = new Map();
let wave = null;
let dashOffset = 0;
let lastTimestamp = 0;
let gameSpeedMultiplier = 1;
let message = "Ready to build.";
let messageTimer = 0;
let selectedTowerId = null;
let ambientParticles = [];
let ambientTimer = 0;
let invalidPlacementTimer = 0;
let gameMode = "menu";
let almanacOrigin = "menu";
let almanacTab = "enemies";
let selectedAlmanacTower = "tesla";
let selectedAlmanacEnemy = "fast:1";
let selectedAlmanacWave = 1;
const MAX_ALMANAC_WAVE = 100;
const waveAlmanacSummaryCache = new Map();
const enemyAlmanacArtCache = new Map();
const blockPreviewArtCache = new Map();
const discoveredEnemies = new Set();
let infiniteMode = false;
let cheatBuffer = [];
let crossbowUnlocked = false;
let dippyUnlocked = false;
let freezerUnlocked = false;
let fireballUnlocked = false;
let gateUnlocked = false;
let cheatUnlockAll = false;
let unlockedWaveMax = 0;
let outpostTowerUnlockCompleted = false;
let dippyCastleUnlockCompleted = false;
let furnaceUnlockCompleted = false;
let acidCavesUnlockCompleted = false;
let outpostWalllessQuestFailed = false;
let outpostQuestBlocksPlaced = 0;
let spawnPortalCursor = 0;
let spawnPortalOrder = [];
let autoWaveEnabled = false;
let autoWaveUnlocked = false;
let autoWaveTimer = 0;
let sandboxWaveTarget = null;
let armedAbility = null;
let droneCommandState = null;
let factoryState = null;
const heldScrollKeys = new Set();
let scrollVelocityX = 0;
let scrollVelocityY = 0;
let selectedGateRotation = 0;
const introducedEnemyKeys = new Set();
const shownWaveWarnings = new Set();
const tutorialProgress = {
  scrolled: false,
  placedBlock: false,
  placedTower: false,
  upgradedTower: false
};
const shownTutorialPopups = new Set();
let tutorialPopupQueue = [];
let activeTutorialPopup = null;
let tutorialResumeMode = null;
let tutorialDismissed = false;
let tutorialStepDelayTimer = 0;
let activeWaveWarning = null;
let introTutorialSeen = false;
let screenShakeTimer = 0;
let screenShakeAmount = 0;
const ALMANAC_TOWER_TYPES = ["tesla", "missile", "trapper", "laser", "shotgun", "freezer", "drone", "fireball", "dippy", "support", "treasury", "orb", "crossbow", "gate"];
const MENU_STATE_STORAGE_KEY = "blockDefence.menuState";
const PROGRESSION_STORAGE_KEY = "blockDefence.progression";

function normalizeMapKey(mapKey) {
  if (mapKey === "fotification") {
    return "fortification";
  }
  return mapKey;
}

function persistMenuState() {
  try {
    window.localStorage?.setItem(MENU_STATE_STORAGE_KEY, JSON.stringify({
      difficulty: selectedDifficulty,
      map: selectedMap
    }));
  } catch (error) {
    // Ignore storage failures so menu interaction still works.
  }
}

function persistProgressionState() {
  try {
    window.localStorage?.setItem(PROGRESSION_STORAGE_KEY, JSON.stringify({
      cheatUnlockAll,
      unlockedWaveMax,
      outpostTowerUnlockCompleted,
      dippyCastleUnlockCompleted,
      furnaceUnlockCompleted,
      acidCavesUnlockCompleted,
      crossbowUnlocked,
      dippyUnlocked,
      freezerUnlocked,
      fireballUnlocked,
      gateUnlocked,
      tutorialDismissed,
      introTutorialSeen
    }));
  } catch (error) {
    // Ignore storage failures so the run can continue.
  }
}

function syncTowerUnlockState() {
  crossbowUnlocked = true;
  dippyUnlocked = true;
  freezerUnlocked = true;
  fireballUnlocked = true;
  gateUnlocked = true;
}

function restoreProgressionState() {
  try {
    const raw = window.localStorage?.getItem(PROGRESSION_STORAGE_KEY);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    cheatUnlockAll = Boolean(parsed?.cheatUnlockAll);
    unlockedWaveMax = Math.max(0, Math.min(100, Math.floor(Number(parsed?.unlockedWaveMax) || 0)));
    if (cheatUnlockAll) {
      unlockedWaveMax = 100;
    }
    outpostTowerUnlockCompleted = Boolean(parsed?.outpostTowerUnlockCompleted);
    dippyCastleUnlockCompleted = Boolean(parsed?.dippyCastleUnlockCompleted);
    furnaceUnlockCompleted = Boolean(parsed?.furnaceUnlockCompleted);
    acidCavesUnlockCompleted = Boolean(parsed?.acidCavesUnlockCompleted);
    tutorialDismissed = Boolean(parsed?.tutorialDismissed);
    introTutorialSeen = Boolean(parsed?.introTutorialSeen);
    syncTowerUnlockState();
  } catch (error) {
    // Ignore malformed saves and fall back to defaults.
  }
}

function restoreMenuState() {
  try {
    const raw = window.localStorage?.getItem(MENU_STATE_STORAGE_KEY);

    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    const nextDifficulty = typeof parsed?.difficulty === "string" ? parsed.difficulty : null;
    const nextMap = typeof parsed?.map === "string" ? normalizeMapKey(parsed.map) : null;

    if (["easy", "standard", "hard", "brutal", "sandbox"].includes(nextDifficulty)) {
      selectedDifficulty = nextDifficulty;
    }

    if (nextMap && MAPS[nextMap]) {
      selectedMap = nextMap;
      activeMap = MAPS[selectedMap];
    }
  } catch (error) {
    // Ignore malformed saved state and fall back to defaults.
  }
}

function setUnlockedWaveMax(nextValue, persist = true) {
  const clamped = Math.max(0, Math.min(100, Math.floor(Number(nextValue) || 0)));
  if (clamped === unlockedWaveMax) {
    return;
  }
  unlockedWaveMax = clamped;
  if (persist) {
    persistProgressionState();
  }
}

function sandboxTypedWave() {
  return Math.max(1, Math.floor(Number(sandboxWaveInput?.value) || sandboxWaveTarget || waveNumber || 1));
}

function sandboxSelectableWave() {
  return sandboxTypedWave();
}

restoreMenuState();
restoreProgressionState();
document.body.dataset.appBootStage = "menu-state-restored";
window.__blockDefenceMenuBridge = {
  getState() {
    return {
      difficulty: selectedDifficulty,
      map: selectedMap
    };
  },
  setDifficulty(nextDifficulty) {
    if (!["easy", "standard", "hard", "brutal", "sandbox"].includes(nextDifficulty)) {
      return false;
    }

    selectedDifficulty = nextDifficulty;
    persistMenuState();
    if (typeof updateMenuSelectors === "function") {
      updateMenuSelectors();
    }
    return true;
  },
  setMap(nextMap) {
    const normalizedMap = normalizeMapKey(nextMap);
    if (!MAPS[normalizedMap]) {
      return false;
    }

    selectedMap = normalizedMap;
    activeMap = MAPS[selectedMap];
    persistMenuState();
    if (typeof updateMenuSelectors === "function") {
      updateMenuSelectors();
    }
    return true;
  },
  startFromMenu() {
    persistMenuState();
    return startGame();
  },
  openAlmanacFromMenu() {
    persistMenuState();
    return openAlmanac("menu");
  },
  refreshMenu() {
    if (typeof updateMenuSelectors === "function") {
      updateMenuSelectors();
    }
  }
};
window.__blockDefenceMenuMaps = MAPS;
refillPieceChoices(selectedMap);
document.body.dataset.appBootStage = "bridge-ready";

const createGrid = () =>
  Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      blockId: null,
      towerId: null
    }))
  );

let grid = createGrid();

function activePortals() {
  if (isFactoryMap() && factoryState?.portals?.length) {
    return factoryState.portals;
  }
  if (isGraveyardMap()) {
    return graveyardEdgePortals();
  }
  return activeMap.portals;
}

function activeGoals() {
  if (isFactoryMap() && factoryState?.goal) {
    return [factoryState.goal];
  }
  return activeMap.goals || [activeMap.goal];
}

function goalPortal() {
  if (isFactoryMap() && factoryState?.goal) {
    return factoryState.goal;
  }
  return activeGoals()[0];
}

function baseCenter(referencePoint = null) {
  const goals = activeGoals();
  if (referencePoint && goals.length > 1) {
    const nearest = goals.reduce((best, goal) => {
      const distance = Math.hypot(goal.x - referencePoint.x, goal.y - referencePoint.y);
      return !best || distance < best.distance ? { goal, distance } : best;
    }, null);
    return cellCenter(nearest.goal.x, nearest.goal.y);
  }
  return cellCenter(goalPortal().x, goalPortal().y);
}

function isOutpostMap() {
  return selectedMap === "outpost";
}

function isGraveyardMap() {
  return selectedMap === "graveyard";
}

function isFactoryMap() {
  return selectedMap === "factory";
}

function isFurnaceMap() {
  return selectedMap === "furnace";
}

function isFreezingMountainsMap() {
  return selectedMap === "freezingmountains";
}

function isStandardOrHarderDifficulty() {
  return selectedDifficulty === "standard" || selectedDifficulty === "hard" || selectedDifficulty === "brutal";
}

function isCliffsMap() {
  return selectedMap === "cliffs";
}

function factoryQuarterCycle() {
  return [0, 1, 3, 2];
}

function factoryQuarterBounds(index) {
  const left = index % 2 === 0 ? 0 : COLS / 2;
  const top = index < 2 ? 0 : ROWS / 2;
  return {
    x: left,
    y: top,
    width: COLS / 2,
    height: ROWS / 2
  };
}

function factoryQuarterIndexForCell(x, y) {
  return (y >= ROWS / 2 ? 2 : 0) + (x >= COLS / 2 ? 1 : 0);
}

function factoryCellInHole(x, y) {
  if (!isFactoryMap() || !factoryState) {
    return false;
  }
  return factoryQuarterIndexForCell(x, y) === factoryState.holeIndex;
}

function cellsShareFactoryQuarter(cells) {
  if (!cells.length) {
    return true;
  }
  const quarterIndex = factoryQuarterIndexForCell(cells[0].x, cells[0].y);
  return cells.every((cell) => factoryQuarterIndexForCell(cell.x, cell.y) === quarterIndex && !factoryCellInHole(cell.x, cell.y));
}

function shiftPointIfFactoryQuarter(point, sourceQuarter, dx, dy) {
  if (!point) {
    return point;
  }
  if (factoryQuarterIndexForCell(point.x, point.y) !== sourceQuarter) {
    return point;
  }
  return {
    x: point.x + dx,
    y: point.y + dy,
    renderOffsetX: (point.renderOffsetX || 0) - (dx * CELL_SIZE),
    renderOffsetY: (point.renderOffsetY || 0) - (dy * CELL_SIZE)
  };
}

function rebuildGridOccupancy() {
  grid = createGrid();
  for (const block of blocks.values()) {
    for (const cell of block.cells) {
      if (inBounds(cell.x, cell.y)) {
        grid[cell.y][cell.x].blockId = block.id;
      }
    }
  }
  for (const tower of towers) {
    for (const cell of tower.footprintCells) {
      if (inBounds(cell.x, cell.y)) {
        grid[cell.y][cell.x].towerId = tower.id;
      }
    }
  }
}

function initializeFactoryState() {
  factoryState = {
    holeIndex: 3,
    portals: [{ x: 3, y: 4 }],
    goal: { x: COLS - 4, y: 4 }
  };
}

function advanceFactoryQuarter() {
  if (!isFactoryMap() || !factoryState) {
    return;
  }

  const cycle = factoryQuarterCycle();
  const holeCycleIndex = cycle.indexOf(factoryState.holeIndex);
  const sourceQuarter = cycle[(holeCycleIndex - 1 + cycle.length) % cycle.length];
  const holeBounds = factoryQuarterBounds(factoryState.holeIndex);
  const sourceBounds = factoryQuarterBounds(sourceQuarter);
  const dx = holeBounds.x - sourceBounds.x;
  const dy = holeBounds.y - sourceBounds.y;

  for (const block of blocks.values()) {
    if (block.cells.length > 0 && block.cells.every((cell) => factoryQuarterIndexForCell(cell.x, cell.y) === sourceQuarter)) {
      block.cells = block.cells.map((cell) => ({ x: cell.x + dx, y: cell.y + dy }));
      block.renderOffsetX = -(dx * CELL_SIZE);
      block.renderOffsetY = -(dy * CELL_SIZE);
    }
  }

  for (const tower of towers) {
    if (tower.footprintCells.length > 0 && tower.footprintCells.every((cell) => factoryQuarterIndexForCell(cell.x, cell.y) === sourceQuarter)) {
      const previousCenterX = tower.centerX;
      const previousCenterY = tower.centerY;
      tower.x += dx;
      tower.y += dy;
      tower.footprintCells = tower.footprintCells.map((cell) => ({ x: cell.x + dx, y: cell.y + dy }));
      tower.centerX += dx * CELL_SIZE;
      tower.centerY += dy * CELL_SIZE;
      tower.renderOffsetX = -(dx * CELL_SIZE);
      tower.renderOffsetY = -(dy * CELL_SIZE);
      for (const drone of drones) {
        if (drone.towerId === tower.id) {
          drone.x += tower.centerX - previousCenterX;
          drone.y += tower.centerY - previousCenterY;
          drone.renderOffsetX = -(dx * CELL_SIZE);
          drone.renderOffsetY = -(dy * CELL_SIZE);
        }
      }
    }
  }

  for (const trap of traps) {
    if (factoryQuarterIndexForCell(trap.x, trap.y) === sourceQuarter) {
      trap.x += dx;
      trap.y += dy;
      trap.centerX += dx * CELL_SIZE;
      trap.centerY += dy * CELL_SIZE;
      trap.renderOffsetX = -(dx * CELL_SIZE);
      trap.renderOffsetY = -(dy * CELL_SIZE);
    }
  }

  factoryState.portals = factoryState.portals.map((portal) => shiftPointIfFactoryQuarter(portal, sourceQuarter, dx, dy));
  factoryState.goal = shiftPointIfFactoryQuarter(factoryState.goal, sourceQuarter, dx, dy);
  factoryState.holeIndex = sourceQuarter;
  rebuildGridOccupancy();
  routes = computeRoutes();
}

function supportWaveIncomeEntries() {
  return towers
    .filter((tower) => tower.type === "treasury")
    .map((tower) => ({
      tower,
      amount: Math.max(0, Math.round(treasuryWaveIncome(tower)))
    }))
    .filter((entry) => entry.amount > 0);
}

function supportEnemyDropMultiplier() {
  const bonus = towers
    .filter((tower) => (towerStats(tower).enemyDropMultiplier || 1) > 1)
    .reduce((total, tower) => total + Math.max(0, (towerStats(tower).enemyDropMultiplier || 1) - 1), 0);
  return 1 + bonus;
}

function supportEnemyDropFlatBonus() {
  return towers.reduce((total, tower) => total + Math.max(0, towerStats(tower).enemyDropFlatBonus || 0), 0);
}

function enemyCashDropFromKill(enemy) {
  const baseReward = Math.max(0, Math.round(enemy?.reward || 0));
  const multipliedReward = Math.max(1, Math.round(baseReward * supportEnemyDropMultiplier()));
  const flatBonus = supportEnemyDropFlatBonus();
  return Math.max(1, multipliedReward + flatBonus);
}

function isWaveRunning() {
  return Boolean(wave && !wave.complete);
}

function treasuryTradeEmpireMultiplier(targetTower) {
  if (!targetTower || targetTower.type !== "treasury") {
    return 1;
  }

  let multiplier = 1;
  for (const tower of towers) {
    if (tower.id === targetTower.id || tower.type !== "treasury") {
      continue;
    }
    const stats = towerStats(tower);
    if (!stats.tradeEmpireAura || !stats.auraRadius) {
      continue;
    }
    if (Math.hypot(targetTower.centerX - tower.centerX, targetTower.centerY - tower.centerY) <= stats.auraRadius) {
      multiplier *= stats.tradeEmpireAura;
    }
  }
  return multiplier;
}

function treasuryWaveIncome(tower) {
  const stats = towerStats(tower);
  if (stats.bankEnabled) {
    return 0;
  }
  return Math.max(0, (stats.waveCash || 0) * treasuryTradeEmpireMultiplier(tower));
}

function treasuryBankCap(tower) {
  const stats = towerStats(tower);
  return Math.max(0, Math.round(stats.bankCap || 0));
}

function processTreasuryBanks() {
  for (const tower of towers) {
    if (tower.type !== "treasury") {
      continue;
    }
    const stats = towerStats(tower);
    if (!stats.bankEnabled) {
      continue;
    }
    const baseIncome = Math.max(0, (stats.waveCash || 0) * treasuryTradeEmpireMultiplier(tower));
    const currentStored = Math.max(0, tower.bankStored || 0);
    const lastIncrease = Math.max(0, tower.bankLastIncrease || baseIncome);
    const growthGain = currentStored > 0 ? lastIncrease * (currentStored * 0.1) : 0;
    const rawGain = baseIncome + growthGain;
    const cap = Math.max(0, Math.round(stats.bankCap || 0));
    const actualGain = Math.max(0, Math.min(cap - currentStored, rawGain));
    tower.bankStored = currentStored + actualGain;
    tower.bankLastIncrease = actualGain;
    if (actualGain > 0) {
      addFloatingText(tower.centerX, tower.centerY - 12, `+$${Math.round(actualGain)}`, "#ffe27a", 1.05);
    }
    refreshOpenTowerPopup(tower.id);
  }
}

function treasuryLoanOffer(tower) {
  return null;
}

function processTreasuryLoans() {
  for (const tower of towers) {
    if (tower.type !== "treasury") {
      continue;
    }
    const remaining = Math.max(0, tower.loanDebtRemaining || 0);
    const roundsLeft = Math.max(0, tower.loanRoundsRemaining || 0);
    if (remaining <= 0 || roundsLeft <= 0) {
      tower.loanDebtRemaining = 0;
      tower.loanRoundsRemaining = 0;
      continue;
    }
    const payment = Math.min(remaining, Math.ceil(remaining / roundsLeft));
    money = Math.max(0, money - payment);
    tower.loanDebtRemaining = Math.max(0, remaining - payment);
    tower.loanRoundsRemaining = Math.max(0, roundsLeft - 1);
    addFloatingText(tower.centerX, tower.centerY + 10, `-$${payment}`, "#ff8f8f", 1);
    refreshOpenTowerPopup(tower.id);
  }
}

function takeTreasuryLoan(tower) {
  const offer = treasuryLoanOffer(tower);
  if (!offer) {
    setMessage("This treasury cannot take a loan right now.", 1.4);
    return false;
  }
  money += offer.amount;
  tower.loanDebtRemaining = offer.repayTotal;
  tower.loanRoundsRemaining = offer.rounds;
  addFloatingText(tower.centerX, tower.centerY - 16, `+$${offer.amount}`, "#ffe27a", 1.15);
  openTowerPopup(tower);
  setMessage(`Treasury loan taken: +$${offer.amount} now, repay $${offer.repayTotal} over ${offer.rounds} rounds.`, 2);
  return true;
}

function collectTreasuryBank(tower) {
  if (!tower || tower.type !== "treasury") {
    return false;
  }
  const stored = Math.max(0, Math.round(tower.bankStored || 0));
  if (stored <= 0) {
    setMessage("That bank is empty.", 1.2);
    return false;
  }
  money += stored;
  tower.bankStored = 0;
  addFloatingText(tower.centerX, tower.centerY - 16, `+$${stored}`, "#ffe27a", 1.15);
  openTowerPopup(tower);
  setMessage(`Collected $${stored} from the treasury bank.`, 1.8);
  return true;
}

function addFloatingText(x, y, text, color = "#ffe27a", ttl = 1.05) {
  effects.push({
    id: nextEffectId,
    kind: "floatingText",
    x,
    y,
    text,
    color,
    maxTtl: ttl,
    ttl,
    vy: -38
  });
  nextEffectId += 1;
}

function triggerScreenShake(amount = 0, duration = 0) {
  if (amount <= 0 || duration <= 0) {
    return;
  }
  screenShakeAmount = Math.max(screenShakeAmount, amount * CELL_SIZE * 0.32);
  screenShakeTimer = Math.max(screenShakeTimer, duration);
}

function mapBuildZone() {
  return activeMap.buildZone || null;
}

function cellInBuildZone(x, y) {
  const zone = mapBuildZone();
  if (!zone) {
    return true;
  }

  return x >= zone.x && x < zone.x + zone.width && y >= zone.y && y < zone.y + zone.height;
}

function shuffleIndices(length) {
  const values = Array.from({ length }, (_, index) => index);
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [values[index], values[swap]] = [values[swap], values[index]];
  }
  return values;
}

function graveyardEdgePortals() {
  const portals = [];

  for (let x = 0; x < COLS; x += 1) {
    portals.push({ x, y: 0 });
    portals.push({ x, y: ROWS - 1 });
  }

  for (let y = 1; y < ROWS - 1; y += 1) {
    portals.push({ x: 0, y });
    portals.push({ x: COLS - 1, y });
  }

  return portals;
}

function resetSpawnPortalOrder() {
  spawnPortalCursor = 0;
  spawnPortalOrder = shuffleIndices(activePortals().length);
}

function nextSpawnPortalIndex() {
  if (spawnPortalOrder.length !== activePortals().length || spawnPortalOrder.length === 0) {
    resetSpawnPortalOrder();
  }

  const value = spawnPortalOrder[spawnPortalCursor % spawnPortalOrder.length];
  spawnPortalCursor += 1;

  if (spawnPortalCursor % Math.max(spawnPortalOrder.length, 1) === 0) {
    spawnPortalOrder = shuffleIndices(activePortals().length);
    spawnPortalCursor = 0;
  }

  return value;
}

function isIdaenWave(round = waveNumber) {
  return false;
}

function isAdapterWave(round = waveNumber) {
  return !isOutpostMap() && ADAPTER_BOSS_WAVES.has(round);
}

function enemyCountMultiplier() {
  return (DIFFICULTIES[selectedDifficulty].enemyCount || 1) * (activeMap.enemyCount || 1);
}

function rewardMultiplier() {
  return DIFFICULTIES[selectedDifficulty].reward * (activeMap.reward || 1);
}

function enemyRewardMultiplier() {
  return rewardMultiplier() * 1.25;
}

function brutalWaveCountScale(round = waveNumber) {
  if (selectedDifficulty !== "brutal") {
    return 1;
  }
  if (round >= 70) {
    return 0.82;
  }
  if (round >= 45) {
    return 0.86;
  }
  if (round >= 25) {
    return 0.9;
  }
  return 0.94;
}

function brutalWaveIntervalFloor() {
  return selectedDifficulty === "brutal" ? 0.64 : 0.56;
}

function brutalBossHpScale() {
  return selectedDifficulty === "brutal" ? 0.82 : 1;
}

function brutalBossSpeedScale() {
  return selectedDifficulty === "brutal" ? 0.94 : 1;
}

function startingMoney() {
  return DIFFICULTIES[selectedDifficulty].money;
}

function obstacleAt(x, y) {
  if (factoryCellInHole(x, y)) {
    return true;
  }
  return activeMap.obstacles.some((cell) => cell.x === x && cell.y === y);
}

function towerNearFurnaceHeat(cells) {
  if (!isFurnaceMap()) {
    return false;
  }
  const core = activeMap.furnaceCore || [];
  const radius = activeMap.heatRadius || 0;
  return cells.some((cell) =>
    core.some((hotCell) => Math.hypot(hotCell.x - cell.x, hotCell.y - cell.y) <= radius)
  );
}

function furnaceLavaPitAt(x, y) {
  if (!isFurnaceMap()) {
    return false;
  }
  return (activeMap.lavaGrates || []).some((grate) =>
    x >= grate.x && x < grate.x + grate.width && y >= grate.y && y < grate.y + grate.height
  );
}

function noBuildAt(x, y) {
  return (activeMap.noBuildCells || []).some((cell) => cell.x === x && cell.y === y);
}

function cellsFitInsideDitch(cells) {
  return cells.length > 0 && cells.every((cell) => noBuildAt(cell.x, cell.y));
}

function mapUsesIslandPlacement() {
  return Boolean(activeMap.islandPlacement);
}

function islandAt(x, y) {
  return mapUsesIslandPlacement() && activeMap.obstacles.some((cell) => cell.x === x && cell.y === y);
}

function cellAllowsTowerSurface(x, y) {
  return (activeMap.towerSurfaces === "obstacles" || mapUsesIslandPlacement()) && activeMap.obstacles.some((cell) => cell.x === x && cell.y === y);
}

function towerPlacedOnIsland(tower) {
  return mapUsesIslandPlacement() && Boolean(tower?.footprintCells?.some((cell) => islandAt(cell.x, cell.y)));
}

function obstacleBlocksSight(x, y) {
  if (!obstacleAt(x, y)) {
    return false;
  }
  if (isEndpoint(x, y)) {
    return false;
  }
  if (islandAt(x, y)) {
    return false;
  }
  if (isFurnaceMap() && furnaceLavaPitAt(x, y) && !(activeMap.furnaceCore || []).some((cell) => cell.x === x && cell.y === y)) {
    return false;
  }
  return true;
}

function cliffDivideXForRow(row) {
  if (!isCliffsMap()) {
    return COLS / 2;
  }
  const ledgeCells = (activeMap.noBuildCells || []).filter((cell) => cell.y === row);
  if (ledgeCells.length === 0) {
    return COLS / 2;
  }
  return ledgeCells.reduce((total, cell) => total + cell.x, 0) / ledgeCells.length;
}

function cliffSideForCell(cell) {
  if (!isCliffsMap() || !cell) {
    return null;
  }
  if (noBuildAt(cell.x, cell.y)) {
    return "ledge";
  }
  return cell.x < cliffDivideXForRow(cell.y) ? "left" : "right";
}

function cellsStayOnSingleCliffSide(cells) {
  if (!isCliffsMap() || cells.length === 0) {
    return true;
  }
  const side = cliffSideForCell(cells[0]);
  if (!side || side === "ledge") {
    return false;
  }
  return cells.every((cell) => cliffSideForCell(cell) === side);
}

function cellsTouchAnchoredLand(cells) {
  if (!mapUsesIslandPlacement()) {
    return true;
  }

  return cells.some((cell) => islandAt(cell.x, cell.y) || directions.some((direction) => {
    const nx = cell.x + direction.dx;
    const ny = cell.y + direction.dy;
    return inBounds(nx, ny) && (islandAt(nx, ny) || grid[ny][nx].blockId !== null);
  }));
}

function isEndpoint(x, y) {
  return activePortals().some((portal) => portal.x === x && portal.y === y) || activeGoals().some((goal) => goal.x === x && goal.y === y);
}

function inBounds(x, y) {
  return x >= 0 && x < COLS && y >= 0 && y < ROWS;
}

function cellCenter(x, y) {
  return {
    x: x * CELL_SIZE + CELL_SIZE / 2,
    y: y * CELL_SIZE + CELL_SIZE / 2
  };
}

function boardPerspective() {
  const boardWidth = COLS * CELL_SIZE;
  const boardHeight = ROWS * CELL_SIZE;
  const screenScale = 0.88;
  return {
    boardWidth,
    boardHeight,
    horizonY: boardHeight * 0.3,
    centerX: boardWidth / 2,
    screenOffsetX: (canvas.width - boardWidth * screenScale) / 2,
    screenOffsetY: (canvas.height - boardHeight * screenScale) / 2,
    screenScale,
    minScale: 0.82,
    depthCurve: 1.12
  };
}

function projectBoardPoint(x, y) {
  const perspective = boardPerspective();
  const clampedDepth = Math.max(0, Math.min(1, y / perspective.boardHeight));
  const easedDepth = clampedDepth ** perspective.depthCurve;
  const scale = perspective.minScale + (1 - perspective.minScale) * easedDepth;
  return {
    x: perspective.screenOffsetX + (perspective.centerX + (x - perspective.centerX) * scale) * perspective.screenScale,
    y: perspective.screenOffsetY + (perspective.horizonY + (perspective.boardHeight - perspective.horizonY) * easedDepth) * perspective.screenScale,
    scale: scale * perspective.screenScale,
    depth: easedDepth
  };
}

function projectCellCenterPoint(x, y) {
  return projectBoardPoint(x * CELL_SIZE + CELL_SIZE / 2, y * CELL_SIZE + CELL_SIZE / 2);
}

function projectCellCorner(x, y) {
  return projectBoardPoint(x * CELL_SIZE, y * CELL_SIZE);
}

function projectCellQuad(x, y, widthCells = 1, heightCells = 1) {
  return {
    topLeft: projectCellCorner(x, y),
    topRight: projectCellCorner(x + widthCells, y),
    bottomRight: projectCellCorner(x + widthCells, y + heightCells),
    bottomLeft: projectCellCorner(x, y + heightCells)
  };
}

function shrinkProjectedQuad(quad, amount = 0.08) {
  const center = {
    x: (quad.topLeft.x + quad.topRight.x + quad.bottomRight.x + quad.bottomLeft.x) / 4,
    y: (quad.topLeft.y + quad.topRight.y + quad.bottomRight.y + quad.bottomLeft.y) / 4
  };
  const lerp = (point) => ({
    x: point.x + (center.x - point.x) * amount,
    y: point.y + (center.y - point.y) * amount
  });
  return {
    topLeft: lerp(quad.topLeft),
    topRight: lerp(quad.topRight),
    bottomRight: lerp(quad.bottomRight),
    bottomLeft: lerp(quad.bottomLeft)
  };
}

function inflateProjectedQuad(quad, padding = 6) {
  const center = {
    x: (quad.topLeft.x + quad.topRight.x + quad.bottomRight.x + quad.bottomLeft.x) / 4,
    y: (quad.topLeft.y + quad.topRight.y + quad.bottomRight.y + quad.bottomLeft.y) / 4
  };
  const expand = (point) => {
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    const distance = Math.hypot(dx, dy) || 1;
    const scale = (distance + padding) / distance;
    return {
      x: center.x + dx * scale,
      y: center.y + dy * scale
    };
  };
  return {
    topLeft: expand(quad.topLeft),
    topRight: expand(quad.topRight),
    bottomRight: expand(quad.bottomRight),
    bottomLeft: expand(quad.bottomLeft)
  };
}

function pointInPolygon(point, vertices) {
  let sign = 0;
  for (let index = 0; index < vertices.length; index += 1) {
    const current = vertices[index];
    const next = vertices[(index + 1) % vertices.length];
    const cross = (next.x - current.x) * (point.y - current.y) - (next.y - current.y) * (point.x - current.x);
    if (Math.abs(cross) < 1e-6) {
      continue;
    }
    const currentSign = Math.sign(cross);
    if (sign === 0) {
      sign = currentSign;
    } else if (currentSign !== sign) {
      return false;
    }
  }
  return true;
}

function pointInProjectedQuad(point, quad, padding = 0) {
  const hitQuad = padding > 0 ? inflateProjectedQuad(quad, padding) : quad;
  return pointInPolygon(point, [hitQuad.topLeft, hitQuad.topRight, hitQuad.bottomRight, hitQuad.bottomLeft]);
}

function fillProjectedQuad(quad, fillStyle, strokeStyle = null, lineWidth = 0) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(quad.topLeft.x, quad.topLeft.y);
  ctx.lineTo(quad.topRight.x, quad.topRight.y);
  ctx.lineTo(quad.bottomRight.x, quad.bottomRight.y);
  ctx.lineTo(quad.bottomLeft.x, quad.bottomLeft.y);
  ctx.closePath();
  ctx.fill();
  if (strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function rotateOffset(offset, turns) {
  let next = { x: offset.x, y: offset.y };

  for (let index = 0; index < turns; index += 1) {
    next = { x: -next.y, y: next.x };
  }

  return next;
}

function mirrorOffset(offset) {
  return {
    x: -offset.x,
    y: offset.y
  };
}

function createRandomPiece(mapKey = null) {
  return createRandomPieceFromPool(polyominoes, mapKey);
}

function normalizePieceOffsets(offsets = []) {
  if (offsets.length === 0) {
    return [];
  }
  const minX = Math.min(...offsets.map((offset) => offset.x));
  const minY = Math.min(...offsets.map((offset) => offset.y));
  return offsets.map((offset) => ({
    x: offset.x - minX,
    y: offset.y - minY
  }));
}

function piecePreviewDataUrl(piece, options = {}) {
  if (!piece?.offsets?.length) {
    return "";
  }

  const fill = options.color || piece.color || "#7d8ea3";
  const cellSize = options.cellSize || 18;
  const padding = options.padding || 6;
  const cells = normalizePieceOffsets(piece.offsets);
  const maxX = Math.max(...cells.map((cell) => cell.x));
  const maxY = Math.max(...cells.map((cell) => cell.y));
  const width = (maxX + 1) * cellSize + padding * 2;
  const height = (maxY + 1) * cellSize + padding * 2;
  const key = `${piece.name}|${fill}|${cellSize}|${padding}|${cells.map((cell) => `${cell.x},${cell.y}`).join(";")}`;

  if (blockPreviewArtCache.has(key)) {
    return blockPreviewArtCache.get(key);
  }

  const rects = cells.map((cell) => {
    const x = padding + cell.x * cellSize;
    const y = padding + cell.y * cellSize;
    const inset = Math.max(1, Math.round(cellSize * 0.08));
    const innerSize = cellSize - inset * 2;
    return `
      <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="${Math.max(3, cellSize * 0.16)}" fill="${fill}" stroke="rgba(30,30,30,0.22)" stroke-width="1.2"/>
      <rect x="${x + inset}" y="${y + inset}" width="${innerSize}" height="${innerSize}" rx="${Math.max(2, cellSize * 0.12)}" fill="rgba(255,255,255,0.16)"/>
    `;
  }).join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" rx="14" fill="rgba(255,249,240,0)"/>
    ${rects}
  </svg>`;
  const dataUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  blockPreviewArtCache.set(key, dataUrl);
  return dataUrl;
}

function createRandomPieceFromPool(pool, mapKey = null) {
  const shape = pool[Math.floor(Math.random() * pool.length)];
  const turns = Math.floor(Math.random() * 4);

  return {
    name: shape.name,
    color: shape.color,
    offsets: shape.offsets.map((offset) => rotateOffset(offset, turns))
  };
}

function pieceChoiceSignature(piece) {
  if (!piece?.offsets?.length) {
    return "";
  }
  return normalizePieceOffsets(piece.offsets)
    .map((offset) => `${offset.x},${offset.y}`)
    .sort()
    .join(";");
}

function refillPieceChoices(mapKey = null) {
  const guaranteedIndex = Math.floor(Math.random() * 2);
  const nextChoices = [
    createRandomPiece(mapKey),
    createRandomPiece(mapKey)
  ];
  nextChoices[guaranteedIndex] = createRandomPieceFromPool(guaranteedChoicePolyominoes, mapKey);
  let safety = 0;
  while (pieceChoiceSignature(nextChoices[0]) === pieceChoiceSignature(nextChoices[1]) && safety < 24) {
    const rerollIndex = guaranteedIndex === 0 ? 1 : 0;
    nextChoices[rerollIndex] = createRandomPiece(mapKey);
    safety += 1;
  }
  pieceChoices = nextChoices;
  selectPieceChoice(0, false);
}

function selectPieceChoice(index, redraw = true) {
  if (!pieceChoices[index]) {
    return;
  }

  setTool("wall", redraw);
  activePieceChoiceIndex = index;
  activePiece = pieceChoices[index];
  updateHud();
  if (redraw) {
    draw();
  }
}

function setPieceChoiceButtonContent(button, piece, index) {
  if (!button) {
    return;
  }

  if (!piece) {
    button.innerHTML = "";
    button.title = `Block choice ${index + 1}`;
    return;
  }

  const imageUrl = piecePreviewDataUrl(piece, { cellSize: 18, padding: 8 });
  button.innerHTML = `<img src="${imageUrl}" alt="">`;
  button.title = piece.name;
  button.setAttribute("aria-label", `${piece.name} block choice`);
}

function isTowerUnlocked(type) {
  return true;
}

function towerUnlockHint(type) {
  return `${TOWER_INFO[type].name} is available from the start.`;
}

function towerUnlockRequirement(type) {
  return "Available from the beginning.";
}

function enemyDiscoveryId(enemyKey, tier = 1) {
  const normalizedTier = Math.max(1, tier || 1);
  return `${enemyKey}:${normalizedTier}`;
}

function markEnemyDiscovered(enemyKey, tier = 1) {
  const maxTier = enemyUsesTiers(enemyKey) || enemyKey === "sentinel" || enemyKey === "splitter"
    ? Math.max(1, Math.min(maxTierForEnemy(enemyKey), tier || 1))
    : 1;
  for (let knownTier = 1; knownTier <= maxTier; knownTier += 1) {
    discoveredEnemies.add(enemyDiscoveryId(enemyKey, knownTier));
  }
}

function hasEnemyDiscovery(enemyKey, tier = 1) {
  return discoveredEnemies.has(enemyDiscoveryId(enemyKey, tier));
}

function setMessage(text, duration = 1.6) {
  message = text;
  messageTimer = duration;
}

function reportUiError(context, error) {
  const detail = error instanceof Error ? error.message : String(error);
  const messageText = `${context} failed: ${detail}`;
  setMessage(messageText, 6);
  if (menuMapDescription && gameMode === "menu") {
    menuMapDescription.textContent = messageText;
  }
  updateHud();
  draw();
}

function withUiGuard(context, handler) {
  return (event) => {
    try {
      return handler(event);
    } catch (error) {
      reportUiError(context, error);
      return undefined;
    }
  };
}

function enemyIntroMessage(enemyKey) {
  const enemy = ENEMY_TYPES[enemyKey];
  if (!enemy) {
    return null;
  }
  const advice = {
    fast: "They rush early, so get basic damage up quickly.",
    speedy: "They are much faster than Fasts, so long lanes and quick first hits matter more.",
    pentagon: "They are tougher, so sustained damage helps.",
    octagon: "They are slow but fixed-health specials, so steady single-target damage deletes them cleanly.",
    specialPentagon: "Pinks are the light Behemoth class, so deal with them before full Behemoths start rolling in.",
    diamond: "They resist energy and explosions, so keep steady bullet coverage too.",
    attacker: "They stay hidden and fast, so detection upgrades matter soon.",
    assassin: "They are stronger hidden raiders with more health than attackers, so detection and burst both need to scale up.",
  armored: "Their white armour ring blocks kinetic and chemical damage until energy or explosive hits strip it away.",
    shield: "Break the shield source first or your damage will get absorbed.",
    waffle16: "Waffles split into more waffles, so splash and lane control help.",
    hydra: "Its four heads come in with different defenses: hidden, armoured, shelled, then shielded.",
    sentinel: "Sentinels are durable, and their Overwatch form bursts back into a swarm when it goes down.",
    splitter: "Their first layer is not the whole problem, so keep enough follow-up damage ready for the splits.",
    biscuit: "Shortbread sprint even faster than attackers and slam the base for their remaining health.",
    idaen: "Mega Waffle is a fixed-health siege enemy that periodically throws T2 waffles onto the lane.",
    adapter: "Its first blocked hit decides the permanent immunity, so try to tag it with a damage class you can spare."
  };
  return `${enemy.name} spotted. ${enemy.description}${advice[enemyKey] ? ` ${advice[enemyKey]}` : ""}`;
}

function waveWarningMessage(round) {
  const warnings = {
    14: {
      title: "Hidden Enemies Soon",
      body: "Hidden enemies arrive on wave 16.\n\nGet detection before they show up. Tesla Path 2, Dippy Path 2, and Support detection upgrades can all help."
    },
    15: {
      title: "Hidden Enemies Next Wave",
      body: "The next wave includes hidden enemies.\n\nIf a tower cannot detect them, it will not fire."
    },
    16: {
      title: "Armoured Enemies Soon",
      body: "Armoured enemies arrive on wave 18.\n\nTheir white armour ring blocks kinetic and chemical damage until missiles, lasers, or other explosive and energy hits strip it away."
    },
    17: {
      title: "Armoured Enemies Next Wave",
      body: "The next wave includes armoured enemies.\n\nTheir white armour ring ignores kinetic and chemical damage until it is broken."
    },
    28: {
      title: "Shielded Enemies Soon",
      body: "Shielded enemies arrive on wave 30.\n\nEnemies inside the shield do not take direct damage, so crack the shield source first with focused fire."
    },
    29: {
      title: "Shielded Enemies Next Wave",
      body: "The next wave includes shielded enemies.\n\nBurst damage and splash make it easier to break the shield source before the lane fills up."
    },
    34: {
      title: "Attackers Soon",
      body: "Attackers arrive on wave 36.\n\nThey stay hidden and move fast, so get detection and reliable burst online before they start slipping through."
    },
    35: {
      title: "Attackers Next Wave",
      body: "The next wave introduces attackers.\n\nThey are hidden, fast, and much harder to catch than the early enemies."
    },
    40: {
      title: "Shielded Attacker Soon",
      body: "A shielded attacker appears on wave 42.\n\nMake sure you can crack shields quickly before it reaches your line."
    },
    41: {
      title: "Shielded Attacker Next Wave",
      body: "The next wave includes a shielded attacker.\n\nYou will need detection and focused anti-shield damage."
    },
    56: {
      title: "Shield Rush Soon",
      body: "Wave 58 brings a major rush of shielded attackers.\n\nPrepare layered detection, shield breaking, and enough damage to stop a fast hidden flood."
    },
    57: {
      title: "Shield Rush Next Wave",
      body: "The next wave floods the lane with shielded attackers.\n\nIf your anti-shield damage is shaky, they can snowball through very quickly."
    }
  };
  return warnings[round] || null;
}

function maybeShowWaveWarning(round) {
  const warning = waveWarningMessage(round);
  if (!warning || shownWaveWarnings.has(round)) {
    return false;
  }
  shownWaveWarnings.add(round);
  activeWaveWarning = warning;
  return true;
}

function queueTutorialPopup(key, title, body) {
  if (key && shownTutorialPopups.has(key)) {
    return false;
  }
  if (key) {
    shownTutorialPopups.add(key);
  }
  tutorialPopupQueue.push({ title, body, kind: "warning" });
  presentQueuedTutorialPopup();
  return true;
}

function queueDelayedTutorialStep(key, title, body) {
  if (tutorialDismissed || isSandboxMode() || (key && shownTutorialPopups.has(key))) {
    return false;
  }
  if (key) {
    shownTutorialPopups.add(key);
  }
  tutorialPopupQueue.push({ title, body, kind: "tutorial" });
  tutorialStepDelayTimer = 2;
  return true;
}

function renderTutorialPopup() {
  if (!activeTutorialPopup || !tutorialOverlayTitle || !tutorialOverlayBody) {
    return;
  }

  tutorialOverlayTitle.textContent = activeTutorialPopup.title;
  tutorialOverlayBody.innerHTML = activeTutorialPopup.body
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function presentQueuedTutorialPopup() {
  if (activeTutorialPopup || tutorialPopupQueue.length === 0 || gameMode === "menu" || gameMode === "gameover" || gameMode === "almanac") {
    return;
  }

  if (tutorialPopupQueue[0]?.kind === "tutorial" && tutorialStepDelayTimer > 0) {
    return;
  }

  activeTutorialPopup = tutorialPopupQueue.shift();
  tutorialResumeMode = gameMode === "paused" ? "paused" : "playing";
  gameMode = "paused";
  openOverlay(null);
  tutorialOverlay?.classList.add("active");
  renderTutorialPopup();
  updateHud();
  draw();
}

function dismissTutorialPopup() {
  if (!activeTutorialPopup) {
    return;
  }

  activeTutorialPopup = null;
  tutorialOverlay?.classList.remove("active");
  if (gameMode !== "menu" && gameMode !== "gameover") {
    gameMode = tutorialResumeMode === "paused" ? "paused" : "playing";
    if (gameMode === "paused") {
      openOverlay("pause");
    } else {
      openOverlay(null);
    }
  }
  tutorialResumeMode = null;
  presentQueuedTutorialPopup();
  updateHud();
  draw();
}

function dismissEntireTutorial() {
  tutorialDismissed = true;
  tutorialPopupQueue = tutorialPopupQueue.filter((entry) => entry.kind !== "tutorial");
  tutorialStepDelayTimer = 0;
  introTutorialSeen = true;
  persistProgressionState();
  dismissTutorialPopup();
}

function queueOpeningTutorial() {
  if (tutorialDismissed || introTutorialSeen || isSandboxMode()) {
    return;
  }
  introTutorialSeen = true;
  tutorialPopupQueue.push(
    {
      kind: "tutorial",
      title: "Welcome To Block Defence",
      body: "Blocks shape the route.\n\nPlace polyomino walls to steer enemies, but never seal every path."
    },
    {
      kind: "tutorial",
      title: "Build On Blocks",
      body: "Most towers sit directly on block tiles.\n\nSome towers need more room, so always check their footprint before placing them."
    },
    {
      kind: "tutorial",
      title: "Start, Then Upgrade",
      body: "Use the Start Wave button once your route and defenses are ready.\n\nAfter that, build up damage, hidden detection, and anti-armour so later waves do not run over you."
    }
  );
  persistProgressionState();
}

function queueNextTutorialStep() {
  if (tutorialDismissed || isSandboxMode() || introTutorialSeen) {
    return;
  }
  if (!tutorialProgress.placedBlock) {
    queueDelayedTutorialStep("tutorial-block", "Place A Block", "Use the Block tool, and press R if needed, to place a route block.\n\nAfter you place one, the next tutorial page will appear after a short pause.");
    return;
  }
  if (!tutorialProgress.placedTower) {
    queueDelayedTutorialStep("tutorial-tower", "Place A Tower", "Switch to the Tower tool, choose a tower, and place it on a valid build tile.\n\nAfter you place one, the next tutorial page will appear after a short pause.");
    return;
  }
  if (!tutorialProgress.upgradedTower) {
    queueDelayedTutorialStep("tutorial-upgrade", "Buy An Upgrade", "Open a tower and use its popup to buy an upgrade.\n\nAfter your first upgrade, the opening tutorial is complete.");
  }
}

function renderTutorial() {
  if (!tutorialList || !tutorialHint) {
    return;
  }

  const steps = [
    {
      done: tutorialProgress.placedBlock,
      title: "Place blocks",
      detail: "Use the block tool and R to rotate pieces into the lane."
    },
    {
      done: tutorialProgress.placedTower,
      title: "Place a tower",
      detail: "Switch to Tower, pick one from the strip, and place it on a valid spot."
    },
    {
      done: tutorialProgress.upgradedTower,
      title: "Upgrade it",
      detail: "Open a tower and use its popup to buy stronger attacks, detection, or support utility."
    }
  ];

  tutorialList.innerHTML = steps
    .map((step) => `<div class="tutorial-step${step.done ? " done" : ""}"><strong>${step.done ? "Done" : "Next"}: ${step.title}</strong><span>${step.detail}</span></div>`)
    .join("");

  const nextStep = steps.find((step) => !step.done);
  tutorialHint.textContent = nextStep
    ? nextStep.detail
    : "You know the basics now. Watch the warnings panel text for hidden, armoured, shielded, and boss mechanics.";
}

function isSandboxMode() {
  return selectedDifficulty === "sandbox";
}

function openOverlay(name) {
  menuOverlay.classList.toggle("active", name === "menu");
  pauseOverlay.classList.toggle("active", name === "pause");
  gameOverOverlay.classList.toggle("active", name === "gameover");
  almanacOverlay.classList.toggle("active", name === "almanac");
}

function renderAlmanac() {
  almanacGrid.innerHTML = "";
  almanacBody.classList.toggle("tower-layout", almanacTab === "towers");
  almanacBody.classList.toggle("enemy-layout", almanacTab === "enemies");
  almanacBody.classList.toggle("block-layout", almanacTab === "blocks");
  almanacBody.classList.toggle("wave-layout", almanacTab === "waves");
  for (const button of almanacTabs.querySelectorAll("[data-almanac-tab]")) {
    button.classList.toggle("active", button.dataset.almanacTab === almanacTab);
  }

  if (almanacTab === "enemies") {
    almanacTitle.textContent = "Almanac";
    const entries = enemyAlmanacEntries();
    if (!entries.some((entry) => entry.id === selectedAlmanacEnemy)) {
      selectedAlmanacEnemy = entries[0]?.id || "fast:1";
    }
    almanacDetail.innerHTML = "";

    for (const enemyEntry of entries) {
      const entry = document.createElement("article");
      const known = enemyAlmanacKnown(enemyEntry);
      entry.className = `almanac-entry clickable${known ? "" : " locked"}${selectedAlmanacEnemy === enemyEntry.id ? " active" : ""}`;
      entry.dataset.almanacEnemy = enemyEntry.id;
      entry.innerHTML = known
        ? renderEnemyAlmanacCard(enemyEntry)
        : "";
      almanacGrid.appendChild(entry);
    }
    renderEnemyAlmanacDetail(selectedAlmanacEnemy);
    return;
  }

  if (almanacTab === "blocks") {
    almanacTitle.textContent = "Almanac";
    for (const block of polyominoes) {
      const entry = document.createElement("article");
      entry.className = "almanac-entry";
      entry.innerHTML = renderBlockAlmanacCard(block);
      almanacGrid.appendChild(entry);
    }
    renderBlockAlmanacDetail();
    return;
  }

  if (almanacTab === "waves") {
    almanacTitle.textContent = "Almanac";
    selectedAlmanacWave = Math.max(1, Math.min(unlockedWaveMax, MAX_ALMANAC_WAVE, selectedAlmanacWave || 1));
    for (let round = 1; round <= MAX_ALMANAC_WAVE; round += 1) {
      const summary = waveAlmanacSummary(round);
      const unlocked = round <= unlockedWaveMax;
      const entry = document.createElement("article");
      entry.className = `almanac-entry clickable${unlocked ? "" : " locked"}${selectedAlmanacWave === round ? " active" : ""}`;
      entry.dataset.almanacWave = String(round);
      entry.innerHTML = unlocked ? renderWaveAlmanacCard(summary) : `<h3>Wave ${round}</h3><p>Locked</p>`;
      almanacGrid.appendChild(entry);
    }
    renderWaveAlmanacDetail(selectedAlmanacWave);
    return;
  }

  almanacTitle.textContent = "Almanac";
  const orderedTowers = [...ALMANAC_TOWER_TYPES].sort((left, right) => {
    const leftUnlocked = isTowerUnlocked(left);
    const rightUnlocked = isTowerUnlocked(right);
    if (leftUnlocked === rightUnlocked) {
      return ALMANAC_TOWER_TYPES.indexOf(left) - ALMANAC_TOWER_TYPES.indexOf(right);
    }
    return leftUnlocked ? -1 : 1;
  });
  for (const key of orderedTowers) {
    const tower = TOWER_INFO[key];
    const unlocked = isTowerUnlocked(key);
    const entry = document.createElement("article");
    entry.className = `almanac-entry clickable${unlocked ? "" : " locked"}${selectedAlmanacTower === key ? " active" : ""}`;
    entry.dataset.almanacTower = key;
    entry.innerHTML = unlocked
      ? `<h3>${tower.name}</h3><p>Cost: ${towerCost(key)}</p><p>${tower.description}</p>`
      : `<h3>Locked Tower</h3><p>${towerUnlockRequirement(key)}</p>`;
    almanacGrid.appendChild(entry);
  }
  renderTowerAlmanacDetail(selectedAlmanacTower);
}

function enemyAlmanacEntries() {
  const entries = [];
  const orderedKeys = [
    "fast",
    "speedy",
    "narder",
    "pentagon",
    "octagon",
    "hexagon",
    "diamond",
    "health",
    "life",
    "heavy",
    "attacker",
    "breacher",
    "adapter",
    "waffle16",
    "idaen",
    "biscuit",
    "sentinel",
    "behemoth",
    "specialPentagon",
    "assassin",
    "hydra",
    "idine",
    "xer",
    "celun",
    "celris",
    "cel",
    "lun",
    "ris",
    "splitter",
    "popcorn",
    "kernel"
  ];

  for (const enemyKey of orderedKeys) {
    const enemy = ENEMY_TYPES[enemyKey];
    if (!enemy || enemy.key === "shield" || enemy.key === "armored" || enemy.key === "megaWaffle") {
      continue;
    }

    if (enemy.key === "idaen" || enemy.key === "adapter" || enemy.key === "hydra" || enemy.key === "behemoth" || enemy.key === "xer") {
      entries.push({ id: `${enemy.key}:1`, key: enemy.key, tier: 1 });
      continue;
    }

    if (enemy.key === "sentinel") {
      entries.push({ id: "sentinel:1", key: "sentinel", tier: 1 });
      entries.push({ id: "sentinel:2", key: "sentinel", tier: 2 });
      entries.push({ id: "sentinel:3", key: "sentinel", tier: 3 });
      continue;
    }

    if (enemySupportsTiers(enemy.key)) {
      for (let tier = 1; tier <= maxTierForEnemy(enemy.key); tier += 1) {
        entries.push({ id: `${enemy.key}:${tier}`, key: enemy.key, tier });
      }
      continue;
    }

    entries.push({ id: `${enemy.key}:1`, key: enemy.key, tier: 1 });
  }

  return entries;
}

function enemyAlmanacKnown(entry) {
  return hasEnemyDiscovery(entry.parentKey || entry.key, entry.parentKey ? 1 : (entry.tier || 1));
}

function enemyAlmanacPrimaryEnemy(entry) {
  return ENEMY_TYPES[entry.parentKey || entry.key];
}

function enemySpecialAbilities(enemy, entry = null) {
  const specials = [];

  if (enemy.key.startsWith("waffle")) {
    specials.push("Splits into smaller waffles on defeat");
  }
  if (enemy.key === "megaWaffle") {
    specials.push("Massive summon that stuns nearby towers on arrival");
  }
  if (enemy.key === "armored") {
    specials.push("Armoured shell blocks bullets until broken");
  }
  if (enemy.key === "idaen") {
    specials.push("Fixed 156 HP");
    specials.push("Throws only T2 waffles");
  }
  if (enemy.key === "adapter") {
    specials.push("Starts with a one-hit adaptation shield");
    specials.push("The first hit deals no damage");
    specials.push("That hit's damage class becomes a permanent immunity");
  }
  if (enemy.key === "breacher") {
    specials.push("Starts with a shield bar");
    specials.push("Moves fast while shielded");
    specials.push("Slows down sharply after the shield breaks");
  }
  if (enemy.key === "splitter") {
    specials.push("Has 10 tiers");
    specials.push("Each tier has 2x the health of the previous tier");
    specials.push("Splits into 2 of the previous tier on defeat");
    specials.push("Children can burst off straight or diagonally");
  }
  if (enemy.key === "popcorn") {
    specials.push("Bursts into 25 fast kernels on defeat");
    specials.push("Kernels scatter up to 8 tiles away");
    specials.push("Dark kernels are tougher, light kernels are much faster");
  }
  if (enemy.key === "kernel") {
    specials.push("Spawned by Popcorn");
    specials.push("Spreads out across a large area on release");
    specials.push("Only 2 HP");
  }
  if (enemy.key === "narder") {
    specials.push("Fast spinning triquetra");
    specials.push("Takes 25% less slowing and stunning");
    if ((entry?.tier || 1) >= 2) {
      specials.push("Japper form uses denser detail loops");
    }
  }
  if (enemy.key === "idine") {
    specials.push("Splits into 4 Celuns and 4 Celris");
  }
  if (enemy.key === "xer") {
    specials.push("Very large late-game boss enemy");
    specials.push("Diamond-shaped and packed with smaller detail plates");
    specials.push("Splits into 3 Behemoths, 4 Idines, 4 Skreys, 6 T3 Assassins, 8 T3 Breachers, and 8 Popcorns");
  }
  if (enemy.key === "celun") {
    specials.push("Splits into 2 Cels and 2 Luns");
  }
  if (enemy.key === "celris") {
    specials.push("Only energy and explosions can damage it");
    specials.push("Splits into 2 Cels and 2 Ris");
  }
  if (enemy.key === "heavy") {
    specials.push("Extremely slow");
    specials.push("High health brick");
  }
  if (enemy.key === "health") {
    specials.push("Regenerates health over time");
  }
  if (enemy.key === "life") {
    specials.push("Regenerates health over time");
    specials.push("Heals nearby enemies");
    specials.push("Splits into lower tiers on defeat");
  }
  if (enemy.key === "sentinel") {
    if ((entry?.tier || 1) >= 3) {
      specials.push("Skrey drops 4 Overwatches on defeat");
    } else if ((entry?.tier || 1) >= 2) {
      specials.push("Overwatch drops 8 Sentinels on defeat");
      specials.push("Sentinels burst out farther than normal splits");
    }
  }
  if (enemy.key === "behemoth") {
    specials.push("Drops 6 Pinks on defeat");
    specials.push("Each Pink has 600 HP");
  }
  if (enemy.key === "specialPentagon") {
    specials.push("Counts as T1 Behemoth in sandbox");
    specials.push("Appears before Behemoth");
  }
  if (enemy.key === "octagon") {
    specials.push("Counts as Pentagon Tier 4");
    specials.push("Fixed 110 HP special unit");
    specials.push("Slower than lower pentagon tiers");
  }
  if (enemy.key === "hydra") {
    specials.push("Spawns as a four-segment chain");
    specials.push("Heads arrive as hidden, armoured, shelled, then shielded");
  }
  if (enemy.key === "diamond") {
    specials.push("Resists heat, energy, freeze, and explosions");
  }
  if (enemy.key === "attacker") {
    specials.push("Always hidden");
    specials.push("Keeps its white armour ring while armoured");
  }
  if (enemy.key === "assassin") {
    specials.push("Always hidden");
    specials.push("Stronger version of Attacker");
  }
  if (enemy.key === "speedy") {
    specials.push("Extremely high movement speed");
  }
  if (enemy.key === "shield") {
    specials.push("Projects a protective force field for nearby enemies");
    specials.push("Break the field first, then it becomes a normal enemy");
    specials.push("Tier 2 splits into three Tier 1 shields");
    specials.push("Tier 3 splits into three Tier 2 shields");
  }

  return specials;
}

function enemyAlmanacDescription(enemy, entry) {
  const tier = entry?.tier || 1;
  const behaviorDescriptions = {
    fast: "Rushes the lane quickly and punishes slow reaction time.",
    speedy: "An upgraded Fast that pushes extreme movement speed, with later tiers accelerating even harder.",
    narder: tier >= 2
      ? "Japper is the tier 2 Narder form, a faster detailed triquetra that keeps spinning while shrugging off part of slows and stuns."
      : "A fast spinning triquetra runner that resists part of slows and stuns.",
    pentagon: "Moves more slowly than Fast enemies but carries much more health.",
    octagon: "The final Pentagon tier uses fixed health and slower movement to act as a sturdier specialist.",
    hexagon: "A heavy elite that leans on very high health and steady forward pressure.",
    diamond: "A faster elite that keeps pressure up while resisting heat, energy, freeze, and explosive damage.",
    health: "Regenerates health over time while keeping up strong lane speed.",
    life: "Regenerates, heals nearby enemies, and splits into lower tiers on defeat.",
    heavy: "An extremely slow health brick built to soak damage and grind forward.",
    attacker: "An always-hidden raider with built-in armour that pressures detection and burst damage.",
    assassin: "A stronger hidden raider with much heavier health than an Attacker.",
    breacher: "Starts with a shield bar, rushes while shielded, and slows sharply after the shield breaks.",
    adapter: "The first hit against it deals no damage, and that damage class becomes permanently useless against it.",
    waffle16: "Splits into smaller waffles on defeat, so it keeps lane pressure going after the first kill.",
    idaen: "A late-game waffle summoner with fixed health that throws out Tier 2 waffles.",
    biscuit: "A very fast rusher that can punish the base hard if it slips through.",
    sentinel: tier >= 3
      ? "Skrey is the top Sentinel tier, built for late-game pressure and dropping 4 Overwatches on defeat."
      : tier >= 2
        ? "Overwatch is the middle Sentinel tier, dropping 8 Sentinels on defeat with wider split pressure."
        : "A late-game tank that becomes much more dangerous once higher Sentinel tiers start chaining splits.",
    behemoth: "A colossal siege brute with extreme health that drops 6 Pinks on defeat, with cash equal to its HP.",
    specialPentagon: "The light Behemoth class that appears before full Behemoths arrive.",
    hydra: "Spawns as a four-segment chain whose heads arrive with hidden, armoured, shelled, and shielded defenses in sequence.",
    idine: "A late-game splitter elite that bursts into 4 Celuns and 4 Celris on defeat.",
    xer: "An enormous diamond-shaped siege horror that detonates into Behemoths, Idines, Skreys, elite raiders, and Popcorn when it dies.",
    celun: "A mid-split Idine spawn that breaks into 2 Cels and 2 Luns on defeat.",
    celris: "An Idine spawn that can only be damaged by energy and explosions, then splits into 2 Cels and 2 Ris.",
    cel: "A small fragment spawned by the Idine family after larger splits break apart.",
    lun: "A small fragment produced when Celuns split.",
    ris: "A small fragment produced when Celris split.",
    splitter: "Comes in 10 tiers, with each tier at double the previous tier's health, and splits into 2 of the previous tier on defeat.",
    popcorn: "Bursts into 25 kernels on defeat and scatters them across a wide area.",
    kernel: "A fragile 2 HP fragment spawned by Popcorn and released across a broad area when Popcorn bursts."
  };
  const baseDescription = behaviorDescriptions[enemy.key] || enemy.description || "";
  const specials = enemySpecialAbilities(enemy, entry).filter((special) => {
    const normalizedDescription = baseDescription.toLowerCase();
    return !normalizedDescription.includes(String(special).toLowerCase());
  });
  if (specials.length === 0) {
    return baseDescription;
  }
  return `${baseDescription} ${specials.join("; ")}.`;
}

function enemyAlmanacDisplayName(entry) {
  const enemy = enemyAlmanacPrimaryEnemy(entry);
  if (!enemy) {
    return "Enemy";
  }
  if (entry.key === "darkKernel") {
    return "Dark Kernel";
  }
  if (entry.key === "lightKernel") {
    return "Light Kernel";
  }
  if (entry.key === "kernel") {
    return "Normal Kernel";
  }
  if (entry.key === "sentinel") {
    return entry.tier >= 3 ? "Skrey" : entry.tier >= 2 ? "Overwatch" : "Sentinel";
  }
  if (entry.key === "narder") {
    return entry.tier >= 2 ? "Japper" : "Narder";
  }
  if (entry.key === "assassin") {
    return `Assassin Tier ${entry.tier}`;
  }
  if (entry.key === "specialPentagon") {
    return "Pink";
  }
  if (entry.key === "octagon") {
    return "Pentagon Tier 4";
  }
  if (entry.key === "breacher") {
    return `Breacher Tier ${entry.tier}`;
  }
  if (entry.key === "speedy") {
    return `Speedy Tier ${entry.tier}`;
  }
  if (entry.key === "splitter") {
    return `Splitter Tier ${entry.tier}`;
  }
  if (entry.key === "health" || entry.key === "life") {
    return `${enemy.name} Tier ${entry.tier}`;
  }
  if (entry.key === "idine" || entry.key === "celun" || entry.key === "celris" || entry.key === "cel" || entry.key === "lun" || entry.key === "ris") {
    return enemy.name;
  }
  if (enemySupportsTiers(entry.key) && maxTierForEnemy(entry.key) > 1) {
    return `${enemy.name} Tier ${entry.tier}`;
  }
  return enemy.name;
}

function enemyAlmanacStats(entry) {
  const enemy = enemyAlmanacPrimaryEnemy(entry);
  const round = Math.max(waveNumber, 1);
  if (!enemy) {
    return { hp: 0, speed: 0, reward: 0, extras: [] };
  }

  if (entry.key === "darkKernel") {
    const stats = kernelVariantAlmanacStats("dark", round);
    return {
      hp: stats.hp,
      speed: stats.speed,
      reward: stats.reward,
      extras: ["Spawned by Popcorn"]
    };
  }

  if (entry.key === "lightKernel") {
    const stats = kernelVariantAlmanacStats("light", round);
    return {
      hp: stats.hp,
      speed: stats.speed,
      reward: stats.reward,
      extras: ["Spawned by Popcorn"]
    };
  }

  if (entry.key === "kernel") {
    const stats = kernelVariantAlmanacStats("normal", round);
    return {
      hp: stats.hp,
      speed: stats.speed,
      reward: stats.reward,
      extras: ["Spawned by Popcorn"]
    };
  }

  if (entry.key === "sentinel") {
    const isOverwatch = entry.tier === 2;
    const isSkrey = entry.tier >= 3;
    return {
      hp: Math.round(((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp) * (isSkrey ? 7.8 : isOverwatch ? 2.6 : 1)),
      speed: ((((30 + round * 2 + enemy.speedBonus + (isSkrey ? 24 : isOverwatch ? 30 : 0)) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1))) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * (entry.tier >= 3 ? 10.8 : entry.tier === 2 ? 3.2 : 1))),
      extras: [
        isSkrey ? "Drops 4 Overwatches" : isOverwatch ? "Drops 8 Sentinels" : "",
        `Appears from ${sandboxWaveForEnemyTier("sentinel", entry.tier)}`
      ].filter(Boolean)
    };
  }

  if (entry.key === "behemoth") {
    return {
      hp: 8000,
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: 8000,
      extras: ["Drops 6 Pinks with 600 HP each and cash equal to HP", `Appears from ${sandboxWaveForEnemyTier("behemoth", 2)}`]
    };
  }

  if (entry.key === "xer") {
    return {
      hp: 24000,
      speed: Math.max(0.58, ((((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE) * 0.56),
      reward: 24000,
      extras: [
        "Drops 3 Behemoths, 4 Idines, 4 Skreys, 6 T3 Assassins, 8 T3 Breachers, and 8 Popcorns",
        `Appears from ${sandboxWaveForEnemyTier("xer", 1)}`
      ]
    };
  }

  if (entry.key === "octagon") {
    return {
      hp: 110,
      speed: 0.42 * (MAPS[selectedMap]?.enemySpeed || 1),
      reward: Math.max(1, Math.round(enemy.reward)),
      extras: ["Fixed special unit", `Appears from ${sandboxWaveForEnemyTier("octagon", 1)}`]
    };
  }

  if (entry.key === "specialPentagon") {
    return {
      hp: 600,
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: 600,
      extras: ["T1 Behemoth class with cash equal to HP", `Appears from ${sandboxWaveForEnemyTier("specialPentagon", 1)}`]
    };
  }

  if (entry.key === "assassin") {
    const tierStats = genericTierConfig(entry.tier);
    return {
      hp: Math.round(80 * (tierStats?.hpMultiplier || 1)),
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (tierStats?.speedMultiplier || 1) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * (tierStats?.rewardMultiplier || 1))),
      extras: [`Appears from ${sandboxWaveForEnemyTier("assassin", entry.tier)}`]
    };
  }

  if (entry.key === "breacher") {
    const tierStats = genericTierConfig(entry.tier);
    const shieldHp = entry.tier >= 3 ? 165 : entry.tier === 2 ? 105 : 60;
    return {
      hp: Math.round((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp * (tierStats?.hpMultiplier || 1)),
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (tierStats?.speedMultiplier || 1) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * (tierStats?.rewardMultiplier || 1))),
      extras: [`Shield ${formatNumber(shieldHp)}`, "Fast while shielded, slow after break", `Appears from ${sandboxWaveForEnemyTier("breacher", entry.tier)}`]
    };
  }

  if (entry.key === "idaen") {
    return {
      hp: 156,
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward)),
      extras: ["Summons Tier 2 waffles", `Appears from ${sandboxWaveForEnemyTier("idaen", 1)}`]
    };
  }

  if (entry.key === "heavy") {
    const tierConfig = genericTierConfig(entry.tier);
    return {
      hp: Math.round((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp * (tierConfig?.hpMultiplier || 1)),
      speed: 0.5,
      reward: Math.max(1, Math.round(enemy.reward * (tierConfig?.rewardMultiplier || 1))),
      extras: [`Appears from ${sandboxWaveForEnemyTier(entry.key, entry.tier)}`]
    };
  }
  if (entry.key === "idine" || entry.key === "celun" || entry.key === "celris" || entry.key === "cel" || entry.key === "lun" || entry.key === "ris") {
    return {
      hp: Math.round((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp),
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(0, Math.round(enemy.reward)),
      extras: [
        entry.key === "idine"
          ? "Splits into 4 Celuns and 4 Celris"
          : entry.key === "celun"
            ? "Splits into 2 Cels and 2 Luns"
            : entry.key === "celris"
              ? "Only energy and explosions can damage it"
              : "",
        entry.key === "idine" ? `Appears from Wave ${sandboxEarliestWaveForEnemy("idine")}` : "Spawned by Idine"
      ].filter(Boolean)
    };
  }

  if (entry.key === "splitter") {
    return {
      hp: splitterHpForTier(entry.tier),
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * Math.pow(1.46, Math.max(0, entry.tier - 1)))),
      extras: [`Splits into 2 Tier ${Math.max(1, entry.tier - 1)}s`, `Appears from ${sandboxWaveForEnemyTier("splitter", entry.tier)}`]
    };
  }
  if (entry.key === "health") {
    const tierStats = genericTierConfig(entry.tier);
    return {
      hp: Math.round((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp * (tierStats.hpMultiplier || 1)),
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (tierStats.speedMultiplier || 1) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * (tierStats.rewardMultiplier || 1))),
      extras: [`Regens ${formatNumber(entry.tier >= 3 ? 1.1 : entry.tier === 2 ? 0.75 : 0.45)}/s`, `Appears from ${sandboxWaveForEnemyTier("health", entry.tier)}`]
    };
  }
  if (entry.key === "life") {
    const tierStats = genericTierConfig(entry.tier);
    return {
      hp: Math.round((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp * (tierStats.hpMultiplier || 1)),
      speed: (((30 + round * 2 + enemy.speedBonus) / DIFFICULTIES.standard.interval) * (tierStats.speedMultiplier || 1) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * (tierStats.rewardMultiplier || 1))),
      extras: [`Regens ${formatNumber(entry.tier >= 3 ? 1.8 : entry.tier === 2 ? 1.2 : 0.8)}/s`, "Heals nearby enemies", `Appears from ${sandboxWaveForEnemyTier("life", entry.tier)}`]
    };
  }
  if (entry.key === "speedy") {
    const speedyMultipliers = { 1: 2, 2: 2.5, 3: 3.5 };
    const fastBaseSpeed = ((30 + round * 2 + ENEMY_TYPES.fast.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1);
    const tierStats = genericTierConfig(entry.tier);
    return {
      hp: Math.round((5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp * (tierStats.hpMultiplier || 1)),
      speed: (fastBaseSpeed * (speedyMultipliers[entry.tier] || 2)) / CELL_SIZE,
      reward: Math.max(1, Math.round(enemy.reward * (tierStats.rewardMultiplier || 1))),
      extras: [`${formatNumber(speedyMultipliers[entry.tier] || 2)}x Fast speed`, `Appears from ${sandboxWaveForEnemyTier("speedy", entry.tier)}`]
    };
  }

  const baseHp = (5 + round) * enemy.hpMultiplier * DIFFICULTIES.standard.hp;
  const baseSpeed = 30 + round * 2 + enemy.speedBonus;
  const tierConfig = entry.key === "diamond"
    ? diamondTierConfig(entry.tier)
    : entry.key === "shield"
      ? shieldTierConfig(entry.tier)
      : enemySupportsTiers(entry.key)
        ? genericTierConfig(entry.tier)
        : null;
  const waffleRewardMultiplier = entry.key === "waffle16" ? (entry.tier >= 3 ? 1 : entry.tier === 2 ? 0.3 : 0.1) : 1;
  const waffleSpeedBonus = entry.key === "waffle16" ? (entry.tier >= 3 ? -10 : entry.tier === 2 ? -2 : 10) : 0;
  const extras = [];
  if (entry.key === "waffle16") {
    extras.push(`Size ${entry.tier >= 3 ? "4x4" : entry.tier === 2 ? "2x2" : "1x1"}`);
  }
  extras.push(`Appears from ${sandboxWaveForEnemyTier(entry.key, entry.tier)}`);
  return {
    hp: Math.round(baseHp * (tierConfig?.hpMultiplier || 1)),
    speed: (((baseSpeed + waffleSpeedBonus) / DIFFICULTIES.standard.interval) * (tierConfig?.speedMultiplier || 1) * (MAPS[selectedMap]?.enemySpeed || 1)) / CELL_SIZE,
    reward: Math.max(1, Math.round(enemy.reward * waffleRewardMultiplier * (tierConfig?.rewardMultiplier || 1))),
    extras
  };
}

function almanacTierPattern(entry) {
  const tier = entry.tier || 1;
  if (tier <= 1 || entry.key === "sentinel" || entry.key === "splitter" || entry.key === "hydra" || entry.key === "idaen" || entry.key === "adapter" || entry.key === "xer") {
    return "";
  }
  if (tier === 2) {
    return `<path d="M -10 -6 H 10 M -10 6 H 10" stroke="rgba(255,255,255,0.35)" stroke-width="2.2" stroke-linecap="round"></path>`;
  }
  return `<path d="M -10 -8 H 10 M -10 0 H 10 M -10 8 H 10" stroke="rgba(255,255,255,0.35)" stroke-width="2.2" stroke-linecap="round"></path>`;
}

function withTemporaryContext(tempCtx, callback) {
  const previousCtx = ctx;
  ctx = tempCtx;
  try {
    return callback();
  } finally {
    ctx = previousCtx;
  }
}

function previewTierConfigForEnemy(enemyKey, tier = 1) {
  if (enemyKey === "diamond") {
    return diamondTierConfig(tier);
  }
  if (enemyKey === "shield") {
    return shieldTierConfig(tier);
  }
  return genericTierConfig(tier);
}

function buildEnemyAlmanacPreview(entry) {
  const tier = entry.tier || 1;
  const baseKey = entry.key === "darkKernel" || entry.key === "lightKernel" ? "kernel" : entry.key;
  const enemyType = ENEMY_TYPES[baseKey];
  const tierConfig = previewTierConfigForEnemy(baseKey, tier);
  if (!enemyType) {
    return null;
  }

    const preview = {
    key: baseKey,
    tier,
    x: 60,
    y: 46,
    color: tierConfig?.color || enemyType.color,
    shapeSides: enemyType.shape,
    facingAngle: 0,
    hidden: false,
    shielded: false,
    shieldHp: 0,
    maxShieldHp: 0,
    shellHp: 0,
    maxShellHp: 0,
    armored: false,
    armorHp: 0,
    suppressArmorVisual: false,
      sizeScale: baseKey === "sentinel"
        ? (tier >= 3 ? 1.62 : tier >= 2 ? 1.34 : 1.08)
        : baseKey === "behemoth"
          ? 2.65
          : baseKey === "xer"
            ? 4.1
          : baseKey === "specialPentagon"
            ? 1.95
            : (tierConfig?.radiusMultiplier || 1),
    coreColor: tierConfig?.coreColor || null,
    shieldRadius: 0,
    waffleSquares: baseKey === "waffle16" ? (tier >= 3 ? 16 : tier === 2 ? 4 : 1) : (enemyType.waffleSquares || 0)
  };

  if (entry.key === "darkKernel") {
    preview.kernelVariant = "dark";
    preview.color = "#3f78d1";
  } else if (entry.key === "lightKernel") {
    preview.kernelVariant = "light";
    preview.color = "#b8e1ff";
  } else if (baseKey === "kernel") {
    preview.kernelVariant = "normal";
  }

  if (baseKey === "ris") {
    preview.armored = true;
    preview.armorHp = ENEMY_TYPES.ris.armor;
  }
  if (baseKey === "idine") {
    preview.armored = true;
    preview.armorHp = ENEMY_TYPES.idine.armor;
  }

  if (baseKey === "adapter" || baseKey === "idaen") {
    preview.sizeScale = 1;
  }

  return preview;
}

function enemyAlmanacArtDataUrl(entry) {
  const cacheKey = entry.id || `${entry.key}:${entry.tier || 1}`;
  if (enemyAlmanacArtCache.has(cacheKey)) {
    return enemyAlmanacArtCache.get(cacheKey);
  }

  const preview = buildEnemyAlmanacPreview(entry);
  if (!preview) {
    return "";
  }

  const previewCanvas = document.createElement("canvas");
  previewCanvas.width = 120;
  previewCanvas.height = 92;
  const previewCtx = previewCanvas.getContext("2d");
  if (!previewCtx) {
    return "";
  }

  withTemporaryContext(previewCtx, () => {
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    drawEnemyShape(preview);
  });

  const dataUrl = previewCanvas.toDataURL("image/png");
  enemyAlmanacArtCache.set(cacheKey, dataUrl);
  return dataUrl;
}

function renderEnemyAlmanacArt(entry) {
  const imageWidth = entry.key === "adapter" || entry.key === "idaen" || entry.key === "hydra" || entry.key === "xer"
    ? 76
    : entry.key.includes("Kernel") || entry.key === "kernel"
      ? 66
      : 72;
  const imageHeight = entry.key === "biscuit" || entry.key === "hydra"
    ? 48
    : entry.key === "idaen" || entry.key === "xer"
      ? 54
      : 52;
  return `<img src="${enemyAlmanacArtDataUrl(entry)}" width="${imageWidth}" height="${imageHeight}" alt="${enemyAlmanacDisplayName(entry)}">`;
}

function kernelVariantAlmanacStats(variant, round = Math.max(waveNumber, 1)) {
  const popcorn = ENEMY_TYPES.popcorn;
  const baseSpeed = ((30 + round * 2 + popcorn.speedBonus) / DIFFICULTIES.standard.interval) * (MAPS[selectedMap]?.enemySpeed || 1) / CELL_SIZE;
  const configs = {
    dark: { label: "Dark", hp: 3, speed: 1 },
    normal: { label: "Normal", hp: 1.5, speed: 1.5 },
    light: { label: "Light", hp: 1, speed: 3 }
  };
  const config = configs[variant];
  return {
    label: config.label,
    hp: 2,
    speed: baseSpeed * config.speed,
    reward: 0
  };
}

function renderEnemyFamilyVariantBlock(entry) {
  return "";
}

function renderEnemyAlmanacCard(entry) {
  const name = enemyAlmanacDisplayName(entry);
  return `<div class="enemy-almanac-tile" title="${name}">
    <div class="enemy-almanac-image-wrap">
      ${renderEnemyAlmanacArt(entry)}
    </div>
  </div>`;
}

function renderEnemyAlmanacDetail(id) {
  const entry = enemyAlmanacEntries().find((item) => item.id === id);
  if (!entry) {
    almanacDetail.innerHTML = "";
    return;
  }
  if (!enemyAlmanacKnown(entry)) {
    almanacDetail.innerHTML = `<h3>Unknown Enemy</h3><p>Encounter this enemy in a run to reveal its image, stats, and abilities.</p>`;
    return;
  }
  const enemy = enemyAlmanacPrimaryEnemy(entry);
  const stats = enemyAlmanacStats(entry);
  const effects = [];
  if (enemy.hidden) {
    effects.push("Hidden");
  }
  if (enemy.armored || enemy.key === "armored" || entry.key === "attacker") {
    effects.push("Armoured");
  }
  if ((enemy.shellHp || 0) > 0 || entry.key === "heavy") {
    effects.push("Shell");
  }
  if (entry.key === "hydra") {
    effects.push("Hidden");
    effects.push("Armoured");
    effects.push("Shell");
    effects.push("Shielded");
  }
  if (enemy.key === "shield") {
    effects.push("Shield Aura");
  } else if (enemy.key === "adapter") {
    effects.push("Adaptive Immunity");
  }
  if (entry.key === "sentinel" && entry.tier === 2) {
    effects.push("Overwatch");
  } else if (entry.key === "sentinel" && entry.tier >= 3) {
    effects.push("Skrey");
  }
  const name = enemyAlmanacDisplayName(entry);
  almanacDetail.innerHTML = `<h3>${enemyAlmanacDisplayName(entry)}</h3>
    <div class="enemy-almanac-detail-header">
      <div class="enemy-almanac-detail-image-wrap">
        ${renderEnemyAlmanacArt(entry)}
      </div>
      <p>${enemyAlmanacDescription(enemy, entry)}</p>
    </div>
    <p><strong>Health:</strong> ${formatNumber(stats.hp)} | <strong>Speed:</strong> ${formatNumber(stats.speed)} cells/s | <strong>Reward:</strong> ${formatNumber(stats.reward)}</p>
    <p><strong>Effects:</strong> ${effects.length ? effects.join(", ") : "None"}</p>
    ${stats.extras.length ? `<p><strong>Details:</strong> ${stats.extras.join(", ")}</p>` : ""}
    ${renderEnemyFamilyVariantBlock(entry)}`;
}

function renderBlockAlmanacCard(block) {
  return `<div class="enemy-almanac-tile" title="${block.name}">
    <div class="enemy-almanac-image-wrap">
      <img class="block-almanac-image" src="${piecePreviewDataUrl(block, { cellSize: 16, padding: 10 })}" alt="${block.name}">
    </div>
  </div>`;
}

function renderBlockAlmanacDetail() {
  const counts = polyominoes.reduce((acc, block) => {
    const size = block.offsets.length;
    acc[size] = (acc[size] || 0) + 1;
    return acc;
  }, {});
  const summary = Object.entries(counts)
    .sort((left, right) => Number(left[0]) - Number(right[0]))
    .map(([size, count]) => `${count}x ${size}-tile`)
    .join(" | ");
  const names = polyominoes.map((block) => block.name).join(", ");
  almanacDetail.innerHTML = `<h3>Blocks</h3>
    <p>The block almanac shows every wall shape that can appear in the build offers.</p>
    <p><strong>Pool:</strong> ${summary}</p>
    <p><strong>Rule:</strong> Every offer shows two choices, and at least one is always a triomino or tetromino.</p>
    <p><strong>Shapes:</strong> ${names}</p>`;
}

function almanacWaveCacheKey(round) {
  return `${selectedDifficulty}:${selectedMap}:${round}`;
}

function createSeededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6D2B79F5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function deterministicSpawnRandom(round, spawnIndex) {
  const seed = (((round + 1) * 0x9E3779B1) ^ ((spawnIndex + 1) * 0x85EBCA6B)) >>> 0;
  return createSeededRandom(seed);
}

function almanacWaveMapConfig() {
  return activeMap || MAPS[selectedMap] || { reward: 1, enemyCount: 1, enemySpeed: 1 };
}

function baseWaveCountForRound(round) {
  const mapConfig = almanacWaveMapConfig();
  return Math.max(3, Math.round((1.25 + round * 0.62 + Math.floor(round / 6) * 0.18) * (DIFFICULTIES[selectedDifficulty].enemyCount || 1) * (mapConfig.enemyCount || 1) * brutalWaveCountScale(round)));
}

function baseWaveIntervalForRound(round) {
  return Math.max(1.08 - round * 0.015, brutalWaveIntervalFloor());
}

function waveProfileForRound(round) {
  if (round === 74) {
    return { key: "swarm", label: "Popcorn Rush", description: "A quick spam wave that floods the lane with weaker bodies.", countScale: 1.05, intervalScale: 0.3, rollBias: -0.16, minCount: selectedDifficulty === "brutal" ? 34 : 42 };
  }

  if (round === 58) {
    return { key: "elite", label: "Shield Push", description: "A shorter attacker-led wave with sturdier enemies and less downtime.", countScale: 0.5, intervalScale: 0.72, rollBias: 0.1, minCount: selectedDifficulty === "brutal" ? 9 : 12 };
  }

  if (round <= 5) {
    return { key: "balanced", label: "Opening Wave", description: "Small early wave focused on basic enemies.", countScale: 0.86, intervalScale: 0.86, rollBias: -0.02 };
  }

  const cycle = round % 8;
  if (cycle === 0 || cycle === 4) {
    return { key: "swarm", label: "Spam Wave", description: "More weak enemies appear, but they spawn in fast batches to keep the wave short.", countScale: 1.08, intervalScale: 0.48, rollBias: -0.08 };
  }
  if (cycle === 2 || cycle === 6) {
    return { key: "elite", label: "Elite Wave", description: "Fewer enemies overall, with stronger types showing up more often.", countScale: 0.6, intervalScale: 0.68, rollBias: 0.09 };
  }
  if (cycle === 3) {
    return { key: "pressure", label: "Pressure Wave", description: "A compact mixed wave with faster pacing and slightly stronger picks.", countScale: 0.8, intervalScale: 0.62, rollBias: 0.04 };
  }
  return { key: "balanced", label: "Mixed Wave", description: "A normal mixed wave with shorter pacing than the old count-only scaling.", countScale: 0.82, intervalScale: 0.74, rollBias: 0 };
}

function wavePlanForRound(round) {
  const profile = waveProfileForRound(round);
  let count = Math.max(3, Math.round(baseWaveCountForRound(round) * profile.countScale));
  if (profile.minCount) {
    count = Math.max(count, Math.round(profile.minCount * enemyCountMultiplier() * brutalWaveCountScale(round)));
  }
  const interval = Math.max(baseWaveIntervalForRound(round) * profile.intervalScale, selectedDifficulty === "brutal" ? 0.16 : 0.12);
  return {
    round,
    profile,
    count,
    interval
  };
}

function biasedWaveRoll(rawRoll, round) {
  const profile = waveProfileForRound(round);
  return Math.max(0, Math.min(0.9999, rawRoll + (profile.rollBias || 0)));
}

function waveCountForRound(round) {
  return wavePlanForRound(round).count;
}

function forcedNaturalEnemyForWave(round, spawnIndex = 1) {
  if (spawnIndex !== 1) {
    return null;
  }

  if (round === firstWaveForEnemyTier("sentinel", 3)) {
    return { enemyType: ENEMY_TYPES.sentinel, tier: 3 };
  }
  if (round === firstWaveForEnemyTier("sentinel", 2)) {
    return { enemyType: ENEMY_TYPES.sentinel, tier: 2 };
  }
  if (round === firstWaveForEnemyTier("sentinel", 1)) {
    return { enemyType: ENEMY_TYPES.sentinel, tier: 1 };
  }
  if (round === firstWaveForEnemyTier("attacker", 3)) {
    return { enemyType: ENEMY_TYPES.attacker, tier: 3 };
  }
  if (round === firstWaveForEnemyTier("attacker", 2)) {
    return { enemyType: ENEMY_TYPES.attacker, tier: 2 };
  }
  if (round === firstWaveForEnemyTier("attacker", 1)) {
    return { enemyType: ENEMY_TYPES.attacker, tier: 1 };
  }
  if (round === firstWaveForEnemyTier("assassin", 3)) {
    return { enemyType: ENEMY_TYPES.assassin, tier: 3 };
  }
  if (round === firstWaveForEnemyTier("assassin", 2)) {
    return { enemyType: ENEMY_TYPES.assassin, tier: 2 };
  }
  if (round === firstWaveForEnemyTier("assassin", 1)) {
    return { enemyType: ENEMY_TYPES.assassin, tier: 1 };
  }
  if (round === firstWaveForEnemyTier("breacher", 1)) {
    return { enemyType: ENEMY_TYPES.breacher, tier: 1 };
  }
  if (round === firstWaveForEnemyTier("octagon", 1)) {
    return { enemyType: ENEMY_TYPES.octagon, tier: 1 };
  }
  if (round === firstWaveForEnemyTier("hydra", 1)) {
    return { enemyType: ENEMY_TYPES.hydra, tier: 1 };
  }
  if (round === firstWaveForEnemyTier("idine", 1)) {
    return { enemyType: ENEMY_TYPES.idine, tier: 1 };
  }

  return null;
}

function remapLateWaveEnemyType(enemyType, round, randomValue) {
  if (!enemyType) {
    return enemyType;
  }

  const legacyKeys = new Set(["fast", "speedy", "pentagon", "hexagon", "diamond", "heavy", "splitter", "biscuit"]);
  if (!legacyKeys.has(enemyType.key)) {
    return enemyType;
  }

  if (round >= 90) {
    if (randomValue > 0.82) {
      return ENEMY_TYPES.behemoth;
    }
    if (randomValue > 0.62) {
      return ENEMY_TYPES.waffle16;
    }
    if (randomValue > 0.5) {
      return ENEMY_TYPES.assassin;
    }
    if (randomValue > 0.38) {
      return ENEMY_TYPES.attacker;
    }
    if (randomValue > 0.26) {
      return ENEMY_TYPES.sentinel;
    }
    if (randomValue > 0.14) {
      return ENEMY_TYPES.life;
    }
    return ENEMY_TYPES.health;
  }

  if (round >= 75) {
    if (randomValue > 0.9) {
      return ENEMY_TYPES.behemoth;
    }
    if (randomValue > 0.7) {
      return ENEMY_TYPES.waffle16;
    }
    if (randomValue > 0.58) {
      return ENEMY_TYPES.assassin;
    }
    if (randomValue > 0.44) {
      return ENEMY_TYPES.attacker;
    }
    if (randomValue > 0.3) {
      return ENEMY_TYPES.sentinel;
    }
    if (randomValue > 0.16) {
      return ENEMY_TYPES.life;
    }
    return ENEMY_TYPES.health;
  }

  if (round >= 60) {
    if (randomValue > 0.78) {
      return ENEMY_TYPES.waffle16;
    }
    if (randomValue > 0.62) {
      return ENEMY_TYPES.attacker;
    }
    if (randomValue > 0.48) {
      return ENEMY_TYPES.sentinel;
    }
    if (randomValue > 0.32) {
      return ENEMY_TYPES.life;
    }
    return ENEMY_TYPES.health;
  }

  if (round >= 45) {
    if (randomValue > 0.82) {
      return ENEMY_TYPES.waffle16;
    }
    if (randomValue > 0.64) {
      return ENEMY_TYPES.attacker;
    }
    if (randomValue > 0.5) {
      return ENEMY_TYPES.sentinel;
    }
    if (randomValue > 0.34) {
      return ENEMY_TYPES.life;
    }
    return ENEMY_TYPES.health;
  }

  return enemyType;
}

function waffleRampThreshold(round) {
  if (round >= 65) {
    return 0.82;
  }
  if (round >= 50) {
    return 0.86;
  }
  if (round >= 38) {
    return 0.9;
  }
  if (round >= 26) {
    return 0.93;
  }
  if (round >= 12) {
    return 0.95;
  }
  return Infinity;
}

function waveRewardForRound(round) {
  const mapConfig = almanacWaveMapConfig();
  return Math.max(2, Math.round((5 + round) * (DIFFICULTIES[selectedDifficulty].reward || 1) * (mapConfig.reward || 1)));
}

function deterministicRolledTierForWave(enemyKey, round, rng) {
  const maxTier = maxTierForEnemy(enemyKey);
  const thirdWave = firstWaveForEnemyTier(enemyKey, 3);
  const secondWave = firstWaveForEnemyTier(enemyKey, 2);

  if (maxTier >= 3 && round >= thirdWave && rng() < Math.min(0.08 + (round - thirdWave) * 0.007, 0.46)) {
    return 3;
  }

  if (maxTier >= 2 && round >= secondWave && rng() < Math.min(0.06 + (round - secondWave) * 0.018, 0.6)) {
    return 2;
  }

  return 1;
}

function waffleStatusModifiersForRound(round, rng) {
  if (round >= 100) {
    return { hidden: true, armored: true, armorHp: 4 + Math.floor((round - 100) / 20) };
  }

  if (round >= 80) {
    return {
      hidden: rng() < 0.55,
      armored: rng() < 0.55,
      armorHp: 3 + Math.floor((round - 80) / 20)
    };
  }

  if (round >= 55) {
    return {
      hidden: rng() < 0.35,
      armored: rng() < 0.4,
      armorHp: 2 + Math.floor((round - 55) / 25)
    };
  }

  if (round >= 35) {
    return {
      hidden: rng() < 0.22,
      armored: rng() < 0.25,
      armorHp: 2
    };
  }

  return { hidden: false, armored: false, armorHp: 0 };
}

function waveTierForEnemy(enemyKey, round, rng) {
  if (enemyKey === "splitter") {
    return splitterTierForWave(round);
  }
  if (enemyKey === "popcorn") {
    return 1;
  }
  return deterministicRolledTierForWave(enemyKey, round, rng);
}

function withWavePreviewState(round, callback) {
  const previousWave = waveNumber;
  const previousEnemyId = nextEnemyId;
  waveNumber = round;
  try {
    return callback();
  } finally {
    waveNumber = previousWave;
    nextEnemyId = previousEnemyId;
  }
}

function previewEnemyForWave(enemyType, round, options = {}) {
  const startCell = activePortals()?.[0] || { x: 0, y: 0 };
  return withWavePreviewState(round, () => createEnemy(enemyType, {
    portalIndex: 0,
    startCell,
    route: [startCell],
    summonWave: round,
    ...options
  }));
}

function waveRosterEnemyName(enemy) {
  if (!enemy) {
    return "Enemy";
  }
  if (enemy.key === "sentinel") {
    return enemy.type;
  }
  if (enemy.key === "specialPentagon") {
    return "Pink";
  }
  if (enemy.key === "octagon") {
    return "Pentagon Tier 4";
  }
  if (enemy.key === "splitter") {
    return `Splitter Tier ${enemy.tier}`;
  }
  if (enemy.key === "assassin") {
    return `Assassin Tier ${enemy.tier}`;
  }
  if (enemy.key === "speedy") {
    return `Speedy Tier ${enemy.tier}`;
  }
  if (enemyUsesTiers(enemy.key) && maxTierForEnemy(enemy.key) > 1) {
    return `${ENEMY_TYPES[enemy.key]?.name || enemy.type} Tier ${enemy.tier}`;
  }
  return enemy.type || ENEMY_TYPES[enemy.key]?.name || "Enemy";
}

function waveEnemyEffectSymbols(enemy) {
  if (!enemy) {
    return "";
  }
  const symbols = [];
  if (enemy.hidden) {
    symbols.push("▲");
  }
  if (enemy.armored || enemy.key === "armored") {
    symbols.push("◎");
  }
  if ((enemy.shellHp || 0) > 0 || enemy.shelled) {
    symbols.push("◍");
  }
  if (enemy.shielded || (enemy.shieldHp || 0) > 0 || enemy.key === "shield") {
    symbols.push("◌");
  }
  return symbols.join(" ");
}

function waveAlmanacSummary(round) {
  const cacheKey = almanacWaveCacheKey(round);
  if (waveAlmanacSummaryCache.has(cacheKey)) {
    return waveAlmanacSummaryCache.get(cacheKey);
  }

  const roster = new Map();
  let totalEnemies = 0;
  let totalKillCash = 0;
  const plan = wavePlanForRound(round);
  const count = plan.count;

  const addEnemy = (enemy) => {
    if (!enemy) {
      return;
    }
    const name = waveRosterEnemyName(enemy);
    const record = roster.get(name) || { name, count: 0, cash: 0, effects: new Set() };
    const symbols = waveEnemyEffectSymbols(enemy);
    for (const symbol of symbols.split(" ").filter(Boolean)) {
      record.effects.add(symbol);
    }
    record.count += 1;
    record.cash += enemy.reward || 0;
    roster.set(name, record);
    totalEnemies += 1;
    totalKillCash += enemy.reward || 0;
  };

  for (let spawnIndex = 1; spawnIndex <= count; spawnIndex += 1) {
    const rng = deterministicSpawnRandom(round, spawnIndex);
    const roll = biasedWaveRoll(rng(), round);
    const forcedNatural = forcedNaturalEnemyForWave(round, spawnIndex);
    const forceHidden = round === 20 && spawnIndex === 1;
    const forceArmored = round === 24 && spawnIndex === 1;
    const forceShielded = round === 30 && spawnIndex === 1;
    const shieldedAttackerWave = round === 58;
    const singleShieldedAttackerWave = round === 42;
    const popcornRushWave = round === 74;
    let enemyType = ENEMY_TYPES.fast;
    let forcedTier = null;

    if (forcedNatural) {
      enemyType = forcedNatural.enemyType;
      forcedTier = forcedNatural.tier;
    }

    if (!forcedNatural && popcornRushWave) {
      enemyType = ENEMY_TYPES.popcorn;
    } else if (!forcedNatural && shieldedAttackerWave) {
      enemyType = ENEMY_TYPES.attacker;
    } else if (!forcedNatural && singleShieldedAttackerWave && spawnIndex === 1) {
      enemyType = ENEMY_TYPES.attacker;
    }

    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 3 && roll > 0.58) {
      enemyType = ENEMY_TYPES.pentagon;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 48 && roll > 0.962) {
      enemyType = ENEMY_TYPES.octagon;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 10 && roll > 0.67) {
      enemyType = ENEMY_TYPES.speedy;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 52 && roll > 0.952) {
      enemyType = ENEMY_TYPES.narder;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 7 && roll > 0.72) {
      enemyType = ENEMY_TYPES.diamond;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 9 && roll > 0.86) {
      enemyType = ENEMY_TYPES.health;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 22 && roll > 0.91) {
      enemyType = ENEMY_TYPES.heavy;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 5 && roll > 0.92) {
      enemyType = ENEMY_TYPES.splitter;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 28 && roll > 0.965) {
      enemyType = ENEMY_TYPES.sentinel;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 40 && roll > 0.985) {
      enemyType = ENEMY_TYPES.hydra;
    }
    if (!forcedNatural && !shieldedAttackerWave && !singleShieldedAttackerWave && round >= 36 && roll > 0.82) {
      enemyType = ENEMY_TYPES.attacker;
    }
    if (!forcedNatural && !shieldedAttackerWave && !singleShieldedAttackerWave && round >= 73 && roll > 0.958) {
      enemyType = ENEMY_TYPES.assassin;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 82 && roll > 0.988) {
      enemyType = ENEMY_TYPES.breacher;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 6 && roll > 0.84) {
      enemyType = ENEMY_TYPES.hexagon;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 12 && roll > waffleRampThreshold(round)) {
      enemyType = ENEMY_TYPES.waffle16;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 24 && roll > 0.93) {
      enemyType = ENEMY_TYPES.biscuit;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 28 && roll > 0.955) {
      enemyType = ENEMY_TYPES.life;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 34 && roll > 0.972) {
      enemyType = ENEMY_TYPES.popcorn;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 64 && roll > 0.986) {
      enemyType = ENEMY_TYPES.specialPentagon;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 50 && roll > 0.9925) {
      enemyType = ENEMY_TYPES.idaen;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 74 && roll > 0.989) {
      enemyType = ENEMY_TYPES.idine;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 78 && roll > 0.991) {
      enemyType = ENEMY_TYPES.celun;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 80 && roll > 0.992) {
      enemyType = ENEMY_TYPES.celris;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 84 && roll > 0.993) {
      enemyType = ENEMY_TYPES.cel;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 86 && roll > 0.9935) {
      enemyType = ENEMY_TYPES.lun;
    }
    if (!forcedNatural && !shieldedAttackerWave && round >= 88 && roll > 0.994) {
      enemyType = ENEMY_TYPES.ris;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 68 && roll > 0.9945) {
      enemyType = ENEMY_TYPES.behemoth;
    }
    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && round >= 100 && roll > 0.9972) {
      enemyType = ENEMY_TYPES.xer;
    }

    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && enemyType.key !== "hydra" && enemyType.key !== "behemoth" && enemyType.key !== "idaen" && enemyType.key !== "xer") {
      const naturalEliteRoll = rng();
      if (round >= 74 && naturalEliteRoll > 0.992) {
        enemyType = ENEMY_TYPES.idine;
      } else if (!singleShieldedAttackerWave && round >= 73 && naturalEliteRoll > 0.982) {
        enemyType = ENEMY_TYPES.assassin;
      } else if (round >= 82 && naturalEliteRoll > 0.972) {
        enemyType = ENEMY_TYPES.breacher;
      } else if (!singleShieldedAttackerWave && round >= 36 && naturalEliteRoll > 0.955) {
        enemyType = ENEMY_TYPES.attacker;
      } else if (round >= 28 && naturalEliteRoll > 0.968) {
        enemyType = ENEMY_TYPES.sentinel;
      }
    }

    if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave) {
      enemyType = remapLateWaveEnemyType(enemyType, round, rng());
    }

    let hidden = false;
    if (forceHidden) {
      hidden = true;
    } else if (round >= 21) {
      hidden = rng() < Math.min(0.09 + (round - 21) * 0.016, 0.34);
    }
    const waffleMods = enemyType.key.startsWith("waffle") ? waffleStatusModifiersForRound(round, rng) : { hidden: false, armored: false, armorHp: 0 };
    const attackerHidden = enemyType.key === "attacker";
    const attackerArmored = false;
    const enemyArmored = forceArmored || attackerArmored || (enemyType.key.startsWith("waffle") && waffleMods.armored);

    if (enemyType.key === "hydra") {
      for (let stage = 0; stage < 4; stage += 1) {
        addEnemy(previewEnemyForWave(enemyType, round, {
          color: ["#ffd84f", "#56a8ff", "#a56cff", "#d34a4a"][stage],
          hydraGroupId: `almanac-hydra-${round}-${spawnIndex}`,
          hydraStage: stage,
          segmentOffset: stage * 0.34,
          sizeScale: 1.26,
          turnRate: 2.35,
          hidden: true,
          armored: true,
          shelled: true,
          shielded: true,
          shieldHp: 120
        }));
      }
      continue;
    }

    const shielded = shieldedAttackerWave
      ? true
      : (singleShieldedAttackerWave && enemyType.key === "attacker" && spawnIndex === 1)
        ? true
        : (forceShielded || (round >= 31 && enemyType.key !== "attacker" && rng() < Math.min(0.05 + (round - 31) * 0.008, 0.22)));

    const enemy = previewEnemyForWave(enemyType, round, {
      tier: forcedTier || waveTierForEnemy(enemyType.key, round, rng),
      hidden: attackerHidden || enemyType.key === "assassin" || (enemyType.key.startsWith("waffle") ? waffleMods.hidden : hidden),
      armored: enemyArmored,
      armorHp: attackerArmored
        ? ENEMY_TYPES.attacker.armor + Math.max(0, Math.floor((round - 10) / 4))
        : enemyType.key.startsWith("waffle")
          ? waffleMods.armorHp
          : undefined,
      shielded
    });

    if (enemyType.key === "behemoth" && enemy) {
      enemy.hp = 4800;
      enemy.maxHp = 4800;
      enemy.speed = Math.max(CELL_SIZE * 0.82, enemy.speed * 0.72);
      enemy.reward = enemyCashFromHp(enemy.maxHp) * 4;
    }
  if (enemyType.key === "xer" && enemy) {
    enemy.hp = 18000;
    enemy.maxHp = 18000;
    enemy.speed = Math.max(CELL_SIZE * 0.42, enemy.speed * 0.42);
    enemy.reward = enemy.maxHp;
    enemy.sizeScale = 4.9;
  }

    addEnemy(enemy);
  }

  if (isAdapterWave(round)) {
    const boss = previewEnemyForWave(ENEMY_TYPES.adapter, round, {
      hidden: false,
      sizeScale: 1
    });
    addEnemy(boss);
  }

  const summary = {
    round: round,
    profile: plan.profile,
    enemyCount: totalEnemies,
    spawnCount: count,
    interval: plan.interval,
    totalKillCash: totalKillCash,
    waveReward: waveRewardForRound(round),
    totalCash: totalKillCash + waveRewardForRound(round),
    types: [...roster.values()]
      .map((entry) => ({
        name: entry.name,
        count: entry.count,
        cash: entry.cash,
        effects: [...entry.effects].join(" ")
      }))
      .sort((left, right) => right.count - left.count || right.cash - left.cash || left.name.localeCompare(right.name))
  };
  waveAlmanacSummaryCache.set(cacheKey, summary);
  return summary;
}

function renderWaveAlmanacCard(summary) {
  return [
    "<h3>", String(summary.round), "</h3>",
    "<p>", summary.profile.label, "</p>"
  ].join("");
}

function renderWaveAlmanacDetail(round) {
  if (round > unlockedWaveMax) {
    almanacDetail.innerHTML = [
      "<h3>Wave ", String(round), "</h3>",
      "<p>Reach later waves to reveal this roster, or use the 512 code on the menu to unlock waves through 100.</p>"
    ].join("");
    return;
  }
  const summary = waveAlmanacSummary(round);
  const typeRows = summary.types.map((entry) => [
    "<tr><td>",
    entry.name,
    entry.effects ? " <span title=\"Effects\">" + entry.effects + "</span>" : "",
    "</td><td>",
    formatNumber(entry.count),
    "</td><td>",
    formatNumber(entry.cash),
    "</td></tr>"
  ].join("")).join("");
  const spawnSummary = summary.enemyCount !== summary.spawnCount
    ? " <span>(from " + formatNumber(summary.spawnCount) + " wave spawns)</span>"
    : "";
  almanacDetail.innerHTML = [
    "<h3>Wave ", String(summary.round), "</h3>",
    "<p><strong>Type:</strong> ", summary.profile.label, "</p>",
    "<p>", summary.profile.description, "</p>",
    "<p><strong>Enemies:</strong> ", formatNumber(summary.enemyCount), spawnSummary, "</p>",
    "<p><strong>Kill cash:</strong> ", formatNumber(summary.totalKillCash), " | <strong>Wave reward:</strong> ", formatNumber(summary.waveReward), " | <strong>Total cash:</strong> ", formatNumber(summary.totalCash), "</p>",
    "<p><strong>Key:</strong> ▲ Hidden | ◎ Armoured | ◍ Shell | ◌ Shield</p>",
    "<table><thead><tr><th align=\"left\">Type</th><th align=\"left\">Count</th><th align=\"left\">Cash</th></tr></thead><tbody>",
    typeRows,
    "</tbody></table>"
  ].join("");
}

function diamondTierForWave(round = waveNumber) {
  if (round >= 48) {
    return 3;
  }
  if (round >= 22) {
    return 2;
  }
  return 1;
}

function shieldTierForWave(round = waveNumber) {
  if (round >= 54) {
    return 3;
  }
  if (round >= 28) {
    return 2;
  }
  return 1;
}

function genericEnemyTierForWave(round = waveNumber) {
  if (round >= 46) {
    return 3;
  }
  if (round >= 24) {
    return 2;
  }
  return 1;
}

function rolledTierForWave(enemyKey, round = waveNumber) {
  const maxTier = maxTierForEnemy(enemyKey);
  const thirdWave = firstWaveForEnemyTier(enemyKey, 3);
  const secondWave = firstWaveForEnemyTier(enemyKey, 2);

  if (maxTier >= 3 && round >= thirdWave && Math.random() < Math.min(0.08 + (round - thirdWave) * 0.007, 0.46)) {
    return 3;
  }

  if (maxTier >= 2 && round >= secondWave && Math.random() < Math.min(0.06 + (round - secondWave) * 0.018, 0.6)) {
    return 2;
  }

  return 1;
}

function splitterTierForWave(round = waveNumber) {
  return Math.max(1, Math.min(10, 1 + Math.floor(Math.max(0, round - 5) / 14)));
}

function splitterHpForTier(tier = 1, hpScale = 1) {
  return Math.max(1, Math.round(Math.pow(2, Math.max(0, tier - 1)) * hpScale));
}

function maxTierForEnemy(enemyKey) {
  if (enemyKey === "splitter") {
    return 10;
  }
  if (enemyKey === "sentinel") {
    return 3;
  }
  if (enemyKey === "narder") {
    return 2;
  }
  return 3;
}

function waffleTypeForTier(tier = 3) {
  return ENEMY_TYPES.waffle16;
}

function enemySupportsTiers(enemyKey) {
  return enemyKey !== "idaen" && enemyKey !== "hydra" && enemyKey !== "adapter" && enemyKey !== "behemoth" && enemyKey !== "xer" && enemyKey !== "octagon" && enemyKey !== "specialPentagon" && enemyKey !== "popcorn" && enemyKey !== "kernel" && enemyKey !== "idine" && enemyKey !== "celun" && enemyKey !== "celris" && enemyKey !== "cel" && enemyKey !== "lun" && enemyKey !== "ris";
}

function isDiamondEnemy(enemy) {
  return enemy?.key === "diamond";
}

function isShieldEnemy(enemy) {
  return enemy?.key === "shield";
}

function enemyHasVisibleShield(enemy) {
  return isShieldEnemy(enemy) || enemy?.shielded || (enemy?.shieldHp || 0) > 0;
}

function drawLocalEnemyShieldBubble(enemy, innerRadius, outerRadiusOverride) {
  if (!enemyHasVisibleShield(enemy) || (enemy.shieldHp || 0) <= 0) {
    return;
  }
  const shieldRatio = Math.max(0, Math.min(1, (enemy.shieldHp || 0) / Math.max(enemy.maxShieldHp || 1, 1)));
  const outerRadius = outerRadiusOverride || enemy.shieldRadius || innerRadius + 10;
  ctx.strokeStyle = `rgba(156, 222, 255, ${0.4 + shieldRatio * 0.45})`;
  ctx.lineWidth = 2 + Math.max(0, ((enemy.tier || 1) - 1) * 0.45);
  ctx.beginPath();
  ctx.arc(0, 0, outerRadius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([8, 6]);
  ctx.lineDashOffset = -(lastTimestamp / 20);
  ctx.strokeStyle = "rgba(220, 244, 255, 0.85)";
  ctx.beginPath();
  ctx.arc(0, 0, Math.max(innerRadius, outerRadius - 6), 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = `rgba(180, 230, 255, ${0.08 + shieldRatio * 0.08})`;
  ctx.beginPath();
  ctx.arc(0, 0, outerRadius, 0, Math.PI * 2);
  ctx.fill();
}

function diamondTierConfig(tier = 1) {
  if (tier >= 3) {
    return {
      hpMultiplier: 4.6,
      speedMultiplier: 0.62,
      rewardMultiplier: 10.2,
      radiusMultiplier: 1.45,
      color: "#55d8ff",
      coreColor: "#e9fbff"
    };
  }
  if (tier === 2) {
    return {
      hpMultiplier: 2.05,
      speedMultiplier: 0.82,
      rewardMultiplier: 3.15,
      radiusMultiplier: 1.18,
      color: "#71dcff",
      coreColor: "#f1fcff"
    };
  }
  return {
    hpMultiplier: 1,
    speedMultiplier: 1,
    rewardMultiplier: 1,
    radiusMultiplier: 1,
    color: null,
    coreColor: "#e8fbff"
  };
}

function shieldTierConfig(tier = 1) {
  if (tier >= 3) {
    return {
      hpMultiplier: 4.2,
      speedMultiplier: 0.58,
      rewardMultiplier: 9.7,
      radiusMultiplier: 1.5,
      color: "#5fa8ff",
      coreColor: "#edf5ff",
      shieldHpMultiplier: 4.8,
      shieldRadiusMultiplier: 1.45
    };
  }
  if (tier === 2) {
    return {
      hpMultiplier: 2.05,
      speedMultiplier: 0.8,
      rewardMultiplier: 3.05,
      radiusMultiplier: 1.2,
      color: "#79baff",
      coreColor: "#f4f8ff",
      shieldHpMultiplier: 2.15,
      shieldRadiusMultiplier: 1.18
    };
  }
  return {
    hpMultiplier: 1,
    speedMultiplier: 1,
    rewardMultiplier: 1,
    radiusMultiplier: 1,
    color: null,
    coreColor: "#f4f8ff",
    shieldHpMultiplier: 1,
    shieldRadiusMultiplier: 1
  };
}

function genericTierConfig(tier = 1) {
  if (tier >= 3) {
    return {
      hpMultiplier: 4.1,
      speedMultiplier: 0.64,
      rewardMultiplier: 10.6,
      radiusMultiplier: 1.4
    };
  }
  if (tier === 2) {
    return {
      hpMultiplier: 1.95,
      speedMultiplier: 0.84,
      rewardMultiplier: 3.25,
      radiusMultiplier: 1.14
    };
  }
  return {
    hpMultiplier: 1,
    speedMultiplier: 1,
    rewardMultiplier: 1,
    radiusMultiplier: 1
  };
}

function startGame() {
  resetGame();
  activeMap = MAPS[selectedMap];
  applyMapViewport();
  if (selectedDifficulty === "sandbox") {
    infiniteMode = true;
    money = 999999;
    lives = 999999;
    setMessage("Sandbox mode: infinite money and lives enabled.", 2.1);
  }
  gameMode = "playing";
  closeTowerPopup();
  openOverlay(null);
  if (!isSandboxMode()) {
    queueOpeningTutorial();
    queueFreezingMountainsTutorial();
    presentQueuedTutorialPopup();
  }
}

function queueFreezingMountainsTutorial() {
  if (!isFreezingMountainsMap() || tutorialDismissed || isSandboxMode()) {
    return;
  }
  queueTutorialPopup(
    "freezing-mountains-intro",
    "Freezing Mountains Hazard",
    "This map has a cold snap hazard.\n\nFrom Wave 6 onward, one of your towers can freeze solid at the start of a wave for one round. Frozen towers stop firing, appear fully encased in ice, then thaw on the next wave unless there is no other tower available to freeze."
  );
}

function roundedRectPath(context, x, y, width, height, radius) {
  const safeRadius = Math.max(0, Math.min(radius || 0, Math.abs(width) / 2, Math.abs(height) / 2));
  context.beginPath();
  if (typeof context.roundRect === "function") {
    context.roundRect(x, y, width, height, safeRadius);
    return;
  }
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function towerUpgradeCount(tower) {
  if (!tower) {
    return 0;
  }
  return isPathTower(tower) ? (tower.path1 || 0) + (tower.path2 || 0) : Math.max(0, (tower.level || 1) - 1);
}

function pauseGame() {
  if (gameMode !== "playing" || activeTutorialPopup) {
    return;
  }

  gameMode = "paused";
  openOverlay("pause");
}

function resumeGame() {
  if (gameMode === "gameover" || activeTutorialPopup) {
    return;
  }
  gameMode = "playing";
  openOverlay(null);
}

function quitToMenu() {
  gameMode = "menu";
  closeTowerPopup();
  openOverlay("menu");
}

function showGameOver() {
  gameMode = "gameover";
  wave = null;
  enemies = [];
  projectiles = [];
  closeTowerPopup();
  if (gameOverSummary) {
    gameOverSummary.textContent = `You reached wave ${waveNumber} on ${MAPS[selectedMap].name}.`;
  }
  openOverlay("gameover");
}

function openAlmanac(origin) {
  almanacOrigin = origin;
  renderAlmanac();
  openOverlay("almanac");
}

function closeAlmanac() {
  if (almanacOrigin === "pause") {
    gameMode = "paused";
    openOverlay("pause");
    presentQueuedTutorialPopup();
    return;
  }

  gameMode = "menu";
  openOverlay("menu");
}

function setTool(nextTool, redraw = true) {
  currentTool = nextTool;

  for (const button of toolGrid?.querySelectorAll("button[data-tool]") || []) {
    button.classList.toggle("active", button.dataset.tool === nextTool);
  }

  updateHud();
  if (redraw) {
    draw();
  }
}

function renderWarningPanel() {
  if (!warningPanel || !warningPanelTitle || !warningPanelBody) {
    return;
  }

  warningPanel.hidden = !activeWaveWarning;
  if (!activeWaveWarning) {
    return;
  }

  warningPanelTitle.textContent = activeWaveWarning.title;
  warningPanelBody.innerHTML = activeWaveWarning.body
    .split("\n\n")
    .map((paragraph) => `<span>${paragraph}</span>`)
    .join("<br><br>");
}

function updateMenuSelectors() {
  if (!MAPS[selectedMap]) {
    selectedMap = "meadow";
  }
  activeMap = MAPS[selectedMap];
  persistMenuState();
  for (const button of difficultyOptions.querySelectorAll("[data-difficulty]")) {
    button.classList.toggle("active", button.dataset.difficulty === selectedDifficulty);
  }
  for (const button of mapOptions.querySelectorAll("[data-map]")) {
    button.classList.toggle("active", button.dataset.map === selectedMap);
  }
  menuMapDescription.textContent = `${MAPS[selectedMap].name}: ${MAPS[selectedMap].description}`;
}

function populateSandboxEnemyOptions() {
  if (!sandboxEnemySelect) {
    return;
  }

  const renderGroup = (label, keys) => `<optgroup label="${label}">${keys
    .map((key) => `<option value="${key}">${sandboxEnemyOptionLabel(key)} (${sandboxEnemyWaveLabel(key)})</option>`)
    .join("")}</optgroup>`;
  const renderOptions = (keys) => keys
    .map((key) => `<option value="${key}">${sandboxEnemyOptionLabel(key)} (${sandboxEnemyWaveLabel(key)})</option>`)
    .join("");
  sandboxEnemySelect.innerHTML = [
    renderGroup("Main Enemies", ["fast", "speedy", "narder", "pentagon", "octagon", "hexagon", "diamond", "health", "life", "heavy", "splitter", "waffle16", "biscuit", "sentinel", "attacker", "assassin", "breacher", "hydra", "behemoth", "idaen", "adapter", "xer"]),
    renderOptions(["popcorn", "idine"])
  ].join("");
  updateSandboxTierOptions();
}

function sandboxFamilyTierForEnemy(enemyKey) {
  if (enemyKey === "specialPentagon") {
    return 1;
  }
  if (enemyKey === "behemoth") {
    return 2;
  }
  if (enemyKey === "kernel") {
    return 1;
  }
  if (enemyKey === "popcorn") {
    return 2;
  }
  if (enemyKey === "cel" || enemyKey === "lun" || enemyKey === "ris") {
    return 1;
  }
  if (enemyKey === "celun" || enemyKey === "celris") {
    return 2;
  }
  if (enemyKey === "idine") {
    return 3;
  }
  return null;
}

function sandboxEnemyOptionLabel(enemyKey) {
  if (enemyKey === "behemoth") {
    return "Behemoth";
  }
  if (enemyKey === "popcorn" || enemyKey === "idine") {
    return ENEMY_TYPES[enemyKey].name;
  }
  const tier = sandboxFamilyTierForEnemy(enemyKey);
  return tier ? `${ENEMY_TYPES[enemyKey].name} (T${tier})` : ENEMY_TYPES[enemyKey].name;
}

function sandboxEnemyKeyForSelection(enemyKey, selectionValue) {
  if (enemyKey === "behemoth") {
    return selectionValue === "specialPentagon" ? "specialPentagon" : "behemoth";
  }
  if (enemyKey === "popcorn") {
    return selectionValue === "kernel" ? "kernel" : "popcorn";
  }
  if (enemyKey === "idine") {
    return ["cel", "lun", "ris", "celun", "celris", "idine"].includes(selectionValue) ? selectionValue : "idine";
  }
  return enemyKey;
}

function enemyUsesTiers(enemyKey) {
  return enemySupportsTiers(enemyKey) && enemyKey !== "shield";
}

function updateSandboxTierOptions() {
  if (!sandboxTierSelect) {
    return;
  }

  const enemyKey = sandboxEnemySelect?.value || "";
  if (enemyKey === "splitter") {
    sandboxTierLabel.textContent = "Tier";
    sandboxTierSelect.innerHTML = Array.from({ length: 10 }, (_, index) => {
      const tier = index + 1;
      return `<option value="${tier}">Tier ${tier} (${sandboxWaveForEnemyTier("splitter", tier)})</option>`;
    }).join("");
    sandboxTierSelect.disabled = false;
    sandboxTierSelect.parentElement?.classList.remove("disabled");
    return;
  }

  if (enemyKey === "sentinel") {
    sandboxTierLabel.textContent = "Class";
    sandboxTierSelect.innerHTML = `
      <option value="1">Sentinel (${sandboxWaveForEnemyTier("sentinel", 1)})</option>
      <option value="2">Overwatch (${sandboxWaveForEnemyTier("sentinel", 2)})</option>
      <option value="3">Skrey (${sandboxWaveForEnemyTier("sentinel", 3)})</option>
    `;
    sandboxTierSelect.disabled = false;
    sandboxTierSelect.parentElement?.classList.remove("disabled");
    return;
  }

  if (enemyKey === "behemoth") {
    sandboxTierLabel.textContent = "Class";
    sandboxTierSelect.innerHTML = `
      <option value="specialPentagon">T1 Pink (${sandboxWaveForEnemyTier("specialPentagon", 1)})</option>
      <option value="behemoth">T2 Behemoth (${sandboxWaveForEnemyTier("behemoth", 2)})</option>
    `;
    sandboxTierSelect.disabled = false;
    sandboxTierSelect.parentElement?.classList.remove("disabled");
    return;
  }

  if (enemyKey === "popcorn") {
    sandboxTierLabel.textContent = "";
    sandboxTierSelect.innerHTML = `
      <option value="kernel">Kernel (${sandboxWaveForEnemyTier("kernel", 1)})</option>
      <option value="popcorn">Popcorn (${sandboxWaveForEnemyTier("popcorn", 1)})</option>
    `;
    sandboxTierSelect.disabled = false;
    sandboxTierSelect.parentElement?.classList.remove("disabled");
    return;
  }

  if (enemyKey === "idine") {
    sandboxTierLabel.textContent = "";
    sandboxTierSelect.innerHTML = `
      <option value="cel">Cel (${sandboxWaveForEnemyTier("cel", 1)})</option>
      <option value="lun">Lun (${sandboxWaveForEnemyTier("lun", 1)})</option>
      <option value="ris">Ris (${sandboxWaveForEnemyTier("ris", 1)})</option>
      <option value="celun">Celun (${sandboxWaveForEnemyTier("celun", 1)})</option>
      <option value="celris">Celris (${sandboxWaveForEnemyTier("celris", 1)})</option>
      <option value="idine">Idine (${sandboxWaveForEnemyTier("idine", 1)})</option>
    `;
    sandboxTierSelect.disabled = false;
    sandboxTierSelect.parentElement?.classList.remove("disabled");
    return;
  }

  if (enemyKey === "hydra" || enemyKey === "adapter" || enemyKey === "xer" || enemyKey === "octagon" || enemyKey === "specialPentagon" || enemyKey === "kernel" || enemyKey === "celun" || enemyKey === "celris" || enemyKey === "cel" || enemyKey === "lun" || enemyKey === "ris") {
    const familyTier = sandboxFamilyTierForEnemy(enemyKey);
    sandboxTierLabel.textContent = familyTier ? "Family Tier" : "Tier";
    sandboxTierSelect.innerHTML = `<option value="1">${familyTier ? `Tier ${familyTier}` : "Tier 1"} (${sandboxWaveForEnemyTier(enemyKey, 1)})</option>`;
    sandboxTierSelect.disabled = false;
    sandboxTierSelect.parentElement?.classList.remove("disabled");
    return;
  }

  sandboxTierLabel.textContent = "Tier";
  const maxTier = maxTierForEnemy(enemyKey);
  sandboxTierSelect.innerHTML = Array.from({ length: maxTier }, (_, index) => {
    const tier = index + 1;
    return `<option value="${tier}">Tier ${tier} (${sandboxWaveForEnemyTier(enemyKey, tier)})</option>`;
  }).join("");
  const tiered = enemyUsesTiers(enemyKey);
  sandboxTierSelect.disabled = !tiered;
  sandboxTierSelect.parentElement?.classList.toggle("disabled", !tiered);
  if (!tiered) {
    sandboxTierSelect.value = "1";
  }
}

function sandboxEnemyWaveLabel(enemyKey) {
  return `Wave ${sandboxEarliestWaveForEnemy(enemyKey)}`;
}

function firstWaveForEnemyTier(enemyKey, tier = 1) {
  if (enemyKey === "splitter") {
    return Math.min(100, 5 + (Math.max(1, tier) - 1) * 11);
  }

  const tierWaves = {
    fast: [1, 15, 46],
    narder: [52, 68],
    speedy: [10, 22, 40],
    pentagon: [3, 16, 46],
    octagon: [35],
    hexagon: [6, 19, 48],
    diamond: [7, 15, 30],
    health: [9, 18, 32],
    waffle16: [12, 20, 30],
    heavy: [22, 25, 48],
    biscuit: [24, 24, 48],
    sentinel: [28, 36, 54],
    specialPentagon: [64],
    behemoth: [64, 68],
    life: [28, 42, 58],
    popcorn: [34],
    kernel: [34],
    attacker: [36, 48, 64],
    assassin: [73, 88, 100],
    hydra: [40],
    idine: [75],
    breacher: [82, 94, 108],
    celun: [78],
    celris: [80],
    cel: [84],
    lun: [86],
    ris: [88],
    idaen: [50],
    adapter: [68],
    xer: [100]
  };

  const waves = tierWaves[enemyKey] || [1];
  return waves[Math.max(0, Math.min(waves.length - 1, Math.max(1, tier) - 1))];
}

function sandboxEarliestWaveForEnemy(enemyKey) {
  return firstWaveForEnemyTier(enemyKey, 1);
}

function sandboxWaveForEnemyTier(enemyKey, tier) {
  return `Wave ${firstWaveForEnemyTier(enemyKey, tier)}`;
}

function updateSandboxPortalOptions() {
  if (!sandboxPortalSelect) {
    return;
  }

  const previous = sandboxPortalSelect.value;
  sandboxPortalSelect.innerHTML = `<option value="auto">Auto</option>${activePortals()
    .map((portal, index) => `<option value="${index}">Portal ${index + 1} (${portal.x + 1}, ${portal.y + 1})</option>`)
    .join("")}`;
  sandboxPortalSelect.value = [...sandboxPortalSelect.options].some((option) => option.value === previous) ? previous : "auto";
}

function updateSandboxControls() {
  if (!sandboxControls) {
    return;
  }

  const active = isSandboxMode() && gameMode !== "menu";
  document.body.dataset.sandboxLayout = active ? "true" : "false";
  sandboxControls.hidden = !active;
  if (!active) {
    return;
  }

  if (document.activeElement !== sandboxWaveInput) {
    sandboxWaveInput.value = String(Math.max(1, (sandboxWaveTarget ?? waveNumber) || 1));
  }
  updateSandboxPortalOptions();
}

function currentSandboxWaveReference() {
  return isSandboxMode() && sandboxWaveTarget !== null
    ? sandboxWaveTarget
    : waveNumber;
}

function readyAirstrikeTowers() {
  return [];
}

function preferredAirstrikeTower() {
  return null;
}

function updateAirstrikeControls() {
  armedAbility = armedAbility === "airstrike" ? null : armedAbility;
  if (airstrikePanel) {
    airstrikePanel.hidden = true;
  }
}

function isFormFieldFocused() {
  const active = document.activeElement;
  if (!active) {
    return false;
  }
  const tag = active.tagName;
  return active.isContentEditable || tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || tag === "BUTTON";
}

function scrollBoardByArrowKey(key) {
  if (!boardFrame || gameMode === "menu" || isFormFieldFocused() || !key.startsWith("Arrow")) {
    return false;
  }
  return true;
}

function updateSmoothBoardScroll(deltaTime) {
  if (!boardFrame || gameMode === "menu" || isFormFieldFocused()) {
    return;
  }

  const maxScrollLeft = Math.max(0, boardFrame.scrollWidth - boardFrame.clientWidth);
  const maxScrollTop = Math.max(0, boardFrame.scrollHeight - boardFrame.clientHeight);
  const acceleration = 2400;
  const friction = Math.max(0, 1 - deltaTime * 8.5);
  const maxSpeed = 900;
  let inputX = 0;
  let inputY = 0;

  if (heldScrollKeys.has("ArrowLeft")) {
    inputX -= 1;
  }
  if (heldScrollKeys.has("ArrowRight")) {
    inputX += 1;
  }
  if (heldScrollKeys.has("ArrowUp")) {
    inputY -= 1;
  }
  if (heldScrollKeys.has("ArrowDown")) {
    inputY += 1;
  }

  if (inputX !== 0 || inputY !== 0) {
    tutorialProgress.scrolled = true;
    renderTutorial();
    queueNextTutorialStep();
  }

  if (maxScrollLeft <= 0 && maxScrollTop <= 0) {
    scrollVelocityX = 0;
    scrollVelocityY = 0;
    return;
  }

  scrollVelocityX = (scrollVelocityX + inputX * acceleration * deltaTime) * friction;
  scrollVelocityY = (scrollVelocityY + inputY * acceleration * deltaTime) * friction;
  scrollVelocityX = Math.max(-maxSpeed, Math.min(maxSpeed, scrollVelocityX));
  scrollVelocityY = Math.max(-maxSpeed, Math.min(maxSpeed, scrollVelocityY));

  if (Math.abs(scrollVelocityX) < 8) {
    scrollVelocityX = 0;
  }
  if (Math.abs(scrollVelocityY) < 8) {
    scrollVelocityY = 0;
  }

  if (scrollVelocityX !== 0 && maxScrollLeft > 0) {
    boardFrame.scrollLeft = Math.max(0, Math.min(maxScrollLeft, boardFrame.scrollLeft + scrollVelocityX * deltaTime));
  }
  if (scrollVelocityY !== 0 && maxScrollTop > 0) {
    boardFrame.scrollTop = Math.max(0, Math.min(maxScrollTop, boardFrame.scrollTop + scrollVelocityY * deltaTime));
  }
}

function shuffledOrder(length) {
  const order = Array.from({ length }, (_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  return order;
}

function dippyAmmoSlotLayout(slotCount) {
  if (slotCount >= 12) {
    const slots = [];
    for (let index = 0; index < 6; index += 1) {
      const outerAngle = (-Math.PI / 2) + (Math.PI * 2 * index) / 6;
      const innerAngle = outerAngle + Math.PI / 6;
      slots.push({ x: Math.cos(outerAngle) * 25, y: Math.sin(outerAngle) * 25, radius: 5.2 });
      slots.push({ x: Math.cos(innerAngle) * 12.5, y: Math.sin(innerAngle) * 12.5, radius: 4.7 });
    }
    return slots;
  }

  if (slotCount >= 6) {
    return Array.from({ length: 6 }, (_, index) => {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / 6;
      return { x: Math.cos(angle) * 15, y: Math.sin(angle) * 15, radius: 5 };
    });
  }

  if (slotCount >= 3) {
    return Array.from({ length: 3 }, (_, index) => {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / 3;
      return { x: Math.cos(angle) * 10.5, y: Math.sin(angle) * 10.5, radius: 5.2 };
    });
  }

  return [{ x: 0, y: 0, radius: 5.5 }];
}

function ensureDippyAmmoOrder(tower, slotCount) {
  if (!tower) {
    return shuffledOrder(slotCount);
  }

  if (!Array.isArray(tower.dippyAmmoOrder) || tower.dippyAmmoOrder.length !== slotCount) {
    tower.dippyAmmoOrder = shuffledOrder(slotCount);
  }

  return tower.dippyAmmoOrder;
}

function setTowerType(nextType) {
  if (!isTowerUnlocked(nextType)) {
    setMessage(towerUnlockHint(nextType), 2.4);
    return;
  }

  selectedTowerType = nextType;
  currentTool = "tower";

  for (const button of towerGrid.querySelectorAll("button[data-tower-type]")) {
    button.classList.toggle("active", button.dataset.towerType === nextType);
  }

  for (const button of toolGrid?.querySelectorAll("button[data-tool]") || []) {
    button.classList.toggle("active", button.dataset.tool === currentTool);
  }

  towerDescription.textContent = TOWER_INFO[nextType].description;
  setMessage(TOWER_INFO[nextType].description, 1.8);
  updateHud();
  draw();
}

function updateTowerButtons() {
  for (const button of towerGrid.querySelectorAll("button[data-tower-type]")) {
    const type = button.dataset.towerType;
    button.hidden = !isTowerUnlocked(type);
    button.disabled = false;
    button.textContent = `${TOWER_INFO[type].name} (${towerCost(type)})`;
  }
}

function maxTowerLevel(tower) {
  return tower.type === "crossbow" ? 4 : tower.type === "fireball" ? 5 : 5;
}

function towerFootprint(type) {
  if (type === "dippy" || type === "fireball") {
    return [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];
  }
  return [{ x: 0, y: 0 }];
}

function towerPlacementCells(type, originX, originY) {
  return towerFootprint(type).map((offset) => ({ x: originX + offset.x, y: originY + offset.y }));
}

function towerPlacementCenter(type, originX, originY) {
  const cells = towerPlacementCells(type, originX, originY);
  const sum = cells.reduce((acc, cell) => {
    const center = cellCenter(cell.x, cell.y);
    return { x: acc.x + center.x, y: acc.y + center.y };
  }, { x: 0, y: 0 });
  return { x: sum.x / cells.length, y: sum.y / cells.length };
}

function activeBossEnemy() {
  return enemies.find((enemy) => enemy.boss && enemy.hp > 0) || null;
}

function rotateActivePiece() {
  const rotatedPiece = {
    ...activePiece,
    offsets: activePiece.offsets.map((offset) => rotateOffset(offset, 1))
  };
  pieceChoices[activePieceChoiceIndex] = rotatedPiece;
  activePiece = rotatedPiece;
  updateHud();
  draw();
}

function mirrorActivePiece() {
  const mirroredPiece = {
    ...activePiece,
    offsets: activePiece.offsets.map(mirrorOffset)
  };
  pieceChoices[activePieceChoiceIndex] = mirroredPiece;
  activePiece = mirroredPiece;
  updateHud();
  draw();
}

function placedCells(originX, originY, piece = activePiece) {
  return piece.offsets.map((offset) => ({
    x: originX + offset.x,
    y: originY + offset.y
  }));
}

function findPathFrom(startPoint, extraBlocked = [], extraOpen = []) {
  const extraBlockedSet = new Set(extraBlocked.map((cell) => `${cell.x},${cell.y}`));
  const queue = [{ x: startPoint.x, y: startPoint.y }];
  const visited = new Set([`${startPoint.x},${startPoint.y}`]);
  const parents = new Map([[`${startPoint.x},${startPoint.y}`, null]]);
  let found = null;
  const goals = activeGoals();

  while (queue.length > 0) {
    const current = queue.shift();
    const currentKey = `${current.x},${current.y}`;

    if (goals.some((goal) => current.x === goal.x && current.y === goal.y)) {
      found = currentKey;
      break;
    }

    for (const direction of directions) {
      const nextX = current.x + direction.dx;
      const nextY = current.y + direction.dy;
      const nextKey = `${nextX},${nextY}`;

      if (!inBounds(nextX, nextY) || visited.has(nextKey)) {
        continue;
      }

      if (!isEndpoint(nextX, nextY)) {
        const occupied = grid[nextY][nextX].blockId !== null || obstacleAt(nextX, nextY) || extraBlockedSet.has(nextKey);
        if (occupied) {
          continue;
        }
      }

      visited.add(nextKey);
      parents.set(nextKey, currentKey);
      queue.push({ x: nextX, y: nextY });
    }
  }

  if (!found) {
    return [];
  }

  const result = [];
  let cursor = found;

  while (cursor) {
    const [x, y] = cursor.split(",").map(Number);
    result.push({ x, y });
    cursor = parents.get(cursor);
  }

  return result.reverse();
}

function computeRoutes(extraBlocked = [], extraOpen = []) {
  return activePortals().map((portal) => findPathFrom(portal, extraBlocked, extraOpen));
}

function currentFactoryOccupiedSet(extraBlocked = []) {
  const occupied = new Set();
  for (const block of blocks.values()) {
    for (const cell of block.cells) {
      occupied.add(`${cell.x},${cell.y}`);
    }
  }
  for (const cell of extraBlocked) {
    occupied.add(`${cell.x},${cell.y}`);
  }
  return occupied;
}

function cloneFactoryRouteState(extraBlocked = []) {
  return {
    holeIndex: factoryState?.holeIndex ?? 3,
    portals: (factoryState?.portals || activeMap.portals || []).map((portal) => ({ x: portal.x, y: portal.y })),
    goal: { ...(factoryState?.goal || activeMap.goal) },
    occupied: currentFactoryOccupiedSet(extraBlocked)
  };
}

function shiftFactoryRoutePoint(point, sourceQuarter, dx, dy) {
  if (!point || factoryQuarterIndexForCell(point.x, point.y) !== sourceQuarter) {
    return point;
  }
  return { x: point.x + dx, y: point.y + dy };
}

function advanceFactoryRouteState(state) {
  const cycle = factoryQuarterCycle();
  const holeCycleIndex = cycle.indexOf(state.holeIndex);
  const sourceQuarter = cycle[(holeCycleIndex - 1 + cycle.length) % cycle.length];
  const holeBounds = factoryQuarterBounds(state.holeIndex);
  const sourceBounds = factoryQuarterBounds(sourceQuarter);
  const dx = holeBounds.x - sourceBounds.x;
  const dy = holeBounds.y - sourceBounds.y;
  const nextOccupied = new Set();

  for (const key of state.occupied) {
    const [x, y] = key.split(",").map(Number);
    if (factoryQuarterIndexForCell(x, y) === sourceQuarter) {
      nextOccupied.add(`${x + dx},${y + dy}`);
    } else {
      nextOccupied.add(key);
    }
  }

  return {
    holeIndex: sourceQuarter,
    portals: state.portals.map((portal) => shiftFactoryRoutePoint(portal, sourceQuarter, dx, dy)),
    goal: shiftFactoryRoutePoint(state.goal, sourceQuarter, dx, dy),
    occupied: nextOccupied
  };
}

function factoryCellBlockedInState(state, x, y) {
  return factoryQuarterIndexForCell(x, y) === state.holeIndex || state.occupied.has(`${x},${y}`);
}

function factoryFindPathFromState(state, startPoint) {
  const queue = [{ x: startPoint.x, y: startPoint.y }];
  const visited = new Set([`${startPoint.x},${startPoint.y}`]);
  const goals = [state.goal];

  while (queue.length > 0) {
    const current = queue.shift();
    if (goals.some((goal) => goal.x === current.x && goal.y === current.y)) {
      return true;
    }

    for (const direction of directions) {
      const nextX = current.x + direction.dx;
      const nextY = current.y + direction.dy;
      const nextKey = `${nextX},${nextY}`;
      if (!inBounds(nextX, nextY) || visited.has(nextKey)) {
        continue;
      }
      const endpoint = state.portals.some((portal) => portal.x === nextX && portal.y === nextY) || (state.goal.x === nextX && state.goal.y === nextY);
      if (!endpoint && factoryCellBlockedInState(state, nextX, nextY)) {
        continue;
      }
      visited.add(nextKey);
      queue.push({ x: nextX, y: nextY });
    }
  }

  return false;
}

function factoryAllQuarterStatesOpen(extraBlocked = []) {
  let state = cloneFactoryRouteState(extraBlocked);
  for (let step = 0; step < 4; step += 1) {
    if (!state.portals.every((portal) => factoryFindPathFromState(state, portal))) {
      return false;
    }
    state = advanceFactoryRouteState(state);
  }
  return true;
}

function allRoutesOpen(nextRoutes) {
  if (isFactoryMap()) {
    return factoryAllQuarterStatesOpen();
  }
  return nextRoutes.every((path) => path.length > 0);
}

function canPlacePiece(originX, originY) {
  const cells = placedCells(originX, originY);
  if (isFactoryMap() && !cellsShareFactoryQuarter(cells)) {
    return false;
  }
  if (!cellsStayOnSingleCliffSide(cells)) {
    return false;
  }

  for (const cell of cells) {
    if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
      return false;
    }

    if (!cellInBuildZone(cell.x, cell.y)) {
      return false;
    }

    if (furnaceLavaPitAt(cell.x, cell.y)) {
      return false;
    }

    if (noBuildAt(cell.x, cell.y) && !cellsFitInsideDitch(cells)) {
      return false;
    }

    if (grid[cell.y][cell.x].blockId !== null || (obstacleAt(cell.x, cell.y) && !islandAt(cell.x, cell.y))) {
      return false;
    }
  }

  if (mapUsesIslandPlacement() && !cellsTouchAnchoredLand(cells)) {
    return false;
  }

  return isFactoryMap() ? factoryAllQuarterStatesOpen(cells) : allRoutesOpen(computeRoutes(cells));
}

function canPlaceTowerAt(x, y) {
  if (!isTowerUnlocked(selectedTowerType)) {
    return false;
  }

  const cells = towerPlacementCells(selectedTowerType, x, y);
  if (isFactoryMap() && !cellsShareFactoryQuarter(cells)) {
    return false;
  }
  if (money < towerCost(selectedTowerType)) {
    return false;
  }

  for (const cell of cells) {
    if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
      return false;
    }

    const state = grid[cell.y][cell.x];
    const hasSurface = state.blockId !== null || islandAt(cell.x, cell.y) || cellAllowsTowerSurface(cell.x, cell.y);
    if (!hasSurface || state.towerId !== null || furnaceLavaPitAt(cell.x, cell.y)) {
      return false;
    }
  }

  if (isFurnaceMap() && towerNearFurnaceHeat(cells)) {
    return false;
  }

  return true;
}

function canRelocateTowerTo(tower, x, y) {
  if (!tower || tower.upgradeLocked) {
    return false;
  }

  const cells = towerPlacementCells(tower.type, x, y);
  if (isFactoryMap() && !cellsShareFactoryQuarter(cells)) {
    return false;
  }

  for (const cell of cells) {
    if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
      return false;
    }

    const state = grid[cell.y][cell.x];
    const hasSurface = state.blockId !== null || islandAt(cell.x, cell.y) || cellAllowsTowerSurface(cell.x, cell.y);
    if (!hasSurface || furnaceLavaPitAt(cell.x, cell.y)) {
      return false;
    }
    if (state.towerId !== null && state.towerId !== tower.id) {
      return false;
    }
  }

  if (isFurnaceMap() && towerNearFurnaceHeat(cells)) {
    return false;
  }

  return true;
}

function relocateTowerTo(tower, x, y) {
  if (!canRelocateTowerTo(tower, x, y)) {
    return false;
  }

  for (const cell of tower.footprintCells || [{ x: tower.x, y: tower.y }]) {
    grid[cell.y][cell.x].towerId = null;
  }

  const footprintCells = towerPlacementCells(tower.type, x, y);
  const center = towerPlacementCenter(tower.type, x, y);
  tower.x = x;
  tower.y = y;
  tower.footprintCells = footprintCells;
  tower.centerX = center.x;
  tower.centerY = center.y;

  for (const cell of footprintCells) {
    grid[cell.y][cell.x].towerId = tower.id;
  }

  return true;
}

function clearTowerFootprint(tower) {
  for (const cell of tower.footprintCells || [{ x: tower.x, y: tower.y }]) {
    if (inBounds(cell.x, cell.y) && grid[cell.y][cell.x].towerId === tower.id) {
      grid[cell.y][cell.x].towerId = null;
    }
  }
}

function restoreTowerFootprint(tower) {
  for (const cell of tower.footprintCells || [{ x: tower.x, y: tower.y }]) {
    if (inBounds(cell.x, cell.y)) {
      grid[cell.y][cell.x].towerId = tower.id;
    }
  }
}

function blockAnchorCell(block) {
  const minX = Math.min(...block.cells.map((cell) => cell.x));
  const minY = Math.min(...block.cells.map((cell) => cell.y));
  return { x: minX, y: minY };
}

function blockCellsFromAnchor(block, x, y) {
  const anchor = blockAnchorCell(block);
  return block.cells.map((cell) => ({ x: x + (cell.x - anchor.x), y: y + (cell.y - anchor.y) }));
}

function blockHasTowerOnIt(block) {
  return block.cells.some((cell) => grid[cell.y][cell.x].towerId !== null);
}

function towersOnBlock(block) {
  if (!block) {
    return [];
  }
  const blockCellKeys = new Set(block.cells.map((cell) => `${cell.x},${cell.y}`));
  return towers.filter((tower) => (tower.footprintCells || [{ x: tower.x, y: tower.y }]).every((cell) => blockCellKeys.has(`${cell.x},${cell.y}`)));
}

function canRelocateBlockTo(block, x, y) {
  if (!block || block.locked) {
    return false;
  }

  const cells = blockCellsFromAnchor(block, x, y);
  const anchor = blockAnchorCell(block);
  const offsetX = x - anchor.x;
  const offsetY = y - anchor.y;
  const movingTowers = towersOnBlock(block);
  const movingTowerIds = new Set(movingTowers.map((tower) => tower.id));
  if (isFactoryMap() && !cellsShareFactoryQuarter(cells)) {
    return false;
  }
  if (!cellsStayOnSingleCliffSide(cells)) {
    return false;
  }

  for (const cell of cells) {
    if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
      return false;
    }
    if (!cellInBuildZone(cell.x, cell.y)) {
      return false;
    }
    if (furnaceLavaPitAt(cell.x, cell.y)) {
      return false;
    }
    if (noBuildAt(cell.x, cell.y) && !cellsFitInsideDitch(cells)) {
      return false;
    }
    if ((grid[cell.y][cell.x].blockId !== null && grid[cell.y][cell.x].blockId !== block.id) || (obstacleAt(cell.x, cell.y) && !islandAt(cell.x, cell.y))) {
      return false;
    }
    if (grid[cell.y][cell.x].towerId !== null && !movingTowerIds.has(grid[cell.y][cell.x].towerId)) {
      return false;
    }
  }

  if (mapUsesIslandPlacement() && !cellsTouchAnchoredLand(cells)) {
    return false;
  }

  for (const tower of movingTowers) {
    const footprint = (tower.footprintCells || [{ x: tower.x, y: tower.y }]).map((cell) => ({
      x: cell.x + offsetX,
      y: cell.y + offsetY
    }));
    for (const cell of footprint) {
      if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
        return false;
      }
      const state = grid[cell.y][cell.x];
      const translatedOnBlock = cells.some((entry) => entry.x === cell.x && entry.y === cell.y);
      const hasSurface = translatedOnBlock || islandAt(cell.x, cell.y) || cellAllowsTowerSurface(cell.x, cell.y);
      if (!hasSurface || furnaceLavaPitAt(cell.x, cell.y)) {
        return false;
      }
      if (state.towerId !== null && state.towerId !== tower.id && !movingTowerIds.has(state.towerId)) {
        return false;
      }
    }
    if (isFurnaceMap() && towerNearFurnaceHeat(footprint)) {
      return false;
    }
  }

  return isFactoryMap()
    ? factoryAllQuarterStatesOpen(cells)
    : allRoutesOpen(computeRoutes(cells, block.cells));
}

function relocateBlockTo(block, x, y) {
  if (!canRelocateBlockTo(block, x, y)) {
    return false;
  }

  const movingTowers = towersOnBlock(block);
  const anchor = blockAnchorCell(block);
  const offsetX = x - anchor.x;
  const offsetY = y - anchor.y;
  const cells = blockCellsFromAnchor(block, x, y);
  for (const tower of movingTowers) {
    clearTowerFootprint(tower);
  }
  for (const cell of block.cells) {
    grid[cell.y][cell.x].blockId = null;
  }
  for (const cell of cells) {
    grid[cell.y][cell.x].blockId = block.id;
  }
  block.cells = cells;
  for (const tower of movingTowers) {
    const nextX = tower.x + offsetX;
    const nextY = tower.y + offsetY;
    const footprintCells = (tower.footprintCells || [{ x: tower.x, y: tower.y }]).map((cell) => ({
      x: cell.x + offsetX,
      y: cell.y + offsetY
    }));
    const center = towerPlacementCenter(tower.type, nextX, nextY);
    tower.x = nextX;
    tower.y = nextY;
    tower.footprintCells = footprintCells;
    tower.centerX = center.x;
    tower.centerY = center.y;
    restoreTowerFootprint(tower);
  }
  routes = computeRoutes();
  return true;
}

function placePiece(originX, originY) {
  if (!canPlacePiece(originX, originY)) {
    setMessage(isFactoryMap()
      ? "That placement is invalid. Factory blocks cannot cross quarter seams or enter the open gap."
      : isFurnaceMap() && placedCells(originX, originY).some((cell) => furnaceLavaPitAt(cell.x, cell.y))
        ? "You cannot place blocks on top of the lava pits."
      : isCliffsMap() && !cellsStayOnSingleCliffSide(placedCells(originX, originY))
        ? "That block has to stay fully on one side of the cliff."
      : mapUsesIslandPlacement() && !cellsTouchAnchoredLand(placedCells(originX, originY))
        ? "Those blocks must touch an island or another placed block."
      : placedCells(originX, originY).some((cell) => noBuildAt(cell.x, cell.y)) && !cellsFitInsideDitch(placedCells(originX, originY))
        ? "That block has to fit fully inside the ditch, not hang out of it."
      : "That placement is invalid. Blocks cannot overlap or seal the route.");
    return false;
  }

  if (freeBlocks <= 0 && money < currentBlockCost) {
    setMessage("Not enough cash for a block.");
    return false;
  }

  const blockId = nextBlockId;
  const cells = placedCells(originX, originY);
  const block = {
    id: blockId,
    color: activePiece.color,
    name: activePiece.name,
    cells,
    conveyor: Boolean(activePiece.conveyor)
  };

  for (const cell of cells) {
    grid[cell.y][cell.x].blockId = blockId;
  }

  blocks.set(blockId, block);
  nextBlockId += 1;
  if (freeBlocks > 0) {
    freeBlocks -= 1;
  } else {
    money -= currentBlockCost;
    currentBlockCost += BLOCK_COST;
  }
  if (selectedMap === "outpost") {
    outpostQuestBlocksPlaced += 1;
    outpostWalllessQuestFailed = outpostQuestBlocksPlaced > 0;
  }
  refillPieceChoices(selectedMap);
      tutorialProgress.placedBlock = true;
      renderTutorial();
      queueNextTutorialStep();
  return true;
}

function towerAtCell(x, y) {
  const towerId = grid[y][x].towerId;
  return towers.find((tower) => tower.id === towerId) || null;
}

function towerAtPoint(point) {
  if (!point) {
    return null;
  }

  for (let index = towers.length - 1; index >= 0; index -= 1) {
    const tower = towers[index];
    const render = projectBoardPoint(tower.centerX, tower.centerY);
    if (Math.hypot(point.x - render.x, point.y - render.y) <= Math.max(20, 24 * render.scale)) {
      return tower;
    }

    const footprint = tower.footprintCells?.length ? tower.footprintCells : [{ x: tower.x, y: tower.y }];
    for (const cell of footprint) {
      if (pointInProjectedQuad(point, projectCellQuad(cell.x, cell.y), 6)) {
        return tower;
      }
    }
  }

  return null;
}

function towerRelocationSelectionRadius(tower) {
  const footprint = tower.footprintCells?.length ? tower.footprintCells : [{ x: tower.x, y: tower.y }];
  let maxDistance = CELL_SIZE * 0.5;
  for (const cell of footprint) {
    const center = cellCenter(cell.x, cell.y);
    const dx = center.x - tower.centerX;
    const dy = center.y - tower.centerY;
    maxDistance = Math.max(maxDistance, Math.hypot(dx, dy) + CELL_SIZE * 0.68);
  }
  return maxDistance + 6;
}

function relocateSelectableTowerAtPoint(point, commandTower) {
  if (!point) {
    return null;
  }

  const directHit = towerAtPoint(point);
  if (directHit && directHit.id !== commandTower.id && !directHit.upgradeLocked) {
    return directHit;
  }

  const ringThickness = 12;
  for (let index = towers.length - 1; index >= 0; index -= 1) {
    const tower = towers[index];
    if (tower.id === commandTower.id || tower.upgradeLocked) {
      continue;
    }
    const radius = towerRelocationSelectionRadius(tower);
    const distance = Math.hypot(point.x - tower.centerX, point.y - tower.centerY);
    if (distance >= radius - ringThickness && distance <= radius + ringThickness) {
      return tower;
    }
  }

  return null;
}

function addPresetBlock(cells, color = "#7f8d99", name = "Fort Wall", locked = true) {
  const blockId = nextBlockId;
  const block = { id: blockId, color, name, cells, locked };

  for (const cell of cells) {
    grid[cell.y][cell.x].blockId = blockId;
  }

  blocks.set(blockId, block);
  nextBlockId += 1;
  return block;
}

function addPresetTower(type, x, y, overrides = {}) {
  const center = towerPlacementCenter(type, x, y);
  const footprintCells = towerPlacementCells(type, x, y);
  const tower = {
    id: nextTowerId,
    type,
    level: 1,
    path1: 0,
    path2: 0,
    targetPriority: "first",
    orbType: "explosive",
    cannonPriorities: ["first", "strong", "last"],
    spent: overrides.spent ?? 0,
    totalDamageDealt: overrides.totalDamageDealt ?? 0,
    x,
    y,
    footprintCells,
    centerX: center.x,
    centerY: center.y,
    cooldown: 0,
    burstShotsRemaining: 0,
    burstTimer: 0,
    burstTargetId: null,
    aimAngle: -Math.PI / 2,
    fieldCooldown: 0,
    charge: 0,
    stunnedTimer: 0,
    ...overrides
  };

  towers.push(tower);
  for (const cell of footprintCells) {
    grid[cell.y][cell.x].towerId = tower.id;
  }
  nextTowerId += 1;
  return tower;
}

function seedOutpostMap() {
  const centerX = Math.floor(COLS / 2);
  const centerY = Math.floor(ROWS / 2);
  const layout = [
    "00xx000",
    "000x00x",
    "00xxxxx",
    "xxxxx00",
    "x0xxx00",
    "0xx0000",
    "0xxx000"
  ];
  const wallCells = [];

  for (let row = 0; row < layout.length; row += 1) {
    for (let col = 0; col < layout[row].length; col += 1) {
      if (layout[row][col] === "0") {
        wallCells.push({
          x: centerX - 3 + col,
          y: centerY - 3 + row
        });
      }
    }
  }

  addPresetBlock(wallCells, "#7b8895", "Fort Wall", true);
  addPresetTower("crossbow", centerX - 3, centerY - 3, { spent: 0, unique: true, level: 1 });
  addPresetTower("crossbow", centerX + 3, centerY - 3, { spent: 0, unique: true, level: 1 });
  addPresetTower("crossbow", centerX - 3, centerY + 3, { spent: 0, unique: true, level: 1 });
  addPresetTower("crossbow", centerX + 3, centerY + 3, { spent: 0, unique: true, level: 1 });
}

function seedFortificationMap() {
  const centerY = Math.floor(ROWS / 2);
  const wallCells = [];
  const leftWallX = 8;
  const rightButtressX = 18;

  for (let y = centerY - 5; y <= centerY + 5; y += 1) {
    if (y < centerY - 1 || y > centerY + 1) {
      wallCells.push({ x: leftWallX, y });
    }
  }

  for (let x = 12; x <= 18; x += 1) {
    wallCells.push({ x, y: centerY - 5 });
    wallCells.push({ x, y: centerY + 5 });
  }

  for (let y = centerY - 3; y <= centerY + 3; y += 1) {
    if (y !== centerY) {
      wallCells.push({ x: 15, y });
    }
    wallCells.push({ x: rightButtressX, y });
  }

  addPresetBlock(uniqueCells(wallCells), "#6f7c86", "Fortification Wall", true);

  addPresetTower("crossbow", leftWallX, centerY - 3, { spent: 0, unique: true, level: 1, upgradeLocked: true });
  addPresetTower("crossbow", leftWallX, centerY + 3, { spent: 0, unique: true, level: 1, upgradeLocked: true });

  const spikeCells = [
    { x: 12, y: centerY },
    { x: 16, y: centerY },
    { x: 20, y: centerY }
  ];

  for (const cell of spikeCells) {
    const center = cellCenter(cell.x, cell.y);
    traps.push({
      id: nextTrapId,
      ownerTowerId: null,
      kind: "spike",
      x: cell.x,
      y: cell.y,
      centerX: center.x,
      centerY: center.y,
      damage: 1.9,
      radius: 15,
      usesRemaining: 18,
      ttl: 999999,
      maxTtl: 999999,
      cooldown: 0,
      tickRate: 0.45
    });
    nextTrapId += 1;
  }
}

function seedDippyCastleMap() {
  const centerY = Math.floor(ROWS / 2);
  const wallCells = [];

  const addRect = (x1, y1, x2, y2) => {
    for (let y = y1; y <= y2; y += 1) {
      for (let x = x1; x <= x2; x += 1) {
        wallCells.push({ x, y });
      }
    }
  };

  addRect(15, centerY - 6, 17, centerY - 4);
  addRect(15, centerY + 4, 17, centerY + 6);

  for (let x = 11; x <= 23; x += 1) {
    if (x < 13 || x > 21) {
      wallCells.push({ x, y: centerY - 1 });
      wallCells.push({ x, y: centerY + 1 });
    }
  }

  for (let x = 13; x <= 21; x += 1) {
    if (x !== 14 && x !== 17 && x !== 20) {
      wallCells.push({ x, y: centerY - 3 });
      wallCells.push({ x, y: centerY + 3 });
    }
  }

  addPresetBlock(uniqueCells(wallCells), "#7b8895", "Castle Wall", true);

  for (const cell of activeMap.obstacles) {
    const center = cellCenter(cell.x, cell.y);
    grid[cell.y][cell.x].towerId = null;
    effects.push({
      id: nextEffectId++,
      kind: "castleSparkle",
      x: center.x,
      y: center.y,
      ttl: 0.01,
      maxTtl: 0.01,
      color: "rgba(0,0,0,0)"
    });
  }
}

function seedGraveyardMap() {
  const goal = activeMap.goal;
  const wallCells = uniqueCells([
    { x: goal.x - 2, y: goal.y - 2 },
    { x: goal.x - 2, y: goal.y - 1 },
    { x: goal.x - 2, y: goal.y },
    { x: goal.x - 2, y: goal.y + 1 },
    { x: goal.x - 1, y: goal.y + 1 },
    { x: goal.x, y: goal.y + 1 },
    { x: goal.x + 1, y: goal.y + 1 }
  ]).filter((cell) => inBounds(cell.x, cell.y) && !isEndpoint(cell.x, cell.y));
  addPresetBlock(wallCells, "#708176", "Grave Wall", true);
}

function applyMapViewport() {
  canvas.width = BASE_CANVAS_WIDTH;
  canvas.height = BASE_CANVAS_HEIGHT;
  if (boardFrame) {
    boardFrame.scrollLeft = 0;
    boardFrame.scrollTop = 0;
  }
}

function seedMapFeatures() {
  factoryState = null;
  if (selectedMap === "factory") {
    initializeFactoryState();
  } else if (selectedMap === "outpost") {
    seedOutpostMap();
  } else if (selectedMap === "fortification") {
    seedFortificationMap();
  } else if (selectedMap === "dippycastle") {
    seedDippyCastleMap();
  } else if (selectedMap === "graveyard") {
    seedGraveyardMap();
  }
}

function maybeUnlockCrossbowQuest() {
  return;
}

function maybeUnlockMapRewards() {
  return;
}

function freezeRandomMountainTower() {
  if (!isFreezingMountainsMap() || towers.length === 0 || waveNumber < 6) {
    return;
  }
  const expiredFrozenTowers = towers.filter((tower) => tower.mapFrozen && waveNumber > (tower.frozenUntilWave || 0));
  const replacementCandidates = towers.filter((tower) => !tower.mapFrozen);
  if (expiredFrozenTowers.length > 0) {
    if (replacementCandidates.length === 0) {
      for (const tower of expiredFrozenTowers) {
        tower.frozenUntilWave = waveNumber;
      }
      return;
    }
    for (const tower of expiredFrozenTowers) {
      tower.mapFrozen = false;
      tower.frozenUntilWave = 0;
      tower.stunnedTimer = 0;
      addPulse(tower.centerX, tower.centerY, 20, "rgba(216, 248, 255, 0.54)");
      if (selectedTowerId === tower.id) {
        openTowerPopup(tower);
      }
    }
  }
  const freezeChance = activeMap.freezeChance || 0.35;
  if (Math.random() > freezeChance) {
    return;
  }
  const candidates = expiredFrozenTowers.length > 0 && replacementCandidates.length > 0
    ? replacementCandidates
    : towers.filter((tower) => !tower.mapFrozen);
  if (candidates.length === 0) {
    return;
  }
  const tower = candidates[Math.floor(Math.random() * candidates.length)];
  tower.mapFrozen = true;
  tower.frozenUntilWave = waveNumber;
  tower.stunnedTimer = 0;
  addPulse(tower.centerX, tower.centerY, 26, "rgba(196, 240, 255, 0.82)");
  setMessage(`${towerDisplayName(tower)} froze solid for this wave.`, 2.4);
  if (selectedTowerId === tower.id) {
    openTowerPopup(tower);
  }
}

function supportWaveIncomeBonus() {
  return supportWaveIncomeEntries().reduce((total, entry) => total + entry.amount, 0);
}

function towerCost(type) {
  if (type === "crossbow" && crossbowUnlocked) {
    return 14 * TOWER_PRICE_MULTIPLIER;
  }
  return TOWER_BASE_COST[type] * TOWER_PRICE_MULTIPLIER;
}

function scaleEnemyCashDrop(value) {
  return Math.max(0, Math.round((value || 0) * ENEMY_CASH_DROP_MULTIPLIER));
}

function previewEnemyCashDrop(value, minimum = 1) {
  return Math.max(minimum, scaleEnemyCashDrop(value));
}

function enemyCashFromHp(hp) {
  return Math.max(0, Math.round(hp || 0));
}

function mockTower(type, overrides = {}) {
  const center = towerPlacementCenter(type, 0, 0);
  return {
    id: 0,
    type,
    level: 1,
    path1: 0,
    path2: 0,
    targetPriority: "first",
    orbType: "explosive",
    cannonPriorities: ["first", "strong", "last"],
    spent: towerCost(type),
    x: 0,
    y: 0,
    footprintCells: towerPlacementCells(type, 0, 0),
    centerX: center.x,
    centerY: center.y,
    cooldown: 0,
    burstShotsRemaining: 0,
    burstTimer: 0,
    burstTargetId: null,
    aimAngle: -Math.PI / 2,
    fieldCooldown: 0,
    charge: 0,
    ...overrides
  };
}

function upgradeCost(tower, path = null) {
  if (typeof tower === "number") {
    return (4 + tower * 3) * TOWER_PRICE_MULTIPLIER;
  }
  if (PATH_TOWER_TYPES.has(tower.type) && path !== null) {
    const nextTier = (path === 1 ? tower.path1 : tower.path2) + 1;
    return UPGRADE_COSTS[tower.type][`path${path}`][nextTier - 1] * TOWER_PRICE_MULTIPLIER;
  }
  const nextLevel = tower.level + 1;
  const table = UPGRADE_COSTS[tower.type];
  return Array.isArray(table) ? table[Math.max(0, nextLevel - 2)] * TOWER_PRICE_MULTIPLIER : (4 + tower.level * 3) * TOWER_PRICE_MULTIPLIER;
}

function sellValue(tower) {
  if (tower.type === "crossbow") {
    return 5;
  }

  return Math.max(1, Math.round((tower.spent || towerCost(tower.type)) * 0.7));
}

function isPathTower(towerOrType) {
  const type = typeof towerOrType === "string" ? towerOrType : towerOrType?.type;
  return PATH_TOWER_TYPES.has(type);
}

function trapperPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Faster spawn rate.",
      2: "Path 1 T2: Even faster spawn rate.",
      3: "Path 1 T3: Turrets. Spawns temporary wall turrets instead of path traps.",
      4: "Path 1 T4: Dual Turrets. Gains a second barrel and +15 lifespan.",
      5: "Path 1 T5: Expert Mechanic. +35 more lifespan, faster shooting, more damage."
    },
    2: {
      1: "Path 2 T1: Reinforced Traps. +15 seconds lifetime.",
      2: "Path 2 T2: Better Engineering. Traps now hold 12 spikes.",
      3: "Path 2 T3: Improved Trap. Traps now slow enemies and the setter places three at once.",
      4: "Path 2 T4: Mines. Explodes after 12 steps or when time runs out.",
      5: "Path 2 T5: Mango Mines. Explosions rain slowing mango bombs."
    }
  };

  return descriptions[path][tier];
}

function laserPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Plasma Ignition. Beam applies burn damage over time.",
      2: "Path 1 T2: Thermal Feed. Faster firing with longer burn.",
      3: "Path 1 T3: Plasma Ray. A continuous white heat stream scorches everything in its path.",
      4: "Path 1 T4: White Core. Longer burn and a wider beam.",
      5: "Path 1 T5: Star Furnace. Maximum burn duration with a relentless plasma stream."
    },
    2: {
      1: "Path 2 T1: Focused Crystals. Higher beam damage.",
      2: "Path 2 T2: Refracted Barrel. More range and burn duration.",
      3: "Path 2 T3: Prism Lance. Sharper beam output, heavier burn, and infinite pierce.",
      4: "Path 2 T4: Double Beam. Splits into twin beams, or massively boosts Photon Beam damage.",
      5: "Path 2 T5: Photon Beam. Charges and releases one huge rounded beam that incinerates the lane."
    }
  };

  return descriptions[path][tier];
}

function shotgunPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Faster Pump. Reloads faster.",
      2: "Path 1 T2: Hot Buck. More damage.",
      3: "Path 1 T3: Bullet Storm. Tightens the cycle into a fast close-range shredder.",
      4: "Path 1 T4: Shell Cascade. Heavy premium upgrade for denser bursts and stronger buckshot.",
      5: "Path 1 T5: Brass Hurricane. Extreme investment for the sharpest short-range storm on the board."
    },
    2: {
      1: "Path 2 T1: Signal Splitter. Fires 4 yellow lines.",
      2: "Path 2 T2: Harmonic Fan. Fires 5 yellow lines.",
      3: "Path 2 T3: Broadwave. Converts to a wide tuned blast for lane coverage.",
      4: "Path 2 T4: Golden Spectrum. Fires a huge 120 degree wave with 15 bullets.",
      5: "Path 2 T5: Wavelength V. Fires 36 bullets across a full 180 degree wave."
    }
  };

  return descriptions[path][tier];
}

function freezerPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Colder Shots. More damage and longer chill.",
      2: "Path 1 T2: Cracking Frost. Chill lasts longer and shots hit harder.",
      3: "Path 1 T3: Permafrost. Emits a pulsing freeze that immobilises enemies, then recharges.",
      4: "Path 1 T4: Deep Winter. Permafrost pulse lasts longer and hits a wider area.",
      5: "Path 1 T5: Ice Age. Massive immobilising bursts with stronger frost shots."
    },
    2: {
      1: "Path 2 T1: Wider Reach. More range.",
      2: "Path 2 T2: Harsher Wind. Better slow strength and duration.",
      3: "Path 2 T3: Frost Aura. Constant slowing aura around the tower.",
      4: "Path 2 T4: Whiteout. Aura grows, can detect hidden enemies, and freezer attacks can break armour.",
      5: "Path 2 T5: Absolute Zero. Extreme aura slow with stronger frost support."
    }
  };

  return descriptions[path][tier];
}

function dippyPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Bigger Eggs. Eggs hit for 8 and explode in a bigger radius.",
      2: "Path 1 T2: Boiled Eggs. Eggs still hit for 8 and now leave lots of burn.",
      3: "Path 1 T3: Animal Welfare Approved Eggs. Burst of three, each egg deals 8 and curves onto enemies after rising.",
      4: "Path 1 T4: Half-Dozen. Fires six stronger homing eggs with faster reload and a tighter approach.",
      5: "Path 1 T5: A Dozen Eggs. Two 3x2 egg pods maintain a constant homing stream at 4 eggs per second."
    },
    2: {
      1: "Path 2 T1: Fresh Eggs. More explosion radius.",
      2: "Path 2 T2: Harder Shells. Shells fly out like bullets for 10 damage each.",
      3: "Path 2 T3: Egg Pudding. Eggs deal 16 with a bigger blast and hidden detection.",
      4: "Path 2 T4: Mangoes. Eggs deal 20, hit harder against shields, and leave stronger sticky syrup.",
      5: "Path 2 T5: Mango Pudding. Eggs deal 105, heavily crush shields, and leave a dangerous buffing syrup pool."
    }
  };

  return descriptions[path][tier];
}

function crossbowPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Faster Windlass. Reloads faster with a light damage bump.",
      2: "Path 1 T2: Tempered String. Faster reload and another small bolt damage boost.",
      3: "Path 1 T3: Repeater Rig. Rebuilds into a repeater frame with modest per-shot damage.",
      4: "Path 1 T4: Split Limbs. Faster repeater cycle and one point of pierce.",
      5: "Path 1 T5: Arrow Storm. Cheap high-pressure repeater with capped per-shot damage and extra pierce."
    },
    2: {
      1: "Path 2 T1: Longer Stock. More range, heavier bolts, and a slightly slower reload.",
      2: "Path 2 T2: Bodkin Tips. More damage, one point of pierce, and another slight reload slowdown.",
      3: "Path 2 T3: Ballista Frame. Rebuilds into a slower heavy-ballista line with harder bolts.",
      4: "Path 2 T4: Siege Draw. Heavier hits again, more pierce, and a slower firing rhythm.",
      5: "Path 2 T5: Citadel Ballista. Very heavy long-range bolts with reduced cadence and strong line punch."
    }
  };

  return descriptions[path][tier];
}

function supportPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Outer Sentry. The fort mounts a sentry gun and starts firing on enemies.",
      2: "Path 1 T2: Reinforced Emplacement. Adds another sentry and hardens the fort's firepower.",
      3: "Path 1 T3: Bastion Keep. Upgrades to a heavier fortress battery with more sentry coverage.",
      4: "Path 1 T4: Courtyard Mortar. The fort adds a mortar battery for explosive support fire.",
      5: "Path 1 T5: Iron Citadel. Sentries hit much harder while missile racks join the fortress battery."
    },
    2: {
      1: "Path 2 T1: Packed Crates. Support radius increases.",
      2: "Path 2 T2: Better Logistics. Nearby towers attack faster.",
      3: "Path 2 T3: Logistics Net. Nearby towers attack even faster.",
      4: "Path 2 T4: Telescope. Nearby towers attack faster and can also see hidden enemies.",
      5: "Path 2 T5: War Supply Depot. Nearby towers gain explosive anti-armour attacks, but the depot stays focused on logistics instead of launching missiles."
    }
  };

  return descriptions[path][tier];
}

function treasuryPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Increased Trading. Gains 2 more cash per round.",
      2: "Path 1 T2: Trade Surplus. Gains 5 more cash per round.",
      3: "Path 1 T3: Merchant Syndicate. Gains 18 more cash per round.",
      4: "Path 1 T4: Sovereign Fund. Gains 80 more cash per round.",
      5: "Path 1 T5: Trade Empire. Generates 800 cash per round and nearby treasuries generate 20% more."
    },
    2: {
      1: "Path 2 T1: Tax Registry. Enemy cash drops increase slightly.",
      2: "Path 2 T2: Customs Office. Enemy cash drops increase further.",
      3: "Path 2 T3: Credit Bank. Enemy cash drops increase and this treasury stores round cash in a collectable bank up to 120.",
      4: "Path 2 T4: Bond Vault. Better enemy cash and a much larger bank.",
      5: "Path 2 T5: National Reserve. Big enemy cash gains and an enormous bank."
    }
  };

  return descriptions[path][tier];
}

function orbPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Faster Spin. Orb rotation speed increases.",
      2: "Path 1 T2: Third Orb. Adds a third orb to the ring.",
      3: "Path 1 T3: Orb Swarm. Increases the ring to five orbs.",
      4: "Path 1 T4: Ultra Orb. The ring spins faster and each orb hits harder.",
      5: "Path 1 T5: Astral Array. Expands to eight orbs, spins faster, gains extra pierce, survives more hits, and improves regeneration."
    },
    2: {
      1: "Path 2 T1: Rapid Reforge. Orb regeneration rate improves significantly.",
      2: "Path 2 T2: Dense Shell. Orbs gain more pierce.",
      3: "Path 2 T3: Smart Orbs. Unlocks Energy, Concentrated, and Explosive orb types. Energy burns and strips shields, Concentrated heavily slows, and Explosive splashes.",
      4: "Path 2 T4: Adaptive Orbs. Unlocks Adaptive orb type, which swaps modes automatically for crowds, armour, shields, and strong enemies.",
      5: "Path 2 T5: Singularity Halo. Orbs become empowered, with every hit burning, exploding, and briefly stunning while surviving more hits and regenerating faster."
    }
  };

  return descriptions[path][tier];
}

function gatePathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Sour Additive. Keeps ally damage at 1x with no extra boost yet.",
      2: "Path 1 T2: Etching Mix. Ally damage on acidified targets rises to 1.05x and enemy drops gain +1 cash.",
      3: "Path 1 T3: Corrosion Marker. Acid lasts 0.75s longer, ally damage rises to 1.18x, and enemy drops gain +2 cash.",
      4: "Path 1 T4: Exposed Weakness. Acid lasts 3.1s longer, ally damage rises to 1.52x, and enemy drops gain +4 cash.",
      5: "Path 1 T5: Meltdown Solvent. Acid lasts 6.5s longer, ally damage rises to 3.45x, and enemy drops gain +8 cash."
    },
    2: {
      1: "Path 2 T1: Faster Pump. Sprays acid more often.",
      2: "Path 2 T2: Pressure Nozzle. More spray speed, stronger direct acid hits, and +0.2s acid life.",
      3: "Path 2 T3: Atomizer. Range increases and the acid spray catches hiddens reliably.",
      4: "Path 2 T4: Twin Burst. Spray cooldown drops hard, acid ticks faster, and acid life gains +3s.",
      5: "Path 2 T5: Flood Jet. Extreme spray speed with dense acid buildup and another +3s acid life."
    }
  };

  return descriptions[path][tier];
}

function teslaPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Improved batteries.",
      2: "Path 1 T2: Higher voltage. Adds +1 chain.",
      3: "Path 1 T3: Rapid Firing. Attacks much faster.",
      4: "Path 1 T4: Slowing zaps. Adds +1 chain and adds chain slow.",
      5: "Path 1 T5: Supercharge. Stores up to 24 rapid zaps, gaining 1 every 0.5s, then releases them at 15 attacks per second."
    },
    2: {
      1: "Path 2 T1: Better Damage.",
      2: "Path 2 T2: Longer stun.",
      3: "Path 2 T3: Electric Field. Adds +2 chain and hidden detection while the field starts sparking at empty air.",
      4: "Path 2 T4: Supertaser. Adds +1 chain, fires the field more often, and stuns longer.",
      5: "Path 2 T5: Electrocannon. Adds +4 chain, fires a huge electric bolt, and the field calls down sky zaps."
    }
  };

  return descriptions[path][tier];
}

function canUpgradeTeslaPath(tower, path) {
  const ownLevel = path === 1 ? tower.path1 : tower.path2;
  const otherLevel = path === 1 ? tower.path2 : tower.path1;

  if (ownLevel >= 5) {
    return false;
  }

  if (ownLevel >= 2 && otherLevel >= 3) {
    return false;
  }

  return !(ownLevel === 2 && otherLevel >= 3);
}

function missilePathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Longer range.",
      2: "Path 1 T2: Bigger explosion.",
      3: "Path 1 T3: Blast Rack. Faster rockets, larger blast, slight damage boost.",
      4: "Path 1 T4: Rocket Burst. Shoots a burst of 2 rockets before reloading for 1.24s.",
      5: "Path 1 T5: Rocket Pods. Shoots a burst of 6 homing rockets before reloading for 1.20s."
    },
    2: {
      1: "Path 2 T1: Heavier Barrel. More direct damage.",
      2: "Path 2 T2: Dense Shot. More direct damage again.",
      3: "Path 2 T3: Heavy Dart. Fires a piercing kinetic dart instead of an explosive shell.",
      4: "Path 2 T4: Reinforced Dart. More dart damage and more pierce.",
      5: "Path 2 T5: Siege Dart. Massive piercing heavy dart with brutal direct impact."
    }
  };

  return descriptions[path][tier];
}

function canUpgradeMissilePath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function dronePathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Advanced Tracking. More range and hidden detection.",
      2: "Path 1 T2: Second Gun. Fires two shots at a time.",
      3: "Path 1 T3: Rocket Bay. Fires two bullets and a rocket.",
      4: "Path 1 T4: Increased Gunpowder. Rocket explosion grows and hits harder.",
      5: "Path 1 T5: Attack Drone. Hunts inside allied ranges and launches four delayed-homing missiles in a heavy volley."
    },
    2: {
      1: "Path 2 T1: Improved Mechanics. Faster attack speed, much faster flight speed, and tighter response control.",
      2: "Path 2 T2: Sharper Bullets. Bullets pierce twice.",
      3: "Path 2 T3: Escort Wing. Gains 2 extra support drones and the wing can relocate towers.",
      4: "Path 2 T4: Additional Weapons. Main drone gets four guns and support drones get two guns each.",
      5: "Path 2 T5: Drone Commander. Commands 7 mini drones, relocates towers twice as fast, and gains Relocate Block to move whole blocks with towers on them."
    }
  };

  return descriptions[path][tier];
}

function upgradeNameForTower(type, path, tier) {
  const description = pathDescriptionForTower({ type }, path, tier);
  const match = description.match(/^Path \d T\d: (.+)$/);
  if (!match) {
    return description;
  }

  return match[1].split(".")[0];
}

function canUpgradeDronePath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function fireballPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Draft Hood. Longer reach and hotter direct flames.",
      2: "Path 1 T2: Pressurised Fuel. Faster fire with stronger burns.",
      3: "Path 1 T3: Longflame. Replaces fireballs with a long-ranged flamethrower stream.",
      4: "Path 1 T4: Incinerator Lance. Flamethrower reaches farther, hits harder, and burns much stronger.",
      5: "Path 1 T5: Dragon Hearth. The flame stream gains dramatic range and leaves a blazing trail that keeps burning the lane."
    },
    2: {
      1: "Path 2 T1: Ember Core. Stronger blast radius and hotter explosions.",
      2: "Path 2 T2: Cinder Feed. Faster bursts and bigger ignitions.",
      3: "Path 2 T3: Blazing Ring. Each shot erupts a burning ring around the Torch.",
      4: "Path 2 T4: Sun Collar. The ring grows wider and hits much harder.",
      5: "Path 2 T5: Corona Furnace. The ring becomes a double solar halo and leaves a burning area under it."
    }
  };

  return descriptions[path][tier];
}

function canUpgradeTrapperPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeLaserPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeFreezerPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeDippyPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeSupportPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeTreasuryPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeOrbPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function canUpgradeCrossbowPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function pathDescriptionForTower(tower, path, tier) {
  if (tower.type === "crossbow") {
    return crossbowPathDescription(path, tier);
  }

  if (tower.type === "tesla") {
    return teslaPathDescription(path, tier);
  }

  if (tower.type === "missile") {
    return missilePathDescription(path, tier);
  }

  if (tower.type === "trapper") {
    return trapperPathDescription(path, tier);
  }

  if (tower.type === "laser") {
    return laserPathDescription(path, tier);
  }

  if (tower.type === "shotgun") {
    return shotgunPathDescription(path, tier);
  }

  if (tower.type === "freezer") {
    return freezerPathDescription(path, tier);
  }

  if (tower.type === "fireball") {
    return fireballPathDescription(path, tier);
  }

  if (tower.type === "dippy") {
    return dippyPathDescription(path, tier);
  }

  if (tower.type === "support") {
    return supportPathDescription(path, tier);
  }

  if (tower.type === "treasury") {
    return treasuryPathDescription(path, tier);
  }

  if (tower.type === "orb") {
    return orbPathDescription(path, tier);
  }

  if (tower.type === "gate") {
    return gatePathDescription(path, tier);
  }

  return dronePathDescription(path, tier);
}

function towerDisplayName(towerOrType) {
  const type = typeof towerOrType === "string" ? towerOrType : towerOrType?.type;
  const baseName = TOWER_INFO[type]?.name || "Tower";
  if (!towerOrType || typeof towerOrType === "string" || !isPathTower(type)) {
    return baseName;
  }
  const path1Level = towerOrType.path1 || 0;
  const path2Level = towerOrType.path2 || 0;
  const renamePath = path1Level >= path2Level
    ? (path1Level >= 3 ? 1 : (path2Level >= 3 ? 2 : 0))
    : (path2Level >= 3 ? 2 : (path1Level >= 3 ? 1 : 0));
  if (!renamePath) {
    return baseName;
  }
  const renameTier = Math.min(renamePath === 1 ? path1Level : path2Level, 5);
  const renameText = pathDescriptionForTower(towerOrType, renamePath, Math.max(3, renameTier));
  const renamed = renameText.split(": ").pop()?.split(".")[0]?.trim();
  return renamed || baseName;
}

function canUpgradeTowerPath(tower, path) {
  if (tower.type === "crossbow") {
    return canUpgradeCrossbowPath(tower, path);
  }

  if (tower.type === "tesla") {
    return canUpgradeTeslaPath(tower, path);
  }

  if (tower.type === "missile") {
    return canUpgradeMissilePath(tower, path);
  }

  if (tower.type === "trapper") {
    return canUpgradeTrapperPath(tower, path);
  }

  if (tower.type === "laser") {
    return canUpgradeLaserPath(tower, path);
  }

  if (tower.type === "shotgun") {
    return canUpgradeTeslaPath(tower, path);
  }

  if (tower.type === "freezer") {
    return canUpgradeFreezerPath(tower, path);
  }

  if (tower.type === "fireball") {
    return canUpgradeTeslaPath(tower, path);
  }

  if (tower.type === "dippy") {
    return canUpgradeDippyPath(tower, path);
  }

  if (tower.type === "support") {
    return canUpgradeSupportPath(tower, path);
  }

  if (tower.type === "treasury") {
    return canUpgradeTreasuryPath(tower, path);
  }

  if (tower.type === "orb") {
    return canUpgradeOrbPath(tower, path);
  }

  if (tower.type === "gate") {
    return canUpgradeTeslaPath(tower, path);
  }

  return canUpgradeDronePath(tower, path);
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.00$/, "");
}

function formatRange(value) {
  return formatNumber(value / CELL_SIZE);
}

function towerStatSummary(typeOrTower, overrides = {}) {
  const tower = typeof typeOrTower === "string" ? mockTower(typeOrTower, overrides) : typeOrTower;
  const type = tower.type;
  const stats = applySupportBuffsToStats(tower, towerStats(tower));
  const armoredProbe = { armored: true, armorHp: 4, hidden: false };
  const hitsArmored = canTowerDamageEnemy(tower, armoredProbe, stats);
  const safeDivide = (amount, interval) => Number.isFinite(interval) && interval > 0 ? amount / interval : 0;
  const trapSpikeDamage = (stats.damage || 0) * Math.max(stats.trapUses || 0, 0);
  const trapMineExplosionDamage = stats.mango ? 202 : stats.mine ? 58 : 0;
  const trapClusterDamage = stats.mango ? 5 * 52 : 0;
  const trapTotalDamage = trapSpikeDamage + trapMineExplosionDamage + trapClusterDamage;
  const turretShotDamage = (stats.turretDamage || 0) * Math.max(stats.turretBarrels || 1, 1);
  const turretDps = safeDivide(turretShotDamage, stats.turretCooldown || Infinity);
  const droneRocketExplosionDamage = (stats.rocketDamage || 0) * 0.82;
  const droneRocketVolley = Math.max(stats.attackDroneMissileVolley || 1, 1);
  const droneRocketDps = safeDivide(droneRocketExplosionDamage * droneRocketVolley, stats.rocketCooldown || Infinity);
  const droneBulletShotDamage = (stats.bulletDamage || 0) * Math.max(stats.bulletGuns || 1, 1);
  const droneBulletDps = safeDivide(droneBulletShotDamage, stats.cooldown || Infinity);
  const supportDroneShotDamage = (stats.supportDamage || 0) * Math.max(stats.supportGuns || 1, 1);
  const supportDroneDps = safeDivide((stats.supportDamage || 0) * Math.max(stats.supportGuns || 1, 1) * Math.max(stats.supportCount || 0, 0), stats.supportCooldown || Infinity);
  const cooldown = type === "support"
    ? Infinity
    : type === "trapper" && stats.turretMode
    ? stats.turretCooldown
    : type === "trapper" && stats.mine
    ? stats.cooldown
    : stats.cooldown;
  const damage = type === "trapper" && stats.turretMode
    ? turretShotDamage
    : type === "trapper" && stats.mine
    ? trapTotalDamage
    : type === "trapper"
    ? trapSpikeDamage
    : type === "drone"
    ? droneBulletShotDamage
    : stats.damage;
  const range = type === "trapper" && stats.turretMode
    ? stats.turretRange
    : type === "drone"
    ? stats.droneRange
    : stats.range;
  const aps = Number.isFinite(cooldown) && cooldown > 0 ? 1 / cooldown : 0;
  const dps = type === "trapper" && stats.turretMode
    ? turretDps
    : type === "trapper" && stats.mine
    ? aps * trapTotalDamage
    : type === "trapper"
    ? aps * trapSpikeDamage
    : type === "drone"
    ? estimateTowerDpsFromStats(type, tower, stats)
    : estimateTowerDpsFromStats(type, tower, stats);
  const chainLength = type === "tesla" && stats.chainCount ? stats.chainCount : null;
  const burnStat = (type === "fireball" || type === "laser") && stats.burnDamage > 0 && stats.burnDuration > 0
    ? `${formatNumber(stats.burnDamage)}/s for ${formatNumber(stats.burnDuration)}s`
    : "";
  const specialRows = [];

  const extras = [];

  if (stats.detectHidden) {
    extras.push("Detects hidden");
  }
  if (type === "missile") {
    if (stats.heavyDart) {
      extras.push(`Pierce ${stats.pierce}`);
      extras.push("Heavy dart path");
    } else if (stats.splash) {
      extras.push(`Splash ${formatNumber(stats.splash)}`);
    }
  }
  if (type === "shotgun") {
    extras.push(`Lines ${stats.pellets}`);
    extras.push(`Spread ${formatNumber(stats.spread)}`);
    if (stats.multiPriority) {
      extras.push(`Cannons ${stats.cannonCount}`);
      extras.push(`Priorities ${(tower.cannonPriorities || stats.cannonPriorities).join("/")}`);
    }
  }
  if (type === "tesla" && stats.splash) {
    extras.push(`Splash ${formatNumber(stats.splash)}`);
  }
  if (type === "tesla") {
    if ((stats.stun || 0) > 0) {
      specialRows.push({ label: "Stun time", value: `${formatNumber(stats.stun)}s`, deltaValue: stats.stun, deltaSuffix: "s" });
    }
  }
  if (type === "trapper") {
    if (stats.turretMode) {
      specialRows.push({ label: "Turret damage", value: formatNumber(turretShotDamage), deltaValue: turretShotDamage });
      specialRows.push({ label: "Turret attack speed", value: formatNumber(1 / Math.max(stats.turretCooldown || 1, 0.001)), deltaValue: 1 / Math.max(stats.turretCooldown || 1, 0.001) });
    } else {
      specialRows.push({ label: "Spike damage", value: formatNumber(stats.damage || 0), deltaValue: stats.damage || 0 });
      specialRows.push({ label: "Spike count", value: formatNumber(stats.trapUses || 0), deltaValue: stats.trapUses || 0 });
      if (stats.mine) {
        specialRows.push({ label: "Blast damage", value: formatNumber(trapMineExplosionDamage), deltaValue: trapMineExplosionDamage });
      }
      if (stats.mango) {
        specialRows.push({ label: "Cluster damage", value: formatNumber(52), deltaValue: 52 });
      }
    }
    if (!stats.turretMode) {
      extras.push(`Spike damage ${formatNumber(trapSpikeDamage)}`);
      if (stats.mine) {
        extras.push(`Mine blast ${formatNumber(trapMineExplosionDamage)}`);
      }
      if (stats.mango) {
        extras.push(`Cluster damage ${formatNumber(trapClusterDamage)}`);
      }
    }
    extras.push(stats.turretMode ? `Turret life ${formatNumber(stats.trapLifetime)}s` : `Life ${formatNumber(stats.trapLifetime)}s`);
    if (stats.turretMode && stats.turretCap > 0) {
      extras.push(`Sentry cap ${stats.turretCap}`);
      extras.push(`Turret DPS ${formatNumber(turretDps)}`);
    }
  }
  if (type === "freezer") {
    if ((stats.pulseFreeze || 0) > 0) {
      specialRows.push({ label: "Freeze amount", value: `${formatNumber(stats.pulseFreeze)}s`, deltaValue: stats.pulseFreeze, deltaSuffix: "s" });
    }
    extras.push(`Slow ${formatNumber((1 - stats.slow) * 100)}% for ${formatNumber(stats.slowDuration)}s`);
    if (stats.permafrost) {
      extras.push(`Freeze pulse ${formatNumber(stats.pulseFreeze)}s`);
      extras.push(`Pulse damage ${formatNumber(stats.pulseDamage)}`);
    }
    if (stats.aura) {
      extras.push(`Aura slow ${formatNumber((1 - stats.auraSlow) * 100)}%`);
      extras.push(`Aura damage ${formatNumber(stats.auraDamage)}/tick`);
    }
  }
  if (type === "fireball" || type === "laser") {
    if (stats.burnDamage > 0 && stats.burnDuration > 0) {
      specialRows.push({ label: "Burn damage", value: formatNumber(stats.burnDamage), deltaValue: stats.burnDamage });
      specialRows.push({ label: "Burn duration", value: `${formatNumber(stats.burnDuration)}s`, deltaValue: stats.burnDuration, deltaSuffix: "s" });
    }
  }
  if (type === "fireball") {
    if (stats.burnDamage > 0 && stats.burnDuration > 0) {
      // Burn is already included in dedicated stat rows above.
    }
    if (stats.flamethrower) {
      extras.push(`Flame arc ${formatNumber(stats.flameArc * 57.3)}deg`);
      if (stats.flameTrail) {
        extras.push("Leaves a burning trail");
      }
    } else if (stats.blazingRing) {
      extras.push(`Ring radius ${formatRange(stats.ringRadius)}`);
      extras.push(`Ring width ${formatRange(stats.ringWidth)}`);
      if ((stats.ringEchoes || 1) > 1) {
        extras.push(`Halo echoes ${stats.ringEchoes}`);
      }
    } else {
      extras.push(`Burst ${stats.burst}`);
      extras.push(`Splash ${formatNumber(stats.splash)}`);
    }
    extras.push("Needs 2x2 space");
  }
  if (type === "drone" && stats.supportCount) {
    extras.push(`Support drones ${stats.supportCount}`);
    extras.push(`Mini drone damage ${formatNumber(stats.supportDamage)}`);
    extras.push(`Mini drone guns ${stats.supportGuns}`);
    extras.push(`Mini drone range ${formatRange(stats.supportRange)}`);
    extras.push(`Mini drone DPS ${formatNumber(supportDroneDps)}`);
  }
  if (type === "drone") {
    specialRows.push({ label: "Main drone DPS", value: formatNumber(droneBulletDps + (stats.rocket ? droneRocketDps : 0)), deltaValue: droneBulletDps + (stats.rocket ? droneRocketDps : 0) });
    if ((stats.supportCount || 0) > 0) {
      specialRows.push({ label: "Mini drone DPS", value: formatNumber(supportDroneDps), deltaValue: supportDroneDps });
    }
    if (stats.rocket) {
      specialRows.push({ label: "Rocket damage", value: formatNumber(droneRocketExplosionDamage), deltaValue: droneRocketExplosionDamage });
      specialRows.push({ label: "Rocket launch speed", value: `${formatNumber(1 / Math.max(stats.rocketCooldown || 1, 0.001))}/s`, deltaValue: 1 / Math.max(stats.rocketCooldown || 1, 0.001), deltaSuffix: "/s" });
    }
    extras.push(`Drone leash ${formatRange(stats.range)}`);
    if (stats.rocket) {
      extras.push(`Rocket blast ${formatNumber(droneRocketExplosionDamage)}`);
      extras.push(`Rocket splash ${formatNumber(stats.rocketSplash)}`);
      if (droneRocketVolley > 1) {
        extras.push(`Rocket volley ${droneRocketVolley}`);
      }
    }
  }
  if (type === "crossbow" && stats.attackSpeedMultiplier > 1) {
    extras.push(`Attack speed x${formatNumber(stats.attackSpeedMultiplier)}`);
  }
  if (type === "crossbow" && stats.boltPierce > 0) {
    extras.push(`Bolt pierce ${stats.boltPierce}`);
  }
  if (type === "dippy") {
    extras.push(`Splash ${formatNumber(stats.splash)}`);
    extras.push(`Dead zone ${formatRange(stats.minRange)}`);
    if (stats.inaccuracy > 0) {
      extras.push(`Scatter ${formatRange(stats.inaccuracy)}`);
    }
    if (stats.burst > 1 && !stats.alternatingPods) {
      extras.push(`Burst ${stats.burst}, reload ${formatNumber(stats.cooldown)}s`);
    }
    if (stats.welfareHoming) {
      extras.push("Eggs curve and home after launch");
    }
    if (stats.alternatingPods) {
      extras.push(`Stream ${formatNumber(1 / Math.max(stats.cooldown, 0.001))} eggs/s`);
      extras.push(`Loads 1 pod slot every ${formatNumber(stats.podReloadStep || Math.max(stats.cooldown / 6, 0.26))}s`);
    }
    if (stats.burnDamage > 0) {
      extras.push(`Burn ${formatNumber(stats.burnDamage)}/s for ${formatNumber(stats.burnDuration)}s`);
    }
    if (stats.shells) {
      extras.push(`Shell fragments ${formatNumber(stats.shellDamage)}`);
    }
    if (stats.sticky) {
      extras.push(`Sticky syrup ${formatNumber((1 - stats.stickySlow) * 100)}%`);
    }
    if (stats.syrupDamage > 0) {
      extras.push(`Mango syrup DPS ${formatNumber(stats.syrupDamage)}`);
      extras.push(`Syrup attack speed x${formatNumber(stats.syrupTowerBuff)}`);
    }
    if (stats.shockwaves > 1) {
      extras.push(`Shockwaves ${stats.shockwaves}`);
    }
    extras.push(`Shake ${formatNumber(stats.screenShake)}`);
  }
  if (type === "support") {
    if (stats.damage > 0) {
      extras.push(`Sentries ${formatNumber(stats.sentryCount || 1)}`);
    }
    extras.push(`Aura radius ${formatRange(stats.auraRadius)}`);
    if (stats.mortar) {
      extras.push(`Mortar every ${formatNumber(stats.mortarCooldown)}s`);
    }
    if (stats.attackSpeedAura > 1) {
      extras.push(`Attack speed x${formatNumber(stats.attackSpeedAura)}`);
    }
    if (stats.munitions) {
      extras.push("Munitions aura");
      extras.push("Nearby towers deal explosive damage");
      extras.push("Nearby towers hit armoured");
    }
    if (stats.detectHiddenAura) {
      extras.push("Telescope aura");
      extras.push("Nearby towers detect hidden");
    }
    if (stats.helpMissile) {
      extras.push(`Fortress missile every ${formatNumber(stats.helpMissileCooldown)}s`);
    }
  }
  if (type === "treasury") {
    extras.push(`Wave cash ${formatNumber(stats.waveCash)}`);
    if ((stats.enemyDropMultiplier || 1) > 1) {
      extras.push(`Enemy drops x${formatNumber(stats.enemyDropMultiplier)}`);
    }
    if ((stats.enemyDropFlatBonus || 0) > 0) {
      extras.push(`Enemy drops +$${formatNumber(stats.enemyDropFlatBonus)}`);
    }
    if (stats.bankEnabled) {
      extras.push(`Bank cap $${formatNumber(stats.bankCap)}`);
    }
    if (stats.tradeEmpireAura > 1) {
      extras.push(`Nearby treasury income x${formatNumber(stats.tradeEmpireAura)}`);
      extras.push(`Trade radius ${formatRange(stats.auraRadius)}`);
    }
    if (stats.loanAmount > 0) {
      extras.push(`Loans +$${formatNumber(stats.loanAmount)} for $${formatNumber(stats.loanRepayTotal)} over ${formatNumber(stats.loanRounds)} rounds`);
    }
  }
  if (type === "orb") {
    extras.push(`Orbs ${formatNumber(stats.orbCount || 0)}`);
    if (stats.splash > 0) {
      extras.push(`Splash ${formatNumber(stats.splash)}`);
    }
    if (stats.burnDamage > 0) {
      extras.push(`Burn ${formatNumber(stats.burnDamage)}/s for ${formatNumber(stats.burnDuration)}s`);
    }
    if (stats.orbStun > 0) {
      extras.push(`Stun ${formatNumber(stats.orbStun)}s`);
    }
    if ((stats.orbSlow || 1) < 1 && (stats.orbSlowDuration || 0) > 0) {
      extras.push(`Concentrated slow ${formatNumber((1 - stats.orbSlow) * 100)}% for ${formatNumber(stats.orbSlowDuration)}s`);
    }
    extras.push(`Orb health ${formatNumber(stats.orbHitsToLive || 0)}`);
  }
  if (type === "gate") {
    specialRows.push({ label: "Acid damage", value: formatNumber(stats.acidDot || 0), deltaValue: stats.acidDot || 0 });
    specialRows.push({ label: "Acid duration", value: `${formatNumber(stats.acidDuration || 0)}s`, deltaValue: stats.acidDuration || 0, deltaSuffix: "s" });
    extras.push(`Acid DPS ${formatNumber(stats.acidDot)}`);
    extras.push(`Acid life ${formatNumber(stats.acidDuration)}s`);
    extras.push(`Ally damage x${formatNumber(stats.acidAmp)}`);
    extras.push(`Spray rate ${formatNumber(1 / stats.cooldown)}/s`);
    if ((stats.enemyDropFlatBonus || 0) > 0) {
      extras.push(`Enemy drops +$${formatNumber(stats.enemyDropFlatBonus)}`);
    }
    extras.push("Hits hidden");
    extras.push("Cannot hit armoured");
  }
  if (type === "laser" && stats.beamWidth) {
    extras.push(`Beam width ${formatNumber(stats.beamWidth)}`);
    extras.push(stats.infinitePierce ? "Infinite pierce" : "Single-target beam");
  }
  if (type === "missile" && stats.burst > 1) {
    extras.push(`Burst ${stats.burst} rockets, reload ${formatNumber(stats.cooldown)}s`);
  }
  if (type === "missile" && stats.homing) {
    extras.push("Homing rockets");
  }
  if (stats.burnDamage > 0 && stats.burnDuration > 0 && type !== "fireball" && type !== "laser") {
    extras.push(`Burn ${formatNumber(stats.burnDamage)}/s for ${formatNumber(stats.burnDuration)}s`);
  }
  if (hitsArmored) {
    extras.push("Hits armoured");
  }

  return {
    towerType: type,
    damage,
    cooldown,
    range,
    aps,
    dps,
    pierce: stats.pierce || 0,
    rotationsPerSecond: stats.rotationsPerSecond || 0,
    regenerationTime: stats.regenerationTime || 0,
    chainLength,
    burnStat,
    specialRows,
    extras,
    hitsArmored,
    bankCap: type === "treasury" ? (stats.bankCap || 0) : 0
  };
}

function roundUpgradeCash(value) {
  return Math.max(5, Math.round(value / 5) * 5);
}

function towerFormulaValue(typeOrTower, overrides = {}) {
  const summary = towerStatSummary(typeOrTower, overrides);
  const rangeTiles = Math.max(0.5, summary.range / CELL_SIZE);
  return Math.max(5, summary.dps * rangeTiles * 2);
}

function towerFormulaCost(type, overrides = {}) {
  return roundUpgradeCash(towerFormulaValue(type, overrides));
}

function upgradeUtilityPremium(type, previousTower, nextTower, previousSummary, nextSummary) {
  const previousStats = towerStats(previousTower);
  const nextStats = towerStats(nextTower);
  let premium = 0;

  premium += Math.max(0, (nextSummary.range - previousSummary.range) / CELL_SIZE) * 6;
  if (!previousStats.detectHidden && nextStats.detectHidden) {
    premium += 30;
  }
  if (!previousSummary.hitsArmored && nextSummary.hitsArmored) {
    premium += 45;
  }

  if (type === "crossbow") {
    premium += Math.max(0, (nextStats.boltPierce || 0) - (previousStats.boltPierce || 0)) * 12;
  } else if (type === "laser") {
    if (!previousStats.doubleBeam && nextStats.doubleBeam) {
      premium += 25;
    }
    if (!previousStats.photonBlast && nextStats.photonBlast) {
      premium += 50;
    }
    if (!previousStats.infinitePierce && nextStats.infinitePierce) {
      premium += 35;
    }
    premium += Math.max(0, (nextStats.beamWidth || 0) - (previousStats.beamWidth || 0)) * 0.8;
  } else if (type === "shotgun") {
    premium += Math.max(0, (nextStats.cannonCount || 1) - (previousStats.cannonCount || 1)) * 45;
    premium += Math.max(0, (nextStats.pellets || 1) - (previousStats.pellets || 1)) * 8;
  } else if (type === "freezer") {
    premium += Math.max(0, (1 - (nextStats.slow || 1)) - (1 - (previousStats.slow || 1))) * 120;
    premium += Math.max(0, (nextStats.pulseFreeze || 0) - (previousStats.pulseFreeze || 0)) * 80;
    premium += Math.max(0, (1 - (nextStats.auraSlow || 1)) - (1 - (previousStats.auraSlow || 1))) * 140;
  } else if (type === "fireball") {
    if (!previousStats.flameTrail && nextStats.flameTrail) {
      premium += 70;
    }
    premium += Math.max(0, (nextStats.ringEchoes || 1) - (previousStats.ringEchoes || 1)) * 30;
  } else if (type === "dippy") {
    premium += Math.max(0, (nextStats.shockwaves || 1) - (previousStats.shockwaves || 1)) * 30;
    premium += Math.max(0, (nextStats.shellDamage || 0) - (previousStats.shellDamage || 0)) * 2.5;
    if (!previousStats.sticky && nextStats.sticky) {
      premium += 35;
    }
    premium += Math.max(0, (nextStats.syrupTowerBuff || 1) - (previousStats.syrupTowerBuff || 1)) * 180;
  } else if (type === "support") {
    premium += Math.max(0, (nextStats.sentryCount || 0) - (previousStats.sentryCount || 0)) * 24;
    premium += Math.max(0, (nextStats.mortarDamage || 0) - (previousStats.mortarDamage || 0)) * 10;
    premium += Math.max(0, (nextStats.attackSpeedAura || 1) - (previousStats.attackSpeedAura || 1)) * 260;
    if (!previousStats.detectHiddenAura && nextStats.detectHiddenAura) {
      premium += 50;
    }
    if (!previousStats.munitions && nextStats.munitions) {
      premium += 120;
    }
    if (!previousStats.helpMissile && nextStats.helpMissile) {
      premium += 40;
    }
  } else if (type === "treasury") {
    premium += Math.max(0, (nextStats.waveCash || 0) - (previousStats.waveCash || 0)) * 18;
    premium += Math.max(0, (nextStats.enemyDropMultiplier || 1) - (previousStats.enemyDropMultiplier || 1)) * 260;
    premium += Math.max(0, (nextStats.loanAmount || 0) - (previousStats.loanAmount || 0)) * 0.35;
    if (!previousStats.tradeEmpireAura && nextStats.tradeEmpireAura) {
      premium += 240;
    }
  } else if (type === "orb") {
    premium += Math.max(0, (nextStats.orbCount || 0) - (previousStats.orbCount || 0)) * 85;
    premium += Math.max(0, (nextStats.pierce || 0) - (previousStats.pierce || 0)) * 8;
    premium += Math.max(0, (nextStats.rotationsPerSecond || 0) - (previousStats.rotationsPerSecond || 0)) * 65;
    premium += Math.max(0, (previousStats.regenerationTime || 0) - (nextStats.regenerationTime || 0)) * 24;
    if (!previousStats.smartOrbs && nextStats.smartOrbs) {
      premium += 120;
    }
    if (!previousStats.adaptiveOrbs && nextStats.adaptiveOrbs) {
      premium += 180;
    }
  } else if (type === "gate") {
    premium += Math.max(0, (nextStats.acidAmp || 1) - (previousStats.acidAmp || 1)) * 220;
    premium += Math.max(0, (nextStats.acidDuration || 0) - (previousStats.acidDuration || 0)) * 14;
  } else if (type === "tesla") {
    premium += Math.max(0, (nextStats.chainCount || 1) - (previousStats.chainCount || 1)) * 18;
    premium += Math.max(0, (nextStats.stun || 0) - (previousStats.stun || 0)) * 70;
    premium += Math.max(0, (nextStats.fieldZapCount || 1) - (previousStats.fieldZapCount || 1)) * 20;
  } else if (type === "missile") {
    premium += Math.max(0, (nextStats.burst || 1) - (previousStats.burst || 1)) * 25;
    premium += Math.max(0, (nextStats.pierce || 0) - (previousStats.pierce || 0)) * 10;
    if (!previousStats.shrapnel && nextStats.shrapnel) {
      premium += 20;
    }
    if (!previousStats.clusters && nextStats.clusters) {
      premium += 35;
    }
    if (!previousStats.rain && nextStats.rain) {
      premium += 60;
    }
  } else if (type === "trapper") {
    premium += Math.max(0, (nextStats.trapUses || 0) - (previousStats.trapUses || 0)) * 2.5;
    premium += Math.max(0, (nextStats.turretCap || 0) - (previousStats.turretCap || 0)) * 1.5;
    if (!previousStats.mine && nextStats.mine) {
      premium += 35;
    }
    if (!previousStats.mango && nextStats.mango) {
      premium += 60;
    }
  } else if (type === "drone") {
    premium += Math.max(0, (nextStats.supportCount || 0) - (previousStats.supportCount || 0)) * 30;
    premium += Math.max(0, (nextStats.attackDroneMissileVolley || 0) - (previousStats.attackDroneMissileVolley || 0)) * 22;
    if (!previousStats.attackDrone && nextStats.attackDrone) {
      premium += 65;
    }
  }

  return premium;
}

function pathUpgradeCostForTier(type, path, tier) {
  const previousOverrides = path === 1
    ? { path1: Math.max(0, tier - 1), path2: 0, level: tier }
    : { path1: 0, path2: Math.max(0, tier - 1), level: tier };
  const overrides = path === 1
    ? { path1: tier, path2: 0, level: 1 + tier }
    : { path1: 0, path2: tier, level: 1 + tier };
  const previousTower = mockTower(type, previousOverrides);
  const nextTower = mockTower(type, overrides);
  const previousSummary = towerStatSummary(previousTower);
  const nextSummary = towerStatSummary(nextTower);
  const dpsGain = Math.max(0, nextSummary.dps - previousSummary.dps);
  const baseCost = dpsGain * 20;
  const utilityPremium = upgradeUtilityPremium(type, previousTower, nextTower, previousSummary, nextSummary);
  const tierFloor = [10, 20, 35, 60, 90][tier - 1] || 10;
  return roundUpgradeCash(Math.max(tierFloor, baseCost + utilityPremium));
}

function effectiveShotgunPelletCount(stats) {
  const pellets = Math.max(stats?.pellets || 1, 1);
  const cannonCount = Math.max(stats?.cannonCount || 1, 1);
  const cappedSpreadValue = Math.min(pellets, 2.6 + Math.max(0, cannonCount - 1) * 1.15);
  return Math.max(1.6, cappedSpreadValue);
}

function towerCoreStatRows(summary, preview = null) {
  if (summary.towerType === "treasury") {
    const rows = [
      {
        label: "Cash per wave",
        value: formatNumber(summary.damage),
        previewValue: preview ? formatNumber(preview.damage) : null,
        deltaValue: summary.damage,
        previewDeltaValue: preview ? preview.damage : null
      }
    ];
    if ((summary.bankCap || 0) > 0) {
      rows.push({
        label: "Bank max",
        value: `$${formatNumber(summary.bankCap)}`,
        previewValue: preview ? `$${formatNumber(preview.bankCap || summary.bankCap)}` : null,
        deltaValue: summary.bankCap,
        previewDeltaValue: preview ? (preview.bankCap || summary.bankCap) : summary.bankCap,
        deltaSuffix: ""
      });
    }
    return rows;
  }
  if (summary.towerType === "orb") {
    const rows = [
      { label: "Damage", value: formatNumber(summary.damage) },
      { label: "Orb pierce", value: formatNumber(summary.pierce || 0), previewValue: preview ? formatNumber(preview.pierce || 0) : null, deltaValue: summary.pierce || 0, previewDeltaValue: preview ? (preview.pierce || 0) : null },
      { label: "Rotation speed", value: `${formatNumber(summary.rotationsPerSecond || 0)} rps`, previewValue: preview ? `${formatNumber(preview.rotationsPerSecond || 0)} rps` : null, deltaValue: summary.rotationsPerSecond || 0, previewDeltaValue: preview ? (preview.rotationsPerSecond || 0) : null, deltaSuffix: " rps" },
      { label: "Regeneration rate", value: `${formatNumber(summary.regenerationTime || 0)}s`, previewValue: preview ? `${formatNumber(preview.regenerationTime || 0)}s` : null, deltaValue: -(summary.regenerationTime || 0), previewDeltaValue: preview ? -(preview.regenerationTime || 0) : null, deltaSuffix: "s" }
    ];

    if (Array.isArray(summary.specialRows)) {
      for (const row of summary.specialRows) {
        const previewMatch = Array.isArray(preview?.specialRows)
          ? preview.specialRows.find((entry) => entry.label === row.label)
          : null;
        rows.push({
          label: row.label,
          value: row.value,
          previewValue: previewMatch ? previewMatch.value : null,
          deltaValue: row.deltaValue,
          previewDeltaValue: previewMatch ? previewMatch.deltaValue : null,
          deltaSuffix: row.deltaSuffix || ""
        });
      }
    }

    if (summary.burnStat) {
      rows.push({ label: "Burn", value: summary.burnStat, previewValue: preview ? (preview.burnStat || summary.burnStat) : null });
    }

    rows.push({ label: "DPS", value: formatNumber(summary.dps), previewValue: preview ? formatNumber(preview.dps) : null });
    return rows;
  }
  const apsText = Number.isFinite(summary.cooldown) && summary.cooldown > 0 ? `${formatNumber(summary.aps)}` : "Passive";
  const rows = [
    { label: "Damage", value: formatNumber(summary.damage) },
    { label: "Attacks per second", value: apsText },
    { label: "Range", value: formatRange(summary.range) }
  ];

  if (summary.chainLength !== null) {
    rows.push({ label: "Chain length", value: formatNumber(summary.chainLength), previewValue: preview ? formatNumber(preview.chainLength ?? summary.chainLength) : null });
  }

  if (Array.isArray(summary.specialRows)) {
    for (const row of summary.specialRows) {
      const previewMatch = Array.isArray(preview?.specialRows)
        ? preview.specialRows.find((entry) => entry.label === row.label)
        : null;
      rows.push({
        label: row.label,
        value: row.value,
        previewValue: previewMatch ? previewMatch.value : null,
        deltaValue: row.deltaValue,
        previewDeltaValue: previewMatch ? previewMatch.deltaValue : null,
        deltaSuffix: row.deltaSuffix || ""
      });
    }
  }

  if (summary.burnStat) {
    rows.push({ label: "Burn", value: summary.burnStat, previewValue: preview ? (preview.burnStat || summary.burnStat) : null });
  }

  if (Number.isFinite(summary.cooldown) && summary.cooldown > 0) {
    rows.push({ label: "DPS", value: formatNumber(summary.dps), previewValue: preview ? formatNumber(preview.dps) : null });
  }

  return rows;
}

function renderTowerStatsGridRows(summary) {
  return towerCoreStatRows(summary)
    .map((row) => `<div><span>${row.label}</span><strong>${row.value}</strong></div>`)
    .join("");
}

function renderTowerStatsPreviewRows(current, preview) {
  return towerCoreStatRows(current, preview)
    .map((row) => {
      if (row.label === "Damage") {
        return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta(preview.damage - current.damage)}</strong></div>`;
      }
      if (row.label === "Attacks per second") {
        const apsDelta = Number.isFinite(current.cooldown) && Number.isFinite(preview.cooldown)
          ? formatPreviewDelta((preview.aps || 0) - (current.aps || 0))
          : "";
        return `<div><span>${row.label}</span><strong>${row.value} ${apsDelta}</strong></div>`;
      }
      if (row.label === "Orb pierce") {
        return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta((preview.pierce || 0) - (current.pierce || 0))}</strong></div>`;
      }
      if (row.label === "Rotation speed") {
        return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta((preview.rotationsPerSecond || 0) - (current.rotationsPerSecond || 0), " rps")}</strong></div>`;
      }
      if (row.label === "Regeneration rate") {
        return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta((current.regenerationTime || 0) - (preview.regenerationTime || 0), "s")}</strong></div>`;
      }
      if (row.label === "Range") {
        return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta((preview.range - current.range) / CELL_SIZE, " tiles")}</strong></div>`;
      }
      if (row.label === "Chain length") {
        return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta((preview.chainLength ?? current.chainLength) - (current.chainLength ?? 0))}</strong></div>`;
      }
      if (row.label === "Burn") {
        const burnChanged = (preview.burnStat || "") !== (current.burnStat || "");
        const deltaText = burnChanged ? `<span style="color:#7dbb6f">${preview.burnStat || "None"}</span>` : "";
        return `<div><span>${row.label}</span><strong>${row.value}${deltaText ? ` -> ${deltaText}` : ""}</strong></div>`;
      }
      if (row.previewValue !== null && row.previewValue !== undefined) {
        if (typeof row.deltaValue === "number" && typeof row.previewDeltaValue === "number") {
          return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta(row.previewDeltaValue - row.deltaValue, row.deltaSuffix || "")}</strong></div>`;
        }
        if (row.previewValue !== row.value) {
          return `<div><span>${row.label}</span><strong>${row.value} -> <span style="color:#7dbb6f">${row.previewValue}</span></strong></div>`;
        }
      }
      return `<div><span>${row.label}</span><strong>${row.value} ${formatPreviewDelta((preview.dps || 0) - (current.dps || 0))}</strong></div>`;
    })
    .join("");
}

function renderTowerStatsBlock(label, summary) {
  const extras = summary.extras.length ? `<p class="tower-stat-extras">${summary.extras.join(" | ")}</p>` : "";
  return `<div class="tower-stats-block"><strong>${label}</strong><div class="tower-stats-grid">${renderTowerStatsGridRows(summary)}</div>${extras}</div>`;
}

function formatSignedChange(value, suffix = "") {
  if (Math.abs(value) < 0.0001) {
    return `+0${suffix}`;
  }
  return `${value > 0 ? "+" : ""}${formatNumber(value)}${suffix}`;
}

function summarizeTowerIncrease(previous, next) {
  const parts = [];
  if (Math.abs(next.damage - previous.damage) >= 0.0001) {
    parts.push(`Damage ${formatSignedChange(next.damage - previous.damage)}`);
  }
  if (Math.abs((next.aps || 0) - (previous.aps || 0)) >= 0.0001) {
    parts.push(`APS ${formatSignedChange((next.aps || 0) - (previous.aps || 0))}`);
  }
  if (Number.isFinite(previous.range) && Number.isFinite(next.range) && Math.abs(next.range - previous.range) >= 0.0001) {
    parts.push(`Range ${formatSignedChange((next.range - previous.range) / CELL_SIZE, " tiles")}`);
  }
  if (Math.abs((next.dps || 0) - (previous.dps || 0)) >= 0.0001) {
    parts.push(`DPS ${formatSignedChange((next.dps || 0) - (previous.dps || 0))}`);
  }
  if ((next.chainLength ?? 0) !== (previous.chainLength ?? 0)) {
    parts.push(`Chain length ${formatSignedChange((next.chainLength ?? 0) - (previous.chainLength ?? 0))}`);
  }
  if ((next.burnStat || "") !== (previous.burnStat || "")) {
    parts.push(`Burn ${next.burnStat || "None"}`);
  }
  const previousExtras = new Set(previous.extras);
  const nextExtras = new Set(next.extras);
  const addedExtras = [...nextExtras].filter((entry) => !previousExtras.has(entry));
  if (addedExtras.length > 0) {
    parts.push(`Adds ${addedExtras.join(", ")}`);
  }
  return parts.join(" | ");
}

function renderInlineTowerStats(summary) {
  const extras = summary.extras.length ? `<p class="tower-stat-extras">${summary.extras.join(" | ")}</p>` : "";
  return `<div class="tower-stats-grid">${renderTowerStatsGridRows(summary)}</div>${extras}`;
}

function formatPreviewDelta(value, suffix = "") {
  if (Math.abs(value) < 0.0001) {
    return `<span style="color:#7dbb6f">+0${suffix}</span>`;
  }
  const positive = value >= 0;
  return `<span style="color:${positive ? "#7dbb6f" : "#d9534f"}">${positive ? "+" : ""}${formatNumber(value)}${suffix}</span>`;
}

function renderTowerStatsPreview(current, preview) {
  return `<div class="tower-stats-grid tower-stats-grid-preview">${renderTowerStatsPreviewRows(current, preview)}</div>`;
}

function towerCapabilityBadges(type, overrides = {}) {
  const tower = mockTower(type, overrides);
  const stats = towerStats(tower);
  const badges = [];
  if (towerHasHiddenDetection(tower, stats)) {
    badges.push(`<span title="Hits hidden">▲</span>`);
  }
  if (canTowerDamageEnemy(tower, { armored: true, armorHp: 4, hidden: false }, stats)) {
    badges.push(`<span title="Hits armoured">◎</span>`);
  }
  return badges.length ? ` ${badges.join(" ")}` : "";
}

function armoredUnlockText(type) {
  if (type === "missile" || type === "laser") {
    return "Hits armoured from level 1.";
  }

  if (type === "drone") {
    return "Hits armoured at Path 1 T3 when rockets unlock.";
  }

  if (type === "trapper") {
    return "Hits armoured at Path 2 T4 when mines unlock.";
  }

  if (type === "freezer") {
    return "Cannot damage armoured enemies until their shell is broken.";
  }

  if (type === "fireball") {
    return "Hits armoured from level 1 with explosive flames, ring bursts, or torch shells.";
  }

  if (type === "dippy") {
    return "Hits armoured from level 1.";
  }

  if (type === "support") {
    return "Path 1 turns the fort into a defensive battery. Path 2 stays focused on logistics support.";
  }

  if (type === "treasury") {
    return "Treasury does not attack. It pays out each round and can improve cash drops or issue loans.";
  }

  if (type === "orb") {
    return "Hits armoured from level 1 and can shift into shield-breaking, burning, slowing, explosive, or adaptive orb modes.";
  }

  if (type === "gate") {
    return "Cannot damage armoured enemies, but it sprays hidden enemies from level 1 and weakens acidified targets for nearby towers.";
  }

  return "Hits armoured at Path 2 T5 with Electrocannon.";
}

function pathUpgradeSummary(type, path) {
  const entries = [];

  for (let tier = 1; tier <= 5; tier += 1) {
    const previousOverrides = path === 1
      ? { path1: Math.max(0, tier - 1), path2: 0, level: tier }
      : { path1: 0, path2: Math.max(0, tier - 1), level: tier };
    const overrides = path === 1
      ? { path1: tier, path2: 0, level: 1 + tier }
      : { path1: 0, path2: tier, level: 1 + tier };
    const previousSummary = towerStatSummary(type, previousOverrides);
    const summary = towerStatSummary(type, overrides);
    const deltaText = summarizeTowerIncrease(previousSummary, summary);
    const cost = upgradeCost(mockTower(type, previousOverrides), path);
    entries.push(`<p><strong>${upgradeNameForTower(type, path, tier)}${towerCapabilityBadges(type, overrides)}</strong>${cost ? ` (${cost})` : ""}: ${deltaText || "No stat change"}</p>`);
  }

  return entries.join("");
}

function linearUpgradeSummary(type, maxLevel) {
  const entries = [];

  for (let level = 2; level <= maxLevel; level += 1) {
    const previousSummary = towerStatSummary(type, { level: level - 1 });
    const summary = towerStatSummary(type, { level });
    const deltaText = summarizeTowerIncrease(previousSummary, summary);
    entries.push(`<p><strong>${linearUpgradeName(type, level)}${towerCapabilityBadges(type, { level })}</strong>: ${deltaText || "No stat change"}</p>`);
  }

  return entries.join("");
}

function linearUpgradeName(type, level) {
  if (type === "gate") {
    const names = {
      2: "Stronger Pump",
      3: "Reactive Tank",
      4: "Industrial Nozzle",
      5: "Refinery Core"
    };
    return names[level] || `Level ${level}`;
  }

  return `Level ${level}`;
}

function estimateTowerDpsFromStats(type, tower, stats) {
  const safeDivide = (amount, interval) => Number.isFinite(interval) && interval > 0 ? amount / interval : 0;

  if (type === "crossbow") {
    return safeDivide(stats.damage, stats.cooldown) * (1 + (stats.boltPierce || 0) * 0.12);
  }
  if (type === "tesla") {
    let dps = safeDivide(stats.damage, stats.cooldown) * Math.max(1, 1 + ((stats.chainCount || 1) - 1) * 0.45);
    dps += safeDivide((stats.fieldDamage || 0) * Math.max(stats.fieldZapCount || 1, 1), stats.fieldCooldown || Infinity);
    dps += (stats.stun || 0) * 18;
    if (stats.splash > 0) {
      dps *= 1.18;
    }
    return dps;
  }
  if (type === "missile") {
    let dps = safeDivide(stats.damage * Math.max(stats.burst || 1, 1), stats.cooldown);
    if (stats.splash > 0) {
      dps *= 1.3;
    }
    if (stats.homing > 0) {
      dps *= 1.04;
    }
    if (stats.pierce > 0) {
      dps *= 1 + Math.min(stats.pierce, 18) * 0.05;
    }
    return dps;
  }
  if (type === "trapper") {
    return stats.turretMode
      ? safeDivide(stats.turretDamage * Math.max(stats.turretBarrels || 1, 1), stats.turretCooldown) + Math.max(stats.turretCap || 0, 0) * 1.6
      : safeDivide((stats.damage || 1) + Math.max(stats.trapUses || 0, 0) * 0.4, stats.cooldown) + (stats.mine ? 18 : 0) + (stats.mango ? 45 : 0);
  }
  if (type === "laser") {
    let dps = safeDivide(stats.damage * (stats.doubleBeam ? 2 : 1), stats.cooldown) + (stats.burnDamage || 0) * 0.55;
    if (stats.infinitePierce) {
      dps *= 1.16;
    }
    return dps;
  }
  if (type === "shotgun") {
    return safeDivide(stats.damage * effectiveShotgunPelletCount(stats), stats.cooldown);
  }
  if (type === "freezer") {
    return safeDivide(stats.damage, stats.cooldown)
      + safeDivide(stats.pulseDamage || 0, stats.pulseCooldown || Infinity)
      + safeDivide(stats.auraDamage || 0, stats.auraTick || Infinity)
      + Math.max(0, 1 - (stats.slow || 1)) * 32
      + Math.max(0, stats.pulseFreeze || 0) * 22
      + Math.max(0, 1 - (stats.auraSlow || 1)) * 54;
  }
  if (type === "drone") {
    let dps = safeDivide((stats.bulletDamage || 0) * Math.max(stats.bulletGuns || 1, 1), stats.cooldown);
    if (stats.rocket) {
      dps += safeDivide(stats.rocketDamage || 0, stats.rocketCooldown || Infinity);
    }
    if ((stats.supportCount || 0) > 0) {
      dps += safeDivide((stats.supportDamage || 0) * Math.max(stats.supportGuns || 1, 1) * stats.supportCount, stats.supportCooldown || Infinity);
    }
    return dps;
  }
  if (type === "fireball") {
    const burstCount = stats.flamethrower ? 1 : Math.max(stats.burst || 1, 1);
    let dps = safeDivide(stats.damage * burstCount, stats.cooldown) + (stats.burnDamage || 0) * 0.5;
    if (stats.splash > 0) {
      dps *= 1.18;
    }
    if (stats.blazingRing) {
      dps *= 1.1 + Math.max((stats.ringEchoes || 1) - 1, 0) * 0.08;
    }
    return dps;
  }
  if (type === "dippy") {
    let dps = safeDivide(stats.damage * Math.max(stats.burst || 1, 1), stats.cooldown) + (stats.burnDamage || 0) * 0.4 + (stats.syrupDamage || 0) * 0.6;
    if (stats.splash > 0) {
      dps *= 1.2;
    }
    dps += Math.max(0, (stats.syrupTowerBuff || 1) - 1) * 220;
    dps += Math.max(0, (stats.shockwaves || 1) - 1) * 18;
    return dps;
  }
  if (type === "support") {
    return safeDivide((stats.damage || 0) * Math.max(stats.sentryCount || 1, 1), stats.cooldown || Infinity)
      + safeDivide((stats.mortarDamage || 0) * 1.2, stats.mortarCooldown || Infinity)
      + (stats.helpMissile ? safeDivide(stats.damage, stats.helpMissileCooldown || Infinity) * 1.15 : 0)
      + Math.max(0, (stats.attackSpeedAura || 1) - 1) * 180
      + (stats.detectHiddenAura ? 15 : 0)
      + (stats.munitions ? 620 : 0);
  }
  if (type === "treasury") {
    return (stats.waveCash || 0) * 0.42
      + Math.max(0, (stats.enemyDropMultiplier || 1) - 1) * 260
      + Math.max(0, (stats.tradeEmpireAura || 1) - 1) * 420
      + (stats.loanAmount || 0) * 0.08;
  }
  if (type === "orb") {
    return safeDivide((stats.damage || 0) * Math.max(stats.orbCount || 1, 1) * Math.max(stats.pierce || 1, 1) * 0.55, stats.cooldown || Infinity)
      + safeDivide((stats.splash || 0) * Math.max(stats.orbCount || 1, 1), stats.cooldown || Infinity) * 0.08
      + (stats.burnDamage || 0) * 0.55
      + (stats.orbStun || 0) * 120
      + Math.max(0, 1 - (stats.orbSlow || 1)) * Math.max(stats.orbSlowDuration || 0, 0) * 95;
  }
  if (type === "gate") {
    return safeDivide(stats.damage, stats.cooldown)
      + (stats.acidDot || 0) * 0.58
      + Math.max(0, (stats.acidAmp || 1) - 1) * 38
      + Math.max(0, stats.acidDuration || 0) * 3.2;
  }
  return safeDivide(stats.damage || 0, stats.cooldown || Infinity);
}

function lateTierTargetDps(type, tower) {
  if (!PATH_TOWER_TYPES.has(type)) {
    return 0;
  }
  const path1 = tower.path1 || 0;
  const path2 = tower.path2 || 0;
  let cost = 0;
  if (path1 >= 4) {
    cost = Math.max(cost, UPGRADE_COSTS[type].path1[3]);
  }
  if (path1 >= 5) {
    cost = Math.max(cost, UPGRADE_COSTS[type].path1[4]);
  }
  if (path2 >= 4) {
    cost = Math.max(cost, UPGRADE_COSTS[type].path2[3]);
  }
  if (path2 >= 5) {
    cost = Math.max(cost, UPGRADE_COSTS[type].path2[4]);
  }
  return cost / 20;
}

function scaleLateTierStats(type, tower, stats, scale) {
  if (type === "crossbow") {
    stats.damage *= scale;
    if ((tower.path2 || 0) >= 4) {
      stats.boltPierce = Math.round(stats.boltPierce * Math.min(1.6, 1 + (scale - 1) * 0.45));
    }
  } else if (type === "tesla") {
    stats.damage *= scale;
    stats.fieldDamage *= 1 + (scale - 1) * 0.85;
    stats.stun = Math.min((stats.cooldown || 0.2) * 0.9, stats.stun * (1 + (scale - 1) * 0.12));
    stats.fieldStun = Math.min((stats.fieldCooldown || stats.cooldown || 0.2) * 0.88, (stats.fieldStun || 0) * (1 + (scale - 1) * 0.08));
  } else if (type === "missile") {
    stats.damage *= scale;
    stats.splash *= 1 + (scale - 1) * 0.35;
    if (stats.pierce > 0) {
      stats.pierce = Math.round(stats.pierce * (1 + (scale - 1) * 0.35));
    }
  } else if (type === "trapper") {
    stats.turretDamage *= 1 + (scale - 1) * 0.95;
    stats.turretCap = Math.round(stats.turretCap * (1 + (scale - 1) * 0.35));
    stats.trapUses = Math.round(stats.trapUses * (1 + (scale - 1) * 0.3));
  } else if (type === "laser") {
    stats.damage *= scale;
    stats.burnDamage *= 1 + (scale - 1) * 0.8;
  } else if (type === "shotgun") {
    stats.damage *= scale;
    if ((tower.path1 || 0) >= 5 && !((tower.path2 || 0) >= 3)) {
      stats.pellets += 1;
    }
  } else if (type === "freezer") {
    stats.damage *= 1 + (scale - 1) * 0.55;
    stats.pulseDamage *= 1 + (scale - 1) * 0.95;
    stats.auraDamage *= 1 + (scale - 1) * 0.85;
    stats.pulseFreeze *= 1 + (scale - 1) * 0.18;
  } else if (type === "drone") {
    stats.bulletDamage *= 1 + (scale - 1) * 0.9;
    stats.rocketDamage *= 1 + (scale - 1) * 0.95;
    stats.supportDamage *= 1 + (scale - 1) * 0.8;
  } else if (type === "fireball") {
    stats.damage *= scale;
    stats.burnDamage *= 1 + (scale - 1) * 0.8;
    stats.splash *= 1 + (scale - 1) * 0.3;
  } else if (type === "dippy") {
    stats.damage *= scale;
    stats.splash *= 1 + (scale - 1) * 0.28;
    stats.shellDamage *= 1 + (scale - 1) * 0.7;
    stats.syrupDamage *= 1 + (scale - 1) * 0.7;
    if ((tower.path1 || 0) >= 5) {
      stats.burst = Math.round(stats.burst * (1 + (scale - 1) * 0.2));
    }
  } else if (type === "support") {
    stats.damage *= 1 + (scale - 1) * 0.8;
    stats.mortarDamage *= 1 + (scale - 1) * 0.75;
    stats.attackSpeedAura = 1 + ((stats.attackSpeedAura || 1) - 1) * (1 + (scale - 1) * 0.5);
  } else if (type === "treasury") {
    stats.waveCash *= 1 + (scale - 1) * 0.65;
    stats.loanAmount *= 1 + (scale - 1) * 0.35;
    stats.loanRepayTotal *= 1 + (scale - 1) * 0.35;
  } else if (type === "orb") {
    stats.damage *= 1 + (scale - 1) * 0.9;
    stats.burnDamage *= 1 + (scale - 1) * 0.8;
    stats.splash *= 1 + (scale - 1) * 0.55;
    stats.orbStun *= 1 + (scale - 1) * 0.45;
    stats.orbSlowDuration *= 1 + (scale - 1) * 0.35;
  } else if (type === "gate") {
    stats.damage *= 1 + (scale - 1) * 0.6;
    stats.acidDot *= 1 + (scale - 1) * 0.9;
    stats.acidAmp = 1 + ((stats.acidAmp || 1) - 1) * (1 + (scale - 1) * 0.5);
  }

  return stats;
}

function applyLateTierPowerScale(tower, stats) {
  const type = tower.type;
  const targetDps = lateTierTargetDps(type, tower);
  if (targetDps <= 0) {
    return stats;
  }

  const baseStats = { ...stats };
  const currentDps = estimateTowerDpsFromStats(type, tower, baseStats);
  if (Math.abs(currentDps - targetDps) <= 25) {
    return stats;
  }

  let scale = currentDps > 0 ? Math.min(6.5, Math.max(0.2, targetDps / currentDps)) : 3.5;
  let bestStats = scaleLateTierStats(type, tower, { ...baseStats }, scale);
  let bestDps = estimateTowerDpsFromStats(type, tower, bestStats);
  let bestGap = Math.abs(bestDps - targetDps);

  for (let attempt = 0; attempt < 6 && bestGap > 25; attempt += 1) {
    const correction = bestDps > 0 ? targetDps / bestDps : 1;
    scale = Math.min(7.5, Math.max(0.15, scale * correction));
    const candidateStats = scaleLateTierStats(type, tower, { ...baseStats }, scale);
    const candidateDps = estimateTowerDpsFromStats(type, tower, candidateStats);
    const candidateGap = Math.abs(candidateDps - targetDps);
    if (candidateGap < bestGap) {
      bestStats = candidateStats;
      bestDps = candidateDps;
      bestGap = candidateGap;
    } else {
      scale = (scale + (bestDps > targetDps ? scale * 0.88 : scale * 1.12)) / 2;
    }
  }

  if (type === "fireball" && (tower.path1 || 0) >= 4 && (tower.path2 || 0) === 0) {
    const previousTower = { ...tower, path1: Math.max(0, (tower.path1 || 0) - 1), path2: 0 };
    const previousStats = towerStats(previousTower);
    const previousDps = estimateTowerDpsFromStats(type, previousTower, previousStats);
    const minDamage = (previousStats.damage || 0) * 1.02;
    const minBurnDamage = (previousStats.burnDamage || 0) * 1.02;
    const minDps = previousDps * 1.02;
    bestStats.damage = Math.max(bestStats.damage || 0, minDamage);
    bestStats.burnDamage = Math.max(bestStats.burnDamage || 0, minBurnDamage);
    let adjustedDps = estimateTowerDpsFromStats(type, tower, bestStats);
    if (adjustedDps < minDps) {
      const damageGap = minDps / Math.max(adjustedDps, 0.001);
      bestStats.damage *= damageGap;
      bestStats.burnDamage *= 1 + (damageGap - 1) * 0.7;
      adjustedDps = estimateTowerDpsFromStats(type, tower, bestStats);
      if (adjustedDps < minDps) {
        const finalGap = minDps / Math.max(adjustedDps, 0.001);
        bestStats.damage *= finalGap;
      }
    }
  }

  if (PATH_TOWER_TYPES.has(type) && ((tower.path1 || 0) > 0 || (tower.path2 || 0) > 0)) {
    const predecessorTowers = [];
    if ((tower.path1 || 0) > 0) {
      predecessorTowers.push({ ...tower, path1: Math.max(0, (tower.path1 || 0) - 1) });
    }
    if ((tower.path2 || 0) > 0) {
      predecessorTowers.push({ ...tower, path2: Math.max(0, (tower.path2 || 0) - 1) });
    }
    const previousDps = predecessorTowers.reduce((best, previousTower) => {
      const previousStats = towerStats(previousTower);
      return Math.max(best, estimateTowerDpsFromStats(type, previousTower, previousStats));
    }, 0);
    let adjustedDps = estimateTowerDpsFromStats(type, tower, bestStats);
    if (adjustedDps < previousDps) {
      const dpsGap = previousDps / Math.max(adjustedDps, 0.001);
      if (type === "drone") {
        bestStats.bulletDamage *= 1 + (dpsGap - 1) * 0.85;
        bestStats.rocketDamage *= 1 + (dpsGap - 1) * 0.9;
        bestStats.supportDamage *= 1 + (dpsGap - 1) * 0.8;
      } else if (type === "laser") {
        bestStats.damage *= dpsGap;
        bestStats.burnDamage *= 1 + (dpsGap - 1) * 0.9;
      } else {
        bestStats.damage = Math.max(bestStats.damage || 0, (bestStats.damage || 0) * dpsGap);
        if ((bestStats.burnDamage || 0) > 0) {
          bestStats.burnDamage *= 1 + (dpsGap - 1) * 0.75;
        }
      }
      adjustedDps = estimateTowerDpsFromStats(type, tower, bestStats);
      if (adjustedDps < previousDps && (bestStats.damage || 0) > 0) {
        bestStats.damage *= previousDps / Math.max(adjustedDps, 0.001);
      }
    }
  }

  if (type === "laser" && ((tower.path1 || 0) > 0 || (tower.path2 || 0) > 0)) {
    const predecessorTowers = [];
    if ((tower.path1 || 0) > 0) {
      predecessorTowers.push({ ...tower, path1: Math.max(0, (tower.path1 || 0) - 1) });
    }
    if ((tower.path2 || 0) > 0) {
      predecessorTowers.push({ ...tower, path2: Math.max(0, (tower.path2 || 0) - 1) });
    }
    for (const previousTower of predecessorTowers) {
      const previousStats = towerStats(previousTower);
      bestStats.range = Math.max(bestStats.range || 0, previousStats.range || 0);
      bestStats.damage = Math.max(bestStats.damage || 0, previousStats.damage || 0);
      bestStats.burnDamage = Math.max(bestStats.burnDamage || 0, previousStats.burnDamage || 0);
      bestStats.burnDuration = Math.max(bestStats.burnDuration || 0, previousStats.burnDuration || 0);
      bestStats.beamWidth = Math.max(bestStats.beamWidth || 0, previousStats.beamWidth || 0);
      bestStats.beamTtl = Math.max(bestStats.beamTtl || 0, previousStats.beamTtl || 0);
      bestStats.cooldown = Math.min(bestStats.cooldown || Infinity, previousStats.cooldown || Infinity);
    }
  }

  return bestStats;
}

function renderTowerAlmanacDetail(type) {
  const info = TOWER_INFO[type];
  if (!isTowerUnlocked(type)) {
    almanacDetail.innerHTML = `<h3>Locked Tower</h3><p>${towerUnlockRequirement(type)}</p>`;
    return;
  }
  const baseSummary = towerStatSummary(type);
  let detail = `<h3>${info.name}</h3><p>${info.description}</p><p><strong>Armoured:</strong> ${armoredUnlockText(type)}</p>${renderTowerStatsBlock(`Upgrade 0${towerCapabilityBadges(type)}`, baseSummary)}`;

  if (isPathTower(type)) {
    detail += `<h4>Path 1</h4>${pathUpgradeSummary(type, 1)}`;
    detail += `<h4>Path 2</h4>${pathUpgradeSummary(type, 2)}`;
  } else if (maxTowerLevel({ type }) > 1) {
    detail += `<h4>Upgrade Levels</h4>${linearUpgradeSummary(type, maxTowerLevel({ type }))}`;
  }

  almanacDetail.innerHTML = detail;
}

function clearSelection(clearTool = false) {
  selectedTowerId = null;
  closeTowerPopup();

  if (clearTool) {
    currentTool = null;
    for (const button of toolGrid?.querySelectorAll("button[data-tool]") || []) {
      button.classList.remove("active");
    }
  }
}

function appendSellButton(container, tower) {
  const sellButton = document.createElement("button");
  sellButton.className = "tower-upgrade secondary";
  sellButton.dataset.sellTowerId = tower.id;
  sellButton.textContent = `Sell (${sellValue(tower)})`;
  container.appendChild(sellButton);
}

function appendDroneCommandButtons(container, tower, stats = null) {
  if (tower.type !== "drone") {
    return;
  }

  const commandStats = stats || towerStats(tower);
  const commandActive = droneCommandState && droneCommandState.towerId === tower.id;
  const commandBusy = commandActive && (droneCommandState.stage === "pickup" || droneCommandState.stage === "transport" || droneCommandState.stage === "return");
  if (commandStats.relocateBlock) {
    const moveBlockButton = document.createElement("button");
    moveBlockButton.className = "tower-upgrade secondary";
    moveBlockButton.dataset.droneCommandTowerId = tower.id;
    moveBlockButton.dataset.droneCommandMode = "block";
    moveBlockButton.textContent = commandActive && droneCommandState.mode === "block"
      ? commandBusy ? "Relocating Block..." : "Cancel Relocate Block"
      : "Relocate Block";
    moveBlockButton.disabled = commandActive && droneCommandState.mode === "block" && commandBusy;
    container.appendChild(moveBlockButton);
  }
}

function appendPriorityButton(container, tower) {
  const button = document.createElement("button");
  button.className = "tower-upgrade secondary";
  button.dataset.priorityTowerId = tower.id;
  button.textContent = `Priority: ${TARGET_LABELS[tower.targetPriority || "first"]}`;
  container.appendChild(button);
}

function appendShotgunPriorityButtons(container, tower) {
  const priorities = tower.cannonPriorities || ["first", "strong", "last"];
  for (let slot = 0; slot < 3; slot += 1) {
    const button = document.createElement("button");
    button.className = "tower-upgrade secondary";
    button.dataset.cannonPriorityTowerId = tower.id;
    button.dataset.cannonPrioritySlot = String(slot);
    button.textContent = `Cannon ${slot + 1}: ${TARGET_LABELS[priorities[slot] || "first"]}`;
    container.appendChild(button);
  }
}

function towerCanDetectHidden(tower) {
  return towerHasHiddenDetection(tower, towerStats(tower));
}

function availablePrioritiesForTower(tower) {
  if (tower.type === "orb") {
    return ORB_SPIN_PRIORITIES;
  }
  return TARGET_PRIORITIES.filter((priority) => {
    if (priority === "hidden" && !towerCanDetectHidden(tower)) {
      return false;
    }
    if (priority === "cursor" && tower.type !== "drone") {
      return false;
    }
    return true;
  });
}

function normalizeTowerPriority(tower) {
  const allowed = availablePrioritiesForTower(tower);
  if (!allowed.includes(tower.targetPriority)) {
    tower.targetPriority = tower.type === "orb" ? "clockwise" : "first";
  }
  if (tower.type === "shotgun") {
    const defaults = ["first", "strong", "last"];
    tower.cannonPriorities = Array.isArray(tower.cannonPriorities) ? tower.cannonPriorities.slice(0, 3) : defaults.slice();
    for (let slot = 0; slot < 3; slot += 1) {
      if (!allowed.includes(tower.cannonPriorities[slot])) {
        tower.cannonPriorities[slot] = defaults[slot];
      }
    }
  }
  if (tower.type === "orb") {
    const allowedOrbTypes = (tower.path2 || 0) >= 4
      ? ORB_TYPE_PRIORITIES
      : (tower.path2 || 0) >= 3
        ? ORB_TYPE_PRIORITIES.slice(0, 3)
        : ["explosive"];
    if (!allowedOrbTypes.includes(tower.orbType)) {
      tower.orbType = "explosive";
    }
  }
}

function towerCapabilityText(tower) {
  if (tower.mapFrozen) {
    return tower.frozenUntilWave && waveNumber > tower.frozenUntilWave
      ? "Frozen. Can be defrosted now."
      : "Frozen until next round.";
  }
  if (tower.type === "support") {
    return towerStats(tower).damage > 0 ? "Fortress battery online." : "Passive logistics aura.";
  }
  if (tower.type === "treasury") {
    const offer = treasuryLoanOffer(tower);
    const cap = treasuryBankCap(tower);
    if (cap > 0) {
      const loanText = (tower.loanDebtRemaining || 0) > 0
        ? ` Loan active: $${formatNumber(tower.loanDebtRemaining || 0)} left.`
        : offer
          ? ` Loan ready: +$${offer.amount} now.`
          : "";
      return `Bank: $${formatNumber(Math.round(tower.bankStored || 0))}/$${formatNumber(cap)}.${loanText}`;
    }
    if ((tower.loanDebtRemaining || 0) > 0) {
      return `Loan active: $${formatNumber(tower.loanDebtRemaining || 0)} left over ${formatNumber(tower.loanRoundsRemaining || 0)} rounds.`;
    }
    if (offer) {
      return `Loan ready: +$${offer.amount} now, repay $${offer.repayTotal}.`;
    }
    return "Passive economy tower.";
  }
  if (tower.type === "orb") {
    const stats = towerStats(tower);
    const selectedType = tower.orbType || "explosive";
    const shownType = displayedOrbType(tower, stats);
    const adaptiveText = selectedType === "adaptive" && shownType !== "adaptive"
      ? ` Adaptive mode: ${TARGET_LABELS[shownType]}.`
      : "";
    return `Spin ${TARGET_LABELS[tower.targetPriority || "clockwise"]}. Orb type: ${TARGET_LABELS[shownType]}.${adaptiveText}`;
  }
  if (tower.type === "gate") {
    return "Sprays acid that deals corrosive damage over time and weakens enemies for follow-up damage.";
  }
  return towerCanDetectHidden(tower) ? "Can attack hiddens." : "Cannot attack hiddens.";
}

function closeTowerPopup() {
  towerPopup.hidden = true;
  towerPopup.classList.remove("left", "right");
}

function compactUpgradeDescription(text, maxLength = 54) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  const sliced = text.slice(0, maxLength);
  const breakpoint = Math.max(sliced.lastIndexOf(" "), sliced.lastIndexOf("-"));
  return `${(breakpoint > 18 ? sliced.slice(0, breakpoint) : sliced).trim()}...`;
}

function upgradeNameFromDescription(text, fallback) {
  if (!text) {
    return fallback;
  }
  const colonIndex = text.indexOf(":");
  if (colonIndex === -1) {
    return text;
  }
  return text.slice(colonIndex + 1).trim().split(".")[0].trim() || fallback;
}

function upgradeDetailFromDescription(text) {
  if (!text) {
    return "";
  }
  const colonIndex = text.indexOf(":");
  const detail = colonIndex === -1 ? text : text.slice(colonIndex + 1).trim();
  return compactUpgradeDescription(detail, 68);
}

function setTowerUpgradeButtonContent(button, title, detail = "", cost = "") {
  button.innerHTML = `<span class="tower-upgrade-title">${title}</span>${detail ? `<span class="tower-upgrade-detail">${detail}</span>` : ""}${cost ? `<span class="tower-upgrade-cost">${cost}</span>` : ""}`;
}

function createTowerPopupActionGroup(className = "") {
  const group = document.createElement("div");
  group.className = className ? `tower-popup-action-group ${className}` : "tower-popup-action-group";
  return group;
}

function findDroneCommandTower() {
  return droneCommandState ? towers.find((entry) => entry.id === droneCommandState.towerId) || null : null;
}

function cancelDroneCommand(messageText = "") {
  const commandTower = findDroneCommandTower();
  if (droneCommandState?.mode === "tower" && droneCommandState.targetTowerId) {
    const targetTower = towers.find((entry) => entry.id === droneCommandState.targetTowerId);
    if (targetTower?.carried) {
      targetTower.carried = false;
      restoreTowerFootprint(targetTower);
      const center = towerPlacementCenter(targetTower.type, targetTower.x, targetTower.y);
      targetTower.centerX = center.x;
      targetTower.centerY = center.y;
    }
  }
  droneCommandState = null;
  if (commandTower && selectedTowerId === commandTower.id) {
    openTowerPopup(commandTower);
  }
  if (messageText) {
    setMessage(messageText, 1.4);
  }
}

function appendOrbControlButtons(container, tower) {
  const directionButton = document.createElement("button");
  directionButton.className = "tower-upgrade secondary";
  directionButton.dataset.orbSpinTowerId = tower.id;
  directionButton.textContent = `Spin: ${TARGET_LABELS[tower.targetPriority || "clockwise"]}`;
  container.appendChild(directionButton);

  if ((tower.path2 || 0) >= 3) {
    const typeButton = document.createElement("button");
    typeButton.className = "tower-upgrade secondary";
    typeButton.dataset.orbTypeTowerId = tower.id;
    typeButton.textContent = `Orb Type: ${TARGET_LABELS[tower.orbType || "explosive"]}`;
    container.appendChild(typeButton);
  }
}

function droneTowerCommandButtonMarkup(tower) {
  if (tower?.type !== "drone") {
    return "";
  }

  const stats = towerStats(tower);
  if (!stats.relocateTower) {
    return "";
  }

  const commandActive = droneCommandState && droneCommandState.towerId === tower.id && droneCommandState.mode === "tower";
  const label = commandActive
    ? "Cancel Relocate Tower"
    : "Relocate Tower";

  return `<button class="tower-upgrade secondary" type="button" data-drone-command-tower-id="${tower.id}" data-drone-command-mode="tower" style="display:block; width:100%; margin-top:8px; font-size:0.72em;">${label}</button>`;
}

function treasuryLoanButtonMarkup(tower) {
  const offer = treasuryLoanOffer(tower);
  if (!offer) {
    return "";
  }
  return `<button class="tower-upgrade secondary" type="button" data-treasury-loan-tower-id="${tower.id}" style="display:block; width:100%; margin-top:8px; font-size:0.72em;">Take Loan (+$${offer.amount})</button>`;
}

function appendTreasuryBankButtons(container, tower) {
  if (tower?.type !== "treasury") {
    return;
  }
  const cap = treasuryBankCap(tower);
  if (cap <= 0) {
    return;
  }
  const collectButton = document.createElement("button");
  collectButton.className = "tower-upgrade secondary";
  collectButton.dataset.treasuryCollectTowerId = tower.id;
  setTowerUpgradeButtonContent(
    collectButton,
    `Collect Bank ($${Math.round(tower.bankStored || 0)})`,
    `Stored: $${Math.round(tower.bankStored || 0)} / $${cap}`
  );
  collectButton.disabled = Math.round(tower.bankStored || 0) <= 0;
  container.appendChild(collectButton);
}

function towerPopupTitleMarkup(tower) {
  const titleStat = tower.type === "treasury" && (tower.path2 || 0) >= 3
    ? `$${formatNumber(Math.round(tower.bankStored || 0))} / $${formatNumber(treasuryBankCap(tower))}`
    : formatNumber(Math.round(tower.totalDamageDealt || 0));
  return `${towerDisplayName(tower)}<span style="display:block; font-size:0.6em; font-weight:600; color:#9fb6c8; margin-top:4px;">${titleStat}</span>${droneTowerCommandButtonMarkup(tower)}${treasuryLoanButtonMarkup(tower)}`;
}

function refreshOpenTowerPopup(towerId) {
  if (towerPopup.hidden || selectedTowerId !== towerId) {
    return;
  }
  const tower = towers.find((entry) => entry.id === towerId);
  if (!tower) {
    return;
  }
  openTowerPopup(tower);
}

function openTowerPopup(tower) {
  if (!tower) {
    closeTowerPopup();
    return;
  }

  towerPopup.hidden = false;
  towerPopup.classList.toggle("left", tower.x >= COLS / 2);
  towerPopup.classList.toggle("right", tower.x < COLS / 2);
  towerPopupTitle.innerHTML = towerPopupTitleMarkup(tower);

  normalizeTowerPriority(tower);
  const currentSummary = towerStatSummary(tower);
  const upgradeCount = towerUpgradeCount(tower);
  const defaultPopupSummary = isPathTower(tower)
    ? (() => {
      const extraPriorityText = tower.type === "shotgun" && (tower.path2 || 0) >= 4
        ? ` Cannon priorities: ${(tower.cannonPriorities || ["first", "strong", "last"]).map((priority) => TARGET_LABELS[priority] || TARGET_LABELS.first).join(" / ")}.`
        : "";
      return `<strong>Upgrade ${upgradeCount}</strong><br>${renderInlineTowerStats(currentSummary)}<br>${towerDisplayName(tower)}. Path 1: ${tower.path1}/5. Path 2: ${tower.path2}/5.${tower.type === "support" || tower.type === "treasury" ? "" : ` Priority: ${TARGET_LABELS[tower.targetPriority || "first"]}.`}${extraPriorityText} ${towerCapabilityText(tower)}`;
    })()
    : `<strong>Upgrade ${upgradeCount}</strong><br>${renderInlineTowerStats(currentSummary)}<br>${TOWER_INFO[tower.type].description} ${tower.type === "support" || tower.type === "treasury" ? "" : `Priority: ${TARGET_LABELS[tower.targetPriority || "first"]}. `}${towerCapabilityText(tower)}`;
  towerPopupSummary.innerHTML = defaultPopupSummary;

  towerPopupActions.innerHTML = "";
  const commandActions = createTowerPopupActionGroup("primary");
  const primaryActions = createTowerPopupActionGroup("primary");
  const utilityActions = createTowerPopupActionGroup("utility");
  const upgradesLocked = Boolean(tower.upgradeLocked);
  const canDefrost = tower.mapFrozen && waveNumber > (tower.frozenUntilWave || 0);
  appendDroneCommandButtons(commandActions, tower, currentSummary);

  if (isPathTower(tower)) {
    const nextPath1 = tower.path1 + 1;
    const nextPath2 = tower.path2 + 1;
    const canPath1 = canUpgradeTowerPath(tower, 1);
    const canPath2 = canUpgradeTowerPath(tower, 2);
    const path1Text = pathDescriptionForTower(tower, 1, Math.min(nextPath1, 5));
    const path2Text = pathDescriptionForTower(tower, 2, Math.min(nextPath2, 5));
    const button1 = document.createElement("button");
    button1.className = "tower-upgrade";
    button1.dataset.upgradeTowerId = tower.id;
    button1.dataset.upgradePath = "1";
    setTowerUpgradeButtonContent(
      button1,
      upgradesLocked ? "Path 1 locked" : canPath1 ? upgradeNameFromDescription(path1Text, "Path 1") : "Path 1 maxed",
      !upgradesLocked && canPath1 ? upgradeDetailFromDescription(path1Text) : "",
      !upgradesLocked && canPath1 ? `${upgradeCost(tower, 1)} cash` : ""
    );
    button1.disabled = upgradesLocked || !canPath1;
    if (!button1.disabled) {
      const previewTower = { ...tower, path1: tower.path1 + 1, level: 1 + tower.path1 + 1 + tower.path2 };
      const previewSummary = towerStatSummary(previewTower);
      button1.addEventListener("mouseenter", () => {
        towerPopupSummary.innerHTML = `<strong>Next Upgrade</strong><br>${renderTowerStatsPreview(currentSummary, previewSummary)}<br>${path1Text}`;
      });
      button1.addEventListener("mouseleave", () => {
        towerPopupSummary.innerHTML = defaultPopupSummary;
      });
    }
    primaryActions.appendChild(button1);

    const button2 = document.createElement("button");
    button2.className = "tower-upgrade";
    button2.dataset.upgradeTowerId = tower.id;
    button2.dataset.upgradePath = "2";
    setTowerUpgradeButtonContent(
      button2,
      upgradesLocked ? "Path 2 locked" : canPath2 ? upgradeNameFromDescription(path2Text, "Path 2") : "Path 2 maxed",
      !upgradesLocked && canPath2 ? upgradeDetailFromDescription(path2Text) : "",
      !upgradesLocked && canPath2 ? `${upgradeCost(tower, 2)} cash` : ""
    );
    button2.disabled = upgradesLocked || !canPath2;
    if (!button2.disabled) {
      const previewTower = { ...tower, path2: tower.path2 + 1, level: 1 + tower.path1 + tower.path2 + 1 };
      const previewSummary = towerStatSummary(previewTower);
      button2.addEventListener("mouseenter", () => {
        towerPopupSummary.innerHTML = `<strong>Next Upgrade</strong><br>${renderTowerStatsPreview(currentSummary, previewSummary)}<br>${path2Text}`;
      });
      button2.addEventListener("mouseleave", () => {
        towerPopupSummary.innerHTML = defaultPopupSummary;
      });
    }
    primaryActions.appendChild(button2);
    if (tower.type === "orb") {
      appendOrbControlButtons(utilityActions, tower);
    } else if (tower.type !== "support" && tower.type !== "treasury") {
      if (tower.type === "shotgun" && (tower.path2 || 0) >= 4) {
        appendShotgunPriorityButtons(utilityActions, tower);
      } else {
        appendPriorityButton(utilityActions, tower);
      }
    }
    if (canDefrost) {
      const defrostButton = document.createElement("button");
      defrostButton.className = "tower-upgrade secondary";
      defrostButton.dataset.defrostTowerId = tower.id;
      setTowerUpgradeButtonContent(defrostButton, "Defrost");
      utilityActions.appendChild(defrostButton);
    }
    appendTreasuryBankButtons(utilityActions, tower);
    appendSellButton(utilityActions, tower);
    if (commandActions.childElementCount > 0) {
      towerPopupActions.appendChild(commandActions);
    }
    towerPopupActions.appendChild(primaryActions);
    towerPopupActions.appendChild(utilityActions);
    return;
  }

  const upgradeButton = document.createElement("button");
  upgradeButton.className = "tower-upgrade";
  upgradeButton.dataset.upgradeTowerId = tower.id;
  const nextLinearName = linearUpgradeName(tower.type, tower.level + 1);
  setTowerUpgradeButtonContent(
    upgradeButton,
    upgradesLocked ? "Upgrade locked" : tower.level >= maxTowerLevel(tower) ? "Max upgraded" : nextLinearName,
    "",
    !upgradesLocked && tower.level < maxTowerLevel(tower) ? `${upgradeCost(tower)} cash` : ""
  );
  upgradeButton.disabled = upgradesLocked || tower.level >= maxTowerLevel(tower);
  if (!upgradeButton.disabled) {
    const previewTower = { ...tower, level: tower.level + 1 };
    const previewSummary = towerStatSummary(previewTower);
    const nextLinearDetail = compactUpgradeDescription(summarizeTowerIncrease(currentSummary, previewSummary) || "Improves this tower.", 68);
    setTowerUpgradeButtonContent(
      upgradeButton,
      nextLinearName,
      nextLinearDetail,
      `${upgradeCost(tower)} cash`
    );
    upgradeButton.addEventListener("mouseenter", () => {
      towerPopupSummary.innerHTML = `<strong>Next Upgrade</strong><br>${renderTowerStatsPreview(currentSummary, previewSummary)}<br>${nextLinearName}`;
    });
    upgradeButton.addEventListener("mouseleave", () => {
      towerPopupSummary.innerHTML = defaultPopupSummary;
    });
  } else {
    setTowerUpgradeButtonContent(
      upgradeButton,
      upgradesLocked ? "Upgrade locked" : "Max upgraded",
      "",
      ""
    );
  }
  primaryActions.appendChild(upgradeButton);
  if (tower.type === "orb") {
    appendOrbControlButtons(utilityActions, tower);
  } else if (tower.type !== "support") {
    appendPriorityButton(utilityActions, tower);
  }
  if (canDefrost) {
    const defrostButton = document.createElement("button");
    defrostButton.className = "tower-upgrade secondary";
    defrostButton.dataset.defrostTowerId = tower.id;
    setTowerUpgradeButtonContent(defrostButton, "Defrost");
    utilityActions.appendChild(defrostButton);
  }
  appendTreasuryBankButtons(utilityActions, tower);
  appendSellButton(utilityActions, tower);
  if (commandActions.childElementCount > 0) {
    towerPopupActions.appendChild(commandActions);
  }
  towerPopupActions.appendChild(primaryActions);
  towerPopupActions.appendChild(utilityActions);
}

function defrostTower(tower) {
  if (!tower?.mapFrozen) {
    return false;
  }
  if (waveNumber <= (tower.frozenUntilWave || 0)) {
    setMessage("That tower cannot be defrosted until next round.", 1.4);
    return false;
  }
  tower.mapFrozen = false;
  tower.frozenUntilWave = 0;
  tower.stunnedTimer = 0;
  setMessage(`${towerDisplayName(tower)} defrosted.`, 1.4);
  openTowerPopup(tower);
  return true;
}

function placeTower(x, y) {
  if (!canPlaceTowerAt(x, y)) {
    setMessage(
      isFurnaceMap() && towerNearFurnaceHeat(towerPlacementCells(selectedTowerType, x, y))
        ? "That spot is too hot. Towers cannot be placed near the furnace core."
        : isFurnaceMap() && towerPlacementCells(selectedTowerType, x, y).some((cell) => furnaceLavaPitAt(cell.x, cell.y))
        ? "You cannot place towers on top of the lava pits."
        : selectedTowerType === "dippy" || selectedTowerType === "fireball"
        ? `${TOWER_INFO[selectedTowerType].name} needs a clear 2x2 block space.`
        : selectedTowerType === "gate"
          ? "Acid needs a free block tile."
          : "That block tile cannot take a tower."
    );
    return false;
  }

  const cost = towerCost(selectedTowerType);

  if (money < cost) {
    setMessage("Not enough money for that tower.");
    return false;
  }

  const center = towerPlacementCenter(selectedTowerType, x, y);
  const footprintCells = towerPlacementCells(selectedTowerType, x, y);
  const tower = {
    id: nextTowerId,
    type: selectedTowerType,
    level: 1,
    path1: 0,
    path2: 0,
    targetPriority: "first",
    cannonPriorities: ["first", "strong", "last"],
    spent: cost,
    x,
    y,
    footprintCells,
    centerX: center.x,
    centerY: center.y,
    cooldown: 0,
    burstShotsRemaining: 0,
    burstTimer: 0,
    burstTargetId: null,
    aimAngle: -Math.PI / 2,
    fieldCooldown: 0,
    charge: 0,
    stunnedTimer: 0,
    rotation: 0
  };

  towers.push(tower);
  if (selectedTowerType === "drone") {
    drones.push({
      id: `${tower.id}:0`,
      towerId: tower.id,
      support: false,
      slot: 0,
      angle: 0,
      orbitRadius: CELL_SIZE * 0.9,
      x: center.x,
      y: center.y,
      cooldown: 0,
      rocketCooldown: 0,
      range: CELL_SIZE * 1.15,
      bodyRadius: 6
    });
  }
  for (const cell of footprintCells) {
    grid[cell.y][cell.x].towerId = tower.id;
  }
  nextTowerId += 1;
  money -= cost;
  selectedTowerId = tower.id;
      tutorialProgress.placedTower = true;
      renderTutorial();
      queueNextTutorialStep();
  return true;
}

function upgradeTower(x, y, path = null) {
  const tower = x && typeof x === "object" ? x : towerAtCell(x, y);

  if (!tower) {
    setMessage("Select an existing tower to upgrade.");
    return false;
  }

  if (tower.upgradeLocked) {
    setMessage("Those fort crossbows are fixed defenses and cannot be upgraded.");
    return false;
  }

  if (isPathTower(tower) && path === null) {
    selectedTowerId = tower.id;
    openTowerPopup(tower);
    setMessage("Select an upgrade path in the tower popup.", 1.4);
    return false;
  }

  if (isPathTower(tower) && path !== null) {
    const canUpgradePath = canUpgradeTowerPath(tower, path);
    if (!canUpgradePath) {
      setMessage("That upgrade path is maxed.");
      return false;
    }
  } else if (tower.level >= 5) {
    setMessage("That tower is already at max upgrade.");
    return false;
  }

  const cost = upgradeCost(tower, path);

  if (money < cost) {
    setMessage("Not enough money to upgrade that tower.");
    return false;
  }

  if (isPathTower(tower) && path !== null) {
    if (path === 1) {
      tower.path1 += 1;
    } else {
      tower.path2 += 1;
    }
    tower.level = 1 + tower.path1 + tower.path2;
  } else {
    tower.level += 1;
  }
  money -= cost;
  tower.spent = (tower.spent || towerCost(tower.type)) + cost;
  selectedTowerId = tower.id;
  tutorialProgress.upgradedTower = true;
  renderTutorial();
  setMessage(`${towerDisplayName(tower)} upgraded to Upgrade ${towerUpgradeCount(tower)}.`, 1.2);
  openTowerPopup(tower);
  return true;
}

function removeTowerById(towerId) {
  const tower = towers.find((entry) => entry.id === towerId);

  if (!tower) {
    return null;
  }

  for (const cell of tower.footprintCells || [{ x: tower.x, y: tower.y }]) {
    grid[cell.y][cell.x].towerId = null;
  }
  towers = towers.filter((entry) => entry.id !== towerId);
  drones = drones.filter((drone) => drone.towerId !== towerId);
  traps = traps.filter((entry) => entry.ownerTowerId !== towerId);

  if (selectedTowerId === towerId) {
    clearSelection(false);
  }

  return tower;
}

function sellTower(x, y) {
  const tower = x && typeof x === "object" ? x : towerAtCell(x, y);

  if (!tower) {
    setMessage("Select a tower to sell.");
    return false;
  }

  money += sellValue(tower);
  removeTowerById(tower.id);
  setMessage(`${towerDisplayName(tower)} sold.`, 1.2);
  return true;
}

function removeBlock(blockId) {
  const block = blocks.get(blockId);

  if (!block) {
    return false;
  }

  if (block.locked) {
    setMessage("That outpost wall is fixed in place.");
    return false;
  }

  for (const cell of block.cells) {
    const cellState = grid[cell.y][cell.x];

    if (cellState.towerId !== null) {
      removeTowerById(cellState.towerId);
    }

    cellState.blockId = null;
    cellState.towerId = null;
  }

  blocks.delete(blockId);
  return true;
}

function eraseAt(x, y) {
  const cell = grid[y][x];

  if (cell.blockId !== null) {
    return removeBlock(cell.blockId);
  }

  return false;
}

function applyTool(x, y, point = null) {
  if (gameMode !== "playing" || !inBounds(x, y) || isEndpoint(x, y)) {
    return;
  }

  const clickedTower = towerAtPoint(point) || towerAtCell(x, y);
  selectedTowerId = clickedTower ? clickedTower.id : null;

  if (clickedTower) {
    towerDescription.textContent = `${towerDisplayName(clickedTower)}: ${TOWER_INFO[clickedTower.type].description} ${towerCapabilityText(clickedTower)}`;
    openTowerPopup(clickedTower);
  } else if (grid[y][x].blockId !== null) {
    const block = blocks.get(grid[y][x].blockId);
    towerDescription.textContent = `${block.name} polyomino. Solid wall tile for tower placement.`;
    closeTowerPopup();
  } else {
    closeTowerPopup();
  }

  let changed = false;

  if (currentTool === "wall") {
    changed = placePiece(x, y);
  } else if (currentTool === "tower") {
    changed = placeTower(x, y);
  } else if (currentTool === "upgrade") {
    changed = upgradeTower(clickedTower || x, clickedTower ? null : y);
  }

  if (!changed && currentTool === "tower") {
    invalidPlacementTimer = 0.32;
  }

  if (changed) {
    routes = computeRoutes();
    updateHud();
    draw();
  } else {
    updateHud();
    draw();
  }
}

function routePoints(pathIndex = 0) {
  return (routes[pathIndex] || []).map((point) => cellCenter(point.x, point.y));
}

function enemyRoutePoints(enemy) {
  return enemy.route ? enemy.route.map((point) => cellCenter(point.x, point.y)) : routePoints(enemy.portalIndex);
}

function enemyRemainingPathTiles(enemy) {
  const points = enemyRoutePoints(enemy);
  if (points.length <= 1) {
    return 0;
  }
  return Math.max(0, points.length - 1 - (enemy.progress || 0));
}

function routeCells(pathIndex = null) {
  if (pathIndex !== null) {
    return (routes[pathIndex] || []).slice(1, -1);
  }

  const seen = new Set();
  const cells = [];

  for (const path of routes) {
    for (const cell of path.slice(1, -1)) {
      const key = `${cell.x},${cell.y}`;
      if (!seen.has(key)) {
        seen.add(key);
        cells.push(cell);
      }
    }
  }

  return cells;
}

function createEnemy(enemyType, options = {}) {
  const requestedTier = Math.max(1, Math.min(maxTierForEnemy(enemyType.key), options.tier || 1));
  const resolvedEnemyType = enemyType.key.startsWith("waffle") ? waffleTypeForTier(requestedTier) : enemyType;
  const portalIndex = options.portalIndex ?? nextSpawnPortalIndex();
  const startCell = options.startCell || activePortals()[portalIndex];
  const route = options.route || (options.startCell ? findPathFrom(startCell) : null);

  if (route && route.length === 0) {
    return null;
  }

  const center = cellCenter(startCell.x, startCell.y);
  const tier = resolvedEnemyType.key.startsWith("waffle")
    ? requestedTier
    : (enemyUsesTiers(resolvedEnemyType.key) ? requestedTier : 1);
  const diamondTier = resolvedEnemyType.key === "diamond" ? diamondTierConfig(tier) : null;
  const breacherShielded = resolvedEnemyType.key === "breacher";
  const shielded = Boolean(options.shielded) || resolvedEnemyType.key === "shield" || breacherShielded;
  const shieldTier = shielded && !breacherShielded ? shieldTierConfig(tier) : null;
  const genericTier = !diamondTier && !shieldTier && enemyUsesTiers(resolvedEnemyType.key) && resolvedEnemyType.key !== "splitter" ? genericTierConfig(tier) : null;
  const tierConfig = diamondTier || shieldTier || genericTier;
  const waveScale = Math.max(0, waveNumber - 100);
  const hpWaveBase = 5 + waveScale;
  const speedWaveBase = 30 + waveScale * 2;
  const hp = options.hp ?? (resolvedEnemyType.key === "specialPentagon"
    ? 600
    : resolvedEnemyType.key === "kernel"
    ? 2
    : resolvedEnemyType.key === "assassin"
    ? Math.round(80 * (genericTierConfig(tier)?.hpMultiplier || 1))
    : resolvedEnemyType.key === "idaen"
    ? 156
    : resolvedEnemyType.key === "octagon"
    ? 110
    : resolvedEnemyType.key === "splitter"
    ? splitterHpForTier(tier, DIFFICULTIES[selectedDifficulty].hp)
    : resolvedEnemyType.key === "sentinel"
      ? Math.round(hpWaveBase * resolvedEnemyType.hpMultiplier * DIFFICULTIES[selectedDifficulty].hp * (tier >= 3 ? 7.8 : tier >= 2 ? 2.6 : 1))
    : Math.round(hpWaveBase * resolvedEnemyType.hpMultiplier * DIFFICULTIES[selectedDifficulty].hp * (tierConfig?.hpMultiplier || 1)));
  const armored = options.armored ?? (Boolean(resolvedEnemyType.armored) || resolvedEnemyType.key === "armored");
  const armorValue = options.armorHp ?? (armored ? Math.max(1, Math.round(hp * 0.5)) : 0);
  const waffleRewardMultiplier = resolvedEnemyType.key === "waffle16" ? (tier >= 3 ? 1 : tier === 2 ? 0.3 : 0.1) : 1;
  const waffleSpeedBonus = resolvedEnemyType.key === "waffle16" ? (tier >= 3 ? -10 : tier === 2 ? -2 : 10) : 0;
  const strengthRewardBoost = Math.max(
    1,
    Math.pow(
      Math.max(
        1,
        resolvedEnemyType.key === "sentinel"
          ? resolvedEnemyType.hpMultiplier * (tier >= 3 ? 7.8 : tier >= 2 ? 2.6 : 1)
          : resolvedEnemyType.key === "splitter"
            ? Math.max(1, tier * 0.7)
            : resolvedEnemyType.hpMultiplier * (tierConfig?.hpMultiplier || 1)
      ),
      0.22
    )
  );
  const reward = options.reward ?? (resolvedEnemyType.key === "behemoth" || resolvedEnemyType.key === "specialPentagon"
    ? Math.max(1, Math.round(hp))
    : resolvedEnemyType.key === "splitter"
      ? Math.max(1, Math.round(resolvedEnemyType.reward * Math.pow(1.46, Math.max(0, tier - 1)) * enemyRewardMultiplier() * strengthRewardBoost))
      : resolvedEnemyType.key === "sentinel"
        ? Math.max(1, Math.round(resolvedEnemyType.reward * (tier >= 3 ? 10.8 : tier === 2 ? 3.2 : 1) * enemyRewardMultiplier() * strengthRewardBoost))
        : Math.max(1, Math.round(resolvedEnemyType.reward * waffleRewardMultiplier * enemyRewardMultiplier() * (tierConfig?.rewardMultiplier || 1) * strengthRewardBoost)));
  const sentinelTierSpeedBonus = resolvedEnemyType.key === "sentinel"
    ? (tier >= 3 ? 24 : tier >= 2 ? 30 : 0)
    : 0;
  const speedyMultipliers = { 1: 2, 2: 2.5, 3: 3.5 };
  const speed = options.speed ?? (resolvedEnemyType.key === "heavy"
    ? CELL_SIZE * 0.5 * (activeMap.enemySpeed || 1)
    : resolvedEnemyType.key === "octagon"
      ? CELL_SIZE * 0.42 * (activeMap.enemySpeed || 1)
    : resolvedEnemyType.key === "speedy"
      ? ((((speedWaveBase + ENEMY_TYPES.fast.speedBonus) / DIFFICULTIES[selectedDifficulty].interval) * (activeMap.enemySpeed || 1)) * (speedyMultipliers[tier] || 2))
    : (((speedWaveBase + (resolvedEnemyType.speedBonus + waffleSpeedBonus + sentinelTierSpeedBonus)) / DIFFICULTIES[selectedDifficulty].interval) * (tierConfig?.speedMultiplier || 1) * (activeMap.enemySpeed || 1)));
  const regenRate = options.regenRate ?? (resolvedEnemyType.key === "health"
    ? (tier >= 3 ? 1.1 : tier === 2 ? 0.75 : 0.45)
    : resolvedEnemyType.key === "life"
      ? (tier >= 3 ? 1.8 : tier === 2 ? 1.2 : 0.8)
      : 0);
  const healRadius = options.healRadius ?? (resolvedEnemyType.key === "life" ? CELL_SIZE * (tier >= 3 ? 2.7 : tier === 2 ? 2.2 : 1.8) : 0);
  const healPower = options.healPower ?? (resolvedEnemyType.key === "life" ? (tier >= 3 ? 2.2 : tier === 2 ? 1.5 : 1) : 0);
  const healInterval = options.healInterval ?? (resolvedEnemyType.key === "life" ? 0.65 : 0);
  const shieldHp = shielded
    ? (options.shieldHp ?? (breacherShielded ? (tier >= 3 ? 165 : tier === 2 ? 105 : 60) : 120))
    : 0;
  const shieldRadius = shielded
    ? (options.shieldRadius ?? (breacherShielded ? CELL_SIZE * (1.4 + tier * 0.18) : CELL_SIZE * (2.4 * (shieldTier?.shieldRadiusMultiplier || 1))))
    : 0;

  return {
    id: nextEnemyId++,
    key: resolvedEnemyType.key,
    portalIndex,
    route,
    type: resolvedEnemyType.key === "sentinel"
      ? (tier >= 3 ? "Skrey" : tier >= 2 ? "Overwatch" : "Sentinel")
      : resolvedEnemyType.key === "narder"
        ? (tier >= 2 ? "Japper" : "Narder")
        : resolvedEnemyType.name,
    shapeSides: resolvedEnemyType.shape,
    reward,
    color: options.color || ((shielded && !breacherShielded) ? "#79beff" : null) || tierConfig?.color || resolvedEnemyType.color,
    waffleSquares: options.waffleSquares ?? (resolvedEnemyType.key === "waffle16" ? (tier >= 3 ? 16 : tier === 2 ? 4 : 1) : (resolvedEnemyType.waffleSquares || 0)),
    x: center.x,
    y: center.y,
    previousX: center.x,
    previousY: center.y,
    progress: options.progress || 0,
    speed,
    hp,
    maxHp: hp,
    tier,
    coreColor: tierConfig?.coreColor || null,
    sizeScale: options.sizeScale ?? (
      resolvedEnemyType.key === "sentinel"
        ? (tier >= 3 ? 1.62 : tier >= 2 ? 1.34 : 1.08)
        : resolvedEnemyType.key === "behemoth"
          ? 2.65
          : resolvedEnemyType.key === "xer"
            ? 4.9
          : resolvedEnemyType.key === "specialPentagon"
            ? 1.95
            : (tierConfig?.radiusMultiplier || 1)
    ),
    shielded,
    shieldHp,
    maxShieldHp: shieldHp,
    shieldRadius,
    hidden: options.hidden ?? Boolean(resolvedEnemyType.hidden),
    armored,
    armorHp: armorValue,
    maxArmorHp: armorValue,
    shelled: Boolean(options.shelled),
    shellHp: options.shelled ? (options.shellHp ?? hp * 2) : 0,
    maxShellHp: options.shelled ? (options.shellHp ?? hp * 2) : 0,
    suppressArmorVisual: Boolean(resolvedEnemyType.suppressArmorVisual),
    stunTimer: 0,
    slowFactor: 1,
    slowTimer: 0,
    burnTimer: 0,
    burnDamage: 0,
    poisonTimer: 0,
    poisonDamage: 0,
    acidAmpTimer: 0,
    acidAmp: 1,
    whiteoutTimer: 0,
    freezeTintTimer: 0,
    mangoTimer: 0,
    speedBoostTimer: 0,
    speedBoostFactor: 1,
    healthBarTint: null,
    healthBarTintTimer: 0,
    healthBarLagHp: hp,
    healthBarFlashTimer: 0,
    facingAngle: 0,
    turnRate: options.turnRate
      || (resolvedEnemyType.key === "hydra" ? 2.7 : resolvedEnemyType.key === "adapter" ? 2.4 : resolvedEnemyType.key === "idaen" ? 1.9 : 3.4),
    spawnSourceX: options.spawnSourceX ?? null,
    spawnSourceY: options.spawnSourceY ?? null,
    spawnIntroTimer: options.spawnIntroDuration || 0,
    spawnIntroDuration: options.spawnIntroDuration || 0,
    segmentOffset: options.segmentOffset || 0,
    hydraGroupId: options.hydraGroupId || null,
    hydraStage: options.hydraStage ?? null,
    summonWave: options.summonWave || waveNumber,
    bossOwnerId: options.bossOwnerId || null,
    bossShieldMinion: Boolean(options.bossShieldMinion),
    summonStunRadius: options.summonStunRadius || 0,
    slowResistance: options.slowResistance ?? (resolvedEnemyType.slowResistance || 1),
    stunResistance: options.stunResistance ?? (resolvedEnemyType.stunResistance || 1),
    spinRate: options.spinRate ?? (resolvedEnemyType.spinRate || 0),
    regenRate,
    healRadius,
    healPower,
    healInterval,
    healTimer: 0,
    overhealLimit: options.overhealLimit || 0,
    popcornKernel: Boolean(options.popcornKernel),
    kernelVariant: options.kernelVariant || "normal",
    allowedDamageClasses: options.allowedDamageClasses || resolvedEnemyType.allowedDamageClasses || null,
    ghostAdapterEscort: Boolean(options.ghostAdapterEscort),
    adapterImmunityClass: options.adapterImmunityClass || null,
    breacherSlowFactor: options.breacherSlowFactor ?? (resolvedEnemyType.key === "breacher" ? (tier >= 3 ? 0.38 : tier === 2 ? 0.44 : 0.5) : 1)
  };
}

function pushEnemy(enemy) {
  if (!enemy) {
    return null;
  }

  const firstEncounter = !introducedEnemyKeys.has(enemy.key);
  markEnemyDiscovered(enemy.key, enemy.tier || 1);
  if (firstEncounter) {
    introducedEnemyKeys.add(enemy.key);
  }
  renderAlmanac();
  if ((enemy.shielded || isShieldEnemy(enemy)) && (enemy.shieldHp || 0) > 0) {
    addPulse(enemy.x, enemy.y, enemy.shieldRadius || 24, "rgba(176, 225, 255, 0.45)");
  }
  if (firstEncounter && gameMode === "playing" && !enemy.bossShieldMinion && !tutorialDismissed && !isSandboxMode()) {
    queueTutorialPopup(`enemy-intro-${enemy.key}`, `${ENEMY_TYPES[enemy.key]?.name || enemy.type} Spotted`, enemyIntroMessage(enemy.key));
  }
  enemies.push(enemy);
  return enemy;
}

function adapterBossForEnemy(enemy) {
  if (!enemy) {
    return null;
  }
  if (enemy.key === "adapter") {
    return enemy.hp > 0 ? enemy : null;
  }
  if (!enemy.ghostAdapterEscort || !enemy.bossOwnerId) {
    return null;
  }
  return enemies.find((entry) => entry.id === enemy.bossOwnerId && entry.key === "adapter" && entry.hp > 0) || null;
}

function spawnBossSummonCell(enemy, range = 3, reserved = new Set()) {
  const baseCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const routeSet = new Set(routeCells().map((cell) => `${cell.x},${cell.y}`));
  const backX = Math.round(-Math.cos(enemy.facingAngle || 0));
  const backY = Math.round(-Math.sin(enemy.facingAngle || 0));

  for (let distance = 2; distance <= range + 2; distance += 1) {
    for (let side = -2; side <= 2; side += 1) {
      const x = baseCell.x + backX * distance + backY * side;
      const y = baseCell.y + backY * distance - backX * side;
      const key = `${x},${y}`;

      if (!inBounds(x, y) || isEndpoint(x, y) || routeSet.has(key) || obstacleAt(x, y) || grid[y][x].blockId !== null || reserved.has(key)) {
        continue;
      }

      const route = findPathFrom({ x, y });
      if (route.length > 0) {
        return { x, y, route };
      }
    }
  }

  return null;
}

function stunTowersNear(x, y, radius, duration) {
  for (const tower of towers) {
    if (Math.hypot(tower.centerX - x, tower.centerY - y) <= radius) {
      tower.stunnedTimer = Math.max(tower.stunnedTimer || 0, duration);
      tower.cooldown = Math.max(tower.cooldown || 0, duration);
    }
  }
}

function spawnIdaenSummons(enemy) {
  const summonCount = Math.random() < 0.32 ? 3 : 1;
  const waffleType = ENEMY_TYPES.waffle16;
  const usedCells = new Set();

  for (let index = 0; index < summonCount; index += 1) {
    const cell = spawnBossSummonCell(enemy, 6, usedCells);
    if (!cell) {
      break;
    }
    const key = `${cell.x},${cell.y}`;
    usedCells.add(key);

    const mergePath = resolveChildSpawnPath(enemy.portalIndex, [{ x: cell.x, y: cell.y }], null, 8);
    const waffle = createEnemy(waffleType, {
      startCell: { x: cell.x, y: cell.y },
      route: mergePath?.route || cell.route,
      tier: 2,
      hidden: false,
      armored: false,
      shielded: false,
      armorHp: 0,
      reward: Math.max(1, Math.round(waffleType.reward * enemyRewardMultiplier()))
    });
    pushEnemy(prepareSummonedChild(waffle, enemy));
  }
}

function spawnIdaenBoss() {
  return null;
}

function spawnAdapterEscorts(enemy) {
  const escortCount = selectedDifficulty === "brutal" ? 4 : 5;
  for (let index = 0; index < escortCount; index += 1) {
    const escort = createEnemy(ENEMY_TYPES.attacker, {
      portalIndex: enemy.portalIndex,
      route: enemy.route,
      progress: Math.max(0, enemy.progress - 0.8 - index * 1.45),
      hidden: true,
      armored: true,
      armorHp: ENEMY_TYPES.attacker.armor + Math.max(1, Math.floor((waveNumber - 10) / 4)),
      bossOwnerId: enemy.id,
      ghostAdapterEscort: true,
      reward: Math.max(2, Math.round(ENEMY_TYPES.attacker.reward * enemyRewardMultiplier()))
    });
    if (escort) {
      const prepared = prepareSummonedChild(escort, enemy);
      const spreadAngle = (-Math.PI / 2) + (Math.PI * index) / Math.max(escortCount - 1, 1);
      prepared.spawnSourceX = enemy.x + Math.cos(spreadAngle) * 38;
      prepared.spawnSourceY = enemy.y + Math.sin(spreadAngle) * 30;
      prepared.spawnIntroTimer = 0.42;
      prepared.spawnIntroDuration = 0.42;
      pushEnemy(prepared);
    }
  }
}

function spawnAdapterBoss() {
  const boss = createEnemy(ENEMY_TYPES.adapter, {
    portalIndex: Math.floor(Math.random() * activePortals().length),
    hidden: false,
    sizeScale: 1
  });

  if (!boss) {
    return;
  }

  pushEnemy(boss);
}

function triggerAdapterPulse(enemy) {
  const radius = CELL_SIZE * 3.2;
  addPulse(enemy.x, enemy.y, radius, "rgba(255, 221, 140, 0.34)");
  addPulse(enemy.x, enemy.y, radius * 0.66, "rgba(180, 120, 255, 0.22)");

  for (const target of enemies) {
    if (target.id === enemy.id || target.hp <= 0 || Math.hypot(target.x - enemy.x, target.y - enemy.y) > radius) {
      continue;
    }
    target.overhealLimit = Math.max(target.overhealLimit || 0, 100);
    const healCap = target.maxHp + target.overhealLimit;
    target.hp = Math.min(healCap, target.hp + target.maxHp * 0.18);
    target.healthBarLagHp = Math.max(target.healthBarLagHp || target.hp, target.hp);
    target.healthBarTint = "#f0cc46";
    target.healthBarTintTimer = Math.max(target.healthBarTintTimer || 0, 0.32);
    target.speedBoostFactor = Math.max(target.speedBoostFactor || 1, 1.45);
    target.speedBoostTimer = Math.max(target.speedBoostTimer || 0, 2.6);
  }
}

function waffleStatusModifiers() {
  if (waveNumber >= 100) {
    return { hidden: true, armored: true, armorHp: 4 + Math.floor((waveNumber - 100) / 20) };
  }

  if (waveNumber >= 80) {
    return {
      hidden: Math.random() < 0.55,
      armored: Math.random() < 0.55,
      armorHp: 3 + Math.floor((waveNumber - 80) / 20)
    };
  }

  if (waveNumber >= 55) {
    return {
      hidden: Math.random() < 0.35,
      armored: Math.random() < 0.4,
      armorHp: 2 + Math.floor((waveNumber - 55) / 25)
    };
  }

  if (waveNumber >= 35) {
    return {
      hidden: Math.random() < 0.22,
      armored: Math.random() < 0.25,
      armorHp: 2
    };
  }

  return { hidden: false, armored: false, armorHp: 0 };
}

function spawnWave(manualStart = false) {
  if (gameMode !== "playing") {
    return;
  }

  if (wave && !wave.complete) {
    setMessage("A wave is already running.");
    updateHud();
    return;
  }

  if (!allRoutesOpen(routes)) {
    setMessage("You need an open path before starting a wave.");
    updateHud();
    return;
  }

  if (isSandboxMode()) {
    const requestedSandboxWave = sandboxSelectableWave();
    sandboxWaveTarget = requestedSandboxWave;
    if (sandboxWaveInput) {
      sandboxWaveInput.value = String(requestedSandboxWave);
    }
    waveNumber = requestedSandboxWave;
  } else {
    waveNumber += 1;
  }
  waveNumber = Math.max(1, waveNumber);
  setUnlockedWaveMax(waveNumber, false);
  resetSpawnPortalOrder();
  const plan = wavePlanForRound(waveNumber);
  wave = {
    count: plan.count,
    spawned: 0,
    timer: 0,
    interval: plan.interval,
    profile: plan.profile,
    complete: false
  };
  autoWaveTimer = 0;
  if (manualStart || waveNumber > 1) {
    autoWaveUnlocked = true;
  }
  maybeUnlockCrossbowQuest();
  if (isIdaenWave()) {
    spawnIdaenBoss();
  } else if (isAdapterWave()) {
    spawnAdapterBoss();
  }
  maybeShowWaveWarning(waveNumber);
  if (isIdaenWave()) {
    setMessage(`Wave ${waveNumber}: Mega Waffle is approaching.`, 2.8);
  } else if (isAdapterWave()) {
    setMessage(`Wave ${waveNumber}: Adapter is diving onto the lane.`, 2.8);
  } else {
    setMessage(`Wave ${waveNumber} started.`, 1.4);
  }
  freezeRandomMountainTower();
  updateHud();
}

function setSandboxWave() {
  if (!isSandboxMode()) {
    return;
  }

  const requestedWave = sandboxSelectableWave();
  if (sandboxWaveInput) {
    sandboxWaveInput.value = String(requestedWave);
  }
  sandboxWaveTarget = requestedWave;
  waveNumber = requestedWave;
  wave = null;
  enemies = [];
  projectiles = [];
  effects = effects.filter((effect) => effect.kind === "puddle" || effect.kind === "floatingText");
  autoWaveTimer = 0;
  tutorialPopupQueue = [];
  activeTutorialPopup = null;
  tutorialOverlay?.classList.remove("active");
  tutorialResumeMode = null;
  gameMode = "playing";
  openOverlay(null);
  setMessage(`Sandbox wave target set to ${requestedWave}.`, 1.8);
  updateHud();
}

function spawnSandboxEnemyFromControls() {
  if (!isSandboxMode()) {
    return;
  }

  const selectedEnemyKey = sandboxEnemySelect?.value || "";
  const selectedTierValue = String(sandboxTierSelect?.value || "1");
  const resolvedEnemyKey = sandboxEnemyKeyForSelection(selectedEnemyKey, selectedTierValue);
  const enemyType = ENEMY_TYPES[resolvedEnemyKey];
  if (!enemyType) {
    return;
  }

  const count = Math.max(1, Math.floor(Number(sandboxSpawnCountInput?.value) || 1));
  const spacing = Math.max(0, Number(sandboxSpawnSpacingInput?.value) || 0);
  const numericTierValue = Number(selectedTierValue) || 1;
  const tier = Math.max(1, Math.min(maxTierForEnemy(enemyType.key), numericTierValue));
  const summonWave = currentSandboxWaveReference();
  const hidden = Boolean(sandboxSpawnHidden?.checked);
  const armored = Boolean(sandboxSpawnArmored?.checked) || enemyType.key === "armored";
  const shielded = Boolean(sandboxSpawnShielded?.checked);
  const shelled = Boolean(sandboxSpawnShelled?.checked);
  const portalValue = sandboxPortalSelect?.value || "auto";

  for (let index = 0; index < count; index += 1) {
    const portalIndex = portalValue === "auto" ? undefined : Number(portalValue);
  const spawned = enemyType.key === "hydra"
        ? (spawnHydra(enemyType, { portalIndex, hidden, armored, shielded }), true)
    : enemyType.key === "adapter"
        ? pushEnemy(createEnemy(enemyType, {
          portalIndex,
          hidden: false,
          shielded,
          shelled,
          tier,
          sizeScale: 1
        }))
      : enemyType.key === "behemoth"
        ? pushEnemy(createEnemy(enemyType, {
          portalIndex,
          hidden: false,
          armored: false,
          shielded,
          shelled,
          tier,
          hp: 1200,
          speed: Math.max(CELL_SIZE * 0.82, ((30 + summonWave * 2 + enemyType.speedBonus) / DIFFICULTIES[selectedDifficulty].interval) * 0.72)
        }))
      : enemyType.key === "specialPentagon"
        ? pushEnemy(createEnemy(enemyType, {
          portalIndex,
          hidden: false,
          armored: false,
          shielded,
          shelled,
          tier: 1,
          hp: 250
        }))
      : pushEnemy(createEnemy(enemyType, { portalIndex, hidden, armored, shielded, shelled, tier, summonWave }));
    if (spawned) {
      const newestEnemy = enemies[enemies.length - 1];
      if (newestEnemy) {
        newestEnemy.progress = -index * spacing;
      }
    }
    if (!spawned) {
      return;
    }
  }

  autoWaveTimer = 0;
  setMessage(`Sandbox summoned ${count} ${enemyType.name}${count === 1 ? "" : "s"}.`, 1.8);
  updateHud();
}

function spawnEnemy() {
  const roll = biasedWaveRoll(Math.random(), waveNumber);
  const spawnIndex = Math.max(1, wave?.spawned || 1);
  const forcedNatural = forcedNaturalEnemyForWave(waveNumber, spawnIndex);
  const forceHidden = waveNumber === 20 && spawnIndex === 1;
  const forceArmored = waveNumber === 24 && spawnIndex === 1;
  const forceShielded = waveNumber === 30 && spawnIndex === 1;
  const shieldedAttackerWave = waveNumber === 58;
  const singleShieldedAttackerWave = waveNumber === 42;
  const popcornRushWave = waveNumber === 74;
  let enemyType = ENEMY_TYPES.fast;
  let forcedTier = null;

  if (forcedNatural) {
    enemyType = forcedNatural.enemyType;
    forcedTier = forcedNatural.tier;
  }

  if (!forcedNatural && popcornRushWave) {
    enemyType = ENEMY_TYPES.popcorn;
  } else if (!forcedNatural && shieldedAttackerWave) {
    enemyType = ENEMY_TYPES.attacker;
  } else if (!forcedNatural && singleShieldedAttackerWave && spawnIndex === 1) {
    enemyType = ENEMY_TYPES.attacker;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 3 && roll > 0.58) {
    enemyType = ENEMY_TYPES.pentagon;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 48 && roll > 0.962) {
    enemyType = ENEMY_TYPES.octagon;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 10 && roll > 0.67) {
    enemyType = ENEMY_TYPES.speedy;
  }
  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 52 && roll > 0.952) {
    enemyType = ENEMY_TYPES.narder;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 7 && roll > 0.72) {
    enemyType = ENEMY_TYPES.diamond;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 9 && roll > 0.86) {
    enemyType = ENEMY_TYPES.health;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 22 && roll > 0.91) {
    enemyType = ENEMY_TYPES.heavy;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 5 && roll > 0.92) {
    enemyType = ENEMY_TYPES.splitter;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 28 && roll > 0.965) {
    enemyType = ENEMY_TYPES.sentinel;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 40 && roll > 0.985) {
    enemyType = ENEMY_TYPES.hydra;
  }

  if (!forcedNatural && !shieldedAttackerWave && !singleShieldedAttackerWave && waveNumber >= 36 && roll > 0.82) {
    enemyType = ENEMY_TYPES.attacker;
  }

  if (!forcedNatural && !shieldedAttackerWave && !singleShieldedAttackerWave && waveNumber >= 73 && roll > 0.958) {
    enemyType = ENEMY_TYPES.assassin;
  }
  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 82 && roll > 0.988) {
    enemyType = ENEMY_TYPES.breacher;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 6 && roll > 0.84) {
    enemyType = ENEMY_TYPES.hexagon;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 12 && roll > waffleRampThreshold(waveNumber)) {
    enemyType = ENEMY_TYPES.waffle16;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 24 && roll > 0.93) {
    enemyType = ENEMY_TYPES.biscuit;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 28 && roll > 0.955) {
    enemyType = ENEMY_TYPES.life;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 34 && roll > 0.972) {
    enemyType = ENEMY_TYPES.popcorn;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 64 && roll > 0.986) {
    enemyType = ENEMY_TYPES.specialPentagon;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 50 && roll > 0.9925) {
    enemyType = ENEMY_TYPES.idaen;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 74 && roll > 0.989) {
    enemyType = ENEMY_TYPES.idine;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 78 && roll > 0.991) {
    enemyType = ENEMY_TYPES.celun;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 80 && roll > 0.992) {
    enemyType = ENEMY_TYPES.celris;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 84 && roll > 0.993) {
    enemyType = ENEMY_TYPES.cel;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 86 && roll > 0.9935) {
    enemyType = ENEMY_TYPES.lun;
  }

  if (!forcedNatural && !shieldedAttackerWave && waveNumber >= 88 && roll > 0.994) {
    enemyType = ENEMY_TYPES.ris;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 68 && roll > 0.9945) {
    enemyType = ENEMY_TYPES.behemoth;
  }
  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && waveNumber >= 100 && roll > 0.9972) {
    enemyType = ENEMY_TYPES.xer;
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave && enemyType.key !== "hydra" && enemyType.key !== "behemoth" && enemyType.key !== "idaen" && enemyType.key !== "xer") {
    const naturalEliteRoll = Math.random();
    if (waveNumber >= 74 && naturalEliteRoll > 0.992) {
      enemyType = ENEMY_TYPES.idine;
    } else if (!singleShieldedAttackerWave && waveNumber >= 73 && naturalEliteRoll > 0.982) {
      enemyType = ENEMY_TYPES.assassin;
    } else if (waveNumber >= 82 && naturalEliteRoll > 0.972) {
      enemyType = ENEMY_TYPES.breacher;
    } else if (!singleShieldedAttackerWave && waveNumber >= 36 && naturalEliteRoll > 0.955) {
      enemyType = ENEMY_TYPES.attacker;
    } else if (waveNumber >= 28 && naturalEliteRoll > 0.968) {
      enemyType = ENEMY_TYPES.sentinel;
    }
  }

  if (!forcedNatural && !shieldedAttackerWave && !popcornRushWave) {
    enemyType = remapLateWaveEnemyType(enemyType, waveNumber, Math.random());
  }

  let hidden = false;
  if (forceHidden) {
    hidden = true;
  } else if (waveNumber >= 21) {
    hidden = Math.random() < Math.min(0.09 + (waveNumber - 21) * 0.016, 0.34);
  }
  const waffleMods = enemyType.key.startsWith("waffle") ? waffleStatusModifiers() : { hidden: false, armored: false, armorHp: 0 };
  const attackerHidden = enemyType.key === "attacker";
  const attackerArmored = false;
  const enemyArmored = forceArmored
    || attackerArmored
    || (enemyType.key.startsWith("waffle") && waffleMods.armored);
  if (enemyType.key === "hydra") {
    spawnHydra(enemyType, {
      hidden,
      armored: forceArmored,
      shielded: forceShielded || false
    });
    return;
  }

  const enemy = createEnemy(enemyType, {
    tier: forcedTier || (enemyType.key === "diamond"
      ? rolledTierForWave("diamond")
      : enemyType.key === "sentinel"
        ? rolledTierForWave("sentinel")
      : enemyType.key === "health"
        ? rolledTierForWave("health")
      : enemyType.key === "life"
        ? rolledTierForWave("life")
      : enemyType.key === "popcorn"
        ? 1
      : enemyType.key === "splitter"
        ? splitterTierForWave()
      : enemyType.key === "attacker"
        ? rolledTierForWave("attacker")
      : enemyType.key === "assassin"
        ? rolledTierForWave("assassin")
      : enemyType.key === "waffle16"
        ? rolledTierForWave("waffle16")
      : rolledTierForWave(enemyType.key)),
    hidden: attackerHidden || enemyType.key === "assassin" || (enemyType.key.startsWith("waffle") ? waffleMods.hidden : hidden),
    armored: enemyArmored,
    armorHp: attackerArmored
      ? ENEMY_TYPES.attacker.armor + Math.max(0, Math.floor((waveNumber - 10) / 4))
      : enemyType.key.startsWith("waffle")
        ? waffleMods.armorHp
        : undefined,
    shielded: shieldedAttackerWave
      ? true
      : (singleShieldedAttackerWave && enemyType.key === "attacker" && spawnIndex === 1)
        ? true
        : (forceShielded || (waveNumber >= 31 && enemyType.key !== "attacker" && Math.random() < Math.min(0.05 + (waveNumber - 31) * 0.008, 0.22)))
  });
  if (enemyType.key === "behemoth" && enemy) {
    enemy.hp = 8000;
    enemy.maxHp = 8000;
    enemy.speed = Math.max(CELL_SIZE * 0.82, enemy.speed * 0.72);
    enemy.reward = enemy.maxHp;
  }
  if (enemyType.key === "xer" && enemy) {
    enemy.hp = 18000;
    enemy.maxHp = 18000;
    enemy.speed = Math.max(CELL_SIZE * 0.42, enemy.speed * 0.42);
    enemy.reward = enemy.maxHp;
    enemy.sizeScale = 4.9;
  }
  pushEnemy(enemy);
}

function updateWave(deltaTime) {
  if (!wave || wave.complete) {
    return;
  }

  wave.timer += deltaTime;

  while (wave.spawned < wave.count && wave.timer >= wave.interval) {
    wave.timer -= wave.interval;
    wave.spawned += 1;
    spawnEnemy();
  }

  if (wave.spawned === wave.count && enemies.length === 0) {
    wave.complete = true;
    refillPieceChoices(selectedMap);
    const supportIncome = supportWaveIncomeEntries();
    const supportTotal = supportIncome.reduce((total, entry) => total + entry.amount, 0);
    money += Math.max(2, Math.round((5 + waveNumber) * rewardMultiplier()));
    money += supportTotal;
    processTreasuryBanks();
    processTreasuryLoans();
    if (supportTotal > 0) {
      for (const entry of supportIncome) {
        addPulse(entry.tower.centerX, entry.tower.centerY, 18, "rgba(255, 228, 122, 0.48)");
        addBurstParticles(entry.tower.centerX, entry.tower.centerY, 4, "rgba(255, 212, 115, 0.7)", 28, 78, 0.18, 0.46);
        addFloatingText(entry.tower.centerX, entry.tower.centerY - 12, `+$${entry.amount}`, "#ffe27a", 1.15);
      }
    }
    currentBlockCost = BLOCK_COST;
    if (isFactoryMap()) {
      advanceFactoryQuarter();
    }
    maybeUnlockMapRewards();
    autoWaveTimer = autoWaveEnabled ? 0.9 : 0;
    persistProgressionState();
    setMessage(isFactoryMap() ? `Wave ${waveNumber} cleared. A factory quarter slides into the gap.` : `Wave ${waveNumber} cleared.`, 1.8);
  }
}

function updateEnemies(deltaTime) {
  if (!allRoutesOpen(routes)) {
    return;
  }
  const survivors = [];
  const resolvedHydraGroups = new Set();

  for (const enemy of enemies) {
    enemy.previousX = enemy.x;
    enemy.previousY = enemy.y;

    if (enemy.stunTimer > 0) {
      enemy.stunTimer = Math.max(0, enemy.stunTimer - deltaTime);
    }

    if (enemy.slowTimer > 0) {
      enemy.slowTimer = Math.max(0, enemy.slowTimer - deltaTime);
      if (enemy.slowTimer === 0) {
        enemy.slowFactor = 1;
      }
    }

    if ((enemy.whiteoutTimer || 0) > 0) {
      enemy.whiteoutTimer = Math.max(0, enemy.whiteoutTimer - deltaTime);
    }

    if ((enemy.freezeTintTimer || 0) > 0) {
      enemy.freezeTintTimer = Math.max(0, enemy.freezeTintTimer - deltaTime);
    }

    if ((enemy.mangoTimer || 0) > 0) {
      enemy.mangoTimer = Math.max(0, enemy.mangoTimer - deltaTime);
    }

    if ((enemy.speedBoostTimer || 0) > 0) {
      enemy.speedBoostTimer = Math.max(0, enemy.speedBoostTimer - deltaTime);
      if (enemy.speedBoostTimer === 0) {
        enemy.speedBoostFactor = 1;
      }
    }

    if ((enemy.healthBarFlashTimer || 0) > 0) {
      enemy.healthBarFlashTimer = Math.max(0, enemy.healthBarFlashTimer - deltaTime);
    } else if ((enemy.healthBarLagHp || enemy.hp) > enemy.hp) {
      const catchup = Math.max((enemy.maxHp || 1) * 2.4 * deltaTime, ((enemy.healthBarLagHp || enemy.hp) - enemy.hp) * deltaTime * 8);
      enemy.healthBarLagHp = Math.max(enemy.hp, (enemy.healthBarLagHp || enemy.hp) - catchup);
    } else {
      enemy.healthBarLagHp = enemy.hp;
    }

    if ((enemy.healthBarTintTimer || 0) > 0) {
      enemy.healthBarTintTimer = Math.max(0, enemy.healthBarTintTimer - deltaTime);
      if (enemy.healthBarTintTimer === 0) {
        enemy.healthBarTint = null;
      }
    }

    if (enemy.burnTimer > 0 && enemy.hp > 0) {
      enemy.burnTimer = Math.max(0, enemy.burnTimer - deltaTime);
    damageEnemy(enemy, enemy.burnDamage * deltaTime, "laser", { sourceTowerId: enemy.burnSourceTowerId || null });
      if (enemy.burnTimer === 0) {
        enemy.burnDamage = 0;
      }
    }

    if ((enemy.poisonTimer || 0) > 0 && enemy.hp > 0) {
      enemy.poisonTimer = Math.max(0, enemy.poisonTimer - deltaTime);
      if (!enemy.armored) {
    damageEnemy(enemy, (enemy.poisonDamage || 0) * deltaTime, "chemical", { dotBarColor: "#a66cff", sourceTowerId: enemy.poisonSourceTowerId || null });
      }
      if (enemy.poisonTimer === 0) {
        enemy.poisonDamage = 0;
      }
    }

    if ((enemy.acidAmpTimer || 0) > 0) {
      enemy.acidAmpTimer = Math.max(0, enemy.acidAmpTimer - deltaTime);
      if (enemy.acidAmpTimer === 0) {
        enemy.acidAmp = 1;
      }
    }

    if ((enemy.regenRate || 0) > 0 && enemy.hp > 0 && enemy.hp < enemy.maxHp) {
      enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.regenRate * deltaTime);
      enemy.healthBarLagHp = Math.max(enemy.healthBarLagHp || enemy.hp, enemy.hp);
    }

    if ((enemy.healPower || 0) > 0 && (enemy.healRadius || 0) > 0) {
      enemy.healTimer = Math.max(0, (enemy.healTimer || 0) - deltaTime);
      if (enemy.healTimer === 0) {
        for (const ally of enemies) {
          if (ally.id === enemy.id || ally.hp <= 0 || ally.hp >= ally.maxHp) {
            continue;
          }
          if (Math.hypot(ally.x - enemy.x, ally.y - enemy.y) <= enemy.healRadius) {
            ally.hp = Math.min(ally.maxHp, ally.hp + enemy.healPower);
            ally.healthBarLagHp = Math.max(ally.healthBarLagHp || ally.hp, ally.hp);
          }
        }
        enemy.healTimer = enemy.healInterval || 0.65;
      }
    }

    if (enemy.key === "idaen") {
      enemy.phaseCooldown = Math.max(0, (enemy.phaseCooldown || 0) - deltaTime);
      if (enemy.phaseCooldown === 0) {
        enemy.phaseCooldown = 15;
        spawnIdaenSummons(enemy);
      }
    }

    if (enemy.spawnDetourActive && Array.isArray(enemy.route) && enemy.route.length > 0) {
      const routeIndex = Math.max(0, Math.min(enemy.route.length - 1, Math.floor(enemy.progress || 0)));
      const currentRouteCell = enemy.route[routeIndex];
      const nextRouteCell = enemy.route[Math.min(enemy.route.length - 1, routeIndex + 1)];
      if (isEnemyRouteCellBlocked(currentRouteCell) || isEnemyRouteCellBlocked(nextRouteCell)) {
        abortSummonedChildDetour(enemy);
      }
    }

    const stunFactor = enemy.stunTimer > 0 || enemy.phaseTimer > 0 ? 0 : 1;
    const breacherFactor = enemy.key === "breacher" && (enemy.shieldHp || 0) <= 0 ? (enemy.breacherSlowFactor || 0.5) : 1;
    enemy.progress += (enemy.speed * enemy.slowFactor * (enemy.speedBoostFactor || 1) * breacherFactor * stunFactor * deltaTime) / CELL_SIZE;

    const points = enemyRoutePoints(enemy);

    const visualProgress = Math.max(0, enemy.progress - (enemy.segmentOffset || 0));

    if (visualProgress >= points.length - 1) {
      if (enemy.key === "hydra" && enemy.hydraGroupId) {
        if (resolvedHydraGroups.has(enemy.hydraGroupId)) {
          continue;
        }
        resolvedHydraGroups.add(enemy.hydraGroupId);
        const remainingSegments = enemies.filter((entry) => entry.key === "hydra" && entry.hydraGroupId === enemy.hydraGroupId && entry.hp > 0);
        const leakDamage = Math.max(1, remainingSegments.reduce((sum, entry) => sum + Math.max(1, Math.ceil(entry.hp)), 0));
        lives = Math.max(0, lives - leakDamage);
        setMessage(`Hydra slipped through for ${formatNumber(leakDamage)} base damage.`, 1.2);
        continue;
      }
      const leakDamage = enemy.key === "popcorn" ? 445 : Math.max(1, Math.ceil(enemy.hp));
      lives = Math.max(0, lives - leakDamage);
      setMessage(`${enemy.type} slipped through for ${formatNumber(leakDamage)} base damage.`, 1.1);
      continue;
    }

    const index = Math.floor(visualProgress);
    const segment = visualProgress - index;
    const current = points[index];
    const next = points[index + 1];

    const targetX = current.x + (next.x - current.x) * segment;
    const targetY = current.y + (next.y - current.y) * segment;
    if ((enemy.spawnIntroTimer || 0) > 0 && enemy.spawnSourceX !== null && enemy.spawnSourceY !== null) {
      enemy.spawnIntroTimer = Math.max(0, enemy.spawnIntroTimer - deltaTime);
      const progress = 1 - (enemy.spawnIntroTimer / Math.max(enemy.spawnIntroDuration || 0.001, 0.001));
      const eased = 1 - (1 - progress) * (1 - progress);
      enemy.x = enemy.spawnSourceX + (targetX - enemy.spawnSourceX) * eased;
      enemy.y = enemy.spawnSourceY + (targetY - enemy.spawnSourceY) * eased;
    } else {
      enemy.x = targetX;
      enemy.y = targetY;
      enemy.spawnSourceX = null;
      enemy.spawnSourceY = null;
    }
    const targetAngle = Math.atan2(next.y - current.y, next.x - current.x);
    enemy.facingAngle = smoothAngle(enemy.facingAngle || targetAngle, targetAngle, deltaTime * (enemy.turnRate || 3.4));
    if ((enemy.spinRate || 0) !== 0) {
      enemy.facingAngle = normalizeAngle((enemy.facingAngle || 0) + enemy.spinRate * deltaTime);
    }
    survivors.push(enemy);
  }

  enemies = survivors;
}

function towerStats(tower) {
  const levelBonus = tower.level - 1;
  const finalizeStats = (stats) => applyLateTierPowerScale(tower, stats);

  if (tower.type === "crossbow") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const repeater = path1 >= 3;
    const ballista = path2 >= 3;
    const topPathDamageBonuses = [0, 0.45, 0.85, 0.95, 1, 1];
    const topPathDamage = topPathDamageBonuses.slice(1, path1 + 1).reduce((sum, value) => sum + value, 0);
    const baseCooldown = Math.max(0.72 - path1 * 0.05 + path2 * 0.03, 0.32);
    const repeaterCooldown = Math.max(0.4 - Math.max(0, path1 - 3) * 0.045 + path2 * 0.015 - (path1 >= 5 ? 0.01 : 0), 0.16) / (path1 >= 5 ? 1.2 : 1);
    const ballistaCooldown = Math.max(0.76 + Math.max(0, path2 - 2) * 0.05 - path1 * 0.005, 0.52);
    return finalizeStats({
      range: CELL_SIZE * (4.55 + path2 * 0.28 + (ballista ? 0.55 : 0) + (path2 >= 5 ? 0.7 : 0)),
      cooldown: ballista ? ballistaCooldown : repeater ? repeaterCooldown : baseCooldown,
      damage: ballista
        ? 2.9 + path2 * 1.05 + path1 * 0.12 + (path2 >= 3 ? 1.2 : 0) + (path2 >= 4 ? 2.1 : 0) + (path2 >= 5 ? 3.9 : 0)
        : 1.4 + path2 * 0.18 + topPathDamage,
      boltSpeed: ballista ? 660 : 560,
      boltHoming: ballista ? 0.3 : 1.25,
      detectHidden: true,
      attackSpeedMultiplier: 1,
      boltPierce: ballista
        ? (path2 >= 5 ? 8 : path2 >= 4 ? 5 : 2)
        : (path1 >= 5 ? 2 : path1 >= 4 || path2 >= 2 ? 1 : 0)
    });
  }

  if (tower.type === "laser") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const plasma = path1 >= 3;
    const increasedDamage = path2 >= 3;
    const photon = path2 >= 5;
    const doubleBeam = path2 >= 4 && !photon;
    const doubleBeamDamageBoost = path2 >= 4 ? (photon ? 30 : 9.2) : 0;
    const photonBurnBoost = path2 >= 4 && photon ? 3.8 : 0;
    return finalizeStats({
      range: CELL_SIZE * (4.85 + path2 * 0.22 + path1 * 0.08 + (plasma ? 0.42 : 0) + (path2 >= 4 ? 0.38 : 0) + (photon ? 0.58 : 0)),
      cooldown: photon
        ? Math.max(0.98 - path1 * 0.07 - path2 * 0.09, 0.42)
        : plasma
          ? 0.02
          : Math.max(0.84 - path1 * 0.08 - path2 * 0.05 - (path2 >= 4 ? 0.1 : 0), 0.09),
      damage: 2.75 + path2 * 1.92 + (increasedDamage ? 2.9 : 0) + doubleBeamDamageBoost + (photon ? 24 : 0),
      burnDamage: path1 > 0 || path2 > 0 ? 0.65 + path2 * 1.08 + (increasedDamage ? 1.2 : 0) + (path1 >= 4 ? 2.8 : 0) + (path2 >= 4 ? 3.2 : 0) + (photon ? 5.4 + photonBurnBoost : 0) : 0,
      burnDuration: path1 > 0 || path2 > 0 ? 1.2 + path1 * 0.5 + path2 * 0.34 + (plasma ? 1.1 : 0) + (path1 >= 4 ? 1.4 : 0) + (path1 >= 5 ? 2.8 : 0) + (photon ? 4.6 : 0) : 0,
      beamWidth: photon ? 24 : 8,
      beamColor: photon ? "#ffe35c" : plasma ? "#ffffff" : "#ff96b8",
      beamTtl: plasma ? 0.24 : photon ? 0.16 : 0.12,
      doubleBeam,
      beamSeparation: doubleBeam ? 15 : 0,
      photonBlast: photon,
      infinitePierce: increasedDamage
    });
  }

  if (tower.type === "shotgun") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const bulletStorm = path1 >= 3;
    const brassHurricane = path1 >= 5;
    const wavelength = path2 >= 3;
    const goldenSpectrum = path2 >= 4;
    const lines = path2 >= 5 ? 36 : path2 >= 4 ? 15 : path2 >= 3 ? 10 : path2 === 2 ? 7 : path2 === 1 ? 4 : Math.max(bulletStorm ? 4 : 3, 3);
    const waveSpread = path2 >= 5 ? Math.PI : path2 >= 4 ? (Math.PI * 2) / 3 : path2 >= 3 ? 0.95 : path2 === 2 ? 0.78 : 0.62;
    return finalizeStats({
      range: CELL_SIZE * (4.05 + path2 * 0.1 + (path2 >= 4 ? 0.1 : 0) + (path2 >= 5 ? 0.12 : 0)),
      cooldown: (
        bulletStorm
          ? Math.max(0.42 - path1 * 0.04 - path2 * 0.018 - (path1 >= 4 ? 0.015 : 0) - (path1 >= 5 ? 0.02 : 0), 0.11)
          : Math.max(0.82 - path1 * 0.048 - path2 * 0.028 - (path1 >= 4 ? 0.03 : 0) - (path2 >= 4 ? 0.035 : 0) - (path2 >= 5 ? 0.03 : 0), 0.18)
      ) * (brassHurricane ? 0.5 : 1),
      damage: 0.9 + path1 * 0.24 + path2 * 0.24 + (path2 >= 3 ? 0.42 : 0) + (path1 >= 4 ? 0.95 : 0) + (path1 >= 5 ? 2.1 : 0) + (path2 >= 4 ? 1.1 : 0) + (path2 >= 5 ? 2.4 : 0),
      pellets: wavelength ? lines : (path1 >= 5 ? lines + 1 : lines),
      spread: wavelength ? waveSpread : Math.max(0.62 - path2 * 0.04 - (bulletStorm ? 0.03 : 0), 0.22),
      pelletSpeed: (332 + path2 * 14 + (path1 >= 4 ? 16 : 0) + (path2 >= 4 ? 26 : 0) + (path2 >= 5 ? 18 : 0)) * 3,
      pelletLife: 0.2 + path2 * 0.008 + (path2 >= 4 ? 0.015 : 0) + (path2 >= 5 ? 0.01 : 0),
      detectHidden: false,
      bulletStorm,
      cannonCount: goldenSpectrum ? 3 : 1,
      multiPriority: goldenSpectrum,
      cannonPriorities: path2 >= 4 ? ["first", "strong", "last"] : ["first", "weak", "random"]
    });
  }

  if (tower.type === "freezer") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const permafrost = path1 >= 3;
    const aura = path2 >= 3;
    const freezerShotDamage = path1 >= 5 ? 4 : permafrost ? 3 : path1 >= 2 ? 0.35 : path1 >= 1 ? 0.25 : 0.15;
    return finalizeStats({
      range: CELL_SIZE * (3.35 + path2 * 0.18 + (path1 >= 4 ? 0.12 : 0)),
      cooldown: Math.max(1.18 - path1 * 0.08 - path2 * 0.025 - (path1 >= 5 ? 0.05 : 0) - (path2 >= 5 ? 0.035 : 0), 0.34),
      damage: freezerShotDamage,
      slow: Math.max(0.8 - path2 * 0.04 - (path2 >= 5 ? 0.05 : 0), 0.42),
      slowDuration: 0.9 + path1 * 0.18 + path2 * 0.14,
      antiArmor: path2 >= 4,
      detectHidden: path2 >= 4,
      permafrost,
      pulseRadius: CELL_SIZE * (2.35 + path1 * 0.14 + path2 * 0.08 + (path1 >= 4 ? 0.24 : 0) + (path1 >= 5 ? 0.34 : 0)),
      pulseDamage: path1 >= 5 ? 4 : permafrost ? 3 : 0,
      pulseFreeze: permafrost ? 0.34 + (path1 - 3) * 0.1 + (path1 >= 4 ? 0.22 : 0) + (path1 >= 5 ? 0.42 : 0) : 0,
      pulseCooldown: permafrost ? Math.max(2.45 - path1 * 0.28 - (path1 >= 5 ? 0.14 : 0), 0.6) : Math.max(1.3 - path1 * 0.06 - path2 * 0.03, 0.52),
      aura,
      auraRadius: CELL_SIZE * (2.2 + path2 * 0.16),
      auraDamage: aura ? 1 : 0,
      auraSlow: aura ? Math.max(0.72 - (path2 - 3) * 0.07 - (path2 >= 4 ? 0.08 : 0) - (path2 >= 5 ? 0.12 : 0), 0.18) : 1,
      auraTick: aura ? (path2 >= 5 ? 1 : 3) : 0,
      boltSpeed: 250
    });
  }

  if (tower.type === "fireball") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const flamethrower = path1 >= 3;
    const blazingRing = path2 >= 3;
    const blazingRingCooldown = Math.max(0.72 - (path2 - 3) * 0.12 - (path2 >= 5 ? 0.04 : 0), 0.14);
    return finalizeStats({
      range: flamethrower
        ? CELL_SIZE * (5.6 + path1 * 0.42 + (path1 >= 4 ? 0.45 : 0) + (path1 >= 5 ? 3.4 : 0))
        : CELL_SIZE * (4.5 + path1 * 0.12 + path2 * 0.16),
      cooldown: flamethrower
        ? (path1 >= 5 ? 0.016 : path1 >= 4 ? 0.018 : 0.02)
        : blazingRing
          ? blazingRingCooldown / (path2 >= 5 ? 1.1 : 1)
          : Math.max(0.8 - path1 * 0.04 - path2 * 0.05, 0.34),
      damage: flamethrower
        ? 2.1 + path1 * 1.02 + (path1 >= 4 ? 8.2 : 0) + (path1 >= 5 ? 18.4 : 0)
        : 2.8 + path1 * 0.62 + path2 * 0.76 + (path2 >= 4 ? 4.4 : 0) + (path2 >= 5 ? 8.8 : 0),
      burst: blazingRing ? 1 : (path2 >= 2 ? 4 : 3),
      burstDelay: 0.07,
      projectileSpeed: 340 + path1 * 18 + path2 * 10,
      splash: 28 + path1 * 4 + path2 * 8 + (path2 >= 4 ? 24 : 0) + (path2 >= 5 ? 34 : 0),
      burnDamage: 1.9 + path1 * 1 + path2 * 0.86 + (path1 >= 4 ? 6.4 : 0) + (path1 >= 5 ? 14.4 : 0) + (path2 >= 4 ? 4.6 : 0) + (path2 >= 5 ? 11.2 : 0),
      burnDuration: 1.8 + path1 * 0.36 + path2 * 0.28 + (path1 >= 4 ? 0.6 : 0) + (path1 >= 5 ? 1.8 : 0) + (path2 >= 4 ? 0.5 : 0) + (path2 >= 5 ? 1.1 : 0),
      detectHidden: false,
      flamethrower,
      flameArc: flamethrower ? (path1 >= 5 ? 0.4 : 0.31) : 0,
      flameTrail: path1 >= 5,
      trailRadius: path1 >= 5 ? CELL_SIZE * 1.2 : 0,
      trailTtl: path1 >= 5 ? 2.6 : 0,
      blazingRing,
      ringRadius: blazingRing ? CELL_SIZE * (2.4 + (path2 - 3) * 0.52 + (path2 >= 5 ? 0.48 : 0)) : 0,
      ringWidth: blazingRing ? (path2 >= 5 ? CELL_SIZE * 1.08 : path2 >= 4 ? CELL_SIZE * 0.9 : CELL_SIZE * 0.7) : 0,
      ringEchoes: path2 >= 5 ? 4 : path2 >= 4 ? 2 : 1
    });
  }

  if (tower.type === "dippy") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const dozenEggs = path1 >= 5;
    const mangoPudding = path2 >= 5;
    const biggerEggs = path1 >= 1;
    const boiledEggs = path1 >= 2;
    const eggPudding = path2 >= 3;
    const mangoes = path2 >= 4;
    const topPathCooldownBonus = (path1 >= 4 ? 0.22 : 0) + (path1 >= 5 ? 0.24 : 0);
    const bottomPathCooldownBonus = (path2 >= 4 ? 0.16 : 0) + (path2 >= 5 ? 0.2 : 0);
    const baseCooldown = Math.max(2.15 - path1 * 0.14 - topPathCooldownBonus - bottomPathCooldownBonus, 0.92);
    const reloadPenalty = (path1 >= 5 ? 0.42 : path1 >= 4 ? 0.08 : 0) + (path2 >= 4 ? 0.28 : 0) + (path2 >= 5 ? 0.14 : 0);
    const damage = mangoPudding
      ? 105
      : mangoes
        ? 24
        : eggPudding
          ? 18
          : boiledEggs
            ? 10
            : 9.5;
    const streamCooldown = path1 >= 5 ? 0.18 : Math.max(0.15 - Math.max(0, path1 - 3) * 0.012, 0.055);
    const magazineReloadStep = dozenEggs
      ? Math.max((baseCooldown + reloadPenalty) / 12, 0.08)
      : null;
    return finalizeStats({
      range: CELL_SIZE * (11.9 + path2 * 0.32),
      minRange: CELL_SIZE * (dozenEggs ? 2.5 : 3.5),
      cooldown: dozenEggs ? streamCooldown : baseCooldown + reloadPenalty,
      firingCooldown: streamCooldown,
      damage,
      splash: Math.max(
        CELL_SIZE * 5,
        biggerEggs
          ? 76 + path2 * 5 + (eggPudding ? 8 : 0) + (path1 >= 4 ? 12 : 0) + (mangoPudding ? 18 : 0)
          : 72 + path2 * 4 + (path2 >= 3 ? 6 : 0) + (path2 >= 4 ? 10 : 0) + (path2 >= 5 ? 14 : 0)
      ),
      burst: path1 >= 5 ? 18 : path1 >= 4 ? 8 : path1 >= 3 ? 4 : 1,
      burstDelay: path1 >= 5 ? 0.045 : path1 >= 4 ? 0.06 : path1 >= 3 ? 0.075 : 0,
      holdDelay: 0.5,
      burnDamage: boiledEggs ? 10 + path1 * 2.2 : 0,
      burnDuration: boiledEggs ? 4.8 : 0,
      detectHidden: path2 >= 3,
      shells: path2 >= 2,
      shellDamage: path2 >= 5 ? 20 : path2 >= 4 ? 14 : path2 >= 2 ? 10 : 0,
      sticky: path2 >= 4,
      stickySlow: path2 >= 5 ? 0.28 : path2 >= 4 ? 0.42 : 1,
      stickyDuration: path2 >= 5 ? 4.4 : path2 >= 4 ? 2.8 : 0,
      shockwaves: path2 >= 5 ? 3 : path2 >= 4 ? 2 : 1,
      screenShake: path2 >= 5 ? 0.34 : 0,
      screenShakeDuration: path2 >= 5 ? 0.16 : 0,
      projectileSize: path2 >= 5 ? 18 : path2 >= 3 ? 14 : 10,
      whiteoutDuration: path2 >= 5 ? 0.9 : 0,
      yolkColor: path2 >= 5 ? "#ffd11a" : path2 >= 4 ? "#ffcf33" : path2 >= 3 ? "#ffcc4a" : "#ffce54",
      shieldMultiplier: path2 >= 5 ? 28 : path2 >= 4 ? 8 : 1,
      inaccuracy: path1 >= 5 ? CELL_SIZE * 1.7 : path2 >= 5 ? CELL_SIZE * 1.3 : 0,
      welfareHoming: false,
      welfareTurnRate: path1 >= 5 ? 11.5 : path1 >= 4 ? 9.5 : path1 >= 3 ? 6.8 : 5.2,
      welfareCruiseSpeed: path1 >= 5 ? 600 : path1 >= 4 ? 520 : path1 >= 3 ? 430 : 360,
      welfareApexHeight: path1 >= 5 ? 188 : path1 >= 4 ? 164 : path1 >= 3 ? 150 : 132,
      welfareSwerveStart: path1 >= 5 ? 52 : path1 >= 4 ? 42 : path1 >= 3 ? 30 : 18,
      alternatingPods: path1 >= 5,
      podReloadStep: magazineReloadStep,
      syrupDamage: path2 >= 5 ? 4.8 : 0,
      syrupRadius: path2 >= 5 ? CELL_SIZE * 3 : path2 >= 4 ? CELL_SIZE * 2.2 : 0,
      syrupTtl: path2 >= 5 ? 8.4 : 0,
      syrupTowerBuff: path2 >= 5 ? 1.26 : 1
    });
  }

  if (tower.type === "support") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const sentryCount = path1 >= 5 ? 4 : path1 >= 3 ? 3 : path1 >= 2 ? 2 : path1 >= 1 ? 1 : 0;
    return finalizeStats({
      range: CELL_SIZE * (2.55 + path1 * 0.28 + path2 * 0.14 + (path1 >= 4 ? 0.24 : 0) + (path1 >= 5 ? 0.4 : 0)),
      cooldown: sentryCount > 0 ? Math.max(0.92 - path1 * 0.08 - (path1 >= 3 ? 0.1 : 0) - (path1 >= 5 ? 0.06 : 0), 0.18) : Infinity,
      damage: sentryCount > 0 ? 1.35 + path1 * 1.05 + (path1 >= 3 ? 1.8 : 0) + (path1 >= 4 ? 2.2 : 0) + (path1 >= 5 ? 5.8 : 0) : 0,
      sentryCount,
      mortar: path1 >= 4,
      mortarCooldown: path1 >= 5 ? 2.6 : 4.2,
      mortarDamage: path1 >= 5 ? 20 : path1 >= 4 ? 11 : 0,
      mortarSplash: path1 >= 5 ? 68 : path1 >= 4 ? 46 : 0,
      mortarSpeed: path1 >= 5 ? 410 : 340,
      munitions: path2 >= 5,
      detectHiddenAura: path2 >= 4,
      attackSpeedAura: path2 >= 5 ? 1.58 : path2 >= 4 ? 1.34 : path2 >= 3 ? 1.18 : path2 >= 2 ? 1.08 : 1,
      helpMissile: path1 >= 5,
      helpMissileCooldown: path1 >= 5 ? 2.4 : 8.8,
      speed: path1 >= 5 ? 196 : 142,
      acceleration: path1 >= 5 ? 760 : 560,
      helpMissileDamage: path1 >= 5 ? 55 : 0,
      splash: path1 >= 5 ? 28 : 0,
      homing: 9.5,
      shrapnel: false,
      clusters: false,
      rain: false,
      auraRadius: CELL_SIZE * (2 + path2 * 0.18 + (path2 >= 5 ? 0.22 : 0))
    });
  }

  if (tower.type === "treasury") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const waveCash = path1 >= 5
      ? 800
      : 5
        + (path1 >= 1 ? 2 : 0)
        + (path1 >= 2 ? 5 : 0)
        + (path1 >= 3 ? 18 : 0)
        + (path1 >= 4 ? 80 : 0);
    const loanAmount = path2 >= 5 ? 900 : path2 >= 4 ? 320 : 0;
    const loanRepayTotal = path2 >= 5 ? 1200 : path2 >= 4 ? 430 : 0;
    const loanRounds = path2 >= 5 ? 5 : path2 >= 4 ? 4 : 0;
    return finalizeStats({
      range: CELL_SIZE * (2.15 + (path1 >= 5 ? 0.55 : 0)),
      cooldown: Infinity,
      damage: 0,
      waveCash,
      enemyDropMultiplier: path2 >= 5 ? 1.8 : path2 >= 4 ? 1.5 : path2 >= 3 ? 1.32 : path2 >= 2 ? 1.18 : path2 >= 1 ? 1.08 : 1,
      enemyDropFlatBonus: 0,
      bankEnabled: path2 >= 3,
      bankCap: path2 >= 5 ? 2400 : path2 >= 4 ? 600 : path2 >= 3 ? 120 : 0,
      loanAmount,
      loanRepayTotal,
      loanRounds,
      tradeEmpireAura: path1 >= 5 ? 1.2 : 0,
      auraRadius: CELL_SIZE * (2.2 + (path1 >= 5 ? 0.8 : 0))
    });
  }

  if (tower.type === "orb") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const orbCount = path1 >= 5 ? 8 : path1 >= 3 ? 5 : path1 >= 2 ? 3 : 2;
    const rotationsPerSecond = 0.7
      + path1 * 0.18
      + (path1 >= 4 ? 0.32 : 0)
      + (path1 >= 5 ? 0.26 : 0);
    const cooldown = 1 / Math.max(orbCount * rotationsPerSecond, 0.01);
    return finalizeStats({
      range: CELL_SIZE * 1.65,
      cooldown,
      damage: 3.2 + path1 * 1.1 + (path1 >= 4 ? 3.4 : 0) + (path1 >= 5 ? 7.6 : 0) + (path2 >= 5 ? 10.4 : 0),
      orbitRadius: CELL_SIZE,
      orbCount,
      rotationsPerSecond,
      regenerationTime: Math.max(0.7, 4.8 - (path2 >= 1 ? 1.7 : 0) - (path1 >= 5 ? 0.7 : 0) - (path2 >= 5 ? 0.9 : 0)),
      orbHitsToLive: 10 + (path2 >= 2 ? 4 : 0) + (path1 >= 5 ? 4 : 0) + (path2 >= 5 ? 10 : 0),
      pierce: 10 + (path2 >= 2 ? 4 : 0) + (path1 >= 5 ? 4 : 0) + (path2 >= 5 ? 10 : 0),
      contactRadius: 14 + (path1 >= 4 ? 2 : 0) + (path1 >= 5 ? 2 : 0),
      smartOrbs: path2 >= 3,
      adaptiveOrbs: path2 >= 4,
      empoweredOrbs: path2 >= 5,
      splash: path2 >= 3 ? 20 + (path2 >= 5 ? 18 : 0) : 0,
      burnDamage: path2 >= 3 ? 2.8 + (path1 >= 4 ? 1.3 : 0) + (path2 >= 5 ? 4.1 : 0) : 0,
      burnDuration: path2 >= 3 ? 2.8 + (path2 >= 5 ? 1.4 : 0) : 0,
      orbStun: path2 >= 3 ? 0.12 : 0,
      singularityStun: path2 >= 5 ? 0.12 : 0,
      orbSlow: path2 >= 3 ? (path2 >= 5 ? 0.42 : 0.6) : 1,
      orbSlowDuration: path2 >= 3 ? 1.15 + (path2 >= 5 ? 0.65 : 0) : 0,
      shieldMultiplier: path2 >= 3 ? 5 + (path2 >= 5 ? 4 : 0) : 1
    });
  }

  if (tower.type === "gate") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const acidAmp = path1 >= 5 ? 3.45 : path1 >= 4 ? 1.52 : path1 >= 3 ? 1.18 : path1 >= 2 ? 1.05 : 1;
    const acidDuration = 2.15
      + (path1 >= 3 ? 0.6 : 0)
      + (path1 >= 4 ? 2.4 : 0)
      + (path1 >= 5 ? 5.4 : 0)
      + (path2 >= 2 ? 0.15 : 0)
      + (path2 >= 4 ? 2.2 : 0)
      + (path2 >= 5 ? 2.4 : 0);
    return finalizeStats({
      range: CELL_SIZE * (2.45 + path2 * 0.16 + path1 * 0.08),
      cooldown: Math.max(1.08 - path2 * 0.1 - (path2 >= 4 ? 0.1 : 0) - (path2 >= 5 ? 0.05 : 0), 0.22),
      damage: 0.22 + path2 * 0.12 + (path2 >= 3 ? 0.16 : 0) + (path2 >= 4 ? 0.58 : 0) + (path2 >= 5 ? 1.5 : 0),
      acidDot: 1.45 + path2 * 0.62 + path1 * 0.26 + (path2 >= 4 ? 1.7 : 0) + (path2 >= 5 ? 4.6 : 0),
      acidDuration,
      acidAmp,
      enemyDropFlatBonus: path1 >= 5 ? 8 : path1 >= 4 ? 4 : path1 >= 3 ? 2 : path1 >= 2 ? 1 : 0,
      enemyDropMultiplier: 1,
      spraySlow: Math.max(0.96 - path2 * 0.03, 0.8),
      spraySlowDuration: 0.36 + path2 * 0.06,
      detectHidden: true
    });
  }

  if (tower.type === "tesla") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const supercharge = path1 >= 5;
    const electrocannon = path2 >= 5;
    const path1Chains = [1, 1, 2, 2, 3, 3];
    const path2Chains = [1, 1, 1, 3, 4, 8];
    const topPathCooldowns = [0.46, 0.4, 0.34, 0.24, 0.18, 0.125];
    const baseCooldown = electrocannon ? Math.max(1.12 - path1 * 0.045 - (path2 >= 5 ? 0.03 : 0), 0.64) : topPathCooldowns[path1];
    const rawStun = electrocannon
      ? 1.54
      : path2 >= 4
      ? 0.78
      : 0.016 + path2 * 0.007 + (path1 >= 4 ? 0.006 : 0) + (supercharge ? 0.052 : 0);
    const rawFieldStun = path2 >= 4 ? 0.44 : 0.028;
    return finalizeStats({
      range: CELL_SIZE * (2.55 + path2 * 0.08),
      cooldown: baseCooldown,
      damage: (electrocannon ? 2.4 : 1.55) + path2 * (electrocannon ? 0.5 : 1.02) + (path2 >= 3 ? (electrocannon ? 0.35 : 0.7) : 0) + (path2 >= 4 ? (electrocannon ? 1.1 : 2.8) : 0),
      chainCount: Math.max(path1Chains[path1], path2Chains[path2]),
      splash: electrocannon ? 34 : 0,
      stun: rawStun,
      chainSlow: path1 >= 4 ? 0.75 : 1,
      field: path2 >= 3,
      fieldDamage: path2 >= 5 ? 1.2 : path2 >= 4 ? 1.3 : path2 >= 3 ? 0.34 : 0.2,
      fieldStun: rawFieldStun,
      fieldCooldown: path2 >= 5 ? 0.6 : path2 >= 4 ? 0.72 : 0.9,
      detectHidden: path2 >= 3,
      supercharge,
      electrocannon,
      fieldRadius: CELL_SIZE * (path2 >= 5 ? 3.2 : path2 >= 4 ? 2.55 : 2.1),
      fieldZapCount: path2 >= 5 ? 5 : path2 >= 4 ? 2 : 1,
      superchargeCap: supercharge ? 24 : 0,
      superchargeChargeRate: supercharge ? 2 : 0,
      superchargeBurstCooldown: supercharge ? (1 / 15) : 0
    });
  }

  if (tower.type === "missile") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const heavyDart = path2 >= 3;
    const blastCore = path1 >= 3;
    const baseSplash = path1 >= 2 ? 22 : path1 >= 1 ? 16 : 12;
    return finalizeStats({
      range: CELL_SIZE * (4.8 + path1 * 0.34 + (path1 >= 5 ? 0.5 : 0)),
      cooldown: heavyDart ? Math.max(0.96 - (path2 - 3) * 0.12 - (path2 >= 5 ? 0.04 : 0), 0.38) : Math.max(0.92 - path1 * 0.05 - (path1 >= 4 ? 0.12 : 0) - (path1 >= 5 ? 0.06 : 0), 0.24),
      damage: heavyDart
        ? (path2 >= 5 ? 102 : 11 + path2 * 3.35 + (path2 >= 3 ? 2.6 : 0) + (path2 >= 4 ? 7.4 : 0))
        : path1 >= 5
          ? 81
          : path1 >= 4
            ? 55
            : 4.6 + path2 * 1.55 + (path1 >= 3 ? 2 : 0),
      splash: heavyDart ? 0 : blastCore ? (40 + path1 * 4 + 12 + (path1 >= 4 ? 18 : 0) + (path1 >= 5 ? 42 : 0)) / 1.5 : baseSplash,
      speed: heavyDart ? 520 + (path2 - 3) * 60 + (path2 >= 5 ? 80 : 0) : 120 + (path1 >= 3 ? 120 : 0) + (path1 >= 4 ? 40 : 0) + (path1 >= 5 ? 95 : 0),
      acceleration: heavyDart ? 0 : 520 + (path1 >= 3 ? 220 : 0) + (path1 >= 4 ? 120 : 0) + (path1 >= 5 ? 240 : 0),
      burst: path1 >= 5 ? 14 : path1 >= 4 ? 4 : 1,
      burstDelay: path1 >= 5 ? 0.08 : path1 >= 4 ? 0.2 : 0,
      homing: heavyDart || !blastCore ? 0 : (path1 >= 5 ? 16.5 : path1 >= 4 ? 12.2 : 10.2),
      shrapnel: heavyDart ? false : (blastCore && path2 >= 3),
      clusters: heavyDart ? false : (blastCore && path2 >= 4),
      rain: heavyDart ? false : (blastCore && path2 >= 5),
      heavyDart,
      pierce: heavyDart ? (path2 >= 5 ? 26 : path2 >= 4 ? 15 : 4) : 0
    });
  }

  if (tower.type === "trapper") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const turretMode = path1 >= 3;
    const lifespan = path2 >= 5 ? 450 : 30 + (path2 >= 1 ? 15 : 0) + (path1 >= 4 ? 15 : 0) + (path1 >= 5 ? 35 : 0);
    return finalizeStats({
      range: CELL_SIZE * (2.95 + path1 * 0.08 + path2 * 0.08),
      cooldown: Math.max(2.35 - path1 * 0.32 - (path1 >= 4 ? 0.34 : 0) - (path1 >= 5 ? 0.38 : 0), 0.34),
      damage: 1,
      trapRadius: 14 + tower.level * 2,
      trapUses: path2 >= 2 ? 12 : 6,
      trapLifetime: lifespan,
      sticky: path2 >= 3,
      slow: path2 >= 3 ? 0.55 : 1,
      duration: path2 >= 3 ? 1.9 + path2 * 0.25 + (path2 >= 4 ? 0.9 : 0) + (path2 >= 5 ? 1.9 : 0) : 0,
      constructCount: path2 >= 3 ? 3 : 1,
      mine: path2 >= 4,
      mango: path2 >= 5,
      turretMode,
      detectHidden: !turretMode,
      turretCap: path1 >= 5 ? 42 : path1 >= 4 ? 22 : path1 >= 3 ? 8 : 0,
      turretCooldown: Math.max(0.78 - (path1 >= 4 ? 0.18 : 0) - (path1 >= 5 ? 0.3 : 0), 0.1),
      turretDamage: 2.4 + path2 * 0.72 + (path1 >= 3 ? 0.8 : 0) + (path1 >= 4 ? 2.8 : 0) + (path1 >= 5 ? 6.8 : 0),
      turretRange: CELL_SIZE * (2.15 + path2 * 0.08 + (path1 >= 4 ? 0.42 : 0) + (path1 >= 5 ? 0.8 : 0)),
      turretBarrels: path1 >= 5 ? 4 : path1 >= 4 ? 2 : 1
    });
  }

  if (tower.type === "drone") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const baseRange = CELL_SIZE * (5.75 + levelBonus * 0.14 + (path1 >= 1 ? 0.42 : 0) + (path1 >= 2 ? 0.22 : 0)) * (path1 >= 5 ? 1.08 : 1);
    const supportCount = path2 >= 5 ? 7 : path2 >= 3 ? 3 : 0;
    const mainGuns = path1 >= 5 ? 5 : path2 >= 4 ? 4 : path1 >= 2 ? 2 : 1;
    const supportGuns = path2 >= 4 ? 2 : 1;
    return finalizeStats({
      range: baseRange,
      cooldown: Math.max(0.52 - levelBonus * 0.035 - path2 * 0.04 - (path2 >= 4 ? 0.06 : 0) - (path1 >= 5 ? 0.16 : 0), 0.06),
      damage: 1 + levelBonus * 0.34,
      droneRange: CELL_SIZE * (1.5 + levelBonus * 0.08 + (path1 >= 2 ? 0.24 : 0)),
      droneSpeed: 238 + levelBonus * 12 + path2 * 34 + (path1 >= 4 ? 26 : 0) + (path1 >= 5 ? 58 : 0),
      detectHidden: path1 >= 1,
      bulletGuns: mainGuns,
      bulletDamage: 1.05 + levelBonus * 0.3 + (path1 >= 3 ? 0.25 : 0),
      bulletPierce: path2 >= 5 ? 4 : path2 >= 4 ? 3 : path2 >= 2 ? 2 : 0,
      rocket: path1 >= 3,
      rocketCooldown: path1 >= 5 ? 0.18 : path1 >= 4 ? 0.42 : 0.7,
      rocketDamage: path1 >= 5 ? 65 : path1 >= 4 ? 32 : path1 >= 3 ? 14 : 0,
      rocketSplash: path1 >= 5 ? 72 : path1 >= 4 ? 48 : path1 >= 3 ? 28 : 24,
      rocketSpeed: path1 >= 5 ? 240 : path1 >= 4 ? 170 : 132,
      rocketHoming: path1 >= 5 ? 15.5 : path1 >= 4 ? 13.2 : 11.4,
      supportCount,
      supportGuns: path2 >= 5 ? 4 : supportGuns,
      supportDamage: 0.45 + levelBonus * 0.18 + (path2 >= 3 ? 0.16 : 0) + (path2 >= 4 ? 0.52 : 0) + (path2 >= 5 ? 1.4 : 0),
      supportRange: CELL_SIZE * (path2 >= 5 ? 1.8 : 1.34),
      supportCooldown: Math.max(0.92 - path2 * 0.05 - (path2 >= 4 ? 0.08 : 0) - (path2 >= 5 ? 0.06 : 0), 0.22),
      attackDrone: path1 >= 5,
      attackDroneMissileVolley: path1 >= 5 ? 6 : 1,
      relocateTower: path2 >= 3,
      relocateBlock: path2 >= 5,
      relocateTowerSpeedMultiplier: path2 >= 5 ? 2 : 1
    });
  }

  return finalizeStats({ range: CELL_SIZE * (4.6 + levelBonus * 0.22), cooldown: Math.max(0.95 - levelBonus * 0.05, 0.45), damage: 1.8 + levelBonus * 0.65 });
}

function canSeeEnemy(enemy, detectHidden = false) {
  return !enemy.hidden || detectHidden;
}

function canHitArmored(enemy, damageType) {
  const damageClass = damageClassForType(damageType);
  return !enemy.armored || enemy.armorHp <= 0 || damageClass === "energy" || damageClass === "explosive";
}

function supportBuffsForTower(tower) {
  const buffs = {
    munitions: false,
    detectHidden: false,
    attackSpeedMultiplier: 1
  };

  if (!tower) {
    return buffs;
  }

  for (const ally of towers) {
    if (ally.id === tower.id || ally.type !== "support") {
      continue;
    }

    const stats = towerStats(ally);
    if (Math.hypot(tower.centerX - ally.centerX, tower.centerY - ally.centerY) > stats.auraRadius) {
      continue;
    }

    buffs.munitions ||= Boolean(stats.munitions);
    buffs.detectHidden ||= Boolean(stats.detectHiddenAura);
    buffs.attackSpeedMultiplier = Math.max(buffs.attackSpeedMultiplier, stats.attackSpeedAura || 1);
  }

  for (const effect of effects) {
    if (effect.kind !== "puddle" || (effect.towerAttackSpeed || 1) <= 1) {
      continue;
    }

    if (Math.hypot(tower.centerX - effect.x, tower.centerY - effect.y) <= effect.radius) {
      buffs.attackSpeedMultiplier = Math.max(buffs.attackSpeedMultiplier, effect.towerAttackSpeed || 1);
    }
  }

  return buffs;
}

function applySupportBuffsToStats(tower, baseStats = towerStats(tower)) {
  if (!tower) {
    return { ...baseStats };
  }

  const buffs = supportBuffsForTower(tower);
  const stats = { ...baseStats };
  const attackSpeedMultiplier = Math.max(stats.attackSpeedMultiplier || 1, buffs.attackSpeedMultiplier || 1);
  const scaleCooldown = (value) => Number.isFinite(value) && value > 0 ? value / attackSpeedMultiplier : value;

  stats.attackSpeedMultiplier = attackSpeedMultiplier;
  stats.detectHidden = tower.type === "trapper" && stats.turretMode
    ? Boolean(stats.detectHidden)
    : Boolean(stats.detectHidden || buffs.detectHidden);
  stats.munitions = Boolean(stats.munitions || buffs.munitions);
  stats.cooldown = scaleCooldown(stats.cooldown);
  stats.fieldCooldown = scaleCooldown(stats.fieldCooldown);
  stats.pulseCooldown = scaleCooldown(stats.pulseCooldown);
  stats.turretCooldown = scaleCooldown(stats.turretCooldown);
  stats.rocketCooldown = scaleCooldown(stats.rocketCooldown);
  stats.supportCooldown = scaleCooldown(stats.supportCooldown);
  stats.helpMissileCooldown = scaleCooldown(stats.helpMissileCooldown);
  stats.mortarCooldown = scaleCooldown(stats.mortarCooldown);
  stats.burstDelay = scaleCooldown(stats.burstDelay);
  stats.holdDelay = scaleCooldown(stats.holdDelay);
  stats.podReloadStep = scaleCooldown(stats.podReloadStep);
  stats.regenerationTime = scaleCooldown(stats.regenerationTime);

  return stats;
}

function towerHasHiddenDetection(tower, stats = towerStats(tower)) {
  return Boolean(stats.detectHidden || supportBuffsForTower(tower).detectHidden);
}

function effectiveTowerDamageType(tower, baseType, stats = towerStats(tower)) {
  if (baseType === "laser" || baseType === "shock" || baseType === "explosion") {
    return baseType;
  }

  const buffs = supportBuffsForTower(tower);
  if (tower.type === "dippy" && baseType === "bullet") {
    return tower.path2 >= 4 ? "chemical" : "explosion";
  }
  return buffs.munitions ? "explosion" : baseType;
}

function activeShieldSourceForEnemy(enemy) {
  let nearest = null;
  let nearestDistance = Infinity;

  for (const source of enemies) {
    const isHydraShieldHead = source.key === "hydra" && source.hydraStage === 3 && source.hp > 0;
    const shieldAvailable = isHydraShieldHead ? source.shielded : (source.shieldHp || 0) > 0;
    if ((!source.shielded && !isShieldEnemy(source)) || source.hp <= 0 || !shieldAvailable) {
      continue;
    }

    if (enemy.key === "hydra" && source.key === "hydra" && enemy.hydraGroupId && enemy.hydraGroupId === source.hydraGroupId) {
      return source;
    }

    const distance = Math.hypot(enemy.x - source.x, enemy.y - source.y);
    if (distance <= (source.shieldRadius || 0) && distance < nearestDistance) {
      nearest = source;
      nearestDistance = distance;
    }
  }

  return nearest;
}

function createShieldHitTracker() {
  return { hitShield: false };
}

function addTowerDamage(towerId, amount) {
  if (!towerId || !Number.isFinite(amount) || amount <= 0) {
    return;
  }
  const tower = towers.find((entry) => entry.id === towerId);
  if (tower) {
    tower.totalDamageDealt = (tower.totalDamageDealt || 0) + amount;
    refreshOpenTowerPopup(towerId);
  }
}

function handleDroneCommandClick(x, y, point = null) {
  if (!droneCommandState) {
    return false;
  }

  if (droneCommandState.stage === "return") {
    return false;
  }

  const commandTower = towers.find((entry) => entry.id === droneCommandState.towerId && entry.type === "drone");
  if (!commandTower) {
    droneCommandState = null;
    return false;
  }

  if (droneCommandState.stage === "selectTarget") {
    if (droneCommandState.mode === "tower") {
      const targetTower = relocateSelectableTowerAtPoint(point, commandTower) || towerAtCell(x, y);
      if (!targetTower || targetTower.id === commandTower.id || targetTower.upgradeLocked) {
        setMessage("Select a tower to relocate.", 1.4);
        return true;
      }
      addPulse(targetTower.centerX, targetTower.centerY, towerRelocationSelectionRadius(targetTower), "rgba(255, 225, 92, 0.72)");
      droneCommandState.targetTowerId = targetTower.id;
      droneCommandState.targetType = targetTower.type;
      droneCommandState.stage = "selectDestination";
      setMessage("Select destination.", 6);
      return true;
    }

    const blockId = grid[y][x].blockId;
    const block = blockId !== null ? blocks.get(blockId) : null;
    if (!block || block.locked) {
      setMessage("Click a movable block to relocate.", 1.4);
      return true;
    }
    droneCommandState.blockId = block.id;
    droneCommandState.stage = "selectDestination";
    setMessage("Now click the destination anchor for that block and its towers.", 1.5);
    return true;
  }

  if (droneCommandState.stage === "selectDestination") {
    if (droneCommandState.mode === "tower") {
      const targetTower = towers.find((entry) => entry.id === droneCommandState.targetTowerId);
      if (!targetTower) {
        cancelDroneCommand("Move target lost.");
        return true;
      }
      if (!canRelocateTowerTo(targetTower, x, y)) {
        setMessage("That tower cannot be moved there.", 1.4);
        return true;
      }
      droneCommandState.destination = { x, y };
      droneCommandState.stage = "pickup";
      setMessage("Drone wing moving tower.", 1.4);
      return true;
    }

    const block = blocks.get(droneCommandState.blockId);
    if (!block) {
      cancelDroneCommand("Move target lost.");
      return true;
    }
    if (!canRelocateBlockTo(block, x, y)) {
      setMessage("That block cannot be moved there.", 1.4);
      return true;
    }
    droneCommandState.destination = { x, y };
    droneCommandState.blockCells = blockCellsFromAnchor(block, x, y);
    droneCommandState.stage = "pickup";
    setMessage("Drone wing moving block.", 1.4);
    return true;
  }

  return true;
}

function normalizeAngle(angle) {
  let next = angle;
  while (next > Math.PI) {
    next -= Math.PI * 2;
  }
  while (next < -Math.PI) {
    next += Math.PI * 2;
  }
  return next;
}

function smoothAngle(current, target, rate) {
  const delta = normalizeAngle(target - current);
  if (Math.abs(delta) <= rate) {
    return normalizeAngle(target);
  }
  return normalizeAngle(current + Math.sign(delta) * rate);
}

function damageClassForType(damageType) {
  if (damageType === "laser" || damageType === "shock") {
    return "energy";
  }
  if (damageType === "explosion") {
    return "explosive";
  }
  if (damageType === "chemical" || damageType === "poison" || damageType === "acid" || damageType === "freeze") {
    return "chemical";
  }
  return "kinetic";
}

function damageEnemy(enemy, amount, damageType, options = {}) {
  if (!enemy || amount <= 0) {
    return false;
  }

  const damageClass = damageClassForType(damageType);
  const acceptedClasses = options.damageClasses || [damageClass];
  if (enemy.allowedDamageClasses && !acceptedClasses.some((entry) => enemy.allowedDamageClasses.includes(entry))) {
    return false;
  }
  const shieldMultiplier = options.shieldMultiplier || 1;
  let { stun = 0, slow = null, slowDuration = 0, burnDamage = 0, burnDuration = 0, dotBarColor = null } = options;
  if (stun > 0) {
    stun *= enemy.stunResistance || 1;
  }
  if (slow !== null && slow < 1) {
    const slowResistance = enemy.slowResistance || 1;
    slow = 1 - (1 - slow) * slowResistance;
    slowDuration *= slowResistance;
  }
  const shieldSource = activeShieldSourceForEnemy(enemy);
  if (shieldSource) {
    if (options.shieldHitTracker?.hitShield) {
      return true;
    }
    if (options.shieldHitTracker) {
      options.shieldHitTracker.hitShield = true;
    }
    const shieldDamage = damageClass === "energy"
      ? amount * ((shieldSource.tier || 1) >= 3 ? 3 : 2.6)
      : amount * shieldMultiplier;
    if (shieldSource.key === "hydra" && shieldSource.hydraStage === 3) {
      const hpBeforeShieldHead = shieldSource.hp;
      shieldSource.hp = Math.max(0, shieldSource.hp - shieldDamage);
      addTowerDamage(options.sourceTowerId, hpBeforeShieldHead - shieldSource.hp);
      shieldSource.healthBarLagHp = Math.max(shieldSource.healthBarLagHp || hpBeforeShieldHead, hpBeforeShieldHead);
      shieldSource.healthBarFlashTimer = 0.18;
      shieldSource.healthBarTint = null;
      shieldSource.healthBarTintTimer = 0;
      addPulse(shieldSource.x, shieldSource.y, shieldSource.shieldRadius || 18, "rgba(156, 209, 255, 0.38)");
      return true;
    }
    const shieldBefore = shieldSource.shieldHp || 0;
    shieldSource.shieldHp = Math.max(0, (shieldSource.shieldHp || 0) - shieldDamage);
    addTowerDamage(options.sourceTowerId, shieldBefore - (shieldSource.shieldHp || 0));
    addPulse(shieldSource.x, shieldSource.y, shieldSource.shieldRadius || 18, "rgba(156, 209, 255, 0.38)");
    if (shieldSource.shieldHp === 0) {
      shieldSource.shielded = false;
      shieldSource.shieldRadius = 0;
      addPulse(shieldSource.x, shieldSource.y, 24, "rgba(239, 247, 255, 0.6)");
    }
    return true;
  }

  const hydraShellHead = hydraDefenseHead(enemy, 2);
  if (hydraShellHead) {
    const hpBeforeShellHead = hydraShellHead.hp;
    hydraShellHead.hp = Math.max(0, hydraShellHead.hp - amount);
    addTowerDamage(options.sourceTowerId, hpBeforeShellHead - hydraShellHead.hp);
    hydraShellHead.healthBarLagHp = Math.max(hydraShellHead.healthBarLagHp || hpBeforeShellHead, hpBeforeShellHead);
    hydraShellHead.healthBarFlashTimer = 0.18;
    hydraShellHead.healthBarTint = null;
    hydraShellHead.healthBarTintTimer = 0;
    addPulse(hydraShellHead.x, hydraShellHead.y, 18, "rgba(255, 255, 255, 0.52)");
    return true;
  }

  const hydraArmorHead = hydraDefenseHead(enemy, 1);
  if (hydraArmorHead) {
    if (damageClass !== "energy" && damageClass !== "explosive") {
      return false;
    }
    const hpBeforeArmorHead = hydraArmorHead.hp;
    hydraArmorHead.hp = Math.max(0, hydraArmorHead.hp - amount);
    addTowerDamage(options.sourceTowerId, hpBeforeArmorHead - hydraArmorHead.hp);
    hydraArmorHead.healthBarLagHp = Math.max(hydraArmorHead.healthBarLagHp || hpBeforeArmorHead, hpBeforeArmorHead);
    hydraArmorHead.healthBarFlashTimer = 0.18;
    hydraArmorHead.healthBarTint = null;
    hydraArmorHead.healthBarTintTimer = 0;
    addPulse(hydraArmorHead.x, hydraArmorHead.y, 18, "#f3f7ff");
    return true;
  }

  if (enemy.key === "adapter") {
    if (!enemy.adapterImmunityClass) {
      enemy.adapterImmunityClass = damageClass;
      addPulse(enemy.x, enemy.y, CELL_SIZE * 1.4, ADAPTER_IMMUNITY_COLORS[damageClass] || "rgba(255, 225, 173, 0.9)");
      return false;
    }
    if (enemy.adapterImmunityClass === damageClass) {
      addPulse(enemy.x, enemy.y, CELL_SIZE * 0.95, ADAPTER_IMMUNITY_COLORS[damageClass] || "rgba(255,255,255,0.85)");
      return false;
    }
  }

  if (isDiamondEnemy(enemy)) {
    if (damageClass === "energy") {
      amount *= 0.45;
      stun = 0;
      slow = null;
      slowDuration = 0;
      burnDamage = 0;
      burnDuration = 0;
    } else if (damageClass === "explosive") {
      amount *= 0.65;
      burnDamage = 0;
      burnDuration = 0;
    }
  }

  if ((enemy.acidAmp || 1) > 1 && damageClass !== "chemical") {
    amount *= enemy.acidAmp;
  }

  const hpBefore = enemy.hp;
  if ((enemy.shellHp || 0) > 0) {
    const shellBefore = enemy.shellHp;
    enemy.shellHp = Math.max(0, enemy.shellHp - amount);
    addTowerDamage(options.sourceTowerId, shellBefore - enemy.shellHp);
    enemy.healthBarLagHp = Math.max(enemy.healthBarLagHp || hpBefore, hpBefore);
    enemy.healthBarFlashTimer = 0.18;
    enemy.healthBarTint = null;
    enemy.healthBarTintTimer = 0;
    if (enemy.shellHp === 0) {
      addPulse(enemy.x, enemy.y, 18, "rgba(255, 255, 255, 0.52)");
    }
  } else if (enemy.armored && enemy.armorHp > 0) {
    if (damageClass === "energy" || damageClass === "explosive") {
      const armorBefore = enemy.armorHp;
      enemy.armorHp = Math.max(0, enemy.armorHp - amount);
      addTowerDamage(options.sourceTowerId, armorBefore - enemy.armorHp);
      if (enemy.armorHp === 0) {
        addPulse(enemy.x, enemy.y, 18, "#f3f7ff");
      }
    } else {
      return false;
    }
  } else {
    enemy.hp -= amount;
    addTowerDamage(options.sourceTowerId, hpBefore - enemy.hp);
  }

  if (enemy.hp < hpBefore) {
    if (dotBarColor) {
      enemy.healthBarLagHp = enemy.hp;
      enemy.healthBarFlashTimer = 0;
      enemy.healthBarTint = dotBarColor;
      enemy.healthBarTintTimer = Math.max(enemy.healthBarTintTimer || 0, 0.24);
    } else {
      enemy.healthBarLagHp = Math.max(enemy.healthBarLagHp || hpBefore, hpBefore);
      enemy.healthBarFlashTimer = 0.18;
      enemy.healthBarTint = null;
      enemy.healthBarTintTimer = 0;
    }
  }

  if (stun > 0) {
    enemy.stunTimer = Math.max(enemy.stunTimer, stun);
  }

  if (slow !== null && slow < 1 && slowDuration > 0) {
    enemy.slowFactor = Math.min(enemy.slowFactor, slow);
    enemy.slowTimer = Math.max(enemy.slowTimer, slowDuration);
  }

  if (burnDamage > 0 && burnDuration > 0) {
    enemy.burnDamage = Math.max(enemy.burnDamage || 0, burnDamage);
    enemy.burnTimer = Math.max(enemy.burnTimer || 0, burnDuration);
    enemy.burnSourceTowerId = options.sourceTowerId || enemy.burnSourceTowerId || null;
  }

  return true;
}

function applyEnemyKnockback(enemy, amount) {
  if (!enemy || amount <= 0) {
    return;
  }
  enemy.progress = Math.max(-1.5, (enemy.progress || 0) - amount);
}

function canTowerDamageEnemy(tower, enemy, stats = towerStats(tower)) {
  if (enemy?.key === "hydra") {
    return true;
  }
  const effectiveType = effectiveTowerDamageType(tower, tower.type === "freezer"
    ? "freeze"
    : tower.type === "trapper"
    ? (stats.mine ? "explosion" : "trap")
    : tower.type === "drone"
    ? (stats.rocket ? "explosion" : "bullet")
    : tower.type === "orb"
    ? "explosion"
    : tower.type === "fireball"
    ? "explosion"
    : "bullet", stats);
  const effectiveClass = damageClassForType(effectiveType);
  if (enemy?.allowedDamageClasses && !enemy.allowedDamageClasses.includes(effectiveClass)) {
    return false;
  }

  if (tower.type === "missile" || tower.type === "laser") {
    return true;
  }

  if (tower.type === "support" || tower.type === "treasury") {
    return false;
  }

  if (tower.type === "crossbow") {
    return canHitArmored(enemy, effectiveType);
  }

  if (tower.type === "gate") {
    return canSeeEnemy(enemy, true) && !enemy.armored;
  }

  if (tower.type === "shotgun") {
    return canHitArmored(enemy, effectiveType);
  }

  if (tower.type === "tesla") {
    return canHitArmored(enemy, stats.electrocannon ? "laser" : "shock");
  }

  if (tower.type === "trapper") {
    if (stats.turretMode) {
      return canHitArmored(enemy, effectiveTowerDamageType(tower, "bullet", stats));
    }
    return canHitArmored(enemy, effectiveType);
  }

  if (tower.type === "freezer") {
    if (enemy.armored && enemy.armorHp > 0) {
      return Boolean(stats.antiArmor);
    }
    return true;
  }

  if (tower.type === "dippy") {
    return true;
  }

  if (tower.type === "fireball") {
    return canHitArmored(enemy, "explosion");
  }

  if (tower.type === "drone") {
    return canHitArmored(enemy, effectiveType);
  }

  if (tower.type === "orb") {
    return true;
  }

  return canHitArmored(enemy, "laser");
}

function enemiesInRange(originX, originY, range, detectHidden = false, requireLineOfSight = true) {
  return enemies.filter((enemy) => {
    const distance = Math.hypot(enemy.x - originX, enemy.y - originY);
    if (distance > range || !canSeeEnemy(enemy, detectHidden)) {
      return false;
    }

    return !requireLineOfSight || hasLineOfSight(originX, originY, enemy.x, enemy.y);
  });
}

function selectEnemyByPriority(candidates, priority = "first", cursorPoint = null) {
  if (candidates.length === 0) {
    return null;
  }

  if (priority === "random") {
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  if (priority === "hidden") {
    const hiddenTargets = candidates.filter((enemy) => enemy.hidden);
    if (hiddenTargets.length > 0) {
      return selectEnemyByPriority(hiddenTargets, "first");
    }
    return selectEnemyByPriority(candidates, "first");
  }

  if (priority === "cursor" && cursorPoint) {
    const scored = [...candidates].sort((left, right) =>
      Math.hypot(left.x - cursorPoint.x, left.y - cursorPoint.y) - Math.hypot(right.x - cursorPoint.x, right.y - cursorPoint.y)
      || right.progress - left.progress
    );
    return scored[0];
  }

  const scored = [...candidates].sort((left, right) => {
    const leftRemaining = enemyRemainingPathTiles(left);
    const rightRemaining = enemyRemainingPathTiles(right);
    if (priority === "last") {
      return rightRemaining - leftRemaining || left.progress - right.progress;
    }

    if (priority === "strong") {
      return right.maxHp - left.maxHp || right.hp - left.hp || right.progress - left.progress;
    }

    if (priority === "weak") {
      return left.hp - right.hp || left.maxHp - right.maxHp || right.progress - left.progress;
    }

    return leftRemaining - rightRemaining || right.progress - left.progress;
  });

  return scored[0];
}

function nearestEnemyInRange(tower, range, detectHidden = false) {
  const stats = towerStats(tower);
  const candidates = enemiesInRange(tower.centerX, tower.centerY, range, detectHidden, tower.type !== "dippy" && tower.type !== "drone")
    .filter((enemy) => Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) >= (stats.minRange || 0))
    .filter((enemy) => canTowerDamageEnemy(tower, enemy, stats));
  return selectEnemyByPriority(candidates, tower.targetPriority || "first");
}

function nearestSupportMissileTarget(tower, range, detectHidden = false) {
  const stats = towerStats(tower);
  const candidates = enemiesInRange(tower.centerX, tower.centerY, range, detectHidden, true)
    .filter((enemy) => Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) >= (stats.minRange || 0));
  return selectEnemyByPriority(candidates, "first");
}

function towerHasLineOfSightToPoint(tower, x, y) {
  if (!tower || tower.type === "dippy" || tower.type === "drone") {
    return true;
  }
  return hasLineOfSight(tower.centerX, tower.centerY, x, y);
}

function ensureOrbState(tower, stats) {
  const desiredCount = Math.max(0, stats.orbCount || 0);
  if (!Array.isArray(tower.orbs)) {
    tower.orbs = [];
  }
  while (tower.orbs.length < desiredCount) {
    tower.orbs.push({
      slot: tower.orbs.length,
      strikeCooldown: 0,
      hitCount: 0,
      regenerationTimer: 0
    });
  }
  if (tower.orbs.length > desiredCount) {
    tower.orbs = tower.orbs.slice(0, desiredCount);
  }
  tower.orbs.forEach((orb, index) => {
    orb.slot = index;
    orb.strikeCooldown = Math.max(0, orb.strikeCooldown || 0);
    orb.hitCount = Math.max(0, orb.hitCount || 0);
    orb.regenerationTimer = Math.max(0, orb.regenerationTimer || 0);
  });
  tower.orbRotation = tower.orbRotation || 0;
}

function orbTypeForEnemy(tower, stats, enemy) {
  const selected = tower.orbType || "explosive";
  if (selected !== "adaptive" || !stats.adaptiveOrbs) {
    return selected;
  }
  if ((activeShieldSourceForEnemy(enemy) || (enemy.shieldHp || 0) > 0 || enemy.shielded) && stats.smartOrbs) {
    return "energy";
  }
  const nearbyCount = enemies.filter((entry) => Math.hypot(entry.x - enemy.x, entry.y - enemy.y) <= CELL_SIZE * 1.2).length;
  if (nearbyCount >= 4 || enemy.armored || (enemy.shellHp || 0) > 0) {
    return "explosive";
  }
  if ((enemy.hp || 0) >= 45 || (enemy.reward || 0) >= 8) {
    return "concentrated";
  }
  return "explosive";
}

function displayedOrbType(tower, stats = towerStats(tower)) {
  const selected = tower.orbType || "explosive";
  if (selected !== "adaptive" || !stats.adaptiveOrbs) {
    return selected;
  }
  const candidates = enemiesInRange(tower.centerX, tower.centerY, stats.range, false, false);
  for (const mode of ["energy", "explosive", "concentrated"]) {
    if (candidates.some((enemy) => orbTypeForEnemy(tower, stats, enemy) === mode)) {
      return mode;
    }
  }
  return "adaptive";
}

function orbPalette(mode, stats = null) {
  if (mode === "energy") {
    return {
      fill: "#dcc2ff",
      glow: "rgba(220, 194, 255, 0.76)"
    };
  }
  if (mode === "concentrated") {
    return {
      fill: "#b8efff",
      glow: "rgba(184, 239, 255, 0.76)"
    };
  }
  if (mode === "adaptive") {
    return {
      fill: "#d7c4ff",
      glow: "rgba(215, 196, 255, 0.7)"
    };
  }
  if (mode === "explosive" && stats?.smartOrbs) {
    return {
      fill: "#ffd0a8",
      glow: "rgba(255, 208, 168, 0.82)"
    };
  }
  return {
    fill: "#ffffff",
    glow: "rgba(255, 255, 255, 0.82)"
  };
}

function orbTargetsNearPoint(tower, stats, x, y) {
  return enemies
    .filter((enemy) => canSeeEnemy(enemy, false))
    .filter((enemy) => Math.hypot(enemy.x - x, enemy.y - y) <= (stats.contactRadius || 14))
    .sort((left, right) => {
      const leftDistance = Math.hypot(left.x - x, left.y - y);
      const rightDistance = Math.hypot(right.x - x, right.y - y);
      return leftDistance - rightDistance;
    });
}

function triggerOrbSplash(tower, stats, centerEnemy, centerX, centerY) {
  const splash = stats.splash || 0;
  if (splash <= 0) {
    return;
  }
  addPulse(centerX, centerY, splash, "rgba(159, 208, 255, 0.26)");
  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - centerX, enemy.y - centerY);
    if (distance > splash) {
      continue;
    }
    damageEnemy(enemy, stats.damage * 0.55 * (1 - distance / Math.max(splash, 1) * 0.45), "explosion", {
      sourceTowerId: tower.id
    });
  }
}

function fireOrbHit(tower, orb, enemy, stats, mode, orbX, orbY) {
  const empowered = Boolean(stats.empoweredOrbs);
  if (mode === "energy") {
    const hit = damageEnemy(enemy, stats.damage, "laser", {
      burnDamage: stats.burnDamage,
      burnDuration: stats.burnDuration,
      stun: empowered ? (stats.singularityStun || 0) : 0,
      shieldMultiplier: stats.shieldMultiplier,
      sourceTowerId: tower.id
    });
    if (hit && empowered) {
      triggerOrbSplash(tower, stats, enemy, enemy.x, enemy.y);
    }
    return hit;
  }
  if (mode === "concentrated") {
    const hit = damageEnemy(enemy, stats.damage, "bullet", {
      burnDamage: empowered ? stats.burnDamage : 0,
      burnDuration: empowered ? stats.burnDuration : 0,
      stun: empowered ? (stats.singularityStun || 0) : 0,
      slow: stats.orbSlow < 1 ? stats.orbSlow : null,
      slowDuration: stats.orbSlowDuration || 0,
      sourceTowerId: tower.id
    });
    if (hit) {
      if (empowered) {
        triggerOrbSplash(tower, stats, enemy, enemy.x, enemy.y);
      }
      addBeam(orbX, orbY, enemy.x, enemy.y, "rgba(184, 239, 255, 0.88)", 1.8, 0.05);
    }
    return hit;
  }
  const hit = damageEnemy(enemy, stats.damage, "explosion", {
    burnDamage: empowered ? stats.burnDamage : 0,
    burnDuration: empowered ? stats.burnDuration : 0,
    stun: empowered ? (stats.singularityStun || 0) : 0,
    sourceTowerId: tower.id
  });
  if (hit) {
    triggerOrbSplash(tower, stats, enemy, enemy.x, enemy.y);
  }
  return hit;
}

function updateOrbTower(tower, stats, deltaTime) {
  ensureOrbState(tower, stats);
  const direction = (tower.targetPriority || "clockwise") === "anticlockwise" ? -1 : 1;
  tower.orbRotation = normalizeAngle((tower.orbRotation || 0) + direction * deltaTime * Math.PI * 2 * (stats.rotationsPerSecond || 0));
  const spacing = tower.orbs.length > 0 ? (Math.PI * 2) / tower.orbs.length : 0;
  const maxHits = Math.max(1, Math.round(stats.orbHitsToLive || 1));
  const waveRunning = isWaveRunning();

  for (const orb of tower.orbs) {
    orb.strikeCooldown = Math.max(0, orb.strikeCooldown - deltaTime);
    orb.hitCount = Math.min(maxHits, Math.max(0, orb.hitCount || 0));
    if (waveRunning && orb.hitCount > 0) {
      orb.regenerationTimer = Math.max(0, (orb.regenerationTimer || 0) - deltaTime);
      if (orb.regenerationTimer === 0) {
        orb.hitCount = Math.max(0, orb.hitCount - 1);
        orb.regenerationTimer = orb.hitCount > 0 ? (stats.regenerationTime || 1) : 0;
      }
    } else if (!waveRunning) {
      orb.regenerationTimer = Math.max(0, orb.regenerationTimer || 0);
    }

    const orbDisabled = orb.hitCount >= maxHits;
    const angle = tower.orbRotation + spacing * orb.slot;
    orb.angle = angle;
    orb.x = tower.centerX + Math.cos(angle) * (stats.orbitRadius || CELL_SIZE);
    orb.y = tower.centerY + Math.sin(angle) * (stats.orbitRadius || CELL_SIZE);
    if (orbDisabled || orb.strikeCooldown > 0) {
      continue;
    }

    const nearbyEnemies = orbTargetsNearPoint(tower, stats, orb.x, orb.y);
    if (nearbyEnemies.length === 0) {
      continue;
    }

    const pierceLimit = Math.max(1, Math.round(stats.pierce || 1));
    let hitsThisPass = 0;
    for (const enemy of nearbyEnemies.slice(0, pierceLimit)) {
      const mode = orbTypeForEnemy(tower, stats, enemy);
      if (fireOrbHit(tower, orb, enemy, stats, mode, orb.x, orb.y)) {
        hitsThisPass += 1;
        addPulse(
          orb.x,
          orb.y,
          8,
          mode === "energy"
            ? "rgba(220, 194, 255, 0.46)"
            : mode === "concentrated"
              ? "rgba(184, 239, 255, 0.44)"
              : stats.smartOrbs
                ? "rgba(255, 208, 168, 0.44)"
                : "rgba(255, 255, 255, 0.4)"
        );
      }
    }

    if (hitsThisPass > 0) {
      orb.hitCount += hitsThisPass;
      orb.strikeCooldown = stats.cooldown;
      if (orb.hitCount >= maxHits) {
        orb.hitCount = maxHits;
        orb.regenerationTimer = waveRunning ? (stats.regenerationTime || 1) : Math.max(orb.regenerationTimer || 0, stats.regenerationTime || 1);
        addBurstParticles(orb.x, orb.y, 6, "rgba(181, 225, 255, 0.75)", 20, 60, 0.05, 0.14);
      } else if (waveRunning && orb.hitCount > 0 && orb.regenerationTimer === 0) {
        orb.regenerationTimer = stats.regenerationTime || 1;
      }
    }
  }
}

function clampPointToRadius(point, centerX, centerY, radius) {
  const dx = point.x - centerX;
  const dy = point.y - centerY;
  const distance = Math.hypot(dx, dy);
  if (distance <= radius || distance === 0) {
    return { x: point.x, y: point.y };
  }
  return {
    x: centerX + (dx / distance) * radius,
    y: centerY + (dy / distance) * radius
  };
}

function entityRenderOffset(entity) {
  return {
    x: entity?.renderOffsetX || 0,
    y: entity?.renderOffsetY || 0
  };
}

function decayRenderOffset(entity, deltaTime) {
  if (!entity) {
    return;
  }
  const easing = Math.max(0, 1 - deltaTime * 6.5);
  entity.renderOffsetX = (entity.renderOffsetX || 0) * easing;
  entity.renderOffsetY = (entity.renderOffsetY || 0) * easing;
  if (Math.abs(entity.renderOffsetX || 0) < 0.2) {
    entity.renderOffsetX = 0;
  }
  if (Math.abs(entity.renderOffsetY || 0) < 0.2) {
    entity.renderOffsetY = 0;
  }
}

function droneCursorAnchor(tower, stats) {
  const sourcePoint = tower.cursorPoint || hoverPoint || { x: tower.centerX, y: tower.centerY };
  return stats.attackDrone
    ? { x: sourcePoint.x, y: sourcePoint.y }
    : clampPointToRadius(sourcePoint, tower.centerX, tower.centerY, stats.range);
}

function droneInterceptPoint(target, droneRange) {
  if (!target) {
    return null;
  }
  const leadDistance = Math.min(Math.max(droneRange * 0.9, 28), 72);
  const base = baseCenter(target);
  const angle = Math.atan2(base.y - target.y, base.x - target.x);
  return {
    x: target.x + Math.cos(angle) * leadDistance,
    y: target.y + Math.sin(angle) * leadDistance
  };
}

function hasLineOfSight(x1, y1, x2, y2) {
  if (isCliffsMap()) {
    const originCell = { x: Math.floor(x1 / CELL_SIZE), y: Math.floor(y1 / CELL_SIZE) };
    const targetCell = { x: Math.floor(x2 / CELL_SIZE), y: Math.floor(y2 / CELL_SIZE) };
    if (cliffSideForCell(originCell) === "left" && cliffSideForCell(targetCell) === "right") {
      return false;
    }
  }
  const steps = Math.ceil(Math.hypot(x2 - x1, y2 - y1) / 8);

  for (let index = 1; index < steps; index += 1) {
    const t = index / steps;
    const px = x1 + (x2 - x1) * t;
    const py = y1 + (y2 - y1) * t;
    const cx = Math.floor(px / CELL_SIZE);
    const cy = Math.floor(py / CELL_SIZE);

    if (obstacleBlocksSight(cx, cy)) {
      return false;
    }
  }

  return true;
}

function addBeam(x1, y1, x2, y2, color, width = 3, ttl = 0.12) {
  effects.push({
    id: nextEffectId,
    kind: "beam",
    x1,
    y1,
    x2,
    y2,
    color,
    width,
    maxTtl: ttl,
    ttl
  });
  nextEffectId += 1;
}

function addPulse(x, y, radius, color) {
  effects.push({
    id: nextEffectId,
    kind: "pulse",
    x,
    y,
    radius,
    color,
    ttl: 0.18
  });
  nextEffectId += 1;
}

function addEnemyDeathAnimation(enemy) {
  if (!enemy) {
    return;
  }

  const radius = enemyStatusRadius(enemy);
  const primaryColor = enemy.coreColor || enemy.color || "#ffffff";
  const secondaryColor = enemy.color || primaryColor;
  const particleCount = enemy.boss ? 18 : Math.max(8, Math.round(radius * 0.7));

  addPulse(enemy.x, enemy.y, radius + 8, "rgba(255, 255, 255, 0.42)");
  addBurstParticles(enemy.x, enemy.y, particleCount, primaryColor, 55, 165, 0.22, 0.52);
  addBurstParticles(enemy.x, enemy.y, Math.max(4, Math.round(particleCount * 0.45)), secondaryColor, 28, 92, 0.14, 0.32);
  effects.push({
    id: nextEffectId,
    kind: "enemyDeath",
    x: enemy.x,
    y: enemy.y,
    vx: Math.cos(enemy.facingAngle || 0) * 18,
    vy: -24,
    spin: (Math.random() - 0.5) * 1.8,
    color: secondaryColor,
    glowColor: primaryColor,
    radius,
    maxTtl: enemy.boss ? 0.52 : 0.38,
    ttl: enemy.boss ? 0.52 : 0.38,
    enemy: {
      ...enemy,
      x: 0,
      y: 0,
      burnTimer: 0,
      poisonTimer: 0,
      stunTimer: 0,
      whiteoutTimer: 0,
      mangoTimer: 0,
      healthBarFlashTimer: 0,
      healthBarTintTimer: 0,
      shellHp: 0,
      armorHp: 0,
      shieldHp: 0
    }
  });
  nextEffectId += 1;

  if (enemy.boss || (enemy.tier || 1) >= 3 || enemy.key === "behemoth" || enemy.key === "xer") {
    triggerScreenShake(enemy.boss ? 0.28 : 0.16, enemy.boss ? 0.18 : 0.12);
  }
}

function gateArcEndpoints(tower) {
  const center = towerPlacementCenter("gate", tower.x, tower.y);
  if ((tower.rotation || 0) % 2 === 0) {
    return {
      x1: center.x - CELL_SIZE,
      y1: center.y,
      x2: center.x + CELL_SIZE,
      y2: center.y
    };
  }
  return {
    x1: center.x,
    y1: center.y - CELL_SIZE,
    x2: center.x,
    y2: center.y + CELL_SIZE
  };
}

function beamEndPoint(x, y, angle, reach = Math.max(canvas.width, canvas.height) * 2) {
  return {
    x: x + Math.cos(angle) * reach,
    y: y + Math.sin(angle) * reach
  };
}

function distanceToBeam(enemy, startX, startY, angle) {
  const dx = enemy.x - startX;
  const dy = enemy.y - startY;
  const projection = dx * Math.cos(angle) + dy * Math.sin(angle);
  const perpendicular = Math.abs((-Math.sin(angle) * dx) + (Math.cos(angle) * dy));
  return { projection, perpendicular };
}

function fireLaserBeam(tower, target, stats) {
  const angle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
  const perpendicularX = -Math.sin(angle);
  const perpendicularY = Math.cos(angle);
  const beamOffsets = stats.doubleBeam
    ? [-(stats.beamSeparation || 12) / 2, (stats.beamSeparation || 12) / 2]
    : [0];

  for (const offset of beamOffsets) {
    const startX = tower.centerX + perpendicularX * offset;
    const startY = tower.centerY + perpendicularY * offset;
    const defaultEnd = beamEndPoint(startX, startY, angle);
    const maxDistance = Math.hypot(defaultEnd.x - startX, defaultEnd.y - startY);
    const shieldHitTracker = createShieldHitTracker();
    const beamTargets = [];

    for (const enemy of enemies) {
      if (!canSeeEnemy(enemy, stats.detectHidden)) {
        continue;
      }

      const { projection, perpendicular } = distanceToBeam(enemy, startX, startY, angle);
      if (projection < 0 || projection > maxDistance || perpendicular > stats.beamWidth) {
        continue;
      }

      beamTargets.push({ enemy, projection });
    }

    beamTargets.sort((left, right) => left.projection - right.projection);
    const hitEnd = !stats.infinitePierce && beamTargets.length > 0
      ? beamEndPoint(startX, startY, angle, Math.max(beamTargets[0].projection, 0))
      : defaultEnd;

    for (const entry of beamTargets) {
      damageEnemy(entry.enemy, stats.photonBlast ? stats.damage * 2.4 : stats.damage, "laser", {
        shieldHitTracker,
        burnDamage: stats.photonBlast ? stats.burnDamage * 2.2 : stats.burnDamage,
        burnDuration: stats.photonBlast ? Math.max(stats.burnDuration, 4.2) : stats.burnDuration,
        sourceTowerId: tower.id
      });

      if (!stats.infinitePierce) {
        break;
      }
    }

    if (stats.photonBlast) {
      addPulse(tower.centerX, tower.centerY, 18, "rgba(255, 227, 92, 0.55)");
    }
    addBeam(startX, startY, hitEnd.x, hitEnd.y, stats.beamColor, stats.photonBlast ? CELL_SIZE * 2 : Math.max(4, stats.beamWidth * 0.72), stats.photonBlast ? 0.22 : stats.beamTtl);
    if (beamTargets.length > 0) {
      addPulse(hitEnd.x, hitEnd.y, Math.max(14, stats.beamWidth * 1.75), "rgba(255, 156, 86, 0.26)");
      addBurstParticles(hitEnd.x, hitEnd.y, stats.photonBlast ? 8 : 5, stats.photonBlast ? "rgba(255, 236, 184, 0.8)" : "rgba(255, 143, 82, 0.82)", 18, stats.photonBlast ? 78 : 52, 0.05, 0.16);
      addBurstParticles(hitEnd.x, hitEnd.y, stats.photonBlast ? 5 : 3, "rgba(255, 214, 118, 0.72)", 10, stats.photonBlast ? 42 : 28, 0.04, 0.11);
    }
  }
}

function priorityTargetsForShotgun(tower, initialTarget, stats) {
  if (!stats.multiPriority || stats.cannonCount <= 1) {
    return [{ target: initialTarget, priority: tower.targetPriority || "first" }];
  }

  const detection = towerHasHiddenDetection(tower, stats);
  const candidates = enemiesInRange(tower.centerX, tower.centerY, stats.range, detection, true)
    .filter((enemy) => canTowerDamageEnemy(tower, enemy, stats));
  const assignments = [];
  const usedIds = new Set();
  const priorities = tower.cannonPriorities || stats.cannonPriorities || ["first", "strong", "last"];

  for (const priority of priorities.slice(0, stats.cannonCount)) {
    const pool = candidates.filter((enemy) => !usedIds.has(enemy.id));
    const target = selectEnemyByPriority(pool.length > 0 ? pool : candidates, priority);
    if (!target) {
      continue;
    }
    assignments.push({ target, priority });
    usedIds.add(target.id);
  }

  if (assignments.length === 0 && initialTarget) {
    assignments.push({ target: initialTarget, priority: tower.targetPriority || "first" });
  }

  return assignments;
}

function fireTorchFlamethrower(tower, target, stats) {
  const angle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
  const shieldHitTracker = createShieldHitTracker();
  let hitSomething = false;

  for (const enemy of enemies) {
    if (!canSeeEnemy(enemy, stats.detectHidden) || !canTowerDamageEnemy(tower, enemy, stats)) {
      continue;
    }
    const distance = Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY);
    if (distance > stats.range || distance < (stats.minRange || 0)) {
      continue;
    }
    const enemyAngle = Math.atan2(enemy.y - tower.centerY, enemy.x - tower.centerX);
    const delta = Math.atan2(Math.sin(enemyAngle - angle), Math.cos(enemyAngle - angle));
    if (Math.abs(delta) > stats.flameArc) {
      continue;
    }

    damageEnemy(enemy, stats.damage, "explosion", {
      shieldHitTracker,
      burnDamage: stats.burnDamage,
      burnDuration: stats.burnDuration
    });
    hitSomething = true;
  }

  const nozzleX = tower.centerX + Math.cos(angle) * 18;
  const nozzleY = tower.centerY + Math.sin(angle) * 18;
  const sparkBursts = Math.max(4, Math.round(stats.range / 26));
  for (let index = 0; index < sparkBursts; index += 1) {
    const distance = 16 + (stats.range - 16) * ((index + 1) / sparkBursts);
    const burstAngle = angle + (Math.random() - 0.5) * stats.flameArc * 1.55;
    const burstX = tower.centerX + Math.cos(burstAngle) * distance;
    const burstY = tower.centerY + Math.sin(burstAngle) * distance;
    addBurstParticles(
      burstX,
      burstY,
      4 + Math.floor(Math.random() * 3),
      index > sparkBursts * 0.6 ? "rgba(255, 191, 106, 0.52)" : "rgba(255, 136, 62, 0.72)",
      18,
      56,
      0.05,
      0.14
    );
  }
  addBurstParticles(nozzleX, nozzleY, 8, "rgba(255, 122, 48, 0.82)", 26, 74, 0.06, 0.14);
  addBurstParticles(
    tower.centerX + Math.cos(angle) * (stats.range * 0.45),
    tower.centerY + Math.sin(angle) * (stats.range * 0.45),
    6,
    "rgba(255, 210, 132, 0.48)",
    22,
    48,
    0.05,
    0.12
  );
  if (stats.flameTrail) {
    const trailX = tower.centerX + Math.cos(angle) * (stats.range * 0.72);
    const trailY = tower.centerY + Math.sin(angle) * (stats.range * 0.72);
    addStickyPuddle(trailX, trailY, stats.trailRadius, 1, stats.trailTtl, "rgba(255, 138, 64, 0.3)", stats.burnDamage * 0.32, true, 0, 0, 1);
  }
  if (!hitSomething) {
    addBurstParticles(tower.centerX + Math.cos(angle) * 22, tower.centerY + Math.sin(angle) * 22, 3, "rgba(255, 181, 107, 0.55)", 16, 34, 0.05, 0.12);
  }
}

function fireTorchRing(tower, stats) {
  const shieldHitTracker = createShieldHitTracker();
  for (let echo = 0; echo < (stats.ringEchoes || 1); echo += 1) {
    const radius = stats.ringRadius * (1 + echo * 0.34);
    addPulse(tower.centerX, tower.centerY, radius, echo === 0 ? "rgba(255, 160, 86, 0.72)" : "rgba(255, 218, 120, 0.58)");
    const sparkBursts = Math.max(10, Math.round(radius / 12));
    for (let index = 0; index < sparkBursts; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random()) * radius;
      const burstX = tower.centerX + Math.cos(angle) * distance;
      const burstY = tower.centerY + Math.sin(angle) * distance;
      addBurstParticles(
        burstX,
        burstY,
        3 + Math.floor(Math.random() * 3),
        echo === 0 ? "rgba(255, 132, 54, 0.76)" : "rgba(255, 208, 118, 0.58)",
        14,
        42,
        0.06,
        0.16
      );
    }
    for (const enemy of enemies) {
      if (!canTowerDamageEnemy(tower, enemy, stats)) {
        continue;
      }
      const distance = Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY);
      if (distance > radius) {
        continue;
      }
      damageEnemy(enemy, stats.damage * (echo === 0 ? 1 : 0.75), "explosion", {
        shieldHitTracker,
        burnDamage: stats.burnDamage * (echo === 0 ? 1 : 0.7),
        burnDuration: stats.burnDuration
      });
    }

    if ((tower.path2 || 0) >= 5) {
      addStickyPuddle(
        tower.centerX,
        tower.centerY,
        Math.max(radius - stats.ringWidth * 0.18, CELL_SIZE * 2.4),
        1,
        0.7 + echo * 0.18,
        echo === 0 ? "rgba(255, 118, 52, 0.24)" : "rgba(255, 196, 98, 0.18)",
        stats.burnDamage * (echo === 0 ? 0.42 : 0.28),
        true,
        0,
        0,
        1
      );
    }
  }
}

function spawnDippyEgg(tower, target, stats) {
  const scatter = Math.max(CELL_SIZE * 0.45, stats.inaccuracy || 0);
  const scatterAngle = Math.random() * Math.PI * 2;
  const scatterDistance = Math.random() * scatter;
  const scatterX = Math.cos(scatterAngle) * scatterDistance;
  const scatterY = Math.sin(scatterAngle) * scatterDistance;
  addBeam(tower.centerX, tower.centerY, tower.centerX, -30, "#fff4c8", 2.5, 0.16);
  projectiles.push({
    id: nextProjectileId,
    kind: "dippyEgg",
    x: tower.centerX,
    y: tower.centerY,
    delay: stats.eggDelay,
    targetId: target.id,
    targetX: target.x + scatterX,
    targetY: target.y + scatterY,
    holdDelay: stats.holdDelay,
    ceilingPause: 0.5,
    ceilingY: Math.max((stats.projectileSize || 10) + 8, 10),
    dropTargetOffsetX: scatterX,
    dropTargetOffsetY: scatterY,
    damage: stats.damage,
    splash: stats.splash,
    ownerTowerId: tower.id,
    burnDamage: stats.burnDamage,
    burnDuration: stats.burnDuration,
    shells: stats.shells,
    shellDamage: stats.shellDamage,
    sticky: stats.sticky,
    stickySlow: stats.stickySlow,
    stickyDuration: stats.stickyDuration,
    syrupDamage: stats.syrupDamage,
    syrupRadius: stats.syrupRadius,
    syrupTtl: stats.syrupTtl,
    syrupTowerBuff: stats.syrupTowerBuff,
    shockwaves: stats.shockwaves,
    screenShake: stats.screenShake,
    screenShakeDuration: stats.screenShakeDuration,
    projectileSize: stats.projectileSize,
    whiteoutDuration: stats.whiteoutDuration,
    yolkColor: stats.yolkColor,
    shieldMultiplier: stats.shieldMultiplier,
    welfareHoming: stats.welfareHoming,
    welfareTurnRate: stats.welfareTurnRate,
    welfareCruiseSpeed: stats.welfareCruiseSpeed,
    welfareApexHeight: stats.welfareApexHeight,
    welfareSwerveStart: stats.welfareSwerveStart,
    podIndex: stats.alternatingPods ? (tower.dippyActivePod || 0) : 0,
    damageClasses: stats.sticky ? ["explosive", "kinetic", "chemical"] : ["explosive", "kinetic"],
    speed: 980,
    dropSpeed: 780 + Math.random() * 90,
    arcDrift: 0,
    roll: (Math.random() - 0.5) * 0.3,
    spin: 6 + Math.random() * 5,
    trailTimer: 0
  });
  nextProjectileId += 1;
  tower.dippyShotIndex = (tower.dippyShotIndex || 0) + 1;
  if (stats.alternatingPods) {
    const perPod = Math.max(1, Math.round(stats.burst / 2));
    if (!Array.isArray(tower.dippyPodAmmo) || tower.dippyPodAmmo.length !== 2) {
      tower.dippyPodAmmo = [perPod, perPod];
    }
    const activePod = tower.dippyActivePod || 0;
    tower.dippyPodAmmo[activePod] = Math.max(0, (tower.dippyPodAmmo[activePod] ?? perPod) - 1);
    if (tower.dippyPodAmmo[activePod] <= 0 && (tower.dippyPodAmmo[1 - activePod] || 0) > 0) {
      tower.dippyActivePod = 1 - activePod;
      tower.dippyReloadTimer = 0;
    }
    tower.dippyAmmo = tower.dippyPodAmmo[0] + tower.dippyPodAmmo[1];
  } else {
    tower.dippyAmmo = Math.max(0, (tower.dippyAmmo ?? stats.burst) - 1);
  }
}

function spawnFireballProjectile(tower, target, stats) {
  projectiles.push({
    id: nextProjectileId,
    kind: "fireball",
    x: tower.centerX,
    y: tower.centerY,
    angle: Math.atan2(target.y - tower.centerY, target.x - tower.centerX),
    speed: stats.projectileSpeed,
    damage: stats.damage,
    splash: stats.splash,
    ownerTowerId: tower.id,
    burnDamage: stats.burnDamage,
    burnDuration: stats.burnDuration,
    damageType: "explosion",
    ttl: 1.1
  });
  nextProjectileId += 1;
}

function applyFreezeEffect(enemy, damage, slow, slowDuration, freezeDuration = 0, antiArmor = false, sourceTowerId = null) {
  const freezeDamageType = antiArmor && enemy.armored && enemy.armorHp > 0 ? "explosion" : "freeze";
  const dealtDamage = damage > 0 ? damageEnemy(enemy, damage, freezeDamageType, { sourceTowerId }) : true;

  if (!dealtDamage) {
    return false;
  }

  if (isDiamondEnemy(enemy)) {
    return true;
  }

  if ((!enemy.armored || enemy.armorHp <= 0) && slow < 1 && slowDuration > 0) {
    const slowResistance = enemy.slowResistance || 1;
    const adjustedSlow = 1 - (1 - slow) * slowResistance;
    const adjustedDuration = slowDuration * slowResistance;
    enemy.slowFactor = Math.min(enemy.slowFactor, adjustedSlow);
    enemy.slowTimer = Math.max(enemy.slowTimer, adjustedDuration);
    enemy.freezeTintTimer = Math.max(enemy.freezeTintTimer || 0, Math.max(0.12, adjustedDuration));
  }

  if ((!enemy.armored || enemy.armorHp <= 0) && freezeDuration > 0) {
    const adjustedFreeze = freezeDuration * (enemy.stunResistance || 1);
    enemy.stunTimer = Math.max(enemy.stunTimer, adjustedFreeze);
    enemy.freezeTintTimer = Math.max(enemy.freezeTintTimer || 0, adjustedFreeze);
  }

  return dealtDamage;
}

function addBurstParticles(x, y, count, color, speedMin = 40, speedMax = 120, ttlMin = 0.18, ttlMax = 0.42) {
  for (let index = 0; index < count; index += 1) {
    const angle = (Math.PI * 2 * index) / Math.max(count, 1) + Math.random() * 0.4;
    const speed = speedMin + Math.random() * (speedMax - speedMin);
    effects.push({
      id: nextEffectId,
      kind: "spark",
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 2 + Math.random() * 3,
      color,
      maxTtl: ttlMin + Math.random() * (ttlMax - ttlMin),
      ttl: ttlMin + Math.random() * (ttlMax - ttlMin)
    });
    nextEffectId += 1;
  }
}

function addStickyPuddle(x, y, radius, slow, ttl, color = "rgba(255, 215, 82, 0.55)", damage = 0, circular = false, poisonDamage = 0, poisonTtl = 0, towerAttackSpeed = 1, sourceTowerId = null) {
  effects.push({
    id: nextEffectId,
    kind: "puddle",
    x,
    y,
    radius,
    slow,
    damage,
    poisonDamage,
    poisonTtl,
    sourceTowerId,
    towerAttackSpeed,
    maxTtl: ttl,
    ttl,
    color,
    circular
  });
  nextEffectId += 1;
}

function launchSupportAirstrike(tower, target, stats) {
  if (stats.helpMissile && !stats.airstrikeDamage) {
    const angle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
    projectiles.push({
      id: nextProjectileId,
      kind: "missile",
      x: tower.centerX,
      y: tower.centerY,
      targetId: target.id ?? null,
      targetX: target.x,
      targetY: target.y,
      speed: stats.speed || 196,
      acceleration: stats.acceleration || 760,
      angle,
      homing: stats.homing || 9.5,
      swayAmplitude: 0.085,
      swayRate: 7.5 + Math.random() * 2.5,
      swayPhase: Math.random() * Math.PI * 2,
      damage: stats.helpMissileDamage || stats.damage || 11.5,
      impactDamage: 0,
      splash: stats.splash || 28,
      shrapnel: false,
      clusters: false,
      rain: false,
      ownerTowerId: tower.id
    });
    nextProjectileId += 1;
    return;
  }

  const bombCount = stats.airstrikeBombs || 8;
  for (let index = 0; index < bombCount; index += 1) {
    const spreadX = (Math.random() - 0.5) * 140 + (index - (bombCount - 1) / 2) * 12;
    const spreadY = (Math.random() - 0.5) * 92;
    const startX = Math.max(24, Math.min(canvas.width - 24, target.x + spreadX));
    const startY = -40 - Math.random() * 120;
    const targetX = Math.max(20, Math.min(canvas.width - 20, target.x + spreadX * 0.45));
    const targetY = Math.max(20, Math.min(canvas.height - 20, target.y + spreadY));
    const angle = Math.atan2(targetY - startY, targetX - startX);
    projectiles.push({
      id: nextProjectileId,
      kind: "mangoBomb",
      x: startX,
      y: startY,
      targetX,
      targetY,
      angle,
      speed: 390 + Math.random() * 150,
      acceleration: 220,
      damage: stats.airstrikeDamage,
      splash: stats.airstrikeSplash,
      impactDamage: stats.airstrikeDamage * 1.35,
      screenShake: 0,
      screenShakeDuration: 0,
      ttl: 2.4
    });
    nextProjectileId += 1;
  }
}

function wallCellsInRange(tower, range) {
  const cells = [];

  for (const block of blocks.values()) {
    for (const cell of block.cells) {
      if (cell.x === tower.x && cell.y === tower.y) {
        continue;
      }

      if (grid[cell.y][cell.x].towerId !== null) {
        continue;
      }

      const center = cellCenter(cell.x, cell.y);
      if (Math.hypot(center.x - tower.centerX, center.y - tower.centerY) <= range) {
        cells.push(cell);
      }
    }
  }

  return cells;
}

function groundCellsInRange(tower, range) {
  const cells = [];

  for (let y = 0; y < ROWS; y += 1) {
    for (let x = 0; x < COLS; x += 1) {
      if (!inBounds(x, y) || isEndpoint(x, y) || obstacleAt(x, y) || grid[y][x].blockId !== null) {
        continue;
      }

      const center = cellCenter(x, y);
      if (Math.hypot(center.x - tower.centerX, center.y - tower.centerY) <= range) {
        cells.push({ x, y });
      }
    }
  }

  return cells;
}

function routeCellsInRange(tower, range) {
  const seen = new Set();
  const cells = [];

  for (const path of routes) {
    for (const point of path) {
      const key = `${point.x},${point.y}`;
      if (seen.has(key) || isEndpoint(point.x, point.y) || grid[point.y][point.x].blockId !== null || obstacleAt(point.x, point.y)) {
        continue;
      }
      const center = cellCenter(point.x, point.y);
      if (Math.hypot(center.x - tower.centerX, center.y - tower.centerY) <= range) {
        seen.add(key);
        cells.push({ x: point.x, y: point.y });
      }
    }
  }

  return cells;
}

function randomPointInCell(x, y, padding = 8) {
  const min = padding;
  const max = CELL_SIZE - padding;
  return {
    x: x * CELL_SIZE + min + Math.random() * Math.max(max - min, 1),
    y: y * CELL_SIZE + min + Math.random() * Math.max(max - min, 1)
  };
}

function spawnTrapperConstruct(tower, stats = applySupportBuffsToStats(tower, towerStats(tower))) {
  const trapDamageType = effectiveTowerDamageType(tower, stats.mine ? "explosion" : "trap", stats);
  const turretDamageType = effectiveTowerDamageType(tower, "bullet", stats);
  const spawnCount = Math.max(1, Math.round(stats.constructCount || 1));
  if (stats.turretMode && stats.turretCap > 0) {
    const activeTurrets = traps.filter((trap) => trap.ownerTowerId === tower.id && trap.kind === "turret").length;
    if (activeTurrets >= stats.turretCap) {
      return false;
    }
  }
  const cells = stats.turretMode ? wallCellsInRange(tower, stats.range) : routeCellsInRange(tower, stats.range);

  if (cells.length === 0) {
    return false;
  }

  const candidates = cells.filter((cell) => {
    const center = cellCenter(cell.x, cell.y);
    return Math.hypot(center.x - tower.centerX, center.y - tower.centerY) <= stats.range;
  });

  if (candidates.length === 0) {
    return false;
  }

  let spawned = false;
  const availableCandidates = candidates.slice();
  for (let index = 0; index < spawnCount && availableCandidates.length > 0; index += 1) {
    const choiceIndex = Math.floor(Math.random() * availableCandidates.length);
    const [choice] = availableCandidates.splice(choiceIndex, 1);
    const center = randomPointInCell(choice.x, choice.y, stats.turretMode ? 10 : 7);
    effects.push({
      id: nextEffectId,
      kind: "constructLaunch",
      x1: tower.centerX,
      y1: tower.centerY,
      x2: center.x,
      y2: center.y,
      color: stats.turretMode ? "#d9ffb7" : stats.mine ? "#ffd067" : "#9de67b",
      ttl: 0.18,
      maxTtl: 0.18
    });
    nextEffectId += 1;
    traps.push({
      id: nextTrapId,
      ownerTowerId: tower.id,
      kind: stats.turretMode ? "turret" : stats.mine ? "mine" : "trap",
      x: choice.x,
      y: choice.y,
      centerX: center.x,
      centerY: center.y,
      damage: stats.turretMode ? stats.turretDamage : stats.damage,
      slow: stats.slow,
      duration: stats.duration,
      radius: stats.trapRadius,
      damageType: stats.turretMode ? turretDamageType : trapDamageType,
      usesRemaining: stats.trapUses,
      ttl: stats.trapLifetime,
      maxTtl: stats.trapLifetime,
      targetEnemyId: null,
      cooldown: 0,
      tickRate: stats.mine ? 0.08 : 0.08,
      range: stats.turretRange,
      barrels: stats.turretBarrels,
      attackCooldown: stats.turretCooldown,
      mango: stats.mango
    });
    nextTrapId += 1;
    spawned = true;
    if (stats.turretMode && stats.turretCap > 0) {
      const activeTurrets = traps.filter((trap) => trap.ownerTowerId === tower.id && trap.kind === "turret").length;
      if (activeTurrets >= stats.turretCap) {
        break;
      }
    }
  }
  return spawned;
}

function explodeTrap(trap, options = {}) {
  const splash = trap.splashRadius || (trap.mango ? trap.radius * 2.6 : trap.radius * 1.2);
  const blastColor = trap.kind === "miniMine" ? "#ffb347" : trap.mango ? "#ffcb73" : "#9de67b";
  addPulse(trap.centerX, trap.centerY, splash, blastColor);
  const blastDamage = trap.kind === "miniMine" ? 52 : trap.mango ? 202 : 58;
  const blastSlow = trap.kind === "miniMine" ? 0.38 : trap.mango ? 0.38 : 0.58;
  const blastSlowDuration = trap.kind === "miniMine" ? 2.6 : trap.mango ? 2.8 : 1.9;

  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY);
    if (distance > splash) {
      continue;
    }

    damageEnemy(enemy, blastDamage, "explosion", {
      slow: blastSlow,
      slowDuration: blastSlowDuration
    });
  }

  if (trap.mango && options.spawnMiniMines) {
    return spawnDormantMangoMiniMines(trap);
  }

  return [];
}

function launchSupportMortar(tower, target, stats) {
  const targetX = target.x + (target.vx || 0) * 0.12;
  const targetY = target.y + (target.vy || 0) * 0.12;
  projectiles.push({
    id: nextProjectileId,
    kind: "mangoBomb",
    x: tower.centerX,
    y: tower.centerY - 8,
    targetId: target.id ?? null,
    targetX,
    targetY,
    angle: Math.atan2(targetY - tower.centerY, targetX - tower.centerX),
    speed: stats.mortarSpeed || 340,
    acceleration: 160,
    damage: stats.mortarDamage || 11,
    splash: stats.mortarSplash || 46,
    impactDamage: (stats.mortarDamage || 11) * 1.2,
    ownerTowerId: tower.id,
    ttl: 1.4
  });
  nextProjectileId += 1;
}

function droneCommandTargetPoint(command) {
  if (!command) {
    return null;
  }
  if (command.mode === "tower") {
    const tower = towers.find((entry) => entry.id === command.targetTowerId);
    return tower ? { x: tower.centerX, y: tower.centerY } : null;
  }
  const block = blocks.get(command.blockId);
  if (!block) {
    return null;
  }
  const center = block.cells.reduce((acc, cell) => {
    const point = cellCenter(cell.x, cell.y);
    acc.x += point.x;
    acc.y += point.y;
    return acc;
  }, { x: 0, y: 0 });
  return { x: center.x / block.cells.length, y: center.y / block.cells.length };
}

function droneCommandDestinationPoint(command) {
  if (!command) {
    return null;
  }
  if (command.mode === "tower") {
    return towerPlacementCenter(command.targetType, command.destination.x, command.destination.y);
  }
  const cells = command.blockCells || [];
  const center = cells.reduce((acc, cell) => {
    const point = cellCenter(cell.x, cell.y);
    acc.x += point.x;
    acc.y += point.y;
    return acc;
  }, { x: 0, y: 0 });
  return cells.length > 0 ? { x: center.x / cells.length, y: center.y / cells.length } : null;
}

function updateDroneMoveCommands(deltaTime) {
  if (!droneCommandState || (droneCommandState.stage !== "pickup" && droneCommandState.stage !== "transport" && droneCommandState.stage !== "return")) {
    return;
  }

  const tower = towers.find((entry) => entry.id === droneCommandState.towerId && entry.type === "drone");
  if (!tower) {
    droneCommandState = null;
    return;
  }

  const stats = towerStats(tower);
  const wing = drones.filter((entry) => entry.towerId === tower.id);
  const towerRelocationSpeed = droneCommandState.mode === "tower"
    ? (stats.relocateTowerSpeedMultiplier || 1)
    : 1;
  const pickupDestination = droneCommandState.stage === "pickup" ? droneCommandTargetPoint(droneCommandState) : null;
  const finalDestination = droneCommandState.stage === "transport" ? droneCommandDestinationPoint(droneCommandState) : null;
  let destination = droneCommandState.stage === "pickup"
    ? pickupDestination
    : droneCommandState.stage === "transport"
      ? (droneCommandState.transportCenter || finalDestination)
      : { x: tower.centerX, y: tower.centerY };
  if (!destination || (droneCommandState.stage === "transport" && !finalDestination)) {
    cancelDroneCommand("Drone move command cancelled.");
    return;
  }

  let transportComplete = false;
  if (droneCommandState.stage === "transport" && finalDestination) {
    const dx = finalDestination.x - destination.x;
    const dy = finalDestination.y - destination.y;
    const distance = Math.hypot(dx, dy) || 0;
    let speedMultiplier = 0.25;
    const carriedTower = towers.find((entry) => entry.id === droneCommandState.targetTowerId);
    if (carriedTower?.type === "dippy" || carriedTower?.type === "fireball") {
      speedMultiplier *= 0.55;
    }
    const travel = Math.min(distance, stats.droneSpeed * speedMultiplier * towerRelocationSpeed * deltaTime);
    const nextCenter = distance > 0
      ? { x: destination.x + (dx / distance) * travel, y: destination.y + (dy / distance) * travel }
      : finalDestination;
    droneCommandState.transportCenter = nextCenter;
    destination = nextCenter;
    transportComplete = Math.hypot(finalDestination.x - nextCenter.x, finalDestination.y - nextCenter.y) <= 2;
  }

  let allArrived = wing.length > 0;
  for (const drone of wing) {
    drone.cooldown = Math.max(0, drone.cooldown - deltaTime);
    drone.rocketCooldown = Math.max(0, (drone.rocketCooldown || 0) - deltaTime);
    const orbitAngle = drone.angle + drone.slot * 0.9;
    const orbitRadius = drone.support ? 14 : 20;
    const targetX = destination.x + Math.cos(orbitAngle) * orbitRadius;
    const targetY = destination.y + Math.sin(orbitAngle) * orbitRadius;
    if (droneCommandState.stage === "transport" && droneCommandState.mode === "tower") {
      const previousCenter = droneCommandState.previousTransportCenter || destination;
      const carryDx = destination.x - previousCenter.x;
      const carryDy = destination.y - previousCenter.y;
      drone.x += carryDx;
      drone.y += carryDy;
      drone.angle += deltaTime * 1.8;
      drone.x += (targetX - drone.x) * Math.min(1, deltaTime * 8);
      drone.y += (targetY - drone.y) * Math.min(1, deltaTime * 8);
      if (Math.hypot(targetX - drone.x, targetY - drone.y) > 12) {
        allArrived = false;
      }
      continue;
    }

    const dx = targetX - drone.x;
    const dy = targetY - drone.y;
    const distance = Math.hypot(dx, dy) || 1;
    const travel = Math.min(distance, stats.droneSpeed * 1.15 * towerRelocationSpeed * deltaTime);
    drone.x += (dx / distance) * travel;
    drone.y += (dy / distance) * travel;
    drone.angle += deltaTime * 1.8;
    if (distance > 18) {
      allArrived = false;
    }
  }
  droneCommandState.previousTransportCenter = destination;

  if (droneCommandState.stage === "transport" && droneCommandState.mode === "tower") {
    const targetTower = towers.find((entry) => entry.id === droneCommandState.targetTowerId);
    if (targetTower && droneCommandState.transportCenter) {
      targetTower.centerX = droneCommandState.transportCenter.x;
      targetTower.centerY = droneCommandState.transportCenter.y;
    }
  }

  if (!allArrived || (droneCommandState.stage === "transport" && !transportComplete)) {
    return;
  }

  if (droneCommandState.stage === "pickup") {
    const targetTowerId = droneCommandState.targetTowerId;
    if (droneCommandState.mode === "tower") {
      const targetTower = towers.find((entry) => entry.id === targetTowerId);
      if (!targetTower) {
        cancelDroneCommand("That move is no longer valid.");
        updateHud();
        draw();
        return;
      }
      targetTower.carried = true;
      clearTowerFootprint(targetTower);
      targetTower.cooldown = Math.max(targetTower.cooldown || 0, 0.2);
      targetTower.stunnedTimer = Math.max(targetTower.stunnedTimer || 0, 0.2);
      droneCommandState.transportCenter = { x: targetTower.centerX, y: targetTower.centerY };
      droneCommandState.previousTransportCenter = { x: targetTower.centerX, y: targetTower.centerY };
      droneCommandState.stage = "transport";
      setMessage("Drone wing transporting tower.", 1.4);
      if (selectedTowerId === targetTower.id) {
        openTowerPopup(targetTower);
      }
      updateHud();
      draw();
      return;
    }

    const success = relocateBlockTo(blocks.get(droneCommandState.blockId), droneCommandState.destination.x, droneCommandState.destination.y);
    if (!success) {
      cancelDroneCommand("That move is no longer valid.");
      updateHud();
      draw();
      return;
    }
    droneCommandState.stage = "return";
    if (selectedTowerId === tower.id) {
      openTowerPopup(tower);
    }
    updateHud();
    draw();
    return;
  }

  if (droneCommandState.stage === "transport") {
    const targetTower = towers.find((entry) => entry.id === droneCommandState.targetTowerId);
    const success = relocateTowerTo(targetTower, droneCommandState.destination.x, droneCommandState.destination.y);
    if (!success || !targetTower) {
      cancelDroneCommand("That move is no longer valid.");
      updateHud();
      draw();
      return;
    }
    targetTower.carried = false;
    droneCommandState.transportCenter = null;
    droneCommandState.previousTransportCenter = null;
    droneCommandState.stage = "return";
    if (selectedTowerId === targetTower.id) {
      openTowerPopup(targetTower);
    }
    if (selectedTowerId === tower.id) {
      openTowerPopup(tower);
    }
    updateHud();
    draw();
    return;
  }

  const targetTowerId = droneCommandState.targetTowerId;
  const completeTower = towers.find((entry) => entry.id === droneCommandState.towerId);
  droneCommandState = null;
  if (completeTower && selectedTowerId === completeTower.id) {
    openTowerPopup(completeTower);
  }
  const movedTower = towers.find((entry) => entry.id === targetTowerId);
  if (movedTower && selectedTowerId === movedTower.id) {
    openTowerPopup(movedTower);
  }
  setMessage("Drone wing reposition complete.", 1.4);
  updateHud();
  draw();
}

function spawnDormantMangoMiniMines(trap) {
  const spawned = [];
  const count = 5;
  const splitGeneration = (trap.splitGeneration || 0) + 1;
  const orbit = Math.max(12, trap.radius * 0.95);
  for (let index = 0; index < count; index += 1) {
    const angle = (Math.PI * 2 * index) / count + Math.random() * 0.2;
    const miniTrap = {
      id: nextTrapId,
      ownerTowerId: trap.ownerTowerId,
      kind: "miniMine",
      x: trap.x,
      y: trap.y,
      centerX: trap.centerX + Math.cos(angle) * orbit,
      centerY: trap.centerY + Math.sin(angle) * orbit,
      damage: 52,
      slow: 0.38,
      duration: 2.6,
      radius: 10,
      splashRadius: 30,
      damageType: "explosion",
      usesRemaining: 1,
      ttl: 200,
      maxTtl: 200,
      cooldown: 0,
      tickRate: 0.08,
      mango: true,
      miniMine: true,
      splitGeneration,
      triggerRadius: CELL_SIZE * 1.5
    };
    nextTrapId += 1;
    const enemyInBlast = enemies.some((enemy) => enemy.hp > 0 && Math.hypot(enemy.x - miniTrap.centerX, enemy.y - miniTrap.centerY) <= miniTrap.triggerRadius);
    if (enemyInBlast) {
      explodeTrap(miniTrap, { spawnMiniMines: splitGeneration < 2 });
    } else {
      spawned.push(miniTrap);
    }
  }
  return spawned;
}

function spendTrapSpikesOnEnemy(trap, enemy) {
  if (!trap || !enemy || enemy.hp <= 0) {
    return false;
  }

  const availableSpikes = Math.max(0, Math.floor(trap.usesRemaining || 0));
  if (availableSpikes <= 0) {
    return false;
  }

  const damagePerSpike = trap.damage;
  if (damagePerSpike <= 0) {
    return false;
  }

  const spikesNeeded = Math.max(1, Math.ceil(enemy.hp / damagePerSpike));
  const spikesSpent = Math.min(availableSpikes, spikesNeeded);
  const damageAmount = damagePerSpike * spikesSpent;

  trap.usesRemaining = Math.max(0, availableSpikes - spikesSpent);

  damageEnemy(enemy, damageAmount, trap.damageType || "trap", (trap.kind === "mine" || trap.kind === "miniMine")
    ? {
      slow: trap.slow < 1 ? trap.slow : 0.72,
      slowDuration: trap.duration > 0 ? trap.duration : 1.1
    }
    : {
      slow: trap.slow < 1 ? trap.slow : null,
      slowDuration: trap.slow < 1 ? trap.duration : 0
    });

  return spikesSpent > 0;
}

function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) {
    return Math.hypot(px - x1, py - y1);
  }
  const projection = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
  const clamped = Math.max(0, Math.min(1, projection));
  const closestX = x1 + dx * clamped;
  const closestY = y1 + dy * clamped;
  return Math.hypot(px - closestX, py - closestY);
}

function enemyTouchesTrap(enemy, trap) {
  const startX = enemy.previousX ?? enemy.x;
  const startY = enemy.previousY ?? enemy.y;
  const endX = enemy.x;
  const endY = enemy.y;
  const reach = trap.radius + enemyStatusRadius(enemy) * 0.55;
  return pointToSegmentDistance(trap.centerX, trap.centerY, startX, startY, endX, endY) <= reach;
}

function addTeslaChargeEffects(tower, charge, cap = 24) {
  const chargeRatio = Math.max(0, Math.min(1, charge / Math.max(cap, 1)));
  const sparkCount = 2 + Math.floor(chargeRatio * 3);
  addBurstParticles(
    tower.centerX,
    tower.centerY,
    sparkCount,
    "rgba(175, 234, 255, 0.82)",
    10,
    26 + chargeRatio * 16,
    0.04,
    0.1
  );
  for (let index = 0; index < sparkCount; index += 1) {
    const angle = (lastTimestamp / 180) + (Math.PI * 2 * index) / sparkCount;
    const radius = 8 + chargeRatio * 10 + (index % 2) * 3;
    addBeam(
      tower.centerX + Math.cos(angle) * radius * 0.35,
      tower.centerY + Math.sin(angle) * radius * 0.35,
      tower.centerX + Math.cos(angle) * radius,
      tower.centerY + Math.sin(angle) * radius,
      "rgba(159, 228, 255, 0.75)",
      1.6,
      0.06
    );
  }
}

function fireTeslaZap(tower, target, stats) {
  const teslaDamageType = stats.electrocannon ? "laser" : "shock";
  const chainShieldHitTracker = createShieldHitTracker();
    damageEnemy(target, stats.damage, teslaDamageType, { stun: stats.stun, shieldHitTracker: chainShieldHitTracker, sourceTowerId: tower.id });
    if (stats.electrocannon) {
      addBeam(tower.centerX, tower.centerY, target.x, target.y, "#dff8ff", 8.5, 0.16);
      addBeam(tower.centerX, tower.centerY, target.x, target.y, "#84dcff", 4.8, 0.2);
      addPulse(target.x, target.y, 18, "rgba(170, 238, 255, 0.42)");
      addBurstParticles(target.x, target.y, 6, "rgba(198, 244, 255, 0.78)", 20, 72, 0.05, 0.14);
      triggerScreenShake(0.18, 0.12);
    } else {
      addBeam(tower.centerX, tower.centerY, target.x, target.y, "#9bd8ff");
    }

  const chained = enemies
    .filter((enemy) => enemy.id !== target.id && Math.hypot(enemy.x - target.x, enemy.y - target.y) <= CELL_SIZE * 1.45)
    .slice(0, stats.chainCount);

  for (const enemy of chained) {
      damageEnemy(enemy, stats.damage * 0.5, teslaDamageType, {
        shieldHitTracker: chainShieldHitTracker,
        stun: stats.stun * 0.72,
        slow: stats.chainSlow < 1 ? stats.chainSlow : null,
        slowDuration: stats.chainSlow < 1 ? 0.5 : 0,
        sourceTowerId: tower.id
      });
    addBeam(target.x, target.y, enemy.x, enemy.y, "#b8ebff");
  }

  if (stats.splash > 0) {
    for (const enemy of enemies) {
      if (enemy.id === target.id || chained.some((entry) => entry.id === enemy.id)) {
        continue;
      }

      if (Math.hypot(enemy.x - target.x, enemy.y - target.y) <= stats.splash) {
        damageEnemy(enemy, stats.damage * 0.2, teslaDamageType, { stun: stats.stun * 0.35, shieldHitTracker: chainShieldHitTracker, sourceTowerId: tower.id });
      }
    }
    addPulse(target.x, target.y, stats.splash, "#b8ebff");
  }
}

function fireTower(tower, target, stats = applySupportBuffsToStats(tower, towerStats(tower))) {
  const detectHidden = towerHasHiddenDetection(tower, stats);
  const supportDamageType = effectiveTowerDamageType(tower, "bullet", stats);
  tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);

  if (tower.type === "crossbow") {
    projectiles.push({
      id: nextProjectileId,
      kind: "whiteBolt",
      x: tower.centerX,
      y: tower.centerY,
      targetId: target.id,
      angle: tower.aimAngle,
      speed: stats.boltSpeed,
      homing: stats.boltHoming,
      damage: stats.damage,
      ownerTowerId: tower.id,
      damageType: supportDamageType,
      pierce: stats.boltPierce,
      hitIds: []
    });
    nextProjectileId += 1;
    return;
  }

  if (tower.type === "shotgun") {
    const targetGroups = priorityTargetsForShotgun(tower, target, stats);
    tower.shotgunAimAngles = targetGroups.map((group) => Math.atan2(group.target.y - tower.centerY, group.target.x - tower.centerX));
    for (const group of targetGroups) {
      const aimAngle = Math.atan2(group.target.y - tower.centerY, group.target.x - tower.centerX);
      for (let index = 0; index < stats.pellets; index += 1) {
        const spread = stats.pellets <= 1
          ? 0
          : (-stats.spread / 2) + (stats.spread * index) / Math.max(stats.pellets - 1, 1);
        projectiles.push({
          id: nextProjectileId,
          kind: "shotgunPellet",
          x: tower.centerX,
          y: tower.centerY,
          angle: aimAngle + spread,
          speed: stats.pelletSpeed,
          damage: stats.damage,
          ownerTowerId: tower.id,
          damageType: supportDamageType
        });
        nextProjectileId += 1;
      }
    }
    return;
  }

  if (tower.type === "tesla") {
    fireTeslaZap(tower, target, stats);
    if (stats.supercharge) {
      const storedShots = Math.max(1, Math.floor(Math.min(tower.charge || 0, stats.superchargeCap || 0)));
      tower.burstShotsRemaining = Math.max(0, storedShots - 1);
      tower.burstTimer = tower.burstShotsRemaining > 0 ? stats.superchargeBurstCooldown : 0;
      tower.charge = Math.max(0, (tower.charge || 0) - 1);
      if (tower.burstShotsRemaining === 0) {
        tower.cooldown = stats.cooldown;
      }
    } else {
      tower.cooldown = stats.cooldown;
    }
    return;
  }

  if (tower.type === "laser") {
    fireLaserBeam(tower, target, stats);
    return;
  }

  if (tower.type === "freezer") {
    applyFreezeEffect(target, stats.damage, stats.slow, stats.slowDuration, 0, Boolean(stats.antiArmor), tower.id);
    addBeam(tower.centerX, tower.centerY, target.x, target.y, "#bfefff", 2.6, 0.08);
    addPulse(target.x, target.y, 12, "#d9fbff");
    return;
  }

  if (tower.type === "fireball") {
    if (stats.flamethrower) {
      fireTorchFlamethrower(tower, target, stats);
      tower.cooldown = stats.cooldown;
    } else if (stats.blazingRing) {
      fireTorchRing(tower, stats);
      tower.cooldown = stats.cooldown;
    } else {
      spawnFireballProjectile(tower, target, stats);
      tower.burstTargetId = null;
      tower.burstShotsRemaining = Math.max(0, stats.burst - 1);
      tower.burstTimer = tower.burstShotsRemaining > 0 ? stats.burstDelay : 0;
    }
    return;
  }

  if (tower.type === "dippy") {
    spawnDippyEgg(tower, target, stats);
    tower.burstTargetId = null;
    if (stats.alternatingPods) {
      tower.cooldown = stats.firingCooldown;
    } else {
      tower.burstShotsRemaining = Math.max(0, stats.burst - 1);
      tower.burstTimer = tower.burstShotsRemaining > 0 ? stats.burstDelay : 0;
    }
    return;
  }

  if (tower.type === "trapper") {
    spawnTrapperConstruct(tower, stats);
    return;
  }

  if (tower.type === "support") {
    return;
  }

  if (tower.type === "drone") {
    return;
  }

  spawnMissileProjectile(tower, target, stats);
  tower.burstTargetId = null;
  tower.burstShotsRemaining = Math.max(0, stats.burst - 1);
  tower.burstTimer = tower.burstShotsRemaining > 0 ? stats.burstDelay : 0;
}

function updateTowers(deltaTime) {
  for (const tower of towers) {
    tower.currentTargetId = null;
    const stats = applySupportBuffsToStats(tower, towerStats(tower));
    const detectHidden = towerHasHiddenDetection(tower, stats);
    if (tower.type === "dippy") {
      tower.dippyAmmo = tower.dippyAmmo ?? stats.burst;
      tower.dippyAmmo = Math.min(tower.dippyAmmo, stats.burst);
      tower.dippyReloadTimer = Math.max(0, tower.dippyReloadTimer || 0);
      if (stats.alternatingPods) {
        const perPod = Math.max(1, Math.round(stats.burst / 2));
        if (!Array.isArray(tower.dippyPodAmmo) || tower.dippyPodAmmo.length !== 2) {
          const totalAmmo = Math.max(0, Math.min(stats.burst, tower.dippyAmmo ?? stats.burst));
          tower.dippyPodAmmo = [
            Math.min(perPod, totalAmmo),
            Math.max(0, Math.min(perPod, totalAmmo - perPod))
          ];
        }
        tower.dippyPodAmmo[0] = Math.max(0, Math.min(perPod, tower.dippyPodAmmo[0] ?? perPod));
        tower.dippyPodAmmo[1] = Math.max(0, Math.min(perPod, tower.dippyPodAmmo[1] ?? perPod));
        tower.dippyActivePod = tower.dippyActivePod ?? (tower.dippyPodAmmo[0] > 0 ? 0 : 1);
        if ((tower.dippyPodAmmo[tower.dippyActivePod] || 0) <= 0 && (tower.dippyPodAmmo[1 - tower.dippyActivePod] || 0) > 0) {
          tower.dippyActivePod = 1 - tower.dippyActivePod;
        }
        const reloadPod = 1 - tower.dippyActivePod;
        const reloadStep = stats.podReloadStep || Math.max(stats.cooldown / 6, 0.26);
        tower.dippyReloadTimer -= deltaTime;
        if ((tower.dippyPodAmmo[reloadPod] || 0) < perPod && tower.dippyReloadTimer <= 0) {
          tower.dippyPodAmmo[reloadPod] += 1;
          tower.dippyReloadTimer = reloadStep;
        } else if ((tower.dippyPodAmmo[reloadPod] || 0) >= perPod) {
          tower.dippyReloadTimer = 0;
        }
        if ((tower.dippyPodAmmo[tower.dippyActivePod] || 0) <= 0 && (tower.dippyPodAmmo[reloadPod] || 0) > 0) {
          tower.dippyActivePod = reloadPod;
        }
        tower.dippyAmmo = tower.dippyPodAmmo[0] + tower.dippyPodAmmo[1];
      } else if (tower.burstShotsRemaining === 0 && tower.cooldown > 0 && tower.dippyAmmo < stats.burst) {
        tower.dippyReloadTimer -= deltaTime;
        const reloadStep = (stats.cooldown / Math.max(stats.burst, 1)) * 1.12;
        if (tower.dippyReloadTimer <= 0) {
          tower.dippyAmmo += 1;
          tower.dippyReloadTimer = reloadStep;
        }
      } else if (tower.dippyAmmo >= stats.burst) {
        tower.dippyReloadTimer = 0;
      }
    }
    tower.stunnedTimer = Math.max(0, (tower.stunnedTimer || 0) - deltaTime);
    tower.cooldown = Math.max(0, tower.cooldown - deltaTime);
    tower.burstTimer = Math.max(0, (tower.burstTimer || 0) - deltaTime);
    tower.fieldCooldown = Math.max(0, (tower.fieldCooldown || 0) - deltaTime);
    tower.supportMissileCooldown = Math.max(0, (tower.supportMissileCooldown || 0) - deltaTime);

    if (tower.mapFrozen) {
      continue;
    }

    if (tower.carried) {
      continue;
    }

    if (tower.stunnedTimer > 0) {
      continue;
    }

    if (tower.type === "tesla" && stats.field && tower.fieldCooldown === 0) {
      const fieldDamageType = stats.electrocannon ? "laser" : "shock";
      const maxFieldTargets = stats.electrocannon ? 45 : stats.supertaser ? 12 : 5;
      const fieldTargets = enemies
        .filter((enemy) => canSeeEnemy(enemy, detectHidden) && Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) <= (stats.fieldRadius || stats.range))
        .sort((a, b) => Math.hypot(a.x - tower.centerX, a.y - tower.centerY) - Math.hypot(b.x - tower.centerX, b.y - tower.centerY))
        .slice(0, maxFieldTargets);
      for (const enemy of fieldTargets) {
        const skyX = enemy.x + (Math.random() - 0.5) * 10;
        const skyY = -40 - Math.random() * 36;
        damageEnemy(enemy, stats.electrocannon ? stats.fieldDamage * 1.4 : stats.fieldDamage, fieldDamageType, { stun: stats.fieldStun, sourceTowerId: tower.id });
        addBeam(skyX, skyY, enemy.x, enemy.y, stats.electrocannon ? "#c5f1ff" : "#7cc8ff", stats.electrocannon ? 4.8 : 3.2, stats.electrocannon ? 0.14 : 0.12);
        addBurstParticles(enemy.x, enemy.y, stats.electrocannon ? 5 : 3, stats.electrocannon ? "rgba(196, 242, 255, 0.82)" : "rgba(138, 214, 255, 0.74)", 18, 56, 0.04, 0.12);
      }
      tower.fieldCooldown = stats.fieldCooldown;
    }

    if (tower.type === "freezer" && stats.permafrost && tower.fieldCooldown === 0) {
      const pulseTargets = enemies.filter((enemy) =>
        canSeeEnemy(enemy, detectHidden)
        && Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) <= stats.pulseRadius
      );

      if (pulseTargets.length > 0) {
        for (const enemy of pulseTargets) {
          applyFreezeEffect(enemy, stats.pulseDamage, stats.slow, stats.slowDuration, stats.pulseFreeze, Boolean(stats.antiArmor), tower.id);
        }
        addPulse(tower.centerX, tower.centerY, stats.pulseRadius, "#d9fbff");
        tower.fieldCooldown = stats.pulseCooldown;
      }
    }

    if (tower.type === "freezer" && stats.aura && tower.fieldCooldown === 0) {
      const auraTargets = enemies.filter((enemy) =>
        canSeeEnemy(enemy, detectHidden)
        && Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) <= stats.auraRadius
      );

      if (auraTargets.length > 0) {
        for (const enemy of auraTargets) {
          applyFreezeEffect(enemy, stats.auraDamage, stats.auraSlow, 0.32, 0, Boolean(stats.antiArmor), tower.id);
        }
        addPulse(tower.centerX, tower.centerY, stats.auraRadius, "rgba(196, 243, 255, 0.7)");
      }
      tower.fieldCooldown = stats.auraTick;
    }

    if (tower.type === "support") {
      if (stats.mortar && tower.fieldCooldown === 0) {
        const mortarTarget = nearestSupportMissileTarget(tower, stats.range * 1.1, detectHidden);
        if (mortarTarget) {
          launchSupportMortar(tower, mortarTarget, stats);
          tower.fieldCooldown = stats.mortarCooldown;
        }
      }

      if (stats.helpMissile && tower.supportMissileCooldown === 0) {
        const supportTarget = nearestSupportMissileTarget(tower, stats.range * 1.35, detectHidden);
        if (supportTarget) {
          tower.aimAngle = Math.atan2(supportTarget.y - tower.centerY, supportTarget.x - tower.centerX);
          launchSupportAirstrike(tower, supportTarget, stats);
          tower.supportMissileCooldown = stats.helpMissileCooldown;
        }
      }

      if (tower.cooldown === 0 && (stats.sentryCount || 0) > 0) {
        const primaryTarget = nearestEnemyInRange(tower, stats.range, detectHidden);
        if (primaryTarget) {
          tower.currentTargetId = primaryTarget.id;
          tower.aimAngle = Math.atan2(primaryTarget.y - tower.centerY, primaryTarget.x - tower.centerX);
          const extraTargets = enemiesInRange(tower.centerX, tower.centerY, stats.range, detectHidden, true)
            .filter((enemy) => enemy.id !== primaryTarget.id)
            .filter((enemy) => canTowerDamageEnemy(tower, enemy, stats))
            .sort((left, right) => Math.hypot(left.x - tower.centerX, left.y - tower.centerY) - Math.hypot(right.x - tower.centerX, right.y - tower.centerY))
            .slice(0, Math.max(0, (stats.sentryCount || 1) - 1));
          const sentryTargets = [primaryTarget, ...extraTargets];
          for (const sentryTarget of sentryTargets) {
            damageEnemy(sentryTarget, stats.damage, effectiveTowerDamageType(tower, "bullet", stats), { sourceTowerId: tower.id });
            addBeam(tower.centerX, tower.centerY, sentryTarget.x, sentryTarget.y, "rgba(255, 223, 168, 0.78)", 1.6, 0.06);
            addBurstParticles(sentryTarget.x, sentryTarget.y, 2, "rgba(255, 236, 192, 0.8)", 10, 28, 0.03, 0.08);
          }
          tower.cooldown = stats.cooldown;
        }
      }
      continue;
    }

    if (tower.type === "orb") {
      updateOrbTower(tower, stats, deltaTime);
      continue;
    }

    if (tower.type === "gate" && tower.cooldown === 0) {
      const target = nearestEnemyInRange(tower, stats.range, true);
      if (target && canTowerDamageEnemy(tower, target, stats)) {
        tower.currentTargetId = target.id;
        tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
        damageEnemy(target, stats.damage, "chemical", {
          slow: stats.spraySlow,
          slowDuration: stats.spraySlowDuration,
          sourceTowerId: tower.id
        });
        if (!target.armored) {
          target.poisonDamage = Math.max(target.poisonDamage || 0, stats.acidDot);
          target.poisonTimer = Math.max(target.poisonTimer || 0, stats.acidDuration);
          target.acidAmp = Math.max(target.acidAmp || 1, stats.acidAmp);
          target.acidAmpTimer = Math.max(target.acidAmpTimer || 0, stats.acidDuration);
          target.poisonSourceTowerId = tower.id;
        }
        addBeam(tower.centerX, tower.centerY, target.x, target.y, "rgba(166, 244, 140, 0.85)", 3.5, 0.1);
        addPulse(target.x, target.y, 10, "rgba(154, 235, 131, 0.28)");
        tower.cooldown = stats.cooldown;
      } else {
        tower.cooldown = 0.04;
      }
    }

    if (tower.type === "tesla" && stats.supercharge && tower.cooldown > 0) {
      tower.charge = Math.min((tower.charge || 0) + deltaTime * (stats.superchargeChargeRate || 0), stats.superchargeCap || 24);
      if (tower.charge > 1.2) {
        addTeslaChargeEffects(tower, tower.charge, stats.superchargeCap || 24);
      }
    }

    if (tower.type === "tesla" && tower.burstShotsRemaining > 0) {
      if (tower.burstTimer > 0) {
        continue;
      }

      const burstTarget = nearestEnemyInRange(tower, stats.range, detectHidden);
      if (!burstTarget) {
        if (stats.supercharge) {
          tower.charge = Math.min((tower.charge || 0) + deltaTime * (stats.superchargeChargeRate || 0), stats.superchargeCap || 24);
          if (tower.charge > 1.2) {
            addTeslaChargeEffects(tower, tower.charge, stats.superchargeCap || 24);
          }
        }
        continue;
      }

      tower.currentTargetId = burstTarget.id;
      tower.aimAngle = Math.atan2(burstTarget.y - tower.centerY, burstTarget.x - tower.centerX);
      fireTeslaZap(tower, burstTarget, stats);
      tower.charge = Math.max(0, (tower.charge || 0) - 1);
      tower.burstShotsRemaining -= 1;
      if (tower.burstShotsRemaining > 0) {
        tower.burstTimer = stats.superchargeBurstCooldown;
      } else {
        tower.cooldown = stats.cooldown;
      }
      continue;
    }

    if ((tower.type === "missile" || tower.type === "fireball") && tower.burstShotsRemaining > 0) {
      if (tower.burstTimer > 0) {
        continue;
      }

      const burstTarget = nearestEnemyInRange(tower, stats.range, detectHidden);

      if (burstTarget) {
        tower.currentTargetId = burstTarget.id;
        tower.aimAngle = Math.atan2(burstTarget.y - tower.centerY, burstTarget.x - tower.centerX);
        if (tower.type === "fireball") {
          spawnFireballProjectile(tower, burstTarget, stats);
        } else {
          spawnMissileProjectile(tower, burstTarget, stats);
        }
      }

      tower.burstShotsRemaining -= 1;
      if (tower.burstShotsRemaining > 0) {
        tower.burstTimer = stats.burstDelay;
      } else {
        tower.cooldown = stats.cooldown;
      }
      continue;
    }

    if (tower.type === "dippy" && tower.burstShotsRemaining > 0) {
      if (tower.burstTimer > 0) {
        continue;
      }

      const burstTarget = nearestEnemyInRange(tower, stats.range, detectHidden);
      if (burstTarget) {
        tower.currentTargetId = burstTarget.id;
        tower.aimAngle = Math.atan2(burstTarget.y - tower.centerY, burstTarget.x - tower.centerX);
        spawnDippyEgg(tower, burstTarget, stats);
      }

      tower.burstShotsRemaining -= 1;
      if (tower.burstShotsRemaining > 0) {
        tower.burstTimer = stats.burstDelay;
      } else {
        tower.cooldown = stats.cooldown;
      }
      continue;
    }

    if (tower.type === "dippy" && stats.alternatingPods && tower.cooldown === 0 && ((tower.dippyPodAmmo?.[tower.dippyActivePod || 0] || 0) > 0)) {
      const streamTarget = nearestEnemyInRange(tower, stats.range, detectHidden);
      if (streamTarget) {
        tower.currentTargetId = streamTarget.id;
        tower.aimAngle = Math.atan2(streamTarget.y - tower.centerY, streamTarget.x - tower.centerX);
        spawnDippyEgg(tower, streamTarget, stats);
        tower.cooldown = stats.firingCooldown;
      }
      continue;
    }

    if (tower.cooldown > 0) {
      continue;
    }

    if (tower.type === "trapper") {
      if (!isWaveRunning()) {
        continue;
      }
      if (spawnTrapperConstruct(tower, stats)) {
        tower.cooldown = stats.cooldown;
      }
      continue;
    }

    const target = nearestEnemyInRange(tower, stats.range, detectHidden);

    if (!target) {
      if (tower.type === "tesla" && stats.supercharge) {
        tower.charge = Math.min((tower.charge || 0) + deltaTime * (stats.superchargeChargeRate || 0), stats.superchargeCap || 24);
        if (tower.charge > 1.2) {
          addTeslaChargeEffects(tower, tower.charge, stats.superchargeCap || 24);
        }
      }
      continue;
    }

    tower.currentTargetId = target.id;
    tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
    if (tower.type === "drone") {
      continue;
    }
    fireTower(tower, target, stats);
    if ((tower.type !== "missile" && tower.type !== "dippy" && tower.type !== "fireball" && tower.type !== "tesla") || tower.burstShotsRemaining === 0) {
      tower.cooldown = stats.cooldown;
    }
  }
}

function spawnMissileProjectile(tower, target, stats) {
  const baseAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
  const inaccuracy = stats.homing ? ((Math.random() - 0.5) * 0.12) : 0;
  const angle = baseAngle + inaccuracy;
  if (stats.heavyDart) {
    projectiles.push({
      id: nextProjectileId,
      kind: "cannonDart",
      x: tower.centerX,
      y: tower.centerY,
      targetId: target.id,
      speed: stats.speed,
      acceleration: 0,
      angle,
      homing: 0,
      damage: stats.damage,
      ownerTowerId: tower.id,
      damageType: "bullet",
      pierce: stats.pierce,
      hitIds: [],
      ttl: 1.5
    });
    nextProjectileId += 1;
    return;
  }
  projectiles.push({
    id: nextProjectileId,
    kind: "missile",
    x: tower.centerX,
    y: tower.centerY,
    targetId: target.id,
    speed: stats.speed,
    acceleration: stats.acceleration,
    angle,
    homing: stats.homing,
    swayAmplitude: stats.homing ? 0.085 : 0,
    swayRate: 7.5 + Math.random() * 2.5,
    swayPhase: Math.random() * Math.PI * 2,
    damage: stats.damage,
    impactDamage: stats.splash > 0 ? 0 : stats.damage,
    splash: stats.splash,
    ownerTowerId: tower.id,
    shrapnel: stats.shrapnel,
    clusters: stats.clusters,
    rain: stats.rain
  });
  nextProjectileId += 1;
}

function ensureDroneWing(tower, stats) {
  const owned = drones.filter((entry) => entry.towerId === tower.id);
  const needed = 1 + stats.supportCount;

  for (let index = owned.length; index < needed; index += 1) {
    drones.push({
      id: `${tower.id}:${index}`,
      towerId: tower.id,
      support: index > 0,
      slot: index,
      angle: (Math.PI * 2 * index) / Math.max(needed, 1),
      orbitRadius: CELL_SIZE * (index > 0 ? 1.2 : 0.9),
      x: tower.centerX,
      y: tower.centerY,
      cooldown: 0,
      rocketCooldown: 0,
      range: CELL_SIZE * 1.15,
      bodyRadius: 6
    });
  }

  drones = drones.filter((entry) => entry.towerId !== tower.id || entry.slot < needed);
}

function updateDrones(deltaTime) {
  for (const tower of towers.filter((entry) => entry.type === "drone")) {
    ensureDroneWing(tower, applySupportBuffsToStats(tower, towerStats(tower)));
  }

  updateDroneMoveCommands(deltaTime);

  for (const drone of drones) {
    const tower = towers.find((entry) => entry.id === drone.towerId);

    if (!tower) {
      continue;
    }

    if ((tower.stunnedTimer || 0) > 0) {
      continue;
    }

    const stats = applySupportBuffsToStats(tower, towerStats(tower));
    if (droneCommandState && droneCommandState.towerId === tower.id && (droneCommandState.stage === "pickup" || droneCommandState.stage === "transport" || droneCommandState.stage === "return")) {
      continue;
    }
    const isSupport = drone.support;
    const detection = towerHasHiddenDetection(tower, stats);
    const attackRange = isSupport ? stats.supportRange : stats.droneRange;
    const baseDamage = isSupport ? stats.supportDamage : stats.bulletDamage;
    const gunCount = isSupport ? stats.supportGuns : stats.bulletGuns;
    const droneCooldown = isSupport ? (stats.supportCooldown || stats.cooldown * 1.8) : stats.cooldown;
    const cursorAnchor = droneCursorAnchor(tower, stats);
    const ownRadiusTargets = enemies.filter((enemy) => {
      if (!canSeeEnemy(enemy, detection)) {
        return false;
      }
      if (!canTowerDamageEnemy(tower, enemy, stats)) {
        return false;
      }
      return Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) <= stats.range;
    });
    const assistTargets = stats.attackDrone
      ? enemies.filter((enemy) => {
        if (!canSeeEnemy(enemy, detection)) {
          return false;
        }
        if (!canTowerDamageEnemy(tower, enemy, stats)) {
          return false;
        }
        return towers.some((ally) => ally.id !== tower.id && ally.currentTargetId === enemy.id);
      })
      : [];
    drone.range = attackRange;
    drone.cooldown = Math.max(0, drone.cooldown - deltaTime);
    drone.rocketCooldown = Math.max(0, (drone.rocketCooldown || 0) - deltaTime);

    const target = selectEnemyByPriority(
      ownRadiusTargets.length > 0 ? ownRadiusTargets : assistTargets,
      tower.targetPriority || "first",
      cursorAnchor
    );

    if (target) {
      const interceptPoint = droneInterceptPoint(target, drone.range) || target;
      const dx = interceptPoint.x - drone.x;
      const dy = interceptPoint.y - drone.y;
      const distance = Math.hypot(dx, dy) || 1;
      const base = baseCenter(target);
      const droneBaseDistance = Math.hypot(drone.x - base.x, drone.y - base.y);
      const targetBaseDistance = Math.hypot(target.x - base.x, target.y - base.y);
      const needsFrontline = droneBaseDistance >= targetBaseDistance - 6;
      const stopDistance = needsFrontline
        ? Math.max(drone.bodyRadius + 1, drone.range * 0.05)
        : Math.max(drone.bodyRadius + 3, drone.range * 0.16);
      const desiredTravel = Math.max(distance - stopDistance, 0);
      const pursuitSpeed = stats.droneSpeed * (needsFrontline ? 2.1 : 1.35);
      const travel = Math.min(desiredTravel, pursuitSpeed * deltaTime);
      const nextX = drone.x + (dx / distance) * travel;
      const nextY = drone.y + (dy / distance) * travel;
      const leashDistance = Math.hypot(nextX - tower.centerX, nextY - tower.centerY);

      if (leashDistance <= stats.range || stats.attackDrone) {
        drone.x = nextX;
        drone.y = nextY;
      }
    } else {
      const hoverX = tower.targetPriority === "cursor" ? cursorAnchor.x : tower.centerX;
      const hoverY = tower.targetPriority === "cursor" ? cursorAnchor.y : tower.centerY;
      const dx = hoverX - drone.x;
      const dy = hoverY - drone.y;
      const distance = Math.hypot(dx, dy) || 1;
      const settleRadius = isSupport ? 20 : 28;

      if (distance > settleRadius) {
        const travel = Math.min(distance - settleRadius, stats.droneSpeed * deltaTime);
        drone.x += (dx / distance) * travel;
        drone.y += (dy / distance) * travel;
      } else {
        drone.angle += deltaTime * (1 + tower.level * 0.08 + (isSupport ? 0.18 : 0));
        drone.orbitRadius = settleRadius;
        drone.x = hoverX + Math.cos(drone.angle + drone.slot) * settleRadius;
        drone.y = hoverY + Math.sin(drone.angle + drone.slot) * settleRadius;
      }
    }

    const sameWing = drones.filter((entry) => entry.towerId === tower.id && entry.id !== drone.id);
    for (const other of sameWing) {
      const separation = Math.hypot(drone.x - other.x, drone.y - other.y);
      const minDistance = drone.bodyRadius * 2.4;
      if (separation > 0 && separation < minDistance) {
        const push = (minDistance - separation) * 0.5;
        drone.x += ((drone.x - other.x) / separation) * push;
        drone.y += ((drone.y - other.y) / separation) * push;
      }
    }

    if (!target) {
      continue;
    }

    const attackDistance = Math.hypot(target.x - drone.x, target.y - drone.y);

    if (attackDistance <= drone.range) {
      if (drone.cooldown === 0) {
        const angle = Math.atan2(target.y - drone.y, target.x - drone.x);
        for (let index = 0; index < gunCount; index += 1) {
          const spread = gunCount === 1 ? 0 : (index - (gunCount - 1) / 2) * 0.08;
          projectiles.push({
            id: nextProjectileId,
            kind: "droneBullet",
            x: drone.x,
            y: drone.y,
            angle: angle + spread,
            speed: 260,
            damage: baseDamage,
            ownerTowerId: tower.id,
            damageType: effectiveTowerDamageType(tower, "bullet", stats),
            pierce: stats.bulletPierce,
            hitIds: []
          });
          nextProjectileId += 1;
        }
        drone.cooldown = droneCooldown;
      }

      if (!isSupport && stats.rocket && drone.rocketCooldown === 0) {
        const volley = stats.attackDroneMissileVolley || 1;
        const baseAngle = Math.atan2(target.y - drone.y, target.x - drone.x);
        for (let missileIndex = 0; missileIndex < volley; missileIndex += 1) {
          const offset = volley === 1 ? 0 : (missileIndex - (volley - 1) / 2) * 0.55;
          projectiles.push({
            id: nextProjectileId,
            kind: "droneRocket",
            x: drone.x,
            y: drone.y,
            targetId: target.id,
            angle: baseAngle + offset,
            speed: stats.rocketSpeed,
            acceleration: 240,
            homing: stats.rocketHoming,
            damage: stats.attackDrone ? stats.rocketDamage * 1.9 : stats.rocketDamage,
            splash: stats.attackDrone ? stats.rocketSplash * 1.2 : stats.rocketSplash,
            ownerTowerId: tower.id,
            homingDelay: stats.attackDrone ? 0.18 + missileIndex * 0.02 : 0
          });
          nextProjectileId += 1;
        }
        drone.rocketCooldown = stats.rocketCooldown;
      }

      tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
    }
  }
}

function updateTraps(deltaTime) {
  const nextTraps = [];
  const spawnedTraps = [];

  for (const trap of traps) {
    trap.ttl -= deltaTime;
    trap.cooldown = Math.max(0, (trap.cooldown || 0) - deltaTime);
    let removeTrap = false;

    if (trap.kind === "spike") {
      const touching = enemies.filter((entry) => enemyTouchesTrap(entry, trap));
      if (touching.length > 0) {
        const scale = deltaTime / Math.max(trap.tickRate || 0.08, 0.03);
        trap.usesRemaining = (trap.usesRemaining ?? 18) - scale;
        for (const enemy of touching) {
          damageEnemy(enemy, trap.damage * scale, trap.damageType || "trap", { sourceTowerId: trap.ownerTowerId || null });
        }
        addPulse(trap.centerX, trap.centerY, trap.radius, "rgba(225, 236, 244, 0.3)");
        if ((trap.usesRemaining ?? 0) <= 0) {
          removeTrap = true;
        }
      }
    } else if (trap.kind === "turret") {
      if (trap.cooldown === 0) {
        const target = selectEnemyByPriority(
          enemies.filter((enemy) => canSeeEnemy(enemy, false) && canHitArmored(enemy, trap.damageType || "bullet") && Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY) <= trap.range),
          "first"
        );

        if (target) {
          for (let index = 0; index < trap.barrels; index += 1) {
            const spread = trap.barrels === 1 ? 0 : (index === 0 ? -0.08 : 0.08);
            projectiles.push({
              id: nextProjectileId,
              kind: "trapTurretBullet",
              x: trap.centerX,
              y: trap.centerY,
              angle: Math.atan2(target.y - trap.centerY, target.x - trap.centerX) + spread,
              speed: 250,
              damage: trap.damage,
              ownerTowerId: trap.ownerTowerId,
              damageType: trap.damageType || "bullet"
            });
            nextProjectileId += 1;
          }
          trap.cooldown = trap.attackCooldown;
        }
      }
    } else {
      const touching = enemies.filter((enemy) =>
        ((trap.kind === "miniMine" && (trap.triggerRadius || 0) > 0)
          ? Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY) <= (trap.triggerRadius || 0)
          : enemyTouchesTrap(enemy, trap))
        && canHitArmored(enemy, trap.damageType || "trap")
      );

      if (touching.length > 0) {
        trap.targetEnemyId = touching[0].id;
        let spentAnySpikes = false;

        for (const enemy of touching) {
          if ((trap.usesRemaining || 0) <= 0) {
            break;
          }
          spentAnySpikes = spendTrapSpikesOnEnemy(trap, enemy) || spentAnySpikes;
        }

        if (spentAnySpikes) {
          addPulse(trap.centerX, trap.centerY, trap.radius, trap.kind === "mine" || trap.kind === "miniMine" ? "#ffd067" : "#9de67b");
        }

        if (trap.usesRemaining <= 0) {
          if (trap.kind === "mine" || trap.kind === "miniMine") {
            spawnedTraps.push(...explodeTrap(trap, {
              spawnMiniMines: Boolean(trap.mango) && (trap.kind === "mine" || (trap.splitGeneration || 0) < 2)
            }));
          }
          removeTrap = true;
        }
      } else if (trap.targetEnemyId) {
        trap.targetEnemyId = null;
      }
    }

    if (!removeTrap && (trap.kind === "mine" || trap.kind === "miniMine") && trap.ttl <= 0) {
      spawnedTraps.push(...explodeTrap(trap, {
        spawnMiniMines: Boolean(trap.mango) && (trap.kind === "mine" || (trap.splitGeneration || 0) < 2)
      }));
      removeTrap = true;
    }

    if (!removeTrap && trap.ttl > 0 && (trap.kind === "turret" || trap.kind === "spike" || trap.usesRemaining > 0)) {
      nextTraps.push(trap);
    }
  }

  traps = nextTraps.concat(spawnedTraps);
}

function spawnSecondaryProjectiles(originX, originY, count, kind, damage, splash, rain = false) {
  for (let index = 0; index < count; index += 1) {
    const angle = kind === "dippyShell"
      ? Math.random() * Math.PI * 2
      : (Math.PI * 2 * index) / count;
    projectiles.push({
      id: nextProjectileId,
      kind,
      x: originX,
      y: originY,
      targetId: null,
      speed: kind === "cluster" ? 130 : kind === "mangoBomb" ? 62 : kind === "dippyShell" ? 60 + Math.random() * 85 : 180,
      acceleration: 0,
      angle,
      damage,
      splash,
      ownerTowerId: null,
      impactDamage: kind === "cluster" && rain ? damage * 2.3 : kind === "mangoBomb" ? damage * 1.15 : 0,
      hitIds: kind === "cluster" ? [] : null,
      shrapnel: false,
      clusters: false,
      rain,
      screenShake: 0,
      screenShakeDuration: 0,
      ttl: kind === "dippyShell" ? 0.06 + Math.random() * 0.11 : kind === "cluster" ? 0.32 : kind === "mangoBomb" ? 0.42 : 0.35,
      turnRate: kind === "dippyShell" ? (Math.random() - 0.5) * 32 : 0
    });
    nextProjectileId += 1;
  }
}

function explodeProjectile(projectile) {
  const shieldHitTracker = createShieldHitTracker();
  addPulse(projectile.x, projectile.y, projectile.splash, "#ffc572");
  const splashDamage = projectile.kind === "missile" ? projectile.damage * 0.82 : projectile.damage;
  const splashFalloff = projectile.kind === "missile" ? 0.62 : 0.5;

  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);

    if (distance <= projectile.splash) {
      damageEnemy(enemy, splashDamage * (1 - distance / Math.max(projectile.splash, 1) * splashFalloff), "explosion", { shieldHitTracker, sourceTowerId: projectile.ownerTowerId || null });
      if (projectile.kind === "mangoBomb" && !activeShieldSourceForEnemy(enemy)) {
        enemy.slowFactor = Math.min(enemy.slowFactor, 0.38);
        enemy.slowTimer = Math.max(enemy.slowTimer, 2.6);
      }
    }
  }

  if (projectile.kind === "missile" && projectile.clusters) {
    spawnSecondaryProjectiles(
      projectile.x,
      projectile.y,
      10,
      "cluster",
      projectile.damage * 0.42,
      projectile.rain ? projectile.splash * 0.9 : projectile.splash * 0.56,
      projectile.rain
    );
    return;
  }

  if (projectile.kind === "missile" && projectile.shrapnel) {
    spawnSecondaryProjectiles(projectile.x, projectile.y, 8, "shard", projectile.damage * 0.28, 10);
    return;
  }

  if (projectile.kind === "cluster" && projectile.rain) {
    spawnSecondaryProjectiles(projectile.x, projectile.y, 4, "shard", projectile.damage * 0.45, 22);
  }
}

function projectileCollisionRadius(projectile) {
  if (projectile.kind === "missile" || projectile.kind === "droneRocket") {
    return 12;
  }

  if (projectile.kind === "cannonDart") {
    return 11;
  }

  if (projectile.kind === "mangoBomb" || projectile.kind === "cluster" || projectile.kind === "shard" || projectile.kind === "dippyShell") {
    return 10;
  }

  return 10;
}

function firstEnemyTouchingProjectile(projectile) {
  const radius = projectileCollisionRadius(projectile);
  return enemies.find((enemy) => Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= radius) || null;
}

function retargetHomingProjectile(projectile) {
  if ((projectile.kind !== "missile" && projectile.kind !== "droneRocket") || enemies.length === 0) {
    return null;
  }
  const current = projectile.targetId ? enemies.find((enemy) => enemy.id === projectile.targetId && enemy.hp > 0) : null;
  if (current) {
    return current;
  }
  let nearest = null;
  let nearestDistance = Infinity;
  for (const enemy of enemies) {
    if (!enemy || enemy.hp <= 0) {
      continue;
    }
    const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
    if (distance < nearestDistance) {
      nearest = enemy;
      nearestDistance = distance;
    }
  }
  if (nearest) {
    projectile.targetId = nearest.id;
  }
  return nearest;
}

function explodeDroneRocket(projectile) {
  addPulse(projectile.x, projectile.y, projectile.splash, "#ffbb73");
  const shieldHitTracker = createShieldHitTracker();
  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
    if (distance <= projectile.splash) {
      damageEnemy(enemy, projectile.damage * (1 - distance / Math.max(projectile.splash, 1) * 0.45), "explosion", { shieldHitTracker, sourceTowerId: projectile.ownerTowerId || null });
    }
  }
}

function explodeDippyEgg(projectile) {
  if ((projectile.screenShake || 0) > 0 && (projectile.screenShakeDuration || 0) > 0) {
    triggerScreenShake(projectile.screenShake, projectile.screenShakeDuration);
  }
  addPulse(projectile.x, projectile.y, projectile.splash, "#ffe8a3");
  addBurstParticles(projectile.x, projectile.y, projectile.whiteoutDuration > 0 ? 22 : 8, projectile.whiteoutDuration > 0 ? "#fff6c2" : "#ffe199", projectile.whiteoutDuration > 0 ? 80 : 35, projectile.whiteoutDuration > 0 ? 180 : 90);
  const shieldHitTracker = createShieldHitTracker();

  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
    if (distance > projectile.splash) {
      continue;
    }

    damageEnemy(enemy, projectile.damage * (1 - distance / Math.max(projectile.splash, 1) * 0.35), "explosion", {
      shieldHitTracker,
      burnDamage: projectile.burnDamage,
      burnDuration: projectile.burnDuration,
      shieldMultiplier: projectile.shieldMultiplier,
      damageClasses: projectile.damageClasses,
      sourceTowerId: projectile.ownerTowerId || null
    });

    if (projectile.sticky && !activeShieldSourceForEnemy(enemy)) {
      enemy.slowFactor = Math.min(enemy.slowFactor, projectile.stickySlow);
      enemy.slowTimer = Math.max(enemy.slowTimer, projectile.stickyDuration);
      if (projectile.whiteoutDuration > 0) {
        enemy.whiteoutTimer = Math.max(enemy.whiteoutTimer || 0, projectile.whiteoutDuration);
      }
    }
  }

  if (projectile.sticky) {
    addStickyPuddle(
      projectile.x,
      projectile.y,
      projectile.syrupRadius || projectile.splash * 0.72,
      projectile.stickySlow,
      projectile.syrupTtl || projectile.stickyDuration + 1.2,
      projectile.syrupDamage > 0 ? "rgba(255, 171, 51, 0.48)" : "rgba(255, 215, 82, 0.55)",
      Math.max(projectile.syrupDamage || 0, 0.35),
      true,
      0,
      0,
      projectile.syrupTowerBuff || 1,
      projectile.ownerTowerId || null
    );
  }

  if (projectile.shells) {
    spawnSecondaryProjectiles(projectile.x, projectile.y, 10, "dippyShell", projectile.shellDamage, 0, false);
    for (let index = projectiles.length - 10; index < projectiles.length; index += 1) {
      if (projectiles[index]) {
        projectiles[index].ownerTowerId = projectile.ownerTowerId || null;
      }
    }
  }

  if ((projectile.shockwaves || 1) > 1) {
    const secondRadius = projectile.splash * 1.45;
    const secondShieldHitTracker = createShieldHitTracker();
    addPulse(projectile.x, projectile.y, secondRadius, "rgba(255, 224, 146, 0.8)");
    for (const enemy of enemies) {
      const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
      if (distance <= secondRadius) {
        damageEnemy(enemy, projectile.damage * 0.42 * (1 - distance / Math.max(secondRadius, 1) * 0.3), "explosion", {
          shieldHitTracker: secondShieldHitTracker,
          shieldMultiplier: projectile.shieldMultiplier,
          damageClasses: projectile.damageClasses,
          sourceTowerId: projectile.ownerTowerId || null
        });
        if (projectile.sticky && !activeShieldSourceForEnemy(enemy)) {
          enemy.slowFactor = Math.min(enemy.slowFactor, projectile.stickySlow);
          enemy.slowTimer = Math.max(enemy.slowTimer, projectile.stickyDuration);
          if (projectile.whiteoutDuration > 0) {
            enemy.whiteoutTimer = Math.max(enemy.whiteoutTimer || 0, projectile.whiteoutDuration);
          }
        }
      }
    }
  }
}

function explodeFireball(projectile) {
  addPulse(projectile.x, projectile.y, projectile.splash, "rgba(255, 146, 82, 0.75)");
  addBurstParticles(projectile.x, projectile.y, 10, "#ffb066", 30, 140, 0.1, 0.26);
  const shieldHitTracker = createShieldHitTracker();
  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
    if (distance > projectile.splash) {
      continue;
    }
    damageEnemy(enemy, projectile.damage * (1 - distance / Math.max(projectile.splash, 1) * 0.4), projectile.damageType || "explosion", {
      shieldHitTracker,
      burnDamage: projectile.burnDamage,
      burnDuration: projectile.burnDuration,
      sourceTowerId: projectile.ownerTowerId || null
    });
  }
}

function updateProjectiles(deltaTime) {
  const survivors = [];

  for (const projectile of projectiles) {
    if (projectile.kind === "whiteBolt" || projectile.kind === "cannonDart") {
      const target = projectile.targetId ? enemies.find((enemy) => enemy.id === projectile.targetId) : null;
      if (target && projectile.kind === "whiteBolt") {
        const desiredAngle = Math.atan2(target.y - projectile.y, target.x - projectile.x);
        const angleDelta = Math.atan2(Math.sin(desiredAngle - projectile.angle), Math.cos(desiredAngle - projectile.angle));
        const maxTurn = (projectile.homing || 0) * deltaTime;
        projectile.angle += Math.max(-maxTurn, Math.min(maxTurn, angleDelta));
      }
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      let removed = false;

      for (const enemy of enemies) {
        if (projectile.hitIds.includes(enemy.id)) {
          continue;
        }

        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= (projectile.kind === "cannonDart" ? 12 : 10)) {
          projectile.shieldHitTracker ||= createShieldHitTracker();
          if (damageEnemy(enemy, projectile.damage, projectile.damageType || "bullet", { shieldHitTracker: projectile.shieldHitTracker, sourceTowerId: projectile.ownerTowerId || null })) {
            projectile.hitIds.push(enemy.id);
            projectile.pierce -= 1;
            if (projectile.pierce < 0) {
              removed = true;
              break;
            }
          }
        }
      }

      if (!removed && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "droneBullet") {
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;

      let removed = false;
      for (const enemy of enemies) {
        if (projectile.hitIds.includes(enemy.id)) {
          continue;
        }

        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= 11) {
          projectile.shieldHitTracker ||= createShieldHitTracker();
          if (damageEnemy(enemy, projectile.damage, projectile.damageType || "bullet", { shieldHitTracker: projectile.shieldHitTracker, sourceTowerId: projectile.ownerTowerId || null })) {
            projectile.hitIds.push(enemy.id);
            projectile.pierce -= 1;
            if (projectile.pierce < 0) {
              removed = true;
              break;
            }
          }
        }
      }

      if (!removed && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "trapTurretBullet") {
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      let removed = false;

      for (const enemy of enemies) {
        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= 10) {
          damageEnemy(enemy, projectile.damage, projectile.damageType || "bullet", { sourceTowerId: projectile.ownerTowerId || null });
          removed = true;
          break;
        }
      }

      if (!removed && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "shotgunPellet") {
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      let removed = false;

      for (const enemy of enemies) {
        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= 9) {
          damageEnemy(enemy, projectile.damage, projectile.damageType || "bullet", { sourceTowerId: projectile.ownerTowerId || null });
          removed = true;
          break;
        }
      }

      if (!removed && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "frostBolt") {
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      let removed = false;

      for (const enemy of enemies) {
        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= 10) {
          if ((projectile.damageType || "freeze") === "explosion") {
            damageEnemy(enemy, projectile.damage, "explosion", { sourceTowerId: projectile.ownerTowerId || null });
          } else {
            applyFreezeEffect(enemy, projectile.damage, projectile.slow, projectile.slowDuration, 0, false, projectile.ownerTowerId || null);
          }
          addPulse(projectile.x, projectile.y, 12, "#c8f6ff");
          removed = true;
          break;
        }
      }

      if (!removed && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "fireball") {
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      projectile.ttl -= deltaTime;
      const impactEnemy = firstEnemyTouchingProjectile(projectile);
      if (impactEnemy) {
        explodeFireball(projectile);
      } else if (projectile.ttl > 0 && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "dippyShell") {
      projectile.angle += (projectile.turnRate || 0) * deltaTime;
      projectile.speed = Math.max(18, projectile.speed - 420 * deltaTime);
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      projectile.ttl -= deltaTime;
      let removed = false;

      for (const enemy of enemies) {
        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= 10) {
          damageEnemy(enemy, projectile.damage, projectile.damageType || "bullet", { sourceTowerId: projectile.ownerTowerId || null });
          removed = true;
          break;
        }
      }

      if (!removed && projectile.ttl > 0 && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    if (projectile.kind === "dippyEgg") {
      if (!(projectile.risingComplete)) {
        projectile.roll += projectile.spin * deltaTime;
        projectile.y -= 2200 * deltaTime;
        projectile.trailTimer = (projectile.trailTimer || 0) - deltaTime;
        if (projectile.trailTimer <= 0) {
          addBurstParticles(projectile.x, projectile.y + 10, 2, "rgba(255, 239, 182, 0.55)", 18, 36, 0.08, 0.16);
          projectile.trailTimer = 0.04;
        }
        const apexY = projectile.ceilingY || 10;
        if (projectile.y <= apexY) {
          projectile.risingComplete = true;
          projectile.y = apexY;
          projectile.holdDelay = projectile.ceilingPause || projectile.holdDelay || 0.5;
          projectile.hiddenOffscreen = true;
        }
        survivors.push(projectile);
        continue;
      }

      if ((projectile.holdDelay || 0) > 0) {
        projectile.holdDelay -= deltaTime;
        survivors.push(projectile);
        continue;
      }

      if (!projectile.falling) {
        projectile.falling = true;
        projectile.hiddenOffscreen = false;
        projectile.x = projectile.targetX;
        projectile.y = -24;
      }
      const target = projectile.targetId ? enemies.find((enemy) => enemy.id === projectile.targetId) : null;
      if (target) {
        projectile.targetX = target.x + (projectile.dropTargetOffsetX || 0);
        projectile.targetY = target.y + (projectile.dropTargetOffsetY || 0);
      }

      projectile.roll += projectile.spin * deltaTime * 1.5;
      projectile.x += (projectile.targetX - projectile.x) * Math.min(1, deltaTime * 4.6);
      projectile.y += (projectile.dropSpeed || projectile.speed || 780) * deltaTime;
      projectile.trailTimer = (projectile.trailTimer || 0) - deltaTime;
      if (projectile.trailTimer <= 0) {
        addBurstParticles(projectile.x, projectile.y - 8, 3, "rgba(255, 211, 118, 0.55)", 22, 46, 0.08, 0.18);
        projectile.trailTimer = 0.03;
      }
      const impactEnemy = firstEnemyTouchingProjectile(projectile);
      if (impactEnemy || projectile.y >= projectile.targetY) {
        explodeDippyEgg(projectile);
      } else if (projectile.y < canvas.height + 40) {
        survivors.push(projectile);
      }
      continue;
    }

    const target = retargetHomingProjectile(projectile) || (projectile.targetId ? enemies.find((enemy) => enemy.id === projectile.targetId) : null);

    projectile.homingDelay = Math.max(0, (projectile.homingDelay || 0) - deltaTime);
    if (target && (projectile.homing || projectile.kind === "droneRocket") && (projectile.homingDelay || 0) === 0) {
      const swayOffset = projectile.kind === "missile"
        ? Math.sin((lastTimestamp / 1000) * (projectile.swayRate || 0) + (projectile.swayPhase || 0)) * (projectile.swayAmplitude || 0)
        : 0;
      const desiredAngle = Math.atan2(target.y - projectile.y, target.x - projectile.x) + swayOffset;
      const angleDelta = Math.atan2(Math.sin(desiredAngle - projectile.angle), Math.cos(desiredAngle - projectile.angle));
      const maxTurn = ((typeof projectile.homing === "number" ? projectile.homing : 8) || 8) * deltaTime;
      projectile.angle += Math.max(-maxTurn, Math.min(maxTurn, angleDelta));
    }

    projectile.speed += (projectile.acceleration || 0) * deltaTime;
    projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
    projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;

    if (projectile.ttl !== undefined) {
      projectile.ttl -= deltaTime;
      if (projectile.ttl <= 0) {
        if ((projectile.kind === "missile" && projectile.splash > 0) || projectile.kind === "cluster" || projectile.kind === "mangoBomb" || projectile.kind === "shard") {
          explodeProjectile(projectile);
        }
        continue;
      }
    }

    const impactEnemy = firstEnemyTouchingProjectile(projectile);

    if (projectile.kind === "cluster" && impactEnemy) {
      projectile.hitIds ||= [];
      if (!projectile.hitIds.includes(impactEnemy.id)) {
        damageEnemy(impactEnemy, projectile.impactDamage || projectile.damage, "explosion", { sourceTowerId: projectile.ownerTowerId || null });
        projectile.hitIds.push(impactEnemy.id);
      }
    }

    if (projectile.kind === "cluster") {
      if (projectile.x > -40 && projectile.x < canvas.width + 40 && projectile.y > -40 && projectile.y < canvas.height + 40) {
        survivors.push(projectile);
      }
      continue;
    }

    const reachedTargetPoint = projectile.targetX !== undefined
      && projectile.targetY !== undefined
      && Math.hypot(projectile.targetX - projectile.x, projectile.targetY - projectile.y) <= Math.max(12, Math.max(projectile.splash || 0, 10) * 0.45);

    if (impactEnemy || reachedTargetPoint || (target && Math.hypot(target.x - projectile.x, target.y - projectile.y) <= 12) || (projectile.kind === "mangoBomb" && projectile.targetY !== undefined && projectile.y >= projectile.targetY)) {
      const directHitEnemy = impactEnemy || target;
      if (directHitEnemy && projectile.impactDamage > 0) {
        damageEnemy(directHitEnemy, projectile.impactDamage, projectile.kind === "mangoBomb" || projectile.kind === "cluster" ? "explosion" : (projectile.damageType || "bullet"), { sourceTowerId: projectile.ownerTowerId || null });
      }
      if (projectile.kind === "missile" && (projectile.splash || 0) <= 0) {
        continue;
      }
      if (projectile.kind === "droneRocket") {
        explodeDroneRocket(projectile);
        continue;
      }
      explodeProjectile(projectile);
      continue;
    }

    if (projectile.x > -40 && projectile.x < canvas.width + 40 && projectile.y > -40 && projectile.y < canvas.height + 40) {
      survivors.push(projectile);
    }
  }

  projectiles = survivors;
}

function updateEffects(deltaTime) {
  if (screenShakeTimer > 0) {
    screenShakeTimer = Math.max(0, screenShakeTimer - deltaTime);
    if (screenShakeTimer === 0) {
      screenShakeAmount = 0;
    }
  }

  for (const effect of effects) {
    if (effect.kind === "puddle") {
      for (const enemy of enemies) {
        if (Math.hypot(enemy.x - effect.x, enemy.y - effect.y) <= effect.radius && !activeShieldSourceForEnemy(enemy)) {
          enemy.slowFactor = Math.min(enemy.slowFactor, effect.slow);
          enemy.slowTimer = Math.max(enemy.slowTimer, 0.24);
          if (!enemy.armored && effect.damage > 0) {
            enemy.mangoTimer = Math.max(enemy.mangoTimer || 0, 0.28);
            damageEnemy(enemy, effect.damage * deltaTime, "chemical", { dotBarColor: "#f0cc46" });
          }
          if (!enemy.armored && effect.poisonDamage > 0) {
            enemy.poisonDamage = Math.max(enemy.poisonDamage || 0, effect.poisonDamage);
            enemy.poisonTimer = Math.max(enemy.poisonTimer || 0, effect.poisonTtl || 0);
            enemy.mangoTimer = Math.max(enemy.mangoTimer || 0, 0.28);
          }
        }
      }
    } else if (effect.kind === "spark") {
      effect.x += effect.vx * deltaTime;
      effect.y += effect.vy * deltaTime;
    } else if (effect.kind === "enemyDeath") {
      effect.x += effect.vx * deltaTime;
      effect.y += effect.vy * deltaTime;
      effect.vx *= Math.max(0, 1 - deltaTime * 5.5);
      effect.vy *= Math.max(0, 1 - deltaTime * 6.5);
    } else if (effect.kind === "floatingText") {
      effect.y += effect.vy * deltaTime;
    }
  }

  effects = effects
    .map((effect) => ({ ...effect, ttl: effect.ttl - deltaTime }))
    .filter((effect) => effect.ttl > 0);
}

function clampCellToBoard(cell) {
  return {
    x: Math.max(0, Math.min(COLS - 1, cell.x)),
    y: Math.max(0, Math.min(ROWS - 1, cell.y))
  };
}

function canSpawnChildAt(cell) {
  if (!cell || !inBounds(cell.x, cell.y)) {
    return false;
  }
  if (isEndpoint(cell.x, cell.y)) {
    return true;
  }
  return grid[cell.y][cell.x].blockId === null && !obstacleAt(cell.x, cell.y);
}

function isEnemyRouteCellBlocked(cell) {
  if (!cell || !inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
    return false;
  }
  return grid[cell.y][cell.x].blockId !== null || obstacleAt(cell.x, cell.y);
}

function abortSummonedChildDetour(enemy) {
  if (!enemy?.spawnDetourActive) {
    return false;
  }

  const currentCell = clampCellToBoard({
    x: Math.floor(enemy.x / CELL_SIZE),
    y: Math.floor(enemy.y / CELL_SIZE)
  });
  const candidateCells = [
    currentCell,
    ...directions.map((direction) => clampCellToBoard({
      x: currentCell.x + direction.dx,
      y: currentCell.y + direction.dy
    }))
  ];

  let fallbackRoute = [];
  for (const cell of candidateCells) {
    fallbackRoute = findPathFrom(cell);
    if (fallbackRoute.length > 0) {
      break;
    }
  }

  if (fallbackRoute.length === 0) {
    return false;
  }

  enemy.route = fallbackRoute;
  enemy.progress = 0;
  enemy.segmentOffset = 0;
  enemy.spawnDetourActive = false;
  enemy.spawnSourceX = null;
  enemy.spawnSourceY = null;
  enemy.spawnIntroTimer = 0;
  enemy.spawnIntroDuration = 0;
  return true;
}

function buildChildMergeRoute(startCell, portalIndex, maxDetourTiles = 5) {
  if (!canSpawnChildAt(startCell)) {
    return [];
  }

  const mainRoute = routes[portalIndex] || findPathFrom(activePortals()[portalIndex]);
  if (!mainRoute || mainRoute.length === 0) {
    return [];
  }

  const routeIndices = new Map();
  for (let index = 0; index < mainRoute.length; index += 1) {
    const point = mainRoute[index];
    const key = `${point.x},${point.y}`;
    if (!routeIndices.has(key)) {
      routeIndices.set(key, index);
    }
  }

  const startKey = `${startCell.x},${startCell.y}`;
  if (routeIndices.has(startKey)) {
    return mainRoute.slice(routeIndices.get(startKey));
  }

  const queue = [{ x: startCell.x, y: startCell.y, steps: 0 }];
  const visited = new Set([startKey]);
  const parents = new Map([[startKey, null]]);
  let mergeKey = null;

  while (queue.length > 0) {
    const current = queue.shift();
    const currentKey = `${current.x},${current.y}`;

    if (current.steps > 0 && routeIndices.has(currentKey)) {
      mergeKey = currentKey;
      break;
    }

    if (current.steps >= maxDetourTiles) {
      continue;
    }

    for (const direction of directions) {
      const nextCell = { x: current.x + direction.dx, y: current.y + direction.dy };
      const nextKey = `${nextCell.x},${nextCell.y}`;
      if (visited.has(nextKey) || !canSpawnChildAt(nextCell)) {
        continue;
      }
      visited.add(nextKey);
      parents.set(nextKey, currentKey);
      queue.push({ x: nextCell.x, y: nextCell.y, steps: current.steps + 1 });
    }
  }

  if (!mergeKey) {
    return [];
  }

  const localRoute = [];
  let cursor = mergeKey;
  while (cursor) {
    const [x, y] = cursor.split(",").map(Number);
    localRoute.push({ x, y });
    cursor = parents.get(cursor);
  }
  localRoute.reverse();

  const mergeIndex = routeIndices.get(mergeKey);
  return localRoute.concat(mainRoute.slice(mergeIndex + 1));
}

function resolveChildSpawnPath(portalIndex, candidateCells, fallbackCell = null, maxDetourTiles = 5) {
  const cellsToTry = [...candidateCells];
  if (fallbackCell) {
    cellsToTry.push(fallbackCell);
  }

  for (const candidate of cellsToTry) {
    if (!candidate) {
      continue;
    }
    const startCell = clampCellToBoard(candidate);
    const route = buildChildMergeRoute(startCell, portalIndex, maxDetourTiles);
    if (route.length > 0) {
      return { startCell, route };
    }
  }

  return null;
}

function spawnWaffleChildren(enemy, type, count, hpDivisor) {
  const nextTier = Math.max(1, (enemy.tier || 1) - 1);
  if (nextTier === enemy.tier || nextTier < 1) {
    return;
  }

  markEnemyDiscovered(type.key, nextTier);
  renderAlmanac();

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 }
  ];

  for (let index = 0; index < count; index += 1) {
    const direction = directionsForSpawn[index % directionsForSpawn.length];
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(type, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      tier: nextTier,
      reward: 0,
      hp: Math.max(1, Math.round(enemy.maxHp / hpDivisor)),
      speed: Math.max(18, enemy.speed + type.speedBonus),
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(enemy.maxArmorHp || 0, enemy.armorHp || 0) : 0,
      shielded: enemy.shielded
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnMegaWaffleChildren(enemy) {
  const type = ENEMY_TYPES.waffle16;
  markEnemyDiscovered(type.key, 3);
  renderAlmanac();

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 }
  ];

  for (let index = 0; index < 4; index += 1) {
    const direction = directionsForSpawn[index];
    const startCell = {
      x: Math.max(0, Math.min(COLS - 1, originCell.x + direction.x)),
      y: Math.max(0, Math.min(ROWS - 1, originCell.y + direction.y))
    };
    const route = findPathFrom(startCell);
    const child = route.length > 0
      ? createEnemy(type, {
        portalIndex: enemy.portalIndex,
        startCell,
        route,
        tier: 2,
        reward: 0,
        hidden: enemy.hidden,
        armored: enemy.armored,
        armorHp: enemy.armored ? Math.max(enemy.maxArmorHp || 0, enemy.armorHp || 0) : 0,
        shielded: enemy.shielded
      })
      : createEnemy(type, {
        portalIndex: enemy.portalIndex,
        progress: enemy.progress,
        tier: 2,
        reward: 0,
        hidden: enemy.hidden,
        armored: enemy.armored,
        armorHp: enemy.armored ? Math.max(enemy.maxArmorHp || 0, enemy.armorHp || 0) : 0,
        shielded: enemy.shielded
      });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnDiamondChildren(enemy) {
  const nextTier = Math.max(1, (enemy.tier || 1) - 1);
  if (nextTier === enemy.tier || nextTier < 1) {
    return;
  }

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 }
  ];

  for (const direction of directionsForSpawn) {
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(ENEMY_TYPES.diamond, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      tier: nextTier,
      reward: 0,
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(0, Math.round((enemy.maxArmorHp || enemy.armorHp || 0) * 0.5)) : 0,
      shielded: enemy.shielded
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnShieldChildren(enemy) {
  const nextTier = Math.max(1, (enemy.tier || 1) - 1);
  if (nextTier === enemy.tier || nextTier < 1) {
    return;
  }

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 }
  ];

  for (const direction of directionsForSpawn) {
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(ENEMY_TYPES.shield, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      tier: nextTier,
      reward: 0,
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(0, Math.round((enemy.maxArmorHp || enemy.armorHp || 0) * 0.5)) : 0,
      shielded: true
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnGenericTierChildren(enemy) {
  const nextTier = Math.max(1, (enemy.tier || 1) - 1);
  if (nextTier === enemy.tier || nextTier < 1 || !enemySupportsTiers(enemy.key) || enemy.key.startsWith("waffle")) {
    return;
  }

  const enemyType = ENEMY_TYPES[enemy.key];
  if (!enemyType) {
    return;
  }

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 }
  ];

  for (const direction of directionsForSpawn) {
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(enemyType, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      tier: nextTier,
      reward: 0,
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(0, Math.round((enemy.maxArmorHp || enemy.armorHp || 0) * 0.5)) : 0,
      shielded: enemy.shielded
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnSentinelChildren(enemy) {
  const nextTier = Math.max(1, (enemy.tier || 1) - 1);
  if (nextTier === enemy.tier || nextTier < 1) {
    return;
  }

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = (enemy.tier || 1) >= 3
    ? [
      { x: 2, y: 0 },
      { x: -2, y: 0 },
      { x: 0, y: 2 },
      { x: 0, y: -2 }
    ]
    : [
      { x: 2, y: 0 },
      { x: -2, y: 0 },
      { x: 0, y: 2 },
      { x: 0, y: -2 },
      { x: 2, y: 2 },
      { x: 2, y: -2 },
      { x: -2, y: 2 },
      { x: -2, y: -2 }
    ];

  for (const direction of directionsForSpawn) {
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(ENEMY_TYPES.sentinel, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      tier: nextTier,
      reward: 0,
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(0, Math.round((enemy.maxArmorHp || enemy.armorHp || 0) * 0.5)) : 0,
      shielded: enemy.shielded
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnBehemothChildren(enemy) {
  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 3, y: 0 },
    { x: -3, y: 0 },
    { x: 0, y: 3 },
    { x: 0, y: -3 },
    { x: 2, y: 2 },
    { x: -2, y: -2 }
  ];

  for (const direction of directionsForSpawn) {
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell, 8);
    if (!spawnPath) {
      continue;
    }

    const child = createEnemy(ENEMY_TYPES.specialPentagon, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      reward: 600,
      hp: 600,
      speed: Math.max(CELL_SIZE * 0.92, enemy.speed * 0.86),
      sizeScale: 1.95
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnXerChildren(enemy) {
  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const spawnPlan = [
    { type: ENEMY_TYPES.behemoth, count: 3, hp: 8000, sizeScale: 2.65 },
    { type: ENEMY_TYPES.idine, count: 4, hp: 1200, sizeScale: 1.55 },
    { type: ENEMY_TYPES.sentinel, count: 4, tier: 3, hp: 1100, sizeScale: 1.72 },
    { type: ENEMY_TYPES.assassin, count: 6, tier: 3, hp: 520, sizeScale: 1.26 },
    { type: ENEMY_TYPES.breacher, count: 8, tier: 3, hp: 720, sizeScale: 1.3 },
    { type: ENEMY_TYPES.popcorn, count: 8, hp: 240, sizeScale: 1.08 }
  ];
  const usedCells = new Set();

  for (const group of spawnPlan) {
    for (let index = 0; index < group.count; index += 1) {
      const candidateCells = [];
      for (let attempt = 0; attempt < 20; attempt += 1) {
        const angle = ((Math.PI * 2) / Math.max(group.count, 1)) * index + (attempt * 0.31);
        const distance = 3 + (index % 6) + (attempt % 4);
        candidateCells.push({
          x: Math.round(originCell.x + Math.cos(angle) * distance),
          y: Math.round(originCell.y + Math.sin(angle) * distance)
        });
      }
      const filteredCandidates = candidateCells.filter((cell) => !usedCells.has(`${cell.x},${cell.y}`));
      const spawnPath = resolveChildSpawnPath(enemy.portalIndex, filteredCandidates, originCell, 12);
      if (!spawnPath) {
        continue;
      }
      usedCells.add(`${spawnPath.startCell.x},${spawnPath.startCell.y}`);
      const child = createEnemy(group.type, {
        portalIndex: enemy.portalIndex,
        startCell: spawnPath.startCell,
        route: spawnPath.route,
        tier: group.tier || 1,
        reward: 0,
        hp: group.hp,
        sizeScale: group.sizeScale
      });
      if (child) {
        pushEnemy(prepareSummonedChild(child, enemy));
      }
    }
  }
}

function hydraSegmentsByGroup(hydraGroupId, source = enemies) {
  if (!hydraGroupId) {
    return [];
  }
  return source.filter((enemy) => enemy.key === "hydra" && enemy.hydraGroupId === hydraGroupId);
}

function syncHydraGroupStatuses(hydraGroupId, source = enemies) {
  const group = hydraSegmentsByGroup(hydraGroupId, source);
  if (group.length === 0) {
    return;
  }

  const hiddenAlive = group.some((entry) => entry.hydraStage === 0 && entry.hp > 0);
  const armoredAlive = group.some((entry) => entry.hydraStage === 1 && entry.hp > 0);
  const shelledAlive = group.some((entry) => entry.hydraStage === 2 && entry.hp > 0);
  const shieldedAlive = group.some((entry) => entry.hydraStage === 3 && entry.hp > 0);

  for (const segment of group) {
    segment.hidden = hiddenAlive;
    segment.armored = armoredAlive;
    if (!armoredAlive) {
      segment.armorHp = 0;
      segment.maxArmorHp = 0;
    } else if ((segment.maxArmorHp || 0) <= 0) {
      const armorValue = (ENEMY_TYPES.hydra.armor || 4) + Math.max(0, Math.floor((waveNumber - 9) / 4));
      segment.armorHp = Math.max(segment.armorHp || 0, armorValue);
      segment.maxArmorHp = Math.max(segment.maxArmorHp || 0, armorValue);
    }

    segment.shelled = shelledAlive;
    if (!shelledAlive) {
      segment.shellHp = 0;
      segment.maxShellHp = 0;
    }

    segment.shielded = shieldedAlive;
    if (!shieldedAlive) {
      segment.shieldHp = 0;
      segment.maxShieldHp = 0;
      segment.shieldRadius = 0;
    } else if ((segment.maxShieldHp || 0) <= 0) {
      segment.shieldHp = Math.max(segment.shieldHp || 0, 120);
      segment.maxShieldHp = Math.max(segment.maxShieldHp || 0, 120);
      segment.shieldRadius = Math.max(segment.shieldRadius || 0, CELL_SIZE * 2.4);
    }
  }
}

function hydraDefenseHead(enemy, stage, source = enemies) {
  if (!enemy || enemy.key !== "hydra" || !enemy.hydraGroupId) {
    return null;
  }
  return source.find((entry) => entry.key === "hydra" && entry.hydraGroupId === enemy.hydraGroupId && entry.hydraStage === stage && entry.hp > 0) || null;
}

function spawnHydra(enemyType = ENEMY_TYPES.hydra, options = {}) {
  const hydraGroupId = `hydra-${nextEnemyId}-${Math.random().toString(36).slice(2, 7)}`;
  const hydraPortalIndex = options.portalIndex ?? nextSpawnPortalIndex();
  const colors = ["#ffd84f", "#56a8ff", "#a56cff", "#d34a4a"];
  for (let stage = 0; stage < 4; stage += 1) {
    const segment = createEnemy(enemyType, {
      ...options,
      portalIndex: hydraPortalIndex,
      color: colors[stage],
      hydraGroupId,
      hydraStage: stage,
      segmentOffset: stage * 0.34,
      sizeScale: 1.26,
      turnRate: 2.35,
      hidden: true,
      armored: true,
      shelled: true,
      shielded: true,
      shieldHp: 120
    });
    if (segment) {
      segment.type = "Hydra";
      pushEnemy(segment);
    }
  }
  syncHydraGroupStatuses(hydraGroupId);
}

function spawnHydraShieldChild(enemy) {
  if (!enemy || enemy.key !== "hydra" || enemy.hydraStage !== 3) {
    return;
  }

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionsForSpawn = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 }
  ];
  const spawnPath = resolveChildSpawnPath(enemy.portalIndex, directionsForSpawn.map((direction) => ({
    x: originCell.x + direction.x,
    y: originCell.y + direction.y
  })), originCell);
  if (!spawnPath) {
    return;
  }

  const child = createEnemy(ENEMY_TYPES.shield, {
    portalIndex: enemy.portalIndex,
    startCell: spawnPath.startCell,
    route: spawnPath.route,
    reward: 0,
    hidden: false,
    shielded: true,
    hp: Math.max(1, Math.round(enemy.maxHp * 0.42)),
    speed: Math.max(CELL_SIZE * 0.9, enemy.speed * 0.82)
  });

  if (child) {
    pushEnemy(prepareSummonedChild(child, enemy));
  }
}

function prepareSummonedChild(child, parent) {
  if (!child || !parent) {
    return child;
  }
  if ((child.reward || 0) <= 0) {
    const hpShare = Math.max(0.12, Math.min(0.6, (child.maxHp || 0) / Math.max(parent.maxHp || 1, 1)));
    const baseReward = Math.max(1, ENEMY_TYPES[child.key]?.reward || 1);
    child.reward = Math.max(1, Math.round(Math.max(baseReward, (parent.reward || baseReward) * hpShare)));
  }
  child.facingAngle = parent.facingAngle || 0;
  child.x = parent.x;
  child.y = parent.y;
  child.spawnSourceX = parent.x;
  child.spawnSourceY = parent.y;
  child.spawnIntroDuration = 0.26;
  child.spawnIntroTimer = 0.26;
  child.spawnDetourActive = true;
  return child;
}

function spawnSplitterChildren(enemy) {
  const nextTier = Math.max(1, (enemy.tier || 1) - 1);
  if (nextTier === enemy.tier || nextTier < 1) {
    return;
  }

  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directionPairs = [
    [{ x: 0, y: -1 }, { x: 0, y: 1 }],
    [{ x: -1, y: 0 }, { x: 1, y: 0 }],
    [{ x: -1, y: -1 }, { x: 1, y: 1 }],
    [{ x: -1, y: 1 }, { x: 1, y: -1 }]
  ];
  const directionsForSpawn = directionPairs[Math.floor(Math.random() * directionPairs.length)];

  for (const direction of directionsForSpawn) {
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(ENEMY_TYPES.splitter, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      tier: nextTier,
      reward: 0,
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(0, Math.round((enemy.maxArmorHp || enemy.armorHp || 0) * 0.5)) : 0,
      shielded: enemy.shielded
    });

    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnPopcornChildren(enemy) {
  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const variants = [
    ...Array.from({ length: 15 }, () => ({ key: "normal", color: "#74b8ff", hpMult: 1.5, speedMult: 1.5 })),
    ...Array.from({ length: 5 }, () => ({ key: "dark", color: "#3f78d1", hpMult: 3, speedMult: 1 })),
    ...Array.from({ length: 5 }, () => ({ key: "light", color: "#b8e1ff", hpMult: 1, speedMult: 3 }))
  ];

  for (let index = variants.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [variants[index], variants[swapIndex]] = [variants[swapIndex], variants[index]];
  }

  for (const variant of variants) {
    const candidateCells = [];
    for (let attempt = 0; attempt < 16; attempt += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 8;
      candidateCells.push({
        x: Math.round(originCell.x + Math.cos(angle) * distance),
        y: Math.round(originCell.y + Math.sin(angle) * distance)
      });
    }
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, candidateCells, originCell);
    if (!spawnPath) {
      continue;
    }
      const child = createEnemy(ENEMY_TYPES.kernel, {
        portalIndex: enemy.portalIndex,
        startCell: spawnPath.startCell,
        route: spawnPath.route,
        reward: 1,
        hp: 2,
        speed: Math.max(enemy.speed * variant.speedMult, CELL_SIZE * 2.7),
        sizeScale: 0.5,
      color: variant.color,
      kernelVariant: variant.key,
      hidden: enemy.hidden,
      armored: enemy.armored,
      armorHp: enemy.armored ? Math.max(0, enemy.armorHp || 0) : 0,
      shielded: enemy.shielded
    });

    if (child) {
      const prepared = prepareSummonedChild(child, enemy);
      prepared.spawnSourceX = enemy.x;
      prepared.spawnSourceY = enemy.y;
      prepared.spawnIntroTimer = 0.5;
      prepared.spawnIntroDuration = 0.5;
      pushEnemy(prepared);
    }
  }
}

function spawnIdineChildren(enemy) {
  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const directions = [
    { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 },
    { x: 1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: 1 }, { x: -1, y: -1 }
  ];
  for (let index = 0; index < directions.length; index += 1) {
    const direction = directions[index];
    const childType = index < 4 ? ENEMY_TYPES.celun : ENEMY_TYPES.celris;
    const distance = index < 4 ? 2 : 3;
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x * distance,
      y: originCell.y + direction.y * distance
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(childType, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      reward: 0
    });
    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function spawnOrbChildren(enemy, primaryType, secondaryType) {
  const originCell = {
    x: Math.max(0, Math.min(COLS - 1, Math.floor(enemy.x / CELL_SIZE))),
    y: Math.max(0, Math.min(ROWS - 1, Math.floor(enemy.y / CELL_SIZE)))
  };
  const childTypes = [primaryType, primaryType, secondaryType, secondaryType];
  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 }
  ];
  for (let index = 0; index < childTypes.length; index += 1) {
    const childType = childTypes[index];
    const direction = directions[index];
    const spawnPath = resolveChildSpawnPath(enemy.portalIndex, [{
      x: originCell.x + direction.x,
      y: originCell.y + direction.y
    }], originCell);
    if (!spawnPath) {
      continue;
    }
    const child = createEnemy(childType, {
      portalIndex: enemy.portalIndex,
      startCell: spawnPath.startCell,
      route: spawnPath.route,
      reward: 0
    });
    if (child) {
      pushEnemy(prepareSummonedChild(child, enemy));
    }
  }
}

function purgeDefeatedEnemies() {
  const nextEnemies = [];
  const hydraGroupsToSync = new Set();

  for (const enemy of enemies) {
    if (enemy.hp > 0) {
      nextEnemies.push(enemy);
    } else {
      addEnemyDeathAnimation(enemy);
      if (enemy.key === "hydra" && enemy.hydraGroupId) {
        hydraGroupsToSync.add(enemy.hydraGroupId);
      }
      if (enemy.key === "idaen") {
        spawnMegaWaffleChildren(enemy);
      } else if (enemy.key === "hydra" && enemy.hydraStage === 3) {
        spawnHydraShieldChild(enemy);
      } else if (enemy.key === "idine") {
        spawnIdineChildren(enemy);
      } else if (enemy.key === "celun") {
        spawnOrbChildren(enemy, ENEMY_TYPES.cel, ENEMY_TYPES.lun);
      } else if (enemy.key === "celris") {
        spawnOrbChildren(enemy, ENEMY_TYPES.cel, ENEMY_TYPES.ris);
      } else if (enemy.key === "popcorn" && !enemy.popcornKernel) {
        spawnPopcornChildren(enemy);
      } else if (enemy.key === "waffle16" && (enemy.tier || 1) > 1) {
        spawnWaffleChildren(enemy, ENEMY_TYPES.waffle16, 4, 4);
      } else if (enemy.key === "diamond" && (enemy.tier || 1) > 1) {
        spawnDiamondChildren(enemy);
      } else if (enemy.key === "behemoth") {
        spawnBehemothChildren(enemy);
      } else if (enemy.key === "xer") {
        spawnXerChildren(enemy);
      } else if (enemy.key === "sentinel" && (enemy.tier || 1) > 1) {
        spawnSentinelChildren(enemy);
      } else if (enemy.key === "splitter" && (enemy.tier || 1) > 1) {
        spawnSplitterChildren(enemy);
      } else if (enemy.key === "shield" && (enemy.tier || 1) > 1) {
        spawnShieldChildren(enemy);
      } else if ((enemy.tier || 1) > 1) {
        spawnGenericTierChildren(enemy);
      }
      money += enemyCashDropFromKill(enemy);
    }
  }

  enemies = nextEnemies;
  for (const hydraGroupId of hydraGroupsToSync) {
    syncHydraGroupStatuses(hydraGroupId, enemies);
  }
}

function updateHud() {
  if (blockChoicePanel) {
    blockChoicePanel.hidden = false;
    blockChoicePanel.style.display = "grid";
  }
  nextPieceText.textContent = "Block choices";
  if (blockChoicePriceText) {
    blockChoicePriceText.textContent = freeBlocks > 0 ? `Block price: Free (${freeBlocks} left)` : `Block price: ${currentBlockCost}`;
  }
  if (blockChoiceHotkeys) {
    blockChoiceHotkeys.textContent = "R rotate | M mirror";
  }
  if (pieceChoicePrimaryButton) {
    setPieceChoiceButtonContent(pieceChoicePrimaryButton, pieceChoices[0], 0);
    pieceChoicePrimaryButton.classList.toggle("active", activePieceChoiceIndex === 0);
  }
  if (pieceChoiceSecondaryButton) {
    setPieceChoiceButtonContent(pieceChoiceSecondaryButton, pieceChoices[1], 1);
    pieceChoiceSecondaryButton.classList.toggle("active", activePieceChoiceIndex === 1);
  }
  if (routeText) {
    routeText.textContent = isGraveyardMap()
      ? "Routes: gravebound"
      : allRoutesOpen(routes) ? `Routes: ${routes.length} open` : "Routes: blocked";
  }
  updateTowerButtons();
  if (moneyText) {
    moneyText.textContent = `Cash: ${money}`;
  }
  boardCashText.textContent = `Cash: ${money}`;
  freeBlockText.textContent = freeBlocks > 0 ? `Free blocks left: ${freeBlocks} | Block price after free: ${currentBlockCost}` : `Block price: ${currentBlockCost}`;
  livesText.textContent = `Base HP: ${Math.max(0, Math.ceil(lives))}`;
  waveText.textContent = `Wave: ${waveNumber}`;
  enemyText.textContent = `Enemies: ${enemies.length}`;
  if (autoWaveToggle) {
    autoWaveToggle.checked = autoWaveEnabled;
  }
  speedControls?.querySelectorAll("[data-speed]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.speed) === gameSpeedMultiplier);
  });
  waveButton.textContent = autoWaveEnabled ? "Start Wave Now" : "Start Wave";
  if (selectionText) {
    selectionText.textContent = `Selected: ${TOWER_INFO[selectedTowerType].name}`;
  }
  if (upgradeText) {
    upgradeText.textContent = `Upgrade: ${currentTool === "upgrade" ? "click tower, max 5" : "max 5"}`;
  }
  updateSandboxControls();
  updateAirstrikeControls();
  renderTutorial();
  renderWarningPanel();

  if (statusText) {
    if (messageTimer > 0) {
      statusText.textContent = message;
    } else if (lives <= 0) {
      statusText.textContent = "Game over.";
    } else if (!allRoutesOpen(routes)) {
      statusText.textContent = "The path is blocked. Adjust your block layout to reopen the route.";
    } else if (wave && !wave.complete) {
      statusText.textContent = `Wave ${waveNumber} in progress.`;
    } else if (autoWaveEnabled) {
      statusText.textContent = isSandboxMode() && sandboxWaveTarget !== null
        ? `Auto wave armed at ${gameSpeedMultiplier}x. Sandbox wave ${sandboxWaveTarget} will repeat on its own.`
        : `Auto wave armed at ${gameSpeedMultiplier}x. Next wave ${waveNumber + 1} will start on its own.`;
    } else {
      statusText.textContent = isSandboxMode() && sandboxWaveTarget !== null
        ? `Path ready at ${gameSpeedMultiplier}x. Build and start sandbox wave ${sandboxWaveTarget}.`
        : `Path ready at ${gameSpeedMultiplier}x. Build and start wave ${waveNumber + 1}.`;
    }
  }
}

function updateAmbientEffects(deltaTime) {
  ambientTimer += deltaTime;

  const spawnRate = selectedMap === "freezingmountains" ? 0.16
    : activeMap.scenery === "canyon" ? 0.22
    : activeMap.scenery === "ruins" ? 0.32
    : activeMap.scenery === "mango" ? 0.2
    : activeMap.scenery === "graveyard" ? 0.26
    : activeMap.scenery === "furnace" ? 0.12
    : Infinity;

  while (ambientTimer >= spawnRate && spawnRate !== Infinity) {
    ambientTimer -= spawnRate;

    if (activeMap.scenery === "canyon") {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 18 + Math.random() * 22,
        vy: -4 + Math.random() * 8,
        radius: 8 + Math.random() * 12,
        ttl: 1.8 + Math.random() * 1.6,
        color: `rgba(196, 153, 103, ${0.08 + Math.random() * 0.08})`
      });
    } else if (activeMap.scenery === "ruins") {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 12,
        vx: -6 + Math.random() * 12,
        vy: -(20 + Math.random() * 18),
        radius: 4 + Math.random() * 7,
        ttl: 2.4 + Math.random() * 1.8,
        color: selectedMap === "acidcaves"
          ? `rgba(147, 255, 170, ${0.1 + Math.random() * 0.1})`
          : `rgba(143, 205, 235, ${0.08 + Math.random() * 0.08})`
      });
    } else if (activeMap.scenery === "mango") {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 12 + Math.random() * 16,
        vy: 6 + Math.random() * 12,
        radius: 5 + Math.random() * 9,
        ttl: 1.8 + Math.random() * 1.4,
        color: Math.random() > 0.5
          ? `rgba(255, 193, 77, ${0.08 + Math.random() * 0.08})`
          : `rgba(255, 149, 64, ${0.08 + Math.random() * 0.08})`
      });
    } else if (activeMap.scenery === "graveyard") {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: -4 + Math.random() * 8,
        vy: -(10 + Math.random() * 12),
        radius: 3 + Math.random() * 5,
        ttl: 2 + Math.random() * 1.2,
        color: `rgba(220, 235, 222, ${0.05 + Math.random() * 0.05})`
      });
    } else if (activeMap.scenery === "furnace") {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: canvas.height - 24 - Math.random() * 180,
        vx: -8 + Math.random() * 16,
        vy: -(18 + Math.random() * 24),
        radius: 3 + Math.random() * 5,
        ttl: 1.1 + Math.random() * 1.2,
        color: Math.random() > 0.4
          ? `rgba(255, 168, 72, ${0.08 + Math.random() * 0.1})`
          : `rgba(255, 97, 38, ${0.08 + Math.random() * 0.1})`
      });
    } else if (selectedMap === "freezingmountains") {
      ambientParticles.push({
        x: Math.random() * canvas.width,
        y: -12,
        vx: -10 + Math.random() * 20,
        vy: 18 + Math.random() * 24,
        radius: 3 + Math.random() * 5,
        ttl: 3 + Math.random() * 1.6,
        color: Math.random() > 0.45
          ? `rgba(255, 255, 255, ${0.12 + Math.random() * 0.12})`
          : `rgba(176, 225, 255, ${0.1 + Math.random() * 0.1})`
      });
    }
  }

  ambientParticles = ambientParticles
    .map((particle) => ({
      ...particle,
      x: particle.x + particle.vx * deltaTime,
      y: particle.y + particle.vy * deltaTime,
      ttl: particle.ttl - deltaTime
    }))
    .filter((particle) => particle.ttl > 0 && particle.x > -40 && particle.x < canvas.width + 40 && particle.y > -40 && particle.y < canvas.height + 40);
}

function drawGrid() {
  const perspective = boardPerspective();
  const sampleCount = 16;

  if (activeMap.scenery === "factory") {
    ctx.strokeStyle = "rgba(230, 237, 245, 0.16)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    const centerLineTop = projectBoardPoint(perspective.boardWidth / 2, perspective.horizonY);
    const centerLineBottom = projectBoardPoint(perspective.boardWidth / 2, perspective.boardHeight);
    ctx.moveTo(centerLineTop.x, centerLineTop.y);
    ctx.lineTo(centerLineBottom.x, centerLineBottom.y);
    const middleRow = projectBoardPoint(0, perspective.boardHeight / 2);
    ctx.moveTo(projectBoardPoint(0, perspective.boardHeight / 2).x, middleRow.y);
    ctx.lineTo(projectBoardPoint(perspective.boardWidth, perspective.boardHeight / 2).x, middleRow.y);
    ctx.stroke();
    if (factoryState) {
      const hole = factoryQuarterBounds(factoryState.holeIndex);
      ctx.fillStyle = "rgba(10, 14, 18, 0.78)";
      const holeQuad = projectCellQuad(hole.x, hole.y, hole.width, hole.height);
      ctx.beginPath();
      ctx.moveTo(holeQuad.topLeft.x, holeQuad.topLeft.y);
      ctx.lineTo(holeQuad.topRight.x, holeQuad.topRight.y);
      ctx.lineTo(holeQuad.bottomRight.x, holeQuad.bottomRight.y);
      ctx.lineTo(holeQuad.bottomLeft.x, holeQuad.bottomLeft.y);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgba(255, 245, 210, 0.08)";
      for (let x = hole.x; x < hole.x + hole.width; x += 1) {
        for (let y = hole.y; y < hole.y + hole.height; y += 1) {
          if ((x + y) % 3 === 0) {
            const cellQuad = projectCellQuad(x, y);
            ctx.beginPath();
            ctx.moveTo(cellQuad.topLeft.x + 2, cellQuad.topLeft.y + 2);
            ctx.lineTo(cellQuad.topRight.x - 2, cellQuad.topRight.y + 2);
            ctx.lineTo(cellQuad.bottomRight.x - 2, cellQuad.bottomRight.y - 2);
            ctx.lineTo(cellQuad.bottomLeft.x + 2, cellQuad.bottomLeft.y - 2);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
    }
  }

  ctx.save();
  ctx.beginPath();
  ctx.rect(
    perspective.screenOffsetX,
    perspective.screenOffsetY + perspective.horizonY * perspective.screenScale,
    perspective.boardWidth * perspective.screenScale,
    (perspective.boardHeight - perspective.horizonY) * perspective.screenScale
  );
  ctx.clip();

  ctx.strokeStyle = "rgba(217, 196, 164, 0.62)";
  ctx.lineWidth = 1;

  for (let x = 0; x <= COLS; x += 1) {
    ctx.beginPath();
    for (let step = 0; step <= sampleCount; step += 1) {
      const y = (step / sampleCount) * perspective.boardHeight;
      const point = projectBoardPoint(x * CELL_SIZE, y);
      if (step === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }
    ctx.stroke();
  }

  for (let y = 0; y <= ROWS; y += 1) {
    const pointLeft = projectBoardPoint(0, y * CELL_SIZE);
    const pointRight = projectBoardPoint(perspective.boardWidth, y * CELL_SIZE);
    ctx.beginPath();
    ctx.moveTo(pointLeft.x, pointLeft.y);
    ctx.lineTo(pointRight.x, pointRight.y);
    ctx.stroke();
  }

  ctx.restore();
}

function drawMapScenery() {
  if (activeMap.scenery === "canyon") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#efd0a5");
    gradient.addColorStop(0.55, "#d2a06b");
    gradient.addColorStop(1, "#b67d4f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "fortification") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (selectedMap === "dippycastle") {
      gradient.addColorStop(0, "#f5e8bf");
      gradient.addColorStop(0.5, "#e7d3a4");
      gradient.addColorStop(1, "#cfa97a");
    } else {
      gradient.addColorStop(0, "#d5dbdf");
      gradient.addColorStop(0.5, "#bcc5cc");
      gradient.addColorStop(1, "#98a6b3");
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "ruins") {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (selectedMap === "acidcaves") {
      gradient.addColorStop(0, "#04110d");
      gradient.addColorStop(0.45, "#09231d");
      gradient.addColorStop(1, "#020a08");
    } else {
      gradient.addColorStop(0, "#0b3154");
      gradient.addColorStop(0.5, "#12507c");
      gradient.addColorStop(1, "#0b2942");
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "shoals") {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#7fd5f1");
    gradient.addColorStop(0.45, "#4da7d2");
    gradient.addColorStop(1, "#2a6f95");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "cliffs") {
    const leftGradient = ctx.createLinearGradient(0, 0, canvas.width / 2, 0);
    if (selectedMap === "freezingmountains") {
      leftGradient.addColorStop(0, "#f7fbff");
      leftGradient.addColorStop(1, "#d8e6f4");
    } else {
      leftGradient.addColorStop(0, "#5c4b39");
      leftGradient.addColorStop(1, "#7a644e");
    }
    ctx.fillStyle = leftGradient;
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height);
    const rightGradient = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width, 0);
    if (selectedMap === "freezingmountains") {
      rightGradient.addColorStop(0, "#edf6ff");
      rightGradient.addColorStop(1, "#cfe0f4");
    } else {
      rightGradient.addColorStop(0, "#b9aa86");
      rightGradient.addColorStop(1, "#d5c7a0");
    }
    ctx.fillStyle = rightGradient;
    ctx.fillRect(canvas.width / 2, 0, canvas.width / 2, canvas.height);
  } else if (activeMap.scenery === "mango") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fff0a8");
    gradient.addColorStop(0.5, "#f9cf64");
    gradient.addColorStop(1, "#ebb24f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "factory") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#8d949c");
    gradient.addColorStop(0.5, "#6f7782");
    gradient.addColorStop(1, "#555d66");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "furnace") {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#120d0a");
    gradient.addColorStop(0.55, "#261914");
    gradient.addColorStop(1, "#0b0908");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "graveyard") {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#2f3b33");
    gradient.addColorStop(0.5, "#1f2923");
    gradient.addColorStop(1, "#131917");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "meadow") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fffefd");
    gradient.addColorStop(0.55, "#fcfbf7");
    gradient.addColorStop(1, "#f4f2eb");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#d9efd2");
    gradient.addColorStop(1, "#bdd8b7");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  if (activeMap.scenery === "canyon") {
    ctx.fillStyle = "rgba(150, 102, 57, 0.12)";
    for (let band = 0; band < 5; band += 1) {
      ctx.fillRect(0, band * 118 + 18, canvas.width, 18);
    }
  } else if (activeMap.scenery === "fortification") {
    ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
    for (let x = 0; x < canvas.width; x += 72) {
      for (let y = 0; y < canvas.height; y += 72) {
        ctx.fillRect(x + 6, y + 6, 24, 24);
      }
    }
    if (selectedMap === "fortification") {
      const centerY = Math.floor(ROWS / 2);
      ctx.fillStyle = "rgba(35, 47, 58, 0.18)";
      ctx.fillRect(0, (centerY - 5) * CELL_SIZE, COLS * CELL_SIZE, CELL_SIZE * 2);
      ctx.fillRect(0, (centerY + 3) * CELL_SIZE, COLS * CELL_SIZE, CELL_SIZE * 2);
      ctx.fillStyle = "rgba(233, 240, 246, 0.12)";
      ctx.fillRect(0, (centerY - 1) * CELL_SIZE, COLS * CELL_SIZE, CELL_SIZE * 3);
    } else if (selectedMap === "dippycastle") {
      const eggSets = [
        { x: canvas.width * 0.18, y: canvas.height * 0.28, rx: 42, ry: 58, color: "rgba(255, 248, 221, 0.3)" },
        { x: canvas.width * 0.26, y: canvas.height * 0.72, rx: 34, ry: 48, color: "rgba(255, 233, 179, 0.24)" },
        { x: canvas.width * 0.72, y: canvas.height * 0.22, rx: 30, ry: 42, color: "rgba(255, 241, 196, 0.22)" },
        { x: canvas.width * 0.84, y: canvas.height * 0.64, rx: 44, ry: 60, color: "rgba(255, 228, 168, 0.26)" }
      ];
      ctx.fillStyle = "rgba(255, 205, 88, 0.08)";
      for (let x = 0; x < canvas.width; x += 96) {
        ctx.fillRect(x, 0, 24, canvas.height);
      }
      ctx.fillStyle = "rgba(105, 92, 82, 0.42)";
      for (const cell of activeMap.noBuildCells || []) {
        ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      for (const egg of eggSets) {
        ctx.fillStyle = egg.color;
        ctx.beginPath();
        ctx.ellipse(egg.x, egg.y, egg.rx, egg.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(189, 133, 61, 0.24)";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 194, 86, 0.12)";
        ctx.beginPath();
        ctx.arc(egg.x + egg.rx * 0.12, egg.y + egg.ry * 0.08, Math.max(8, egg.rx * 0.18), 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (activeMap.scenery === "ruins") {
    if (selectedMap === "acidcaves") {
      ctx.fillStyle = "rgba(100, 255, 160, 0.08)";
      for (const cell of activeMap.noBuildCells || []) {
        ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      for (let stream = 0; stream < 4; stream += 1) {
        const y = 42 + stream * 126;
        ctx.strokeStyle = "rgba(110, 255, 170, 0.16)";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(canvas.width * 0.18, y - 16, canvas.width * 0.38, y + 22, canvas.width * 0.58, y - 10);
        ctx.bezierCurveTo(canvas.width * 0.76, y - 34, canvas.width * 0.88, y + 18, canvas.width, y - 4);
        ctx.stroke();
      }
      const crystalSets = [
        { x: canvas.width * 0.16, y: canvas.height * 0.22, scale: 0.9 },
        { x: canvas.width * 0.34, y: canvas.height * 0.72, scale: 1.2 },
        { x: canvas.width * 0.63, y: canvas.height * 0.3, scale: 1.05 },
        { x: canvas.width * 0.82, y: canvas.height * 0.62, scale: 1.35 }
      ];
      for (const crystal of crystalSets) {
        ctx.save();
        ctx.translate(crystal.x, crystal.y);
        ctx.scale(crystal.scale, crystal.scale);
        ctx.fillStyle = "rgba(137, 255, 179, 0.22)";
        ctx.strokeStyle = "rgba(191, 255, 213, 0.42)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -34);
        ctx.lineTo(16, -8);
        ctx.lineTo(8, 26);
        ctx.lineTo(-10, 34);
        ctx.lineTo(-18, -4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    } else {
      ctx.fillStyle = "rgba(160, 222, 245, 0.09)";
      for (let band = 0; band < 4; band += 1) {
        ctx.fillRect(0, band * 132 + 28, canvas.width, 14);
      }
    }
  } else if (activeMap.scenery === "shoals") {
    ctx.fillStyle = "rgba(222, 247, 255, 0.12)";
    for (let band = 0; band < 5; band += 1) {
      ctx.fillRect(0, band * 108 + 22, canvas.width, 10);
    }
  } else if (activeMap.scenery === "cliffs") {
    if (selectedMap === "freezingmountains") {
      ctx.fillStyle = "rgba(176, 214, 244, 0.18)";
      const icePatches = [
        { x: canvas.width * 0.18, y: canvas.height * 0.26, w: 120, h: 54 },
        { x: canvas.width * 0.32, y: canvas.height * 0.72, w: 150, h: 62 },
        { x: canvas.width * 0.68, y: canvas.height * 0.22, w: 130, h: 56 },
        { x: canvas.width * 0.8, y: canvas.height * 0.66, w: 160, h: 68 }
      ];
      for (const patch of icePatches) {
        ctx.beginPath();
        ctx.ellipse(patch.x, patch.y, patch.w / 2, patch.h / 2, -0.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = "rgba(130, 190, 240, 0.22)";
      ctx.lineWidth = 5;
      for (let y = 28; y < canvas.height; y += 92) {
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.06, y);
        ctx.lineTo(canvas.width * 0.24, y + 12);
        ctx.lineTo(canvas.width * 0.42, y - 6);
        ctx.lineTo(canvas.width * 0.61, y + 10);
        ctx.lineTo(canvas.width * 0.82, y - 8);
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = "rgba(63, 48, 35, 0.55)";
      for (const cell of activeMap.noBuildCells || []) {
        ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      ctx.fillStyle = "rgba(255, 245, 214, 0.08)";
      for (let y = 0; y < canvas.height; y += 72) {
        ctx.fillRect(canvas.width * 0.58, y, canvas.width * 0.34, 20);
      }
      ctx.fillStyle = "rgba(30, 24, 20, 0.12)";
      ctx.fillRect(0, 0, canvas.width * 0.48, canvas.height);
    }
  } else if (activeMap.scenery === "mango") {
    ctx.fillStyle = "rgba(255, 240, 167, 0.22)";
    ctx.beginPath();
    ctx.arc(canvas.width * 0.83, canvas.height * 0.22, 68, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(138, 93, 9, 0.34)";
    for (const cell of activeMap.noBuildCells || []) {
      ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  } else if (activeMap.scenery === "factory") {
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    for (let x = 0; x < canvas.width; x += CELL_SIZE) {
      ctx.fillRect(x + 2, 0, 2, canvas.height);
    }
    ctx.fillStyle = "rgba(35, 40, 46, 0.18)";
    for (let x = 0; x < canvas.width; x += CELL_SIZE * 5) {
      ctx.fillRect(x, 0, CELL_SIZE * 2, canvas.height);
    }
    ctx.fillStyle = "rgba(20, 25, 30, 0.32)";
    for (let quarter = 0; quarter < 4; quarter += 1) {
      const bounds = factoryQuarterBounds(quarter);
      ctx.fillRect(
        bounds.x * CELL_SIZE + 8,
        bounds.y * CELL_SIZE + 8,
        bounds.width * CELL_SIZE - 16,
        bounds.height * CELL_SIZE - 16
      );
    }
    const gearSets = [
      { x: canvas.width * 0.23, y: canvas.height * 0.28, radius: 28, teeth: 10, rotation: dashOffset * 0.06 },
      { x: canvas.width * 0.31, y: canvas.height * 0.38, radius: 16, teeth: 8, rotation: -dashOffset * 0.09 },
      { x: canvas.width * 0.72, y: canvas.height * 0.3, radius: 24, teeth: 9, rotation: -dashOffset * 0.05 },
      { x: canvas.width * 0.64, y: canvas.height * 0.68, radius: 34, teeth: 12, rotation: dashOffset * 0.04 }
    ];
    for (const gear of gearSets) {
      ctx.save();
      ctx.translate(gear.x, gear.y);
      ctx.rotate(gear.rotation);
      ctx.strokeStyle = "rgba(210, 218, 228, 0.16)";
      ctx.fillStyle = "rgba(38, 44, 52, 0.22)";
      ctx.lineWidth = 5;
      for (let tooth = 0; tooth < gear.teeth; tooth += 1) {
        ctx.save();
        ctx.rotate((Math.PI * 2 * tooth) / gear.teeth);
        ctx.fillRect(gear.radius - 2, -3, 10, 6);
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, gear.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, gear.radius * 0.34, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  } else if (activeMap.scenery === "furnace") {
    ctx.fillStyle = "rgba(67, 51, 34, 0.34)";
    for (let index = 0; index < 64; index += 1) {
      const x = (index * 47) % canvas.width;
      const y = (index * 91) % canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 5 + (index % 4), 0, Math.PI * 2);
      ctx.fill();
    }
    for (const grate of activeMap.lavaGrates || []) {
      const left = grate.x * CELL_SIZE;
      const top = grate.y * CELL_SIZE;
      const width = grate.width * CELL_SIZE;
      const height = grate.height * CELL_SIZE;
      const inset = Math.max(3, Math.round(CELL_SIZE * 0.14));
      const glowInset = inset + 1;
      ctx.save();
      ctx.shadowColor = "rgba(255, 132, 42, 0.76)";
      ctx.shadowBlur = 20;
      ctx.fillStyle = "#f07a24";
      ctx.fillRect(left + glowInset, top + glowInset, width - glowInset * 2, height - glowInset * 2);
      ctx.restore();
      ctx.strokeStyle = "rgba(58, 39, 26, 0.92)";
      ctx.lineWidth = 4;
      ctx.strokeRect(left + inset, top + inset, width - inset * 2, height - inset * 2);
      ctx.fillStyle = "rgba(255, 224, 138, 0.32)";
      for (let bubble = 0; bubble < 4; bubble += 1) {
        const bx = left + width * (bubble % 2 === 0 ? 0.38 : 0.62);
        const by = top + height * (bubble < 2 ? 0.38 : 0.62);
        ctx.beginPath();
        ctx.arc(bx, by, 2 + (bubble % 2), 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const furnaceCoreCells = activeMap.furnaceCore || [];
    if (furnaceCoreCells.length) {
      const coreXs = furnaceCoreCells.map((cell) => cell.x);
      const coreYs = furnaceCoreCells.map((cell) => cell.y);
      const coreBounds = {
        left: Math.min(...coreXs) * CELL_SIZE + 2,
        top: Math.min(...coreYs) * CELL_SIZE + 2,
        width: (Math.max(...coreXs) - Math.min(...coreXs) + 1) * CELL_SIZE - 4,
        height: (Math.max(...coreYs) - Math.min(...coreYs) + 1) * CELL_SIZE - 4
      };
      ctx.save();
      ctx.shadowColor = "rgba(255, 126, 48, 0.74)";
      ctx.shadowBlur = 24;
      ctx.fillStyle = "#f07a24";
      ctx.fillRect(coreBounds.left, coreBounds.top, coreBounds.width, coreBounds.height);
      ctx.restore();
      for (const cell of furnaceCoreCells) {
        ctx.fillStyle = "rgba(255, 210, 134, 0.2)";
        ctx.beginPath();
        ctx.arc(cell.x * CELL_SIZE + CELL_SIZE * 0.5, cell.y * CELL_SIZE + CELL_SIZE * 0.5, 4.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = "rgba(36, 29, 23, 0.86)";
      ctx.lineWidth = 3;
      for (const cell of furnaceCoreCells) {
        const cellInset = Math.max(3, Math.round(CELL_SIZE * 0.14));
        ctx.strokeRect(cell.x * CELL_SIZE + cellInset, cell.y * CELL_SIZE + cellInset, CELL_SIZE - cellInset * 2, CELL_SIZE - cellInset * 2);
      }
      ctx.strokeStyle = "rgba(255, 205, 124, 0.42)";
      ctx.lineWidth = 3;
      for (let x = coreBounds.left + 5; x < coreBounds.left + coreBounds.width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, coreBounds.top + 2);
        ctx.lineTo(x, coreBounds.top + coreBounds.height - 2);
        ctx.stroke();
      }
      for (let y = coreBounds.top + 5; y < coreBounds.top + coreBounds.height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(coreBounds.left + 2, y);
        ctx.lineTo(coreBounds.left + coreBounds.width - 2, y);
        ctx.stroke();
      }
      const centerX = coreBounds.left + coreBounds.width / 2;
      const centerY = coreBounds.top + coreBounds.height / 2;
      ctx.strokeStyle = "rgba(255, 142, 52, 0.22)";
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 8]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, CELL_SIZE * ((activeMap.heatRadius || 2) + 1.25), 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.strokeStyle = "rgba(81, 89, 97, 0.6)";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.06, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.24, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.24, canvas.height * 0.34);
    ctx.lineTo(canvas.width * 0.44, canvas.height * 0.34);
    ctx.moveTo(canvas.width * 0.72, canvas.height * 0.14);
    ctx.lineTo(canvas.width * 0.72, canvas.height * 0.3);
    ctx.lineTo(canvas.width * 0.9, canvas.height * 0.3);
    ctx.moveTo(canvas.width * 0.62, canvas.height * 0.78);
    ctx.lineTo(canvas.width * 0.82, canvas.height * 0.78);
    ctx.lineTo(canvas.width * 0.82, canvas.height * 0.92);
    ctx.stroke();
    const furnaceGearSets = [
      { x: canvas.width * 0.16, y: canvas.height * 0.78, radius: 20, teeth: 9, rotation: dashOffset * 0.05 },
      { x: canvas.width * 0.26, y: canvas.height * 0.83, radius: 12, teeth: 7, rotation: -dashOffset * 0.08 },
      { x: canvas.width * 0.86, y: canvas.height * 0.18, radius: 16, teeth: 8, rotation: dashOffset * 0.06 }
    ];
    for (const gear of furnaceGearSets) {
      ctx.save();
      ctx.translate(gear.x, gear.y);
      ctx.rotate(gear.rotation);
      ctx.strokeStyle = "rgba(153, 162, 170, 0.34)";
      ctx.fillStyle = "rgba(45, 49, 54, 0.28)";
      ctx.lineWidth = 4;
      for (let tooth = 0; tooth < gear.teeth; tooth += 1) {
        ctx.save();
        ctx.rotate((Math.PI * 2 * tooth) / gear.teeth);
        ctx.fillRect(gear.radius - 1, -2.5, 8, 5);
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, gear.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, gear.radius * 0.34, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    const coreGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 24, canvas.width / 2, canvas.height / 2, 160);
    coreGradient.addColorStop(0, "rgba(255, 214, 86, 0.42)");
    coreGradient.addColorStop(0.45, "rgba(255, 122, 45, 0.18)");
    coreGradient.addColorStop(1, "rgba(255, 98, 31, 0)");
    ctx.fillStyle = coreGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "graveyard") {
    ctx.fillStyle = "rgba(196, 214, 197, 0.06)";
    for (let x = 18; x < canvas.width; x += 86) {
      ctx.fillRect(x, 20, 8, canvas.height - 40);
    }
    const zone = mapBuildZone();
    if (zone) {
      ctx.fillStyle = "rgba(173, 211, 181, 0.12)";
      ctx.fillRect(zone.x * CELL_SIZE, zone.y * CELL_SIZE, zone.width * CELL_SIZE, zone.height * CELL_SIZE);
      ctx.strokeStyle = "rgba(205, 235, 210, 0.35)";
      ctx.lineWidth = 3;
      ctx.strokeRect(zone.x * CELL_SIZE, zone.y * CELL_SIZE, zone.width * CELL_SIZE, zone.height * CELL_SIZE);
    }
  }

  for (const particle of ambientParticles) {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  if (!activeMap.hidePortals) {
    for (const portal of activePortals()) {
      const center = projectCellCenterPoint(portal.x, portal.y);
      ctx.fillStyle = "rgba(45, 108, 223, 0.18)";
      ctx.beginPath();
      ctx.arc(center.x, center.y, 16 * center.scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#2d6cdf";
      ctx.lineWidth = 3 * center.scale;
      ctx.stroke();
    }
  }

  for (const obstacle of activeMap.obstacles) {
    const render = projectCellCenterPoint(obstacle.x, obstacle.y);
    const quad = shrinkProjectedQuad(projectCellQuad(obstacle.x, obstacle.y), 0.08);
    const innerQuad = shrinkProjectedQuad(projectCellQuad(obstacle.x, obstacle.y), 0.16);
    if (activeMap.scenery === "furnace") {
      const isCore = activeMap.furnaceCore?.some((cell) => cell.x === obstacle.x && cell.y === obstacle.y);
      const isPit = (activeMap.lavaGrates || []).some((cell) => obstacle.x >= cell.x && obstacle.x < cell.x + cell.width && obstacle.y >= cell.y && obstacle.y < cell.y + cell.height);
      if (isCore || isPit) {
        ctx.save();
        ctx.shadowColor = isCore ? "rgba(255, 126, 48, 0.7)" : "rgba(255, 98, 28, 0.62)";
        ctx.shadowBlur = isCore ? 20 : 14;
        ctx.fillStyle = isCore ? "#f07a24" : "#d95f1d";
        fillProjectedQuad(isCore ? innerQuad : quad, ctx.fillStyle);
        ctx.restore();
        ctx.strokeStyle = "rgba(58, 39, 26, 0.92)";
        ctx.lineWidth = (isCore ? 3 : 2.5) * render.scale;
        ctx.beginPath();
        ctx.moveTo((isCore ? innerQuad : quad).topLeft.x, (isCore ? innerQuad : quad).topLeft.y);
        ctx.lineTo((isCore ? innerQuad : quad).topRight.x, (isCore ? innerQuad : quad).topRight.y);
        ctx.lineTo((isCore ? innerQuad : quad).bottomRight.x, (isCore ? innerQuad : quad).bottomRight.y);
        ctx.lineTo((isCore ? innerQuad : quad).bottomLeft.x, (isCore ? innerQuad : quad).bottomLeft.y);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 224, 138, 0.25)";
        ctx.beginPath();
        ctx.arc(render.x - 5 * render.scale, render.y - 4 * render.scale, isCore ? 4.2 * render.scale : 3.2 * render.scale, 0, Math.PI * 2);
        ctx.arc(render.x + 5 * render.scale, render.y + 4 * render.scale, isCore ? 3.6 * render.scale : 2.8 * render.scale, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = "#6b747c";
        fillProjectedQuad(innerQuad, ctx.fillStyle, "rgba(255,255,255,0.12)", 1.4 * render.scale);
      }
    } else if (selectedMap === "acidcaves") {
      ctx.fillStyle = "#173a2d";
      fillProjectedQuad(innerQuad, ctx.fillStyle);
      ctx.strokeStyle = "rgba(154, 255, 196, 0.4)";
      ctx.lineWidth = 2 * render.scale;
      ctx.beginPath();
      ctx.moveTo(quad.topLeft.x + (quad.topRight.x - quad.topLeft.x) * 0.5, quad.topLeft.y + (quad.bottomLeft.y - quad.topLeft.y) * 0.1);
      ctx.lineTo(quad.topRight.x - (quad.topRight.x - quad.topLeft.x) * 0.08, quad.topRight.y + (quad.bottomRight.y - quad.topRight.y) * 0.26);
      ctx.lineTo(quad.bottomRight.x - (quad.bottomRight.x - quad.bottomLeft.x) * 0.32, quad.bottomRight.y - (quad.bottomRight.y - quad.topRight.y) * 0.08);
      ctx.lineTo(quad.bottomLeft.x + (quad.bottomRight.x - quad.bottomLeft.x) * 0.16, quad.bottomLeft.y - (quad.bottomLeft.y - quad.topLeft.y) * 0.3);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "rgba(126, 255, 171, 0.16)";
      ctx.fill();
    } else if (selectedMap === "freezingmountains") {
      ctx.fillStyle = "#eef7ff";
      fillProjectedQuad(innerQuad, ctx.fillStyle);
      ctx.strokeStyle = "rgba(129, 190, 240, 0.5)";
      ctx.lineWidth = 2 * render.scale;
      ctx.beginPath();
      ctx.moveTo(quad.bottomLeft.x + (quad.topLeft.x - quad.bottomLeft.x) * 0.18, quad.bottomLeft.y - (quad.bottomLeft.y - quad.topLeft.y) * 0.7);
      ctx.lineTo(quad.topLeft.x + (quad.topRight.x - quad.topLeft.x) * 0.42, quad.topLeft.y + (quad.bottomLeft.y - quad.topLeft.y) * 0.08);
      ctx.lineTo(quad.topRight.x - (quad.topRight.x - quad.topLeft.x) * 0.08, quad.topRight.y + (quad.bottomRight.y - quad.topRight.y) * 0.28);
      ctx.lineTo(quad.bottomRight.x - (quad.bottomRight.x - quad.bottomLeft.x) * 0.26, quad.bottomRight.y - (quad.bottomRight.y - quad.topRight.y) * 0.08);
      ctx.lineTo(quad.bottomLeft.x + (quad.bottomRight.x - quad.bottomLeft.x) * 0.22, quad.bottomLeft.y - (quad.bottomLeft.y - quad.topLeft.y) * 0.06);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "rgba(196, 233, 255, 0.28)";
      ctx.fill();
    } else if (activeMap.scenery === "ruins" || activeMap.scenery === "shoals") {
      ctx.fillStyle = activeMap.scenery === "shoals" ? "#7e6843" : "#4d5047";
      fillProjectedQuad(quad, ctx.fillStyle);
      ctx.strokeStyle = activeMap.scenery === "shoals" ? "rgba(220, 197, 138, 0.82)" : "rgba(178, 186, 166, 0.62)";
      ctx.lineWidth = 3 * render.scale;
      ctx.beginPath();
      ctx.moveTo(quad.topLeft.x, quad.topLeft.y);
      ctx.lineTo(quad.topRight.x, quad.topRight.y);
      ctx.lineTo(quad.bottomRight.x, quad.bottomRight.y);
      ctx.lineTo(quad.bottomLeft.x, quad.bottomLeft.y);
      ctx.closePath();
      ctx.stroke();
    } else {
      ctx.fillStyle = "#474f56";
      fillProjectedQuad(quad, ctx.fillStyle, "rgba(140, 150, 162, 0.44)", 2 * render.scale);
    }
  }
}

function drawRoundedRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.fill();
}

function drawRoute() {
  if (activeMap.hideRoutes || isGraveyardMap() || !allRoutesOpen(routes)) {
    return;
  }

  const mainRouteCells = new Set(routes.flat().map((point) => `${point.x},${point.y}`));
  const offTrackRoutes = new Map();
  for (const enemy of enemies) {
    if (!enemy.route || enemy.route.length < 2) {
      continue;
    }
    if (!enemy.route.some((point) => !mainRouteCells.has(`${point.x},${point.y}`))) {
      continue;
    }
    const key = enemy.route.map((point) => `${point.x},${point.y}`).join("|");
    offTrackRoutes.set(key, enemy.route);
  }

  for (const path of routes) {
    ctx.save();
    ctx.setLineDash([2, 13]);
    ctx.lineDashOffset = -dashOffset;
    ctx.strokeStyle = "#2d6cdf";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();

    path.forEach((point, index) => {
      const center = projectCellCenterPoint(point.x, point.y);
      if (index === 0) {
        ctx.moveTo(center.x, center.y);
      } else {
        ctx.lineTo(center.x, center.y);
      }
    });

    ctx.stroke();
    ctx.restore();
  }

  for (const route of offTrackRoutes.values()) {
    ctx.save();
    ctx.setLineDash([2, 10]);
    ctx.lineDashOffset = -dashOffset * 0.8;
    ctx.strokeStyle = "rgba(125, 176, 255, 0.45)";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    route.forEach((point, index) => {
      const center = projectCellCenterPoint(point.x, point.y);
      if (index === 0) {
        ctx.moveTo(center.x, center.y);
      } else {
        ctx.lineTo(center.x, center.y);
      }
    });
    ctx.stroke();
    ctx.restore();
  }
}

function drawGhostRoutes(previewRoutes) {
  if (isGraveyardMap()) {
    return;
  }
  for (const path of previewRoutes) {
    if (!path || path.length === 0) {
      continue;
    }
    ctx.save();
    ctx.setLineDash([8, 8]);
    ctx.lineDashOffset = -dashOffset * 0.7;
    ctx.strokeStyle = "rgba(165, 214, 255, 0.55)";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    path.forEach((point, index) => {
      const center = projectCellCenterPoint(point.x, point.y);
      if (index === 0) {
        ctx.moveTo(center.x, center.y);
      } else {
        ctx.lineTo(center.x, center.y);
      }
    });
    ctx.stroke();
    ctx.restore();
  }
}

function drawFactoryRouteOverlays() {
  return;
}

function drawBlock(block) {
  const offset = entityRenderOffset(block);
  const fillFace = (points, fillStyle) => {
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let index = 1; index < points.length; index += 1) {
      ctx.lineTo(points[index].x, points[index].y);
    }
    ctx.closePath();
    ctx.fill();
  };

  for (const cell of block.cells) {
    const has = (dx, dy) => block.cells.some((other) => other.x === cell.x + dx && other.y === cell.y + dy);
    const quad = projectCellQuad(cell.x, cell.y);
    const render = projectCellCenterPoint(cell.x, cell.y);
    const depth = 8 * render.scale;
    const topLeft = { x: quad.topLeft.x + offset.x, y: quad.topLeft.y + offset.y };
    const topRight = { x: quad.topRight.x + offset.x, y: quad.topRight.y + offset.y };
    const bottomRight = { x: quad.bottomRight.x + offset.x, y: quad.bottomRight.y + offset.y };
    const bottomLeft = { x: quad.bottomLeft.x + offset.x, y: quad.bottomLeft.y + offset.y };
    const drop = { x: 0, y: depth };
    const lowerRight = {
      topRight: { x: topRight.x + drop.x, y: topRight.y + drop.y },
      bottomRight: { x: bottomRight.x + drop.x, y: bottomRight.y + drop.y }
    };
    const lowerBottom = {
      bottomLeft: { x: bottomLeft.x + drop.x, y: bottomLeft.y + drop.y },
      bottomRight: { x: bottomRight.x + drop.x, y: bottomRight.y + drop.y }
    };

    if (!has(1, 0)) {
      fillFace([topRight, bottomRight, lowerRight.bottomRight, lowerRight.topRight], "rgba(0, 0, 0, 0.24)");
    }
    if (!has(0, 1)) {
      fillFace([bottomLeft, bottomRight, lowerBottom.bottomRight, lowerBottom.bottomLeft], "rgba(0, 0, 0, 0.18)");
    }

    fillFace([topLeft, topRight, bottomRight, bottomLeft], block.color);

    ctx.strokeStyle = "rgba(255, 248, 240, 0.95)";
    ctx.lineWidth = Math.max(1.2, 2 * render.scale);
    ctx.beginPath();
    ctx.moveTo(topLeft.x + 2, topLeft.y + 2);
    ctx.lineTo(topRight.x - 2, topRight.y + 2);
    ctx.lineTo(bottomRight.x - 2, bottomRight.y - 2);
    ctx.lineTo(bottomLeft.x + 2, bottomLeft.y - 2);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawPreview() {
  if (!hoverCell || !inBounds(hoverCell.x, hoverCell.y)) {
    return;
  }

  if (currentTool === "wall") {
    const valid = canPlacePiece(hoverCell.x, hoverCell.y);
    if (valid) {
      drawGhostRoutes(computeRoutes(placedCells(hoverCell.x, hoverCell.y)));
    }

    ctx.save();
    if (valid) {
      ctx.shadowColor = "rgba(120, 255, 154, 0.7)";
      ctx.shadowBlur = 18;
    }
    for (const cell of placedCells(hoverCell.x, hoverCell.y)) {
      if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
        continue;
      }

      const quad = projectCellQuad(cell.x, cell.y);
      ctx.fillStyle = valid ? "rgba(113, 235, 126, 0.4)" : "rgba(204, 63, 92, 0.35)";
      ctx.beginPath();
      ctx.moveTo(quad.topLeft.x, quad.topLeft.y);
      ctx.lineTo(quad.topRight.x, quad.topRight.y);
      ctx.lineTo(quad.bottomRight.x, quad.bottomRight.y);
      ctx.lineTo(quad.bottomLeft.x, quad.bottomLeft.y);
      ctx.closePath();
      ctx.fill();
      if (valid) {
        ctx.strokeStyle = "rgba(184, 255, 196, 0.92)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    ctx.restore();
    return;
  }

  if (currentTool === "tower") {
    drawTowerGhost(hoverCell.x, hoverCell.y);
  }
}

function drawArmedAbilityPreview() {
  if (armedAbility !== "airstrike" || !hoverPoint) {
    return;
  }

  const tower = preferredAirstrikeTower();
  const stats = tower ? towerStats(tower) : null;
  const blocked = tower ? !towerHasLineOfSightToPoint(tower, hoverPoint.x, hoverPoint.y) : true;
  const radius = stats ? Math.max(stats.airstrikeSplash * 2.2, 42) : 42;

  ctx.save();
  ctx.strokeStyle = blocked ? "rgba(214, 55, 55, 0.92)" : "rgba(255, 192, 78, 0.95)";
  ctx.fillStyle = blocked ? "rgba(214, 55, 55, 0.12)" : "rgba(255, 192, 78, 0.12)";
  ctx.lineWidth = blocked ? 3 : 2;
  ctx.beginPath();
  ctx.arc(hoverPoint.x, hoverPoint.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  if (tower) {
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(tower.centerX, tower.centerY);
    ctx.lineTo(hoverPoint.x, hoverPoint.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.restore();
}

function drawTowerShape(type, level, centerX, centerY, aimAngle = -Math.PI / 2, ghost = false, invalid = false, tower = null, renderScale = 1) {
  const stats = tower ? towerStats(tower) : null;
  const path1 = tower?.path1 || 0;
  const path2 = tower?.path2 || 0;
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(aimAngle);
  ctx.scale(renderScale, renderScale);

  if (type === "crossbow") {
    ctx.strokeStyle = ghost ? (invalid ? "rgba(255, 225, 225, 0.95)" : "rgba(231, 209, 184, 0.72)") : "#f4dcc1";
    ctx.fillStyle = ghost ? "rgba(161, 119, 82, 0.42)" : "#7b5636";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-7, -7);
    ctx.lineTo(7, 7);
    ctx.moveTo(-7, 7);
    ctx.lineTo(7, -7);
    ctx.stroke();
    ctx.strokeStyle = ghost ? "rgba(246, 231, 214, 0.88)" : "#f7ead8";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(12, 0);
    ctx.stroke();
    if (level >= 2) {
      ctx.beginPath();
      ctx.moveTo(1, -3);
      ctx.lineTo(12, -3);
      ctx.moveTo(1, 3);
      ctx.lineTo(12, 3);
      ctx.stroke();
    }
    if (level >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 223, 176, 0.82)" : "#f2c793";
      ctx.beginPath();
      ctx.moveTo(-4, -10);
      ctx.lineTo(4, -10);
      ctx.moveTo(-4, 10);
      ctx.lineTo(4, 10);
      ctx.stroke();
    }
    if (level >= 4) {
      ctx.strokeStyle = ghost ? "rgba(250, 236, 221, 0.9)" : "#f8ecde";
      ctx.beginPath();
      ctx.moveTo(2, 0);
      ctx.lineTo(15, 0);
      ctx.stroke();
    }
  } else if (type === "gate") {
    const tankFill = ghost ? (invalid ? "rgba(212, 73, 96, 0.78)" : "rgba(104, 171, 112, 0.42)") : "#5e9d62";
    const tankStroke = ghost ? "rgba(223, 247, 205, 0.72)" : "#e7f8d5";
    const nozzleFill = ghost ? "rgba(162, 228, 156, 0.66)" : "#a5ef9d";
    ctx.fillStyle = tankFill;
    ctx.strokeStyle = tankStroke;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
      roundedRectPath(ctx, -11, -9, 22, 18, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = nozzleFill;
    ctx.fillRect(2, -4, 13, 8);
    ctx.strokeRect(2, -4, 13, 8);
    ctx.fillStyle = ghost ? "rgba(224, 255, 214, 0.7)" : "#ecffd8";
    ctx.beginPath();
    ctx.arc(-4, 0, 4.5, 0, Math.PI * 2);
    ctx.fill();
    if (level >= 3) {
      ctx.strokeStyle = ghost ? "rgba(193, 255, 145, 0.74)" : "#befe7b";
      ctx.beginPath();
      ctx.moveTo(-9, -12);
      ctx.lineTo(7, -12);
      ctx.moveTo(-9, 12);
      ctx.lineTo(7, 12);
      ctx.stroke();
    }
    if (level >= 5) {
      ctx.strokeStyle = ghost ? "rgba(255, 240, 173, 0.72)" : "#ffe072";
      ctx.beginPath();
      ctx.arc(-4, 0, 8.5, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (type === "laser") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(255, 124, 168, 0.45)") : "#ff7ca8";
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(-10, -12);
    ctx.lineTo(-10, 12);
    ctx.closePath();
    ctx.fill();
    if (path1 >= 1) {
      ctx.strokeStyle = ghost ? "rgba(255, 250, 250, 0.8)" : "#fffdf8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-3, -7);
      ctx.lineTo(9, 0);
      ctx.lineTo(-3, 7);
      ctx.stroke();
    }
    if (path2 >= 1) {
      ctx.fillStyle = ghost ? "rgba(255, 227, 92, 0.65)" : "#ffe35c";
      ctx.fillRect(-2, -2.5, 10, 5);
    }
    if (path1 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 255, 255, 0.85)" : "#ffffff";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(-8, -10);
      ctx.lineTo(-12, 0);
      ctx.lineTo(-8, 10);
      ctx.stroke();
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 238, 147, 0.85)" : "#fff095";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(3, -10);
      ctx.lineTo(13, 0);
      ctx.lineTo(3, 10);
      ctx.stroke();
    }
    if (path2 >= 4) {
      ctx.strokeStyle = ghost ? "rgba(255, 239, 170, 0.9)" : "#fff7bd";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-1, -8);
      ctx.lineTo(-1, 8);
      ctx.moveTo(5, -8);
      ctx.lineTo(5, 8);
      ctx.stroke();
    }
  } else if (type === "shotgun") {
    const drawShotgunBody = (offsetX, offsetY, localAngle, scale = 1) => {
      ctx.save();
      ctx.translate(offsetX, offsetY);
      ctx.rotate(localAngle);
      ctx.scale(scale, scale);
      ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(255, 211, 77, 0.52)") : "#ffd34d";
      ctx.beginPath();
      ctx.moveTo(13, 0);
      ctx.lineTo(-7, -9);
      ctx.lineTo(-13, -5);
      ctx.lineTo(-13, 5);
      ctx.lineTo(-7, 9);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = ghost ? "rgba(255, 246, 196, 0.82)" : "#fff0a8";
      ctx.lineWidth = 1.8;
      ctx.stroke();
      if (path1 >= 1) {
        ctx.fillStyle = ghost ? "rgba(255, 183, 87, 0.75)" : "#ffb64f";
        ctx.fillRect(-5, -3, 10, 6);
      }
      if (path1 >= 3) {
        ctx.strokeStyle = ghost ? "rgba(255, 198, 124, 0.85)" : "#ffc76e";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-10, -7);
        ctx.lineTo(-3, -2);
        ctx.moveTo(-10, 7);
        ctx.lineTo(-3, 2);
        ctx.stroke();
      }
      if (path2 >= 3) {
        ctx.strokeStyle = ghost ? "rgba(255, 248, 161, 0.88)" : "#fff38c";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(4, -6);
        ctx.lineTo(16, -3);
        ctx.moveTo(4, 6);
        ctx.lineTo(16, 3);
        ctx.stroke();
      }
      ctx.restore();
    };
    if (path2 >= 4) {
      const shotgunAngles = Array.isArray(tower?.shotgunAimAngles) && tower.shotgunAimAngles.length > 0
        ? tower.shotgunAimAngles.slice(0, 3)
        : [-0.42, 0, 0.42].map((offset) => (tower?.aimAngle || 0) + offset);
      const baseAngle = tower?.aimAngle || shotgunAngles[1] || 0;
      const cannonOffsets = [
        { x: 0, y: -8 },
        { x: 0, y: 0 },
        { x: 0, y: 8 }
      ];
      for (let index = 0; index < 3; index += 1) {
        const cannon = cannonOffsets[index];
        const angle = shotgunAngles[index] ?? baseAngle;
        drawShotgunBody(cannon.x, cannon.y, angle - baseAngle, index === 1 ? 0.84 : 0.8);
      }
    } else {
      drawShotgunBody(0, 0, 0, 1);
    }
  } else if (type === "freezer") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(181, 235, 255, 0.5)") : "#b5ebff";
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = ghost ? "rgba(255, 255, 255, 0.8)" : "#f8ffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-7, 0);
    ctx.lineTo(7, 0);
    ctx.moveTo(0, -7);
    ctx.lineTo(0, 7);
    ctx.stroke();
    if (path1 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(220, 250, 255, 0.8)" : "#e4fbff";
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(168, 231, 255, 0.75)" : "#8fdfff";
      ctx.beginPath();
      ctx.arc(0, 0, 17, 0.3, Math.PI * 1.7);
      ctx.stroke();
    }
  } else if (type === "fireball") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(116, 70, 41, 0.72)") : "#6f4425";
    ctx.beginPath();
      roundedRectPath(ctx, -12, -12, 24, 24, 5);
    ctx.fill();
    ctx.strokeStyle = ghost ? "rgba(255, 232, 190, 0.8)" : "#f6d1a0";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = ghost ? "rgba(255, 168, 108, 0.78)" : "#ff8b4d";
    ctx.beginPath();
    ctx.moveTo(0, -16);
    ctx.lineTo(9, -2);
    ctx.lineTo(2, 11);
    ctx.lineTo(-3, 4);
    ctx.lineTo(-9, 10);
    ctx.lineTo(-7, -2);
    ctx.closePath();
    ctx.fill();
    if (path1 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 228, 158, 0.82)" : "#ffd287";
      ctx.beginPath();
      ctx.moveTo(-16, -4);
      ctx.lineTo(16, 0);
      ctx.lineTo(-16, 4);
      ctx.stroke();
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 202, 129, 0.82)" : "#ffca75";
      ctx.beginPath();
      ctx.arc(0, 0, path2 >= 5 ? 21 : 18, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (path1 >= 5) {
      ctx.strokeStyle = ghost ? "rgba(255, 245, 210, 0.86)" : "#fff1c7";
      ctx.beginPath();
      ctx.moveTo(-12, -18);
      ctx.lineTo(18, 0);
      ctx.lineTo(-12, 18);
      ctx.stroke();
    }
  } else if (type === "dippy") {
    const dippyStats = stats || towerStats(tower || mockTower("dippy"));
    const ammoCount = path1 >= 3 ? dippyStats.burst : 0;
    const visibleAmmo = ammoCount > 0 ? (tower ? Math.max(0, tower.dippyAmmo ?? dippyStats.burst) : dippyStats.burst) : 0;
    const sunny = path2 >= 3;
    if (sunny) {
      ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(255, 255, 245, 0.7)") : "#fffdf7";
      ctx.beginPath();
      ctx.ellipse(0, 0, 21, 17, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = ghost ? "rgba(255, 205, 84, 0.8)" : dippyStats.yolkColor || "#ffce54";
      ctx.beginPath();
      ctx.arc(2, 0, 7.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = ghost ? "rgba(255,255,255,0.8)" : "#fefefe";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    } else {
      ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(255, 246, 214, 0.72)") : "#fff0d1";
      ctx.beginPath();
      ctx.ellipse(0, 0, 15, 20, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = ghost ? "rgba(214, 180, 120, 0.85)" : "#c9964b";
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }
    if (ammoCount > 1) {
      ctx.save();
      if (ammoCount >= 12) {
        const podGap = 13;
        const podWidth = 20;
        const podHeight = 26;
        const perPod = 6;
        const leftAmmo = tower?.dippyPodAmmo ? Math.max(0, Math.min(perPod, tower.dippyPodAmmo[0] ?? perPod)) : Math.min(perPod, visibleAmmo);
        const rightAmmo = tower?.dippyPodAmmo ? Math.max(0, Math.min(perPod, tower.dippyPodAmmo[1] ?? perPod)) : Math.max(0, Math.min(perPod, visibleAmmo - perPod));
        const activePod = tower ? (tower.dippyActivePod || 0) : 0;
        const pods = [
          { x: -podGap, loaded: leftAmmo, active: activePod === 0 },
          { x: podGap, loaded: rightAmmo, active: activePod === 1 }
        ];
        for (const pod of pods) {
          ctx.fillStyle = ghost ? "rgba(91, 102, 112, 0.55)" : "#5c6670";
          ctx.strokeStyle = pod.active
            ? (ghost ? "rgba(255, 226, 163, 0.7)" : "#ffd78a")
            : (ghost ? "rgba(216, 226, 234, 0.55)" : "#dbe4ea");
          ctx.lineWidth = pod.active ? 1.8 : 1.2;
          ctx.fillRect(pod.x - podWidth / 2, -podHeight / 2, podWidth, podHeight);
          ctx.strokeRect(pod.x - podWidth / 2, -podHeight / 2, podWidth, podHeight);
          for (let slot = 0; slot < perPod; slot += 1) {
            const column = slot % 3;
            const row = Math.floor(slot / 3);
            const slotX = pod.x - 6 + column * 6;
            const slotY = -podHeight / 2 + 7 + row * 9;
            ctx.fillStyle = ghost ? "rgba(24, 31, 38, 0.55)" : "#24303a";
            ctx.beginPath();
            ctx.ellipse(slotX, slotY, 2.5, 3.4, 0, 0, Math.PI * 2);
            ctx.fill();
            if (slot < pod.loaded) {
              ctx.fillStyle = ghost ? "rgba(255, 247, 224, 0.7)" : "#fff4dc";
              ctx.beginPath();
              ctx.ellipse(slotX, slotY, 1.75, 2.4, 0, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        ctx.fillStyle = ghost ? "rgba(24, 31, 38, 0.35)" : "#1f2a33";
        ctx.fillRect(-4, -10, 8, 20);
      } else {
        const ammoSlots = dippyAmmoSlotLayout(ammoCount);
        const fillOrder = ensureDippyAmmoOrder(tower, ammoSlots.length);
        const filledSlots = new Set(fillOrder.slice(0, Math.min(visibleAmmo, ammoSlots.length)));
        const rackRadius = ammoCount >= 6 ? 24 : 18;
        ctx.fillStyle = ghost ? "rgba(91, 102, 112, 0.55)" : "#5c6670";
        ctx.strokeStyle = ghost ? "rgba(216, 226, 234, 0.55)" : "#dbe4ea";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, 0, rackRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        for (let index = 0; index < ammoSlots.length; index += 1) {
          const slot = ammoSlots[index];
          ctx.fillStyle = ghost ? "rgba(24, 31, 38, 0.55)" : "#24303a";
          ctx.beginPath();
          ctx.arc(slot.x, slot.y, slot.radius, 0, Math.PI * 2);
          ctx.fill();
          if (filledSlots.has(index)) {
            ctx.fillStyle = ghost ? "rgba(255, 247, 224, 0.7)" : "#fff4dc";
            ctx.beginPath();
            ctx.arc(slot.x, slot.y, slot.radius * 0.62, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.fillStyle = ghost ? "rgba(24, 31, 38, 0.35)" : "#1f2a33";
        ctx.beginPath();
        ctx.arc(0, 0, 5.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    if (path1 >= 2) {
      ctx.strokeStyle = ghost ? "rgba(255, 209, 139, 0.85)" : "#ffcb86";
      ctx.beginPath();
      ctx.moveTo(-5, -8);
      ctx.lineTo(4, -2);
      ctx.lineTo(-2, 7);
      ctx.stroke();
    }
    if (path2 >= 2) {
      ctx.fillStyle = ghost ? "rgba(255,255,255,0.8)" : "#fffdf5";
      ctx.beginPath();
      ctx.arc(8, -4, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === "missile") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(138, 99, 235, 0.42)") : "#8a63eb";
    regularPolygon(0, 0, 12, 6);
    ctx.fill();
    if (path1 >= 1) {
      ctx.fillStyle = ghost ? "rgba(214, 196, 255, 0.65)" : "#c9b4ff";
      ctx.fillRect(-8, -3, 8, 6);
    }
    if (path2 >= 3) {
      ctx.fillStyle = ghost ? "rgba(136, 119, 105, 0.78)" : "#68564b";
      ctx.fillRect(-12, -4.5, 16, 9);
      ctx.fillStyle = ghost ? "rgba(229, 220, 210, 0.82)" : "#d9d2cb";
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(2, -4.5);
      ctx.lineTo(2, 4.5);
      ctx.closePath();
      ctx.fill();
    }
    if (path2 >= 4) {
      ctx.fillStyle = ghost ? "rgba(181, 166, 153, 0.78)" : "#b9aa9a";
      ctx.fillRect(-14, -5.5, 5, 11);
    }
    if (path1 >= 5) {
      ctx.fillStyle = ghost ? "rgba(255, 220, 172, 0.75)" : "#ffd6a8";
      ctx.fillRect(10, -6, 10, 12);
    }
    if (path2 >= 5) {
      ctx.fillStyle = ghost ? "rgba(231, 227, 220, 0.78)" : "#ece8e0";
      ctx.fillRect(-2, -10, 5, 20);
    }
  } else if (type === "trapper") {
    const fillSquare = path1 >= 3;
    if (fillSquare) {
      ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(156, 226, 133, 0.55)") : "#9ce285";
      ctx.fillRect(-11, -11, 22, 22);
    } else {
      ctx.strokeStyle = ghost ? (invalid ? "rgba(255, 222, 222, 0.95)" : "rgba(156, 226, 133, 0.55)") : "#9ce285";
      ctx.lineWidth = 4;
      ctx.strokeRect(-11, -11, 22, 22);
    }
    if (path2 >= 1) {
      ctx.strokeStyle = ghost ? "rgba(209, 255, 190, 0.8)" : "#d3ffc0";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-8, -8);
      ctx.lineTo(8, -8);
      ctx.moveTo(-8, 8);
      ctx.lineTo(8, 8);
      ctx.stroke();
    }
    if (path2 >= 2) {
      ctx.fillStyle = ghost ? "rgba(238, 255, 214, 0.8)" : "#ecffd7";
      ctx.beginPath();
      ctx.arc(-5, 0, 2, 0, Math.PI * 2);
      ctx.arc(5, 0, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    if (path2 >= 4) {
      ctx.strokeStyle = ghost ? "rgba(255, 216, 120, 0.8)" : "#ffd067";
      ctx.beginPath();
      ctx.arc(0, 0, 13, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (type === "tesla") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(108, 188, 255, 0.45)") : "#6cbcff";
    if (stats?.field) {
      ctx.beginPath();
      ctx.arc(0, 0, 11, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(-9, -11);
      ctx.lineTo(-9, 11);
      ctx.closePath();
      ctx.fill();
    }
    if (path1 >= 2) {
      ctx.fillStyle = ghost ? "rgba(187, 232, 255, 0.8)" : "#bce9ff";
      ctx.fillRect(-10, -2, 7, 4);
    }
    if (path1 >= 4) {
      ctx.strokeStyle = ghost ? "rgba(216, 248, 255, 0.85)" : "#d6f8ff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-4, -12);
      ctx.lineTo(2, -18);
      ctx.moveTo(-4, 12);
      ctx.lineTo(2, 18);
      ctx.stroke();
    }
    ctx.fillStyle = ghost ? "rgba(244, 220, 99, 0.78)" : "#f4dc63";
    ctx.fillRect(2, -3 - (path2 >= 5 ? 1 : 0), path2 >= 5 ? 15 : 12, path2 >= 5 ? 8 : 6);
    if (path2 >= 5) {
      ctx.beginPath();
      ctx.arc(-1, 0, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === "drone") {
    ctx.strokeStyle = ghost ? (invalid ? "rgba(255, 222, 222, 0.95)" : "rgba(125, 227, 214, 0.55)") : "#7de3d6";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(14, 0);
    ctx.moveTo(0, -14);
    ctx.lineTo(0, 14);
    ctx.stroke();
    if (path1 >= 1) {
      ctx.strokeStyle = ghost ? "rgba(199, 255, 246, 0.85)" : "#c7fff6";
      ctx.beginPath();
      ctx.moveTo(10, -4);
      ctx.lineTo(16, -4);
      ctx.moveTo(10, 4);
      ctx.lineTo(16, 4);
      ctx.stroke();
    }
    if (path1 >= 3) {
      ctx.fillStyle = ghost ? "rgba(255, 202, 128, 0.8)" : "#ffc47d";
      ctx.fillRect(2, -4, 8, 8);
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(163, 255, 236, 0.7)" : "#a3ffec";
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }
    if (path2 >= 4) {
      ctx.beginPath();
      ctx.moveTo(-2, -10);
      ctx.lineTo(-2, -16);
      ctx.moveTo(-2, 10);
      ctx.lineTo(-2, 16);
      ctx.stroke();
    }
    if (path2 >= 5) {
      ctx.beginPath();
      ctx.moveTo(-8, -3);
      ctx.lineTo(-14, -12);
      ctx.moveTo(-2, -3);
      ctx.lineTo(-6, -14);
      ctx.stroke();
    }
  } else if (type === "support") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(201, 182, 255, 0.5)") : "#c9b6ff";
    ctx.beginPath();
    ctx.moveTo(0, -12);
    ctx.lineTo(10, -4);
    ctx.lineTo(10, 8);
    ctx.lineTo(0, 14);
    ctx.lineTo(-10, 8);
    ctx.lineTo(-10, -4);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = ghost ? "rgba(248, 243, 255, 0.85)" : "#f5f0ff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = ghost ? "rgba(255, 242, 162, 0.8)" : "#ffe47f";
    ctx.fillRect(-2, -8, 4, 16);
    ctx.fillRect(-7, -2, 14, 4);
    if (path1 >= 1) {
      ctx.fillStyle = ghost ? "rgba(255, 219, 122, 0.85)" : "#ffd36a";
      ctx.beginPath();
      ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 201, 143, 0.9)" : "#ffc58a";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0.45, Math.PI * 1.55);
      ctx.stroke();
    }
    if (path2 >= 4) {
      ctx.strokeStyle = ghost ? "rgba(206, 245, 255, 0.9)" : "#d7f6ff";
      ctx.beginPath();
      ctx.moveTo(0, -12);
      ctx.lineTo(0, -20);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, -22, 3, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (path1 >= 1) {
      ctx.strokeStyle = ghost ? "rgba(255, 232, 188, 0.92)" : "#ffe7ba";
      ctx.lineWidth = 2.1;
      ctx.beginPath();
      ctx.moveTo(-13, -8);
      ctx.lineTo(-18, -14);
      ctx.moveTo(13, -8);
      ctx.lineTo(18, -14);
      ctx.stroke();
    }
    if (path1 >= 3) {
      ctx.beginPath();
      ctx.moveTo(-14, 8);
      ctx.lineTo(-18, 14);
      ctx.moveTo(14, 8);
      ctx.lineTo(18, 14);
      ctx.stroke();
    }
    if (path1 >= 4) {
      ctx.fillStyle = ghost ? "rgba(255, 184, 120, 0.86)" : "#ffbf72";
      ctx.beginPath();
      ctx.arc(0, -16, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    if (path1 >= 5) {
      ctx.fillStyle = ghost ? "rgba(255, 132, 98, 0.86)" : "#ff8462";
      ctx.fillRect(-16, -4, 5, 10);
      ctx.fillRect(11, -4, 5, 10);
    }
  } else if (type === "treasury") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(255, 212, 106, 0.5)") : "#ffd46a";
    ctx.beginPath();
    ctx.moveTo(0, -13);
    ctx.lineTo(12, -3);
    ctx.lineTo(9, 12);
    ctx.lineTo(-9, 12);
    ctx.lineTo(-12, -3);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = ghost ? "rgba(255, 246, 220, 0.92)" : "#fff2cc";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = ghost ? "rgba(255, 245, 196, 0.9)" : "#fff1b8";
    ctx.fillRect(-6, -7, 12, 4);
    ctx.fillRect(-2, -11, 4, 16);
    if (path1 >= 1) {
      ctx.fillStyle = ghost ? "rgba(255, 231, 130, 0.9)" : "#ffe782";
      ctx.beginPath();
      ctx.arc(0, 3, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(194, 255, 215, 0.92)" : "#b9ffd0";
      ctx.beginPath();
      ctx.arc(0, 0, 17, 0.25, Math.PI * 1.75);
      ctx.stroke();
    }
    if (path1 >= 5) {
      ctx.strokeStyle = ghost ? "rgba(255, 205, 122, 0.96)" : "#ffcd7a";
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.arc(0, 0, 19, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (type === "orb") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(159, 208, 255, 0.5)") : "#9fd0ff";
    ctx.beginPath();
    ctx.arc(0, 0, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = ghost ? "rgba(235, 246, 255, 0.92)" : "#edf6ff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = ghost ? "rgba(255, 255, 255, 0.76)" : "#ffffff";
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fill();
    if (path1 >= 4) {
      ctx.strokeStyle = ghost ? "rgba(255, 245, 176, 0.84)" : "#fff5b0";
      ctx.lineWidth = 2.1;
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 184, 120, 0.78)" : "#ffb878";
      ctx.beginPath();
      ctx.moveTo(-8, -14);
      ctx.lineTo(8, 14);
      ctx.moveTo(8, -14);
      ctx.lineTo(-8, 14);
      ctx.stroke();
    }
  }

  ctx.restore();

  if (!ghost) {
    ctx.fillStyle = "#fffaf2";
    ctx.font = "bold 12px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(level), centerX, centerY + 16);
  }
}

function drawTowerGhost(x, y) {
  const center = towerPlacementCenter(selectedTowerType, x, y);
  const projected = projectBoardPoint(center.x, center.y);
  const previewTower = mockTower(selectedTowerType, {
    x,
    y,
    centerX: projected.x,
    centerY: projected.y,
    gridCenterX: center.x,
    gridCenterY: center.y,
    renderScale: projected.scale
  });
  const valid = canPlaceTowerAt(x, y);
  const shake = !valid ? Math.sin(lastTimestamp / 18) * (invalidPlacementTimer > 0 ? 4 : 2) : 0;
  const footprint = towerPlacementCells(selectedTowerType, x, y);

  ctx.save();
  ctx.translate(shake, 0);
  drawTowerRangeOverlay(previewTower, {
    primaryStroke: valid ? "rgba(18,26,35,0.42)" : "rgba(204, 63, 92, 0.72)",
    primaryFill: valid ? "rgba(18,26,35,0.1)" : "rgba(204, 63, 92, 0.1)"
  });
  drawBlockedSightOverlay(previewTower);
  for (const cell of footprint) {
    if (!inBounds(cell.x, cell.y)) {
      continue;
    }
    ctx.fillStyle = valid ? "rgba(255, 250, 240, 0.12)" : "rgba(204, 63, 92, 0.25)";
    const quad = projectCellQuad(cell.x, cell.y);
    ctx.beginPath();
    ctx.moveTo(quad.topLeft.x, quad.topLeft.y);
    ctx.lineTo(quad.topRight.x, quad.topRight.y);
    ctx.lineTo(quad.bottomRight.x, quad.bottomRight.y);
    ctx.lineTo(quad.bottomLeft.x, quad.bottomLeft.y);
    ctx.closePath();
    ctx.fill();
  }
  ctx.shadowColor = valid ? "rgba(21, 30, 42, 0.22)" : "rgba(212, 73, 96, 0.48)";
  ctx.shadowBlur = 14;
  drawTowerShape(selectedTowerType, 1, projected.x, projected.y, selectedTowerType === "gate" ? selectedGateRotation * (Math.PI / 2) : -Math.PI / 2, true, !valid, previewTower, projected.scale);
  ctx.restore();
}

function drawTower(tower) {
  const offset = entityRenderOffset(tower);
  const render = projectBoardPoint(tower.centerX + offset.x, tower.centerY + offset.y);
  const centerX = render.x;
  const centerY = render.y;
  const stats = towerStats(tower);
  const renderScale = render.scale;

  if (tower.type === "gate") {
    ctx.save();
    ctx.strokeStyle = "rgba(171, 236, 121, 0.24)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, stats.range * renderScale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (tower.type === "tesla" && stats.field) {
    drawTeslaFieldVisual(centerX, centerY, stats, false);
  }

  if (tower.type === "freezer" && stats.aura) {
    drawFreezerAuraVisual(centerX, centerY, stats, false);
  }

  if (tower.type === "support") {
    ctx.save();
    ctx.strokeStyle = stats.munitions ? "rgba(255, 205, 140, 0.32)" : "rgba(219, 201, 255, 0.28)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, stats.auraRadius * renderScale, 0, Math.PI * 2);
    ctx.stroke();
    if (stats.detectHiddenAura) {
      ctx.strokeStyle = "rgba(209, 246, 255, 0.34)";
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.max(0, stats.auraRadius - 6) * renderScale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.restore();
  }

  if (tower.type === "treasury" && stats.tradeEmpireAura > 1) {
    ctx.save();
    ctx.strokeStyle = "rgba(255, 214, 122, 0.3)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, stats.auraRadius * renderScale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (tower.type === "orb") {
    ensureOrbState(tower, stats);
    const activeMode = displayedOrbType(tower, stats);
    const palette = orbPalette(activeMode, stats);
    ctx.save();
    ctx.strokeStyle = "rgba(159, 208, 255, 0.24)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, (stats.orbitRadius || CELL_SIZE) * renderScale, 0, Math.PI * 2);
    ctx.stroke();
    for (const orb of tower.orbs || []) {
      const angle = orb.angle ?? ((tower.orbRotation || 0) + ((Math.PI * 2) / Math.max(1, stats.orbCount || 1)) * (orb.slot || 0));
      const orbitRadius = (stats.orbitRadius || CELL_SIZE) * renderScale;
      const orbX = centerX + Math.cos(angle) * orbitRadius;
      const orbY = centerY + Math.sin(angle) * orbitRadius;
      ctx.globalAlpha = orb.dead ? 0.18 : 1;
      if (!orb.dead) {
        const halo = ctx.createRadialGradient(orbX, orbY, 1, orbX, orbY, ((tower.path2 || 0) >= 5 ? 20 : 17) * renderScale);
        halo.addColorStop(0, palette.glow);
        halo.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(orbX, orbY, ((tower.path2 || 0) >= 5 ? 20 : 17) * renderScale, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = palette.fill;
      ctx.shadowColor = palette.glow;
      ctx.shadowBlur = orb.dead ? 0 : 24;
      ctx.beginPath();
      ctx.arc(orbX, orbY, ((tower.path2 || 0) >= 5 ? 6 : 5) * renderScale, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.86)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  }

  drawTowerShape(tower.type, tower.level, centerX, centerY, tower.aimAngle || 0, false, false, tower, renderScale);

  if (tower.mapFrozen) {
    const cells = tower.footprintCells || [{ x: tower.x, y: tower.y }];
    const minCellX = Math.min(...cells.map((cell) => cell.x));
    const minCellY = Math.min(...cells.map((cell) => cell.y));
    const maxCellX = Math.max(...cells.map((cell) => cell.x)) + 1;
    const maxCellY = Math.max(...cells.map((cell) => cell.y)) + 1;
    const freezeQuad = projectCellQuad(minCellX, minCellY, maxCellX - minCellX, maxCellY - minCellY);
    ctx.save();
    ctx.fillStyle = "rgba(184, 234, 255, 0.26)";
    ctx.strokeStyle = "rgba(226, 248, 255, 0.96)";
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(freezeQuad.topLeft.x, freezeQuad.topLeft.y);
    ctx.lineTo(freezeQuad.topRight.x, freezeQuad.topRight.y);
    ctx.lineTo(freezeQuad.bottomRight.x, freezeQuad.bottomRight.y);
    ctx.lineTo(freezeQuad.bottomLeft.x, freezeQuad.bottomLeft.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(freezeQuad.topLeft.x + 8, freezeQuad.topLeft.y + 10);
    ctx.lineTo(freezeQuad.bottomRight.x - 10, freezeQuad.bottomRight.y - 12);
    ctx.moveTo(freezeQuad.topLeft.x + (freezeQuad.topRight.x - freezeQuad.topLeft.x) * 0.55, freezeQuad.topLeft.y + 6);
    ctx.lineTo(freezeQuad.topLeft.x + (freezeQuad.topRight.x - freezeQuad.topLeft.x) * 0.4, freezeQuad.bottomLeft.y - 6);
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = "rgba(198, 240, 255, 0.95)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    const freezeRadius = Math.max(18, Math.max(maxCellX - minCellX, maxCellY - minCellY) * CELL_SIZE * 0.36) * renderScale;
    ctx.arc(centerX, centerY, freezeRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX - 10 * renderScale, centerY);
    ctx.lineTo(centerX + 10 * renderScale, centerY);
    ctx.moveTo(centerX, centerY - 10 * renderScale);
    ctx.lineTo(centerX, centerY + 10 * renderScale);
    ctx.stroke();
  }

  if (selectedTowerId === tower.id) {
    drawBlockedSightOverlay({
      ...tower,
      centerX,
      centerY,
      gridCenterX: tower.centerX,
      gridCenterY: tower.centerY
    });
    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 16 * renderScale, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawTowers() {
  for (const tower of towers) {
    drawTower(tower);
  }
}

function drawDrones() {
  for (const drone of drones) {
    const tower = towers.find((entry) => entry.id === drone.towerId);
    const stats = tower ? towerStats(tower) : null;
    const offset = entityRenderOffset(drone);
    const droneX = drone.x + offset.x;
    const droneY = drone.y + offset.y;
    const render = projectBoardPoint(droneX, droneY);
    const renderX = render.x;
    const renderY = render.y;
    const renderScale = render.scale;
    if (tower && stats && selectedTowerId === drone.towerId && tower.targetPriority === "cursor") {
      const anchor = droneCursorAnchor(tower, stats);
      const anchorRender = projectBoardPoint(anchor.x, anchor.y);
      ctx.save();
      ctx.strokeStyle = "rgba(125, 227, 214, 0.48)";
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 1.5 * renderScale;
      ctx.beginPath();
      ctx.moveTo(renderX, renderY);
      ctx.lineTo(anchorRender.x, anchorRender.y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(anchorRender.x, anchorRender.y, 10 * anchorRender.scale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    ctx.fillStyle = drone.support ? "#9cf0e0" : "#7de3d6";
    ctx.beginPath();
    ctx.arc(renderX, renderY, (drone.support ? 5 : 6) * renderScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(13, 66, 74, 0.75)";
    ctx.lineWidth = 2 * renderScale;
    ctx.stroke();

    if (selectedTowerId === drone.towerId) {
      ctx.strokeStyle = "rgba(125, 227, 214, 0.32)";
      ctx.lineWidth = 1.5 * renderScale;
      ctx.beginPath();
      ctx.arc(renderX, renderY, drone.range * renderScale, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

function drawTraps() {
  for (const trap of traps) {
    const render = projectBoardPoint(trap.centerX, trap.centerY);
    const centerX = render.x;
    const centerY = render.y;
    const renderScale = render.scale;
    const hovered = hoverPoint && Math.hypot(hoverPoint.x - centerX, hoverPoint.y - centerY) <= 24 * renderScale;

    if (trap.kind === "spike") {
      ctx.strokeStyle = "#e9f0f6";
      ctx.lineWidth = 2 * renderScale;
      for (let index = 0; index < 6; index += 1) {
        const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / 6;
        const inner = 3 * renderScale;
        const outer = 11 * renderScale;
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(angle) * inner, centerY + Math.sin(angle) * inner);
        ctx.lineTo(centerX + Math.cos(angle) * outer, centerY + Math.sin(angle) * outer);
        ctx.stroke();
      }
      ctx.fillStyle = "#8b9aa7";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4.2 * renderScale, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    if (trap.kind === "turret") {
      const target = enemies.find((enemy) => Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY) <= trap.range);
      const angle = target ? Math.atan2(target.y - trap.centerY, target.x - trap.centerX) : -Math.PI / 2;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.fillStyle = "#9ce285";
      ctx.beginPath();
      ctx.arc(0, 0, 5 * renderScale, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#eef8df";
      ctx.lineWidth = 1.5 * renderScale;
      ctx.stroke();
      ctx.fillStyle = "#dff7c8";
      ctx.fillRect(1 * renderScale, -1.5 * renderScale, 7 * renderScale, 3 * renderScale);
      if (trap.barrels >= 2) {
        ctx.fillRect(1 * renderScale, -4 * renderScale, 6 * renderScale, 2.5 * renderScale);
        ctx.fillRect(1 * renderScale, 1.5 * renderScale, 6 * renderScale, 2.5 * renderScale);
      }
      ctx.restore();
      if (hovered) {
        drawTrapLifetimeBar({ ...trap, centerX, centerY, renderScale });
      }
      continue;
    }

    if (trap.kind === "mine" || trap.kind === "miniMine") {
      ctx.save();
      ctx.shadowColor = trap.mango ? "rgba(255, 170, 71, 0.62)" : "rgba(255, 214, 96, 0.55)";
      ctx.shadowBlur = 12 * renderScale;
      ctx.fillStyle = trap.kind === "miniMine" ? "#ffc14d" : trap.mango ? "#ffb347" : "#ffd067";
      ctx.beginPath();
      ctx.arc(centerX, centerY, (trap.kind === "miniMine" ? 4.5 : 6) * renderScale, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      const spikeCount = Math.max(1, trap.usesRemaining);
      ctx.strokeStyle = "#fff2c4";
      ctx.lineWidth = 1.4 * renderScale;
      for (let index = 0; index < spikeCount; index += 1) {
        const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / spikeCount;
        const inner = (trap.kind === "miniMine" ? 4.8 : 6.5) * renderScale;
        const outer = (trap.kind === "miniMine" ? 8.2 : 10.5) * renderScale;
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(angle) * inner, centerY + Math.sin(angle) * inner);
        ctx.lineTo(centerX + Math.cos(angle) * outer, centerY + Math.sin(angle) * outer);
        ctx.stroke();
      }
      ctx.strokeStyle = "#fff2c4";
      ctx.lineWidth = 1.5 * renderScale;
      ctx.beginPath();
      ctx.arc(centerX, centerY, (trap.kind === "miniMine" ? 6.6 : 8.5) * renderScale, 0, Math.PI * 2);
      ctx.stroke();
      if (trap.mango) {
        ctx.fillStyle = "#8bc34a";
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - (trap.kind === "miniMine" ? 6 : 8) * renderScale);
        ctx.lineTo(centerX + 3 * renderScale, centerY - (trap.kind === "miniMine" ? 9 : 12) * renderScale);
        ctx.lineTo(centerX - 2 * renderScale, centerY - (trap.kind === "miniMine" ? 8 : 11) * renderScale);
        ctx.closePath();
        ctx.fill();
      }
      if (hovered) {
        drawTrapLifetimeBar({ ...trap, centerX, centerY, renderScale });
      }
      continue;
    }

    ctx.strokeStyle = "#9ce285";
    ctx.lineWidth = 1.5 * renderScale;
    const spikeCount = Math.max(1, trap.usesRemaining);
    for (let index = 0; index < spikeCount; index += 1) {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / spikeCount;
      const inner = 2 * renderScale;
      const outer = 7 * renderScale;
      ctx.beginPath();
      ctx.moveTo(centerX + Math.cos(angle) * inner, centerY + Math.sin(angle) * inner);
      ctx.lineTo(centerX + Math.cos(angle) * outer, centerY + Math.sin(angle) * outer);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(centerX, centerY, 2 * renderScale, 0, Math.PI * 2);
    ctx.stroke();
    if (trap.slow < 1) {
      ctx.strokeStyle = "#d7ffd2";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8 * renderScale, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (hovered) {
      drawTrapLifetimeBar({ ...trap, centerX, centerY, renderScale });
    }
  }
}

function drawTrapLifetimeBar(trap) {
  const width = 22;
  const height = 4;
  const ratio = Math.max(0, Math.min(1, trap.ttl / Math.max(trap.maxTtl || 1, 1)));
  const scale = trap.renderScale || 1;
  const left = trap.centerX - (width * scale) / 2;
  const top = trap.centerY - 16 * scale;

  ctx.fillStyle = "rgba(18, 26, 35, 0.55)";
  ctx.fillRect(left, top, width * scale, height * scale);
  ctx.fillStyle = trap.kind === "mine" ? "#ffd067" : "#9ce285";
  ctx.fillRect(left, top, width * scale * ratio, height * scale);
  ctx.strokeStyle = "rgba(255, 249, 240, 0.9)";
  ctx.lineWidth = 1;
  ctx.strokeRect(left, top, width * scale, height * scale);
}

function enemyStatusRadius(enemy) {
  if (enemy.key === "idaen") {
    return 30;
  }
  if (enemy.key === "attacker") {
    const scale = enemy.sizeScale || 1;
    const bodyLength = (enemy.tier >= 3 ? 20 : enemy.tier === 2 ? 16 : 13) * scale;
    return bodyLength * 0.72;
  }
  if (enemy.key === "assassin") {
    const scale = enemy.sizeScale || 1;
    const bodyLength = (enemy.tier >= 3 ? 21 : enemy.tier === 2 ? 17 : 14) * scale;
    return bodyLength * 0.74;
  }
  if (enemy.key === "breacher") {
    const scale = enemy.sizeScale || 1;
    const tier = enemy.tier || 1;
    const width = (18 + (tier - 1) * 3) * scale;
    const innerGap = (8 + (tier - 1) * 1.5) * scale;
    return innerGap + width + 4;
  }
  if (enemy.key === "heavy") {
    return 18 * (enemy.sizeScale || 1);
  }
  if (enemy.key === "biscuit") {
    const scale = enemy.sizeScale || 1;
    const width = (20 + ((enemy.tier || 1) - 1) * 4) * scale;
    const height = (10 + ((enemy.tier || 1) - 1) * 1.6) * scale;
    return Math.max(width, height) * 0.62;
  }
  if (enemy.key === "hydra") {
    return 18 * (enemy.sizeScale || 1);
  }
  if (enemy.key === "health") {
    return 15 * (enemy.sizeScale || 1);
  }
  if (enemy.key === "life") {
    return 15.5 * (enemy.sizeScale || 1);
  }
  if (enemy.key === "idine") {
    return 18 * (enemy.sizeScale || 1.2);
  }
  if (enemy.key === "behemoth" || enemy.key === "specialPentagon") {
    return 15.5 * (enemy.sizeScale || 1);
  }
  if (enemy.key === "xer") {
    return 19 * (enemy.sizeScale || 1);
  }
  if (enemy.waffleSquares) {
    return 18;
  }
  if (enemy.key === "sentinel") {
    return ((enemy.tier || 1) >= 3 ? 20 : (enemy.tier || 1) === 2 ? 17 : 14);
  }
  return 13 * (enemy.sizeScale || 1);
}

function regularPolygon(x, y, radius, sides) {
  ctx.beginPath();
  for (let index = 0; index < sides; index += 1) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / sides;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (index === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
}

function drawOpaqueShell(enemy = null) {
  const shielded = enemyHasVisibleShield(enemy) && (enemy?.shieldHp || 0) > 0;
  ctx.fillStyle = shielded ? "rgba(146, 214, 255, 0.92)" : "#ffffff";
  ctx.strokeStyle = shielded ? "rgba(214, 242, 255, 0.98)" : "#ffffff";
}

function drawHiddenEnemyOutline(enemy) {
  const shieldHidden = enemyHasVisibleShield(enemy) && enemy.hidden;
  const outlineColor = shieldHidden ? "rgba(120, 196, 255, 0.94)" : "rgba(220, 220, 220, 0.95)";
  const accentColor = shieldHidden ? "rgba(208, 244, 255, 0.92)" : "rgba(248, 248, 248, 0.88)";
  const scale = enemy.sizeScale || 1;

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.strokeStyle = outlineColor;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (enemy.key === "attacker") {
    const bodyLength = (enemy.tier >= 3 ? 20 : enemy.tier === 2 ? 16 : 13) * scale;
    const bodyWidth = (enemy.tier >= 3 ? 7.5 : enemy.tier === 2 ? 6.5 : 5.5) * scale;
    const wingLength = bodyLength * 0.7;
    const wingSpread = bodyLength * 0.48;
    ctx.lineWidth = bodyWidth + 2.5;
    ctx.beginPath();
    ctx.moveTo(bodyLength * 0.56, 0);
    ctx.lineTo(-bodyLength * 0.56, 0);
    ctx.stroke();
    ctx.lineWidth = Math.max(4, bodyWidth * 0.56);
    ctx.beginPath();
    ctx.moveTo(-bodyLength * 0.14, 0);
    ctx.lineTo(-wingLength, -wingSpread);
    ctx.moveTo(-bodyLength * 0.14, 0);
    ctx.lineTo(-wingLength, wingSpread);
    if (enemy.tier >= 2) {
      ctx.moveTo(-bodyLength * 0.36, 0);
      ctx.lineTo(-bodyLength * 0.94, -wingSpread * 0.54);
      ctx.moveTo(-bodyLength * 0.36, 0);
      ctx.lineTo(-bodyLength * 0.94, wingSpread * 0.54);
    }
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (enemy.key === "assassin") {
    const bodyLength = (enemy.tier >= 3 ? 21 : enemy.tier === 2 ? 17 : 14) * scale;
    const bodyWidth = (enemy.tier >= 3 ? 8 : enemy.tier === 2 ? 6.8 : 5.8) * scale;
    const wingLength = bodyLength * 0.74;
    const wingSpread = bodyLength * 0.5;
    ctx.lineWidth = bodyWidth + 2.5;
    ctx.beginPath();
    ctx.moveTo(bodyLength * 0.6, 0);
    ctx.lineTo(-bodyLength * 0.6, 0);
    ctx.stroke();
    ctx.lineWidth = Math.max(4, bodyWidth * 0.6);
    ctx.beginPath();
    ctx.moveTo(-bodyLength * 0.08, 0);
    ctx.lineTo(-wingLength, -wingSpread);
    ctx.moveTo(-bodyLength * 0.08, 0);
    ctx.lineTo(-wingLength, wingSpread);
    ctx.moveTo(bodyLength * 0.12, -bodyWidth * 0.8);
    ctx.lineTo(bodyLength * 0.34, 0);
    ctx.lineTo(bodyLength * 0.12, bodyWidth * 0.8);
    ctx.stroke();
    if (enemy.tier >= 2) {
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = Math.max(2.2, bodyWidth * 0.28);
      ctx.beginPath();
      ctx.moveTo(-bodyLength * 0.18, -bodyWidth * 0.92);
      ctx.lineTo(-bodyLength * 0.46, -wingSpread * 0.54);
      ctx.moveTo(-bodyLength * 0.18, bodyWidth * 0.92);
      ctx.lineTo(-bodyLength * 0.46, wingSpread * 0.54);
      if (enemy.tier >= 3) {
        ctx.moveTo(-bodyLength * 0.56, -wingSpread * 0.5);
        ctx.lineTo(-bodyLength * 0.78, 0);
        ctx.lineTo(-bodyLength * 0.56, wingSpread * 0.5);
      }
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (enemy.waffleSquares) {
    const gridSize = Math.max(1, Math.round(Math.sqrt(enemy.waffleSquares || 1)));
    const cellSize = 6;
    const gap = 1.5;
    const totalSize = gridSize * cellSize + (gridSize - 1) * gap;
    ctx.lineWidth = 1.8;
    const left = -totalSize / 2;
    const top = -totalSize / 2;
    ctx.strokeRect(left - 2, top - 2, totalSize + 4, totalSize + 4);
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.1;
    for (let row = 0; row < gridSize; row += 1) {
      for (let col = 0; col < gridSize; col += 1) {
        const x = left + col * (cellSize + gap);
        const y = top + row * (cellSize + gap);
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }
    ctx.restore();
    return;
  }

  if (enemy.key === "biscuit") {
    const width = (20 + ((enemy.tier || 1) - 1) * 4) * scale;
    const height = (10 + ((enemy.tier || 1) - 1) * 1.6) * scale;
    const radius = Math.min(width, height) * 0.28;
    ctx.lineWidth = 2.2;
    drawRoundedRect(-width / 2 - 2, -height / 2 - 2, width + 4, height + 4, radius + 1.5);
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (enemy.key === "heavy") {
    const width = 28 * scale;
    const height = 16 * scale;
    ctx.lineWidth = 2;
    ctx.strokeRect(-width / 2 - 3, -height / 2 - 3, width + 6, height + 6);
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2.1 * scale;
    if ((enemy.tier || 1) >= 3) {
      ctx.beginPath();
      ctx.moveTo(-10 * scale, -6 * scale);
      ctx.lineTo(10 * scale, 6 * scale);
      ctx.moveTo(10 * scale, -6 * scale);
      ctx.lineTo(-10 * scale, 6 * scale);
      ctx.moveTo(-10 * scale, -3.5 * scale);
      ctx.lineTo(10 * scale, -3.5 * scale);
      ctx.moveTo(-10 * scale, 3.5 * scale);
      ctx.lineTo(10 * scale, 3.5 * scale);
      ctx.stroke();
    } else if ((enemy.tier || 1) === 2) {
      ctx.beginPath();
      ctx.moveTo(-10 * scale, -6 * scale);
      ctx.lineTo(10 * scale, 6 * scale);
      ctx.moveTo(10 * scale, -6 * scale);
      ctx.lineTo(-10 * scale, 6 * scale);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(-10 * scale, 0);
      ctx.lineTo(10 * scale, 0);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (enemy.key === "breacher") {
    const tier = enemy.tier || 1;
    const width = (18 + (tier - 1) * 3) * scale;
    const height = (14 + (tier - 1) * 2.4) * scale;
    const innerGap = (8 + (tier - 1) * 1.5) * scale;
    const drawTrapezium = (direction = 1) => {
      const outerX = direction * (innerGap + width * 0.5);
      ctx.beginPath();
      ctx.moveTo(outerX - direction * width * 0.5, -height * 0.5);
      ctx.lineTo(outerX + direction * width * 0.34, -height * 0.28);
      ctx.lineTo(outerX + direction * width * 0.34, height * 0.28);
      ctx.lineTo(outerX - direction * width * 0.5, height * 0.5);
      ctx.closePath();
      ctx.stroke();
    };
    ctx.lineWidth = 2;
    drawTrapezium(-1);
    drawTrapezium(1);
    const orbRadius = (5.5 + (tier - 1) * 1.2) * scale;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(0, 0, orbRadius + 1.6, 0, Math.PI * 2);
    ctx.stroke();
    if (tier >= 2) {
      ctx.beginPath();
      ctx.moveTo(-innerGap * 0.4, -height * 0.54);
      ctx.lineTo(0, -height * 0.18);
      ctx.lineTo(innerGap * 0.4, -height * 0.54);
      ctx.stroke();
    }
    if (tier >= 3) {
      ctx.beginPath();
      ctx.moveTo(-innerGap * 0.46, height * 0.56);
      ctx.lineTo(0, height * 0.16);
      ctx.lineTo(innerGap * 0.46, height * 0.56);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (enemy.key === "hydra") {
    const side = 22 * scale;
    const height = side * Math.sqrt(3) / 2;
    const noseX = (height * 2) / 3;
    const tailX = -height / 3;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(noseX, 0);
    ctx.lineTo(tailX, -side / 2);
    ctx.lineTo(tailX, side / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (enemy.key === "health") {
    ctx.lineWidth = (enemy.tier >= 3 ? 5.6 : enemy.tier === 2 ? 4.8 : 4.2) * scale;
    ctx.beginPath();
    ctx.moveTo(-11 * scale, -10 * scale);
    ctx.lineTo(12 * scale, 0);
    ctx.lineTo(-11 * scale, 10 * scale);
    ctx.stroke();
    if ((enemy.tier || 1) >= 2) {
      ctx.lineWidth = 3.2 * scale;
      ctx.beginPath();
      ctx.moveTo(-1 * scale, -7 * scale);
      ctx.lineTo(-1 * scale, 7 * scale);
      ctx.stroke();
    }
    if ((enemy.tier || 1) >= 3) {
      ctx.lineWidth = 2.6 * scale;
      ctx.beginPath();
      ctx.moveTo(-7 * scale, -10 * scale);
      ctx.lineTo(-3 * scale, -4 * scale);
      ctx.moveTo(-7 * scale, 10 * scale);
      ctx.lineTo(-3 * scale, 4 * scale);
      ctx.moveTo(-10 * scale, 0);
      ctx.lineTo(-2 * scale, 0);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (enemy.key === "life") {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = (enemy.tier >= 3 ? 5.3 : enemy.tier === 2 ? 4.6 : 4.1) * scale;
    ctx.beginPath();
    ctx.moveTo(-12 * scale, -11 * scale);
    ctx.lineTo(13 * scale, 0);
    ctx.lineTo(-12 * scale, 11 * scale);
    ctx.stroke();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2.1 * scale;
    ctx.beginPath();
    ctx.moveTo(-7 * scale, -7 * scale);
    ctx.lineTo(-7 * scale, 7 * scale);
    if ((enemy.tier || 1) >= 2) {
      ctx.moveTo(-1 * scale, -9 * scale);
      ctx.lineTo(-1 * scale, 9 * scale);
    }
    if ((enemy.tier || 1) >= 3) {
      ctx.moveTo(4 * scale, -6 * scale);
      ctx.lineTo(4 * scale, 6 * scale);
    }
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (enemy.key === "behemoth" || enemy.key === "specialPentagon" || enemy.key === "xer") {
    const radius = (enemy.shapeSides >= 6 ? 12 : 10.5) * scale;
    const rotation = (enemy.facingAngle || 0) + (enemy.shapeSides === 3 ? 0 : Math.PI / enemy.shapeSides);
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (let index = 0; index < enemy.shapeSides; index += 1) {
      const angle = rotation + (Math.PI * 2 * index) / enemy.shapeSides;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (index === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.stroke();
    if (enemy.key === "xer") {
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1.8 * Math.max(1, scale * 0.55);
      const innerRadius = radius * 0.68;
      ctx.beginPath();
      ctx.moveTo(0, -innerRadius);
      ctx.lineTo(innerRadius, 0);
      ctx.lineTo(0, innerRadius);
      ctx.lineTo(-innerRadius, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-radius * 0.7, 0);
      ctx.lineTo(radius * 0.7, 0);
      ctx.moveTo(0, -radius * 0.7);
      ctx.lineTo(0, radius * 0.7);
      ctx.stroke();

      const detailRadius = radius * 0.82;
      for (let index = 0; index < 8; index += 1) {
        const angle = rotation + (Math.PI * 2 * index) / 8;
        const px = Math.cos(angle) * detailRadius;
        const py = Math.sin(angle) * detailRadius;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1.6, scale * 1.15), 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    if ((enemy.tier || 1) >= 2) {
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = enemy.tier >= 3 ? 2.6 : 1.8;
      ctx.beginPath();
      ctx.arc(0, 0, radius + 3, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (enemy.key === "idine") {
    const localScale = enemy.sizeScale || 1.2;
    ctx.lineWidth = 2.2 * localScale;
    ctx.beginPath();
    ctx.moveTo(-18 * localScale, 0);
    ctx.lineTo(8 * localScale, -16 * localScale);
    ctx.lineTo(8 * localScale, 16 * localScale);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.8 * localScale;
    ctx.beginPath();
    ctx.moveTo(-12 * localScale, 0);
    ctx.lineTo(16 * localScale, -15 * localScale);
    ctx.lineTo(16 * localScale, 15 * localScale);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-14 * localScale, 0);
    ctx.lineTo(12 * localScale, -11 * localScale);
    ctx.moveTo(-14 * localScale, 0);
    ctx.lineTo(12 * localScale, 11 * localScale);
    ctx.moveTo(-2 * localScale, -8 * localScale);
    ctx.lineTo(9 * localScale, 0);
    ctx.lineTo(-2 * localScale, 8 * localScale);
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (enemy.key === "popcorn" || enemy.key === "kernel" || enemy.key === "splitter"
    || enemy.key === "celun" || enemy.key === "celris" || enemy.key === "cel" || enemy.key === "lun" || enemy.key === "ris") {
    const radius = enemyStatusRadius(enemy);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
    if ((enemy.tier || 1) >= 2 && enemy.key !== "idine" && enemy.key !== "celun" && enemy.key !== "celris" && enemy.key !== "cel" && enemy.key !== "lun" && enemy.key !== "ris") {
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = enemy.tier >= 3 ? 2.4 : 1.7;
      ctx.beginPath();
      ctx.arc(0, 0, radius + (enemy.tier >= 3 ? 3 : 1.5), 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, enemy.tier >= 3 ? 4.2 : 2.8, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (enemy.key === "sentinel") {
    const isSkrey = (enemy.tier || 1) >= 3;
    const isOverwatch = (enemy.tier || 1) === 2;
    const bodyRadius = (isSkrey ? 17 : isOverwatch ? 14 : 10.5) * scale;
    ctx.lineWidth = 2.2;
    if (isSkrey) {
      const triangles = [
        { x: bodyRadius * 0.7, size: 0.9 },
        { x: bodyRadius * 0.15, size: 0.76 },
        { x: -bodyRadius * 0.38, size: 0.62 }
      ];
      for (const triangle of triangles) {
        ctx.beginPath();
        ctx.moveTo(triangle.x + bodyRadius * triangle.size, 0);
        ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, -bodyRadius * 0.72 * triangle.size);
        ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, bodyRadius * 0.72 * triangle.size);
        ctx.closePath();
        ctx.stroke();
      }
    } else if (isOverwatch) {
      ctx.beginPath();
      ctx.moveTo(bodyRadius * 0.9, 0);
      ctx.lineTo(-bodyRadius * 0.08, -bodyRadius * 0.72);
      ctx.lineTo(-bodyRadius * 0.08, bodyRadius * 0.72);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bodyRadius * 0.36, 0);
      ctx.lineTo(-bodyRadius * 0.34, -bodyRadius * 0.48);
      ctx.lineTo(-bodyRadius * 0.34, bodyRadius * 0.48);
      ctx.closePath();
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, bodyRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = isSkrey ? 4.2 : isOverwatch ? 4.6 : 4;
    const lineXs = isSkrey ? [bodyRadius * 0.62, bodyRadius * 0.15] : [bodyRadius * (isOverwatch ? 0.9 : 0.7)];
    for (const lineX of lineXs) {
      ctx.beginPath();
      ctx.moveTo(lineX, -bodyRadius * 0.72);
      ctx.lineTo(lineX, bodyRadius * 0.72);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  const radius = (enemy.shapeSides >= 6 ? 12 : 10.5) * scale;
  const rotation = (enemy.facingAngle || 0) + (enemy.shapeSides === 3 ? 0 : Math.PI / enemy.shapeSides);
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let index = 0; index < enemy.shapeSides; index += 1) {
    const angle = rotation + (Math.PI * 2 * index) / enemy.shapeSides;
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;
    if (index === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.stroke();
  if (enemy.key === "diamond") {
    const coreRadius = 5 + ((enemy.tier || 1) - 1) * 1.5;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(0, -coreRadius);
    ctx.lineTo(coreRadius, 0);
    ctx.lineTo(0, coreRadius);
    ctx.lineTo(-coreRadius, 0);
    ctx.closePath();
    ctx.stroke();
    const squareSize = coreRadius * 0.9;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
    if ((enemy.tier || 1) >= 2) {
      ctx.lineWidth = enemy.tier >= 3 ? 2.4 : 1.6;
      ctx.beginPath();
      ctx.moveTo(0, -radius - 2);
      ctx.lineTo(radius + 2, 0);
      ctx.lineTo(0, radius + 2);
      ctx.lineTo(-radius - 2, 0);
      ctx.closePath();
      ctx.stroke();
    }
  } else if ((enemy.tier || 1) >= 2 && enemy.key !== "shield") {
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = enemy.tier >= 3 ? 2.4 : 1.6;
    ctx.beginPath();
    ctx.arc(0, 0, radius + (enemy.tier >= 3 ? 3 : 1.5), 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, enemy.tier >= 3 ? 4.2 : 2.8, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (enemyHasVisibleShield(enemy)) {
    const outerRadius = enemy.shieldRadius || radius + 10;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, outerRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawEnemyStateOverlay(enemy) {
  const radius = enemyStatusRadius(enemy) + 2;
  if ((enemy.freezeTintTimer || 0) > 0) {
    const freezeAlpha = Math.max(0.12, Math.min(0.34, (enemy.freezeTintTimer || 0) * 0.22));
    ctx.save();
    ctx.fillStyle = `rgba(120, 196, 255, ${freezeAlpha})`;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, radius + 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if ((enemy.healthBarFlashTimer || 0) > 0) {
    const flashAlpha = Math.max(0.08, Math.min(0.42, (enemy.healthBarFlashTimer || 0) * 1.6));
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, radius + 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (enemyHasVisibleShield(enemy) && (enemy.shieldHp || 0) > 0 && !enemy.hidden) {
    const shieldFillAlpha = 0.9;
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${shieldFillAlpha})`;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (enemy.hidden) {
    return;
  }
}
function drawFreezerAuraVisual(centerX, centerY, stats, emphasized = false) {
  if (!stats?.aura || !stats.auraRadius) {
    return;
  }

  const time = lastTimestamp / 1000;
  const radius = stats.auraRadius;
  const alphaBoost = emphasized ? 1.35 : 1;
  const swirlCount = stats.auraSlow <= 0.45 ? 4 : stats.auraSlow <= 0.58 ? 3 : 2;
  const flakeCount = stats.auraSlow <= 0.45 ? 18 : stats.auraSlow <= 0.58 ? 14 : 10;

  ctx.save();

  const outerGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.18, centerX, centerY, radius);
  outerGradient.addColorStop(0, `rgba(214, 247, 255, ${0.05 * alphaBoost})`);
  outerGradient.addColorStop(0.55, `rgba(182, 236, 255, ${0.1 * alphaBoost})`);
  outerGradient.addColorStop(1, "rgba(182, 236, 255, 0)");
  ctx.fillStyle = outerGradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();

  for (let ring = 0; ring < swirlCount; ring += 1) {
    const ringRadius = radius * (0.42 + ring * 0.18);
    const spin = time * (0.85 + ring * 0.22) * (ring % 2 === 0 ? 1 : -1);
    ctx.strokeStyle = `rgba(214, 247, 255, ${(0.2 - ring * 0.03) * alphaBoost})`;
    ctx.lineWidth = emphasized ? 2.6 - ring * 0.25 : 2 - ring * 0.2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, ringRadius, spin, spin + Math.PI * 1.12);
    ctx.stroke();
  }

  for (let index = 0; index < flakeCount; index += 1) {
    const angle = time * (0.8 + (index % 4) * 0.18) + (Math.PI * 2 * index) / flakeCount;
    const orbit = radius * (0.2 + ((index * 17) % 70) / 100);
    const drift = Math.sin(time * 1.7 + index * 1.3) * radius * 0.08;
    const x = centerX + Math.cos(angle) * orbit + Math.sin(time * 0.9 + index) * drift * 0.28;
    const y = centerY + Math.sin(angle * 1.15) * orbit * 0.72 + Math.cos(time * 1.1 + index * 0.7) * drift * 0.18;
    const flakeRadius = (index % 3 === 0 ? 2.2 : 1.5) * (emphasized ? 1.12 : 1);
    ctx.fillStyle = `rgba(247, 253, 255, ${(0.5 + (index % 5) * 0.06) * alphaBoost})`;
    ctx.beginPath();
    ctx.arc(x, y, flakeRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = `rgba(232, 250, 255, ${0.3 * alphaBoost})`;
  ctx.lineWidth = emphasized ? 2.6 : 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

function drawTeslaFieldVisual(centerX, centerY, stats, emphasized = false) {
  if (!stats?.field || !stats.fieldRadius) {
    return;
  }

  const time = lastTimestamp / 1000;
  const radius = stats.fieldRadius;
  const alphaBoost = emphasized ? 1.35 : 1;
  const zapCount = stats.electrocannon ? 3 : stats.fieldZapCount >= 2 ? 2 : 1;

  ctx.save();

  const fieldGlow = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius);
  fieldGlow.addColorStop(0, `rgba(186, 242, 255, ${0.07 * alphaBoost})`);
  fieldGlow.addColorStop(0.58, `rgba(126, 226, 255, ${0.12 * alphaBoost})`);
  fieldGlow.addColorStop(1, "rgba(126, 226, 255, 0)");
  ctx.fillStyle = fieldGlow;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = `rgba(181, 244, 255, ${0.34 * alphaBoost})`;
  ctx.lineWidth = emphasized ? 2.8 : 2.1;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  if (Math.floor(time * (stats.electrocannon ? 4.2 : 3.2)) % 4 === 0) {
    for (let index = 0; index < zapCount; index += 1) {
      const strikeAngle = (time * (2.1 + index * 0.33) + index * 1.7) % (Math.PI * 2);
      const strikeRadius = radius * (0.42 + ((Math.sin(time * (1.7 + index * 0.2)) + 1) * 0.16));
      const endX = centerX + Math.cos(strikeAngle) * strikeRadius;
      const endY = centerY + Math.sin(strikeAngle) * strikeRadius;
      const midX = centerX + Math.cos(strikeAngle + 0.24) * strikeRadius * 0.62;
      const midY = centerY + Math.sin(strikeAngle - 0.18) * strikeRadius * 0.58;
      ctx.strokeStyle = `rgba(214, 248, 255, ${(0.42 - index * 0.05) * alphaBoost})`;
      ctx.lineWidth = emphasized ? 2.2 : 1.7;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(midX, midY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function usesHiddenOutlineOnly(enemy) {
  return false;
}

function usesHiddenVisualEffect(enemy) {
  return enemy.hidden && enemy.key !== "attacker" && enemy.key !== "assassin";
}

function drawEnemies() {
  for (const enemy of enemies) {
    const render = projectBoardPoint(enemy.x, enemy.y);
    const renderEnemy = {
      ...enemy,
      x: render.x,
      y: render.y,
      sizeScale: (enemy.sizeScale || 1) * render.scale,
      shieldRadius: enemy.shieldRadius ? enemy.shieldRadius * render.scale : enemy.shieldRadius,
      renderScale: render.scale
    };
    const barScale = render.scale;
    if (enemy.hidden) {
      drawHiddenEnemyOutline(renderEnemy);
    } else {
      ctx.save();
      drawEnemyShape(renderEnemy);
      ctx.restore();
    }
    drawEnemyStateOverlay(renderEnemy);
    drawEnemyStatusParticles(renderEnemy);
    drawEnemyArmorRing(renderEnemy);
    const barWidth = (enemy.key === "sentinel" && (enemy.tier || 1) >= 3 ? 34 : 24) * barScale;
    const overhealLimit = Math.max(enemy.overhealLimit || 0, 0);
    const shellRatio = Math.max(0, Math.min(1, (enemy.shellHp || 0) / Math.max(enemy.maxShellHp || 1, 1)));
    drawDamageLagBar(
      renderEnemy.x - barWidth / 2,
      renderEnemy.y - 18 * barScale,
      barWidth,
      4 * barScale,
      Math.max(enemy.hp, 0) / enemy.maxHp,
      Math.max(enemy.healthBarLagHp || enemy.hp, 0) / enemy.maxHp,
      (enemy.healthBarTintTimer || 0) > 0 ? enemy.healthBarTint || "#d94f3d" : "#d94f3d"
    );
    if (shellRatio > 0) {
      drawShellOverlayBar(
        renderEnemy.x - barWidth / 2,
        renderEnemy.y - 18 * barScale,
        barWidth,
        4 * barScale,
        shellRatio
      );
    }
    if (enemy.key === "breacher" && (enemy.maxShieldHp || 0) > 0) {
      drawShieldOverlayBar(
        renderEnemy.x - barWidth / 2,
        renderEnemy.y - 23 * barScale,
        barWidth,
        3 * barScale,
        Math.max(0, Math.min(1, (enemy.shieldHp || 0) / Math.max(enemy.maxShieldHp || 1, 1)))
      );
    }
    if (overhealLimit > 0) {
      drawDamageLagBar(
        renderEnemy.x - barWidth / 2,
        renderEnemy.y - (enemy.key === "breacher" && (enemy.maxShieldHp || 0) > 0 ? 28 : 23) * barScale,
        barWidth,
        3 * barScale,
        Math.max(0, Math.min(overhealLimit, Math.max(0, enemy.hp - enemy.maxHp))) / overhealLimit,
        Math.max(0, Math.min(overhealLimit, Math.max(0, (enemy.healthBarLagHp || enemy.hp) - enemy.maxHp))) / overhealLimit,
        "#f0cc46"
      );
    }
  }
}

function drawEnemyArmorRing(enemy) {
  if ((enemy.armorHp || 0) <= 0) {
    return;
  }

  const armorRatio = Math.max(0, Math.min(1, (enemy.armorHp || 0) / Math.max(enemy.maxArmorHp || 1, 1)));
  const radius = enemyStatusRadius(enemy) + CELL_SIZE * 0.22;
  const width = Math.max(2, CELL_SIZE * 0.16);

  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.98)";
  ctx.lineWidth = width;
  ctx.shadowColor = "rgba(255, 255, 255, 0.95)";
  ctx.shadowBlur = 8 + armorRatio * 6;
  ctx.beginPath();
  ctx.arc(enemy.x, enemy.y, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 + armorRatio * 0.4})`;
  ctx.lineWidth = Math.max(1.25, width * 0.34);
  ctx.beginPath();
  ctx.arc(enemy.x, enemy.y, radius + width * 0.18, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawDamageLagBar(x, y, width, height, ratio, lagRatio, fillColor = "#d94f3d") {
  ctx.fillStyle = "rgba(38, 50, 56, 0.24)";
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, width * Math.max(0, Math.min(1, ratio)), height);
  if (lagRatio > ratio) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.fillRect(x + width * ratio, y, width * Math.max(0, Math.min(1, lagRatio - ratio)), height);
  }
}

function drawShellOverlayBar(x, y, width, height, ratio) {
  const clampedRatio = Math.max(0, Math.min(1, ratio));
  if (clampedRatio <= 0) {
    return;
  }
  ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
  ctx.fillRect(x, y, width * clampedRatio, height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  ctx.lineWidth = 0.8;
  ctx.strokeRect(x, y, width * clampedRatio, height);
}

function drawShieldOverlayBar(x, y, width, height, ratio) {
  const clampedRatio = Math.max(0, Math.min(1, ratio));
  if (clampedRatio <= 0) {
    return;
  }
  ctx.fillStyle = "rgba(126, 214, 255, 0.94)";
  ctx.fillRect(x, y, width * clampedRatio, height);
  ctx.strokeStyle = "rgba(226, 248, 255, 0.95)";
  ctx.lineWidth = 0.8;
  ctx.strokeRect(x, y, width * clampedRatio, height);
}

function drawEnemyStatusParticles(enemy) {
  const statuses = [];
  if ((enemy.burnTimer || 0) > 0) {
    statuses.push({ color: "#ffb45f", orbit: enemyStatusRadius(enemy) + 2, size: 2.2, count: 3, speed: 1.6 });
  }
  if ((enemy.stunTimer || 0) > 0) {
    statuses.push({ color: "#8fd6ff", orbit: enemyStatusRadius(enemy) + 5, size: 1.8, count: 4, speed: 2.5 });
  }
  if ((enemy.whiteoutTimer || 0) > 0) {
    statuses.push({ color: "#f4fbff", orbit: enemyStatusRadius(enemy) + 8, size: 1.7, count: 4, speed: 1.8 });
  }
  if ((enemy.mangoTimer || 0) > 0) {
    statuses.push({ color: "#ffd357", orbit: enemyStatusRadius(enemy) + 11, size: 2.1, count: 3, speed: 1.2 });
  }
  if (statuses.length === 0) {
    return;
  }

  ctx.save();
  for (const status of statuses) {
    ctx.fillStyle = status.color;
    for (let index = 0; index < status.count; index += 1) {
      const angle = lastTimestamp / (220 / status.speed) + enemy.id + index * ((Math.PI * 2) / status.count);
      const x = enemy.x + Math.cos(angle) * status.orbit;
      const y = enemy.y + Math.sin(angle) * status.orbit;
      ctx.beginPath();
      ctx.arc(x, y, status.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawNarderEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const cx = enemy.x;
  const cy = enemy.y;
  const rotation = enemy.facingAngle || 0;
  const loopRadius = 6.6 * scale;
  const orbit = 7.8 * scale;
  const detailBoost = (enemy.tier || 1) >= 2 ? 1 : 0;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.strokeStyle = enemy.color;
  ctx.lineWidth = (enemy.tier || 1) >= 2 ? 2.6 : 2.1;
  ctx.lineCap = "round";

  for (let index = 0; index < 3; index += 1) {
    const angle = (Math.PI * 2 * index) / 3;
    const loopX = Math.cos(angle) * orbit;
    const loopY = Math.sin(angle) * orbit;
    ctx.beginPath();
    ctx.arc(loopX, loopY, loopRadius, angle + Math.PI * 0.28, angle + Math.PI * 1.72);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(235, 252, 255, 0.9)";
  ctx.lineWidth = 1.3 + detailBoost * 0.4;
  ctx.beginPath();
  for (let index = 0; index < 3; index += 1) {
    const angle = (Math.PI * 2 * index) / 3;
    const px = Math.cos(angle) * orbit * 0.92;
    const py = Math.sin(angle) * orbit * 0.92;
    if (index === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.stroke();

  ctx.fillStyle = enemy.coreColor || ((enemy.tier || 1) >= 2 ? "#f6fdff" : "#dffaff");
  ctx.beginPath();
  ctx.arc(0, 0, 3.1 + detailBoost * 0.9, 0, Math.PI * 2);
  ctx.fill();

  if ((enemy.tier || 1) >= 2) {
    ctx.strokeStyle = "rgba(255,255,255,0.82)";
    ctx.lineWidth = 1.1;
    for (let index = 0; index < 3; index += 1) {
      const angle = (Math.PI * 2 * index) / 3;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * 2.2, Math.sin(angle) * 2.2);
      ctx.lineTo(Math.cos(angle) * 10.5 * scale, Math.sin(angle) * 10.5 * scale);
      ctx.stroke();
    }
    for (let index = 0; index < 6; index += 1) {
      const angle = (Math.PI * 2 * index) / 6;
      const px = Math.cos(angle) * 11.8 * scale;
      const py = Math.sin(angle) * 11.8 * scale;
      ctx.beginPath();
      ctx.arc(px, py, 1.15 * scale, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function drawBehemothEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const radius = 14 * scale;
  const rotation = (enemy.facingAngle || 0) + Math.PI / 8;

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(rotation);
  ctx.fillStyle = enemy.color;
  ctx.strokeStyle = "rgba(255, 232, 242, 0.92)";
  ctx.lineWidth = Math.max(2.4, scale * 1.1);
  ctx.beginPath();
  for (let index = 0; index < 8; index += 1) {
    const angle = (Math.PI * 2 * index) / 8;
    const pointRadius = index % 2 === 0 ? radius * 1.08 : radius * 0.9;
    const px = Math.cos(angle) * pointRadius;
    const py = Math.sin(angle) * pointRadius;
    if (index === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 245, 250, 0.88)";
  ctx.lineWidth = Math.max(1.4, scale * 0.6);
  ctx.beginPath();
  for (let index = 0; index < 4; index += 1) {
    const angle = (Math.PI * 2 * index) / 4;
    ctx.moveTo(Math.cos(angle) * radius * 0.18, Math.sin(angle) * radius * 0.18);
    ctx.lineTo(Math.cos(angle) * radius * 0.86, Math.sin(angle) * radius * 0.86);
  }
  ctx.stroke();

  ctx.fillStyle = enemy.coreColor || "#ffe8f0";
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawXerEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const noseLength = 21 * scale;
  const tailLength = 16 * scale;
  const bodyWidth = 13 * scale;
  const innerScale = 0.62;
  const spikes = 6;

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);

  ctx.fillStyle = enemy.color;
  ctx.strokeStyle = "rgba(243, 248, 255, 0.95)";
  ctx.lineWidth = Math.max(2.6, scale * 0.8);
  ctx.beginPath();
  ctx.moveTo(noseLength, 0);
  ctx.lineTo(0, -bodyWidth * 0.72);
  ctx.lineTo(-tailLength, 0);
  ctx.lineTo(0, bodyWidth * 0.72);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(210, 235, 255, 0.88)";
  ctx.lineWidth = Math.max(1.4, scale * 0.42);
  ctx.beginPath();
  ctx.moveTo(noseLength * innerScale, 0);
  ctx.lineTo(0, -bodyWidth * 0.42);
  ctx.lineTo(-tailLength * innerScale, 0);
  ctx.lineTo(0, bodyWidth * 0.42);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-tailLength * 0.35, 0);
  ctx.lineTo(noseLength * 0.58, 0);
  ctx.moveTo(-tailLength * 0.1, -bodyWidth * 0.18);
  ctx.lineTo(noseLength * 0.18, -bodyWidth * 0.5);
  ctx.moveTo(-tailLength * 0.1, bodyWidth * 0.18);
  ctx.lineTo(noseLength * 0.18, bodyWidth * 0.5);
  ctx.stroke();

  ctx.fillStyle = "rgba(239, 246, 255, 0.96)";
  for (let index = 0; index < spikes; index += 1) {
    const side = index < spikes / 2 ? -1 : 1;
    const progress = (index % (spikes / 2)) / Math.max((spikes / 2) - 1, 1);
    const baseX = noseLength * 0.1 - progress * (noseLength * 0.95);
    const baseY = side * (bodyWidth * (0.18 + progress * 0.4));
    ctx.beginPath();
    ctx.moveTo(baseX + 5 * scale, baseY);
    ctx.lineTo(baseX - 1.5 * scale, baseY - side * 3.6 * scale);
    ctx.lineTo(baseX - 2.6 * scale, baseY + side * 2.2 * scale);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = enemy.coreColor || "#ffffff";
  ctx.beginPath();
  ctx.arc(noseLength * 0.08, 0, 3.6 * scale, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawEnemyShape(enemy) {
  if (enemy.key === "idaen") {
    drawIdaenEnemy(enemy);
    return;
  }

  if (enemy.key === "adapter") {
    drawAdapterEnemy(enemy);
    return;
  }

  if (enemy.waffleSquares) {
    drawWaffleEnemy(enemy);
    return;
  }

  if (enemy.key === "attacker") {
    drawAttackerEnemy(enemy);
    return;
  }

  if (enemy.key === "assassin") {
    drawAssassinEnemy(enemy);
    return;
  }

  if (enemy.key === "health") {
    drawHealthEnemy(enemy);
    return;
  }

  if (enemy.key === "life") {
    drawLifeEnemy(enemy);
    return;
  }

  if (enemy.key === "breacher") {
    drawBreacherEnemy(enemy);
    return;
  }

  if (enemy.key === "heavy") {
    drawHeavyEnemy(enemy);
    return;
  }

  if (enemy.key === "biscuit") {
    drawShortbreadEnemy(enemy);
    return;
  }

  if (enemy.key === "kernel") {
    drawKernelEnemy(enemy);
    return;
  }

  if (enemy.key === "idine" || enemy.key === "celun" || enemy.key === "celris" || enemy.key === "cel" || enemy.key === "lun" || enemy.key === "ris") {
    drawIdineFamilyEnemy(enemy);
    return;
  }

  if (enemy.key === "popcorn") {
    drawPopcornEnemy(enemy);
    return;
  }

  if (enemy.key === "splitter") {
    drawSplitterEnemy(enemy);
    return;
  }

  if (enemy.key === "hydra") {
    drawHydraEnemy(enemy);
    return;
  }

  if (enemy.key === "sentinel") {
    drawSentinelEnemy(enemy);
    return;
  }

  if (enemy.key === "narder") {
    drawNarderEnemy(enemy);
    return;
  }

  if (enemy.key === "behemoth" || enemy.key === "specialPentagon") {
    drawBehemothEnemy(enemy);
    return;
  }

  if (enemy.key === "xer") {
    drawXerEnemy(enemy);
    return;
  }

  const radius = (enemy.shapeSides >= 6 ? 12 : 10.5) * (enemy.sizeScale || 1);
  const rotation = (enemy.facingAngle || 0) + (enemy.shapeSides === 3 ? 0 : Math.PI / enemy.shapeSides);

  ctx.fillStyle = enemy.color;
  ctx.beginPath();

  for (let index = 0; index < enemy.shapeSides; index += 1) {
    const angle = rotation + (Math.PI * 2 * index) / enemy.shapeSides;
    const px = enemy.x + Math.cos(angle) * radius;
    const py = enemy.y + Math.sin(angle) * radius;

    if (index === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.closePath();
  ctx.fill();

  if (enemy.key === "diamond") {
    ctx.fillStyle = enemy.coreColor || "#e8fbff";
    ctx.beginPath();
    const coreRadius = 5 + ((enemy.tier || 1) - 1) * 1.5;
    ctx.moveTo(enemy.x, enemy.y - coreRadius);
    ctx.lineTo(enemy.x + coreRadius, enemy.y);
    ctx.lineTo(enemy.x, enemy.y + coreRadius);
    ctx.lineTo(enemy.x - coreRadius, enemy.y);
    ctx.closePath();
    ctx.fill();
    if ((enemy.tier || 1) >= 2) {
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = enemy.tier >= 3 ? 2.4 : 1.6;
      ctx.beginPath();
      ctx.moveTo(enemy.x, enemy.y - radius - 2);
      ctx.lineTo(enemy.x + radius + 2, enemy.y);
      ctx.lineTo(enemy.x, enemy.y + radius + 2);
      ctx.lineTo(enemy.x - radius - 2, enemy.y);
      ctx.closePath();
      ctx.stroke();
    }
  }

  if (enemyHasVisibleShield(enemy)) {
    const coreRadius = 4.5 + ((enemy.tier || 1) - 1) * 1.8;
    ctx.fillStyle = enemy.coreColor || "#f4f8ff";
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, coreRadius, 0, Math.PI * 2);
    ctx.fill();
    if ((enemy.shieldHp || 0) > 0) {
      const shieldRatio = Math.max(0, Math.min(1, enemy.shieldHp / Math.max(enemy.maxShieldHp || 1, 1)));
      const outerRadius = enemy.shieldRadius || radius + 10;
      ctx.strokeStyle = `rgba(156, 222, 255, ${0.4 + shieldRatio * 0.45})`;
      ctx.lineWidth = 2 + ((enemy.tier || 1) - 1) * 0.5;
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, outerRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([8, 6]);
      ctx.lineDashOffset = -(lastTimestamp / 20);
      ctx.strokeStyle = "rgba(220, 244, 255, 0.85)";
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, Math.max(coreRadius + 5, outerRadius - 6), 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = `rgba(180, 230, 255, ${0.08 + shieldRatio * 0.08})`;
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, outerRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if ((enemy.tier || 1) >= 2 && enemy.key !== "diamond" && enemy.key !== "shield" && !enemy.waffleSquares) {
    ctx.strokeStyle = enemy.tier >= 3 ? "rgba(255, 244, 189, 0.9)" : "rgba(255,255,255,0.8)";
    ctx.lineWidth = enemy.tier >= 3 ? 2.6 : 1.6;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, radius + (enemy.tier >= 3 ? 3 : 1.5), 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = enemy.tier >= 3 ? "rgba(255, 241, 176, 0.8)" : "rgba(255,255,255,0.72)";
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.tier >= 3 ? 4.2 : 2.8, 0, Math.PI * 2);
    ctx.fill();
  }

  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.beginPath();
    for (let index = 0; index < enemy.shapeSides; index += 1) {
      const angle = rotation + (Math.PI * 2 * index) / enemy.shapeSides;
      const px = enemy.x + Math.cos(angle) * radius;
      const py = enemy.y + Math.sin(angle) * radius;

      if (index === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.fill();
  }

  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

}

function drawHeavyEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const width = 28 * scale;
  const height = 16 * scale;
  const radius = 6.5 * scale;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.fillStyle = "#8e9198";
  drawRoundedRect(-width / 2, -height / 2, width, height, radius);
  ctx.strokeStyle = "#8a5a2b";
  ctx.lineWidth = 3 * scale;
  if ((enemy.tier || 1) >= 3) {
    ctx.beginPath();
    ctx.moveTo(-10 * scale, -6 * scale);
    ctx.lineTo(10 * scale, 6 * scale);
    ctx.moveTo(10 * scale, -6 * scale);
    ctx.lineTo(-10 * scale, 6 * scale);
    ctx.moveTo(-10 * scale, -3.5 * scale);
    ctx.lineTo(10 * scale, -3.5 * scale);
    ctx.moveTo(-10 * scale, 3.5 * scale);
    ctx.lineTo(10 * scale, 3.5 * scale);
    ctx.stroke();
  } else if ((enemy.tier || 1) === 2) {
    ctx.beginPath();
    ctx.moveTo(-10 * scale, -6 * scale);
    ctx.lineTo(10 * scale, 6 * scale);
    ctx.moveTo(10 * scale, -6 * scale);
    ctx.lineTo(-10 * scale, 6 * scale);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(-10 * scale, 0);
    ctx.lineTo(10 * scale, 0);
    ctx.stroke();
  }
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    drawRoundedRect(-width / 2, -height / 2, width, height, radius);
  }
  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 1.5;
    roundedRectPath(ctx, -width / 2 - 3, -height / 2 - 3, width + 6, height + 6, radius + 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPopcornEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const radius = 11 * scale;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    drawLocalEnemyShieldBubble(enemy, radius * 0.55, enemy.shieldRadius || radius + 10);
    ctx.restore();
    return;
  }

  if (enemy.key === "sentinel") {
    const isSkrey = (enemy.tier || 1) >= 3;
    const isOverwatch = (enemy.tier || 1) === 2;
    const bodyRadius = (isSkrey ? 17 : isOverwatch ? 14 : 10.5) * scale;
    ctx.lineWidth = 2.2;
    if (isSkrey) {
      const triangles = [
        { x: bodyRadius * 0.7, size: 0.9 },
        { x: bodyRadius * 0.15, size: 0.76 },
        { x: -bodyRadius * 0.38, size: 0.62 }
      ];
      for (const triangle of triangles) {
        ctx.beginPath();
        ctx.moveTo(triangle.x + bodyRadius * triangle.size, 0);
        ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, -bodyRadius * 0.72 * triangle.size);
        ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, bodyRadius * 0.72 * triangle.size);
        ctx.closePath();
        ctx.stroke();
      }
    } else if (isOverwatch) {
      ctx.beginPath();
      ctx.moveTo(bodyRadius * 0.9, 0);
      ctx.lineTo(-bodyRadius * 0.08, -bodyRadius * 0.72);
      ctx.lineTo(-bodyRadius * 0.08, bodyRadius * 0.72);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bodyRadius * 0.36, 0);
      ctx.lineTo(-bodyRadius * 0.34, -bodyRadius * 0.48);
      ctx.lineTo(-bodyRadius * 0.34, bodyRadius * 0.48);
      ctx.closePath();
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, bodyRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = isSkrey ? 4.2 : isOverwatch ? 4.6 : 4;
    const lineXs = isSkrey ? [bodyRadius * 0.62, bodyRadius * 0.15] : [bodyRadius * (isOverwatch ? 0.9 : 0.7)];
    for (const lineX of lineXs) {
      ctx.beginPath();
      ctx.moveTo(lineX, -bodyRadius * 0.72);
      ctx.lineTo(lineX, bodyRadius * 0.72);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }
  ctx.fillStyle = "#73b8ff";
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  drawLocalEnemyShieldBubble(enemy, radius * 0.55, enemy.shieldRadius || radius + 10);

  ctx.restore();
}

function drawKernelEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.beginPath();
    ctx.arc(0, 0, 4.2 * scale, 0, Math.PI * 2);
    ctx.fill();
    drawLocalEnemyShieldBubble(enemy, 3.6 * scale, enemy.shieldRadius || 12 * scale);
    ctx.restore();
    return;
  }
  ctx.fillStyle = enemy.color || "#7abfff";
  ctx.beginPath();
  ctx.arc(0, 0, 4.2 * scale, 0, Math.PI * 2);
  ctx.fill();
  drawLocalEnemyShieldBubble(enemy, 3.6 * scale, enemy.shieldRadius || 12 * scale);
  ctx.restore();
}

function drawIdineFamilyEnemy(enemy) {
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    if (enemy.key === "idine") {
      const scale = enemy.sizeScale || 1.2;
      ctx.beginPath();
      ctx.moveTo(-18 * scale, 0);
      ctx.lineTo(8 * scale, -16 * scale);
      ctx.lineTo(8 * scale, 16 * scale);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-12 * scale, 0);
      ctx.lineTo(16 * scale, -15 * scale);
      ctx.lineTo(16 * scale, 15 * scale);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, 8.4 * (enemy.sizeScale || 1), 0, Math.PI * 2);
      ctx.fill();
    }
    drawLocalEnemyShieldBubble(enemy, enemy.key === "idine" ? 15 * (enemy.sizeScale || 1.2) : 7.2 * (enemy.sizeScale || 1), enemy.shieldRadius || ((enemy.key === "idine" ? 17 : 12) * (enemy.sizeScale || 1)));
    ctx.restore();
    return;
  }
  if (enemy.key === "idine") {
    const scale = enemy.sizeScale || 1.2;
    ctx.save();
    ctx.globalAlpha = 0.86;
    ctx.shadowColor = "rgba(161, 212, 255, 0.88)";
    ctx.shadowBlur = 18;
    ctx.fillStyle = "rgba(153, 224, 255, 0.72)";
    ctx.beginPath();
    ctx.moveTo(-18 * scale, 0);
    ctx.lineTo(8 * scale, -16 * scale);
    ctx.lineTo(8 * scale, 16 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "rgba(83, 43, 152, 0.82)";
    ctx.beginPath();
    ctx.moveTo(-12 * scale, 0);
    ctx.lineTo(16 * scale, -15 * scale);
    ctx.lineTo(16 * scale, 15 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(216, 245, 255, 0.85)";
    ctx.lineWidth = 1.8 * scale;
    ctx.beginPath();
    ctx.moveTo(-14 * scale, 0);
    ctx.lineTo(12 * scale, -11 * scale);
    ctx.moveTo(-14 * scale, 0);
    ctx.lineTo(12 * scale, 11 * scale);
    ctx.moveTo(-2 * scale, -8 * scale);
    ctx.lineTo(9 * scale, 0);
    ctx.lineTo(-2 * scale, 8 * scale);
    ctx.stroke();
  } else {
    ctx.save();
    ctx.globalAlpha = enemy.key === "celun" || enemy.key === "celris" ? 0.82 : 0.88;
    ctx.fillStyle = enemy.color;
    ctx.beginPath();
    ctx.arc(0, 0, 8.4 * (enemy.sizeScale || 1), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    const orbScale = enemy.sizeScale || 1;
    ctx.strokeStyle = "rgba(228, 245, 255, 0.52)";
    ctx.lineWidth = 1.3 * orbScale;
    ctx.beginPath();
    ctx.moveTo(-4.6 * orbScale, -2.2 * orbScale);
    ctx.lineTo(4.6 * orbScale, 2.2 * orbScale);
    ctx.moveTo(-2.6 * orbScale, 4.8 * orbScale);
    ctx.lineTo(3.2 * orbScale, -4.2 * orbScale);
    ctx.stroke();
  }
  drawLocalEnemyShieldBubble(enemy, enemy.key === "idine" ? 15 * (enemy.sizeScale || 1.2) : 7.2 * (enemy.sizeScale || 1), enemy.shieldRadius || ((enemy.key === "idine" ? 17 : 12) * (enemy.sizeScale || 1)));
  ctx.restore();
}

function drawShortbreadEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const width = (20 + ((enemy.tier || 1) - 1) * 4) * scale;
  const height = (10 + ((enemy.tier || 1) - 1) * 1.6) * scale;
  const radius = Math.min(width, height) * 0.28;

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.fillStyle = enemy.color;
  ctx.strokeStyle = "rgba(166, 129, 77, 0.95)";
  ctx.lineWidth = 2;
  drawRoundedRect(-width / 2, -height / 2, width, height, radius);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(222, 191, 137, 0.88)";
  for (let column = -1; column <= 1; column += 1) {
    for (let row = -1; row <= 1; row += 1) {
      ctx.beginPath();
      ctx.arc(column * width * 0.22, row * height * 0.26, 1.6 + scale * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    drawRoundedRect(-width / 2, -height / 2, width, height, radius);
    ctx.fill();
  }

  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 2.2;
    drawRoundedRect(-width / 2 - 2, -height / 2 - 2, width + 4, height + 4, radius + 1.5);
    ctx.stroke();
  }
  drawLocalEnemyShieldBubble(enemy, Math.max(width, height) * 0.48, enemy.shieldRadius || Math.max(width, height) * 0.68);
  ctx.restore();
}

function drawHealthEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = (enemy.tier >= 3 ? 4.8 : enemy.tier === 2 ? 4.1 : 3.5) * scale;
    ctx.beginPath();
    ctx.moveTo(-11 * scale, -10 * scale);
    ctx.lineTo(12 * scale, 0);
    ctx.lineTo(-11 * scale, 10 * scale);
    ctx.stroke();
    if ((enemy.tier || 1) >= 2) {
      ctx.lineWidth = 2.8 * scale;
      ctx.beginPath();
      ctx.moveTo(-1 * scale, -7 * scale);
      ctx.lineTo(-1 * scale, 7 * scale);
      ctx.stroke();
    }
    if ((enemy.tier || 1) >= 3) {
      ctx.lineWidth = 2.3 * scale;
      ctx.beginPath();
      ctx.moveTo(-7 * scale, -10 * scale);
      ctx.lineTo(-3 * scale, -4 * scale);
      ctx.moveTo(-7 * scale, 10 * scale);
      ctx.lineTo(-3 * scale, 4 * scale);
      ctx.moveTo(-10 * scale, 0);
      ctx.lineTo(-2 * scale, 0);
      ctx.stroke();
    }
    drawLocalEnemyShieldBubble(enemy, 9.5 * scale, enemy.shieldRadius || 17 * scale);
    ctx.restore();
    return;
  }
  ctx.strokeStyle = "#d64545";
  ctx.lineWidth = (enemy.tier >= 3 ? 4.8 : enemy.tier === 2 ? 4.1 : 3.5) * scale;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(-11 * scale, -10 * scale);
  ctx.lineTo(12 * scale, 0);
  ctx.lineTo(-11 * scale, 10 * scale);
  ctx.stroke();
  if ((enemy.tier || 1) >= 2) {
    ctx.lineWidth = 2.8 * scale;
    ctx.beginPath();
    ctx.moveTo(-1 * scale, -7 * scale);
    ctx.lineTo(-1 * scale, 7 * scale);
    ctx.stroke();
  }
  if ((enemy.tier || 1) >= 3) {
    ctx.lineWidth = 2.3 * scale;
    ctx.beginPath();
    ctx.moveTo(-7 * scale, -10 * scale);
    ctx.lineTo(-3 * scale, -4 * scale);
    ctx.moveTo(-7 * scale, 10 * scale);
    ctx.lineTo(-3 * scale, 4 * scale);
    ctx.moveTo(-10 * scale, 0);
    ctx.lineTo(-2 * scale, 0);
    ctx.stroke();
  }
  drawLocalEnemyShieldBubble(enemy, 9.5 * scale, enemy.shieldRadius || 17 * scale);
  ctx.restore();
}

function drawLifeEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = (enemy.tier >= 3 ? 5.3 : enemy.tier === 2 ? 4.6 : 4.1) * scale;
    ctx.beginPath();
    ctx.moveTo(-12 * scale, -11 * scale);
    ctx.lineTo(13 * scale, 0);
    ctx.lineTo(-12 * scale, 11 * scale);
    ctx.stroke();
    ctx.lineWidth = 2.1 * scale;
    ctx.beginPath();
    ctx.moveTo(-7 * scale, -7 * scale);
    ctx.lineTo(-7 * scale, 7 * scale);
    if ((enemy.tier || 1) >= 2) {
      ctx.moveTo(-1 * scale, -9 * scale);
      ctx.lineTo(-1 * scale, 9 * scale);
    }
    if ((enemy.tier || 1) >= 3) {
      ctx.moveTo(4 * scale, -6 * scale);
      ctx.lineTo(4 * scale, 6 * scale);
    }
    ctx.stroke();
    drawLocalEnemyShieldBubble(enemy, 10.5 * scale, enemy.shieldRadius || 18 * scale);
    ctx.restore();
    return;
  }
  ctx.strokeStyle = "#bf2e46";
  ctx.lineWidth = (enemy.tier >= 3 ? 5.3 : enemy.tier === 2 ? 4.6 : 4.1) * scale;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(-12 * scale, -11 * scale);
  ctx.lineTo(13 * scale, 0);
  ctx.lineTo(-12 * scale, 11 * scale);
  ctx.stroke();
  ctx.strokeStyle = "#f3d7de";
  ctx.lineWidth = 2.1 * scale;
  ctx.beginPath();
  ctx.moveTo(-7 * scale, -7 * scale);
  ctx.lineTo(-7 * scale, 7 * scale);
  if ((enemy.tier || 1) >= 2) {
    ctx.moveTo(-1 * scale, -9 * scale);
    ctx.lineTo(-1 * scale, 9 * scale);
  }
  if ((enemy.tier || 1) >= 3) {
    ctx.moveTo(4 * scale, -6 * scale);
    ctx.lineTo(4 * scale, 6 * scale);
  }
  ctx.stroke();
  if ((enemy.healRadius || 0) > 0) {
    ctx.strokeStyle = "rgba(255, 180, 198, 0.42)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(0, 0, 12 + Math.sin((lastTimestamp || 0) / 180) * 2.2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 210, 222, 0.26)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(0, 0, 17 + Math.sin((lastTimestamp || 0) / 220) * 2.4, 0, Math.PI * 2);
    ctx.stroke();
  }
  drawLocalEnemyShieldBubble(enemy, 10.5 * scale, enemy.shieldRadius || 18 * scale);
  ctx.restore();
}

function drawBreacherEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const tier = enemy.tier || 1;
  const width = (18 + (tier - 1) * 3) * scale;
  const height = (14 + (tier - 1) * 2.4) * scale;
  const innerGap = (8 + (tier - 1) * 1.5) * scale;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);

  const drawTrapezium = (direction = 1) => {
    const outerX = direction * (innerGap + width * 0.5);
    ctx.beginPath();
    ctx.moveTo(outerX - direction * width * 0.5, -height * 0.5);
    ctx.lineTo(outerX + direction * width * 0.34, -height * 0.28);
    ctx.lineTo(outerX + direction * width * 0.34, height * 0.28);
    ctx.lineTo(outerX - direction * width * 0.5, height * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  ctx.fillStyle = enemy.color;
  ctx.strokeStyle = "rgba(220, 247, 255, 0.92)";
  ctx.lineWidth = 2;
  drawTrapezium(-1);
  drawTrapezium(1);

  const orbRadius = (5.5 + (tier - 1) * 1.2) * scale;
  ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
  ctx.shadowBlur = 14 + tier * 3;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(0, 0, orbRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, orbRadius + 1.6, 0, Math.PI * 2);
  ctx.stroke();

  if (tier >= 2) {
    ctx.strokeStyle = "rgba(196, 245, 255, 0.9)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-innerGap * 0.4, -height * 0.54);
    ctx.lineTo(0, -height * 0.18);
    ctx.lineTo(innerGap * 0.4, -height * 0.54);
    ctx.stroke();
  }

  if (tier >= 3) {
    ctx.strokeStyle = "rgba(242, 252, 255, 0.94)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-innerGap * 0.46, height * 0.56);
    ctx.lineTo(0, height * 0.16);
    ctx.lineTo(innerGap * 0.46, height * 0.56);
    ctx.stroke();
  }

  if ((enemy.shieldHp || 0) > 0) {
    const shieldRatio = Math.max(0, Math.min(1, enemy.shieldHp / Math.max(enemy.maxShieldHp || 1, 1)));
    const shieldRadius = enemy.shieldRadius || innerGap + width * 0.9;
    ctx.strokeStyle = `rgba(126, 214, 255, ${0.42 + shieldRatio * 0.4})`;
    ctx.lineWidth = 2.4 + tier * 0.2;
    ctx.beginPath();
    ctx.arc(0, 0, shieldRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([7, 5]);
    ctx.lineDashOffset = -(lastTimestamp / 18);
    ctx.strokeStyle = "rgba(230, 249, 255, 0.92)";
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(orbRadius + 6, shieldRadius - 4), 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.restore();
}

function drawSplitterEnemy(enemy) {
  const tier = enemy.tier || 1;
  const radius = (7.5 + Math.min(tier - 1, 9) * 1.2) * (enemy.sizeScale || 1);
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.shadowColor = enemy.shielded ? "rgba(255, 236, 146, 0.85)" : "rgba(255, 215, 79, 0.82)";
  ctx.shadowBlur = 12 + Math.min(tier, 10) * 1.8;
  ctx.fillStyle = enemy.shielded ? "#ffe27f" : "#ffd84f";
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.strokeStyle = "rgba(194, 145, 20, 0.95)";
  ctx.lineWidth = 2;
  ctx.stroke();
  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(0, 0, radius + 3, 0, Math.PI * 2);
    ctx.stroke();
  }
  drawLocalEnemyShieldBubble(enemy, radius * 0.58, enemy.shieldRadius || radius + 10);
  ctx.restore();
}

function drawHydraEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const side = 22 * scale;
  const height = side * Math.sqrt(3) / 2;
  const noseX = (height * 2) / 3;
  const tailX = -height / 3;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.fillStyle = enemy.color || "#ffd84f";
  ctx.beginPath();
  ctx.moveTo(noseX, 0);
  ctx.lineTo(tailX, -side / 2);
  ctx.lineTo(tailX, side / 2);
  ctx.closePath();
  ctx.fill();
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.beginPath();
    ctx.moveTo(noseX, 0);
    ctx.lineTo(tailX, -side / 2);
    ctx.lineTo(tailX, side / 2);
    ctx.closePath();
    ctx.fill();
  }
  drawLocalEnemyShieldBubble(enemy, side * 0.62, enemy.shieldRadius || side * 0.78);
  ctx.restore();
}

function drawSentinelEnemy(enemy) {
  const isSkrey = (enemy.tier || 1) >= 3;
  const isOverwatch = (enemy.tier || 1) === 2;
  const scale = enemy.sizeScale || 1;
  const bodyRadius = (isSkrey ? 17 : isOverwatch ? 14 : 10.5) * scale;
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    if (isSkrey) {
      const triangles = [
        { x: bodyRadius * 0.7, size: 0.9 },
        { x: bodyRadius * 0.15, size: 0.76 },
        { x: -bodyRadius * 0.38, size: 0.62 }
      ];
      for (const triangle of triangles) {
        ctx.beginPath();
        ctx.moveTo(triangle.x + bodyRadius * triangle.size, 0);
        ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, -bodyRadius * 0.72 * triangle.size);
        ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, bodyRadius * 0.72 * triangle.size);
        ctx.closePath();
        ctx.fill();
      }
    } else if (isOverwatch) {
      ctx.beginPath();
      ctx.moveTo(bodyRadius * 0.9, 0);
      ctx.lineTo(-bodyRadius * 0.08, -bodyRadius * 0.72);
      ctx.lineTo(-bodyRadius * 0.08, bodyRadius * 0.72);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bodyRadius * 0.36, 0);
      ctx.lineTo(-bodyRadius * 0.34, -bodyRadius * 0.48);
      ctx.lineTo(-bodyRadius * 0.34, bodyRadius * 0.48);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, bodyRadius, 0, Math.PI * 2);
      ctx.fill();
    }
    drawLocalEnemyShieldBubble(enemy, bodyRadius * 0.68, enemy.shieldRadius || bodyRadius + 10);
    ctx.restore();
    return;
  }
  ctx.fillStyle = "#9f2323";
  if (isSkrey) {
    const triangles = [
      { x: bodyRadius * 0.7, size: 0.9 },
      { x: bodyRadius * 0.15, size: 0.76 },
      { x: -bodyRadius * 0.38, size: 0.62 }
    ];
    for (const triangle of triangles) {
      ctx.beginPath();
      ctx.moveTo(triangle.x + bodyRadius * triangle.size, 0);
      ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, -bodyRadius * 0.72 * triangle.size);
      ctx.lineTo(triangle.x - bodyRadius * 0.38 * triangle.size, bodyRadius * 0.72 * triangle.size);
      ctx.closePath();
      ctx.fill();
    }
  } else if (isOverwatch) {
    ctx.beginPath();
    ctx.moveTo(bodyRadius * 0.9, 0);
    ctx.lineTo(-bodyRadius * 0.08, -bodyRadius * 0.72);
    ctx.lineTo(-bodyRadius * 0.08, bodyRadius * 0.72);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(bodyRadius * 0.36, 0);
    ctx.lineTo(-bodyRadius * 0.34, -bodyRadius * 0.48);
    ctx.lineTo(-bodyRadius * 0.34, bodyRadius * 0.48);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, bodyRadius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.strokeStyle = "rgba(245, 248, 255, 0.95)";
  ctx.lineWidth = isSkrey ? 4.2 : isOverwatch ? 4.6 : 4;
  const lineXs = isSkrey ? [bodyRadius * 0.62, bodyRadius * 0.15] : [bodyRadius * (isOverwatch ? 0.9 : 0.7)];
  for (const lineX of lineXs) {
    ctx.beginPath();
    ctx.moveTo(lineX, -bodyRadius * 0.72);
    ctx.lineTo(lineX, bodyRadius * 0.72);
    ctx.stroke();
  }
  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, bodyRadius + 3, 0, Math.PI * 2);
    ctx.stroke();
  }
  drawLocalEnemyShieldBubble(enemy, bodyRadius * 0.68, enemy.shieldRadius || bodyRadius + 10);
  ctx.restore();
}

function drawAttackerEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const bodyLength = (enemy.tier >= 3 ? 20 : enemy.tier === 2 ? 16 : 13) * scale;
  const bodyWidth = (enemy.tier >= 3 ? 7.5 : enemy.tier === 2 ? 6.5 : 5.5) * scale;
  const wingLength = bodyLength * 0.7;
  const wingSpread = bodyLength * 0.48;
  const outlineColor = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.lineCap = "round";
  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.lineWidth = bodyWidth;
    ctx.beginPath();
    ctx.moveTo(bodyLength * 0.56, 0);
    ctx.lineTo(-bodyLength * 0.56, 0);
    ctx.stroke();
    ctx.lineWidth = Math.max(2.8, bodyWidth * 0.5);
    ctx.beginPath();
    ctx.moveTo(-bodyLength * 0.14, 0);
    ctx.lineTo(-wingLength, -wingSpread);
    ctx.moveTo(-bodyLength * 0.14, 0);
    ctx.lineTo(-wingLength, wingSpread);
    if (enemy.tier >= 2) {
      ctx.moveTo(-bodyLength * 0.36, 0);
      ctx.lineTo(-bodyLength * 0.94, -wingSpread * 0.54);
      ctx.moveTo(-bodyLength * 0.36, 0);
      ctx.lineTo(-bodyLength * 0.94, wingSpread * 0.54);
    }
    ctx.stroke();
    drawLocalEnemyShieldBubble(enemy, bodyLength * 0.55, enemy.shieldRadius || bodyLength + 10);
    ctx.restore();
    return;
  }

  ctx.strokeStyle = enemy.color;
  ctx.lineWidth = bodyWidth;
  ctx.beginPath();
  ctx.moveTo(bodyLength * 0.56, 0);
  ctx.lineTo(-bodyLength * 0.56, 0);
  ctx.stroke();

  ctx.lineWidth = Math.max(2.8, bodyWidth * 0.5);
  ctx.beginPath();
  ctx.moveTo(-bodyLength * 0.14, 0);
  ctx.lineTo(-wingLength, -wingSpread);
  ctx.moveTo(-bodyLength * 0.14, 0);
  ctx.lineTo(-wingLength, wingSpread);
  if (enemy.tier >= 2) {
    ctx.moveTo(-bodyLength * 0.36, 0);
    ctx.lineTo(-bodyLength * 0.94, -wingSpread * 0.54);
    ctx.moveTo(-bodyLength * 0.36, 0);
    ctx.lineTo(-bodyLength * 0.94, wingSpread * 0.54);
  }
  ctx.stroke();

  if (usesHiddenVisualEffect(enemy)) {
    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = bodyWidth + 3;
    ctx.beginPath();
    ctx.moveTo(bodyLength * 0.56, 0);
    ctx.lineTo(-bodyLength * 0.56, 0);
    ctx.stroke();
    ctx.lineWidth = Math.max(4, bodyWidth * 0.56);
    ctx.beginPath();
    ctx.moveTo(-bodyLength * 0.14, 0);
    ctx.lineTo(-wingLength, -wingSpread);
    ctx.moveTo(-bodyLength * 0.14, 0);
    ctx.lineTo(-wingLength, wingSpread);
    if (enemy.tier >= 2) {
      ctx.moveTo(-bodyLength * 0.36, 0);
      ctx.lineTo(-bodyLength * 0.94, -wingSpread * 0.54);
      ctx.moveTo(-bodyLength * 0.36, 0);
      ctx.lineTo(-bodyLength * 0.94, wingSpread * 0.54);
    }
    ctx.stroke();
  }

  if (enemyHasVisibleShield(enemy) && (enemy.shieldHp || 0) > 0) {
    const outerRadius = enemy.shieldRadius || bodyLength + 10;
    const shieldRatio = Math.max(0, Math.min(1, enemy.shieldHp / Math.max(enemy.maxShieldHp || 1, 1)));
    ctx.strokeStyle = `rgba(156, 222, 255, ${0.4 + shieldRatio * 0.45})`;
    ctx.lineWidth = 2 + ((enemy.tier || 1) - 1) * 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, outerRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([8, 6]);
    ctx.lineDashOffset = -(lastTimestamp / 20);
    ctx.strokeStyle = "rgba(220, 244, 255, 0.85)";
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(bodyLength * 0.55, outerRadius - 6), 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = `rgba(180, 230, 255, ${0.08 + shieldRatio * 0.08})`;
    ctx.beginPath();
    ctx.arc(0, 0, outerRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawAssassinEnemy(enemy) {
  const scale = enemy.sizeScale || 1;
  const bodyLength = (enemy.tier >= 3 ? 21 : enemy.tier === 2 ? 17 : 14) * scale;
  const bodyWidth = (enemy.tier >= 3 ? 8 : enemy.tier === 2 ? 6.8 : 5.8) * scale;
  const wingLength = bodyLength * 0.74;
  const wingSpread = bodyLength * 0.5;
  const trimColor = enemy.tier >= 3 ? "#d9ffd7" : enemy.tier === 2 ? "#b6f7b1" : "#8be88b";
  const outlineColor = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.lineCap = "round";

  if ((enemy.shellHp || 0) > 0) {
    drawOpaqueShell(enemy);
    ctx.lineWidth = bodyWidth;
    ctx.beginPath();
    ctx.moveTo(bodyLength * 0.6, 0);
    ctx.lineTo(-bodyLength * 0.6, 0);
    ctx.stroke();
    ctx.lineWidth = Math.max(3, bodyWidth * 0.52);
    ctx.beginPath();
    ctx.moveTo(-bodyLength * 0.08, 0);
    ctx.lineTo(-wingLength, -wingSpread);
    ctx.moveTo(-bodyLength * 0.08, 0);
    ctx.lineTo(-wingLength, wingSpread);
    ctx.stroke();
    drawLocalEnemyShieldBubble(enemy, bodyLength * 0.58, enemy.shieldRadius || bodyLength + 10);
    ctx.restore();
    return;
  }

  ctx.strokeStyle = enemy.color;
  ctx.lineWidth = bodyWidth;
  ctx.beginPath();
  ctx.moveTo(bodyLength * 0.6, 0);
  ctx.lineTo(-bodyLength * 0.6, 0);
  ctx.stroke();

  ctx.lineWidth = Math.max(3, bodyWidth * 0.52);
  ctx.beginPath();
  ctx.moveTo(-bodyLength * 0.08, 0);
  ctx.lineTo(-wingLength, -wingSpread);
  ctx.moveTo(-bodyLength * 0.08, 0);
  ctx.lineTo(-wingLength, wingSpread);
  ctx.moveTo(bodyLength * 0.12, -bodyWidth * 0.8);
  ctx.lineTo(bodyLength * 0.34, 0);
  ctx.lineTo(bodyLength * 0.12, bodyWidth * 0.8);
  ctx.stroke();

  ctx.strokeStyle = trimColor;
  ctx.lineWidth = Math.max(1.6, bodyWidth * 0.22);
  ctx.beginPath();
  ctx.moveTo(bodyLength * 0.22, 0);
  ctx.lineTo(-bodyLength * 0.24, 0);
  if (enemy.tier >= 2) {
    ctx.moveTo(-bodyLength * 0.18, -bodyWidth * 0.92);
    ctx.lineTo(-bodyLength * 0.46, -wingSpread * 0.54);
    ctx.moveTo(-bodyLength * 0.18, bodyWidth * 0.92);
    ctx.lineTo(-bodyLength * 0.46, wingSpread * 0.54);
  }
  if (enemy.tier >= 3) {
    ctx.moveTo(-bodyLength * 0.56, -wingSpread * 0.5);
    ctx.lineTo(-bodyLength * 0.78, 0);
    ctx.lineTo(-bodyLength * 0.56, wingSpread * 0.5);
  }
  ctx.stroke();

  if (usesHiddenVisualEffect(enemy)) {
    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = bodyWidth + 3;
    ctx.beginPath();
    ctx.moveTo(bodyLength * 0.6, 0);
    ctx.lineTo(-bodyLength * 0.6, 0);
    ctx.stroke();
    ctx.lineWidth = Math.max(4, bodyWidth * 0.6);
    ctx.beginPath();
    ctx.moveTo(-bodyLength * 0.08, 0);
    ctx.lineTo(-wingLength, -wingSpread);
    ctx.moveTo(-bodyLength * 0.08, 0);
    ctx.lineTo(-wingLength, wingSpread);
    ctx.moveTo(bodyLength * 0.12, -bodyWidth * 0.8);
    ctx.lineTo(bodyLength * 0.34, 0);
    ctx.lineTo(bodyLength * 0.12, bodyWidth * 0.8);
    ctx.stroke();
  }

  drawLocalEnemyShieldBubble(enemy, bodyLength * 0.58, enemy.shieldRadius || bodyLength + 10);

  ctx.restore();
}

function drawWaffleEnemy(enemy) {
  const gridSize = Math.max(1, Math.round(Math.sqrt(enemy.waffleSquares || 1)));
  const cellSize = 6;
  const gap = 1.5;
  const totalSize = gridSize * cellSize + (gridSize - 1) * gap;
  const left = -totalSize / 2;
  const top = -totalSize / 2;

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.fillStyle = enemy.color;
  ctx.strokeStyle = "rgba(111, 68, 18, 0.55)";
  ctx.lineWidth = 1;

  for (let row = 0; row < gridSize; row += 1) {
    for (let col = 0; col < gridSize; col += 1) {
      const x = left + col * (cellSize + gap);
      const y = top + row * (cellSize + gap);
      ctx.fillRect(x, y, cellSize, cellSize);
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }

  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(left - 2, top - 2, totalSize + 4, totalSize + 4);
  }

  if (enemyHasVisibleShield(enemy) && (enemy.shieldHp || 0) > 0) {
    const shieldRadius = enemy.shieldRadius || totalSize * 0.72 + 10;
    const shieldAlpha = 0.18 + 0.22 * Math.min(1, enemy.shieldHp / Math.max(enemy.maxShieldHp || enemy.shieldHp || 1, 1));
    ctx.fillStyle = `rgba(170, 221, 255, ${shieldAlpha})`;
    ctx.beginPath();
    ctx.arc(0, 0, shieldRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(150, 215, 255, 0.95)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, shieldRadius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(232, 248, 255, 0.85)";
    ctx.lineWidth = 1.8;
    ctx.setLineDash([7, 5]);
    ctx.beginPath();
    ctx.arc(0, 0, shieldRadius - 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.restore();
}

function drawBurningEnemyEffect(enemy) {
  if (!(enemy.burnTimer > 0)) {
    return;
  }

  const radius = enemy.waffleSquares ? 14 : enemy.key === "idaen" ? 22 : enemy.key === "xer" ? 24 : 12;
  ctx.save();
  ctx.globalAlpha = Math.min(0.85, 0.25 + enemy.burnTimer * 0.12);
  ctx.strokeStyle = "#ffb45f";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(enemy.x, enemy.y, radius + Math.sin(lastTimestamp / 85 + enemy.id) * 2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#ffd07d";
  for (let index = 0; index < 3; index += 1) {
    const angle = lastTimestamp / 220 + enemy.id + index * 2.1;
    const sparkX = enemy.x + Math.cos(angle) * (radius - 2);
    const sparkY = enemy.y + Math.sin(angle) * (radius - 2);
    ctx.beginPath();
    ctx.arc(sparkX, sparkY, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawIdaenEnemy(enemy) {
  const shieldActive = (enemy.phaseTimer || 0) > 0
    || enemies.some((entry) => entry.bossShieldMinion && entry.bossOwnerId === enemy.id && entry.hp > 0);
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  const gridSize = 8;
  const tile = 6;
  const totalSize = gridSize * tile;
  ctx.fillStyle = enemy.phaseTimer > 0 ? "#8a5b2d" : "#8d5f2e";
  ctx.strokeStyle = "rgba(83, 49, 18, 0.75)";
  ctx.lineWidth = 2;
  ctx.fillRect(-totalSize / 2, -totalSize / 2, totalSize, totalSize);
  ctx.strokeRect(-totalSize / 2, -totalSize / 2, totalSize, totalSize);
  ctx.fillStyle = "#ba8748";
  for (let row = 0; row < gridSize; row += 1) {
    for (let col = 0; col < gridSize; col += 1) {
      ctx.fillRect(-totalSize / 2 + col * tile + 1, -totalSize / 2 + row * tile + 1, tile - 2, tile - 2);
    }
  }
  ctx.fillStyle = "#6b4120";
  ctx.fillRect(-totalSize / 2 - 8, -5, 8, 10);
  ctx.fillRect(totalSize / 2, -5, 8, 10);
  if (shieldActive) {
    const shieldRadius = totalSize * 0.9 + 9;
    const pulse = 1 + Math.sin(lastTimestamp / 110 + enemy.id) * 0.04;
    ctx.save();
    ctx.strokeStyle = "rgba(255, 229, 154, 0.92)";
    ctx.fillStyle = "rgba(255, 208, 120, 0.08)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, shieldRadius * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 243, 196, 0.85)";
    ctx.lineWidth = 2;
    for (let index = 0; index < 8; index += 1) {
      const angle = Math.PI / 4 * index + lastTimestamp / 900;
      const crystalX = Math.cos(angle) * shieldRadius * 0.86;
      const crystalY = Math.sin(angle) * shieldRadius * 0.86;
      ctx.beginPath();
      ctx.moveTo(crystalX + Math.cos(angle) * 8, crystalY + Math.sin(angle) * 8);
      ctx.lineTo(crystalX + Math.cos(angle + Math.PI / 2) * 5, crystalY + Math.sin(angle + Math.PI / 2) * 5);
      ctx.lineTo(crystalX - Math.cos(angle) * 8, crystalY - Math.sin(angle) * 8);
      ctx.lineTo(crystalX + Math.cos(angle - Math.PI / 2) * 5, crystalY + Math.sin(angle - Math.PI / 2) * 5);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();
  }
  if (enemy.hidden) {
    ctx.strokeStyle = enemy.shielded ? "rgba(120, 196, 255, 0.9)" : "rgba(214, 233, 255, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-totalSize / 2 - 4, -totalSize / 2 - 4, totalSize + 8, totalSize + 8);
  }
  ctx.restore();
}

function drawAdapterEnemy(enemy) {
  drawAttackerEnemy(enemy);
  const bodyLength = 26 * (enemy.sizeScale || 1);
  const wingSpread = bodyLength * 0.52;
  const immunityColor = enemy.adapterImmunityClass ? (ADAPTER_IMMUNITY_COLORS[enemy.adapterImmunityClass] || "rgba(231, 216, 255, 0.82)") : "rgba(255, 225, 173, 0.85)";
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.strokeStyle = "rgba(248, 236, 255, 0.88)";
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(bodyLength * 0.2, -wingSpread * 0.45);
  ctx.lineTo(bodyLength * 0.74, 0);
  ctx.lineTo(bodyLength * 0.2, wingSpread * 0.45);
  ctx.stroke();
  ctx.fillStyle = immunityColor;
  ctx.beginPath();
  ctx.arc(0, 0, 6.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = immunityColor;
  ctx.lineWidth = enemy.adapterImmunityClass ? 2.2 : 2.4;
  ctx.beginPath();
  ctx.arc(0, 0, bodyLength * 0.72, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawBossBar() {
  const bosses = enemies.filter((enemy) => enemy.boss && enemy.hp > 0 && enemy.key !== "idaen" && enemy.key !== "adapter");

  if (bosses.length === 0) {
    return;
  }

  const left = 24;
  const width = canvas.width - 48;
  const barHeight = 38;

  bosses.forEach((boss, index) => {
    const biscuitsAlive = enemies.some((enemy) => enemy.bossShieldMinion && enemy.bossOwnerId === boss.id && enemy.hp > 0);
    const ratio = Math.max(0, Math.min(1, boss.hp / Math.max(boss.maxHp, 1)));
    const lagRatio = Math.max(0, Math.min(1, (boss.healthBarLagHp || boss.hp) / Math.max(boss.maxHp, 1)));
    const top = 10 + index * 48;
    const bossBarColor = (boss.healthBarTintTimer || 0) > 0
      ? boss.healthBarTint || "#d94f3d"
      : boss.key === "adapter"
        ? "#8a6de0"
        : (boss.phaseTimer > 0 || biscuitsAlive ? "#8a5b2d" : "#d94f3d");

    drawDamageLagBar(left, top, width, barHeight, ratio, lagRatio, bossBarColor);
    ctx.strokeStyle = "rgba(255, 249, 240, 0.95)";
    ctx.lineWidth = 3;
    ctx.strokeRect(left, top, width, barHeight);
    ctx.fillStyle = "#fffaf2";
    ctx.font = "bold 24px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const bossName = boss.key === "adapter" ? "Adapter" : "Mega Waffle";
    const bossState = boss.key === "adapter"
      ? ""
      : (boss.phaseTimer > 0 || biscuitsAlive ? " - Shielded" : "");
    ctx.fillText(`${bossName}${bossState}`, left + width / 2, top + barHeight / 2);
  });
}

function drawProjectiles() {
  for (const projectile of projectiles) {
    const render = projectBoardPoint(projectile.x, projectile.y);
    const { x, y, scale } = render;

    if (projectile.kind === "droneRocket") {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.angle || 0);
      ctx.shadowColor = "rgba(255, 173, 96, 0.62)";
      ctx.shadowBlur = 12;
      ctx.fillStyle = "#ffa560";
      ctx.beginPath();
      ctx.moveTo(7, 0);
      ctx.lineTo(-6, -4);
      ctx.lineTo(-6, 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "droneBullet") {
      ctx.fillStyle = "#fff3b7";
      ctx.beginPath();
      ctx.arc(x, y, 2.8 * scale, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    if (projectile.kind === "whiteBolt") {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.angle || 0);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(8, 0);
      ctx.stroke();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "cannonDart") {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.angle || 0);
      ctx.fillStyle = "#5c4f47";
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(-4, -4.5);
      ctx.lineTo(-10, -4.5);
      ctx.lineTo(-10, 4.5);
      ctx.lineTo(-4, 4.5);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#d7d7d7";
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(5, -3);
      ctx.lineTo(5, 3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "shotgunPellet") {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.angle || 0);
      ctx.strokeStyle = "#ffe177";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-4, 0);
      ctx.lineTo(4, 0);
      ctx.stroke();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "trapTurretBullet") {
      ctx.fillStyle = "#d8f8c2";
      ctx.beginPath();
      ctx.arc(x, y, 3 * scale, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    if (projectile.kind === "frostBolt") {
      ctx.fillStyle = "#c8f6ff";
      ctx.beginPath();
      ctx.arc(x, y, 4 * scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      continue;
    }

    if (projectile.kind === "fireball") {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.angle || 0);
      ctx.fillStyle = "#ff8b4d";
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(1, -5);
      ctx.lineTo(-5, -3);
      ctx.lineTo(-2, 0);
      ctx.lineTo(-5, 3);
      ctx.lineTo(1, 5);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#ffd36a";
      ctx.beginPath();
      ctx.moveTo(4, 0);
      ctx.lineTo(-1, -3);
      ctx.lineTo(-2, 0);
      ctx.lineTo(-1, 3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "dippyEgg") {
      if (projectile.hiddenOffscreen) {
        continue;
      }
      const size = projectile.projectileSize || 10;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.roll || 0);
      if (projectile.falling) {
        ctx.strokeStyle = "rgba(255, 228, 153, 0.38)";
        ctx.lineWidth = Math.max(2, size * 0.18);
        ctx.beginPath();
        ctx.moveTo(0, -size * 2.2);
        ctx.lineTo(0, size * 0.2);
        ctx.stroke();
      }
      if ((projectile.projectileSize || 10) > 10) {
        ctx.fillStyle = "#fffdf7";
        ctx.beginPath();
        ctx.ellipse(0, 0, size, size * 0.76, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = projectile.yolkColor || "#ffce54";
        ctx.beginPath();
        ctx.arc(size * 0.12, 0, size * 0.34, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = "#fff0d1";
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.82, size, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      continue;
    }

    if (projectile.kind === "dippyShell") {
      ctx.fillStyle = "#fff8da";
      ctx.beginPath();
      ctx.arc(x, y, 3 * scale, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    if (projectile.kind === "missile") {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(projectile.angle || 0);
      ctx.shadowColor = "rgba(255, 176, 92, 0.55)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#ffb366";
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(-7, -5);
      ctx.lineTo(-7, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "mangoBomb") {
      ctx.save();
      const angle = projectile.angle || Math.PI / 2;
      ctx.strokeStyle = "rgba(255, 190, 78, 0.9)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - Math.cos(angle) * 18 * scale, y - Math.sin(angle) * 18 * scale);
      ctx.stroke();
      ctx.fillStyle = "#ffd34d";
      ctx.beginPath();
      ctx.arc(x, y, 5.5 * scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff1a8";
      ctx.beginPath();
      ctx.arc(x - 1.5 * scale, y - 1.5 * scale, 1.6 * scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      continue;
    }

    ctx.fillStyle = "#ffe6a5";
    ctx.beginPath();
    ctx.arc(x, y, 4 * scale, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawEffects() {
  for (const effect of effects) {
    if (effect.kind === "beam") {
      const start = projectBoardPoint(effect.x1, effect.y1);
      const end = projectBoardPoint(effect.x2, effect.y2);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = effect.color;
      ctx.lineWidth = (effect.width || 3) * ((start.scale + end.scale) / 2);
      ctx.globalAlpha = effect.ttl / Math.max(effect.maxTtl || 0.12, 0.01);
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.globalAlpha = 1;
      continue;
    }

    if (effect.kind === "floatingText") {
      const render = projectBoardPoint(effect.x, effect.y);
      const alpha = effect.ttl / Math.max(effect.maxTtl || 1, 0.01);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = effect.color;
      ctx.font = `bold ${Math.max(10, 16 * render.scale)}px Georgia`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(effect.text, render.x, render.y);
      ctx.globalAlpha = 1;
      continue;
    }

    if (effect.kind === "puddle") {
      const render = projectBoardPoint(effect.x, effect.y);
      ctx.fillStyle = effect.color;
      ctx.globalAlpha = Math.max(0.2, effect.ttl / Math.max(effect.maxTtl || 1, 1));
      ctx.beginPath();
      if (effect.circular) {
        ctx.arc(render.x, render.y, effect.radius * render.scale, 0, Math.PI * 2);
      } else {
        ctx.ellipse(render.x, render.y, effect.radius * render.scale, effect.radius * 0.66 * render.scale, 0, 0, Math.PI * 2);
      }
      ctx.fill();
      if (effect.damage > 0) {
        ctx.strokeStyle = effect.poisonDamage > 0 ? "rgba(154, 233, 94, 0.78)" : "rgba(255, 129, 41, 0.72)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      continue;
    }

    if (effect.kind === "spark") {
      const render = projectBoardPoint(effect.x, effect.y);
      const alpha = effect.ttl / Math.max(effect.maxTtl || 0.2, 0.01);
      ctx.fillStyle = effect.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(render.x, render.y, effect.radius * render.scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      continue;
    }

    if (effect.kind === "constructLaunch") {
      const start = projectBoardPoint(effect.x1, effect.y1);
      const end = projectBoardPoint(effect.x2, effect.y2);
      const progress = 1 - effect.ttl / Math.max(effect.maxTtl || 0.18, 0.01);
      const headX = start.x + (end.x - start.x) * progress;
      const headY = start.y + (end.y - start.y) * progress;
      ctx.strokeStyle = effect.color;
      ctx.lineWidth = 2.5 * ((start.scale + end.scale) / 2);
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(headX, headY);
      ctx.stroke();
      ctx.fillStyle = effect.color;
      ctx.beginPath();
      ctx.arc(headX, headY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      continue;
    }

    ctx.strokeStyle = effect.color;
    const render = projectBoardPoint(effect.x, effect.y);
    ctx.lineWidth = 2 * render.scale;
    ctx.globalAlpha = effect.ttl / 0.18;
    ctx.beginPath();
    ctx.arc(render.x, render.y, effect.radius * render.scale * (1 - effect.ttl / 0.18 * 0.3), 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function drawEnemyDeathEffects() {
  for (const effect of effects) {
    if (effect.kind !== "enemyDeath") {
      continue;
    }

    const render = projectBoardPoint(effect.x, effect.y);
    const renderEffect = {
      ...effect,
      x: render.x,
      y: render.y,
      enemy: effect.enemy ? {
        ...effect.enemy,
        x: 0,
        y: 0,
        sizeScale: (effect.enemy.sizeScale || 1) * render.scale,
        shieldRadius: effect.enemy.shieldRadius ? effect.enemy.shieldRadius * render.scale : effect.enemy.shieldRadius,
        renderScale: render.scale
      } : effect.enemy
    };
    const progress = 1 - effect.ttl / Math.max(effect.maxTtl || 0.4, 0.01);
    const fade = Math.max(0, 1 - progress);
    const squash = 1 + Math.sin(Math.min(1, progress * 1.45) * Math.PI) * 0.24;
    const stretch = Math.max(0.6, 1 - progress * 0.42);

    ctx.save();
    ctx.translate(renderEffect.x, renderEffect.y);
    ctx.rotate((renderEffect.enemy?.facingAngle || 0) + (effect.spin || 0) * progress);
    ctx.globalAlpha = Math.pow(fade, 0.88) * 0.95;
    ctx.fillStyle = renderEffect.glowColor || renderEffect.color || "#ffffff";
    ctx.beginPath();
    ctx.arc(0, 0, (effect.radius || 12) * render.scale * (0.72 + progress * 1.25), 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha *= 0.7;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, (effect.radius || 12) * render.scale * (0.95 + progress * 0.75), 0, Math.PI * 2);
    ctx.stroke();
    ctx.scale(render.scale, render.scale);
    ctx.scale(squash, stretch);
    ctx.globalAlpha = Math.pow(fade, 1.15);
    drawEnemyShape(renderEffect.enemy);
    ctx.restore();
  }
}

function drawEndpoint(point, fill) {
  const center = projectCellCenterPoint(point.x, point.y);
  const offset = entityRenderOffset(point);
  const renderScale = center.scale;
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(center.x + offset.x, center.y + offset.y, 18 * renderScale, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 5 * renderScale;
  ctx.strokeStyle = "#fff9f1";
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  if (screenShakeTimer > 0 && screenShakeAmount > 0) {
    ctx.translate((Math.random() - 0.5) * 2 * screenShakeAmount, (Math.random() - 0.5) * 2 * screenShakeAmount);
  }
  drawMapScenery();
  drawGrid();
  drawRoute();

  for (const block of blocks.values()) {
    drawBlock(block);
  }

  drawFactoryRouteOverlays();

  drawTraps();
  drawSelectedTowerRange();
  drawDroneRelocateTowerTargets();
  drawPreview();
  drawArmedAbilityPreview();
  drawTowers();
  drawDrones();
  drawProjectiles();
  drawEffects();
  drawEnemies();
  drawEnemyDeathEffects();
  drawBossBar();
  if (!activeMap.hidePortals) {
    for (const portal of activePortals()) {
      drawEndpoint(portal, "#1f8a70");
    }
  }
  for (const goal of activeGoals()) {
    drawEndpoint(goal, "#cc3f5c");
  }
  ctx.restore();
}

function drawSelectedTowerRange() {
  const tower = towers.find((entry) => entry.id === selectedTowerId);

  if (!tower) {
    return;
  }

  const render = projectBoardPoint(tower.centerX, tower.centerY);
  drawTowerRangeOverlay({
    ...tower,
    centerX: render.x,
    centerY: render.y,
    gridCenterX: tower.centerX,
    gridCenterY: tower.centerY,
    renderScale: render.scale
  });
}

function drawDroneRelocateTowerTargets() {
  if (!droneCommandState || droneCommandState.mode !== "tower" || droneCommandState.stage !== "selectTarget") {
    return;
  }

  const commandTower = towers.find((entry) => entry.id === droneCommandState.towerId && entry.type === "drone");
  if (!commandTower) {
    return;
  }

  ctx.save();
  for (const tower of towers) {
    if (tower.id === commandTower.id || tower.upgradeLocked) {
      continue;
    }
    const radius = towerRelocationSelectionRadius(tower);
    const render = projectBoardPoint(tower.centerX, tower.centerY);
    ctx.strokeStyle = "#ffd84d";
    ctx.lineWidth = 8;
    ctx.globalAlpha = 0.96;
    ctx.beginPath();
    ctx.arc(render.x, render.y, radius * render.scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 247, 194, 0.94)";
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.84;
    ctx.beginPath();
    ctx.arc(render.x, render.y, radius * render.scale, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawTowerRangeOverlay(tower, colors = {}) {
  const stats = towerStats(tower);
  const renderScale = tower.renderScale || projectBoardPoint(0, tower.gridCenterY ?? tower.centerY).scale;
  const scaledStats = {
    ...stats,
    range: stats.range * renderScale,
    minRange: (stats.minRange || 0) * renderScale,
    auraRadius: (stats.auraRadius || 0) * renderScale,
    fieldRadius: (stats.fieldRadius || 0) * renderScale,
    orbitRadius: (stats.orbitRadius || 0) * renderScale
  };
  ctx.save();
  ctx.strokeStyle = colors.primaryStroke || "rgba(18,26,35,0.55)";
  ctx.fillStyle = colors.primaryFill || "rgba(18,26,35,0.14)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(tower.centerX, tower.centerY, scaledStats.range, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  if (tower.type === "dippy" && stats.minRange > 0) {
    ctx.strokeStyle = "rgba(214, 55, 55, 0.9)";
    ctx.fillStyle = "rgba(214, 55, 55, 0.08)";
    ctx.beginPath();
    ctx.arc(tower.centerX, tower.centerY, scaledStats.minRange, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  if (tower.type === "tesla" && stats.field) {
    drawTeslaFieldVisual(tower.centerX, tower.centerY, scaledStats, true);
  }
  if (tower.type === "freezer" && stats.aura) {
    drawFreezerAuraVisual(tower.centerX, tower.centerY, scaledStats, true);
  }
  if (tower.type === "support") {
    ctx.strokeStyle = stats.munitions ? "rgba(255, 205, 140, 0.5)" : "rgba(219, 201, 255, 0.48)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(tower.centerX, tower.centerY, scaledStats.auraRadius, 0, Math.PI * 2);
    ctx.stroke();
    if (stats.detectHiddenAura) {
      ctx.strokeStyle = "rgba(209, 246, 255, 0.52)";
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.arc(tower.centerX, tower.centerY, Math.max(0, (stats.auraRadius - 6) * renderScale), 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
  if (tower.type === "treasury" && stats.tradeEmpireAura > 1) {
    ctx.strokeStyle = "rgba(255, 214, 122, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(tower.centerX, tower.centerY, scaledStats.auraRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawBlockedSightOverlay(tower) {
  if (!tower || tower.type === "dippy" || tower.type === "support" || tower.type === "treasury" || tower.type === "orb" || tower.type === "drone") {
    return;
  }
  const stats = towerStats(tower);
  const range = stats.range;
  const originX = tower.gridCenterX ?? tower.centerX;
  const originY = tower.gridCenterY ?? tower.centerY;
  const rayStep = 6;
  const segmentCount = 100;
  ctx.save();
  ctx.fillStyle = "rgba(214, 55, 55, 0.18)";
  for (let segment = 0; segment < segmentCount; segment += 1) {
    const angle1 = (Math.PI * 2 * segment) / segmentCount;
    const angle2 = (Math.PI * 2 * (segment + 1)) / segmentCount;
    let inner1 = range;
    let inner2 = range;

    for (let distance = rayStep; distance <= range; distance += rayStep) {
      const x = Math.floor((originX + Math.cos(angle1) * distance) / CELL_SIZE);
      const y = Math.floor((originY + Math.sin(angle1) * distance) / CELL_SIZE);
      if (obstacleBlocksSight(x, y)) {
        inner1 = Math.max(0, distance - rayStep);
        break;
      }
    }

    for (let distance = rayStep; distance <= range; distance += rayStep) {
      const x = Math.floor((originX + Math.cos(angle2) * distance) / CELL_SIZE);
      const y = Math.floor((originY + Math.sin(angle2) * distance) / CELL_SIZE);
      if (obstacleBlocksSight(x, y)) {
        inner2 = Math.max(0, distance - rayStep);
        break;
      }
    }

    if (inner1 >= range && inner2 >= range) {
      continue;
    }

    const start1 = projectBoardPoint(originX + Math.cos(angle1) * inner1, originY + Math.sin(angle1) * inner1);
    const end1 = projectBoardPoint(originX + Math.cos(angle1) * range, originY + Math.sin(angle1) * range);
    const end2 = projectBoardPoint(originX + Math.cos(angle2) * range, originY + Math.sin(angle2) * range);
    const start2 = projectBoardPoint(originX + Math.cos(angle2) * inner2, originY + Math.sin(angle2) * inner2);
    ctx.beginPath();
    ctx.moveTo(start1.x, start1.y);
    ctx.lineTo(end1.x, end1.y);
    ctx.lineTo(end2.x, end2.y);
    ctx.lineTo(start2.x, start2.y);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function resetGame() {
  activeMap = MAPS[selectedMap];
  applyMapViewport();
  grid = createGrid();
  blocks = new Map();
  towers = [];
  drones = [];
  traps = [];
  enemies = [];
  projectiles = [];
  effects = [];
  ambientParticles = [];
  ambientTimer = 0;
  factoryState = null;
  wave = null;
  hoverCell = null;
  refillPieceChoices(selectedMap);
  money = startingMoney();
  freeBlocks = 3;
  currentBlockCost = BLOCK_COST;
  lives = DIFFICULTIES[selectedDifficulty].lives;
  waveNumber = 0;
  nextBlockId = 1;
  nextTowerId = 1;
  nextEnemyId = 1;
  nextProjectileId = 1;
  nextEffectId = 1;
  nextTrapId = 1;
  selectedTowerId = null;
  invalidPlacementTimer = 0;
  infiniteMode = selectedDifficulty === "sandbox";
  cheatBuffer = [];
  outpostWalllessQuestFailed = false;
  outpostQuestBlocksPlaced = 0;
  autoWaveUnlocked = false;
  autoWaveTimer = 0;
  armedAbility = null;
  droneCommandState = null;
  scrollVelocityX = 0;
  scrollVelocityY = 0;
  selectedGateRotation = 0;
  introducedEnemyKeys.clear();
  shownWaveWarnings.clear();
  activeWaveWarning = null;
  shownTutorialPopups.clear();
  tutorialPopupQueue = [];
  activeTutorialPopup = null;
  tutorialResumeMode = null;
  tutorialStepDelayTimer = 0;
  screenShakeTimer = 0;
  screenShakeAmount = 0;
  tutorialOverlay?.classList.remove("active");
  tutorialProgress.scrolled = false;
  tutorialProgress.placedBlock = false;
  tutorialProgress.placedTower = false;
  tutorialProgress.upgradedTower = false;
  resetSpawnPortalOrder();
seedMapFeatures();
routes = computeRoutes();
closeTowerPopup();
  setMessage("Board reset.", 1.0);
  queueFreezingMountainsTutorial();
  renderTutorial();
  updateHud();
  draw();
}

function updateGame(deltaTime) {
  const simDeltaTime = deltaTime * gameSpeedMultiplier;
  dashOffset = (dashOffset + simDeltaTime * 18) % DASH_PERIOD;
  messageTimer = Math.max(0, messageTimer - simDeltaTime);
  invalidPlacementTimer = Math.max(0, invalidPlacementTimer - simDeltaTime);
  tutorialStepDelayTimer = Math.max(0, tutorialStepDelayTimer - simDeltaTime);
  updateSmoothBoardScroll(simDeltaTime);
  for (const block of blocks.values()) {
    decayRenderOffset(block, simDeltaTime);
  }
  for (const tower of towers) {
    decayRenderOffset(tower, simDeltaTime);
  }
  for (const trap of traps) {
    decayRenderOffset(trap, simDeltaTime);
  }
  for (const drone of drones) {
    decayRenderOffset(drone, simDeltaTime);
  }
  if (factoryState) {
    for (const portal of factoryState.portals || []) {
      decayRenderOffset(portal, simDeltaTime);
    }
    if (factoryState.goal) {
      decayRenderOffset(factoryState.goal, simDeltaTime);
    }
  }
  presentQueuedTutorialPopup();

  if (infiniteMode) {
    money = 999999;
    lives = 999999;
  }

  if (lives <= 0) {
    if (gameMode !== "gameover") {
      showGameOver();
    }
    updateHud();
    return;
  }

  updateWave(simDeltaTime);
  updateAmbientEffects(simDeltaTime);
  updateEnemies(simDeltaTime);
  updateTowers(simDeltaTime);
  updateTraps(simDeltaTime);
  updateDrones(simDeltaTime);
  updateProjectiles(simDeltaTime);
  updateEffects(simDeltaTime);
  purgeDefeatedEnemies();
  if (autoWaveEnabled && autoWaveUnlocked && allRoutesOpen(routes) && (!wave || wave.complete)) {
    autoWaveTimer = Math.max(0, autoWaveTimer - simDeltaTime);
    if (autoWaveTimer === 0) {
      spawnWave();
    }
  }
  updateHud();
}

function animationFrame(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  const deltaTime = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
  lastTimestamp = timestamp;

  if (gameMode === "playing") {
    updateGame(deltaTime);
  }
  draw();
  requestAnimationFrame(animationFrame);
}

function setGameSpeed(multiplier) {
  const nextSpeed = [1, 2, 4].includes(multiplier) ? multiplier : 1;
  gameSpeedMultiplier = nextSpeed;
  setMessage(`Game speed set to ${nextSpeed}x.`, 1.1);
  updateHud();
}

function pointerToCell(event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    x: Math.floor(((event.clientX - rect.left) * scaleX) / CELL_SIZE),
    y: Math.floor(((event.clientY - rect.top) * scaleY) / CELL_SIZE)
  };
}

function pointerToCanvas(event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  };
}

function useAirstrikeAt(point) {
  const tower = preferredAirstrikeTower();
  if (!tower) {
    armedAbility = null;
    setMessage("No mango airstrike is ready.", 1.4);
    updateHud();
    return false;
  }

  if (!towerHasLineOfSightToPoint(tower, point.x, point.y)) {
    setMessage("Airstrike target blocked by terrain.", 1.4);
    updateHud();
    return false;
  }

  const stats = towerStats(tower);
  launchSupportAirstrike(tower, point, stats);
  tower.fieldCooldown = stats.airstrikeCooldown;
  armedAbility = null;
  setMessage("Mango airstrike called in.", 1.2);
  updateHud();
  return true;
}

function panelDockFor(panelName) {
  return panelName === "board" ? boardPanelDock : sidePanelDock;
}

function createRestoreButton(panelName, label) {
  const button = document.createElement("button");
  button.className = "dock-button";
  button.type = "button";
  button.dataset.restorePanel = panelName;
  button.textContent = `Show ${label}`;
  return button;
}

function hidePanel(panelName) {
  const panel = document.querySelector(`[data-panel="${panelName}"]`);

  if (!panel || panel.classList.contains("panel-hidden")) {
    return;
  }

  panel.classList.add("panel-hidden");
  const label = panel.querySelector("h2")?.textContent || panelName;
  panelDockFor(panelName).appendChild(createRestoreButton(panelName, label));
}

function showPanel(panelName) {
  const panel = document.querySelector(`[data-panel="${panelName}"]`);

  if (!panel) {
    return;
  }

  panel.classList.remove("panel-hidden");
  const button = document.querySelector(`[data-restore-panel="${panelName}"]`);

  if (button) {
    button.remove();
  }
}

function shouldSuppressGameContextMenu() {
  return gameMode === "playing" || gameMode === "paused" || Boolean(armedAbility);
}

function handleBoardRightClick(event) {
  if (!shouldSuppressGameContextMenu()) {
    return false;
  }
  event.preventDefault();
  event.stopPropagation();
  if (droneCommandState) {
    if (droneCommandState.stage === "selectTarget" || droneCommandState.stage === "selectDestination") {
      cancelDroneCommand("Relocation cancelled.");
    } else {
      setMessage("Relocation is already in progress and cannot be cancelled.", 1.2);
    }
  } else if (armedAbility) {
    armedAbility = null;
    setMessage("Ability targeting cancelled.", 0.9);
  } else {
    clearSelection(true);
    setMessage("Selection cleared.", 0.9);
  }
  updateHud();
  draw();
  return true;
}

canvas.addEventListener("click", (event) => {
  if (armedAbility === "airstrike") {
    useAirstrikeAt(pointerToCanvas(event));
    return;
  }
  const cell = pointerToCell(event);
  const point = pointerToCanvas(event);
  if (handleDroneCommandClick(cell.x, cell.y, point)) {
    updateHud();
    draw();
    return;
  }
  applyTool(cell.x, cell.y, point);
});

canvas.addEventListener("mousedown", (event) => {
  if (event.button !== 2) {
    return;
  }
  handleBoardRightClick(event);
});

canvas.addEventListener("mouseup", (event) => {
  if (event.button !== 2) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
});

canvas.addEventListener("auxclick", (event) => {
  if (event.button !== 2) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
});

canvas.addEventListener("contextmenu", (event) => {
  handleBoardRightClick(event);
});

document.addEventListener("contextmenu", (event) => {
  if (!shouldSuppressGameContextMenu()) {
    return;
  }
  event.preventDefault();
}, true);

canvas.addEventListener("mousemove", (event) => {
  const cell = pointerToCell(event);
  hoverPoint = pointerToCanvas(event);
  for (const tower of towers) {
    if (tower.type === "drone" && tower.targetPriority === "cursor") {
      tower.cursorPoint = { x: hoverPoint.x, y: hoverPoint.y };
    }
  }
  hoverCell = inBounds(cell.x, cell.y) ? cell : null;
  draw();
});

canvas.addEventListener("mouseleave", () => {
  hoverPoint = null;
  hoverCell = null;
  draw();
});

toolGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tool]");

  if (!button) {
    return;
  }

  setTool(button.dataset.tool);
});

document.addEventListener("click", (event) => {
  const popupUpgrade = event.target.closest("[data-upgrade-tower-id]");

  if (popupUpgrade) {
    const tower = towers.find((entry) => entry.id === Number(popupUpgrade.dataset.upgradeTowerId));

    if (!tower) {
      closeTowerPopup();
      return;
    }

    const path = popupUpgrade.dataset.upgradePath ? Number(popupUpgrade.dataset.upgradePath) : null;
    upgradeTower(tower, null, path);
    updateHud();
    draw();
    return;
  }

  const popupPriority = event.target.closest("[data-priority-tower-id]");

  if (popupPriority) {
    const tower = towers.find((entry) => entry.id === Number(popupPriority.dataset.priorityTowerId));

    if (!tower) {
      clearSelection(false);
      return;
    }

    const allowed = availablePrioritiesForTower(tower);
    const currentIndex = allowed.indexOf(tower.targetPriority || "first");
    tower.targetPriority = allowed[(currentIndex + 1) % allowed.length];
    openTowerPopup(tower);
    setMessage(`${towerDisplayName(tower)} priority set to ${TARGET_LABELS[tower.targetPriority]}.`, 1.1);
    updateHud();
    draw();
    return;
  }

  const popupOrbSpin = event.target.closest("[data-orb-spin-tower-id]");

  if (popupOrbSpin) {
    const tower = towers.find((entry) => entry.id === Number(popupOrbSpin.dataset.orbSpinTowerId));
    if (!tower) {
      clearSelection(false);
      return;
    }
    const allowed = ORB_SPIN_PRIORITIES;
    const currentIndex = allowed.indexOf(tower.targetPriority || "clockwise");
    tower.targetPriority = allowed[(currentIndex + 1) % allowed.length];
    openTowerPopup(tower);
    setMessage(`${towerDisplayName(tower)} spin set to ${TARGET_LABELS[tower.targetPriority]}.`, 1.1);
    updateHud();
    draw();
    return;
  }

  const popupOrbType = event.target.closest("[data-orb-type-tower-id]");

  if (popupOrbType) {
    const tower = towers.find((entry) => entry.id === Number(popupOrbType.dataset.orbTypeTowerId));
    if (!tower) {
      clearSelection(false);
      return;
    }
    normalizeTowerPriority(tower);
    const allowedTypes = (tower.path2 || 0) >= 4
      ? ORB_TYPE_PRIORITIES
      : ORB_TYPE_PRIORITIES.slice(0, 3);
    const currentIndex = allowedTypes.indexOf(tower.orbType || "explosive");
    tower.orbType = allowedTypes[(currentIndex + 1) % allowedTypes.length];
    openTowerPopup(tower);
    setMessage(`${towerDisplayName(tower)} orb type set to ${TARGET_LABELS[tower.orbType]}.`, 1.1);
    updateHud();
    draw();
    return;
  }

  const popupCannonPriority = event.target.closest("[data-cannon-priority-tower-id]");

  if (popupCannonPriority) {
    const tower = towers.find((entry) => entry.id === Number(popupCannonPriority.dataset.cannonPriorityTowerId));

    if (!tower) {
      clearSelection(false);
      return;
    }

    normalizeTowerPriority(tower);
    const allowed = availablePrioritiesForTower(tower);
    const slot = Math.max(0, Math.min(2, Number(popupCannonPriority.dataset.cannonPrioritySlot) || 0));
    const current = tower.cannonPriorities?.[slot] || "first";
    const currentIndex = allowed.indexOf(current);
    tower.cannonPriorities[slot] = allowed[(currentIndex + 1) % allowed.length];
    openTowerPopup(tower);
    setMessage(`${towerDisplayName(tower)} cannon ${slot + 1} priority set to ${TARGET_LABELS[tower.cannonPriorities[slot]]}.`, 1.1);
    updateHud();
    draw();
    return;
  }

  const popupDefrost = event.target.closest("[data-defrost-tower-id]");

  if (popupDefrost) {
    const tower = towers.find((entry) => entry.id === Number(popupDefrost.dataset.defrostTowerId));
    if (!tower) {
      clearSelection(false);
      return;
    }
    defrostTower(tower);
    updateHud();
    draw();
    return;
  }

  const popupTreasuryLoan = event.target.closest("[data-treasury-loan-tower-id]");

  if (popupTreasuryLoan) {
    const tower = towers.find((entry) => entry.id === Number(popupTreasuryLoan.dataset.treasuryLoanTowerId));
    if (!tower) {
      clearSelection(false);
      return;
    }
    takeTreasuryLoan(tower);
    updateHud();
    draw();
    return;
  }

  const popupTreasuryCollect = event.target.closest("[data-treasury-collect-tower-id]");

  if (popupTreasuryCollect) {
    const tower = towers.find((entry) => entry.id === Number(popupTreasuryCollect.dataset.treasuryCollectTowerId));
    if (!tower) {
      clearSelection(false);
      return;
    }
    collectTreasuryBank(tower);
    updateHud();
    draw();
    return;
  }

  const popupSell = event.target.closest("[data-sell-tower-id]");

  if (popupSell) {
    const tower = towers.find((entry) => entry.id === Number(popupSell.dataset.sellTowerId));

    if (!tower) {
      clearSelection(false);
      return;
    }

    sellTower(tower);
    updateHud();
    draw();
    return;
  }

  const popupDroneCommand = event.target.closest("[data-drone-command-tower-id]");

  if (popupDroneCommand) {
    const tower = towers.find((entry) => entry.id === Number(popupDroneCommand.dataset.droneCommandTowerId));
    if (!tower) {
      clearSelection(false);
      return;
    }
    const mode = popupDroneCommand.dataset.droneCommandMode;
    const stats = towerStats(tower);
    const allowed = mode === "block" ? stats.relocateBlock : stats.relocateTower;
    if (!allowed) {
      setMessage(mode === "block" ? "This drone cannot relocate blocks yet." : "This drone cannot relocate towers yet.", 1.4);
      return;
    }
    if (droneCommandState && droneCommandState.towerId === tower.id && droneCommandState.mode === mode) {
      if (droneCommandState.stage === "selectTarget" || droneCommandState.stage === "selectDestination") {
        cancelDroneCommand(mode === "block" ? "Block move cancelled." : "Tower move cancelled.");
      } else {
        setMessage(mode === "block"
          ? "Block relocation is already in progress."
          : "Tower relocation is already in progress.", 1.2);
      }
      updateHud();
      draw();
      return;
    }
    droneCommandState = {
      towerId: tower.id,
      mode,
      stage: "selectTarget"
    };
    selectedTowerId = null;
    closeTowerPopup();
    setMessage(mode === "block"
      ? "Click a block to move with its towers, then click its new anchor spot."
      : "Select a tower.", 6);
    updateHud();
    draw();
    return;
  }

  const hideButton = event.target.closest("[data-toggle-panel]");

  if (hideButton) {
    hidePanel(hideButton.dataset.togglePanel);
    return;
  }

  const restoreButton = event.target.closest("[data-restore-panel]");

  if (restoreButton) {
    showPanel(restoreButton.dataset.restorePanel);
  }
});

towerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tower-type]");

  if (!button) {
    return;
  }

  setTowerType(button.dataset.towerType);
});

almanacTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-almanac-tab]");

  if (!button) {
    return;
  }

  almanacTab = button.dataset.almanacTab;
  renderAlmanac();
});

almanacGrid.addEventListener("click", (event) => {
  const enemyEntry = event.target.closest("[data-almanac-enemy]");
  if (enemyEntry) {
    selectedAlmanacEnemy = enemyEntry.dataset.almanacEnemy;
    renderAlmanac();
    return;
  }

  const waveEntry = event.target.closest("[data-almanac-wave]");
  if (waveEntry) {
    selectedAlmanacWave = Math.max(1, Math.min(MAX_ALMANAC_WAVE, Number(waveEntry.dataset.almanacWave) || 1));
    renderAlmanac();
    return;
  }

  const towerEntry = event.target.closest("[data-almanac-tower]");

  if (!towerEntry) {
    return;
  }

  selectedAlmanacTower = towerEntry.dataset.almanacTower;
  renderAlmanac();
});

difficultyOptions.addEventListener("click", withUiGuard("Difficulty button", (event) => {
  const button = event.target.closest("[data-difficulty]");
  if (!button) {
    return;
  }
  selectedDifficulty = button.dataset.difficulty;
  updateMenuSelectors();
}));

mapOptions.addEventListener("click", withUiGuard("Map button", (event) => {
  const button = event.target.closest("[data-map]");
  if (!button) {
    return;
  }
  selectedMap = button.dataset.map;
  updateMenuSelectors();
}));

rotateButton.addEventListener("click", rotateActivePiece);
mirrorButton?.addEventListener("click", mirrorActivePiece);
pieceChoicePrimaryButton?.addEventListener("click", () => selectPieceChoice(0));
pieceChoiceSecondaryButton?.addEventListener("click", () => selectPieceChoice(1));
waveButton.addEventListener("click", () => spawnWave(true));
autoWaveToggle?.addEventListener("change", () => {
  autoWaveEnabled = autoWaveToggle.checked;
  autoWaveTimer = autoWaveEnabled ? 0.45 : 0;
  setMessage(autoWaveEnabled ? "Auto wave enabled." : "Auto wave disabled.", 1.3);
  updateHud();
});
speedControls?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speed]");
  if (!button) {
    return;
  }
  setGameSpeed(Number(button.dataset.speed) || 1);
});
pauseButton.addEventListener("click", pauseGame);
startGameButton.addEventListener("click", withUiGuard("Start Game", startGame));
openAlmanacButton.addEventListener("click", withUiGuard("Open Almanac", () => openAlmanac("menu")));
resumeGameButton.addEventListener("click", withUiGuard("Resume", resumeGame));
pauseAlmanacButton.addEventListener("click", withUiGuard("Pause Almanac", () => openAlmanac("pause")));
quitToMenuButton.addEventListener("click", withUiGuard("Quit To Menu", quitToMenu));
tutorialOverlayButton?.addEventListener("click", withUiGuard("Tutorial Continue", dismissTutorialPopup));
tutorialDismissButton?.addEventListener("click", withUiGuard("Dismiss Tutorial", dismissEntireTutorial));
closeAlmanacButton.addEventListener("click", withUiGuard("Close Almanac", closeAlmanac));
closeTowerPopupButton.addEventListener("click", withUiGuard("Close Tower Popup", closeTowerPopup));
sandboxWaveInput?.addEventListener("change", withUiGuard("Sandbox Set Wave", setSandboxWave));
sandboxWaveInput?.addEventListener("blur", withUiGuard("Sandbox Set Wave Blur", setSandboxWave));
sandboxWaveInput?.addEventListener("keydown", withUiGuard("Sandbox Set Wave Enter", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  event.preventDefault();
  setSandboxWave();
  sandboxWaveInput.blur();
}));
sandboxEnemySelect?.addEventListener("change", withUiGuard("Sandbox Enemy Select", updateSandboxTierOptions));
sandboxSpawnButton?.addEventListener("click", withUiGuard("Sandbox Spawn", spawnSandboxEnemyFromControls));
airstrikeButton?.addEventListener("click", () => {
  if (armedAbility === "airstrike") {
    armedAbility = null;
    updateHud();
    draw();
    return;
  }
  if (!preferredAirstrikeTower()) {
    setMessage("No mango airstrike is ready.", 1.4);
    updateHud();
    return;
  }
  armedAbility = "airstrike";
  setMessage("Click the board to target the mango airstrike.", 1.4);
  updateHud();
  draw();
});
restartGameButton?.addEventListener("click", withUiGuard("Restart Game", startGame));
gameOverMenuButton?.addEventListener("click", withUiGuard("Game Over Menu", quitToMenu));

window.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    heldScrollKeys.add(event.key);
    event.preventDefault();
  }

  if (scrollBoardByArrowKey(event.key)) {
    return;
  }

  if (/^[0-9]$/.test(event.key)) {
    cheatBuffer.push(event.key);
    cheatBuffer = cheatBuffer.slice(-3);

    if (cheatBuffer.join(",") === "5,1,2") {
      if (gameMode === "menu") {
        cheatUnlockAll = true;
        setUnlockedWaveMax(100, false);
        syncTowerUnlockState();
        persistProgressionState();
        for (const entry of enemyAlmanacEntries()) {
          markEnemyDiscovered(entry.parentKey || entry.key, entry.parentKey ? 1 : (entry.tier || 1));
        }
        updateTowerButtons();
        renderAlmanac();
        if (menuMapDescription) {
          menuMapDescription.textContent = "Cheat unlocked: every tower is unlocked, waves through 100 are unlocked, and the full almanac is revealed.";
        }
        setMessage("Cheat unlocked: every tower is unlocked, waves through 100 are unlocked, and the full almanac is revealed.", 2.4);
      } else {
        infiniteMode = !infiniteMode;
        if (infiniteMode) {
          money = 999999;
          lives = 999999;
          setMessage("Infinite money and lives enabled.", 1.8);
        } else {
          setMessage("Infinite money and lives disabled.", 1.8);
        }
      }
      updateHud();
      draw();
    }
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    rotateActivePiece();
  }

  if (event.key.toLowerCase() === "m") {
    event.preventDefault();
    mirrorActivePiece();
  }

  if (event.key === "Escape") {
    if (armedAbility) {
      armedAbility = null;
      updateHud();
      draw();
    } else if (gameMode === "playing") {
      pauseGame();
    } else if (gameMode === "paused") {
      resumeGame();
    }
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key.startsWith("Arrow")) {
    heldScrollKeys.delete(event.key);
  }
});

window.addEventListener("blur", () => {
  heldScrollKeys.clear();
  hoverPoint = null;
  hoverCell = null;
});

applyMapViewport();
routes = computeRoutes();
populateSandboxEnemyOptions();
renderAlmanac();
updateMenuSelectors();
openOverlay("menu");
updateHud();
draw();
requestAnimationFrame(animationFrame);
