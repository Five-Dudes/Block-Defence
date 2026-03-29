const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
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
const towerDescription = document.getElementById("towerDescription");
const waveButton = document.getElementById("waveButton");
const rotateButton = document.getElementById("rotateButton");
const toolGrid = document.getElementById("toolGrid");
const towerGrid = document.getElementById("towerGrid");
const sidePanelDock = document.getElementById("sidePanelDock");
const boardPanelDock = document.getElementById("boardPanelDock");
const blockToolButton = document.querySelector('[data-tool="wall"]');
const menuOverlay = document.getElementById("menuOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");
const almanacOverlay = document.getElementById("almanacOverlay");
const startGameButton = document.getElementById("startGameButton");
const openAlmanacButton = document.getElementById("openAlmanacButton");
const resumeGameButton = document.getElementById("resumeGameButton");
const pauseAlmanacButton = document.getElementById("pauseAlmanacButton");
const quitToMenuButton = document.getElementById("quitToMenuButton");
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
const closeTowerPopupButton = document.getElementById("closeTowerPopupButton");
const TARGET_PRIORITIES = ["first", "last", "strong", "weak", "hidden", "random"];
const PATH_TOWER_TYPES = new Set(["tesla", "missile", "trapper", "drone"]);
const TARGET_LABELS = {
  first: "First",
  last: "Last",
  strong: "Strong",
  weak: "Weak",
  hidden: "Hidden",
  random: "Random"
};

const COLS = 26;
const ROWS = 15;
const CELL_SIZE = 36;
const START_MONEY = 50;
const START_LIVES = 20;
const DASH_PERIOD = 16;
const BLOCK_COST = 5;
const TOWER_BASE_COST = {
  tesla: 30,
  missile: 38,
  trapper: 24,
  laser: 42,
  drone: 34,
  crossbow: 0
};
const UPGRADE_COSTS = {
  tesla: {
    path1: [8, 14, 24, 38, 58],
    path2: [8, 14, 24, 36, 56]
  },
  missile: {
    path1: [10, 16, 28, 42, 64],
    path2: [10, 16, 30, 46, 68]
  },
  drone: {
    path1: [9, 15, 26, 40, 62],
    path2: [9, 15, 27, 42, 64]
  },
  trapper: {
    path1: [7, 12, 20, 32, 50],
    path2: [7, 12, 20, 32, 50]
  },
  laser: [10, 18, 30, 46]
};
const TOWER_INFO = {
  tesla: { name: "Tesla", color: "#92d5ff", description: "Tesla chains lightning between nearby enemies and briefly stuns what it hits." },
  missile: { name: "Missile", color: "#ffae57", description: "Missile fires heavier explosive shots that deal strong splash damage in an area." },
  trapper: { name: "Trap Setter", color: "#89d37a", description: "Trap Setter seeds temporary traps, mines, or wall turrets depending on its upgrade path." },
  laser: { name: "Laser", color: "#ff7ca8", description: "Laser tracks the nearest enemy with a long-range focused burst." },
  drone: { name: "Drone", color: "#7de3d6", description: "Drone commands mobile gunships that chase targets inside tower coverage and can branch into support or assault roles." },
  crossbow: { name: "Crossbow", color: "#f3f7ff", description: "Outpost crossbow tower. Fires white bolts and can be upgraded once to shoot a double volley." }
};
const ENEMY_TYPES = {
  fast: {
    key: "fast",
    name: "Fast",
    color: "#d64545",
    shape: 3,
    hpMultiplier: 0.7,
    speedBonus: 24,
    reward: 2,
    description: "Fast triangles sprint through lanes and punish slow reaction times."
  },
  pentagon: {
    key: "pentagon",
    name: "Pentagon",
    color: "#7f56d9",
    shape: 5,
    hpMultiplier: 1.65,
    speedBonus: -8,
    reward: 4,
    description: "Pentagons are slower but absorb far more punishment than standard creeps."
  },
  hexagon: {
    key: "hexagon",
    name: "Hexagon",
    color: "#f1c84c",
    shape: 6,
    hpMultiplier: 2.25,
    speedBonus: -3,
    reward: 5,
    description: "Hexagons are heavy elites with very high health and steady forward pressure."
  },
  waffle16: {
    key: "waffle16",
    name: "Waffle",
    color: "#d69a43",
    shape: 4,
    hpMultiplier: 4.8,
    speedBonus: -10,
    reward: 10,
    waffleSquares: 16,
    description: "Waffles are layered swarm carriers that break apart into smaller waffles when destroyed."
  },
  waffle4: {
    key: "waffle4",
    name: "Tier Two Waffle",
    color: "#d9a85e",
    shape: 4,
    hpMultiplier: 1.2,
    speedBonus: -2,
    reward: 3,
    waffleSquares: 4,
    description: "Tier two waffles split again into crumbs if you fail to finish them quickly."
  },
  waffle1: {
    key: "waffle1",
    name: "Tier One Waffle",
    color: "#e5bf7f",
    shape: 4,
    hpMultiplier: 0.3,
    speedBonus: 10,
    reward: 1,
    waffleSquares: 1,
    description: "Tier one waffles are tiny crumbs that rush the exit after a larger waffle collapses."
  },
  armored: {
    key: "armored",
    name: "Armoured",
    color: "#93a1b5",
    shape: 6,
    hpMultiplier: 1.95,
    speedBonus: -5,
    reward: 6,
    armor: 4,
    description: "Armoured enemies shrug off bullets until lasers or explosions strip their white shell away."
  },
  biscuit: {
    key: "biscuit",
    name: "Biscuit",
    color: "#e6b26e",
    shape: 3,
    hpMultiplier: 0.5,
    speedBonus: 42,
    reward: 4,
    description: "Biscuits are sharp triangular runners that sprint for the exit with very high speed."
  },
  megaWaffle: {
    key: "megaWaffle",
    name: "Mega Waffle",
    color: "#b87d36",
    shape: 4,
    hpMultiplier: 7.2,
    speedBonus: -14,
    reward: 18,
    waffleSquares: 25,
    description: "Mega Waffles are massive summoned slabs that briefly disrupt towers when they crash in."
  },
  idaen: {
    key: "idaen",
    name: "I-daen",
    color: "#8d5f2e",
    shape: 4,
    hpMultiplier: 16,
    speedBonus: -16,
    reward: 60,
    waffleSquares: 16,
    description: "I-daen is a waffle golem boss that halts to summon off-lane reinforcements and can only appear on Outpost."
  }
};
const DIFFICULTIES = {
  easy: { name: "Easy", money: 60, lives: 28, hp: 0.85, reward: 1.15, interval: 1.08, enemyCount: 1 },
  standard: { name: "Standard", money: 50, lives: 20, hp: 1, reward: 1, interval: 1 },
  hard: { name: "Hard", money: 40, lives: 14, hp: 1.28, reward: 0.9, interval: 0.88, enemyCount: 1 },
  brutal: { name: "Brutal", money: 40, lives: 14, hp: 1.28, reward: 0.5, interval: 0.88, enemyCount: 2 },
  sandbox: { name: "Sandbox", money: 999999, lives: 999999, hp: 1, reward: 1, interval: 1, enemyCount: 1 }
};
const MAPS = {
  meadow: {
    name: "Classic",
    description: "Single portal, open grassland, a couple of sight-blocking stones.",
    scenery: "meadow",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: Math.floor(ROWS / 2) }],
    obstacles: [{ x: 9, y: 4 }, { x: 9, y: 5 }, { x: 16, y: 9 }]
  },
  canyon: {
    name: "Canyon Fork",
    description: "Two portals split the lane while canyon pillars block long tower lines.",
    scenery: "canyon",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: 4 }, { x: 0, y: 10 }],
    obstacles: [{ x: 8, y: 6 }, { x: 8, y: 7 }, { x: 14, y: 3 }, { x: 14, y: 11 }, { x: 19, y: 7 }]
  },
  ruins: {
    name: "Sunken Ruins",
    description: "Three portals and broken pillars create heavy sight denial.",
    scenery: "ruins",
    goal: { x: COLS - 1, y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: 3 }, { x: 0, y: 7 }, { x: 0, y: 11 }],
    obstacles: [{ x: 6, y: 5 }, { x: 6, y: 9 }, { x: 12, y: 2 }, { x: 12, y: 12 }, { x: 18, y: 6 }, { x: 18, y: 8 }]
  },
  mango: {
    name: "Mango Pass",
    description: "Two portals attack from opposite edges while the base sits in the middle beneath mango haze.",
    scenery: "mango",
    goal: { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
    portals: [{ x: 0, y: 4 }, { x: COLS - 1, y: 10 }],
    obstacles: [{ x: 8, y: 5 }, { x: 8, y: 9 }, { x: 12, y: 2 }, { x: 13, y: 12 }, { x: 17, y: 4 }, { x: 17, y: 10 }]
  },
  fortification: {
    name: "Outpost",
    description: "Four portals assault a broken 5x5 fort ring around the base. This map doubles enemies and halves cash gain.",
    scenery: "fortification",
    goal: { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
    portals: [
      { x: Math.floor(COLS / 2), y: 0 },
      { x: COLS - 1, y: Math.floor(ROWS / 2) },
      { x: Math.floor(COLS / 2), y: ROWS - 1 },
      { x: 0, y: Math.floor(ROWS / 2) }
    ],
    obstacles: [],
    enemyCount: 2,
    reward: 0.5
  }
};
const IDAEN_BOSS_WAVES = new Set([25, 50, 75, 100]);

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 }
];
const tetrominoes = [
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
  }
];

let currentTool = "wall";
let selectedTowerType = "tesla";
let routes = [];
let hoverCell = null;
let hoverPoint = null;
let activePiece = createRandomPiece();
let selectedDifficulty = "standard";
let selectedMap = "meadow";
let activeMap = MAPS[selectedMap];
let money = START_MONEY;
let freeBlocks = 1;
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
const discoveredEnemies = new Set();
let infiniteMode = false;
let cheatBuffer = [];
const ALMANAC_TOWER_TYPES = ["tesla", "missile", "trapper", "laser", "drone"];

const createGrid = () =>
  Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      blockId: null,
      towerId: null
    }))
  );

let grid = createGrid();

function activePortals() {
  return activeMap.portals;
}

function goalPortal() {
  return activeMap.goal;
}

function baseCenter() {
  return cellCenter(goalPortal().x, goalPortal().y);
}

function isOutpostMap() {
  return selectedMap === "fortification";
}

function isIdaenWave(round = waveNumber) {
  return isOutpostMap() && IDAEN_BOSS_WAVES.has(round);
}

function enemyCountMultiplier() {
  return (DIFFICULTIES[selectedDifficulty].enemyCount || 1) * (activeMap.enemyCount || 1);
}

function rewardMultiplier() {
  return DIFFICULTIES[selectedDifficulty].reward * (activeMap.reward || 1);
}

function startingMoney() {
  return DIFFICULTIES[selectedDifficulty].money;
}

function obstacleAt(x, y) {
  return activeMap.obstacles.some((cell) => cell.x === x && cell.y === y);
}

function isEndpoint(x, y) {
  return activePortals().some((portal) => portal.x === x && portal.y === y) || (x === goalPortal().x && y === goalPortal().y);
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

function rotateOffset(offset, turns) {
  let next = { x: offset.x, y: offset.y };

  for (let index = 0; index < turns; index += 1) {
    next = { x: -next.y, y: next.x };
  }

  return next;
}

function createRandomPiece() {
  const shape = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
  const turns = Math.floor(Math.random() * 4);

  return {
    name: shape.name,
    color: shape.color,
    offsets: shape.offsets.map((offset) => rotateOffset(offset, turns))
  };
}

function setMessage(text, duration = 1.6) {
  message = text;
  messageTimer = duration;
}

function openOverlay(name) {
  menuOverlay.classList.toggle("active", name === "menu");
  pauseOverlay.classList.toggle("active", name === "pause");
  almanacOverlay.classList.toggle("active", name === "almanac");
}

function renderAlmanac() {
  almanacGrid.innerHTML = "";
  almanacBody.classList.toggle("tower-layout", almanacTab === "towers");
  for (const button of almanacTabs.querySelectorAll("[data-almanac-tab]")) {
    button.classList.toggle("active", button.dataset.almanacTab === almanacTab);
  }

  if (almanacTab === "enemies") {
    almanacTitle.textContent = "Almanac";
    almanacDetail.innerHTML = `<p class="hint">Select the Towers tab to inspect tower damage, attacks per second, range, and upgrade scaling.</p>`;

    for (const enemy of Object.values(ENEMY_TYPES)) {
      const entry = document.createElement("article");
      const known = discoveredEnemies.has(enemy.key);
      entry.className = `almanac-entry${known ? "" : " locked"}`;
      entry.innerHTML = known
        ? `<h3>${enemy.name}</h3><p>${enemy.description}</p><p>Reward: ${enemy.reward}</p>`
        : `<h3>Unknown</h3><p>Encounter this enemy in battle to unlock this entry.</p>`;
      almanacGrid.appendChild(entry);
    }
    return;
  }

  almanacTitle.textContent = "Almanac";
  for (const key of ALMANAC_TOWER_TYPES) {
    const tower = TOWER_INFO[key];
    const entry = document.createElement("article");
    entry.className = `almanac-entry clickable${selectedAlmanacTower === key ? " active" : ""}`;
    entry.dataset.almanacTower = key;
    entry.innerHTML = `<h3>${tower.name}</h3><p>Cost: ${towerCost(key)}</p><p>${tower.description}</p>`;
    almanacGrid.appendChild(entry);
  }
  renderTowerAlmanacDetail(selectedAlmanacTower);
}

function startGame() {
  resetGame();
  activeMap = MAPS[selectedMap];
  if (selectedDifficulty === "sandbox") {
    infiniteMode = true;
    money = 999999;
    lives = 999999;
    setMessage("Sandbox mode: infinite money and lives enabled.", 2.1);
  }
  gameMode = "playing";
  closeTowerPopup();
  openOverlay(null);
}

function pauseGame() {
  if (gameMode !== "playing") {
    return;
  }

  gameMode = "paused";
  openOverlay("pause");
}

function resumeGame() {
  gameMode = "playing";
  openOverlay(null);
}

function quitToMenu() {
  gameMode = "menu";
  closeTowerPopup();
  openOverlay("menu");
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
    return;
  }

  gameMode = "menu";
  openOverlay("menu");
}

function setTool(nextTool) {
  currentTool = nextTool;

  for (const button of toolGrid.querySelectorAll("button[data-tool]")) {
    button.classList.toggle("active", button.dataset.tool === nextTool);
  }

  draw();
}

function updateMenuSelectors() {
  for (const button of difficultyOptions.querySelectorAll("[data-difficulty]")) {
    button.classList.toggle("active", button.dataset.difficulty === selectedDifficulty);
  }
  for (const button of mapOptions.querySelectorAll("[data-map]")) {
    button.classList.toggle("active", button.dataset.map === selectedMap);
  }
  menuMapDescription.textContent = `${MAPS[selectedMap].name}: ${MAPS[selectedMap].description}`;
}

function setTowerType(nextType) {
  selectedTowerType = nextType;
  currentTool = "tower";

  for (const button of towerGrid.querySelectorAll("button[data-tower-type]")) {
    button.classList.toggle("active", button.dataset.towerType === nextType);
  }

  for (const button of toolGrid.querySelectorAll("button[data-tool]")) {
    button.classList.toggle("active", button.dataset.tool === currentTool);
  }

  selectionText.textContent = `Selected: ${TOWER_INFO[nextType].name}`;
  towerDescription.textContent = TOWER_INFO[nextType].description;
  setMessage(TOWER_INFO[nextType].description, 1.8);
  draw();
}

function updateTowerButtons() {
  for (const button of towerGrid.querySelectorAll("button[data-tower-type]")) {
    const type = button.dataset.towerType;
    button.textContent = `${TOWER_INFO[type].name} (${towerCost(type)})`;
  }
}

function maxTowerLevel(tower) {
  return tower.type === "crossbow" ? 2 : 5;
}

function activeBossEnemy() {
  return enemies.find((enemy) => enemy.key === "idaen" && enemy.hp > 0) || null;
}

function rotateActivePiece() {
  activePiece = {
    ...activePiece,
    offsets: activePiece.offsets.map((offset) => rotateOffset(offset, 1))
  };
  updateHud();
  draw();
}

function placedCells(originX, originY, piece = activePiece) {
  return piece.offsets.map((offset) => ({
    x: originX + offset.x,
    y: originY + offset.y
  }));
}

function findPathFrom(startPoint, extraBlocked = []) {
  const extraBlockedSet = new Set(extraBlocked.map((cell) => `${cell.x},${cell.y}`));
  const queue = [{ x: startPoint.x, y: startPoint.y }];
  const visited = new Set([`${startPoint.x},${startPoint.y}`]);
  const parents = new Map([[`${startPoint.x},${startPoint.y}`, null]]);
  let found = null;

  while (queue.length > 0) {
    const current = queue.shift();
    const currentKey = `${current.x},${current.y}`;

    if (current.x === goalPortal().x && current.y === goalPortal().y) {
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

function computeRoutes(extraBlocked = []) {
  return activePortals().map((portal) => findPathFrom(portal, extraBlocked));
}

function allRoutesOpen(nextRoutes) {
  return nextRoutes.every((path) => path.length > 0);
}

function canPlacePiece(originX, originY) {
  const cells = placedCells(originX, originY);

  for (const cell of cells) {
    if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
      return false;
    }

    if (grid[cell.y][cell.x].blockId !== null || obstacleAt(cell.x, cell.y)) {
      return false;
    }
  }

  return allRoutesOpen(computeRoutes(cells));
}

function canPlaceTowerAt(x, y) {
  if (!inBounds(x, y) || isEndpoint(x, y)) {
    return false;
  }

  const cell = grid[y][x];
  return cell.blockId !== null && cell.towerId === null && money >= towerCost(selectedTowerType);
}

function placePiece(originX, originY) {
  if (!canPlacePiece(originX, originY)) {
    setMessage("That placement is invalid. Blocks cannot overlap or seal the route.");
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
    cells
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
    currentBlockCost *= 2;
  }
  activePiece = createRandomPiece();
  return true;
}

function towerAtCell(x, y) {
  const towerId = grid[y][x].towerId;
  return towers.find((tower) => tower.id === towerId) || null;
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
  const center = cellCenter(x, y);
  const tower = {
    id: nextTowerId,
    type,
    level: 1,
    path1: 0,
    path2: 0,
    targetPriority: "first",
    spent: overrides.spent ?? 0,
    x,
    y,
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
  grid[y][x].towerId = tower.id;
  nextTowerId += 1;
  return tower;
}

function seedFortificationMap() {
  const centerX = Math.floor(COLS / 2);
  const centerY = Math.floor(ROWS / 2);
  const wallCells = [
    { x: centerX - 2, y: centerY - 2 },
    { x: centerX - 1, y: centerY - 2 },
    { x: centerX, y: centerY - 2 },
    { x: centerX + 2, y: centerY - 2 },
    { x: centerX - 2, y: centerY - 1 },
    { x: centerX + 2, y: centerY },
    { x: centerX - 2, y: centerY + 1 },
    { x: centerX + 2, y: centerY + 1 },
    { x: centerX - 2, y: centerY + 2 },
    { x: centerX, y: centerY + 2 },
    { x: centerX + 1, y: centerY + 2 },
    { x: centerX + 2, y: centerY + 2 }
  ];

  addPresetBlock(wallCells, "#7b8895", "Fort Wall", true);
  addPresetTower("crossbow", centerX - 2, centerY - 2, { spent: 0, unique: true });
  addPresetTower("crossbow", centerX + 2, centerY - 2, { spent: 0, unique: true });
  addPresetTower("crossbow", centerX - 2, centerY + 2, { spent: 0, unique: true });
  addPresetTower("crossbow", centerX + 2, centerY + 2, { spent: 0, unique: true });
}

function seedMapFeatures() {
  if (selectedMap === "fortification") {
    seedFortificationMap();
  }
}

function towerCost(type) {
  return TOWER_BASE_COST[type];
}

function mockTower(type, overrides = {}) {
  return {
    id: 0,
    type,
    level: 1,
    path1: 0,
    path2: 0,
    targetPriority: "first",
    spent: towerCost(type),
    x: 0,
    y: 0,
    centerX: 0,
    centerY: 0,
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
    return 4 + tower * 3;
  }

  if (tower.type === "crossbow") {
    return 12;
  }

  if (PATH_TOWER_TYPES.has(tower.type) && path !== null) {
    const nextTier = (path === 1 ? tower.path1 : tower.path2) + 1;
    return UPGRADE_COSTS[tower.type][`path${path}`][nextTier - 1];
  }

  const nextLevel = tower.level + 1;
  const table = UPGRADE_COSTS[tower.type];
  return Array.isArray(table) ? table[Math.max(0, nextLevel - 2)] : 4 + tower.level * 3;
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
      2: "Path 2 T2: Better Engineering. More damage and 12 enemy steps.",
      3: "Path 2 T3: Sticky Traps. Traps now slow enemies.",
      4: "Path 2 T4: Mines. Explodes after 12 steps or when time runs out.",
      5: "Path 2 T5: Mango Mines. Explosions rain slowing mango bombs."
    }
  };

  return descriptions[path][tier];
}

function teslaPathDescription(path, tier) {
  const descriptions = {
    1: {
      1: "Path 1 T1: Improved batteries. Chains 1 enemy.",
      2: "Path 1 T2: Higher voltage. Chains 2 enemies.",
      3: "Path 1 T3: Faster attack sped. Chains 2 enemies.",
      4: "Path 1 T4: Slowing zaps. Chains 3 enemies and adds chain slow.",
      5: "Path 1 T5: Supercharge. Chains 3 enemies with stored energy."
    },
    2: {
      1: "Path 2 T1: Better Damage. Chains 1 enemy with more damage.",
      2: "Path 2 T2: Longer stun. Chains 1 enemy with longer stun.",
      3: "Path 2 T3: Chains 3 enemies. Electric Field and hidden detection unlocked.",
      4: "Path 2 T4: Supertaser. Chains 4 enemies. Field fires more often and stuns longer.",
      5: "Path 2 T5: Electrocannon. Chains 8 enemies with massive blasts and small splash."
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
      3: "Path 1 T3: Better Munitions. Faster rockets, larger blast, slight damage boost.",
      4: "Path 1 T4: Rocket Burst. Shoots a burst of 2 rockets before reloading for 1.24s.",
      5: "Path 1 T5: Rocket Pods. Shoots a burst of 6 rockets before reloading for 1.20s."
    },
    2: {
      1: "Path 2 T1: More damage.",
      2: "Path 2 T2: Even more damage.",
      3: "Path 2 T3: Shrapnel. Explosion throws damaging shards.",
      4: "Path 2 T4: Clusters. Explosion launches 10 mini bombs with reduced reach.",
      5: "Path 2 T5: Rain of Bombs. Short-range cluster bombs split into more explosives."
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
      1: "Path 1 T1: Second Gun. Fires two shots at a time.",
      2: "Path 1 T2: Advanced Tracking. More range and hidden detection.",
      3: "Path 1 T3: Rocket. Fires two bullets and a rocket.",
      4: "Path 1 T4: Increased Gunpowder. Rocket explosion grows and hits harder.",
      5: "Path 1 T5: Attack Drone. 1.25x range, can hunt inside allied tower ranges, rockets fire faster."
    },
    2: {
      1: "Path 2 T1: Improved Mechanics. Faster attack speed.",
      2: "Path 2 T2: Sharper Bullets. Bullets pierce twice.",
      3: "Path 2 T3: Extra Support. Gains 2 extra support drones.",
      4: "Path 2 T4: Additional Weapons. Main drone gets four guns, supports get two.",
      5: "Path 2 T5: Drone Commander. Gains 2 more support drones and 1.5x range."
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

function canUpgradeTrapperPath(tower, path) {
  return canUpgradeTeslaPath(tower, path);
}

function pathDescriptionForTower(tower, path, tier) {
  if (tower.type === "tesla") {
    return teslaPathDescription(path, tier);
  }

  if (tower.type === "missile") {
    return missilePathDescription(path, tier);
  }

  if (tower.type === "trapper") {
    return trapperPathDescription(path, tier);
  }

  return dronePathDescription(path, tier);
}

function canUpgradeTowerPath(tower, path) {
  if (tower.type === "tesla") {
    return canUpgradeTeslaPath(tower, path);
  }

  if (tower.type === "missile") {
    return canUpgradeMissilePath(tower, path);
  }

  if (tower.type === "trapper") {
    return canUpgradeTrapperPath(tower, path);
  }

  return canUpgradeDronePath(tower, path);
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.00$/, "");
}

function formatRange(value) {
  return formatNumber(value / CELL_SIZE);
}

function towerStatSummary(type, overrides = {}) {
  const tower = mockTower(type, overrides);
  const stats = towerStats(tower);
  const armoredProbe = { armored: true, armorHp: 4, hidden: false };
  const hitsArmored = canTowerDamageEnemy(tower, armoredProbe, stats);
  const attacksPerSecond = type === "trapper" && stats.turretMode
    ? 1 / stats.turretCooldown
    : 1 / stats.cooldown;
  const damage = type === "trapper" && stats.turretMode ? stats.turretDamage : type === "drone" ? Math.max(stats.bulletDamage, stats.rocket ? stats.rocketDamage : 0) : stats.damage;
  const range = type === "trapper" && stats.turretMode ? stats.turretRange : stats.range;
  const extras = [];

  if (stats.detectHidden) {
    extras.push("Detects hidden");
  }
  if (type === "missile" && stats.splash) {
    extras.push(`Splash ${formatNumber(stats.splash)}`);
  }
  if (type === "tesla" && stats.chainCount) {
    extras.push(`Chains ${stats.chainCount}`);
  }
  if (type === "tesla" && stats.splash) {
    extras.push(`Splash ${formatNumber(stats.splash)}`);
  }
  if (type === "trapper") {
    extras.push(stats.turretMode ? `Turret life ${formatNumber(stats.trapLifetime)}s` : `Life ${formatNumber(stats.trapLifetime)}s`);
  }
  if (type === "drone" && stats.supportCount) {
    extras.push(`Support drones ${stats.supportCount}`);
    extras.push(`Mini drone damage ${formatNumber(stats.supportDamage)}`);
    extras.push(`Mini drone guns ${stats.supportGuns}`);
    extras.push(`Mini drone range ${formatRange(stats.supportRange)}`);
  }
  if (type === "missile" && stats.burst > 1) {
    extras.push(`Burst ${stats.burst} rockets, reload ${formatNumber(stats.cooldown)}s`);
  }
  if (hitsArmored) {
    extras.push("Hits armoured");
  }

  return {
    damage,
    aps: attacksPerSecond,
    range,
    extras,
    hitsArmored
  };
}

function renderTowerStatsBlock(label, summary) {
  const extras = summary.extras.length ? `<p>${summary.extras.join(" | ")}</p>` : "";
  return `<div><strong>${label}</strong><p>Damage: ${formatNumber(summary.damage)} | APS: ${formatNumber(summary.aps)} | Range: ${formatRange(summary.range)}</p>${extras}</div>`;
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

  return "Hits armoured at Path 2 T5 with Electrocannon.";
}

function pathUpgradeSummary(type, path) {
  const entries = [];

  for (let tier = 1; tier <= 5; tier += 1) {
    const overrides = path === 1
      ? { path1: tier, path2: 0, level: 1 + tier }
      : { path1: 0, path2: tier, level: 1 + tier };
    const summary = towerStatSummary(type, overrides);
    entries.push(`<p><strong>${upgradeNameForTower(type, path, tier)}</strong>: Damage ${formatNumber(summary.damage)}, APS ${formatNumber(summary.aps)}, Range ${formatRange(summary.range)}${summary.extras.length ? `, ${summary.extras.join(", ")}` : ""}</p>`);
  }

  return entries.join("");
}

function laserUpgradeSummary() {
  const entries = [];
  const names = ["Base Upgrade", "Focused Lens", "Amplified Beam", "Refined Crystal", "Overcharged Prism"];

  for (let level = 1; level <= 5; level += 1) {
    const summary = towerStatSummary("laser", { level });
    entries.push(`<p><strong>${names[level - 1]}</strong>: Damage ${formatNumber(summary.damage)}, APS ${formatNumber(summary.aps)}, Range ${formatRange(summary.range)}${summary.extras.length ? `, ${summary.extras.join(", ")}` : ""}</p>`);
  }

  return entries.join("");
}

function renderTowerAlmanacDetail(type) {
  const info = TOWER_INFO[type];
  const baseSummary = towerStatSummary(type);
  let detail = `<h3>${info.name}</h3><p>${info.description}</p><p><strong>Armoured:</strong> ${armoredUnlockText(type)}</p>${renderTowerStatsBlock("Base", baseSummary)}`;

  if (isPathTower(type)) {
    detail += `<h4>Path 1</h4>${pathUpgradeSummary(type, 1)}`;
    detail += `<h4>Path 2</h4>${pathUpgradeSummary(type, 2)}`;
  } else {
    detail += `<h4>Upgrade Levels</h4>${laserUpgradeSummary()}`;
  }

  almanacDetail.innerHTML = detail;
}

function clearSelection(clearTool = false) {
  selectedTowerId = null;
  closeTowerPopup();

  if (clearTool) {
    currentTool = null;
    for (const button of toolGrid.querySelectorAll("button[data-tool]")) {
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

function appendPriorityButton(container, tower) {
  const button = document.createElement("button");
  button.className = "tower-upgrade secondary";
  button.dataset.priorityTowerId = tower.id;
  button.textContent = `Priority: ${TARGET_LABELS[tower.targetPriority || "first"]}`;
  container.appendChild(button);
}

function towerCanDetectHidden(tower) {
  return Boolean(towerStats(tower).detectHidden);
}

function availablePrioritiesForTower(tower) {
  return TARGET_PRIORITIES.filter((priority) => priority !== "hidden" || towerCanDetectHidden(tower));
}

function normalizeTowerPriority(tower) {
  const allowed = availablePrioritiesForTower(tower);
  if (!allowed.includes(tower.targetPriority)) {
    tower.targetPriority = "first";
  }
}

function towerCapabilityText(tower) {
  return towerCanDetectHidden(tower) ? "Can attack hiddens." : "Cannot attack hiddens.";
}

function closeTowerPopup() {
  towerPopup.hidden = true;
  towerPopup.classList.remove("left", "right");
}

function openTowerPopup(tower) {
  if (!tower) {
    closeTowerPopup();
    return;
  }

  towerPopup.hidden = false;
  towerPopup.classList.toggle("left", tower.x >= COLS / 2);
  towerPopup.classList.toggle("right", tower.x < COLS / 2);
  towerPopupTitle.textContent = TOWER_INFO[tower.type].name;

  normalizeTowerPriority(tower);

  if (isPathTower(tower)) {
    towerPopupSummary.textContent = `${TOWER_INFO[tower.type].name} Lv ${tower.level}. Path 1: ${tower.path1}/5. Path 2: ${tower.path2}/5. Priority: ${TARGET_LABELS[tower.targetPriority || "first"]}. ${towerCapabilityText(tower)}`;
  } else {
    towerPopupSummary.textContent = `${TOWER_INFO[tower.type].description} Level ${tower.level}/${maxTowerLevel(tower)}. Priority: ${TARGET_LABELS[tower.targetPriority || "first"]}. ${towerCapabilityText(tower)}`;
  }

  towerPopupActions.innerHTML = "";

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
    button1.textContent = canPath1
      ? `${path1Text} (${upgradeCost(tower, 1)})`
      : "Path 1 maxed";
    button1.disabled = !canPath1;
    towerPopupActions.appendChild(button1);

    const button2 = document.createElement("button");
    button2.className = "tower-upgrade";
    button2.dataset.upgradeTowerId = tower.id;
    button2.dataset.upgradePath = "2";
    button2.textContent = canPath2
      ? `${path2Text} (${upgradeCost(tower, 2)})`
      : "Path 2 maxed";
    button2.disabled = !canPath2;
    towerPopupActions.appendChild(button2);
    appendPriorityButton(towerPopupActions, tower);
    appendSellButton(towerPopupActions, tower);
    return;
  }

  const upgradeButton = document.createElement("button");
  upgradeButton.className = "tower-upgrade";
  upgradeButton.dataset.upgradeTowerId = tower.id;
  upgradeButton.textContent = tower.level >= maxTowerLevel(tower) ? "Max upgraded" : `Upgrade (${upgradeCost(tower)})`;
  upgradeButton.disabled = tower.level >= maxTowerLevel(tower);
  towerPopupActions.appendChild(upgradeButton);
  appendPriorityButton(towerPopupActions, tower);
  appendSellButton(towerPopupActions, tower);
}

function placeTower(x, y) {
  const cell = grid[y][x];

  if (cell.blockId === null) {
    setMessage("Towers must be placed on a tetromino block.");
    return false;
  }

  if (cell.towerId !== null) {
    setMessage("That block tile already has a tower.");
    return false;
  }

  const cost = towerCost(selectedTowerType);

  if (money < cost) {
    setMessage("Not enough money for that tower.");
    return false;
  }

  const center = cellCenter(x, y);
  const tower = {
    id: nextTowerId,
    type: selectedTowerType,
    level: 1,
    path1: 0,
    path2: 0,
    targetPriority: "first",
    spent: cost,
    x,
    y,
    centerX: center.x,
    centerY: center.y,
    cooldown: 0,
    burstShotsRemaining: 0,
    burstTimer: 0,
    burstTargetId: null,
    aimAngle: -Math.PI / 2,
    fieldCooldown: 0,
    charge: 0,
    stunnedTimer: 0
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
  grid[y][x].towerId = tower.id;
  nextTowerId += 1;
  money -= cost;
  selectedTowerId = tower.id;
  return true;
}

function upgradeTower(x, y, path = null) {
  const tower = x && typeof x === "object" ? x : towerAtCell(x, y);

  if (!tower) {
    setMessage("Select an existing tower to upgrade.");
    return false;
  }

  if (isPathTower(tower) && path === null) {
    selectedTowerId = tower.id;
    openTowerPopup(tower);
    setMessage("Select an upgrade path in the tower popup.", 1.4);
    return false;
  }

  if (tower.type === "crossbow") {
    if (tower.level >= 2) {
      setMessage("That crossbow is already fully upgraded.");
      return false;
    }

    const cost = upgradeCost(tower);

    if (money < cost) {
      setMessage("Not enough money to upgrade that tower.");
      return false;
    }

    tower.level = 2;
    money -= cost;
    tower.spent = (tower.spent || 0) + cost;
    selectedTowerId = tower.id;
    setMessage("Crossbow upgraded to double bolts.", 1.2);
    openTowerPopup(tower);
    return true;
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
  setMessage(`${TOWER_INFO[tower.type].name} upgraded to level ${tower.level}.`, 1.2);
  openTowerPopup(tower);
  return true;
}

function removeTowerById(towerId) {
  const tower = towers.find((entry) => entry.id === towerId);

  if (!tower) {
    return null;
  }

  grid[tower.y][tower.x].towerId = null;
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
  setMessage(`${TOWER_INFO[tower.type].name} sold.`, 1.2);
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

function applyTool(x, y) {
  if (gameMode !== "playing" || !inBounds(x, y) || isEndpoint(x, y)) {
    return;
  }

  const clickedTower = towerAtCell(x, y);
  selectedTowerId = clickedTower ? clickedTower.id : null;

  if (clickedTower) {
    towerDescription.textContent = `${TOWER_INFO[clickedTower.type].description} ${towerCapabilityText(clickedTower)}`;
    openTowerPopup(clickedTower);
  } else if (grid[y][x].blockId !== null) {
    const block = blocks.get(grid[y][x].blockId);
    towerDescription.textContent = `${block.name} tetromino. Solid wall tile for tower placement.`;
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
    changed = upgradeTower(x, y);
  } else if (currentTool === "erase") {
    changed = eraseAt(x, y);
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
  const portalIndex = options.portalIndex ?? Math.floor(Math.random() * activePortals().length);
  const startCell = options.startCell || activePortals()[portalIndex];
  const route = options.route || (options.startCell ? findPathFrom(startCell) : null);

  if (route && route.length === 0) {
    return null;
  }

  const center = cellCenter(startCell.x, startCell.y);
  const hp = options.hp ?? Math.round((5 + waveNumber) * enemyType.hpMultiplier * DIFFICULTIES[selectedDifficulty].hp);
  const armored = options.armored ?? (enemyType.key === "armored");
  const armorValue = options.armorHp ?? (armored ? enemyType.armor + Math.floor((waveNumber - 9) / 4) : 0);

  return {
    id: nextEnemyId++,
    key: enemyType.key,
    portalIndex,
    route,
    type: enemyType.name,
    shapeSides: enemyType.shape,
    reward: options.reward ?? Math.max(1, Math.round(enemyType.reward * rewardMultiplier())),
    color: options.color || enemyType.color,
    waffleSquares: options.waffleSquares ?? (enemyType.waffleSquares || 0),
    x: center.x,
    y: center.y,
    progress: options.progress || 0,
    speed: options.speed ?? ((30 + waveNumber * 2 + enemyType.speedBonus) / DIFFICULTIES[selectedDifficulty].interval),
    hp,
    maxHp: hp,
    hidden: options.hidden ?? false,
    armored,
    armorHp: armorValue,
    maxArmorHp: armorValue,
    stunTimer: 0,
    slowFactor: 1,
    slowTimer: 0,
    facingAngle: 0,
    bossOwnerId: options.bossOwnerId || null,
    bossShieldMinion: Boolean(options.bossShieldMinion),
    summonStunRadius: options.summonStunRadius || 0
  };
}

function pushEnemy(enemy) {
  if (!enemy) {
    return null;
  }

  discoveredEnemies.add(enemy.key);
  renderAlmanac();
  enemies.push(enemy);
  return enemy;
}

function spawnBossSummonCell(enemy, range = 3) {
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

      if (!inBounds(x, y) || isEndpoint(x, y) || routeSet.has(key) || obstacleAt(x, y) || grid[y][x].blockId !== null) {
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
  const summonCount = waveNumber >= 50 ? 2 : 3;
  const waffleType = waveNumber >= 50 ? ENEMY_TYPES.waffle16 : ENEMY_TYPES.waffle4;

  for (let index = 0; index < summonCount; index += 1) {
    const cell = spawnBossSummonCell(enemy, 4);
    if (!cell) {
      break;
    }

    const waffle = createEnemy(waffleType, {
      startCell: { x: cell.x, y: cell.y },
      route: cell.route,
      hidden: waveNumber >= 100 ? true : waveNumber >= 75 ? Math.random() < 0.5 : false,
      armored: waveNumber >= 100 ? true : waveNumber >= 75 ? Math.random() < 0.5 : false,
      armorHp: waveNumber >= 75 ? 3 + Math.floor((waveNumber - 75) / 25) : 0,
      reward: Math.max(1, Math.round(waffleType.reward * rewardMultiplier()))
    });
    pushEnemy(waffle);
  }

  if (waveNumber >= 75) {
    const biscuitCount = waveNumber >= 100 ? 3 : 2;
    for (let index = 0; index < biscuitCount; index += 1) {
      const cell = spawnBossSummonCell(enemy, 5);
      if (!cell) {
        break;
      }

      const biscuit = createEnemy(ENEMY_TYPES.biscuit, {
        startCell: { x: cell.x, y: cell.y },
        route: cell.route,
        hidden: waveNumber >= 100,
        armored: waveNumber >= 100,
        armorHp: waveNumber >= 100 ? 2 : 0,
        bossOwnerId: enemy.id,
        bossShieldMinion: true,
        reward: Math.max(1, Math.round(ENEMY_TYPES.biscuit.reward * rewardMultiplier()))
      });
      pushEnemy(biscuit);
    }
  }

  if (waveNumber >= 75 && Math.random() < (waveNumber >= 100 ? 0.65 : 0.35)) {
    const cell = spawnBossSummonCell(enemy, 5);
    if (cell) {
      const mega = createEnemy(ENEMY_TYPES.megaWaffle, {
        startCell: { x: cell.x, y: cell.y },
        route: cell.route,
        reward: Math.max(1, Math.round(ENEMY_TYPES.megaWaffle.reward * rewardMultiplier()))
      });
      if (mega) {
        pushEnemy(mega);
        addPulse(mega.x, mega.y, 48, "#c89553");
        stunTowersNear(mega.x, mega.y, 78, 1.2);
      }
    }
  }
}

function spawnIdaenBoss() {
  const boss = createEnemy(ENEMY_TYPES.idaen, {
    portalIndex: Math.floor(Math.random() * activePortals().length),
    reward: Math.max(20, Math.round(ENEMY_TYPES.idaen.reward * rewardMultiplier())),
    hp: Math.round((220 + waveNumber * 35) * DIFFICULTIES[selectedDifficulty].hp),
    speed: Math.max(18, (24 + waveNumber * 0.45) / DIFFICULTIES[selectedDifficulty].interval)
  });

  if (!boss) {
    return;
  }

  boss.phaseCooldown = 4.5;
  boss.phaseTimer = 0;
  boss.phaseColor = "#d94f3d";
  boss.boss = true;
  pushEnemy(boss);
}

function spawnWave() {
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

  waveNumber += 1;
  wave = {
    count: Math.round((5 + waveNumber * 2) * enemyCountMultiplier()),
    spawned: 0,
    timer: 0,
    interval: Math.max(0.7 - waveNumber * 0.04, 0.28),
    complete: false
  };
  if (isIdaenWave()) {
    spawnIdaenBoss();
  }
  if (waveNumber === 4) {
    setMessage("Scouts report hidden enemies could appear on wave 6. Detection towers are needed to hit them.", 2.6);
  } else if (waveNumber === 5) {
    setMessage("Hidden enemies expected on wave 6. Towers without detection will ignore them.", 2.6);
  } else if (waveNumber === 7) {
    setMessage("Armoured enemies are expected on wave 9. Bullets cannot break them; use lasers or explosions.", 2.8);
  } else if (waveNumber === 8) {
    setMessage("Armoured enemies next wave. Strip the white shell with lasers or explosives first.", 2.8);
  } else if (isIdaenWave()) {
    setMessage(`Wave ${waveNumber}: I-daen is approaching the Outpost.`, 2.8);
  } else {
    setMessage(`Wave ${waveNumber} started.`, 1.4);
  }
  updateHud();
}

function spawnEnemy() {
  const roll = Math.random();
  let enemyType = ENEMY_TYPES.fast;

  if (waveNumber >= 2 && roll > 0.45) {
    enemyType = ENEMY_TYPES.pentagon;
  }

  if (waveNumber >= 4 && roll > 0.78) {
    enemyType = ENEMY_TYPES.hexagon;
  }

  if (waveNumber >= 8 && roll > 0.93) {
    enemyType = ENEMY_TYPES.waffle16;
  }

  if (waveNumber >= 9 && roll > 0.7) {
    enemyType = ENEMY_TYPES.armored;
  }
  if (waveNumber >= 75 && roll > 0.95) {
    enemyType = ENEMY_TYPES.biscuit;
  }

  let hidden = waveNumber >= 6 && Math.random() < Math.min(0.16 + (waveNumber - 6) * 0.025, 0.38);
  if (enemyType.key === "armored" && waveNumber < 12) {
    hidden = false;
  }
  const enemy = createEnemy(enemyType, {
    hidden,
    armored: enemyType.key === "armored"
  });
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
    money += Math.max(2, Math.round((5 + waveNumber) * rewardMultiplier()));
    freeBlocks = 1;
    currentBlockCost = BLOCK_COST;
    setMessage(`Wave ${waveNumber} cleared.`, 1.6);
  }
}

function updateEnemies(deltaTime) {
  if (!allRoutesOpen(routes)) {
    return;
  }
  const survivors = [];

  for (const enemy of enemies) {
    const bossBiscuitsAlive = enemy.key === "idaen" && enemies.some((entry) => entry.bossShieldMinion && entry.bossOwnerId === enemy.id && entry.hp > 0);

    if (enemy.stunTimer > 0) {
      enemy.stunTimer = Math.max(0, enemy.stunTimer - deltaTime);
    }

    if (enemy.slowTimer > 0) {
      enemy.slowTimer = Math.max(0, enemy.slowTimer - deltaTime);
      if (enemy.slowTimer === 0) {
        enemy.slowFactor = 1;
      }
    }

    if (enemy.key === "idaen") {
      enemy.phaseCooldown = Math.max(0, (enemy.phaseCooldown || 0) - deltaTime);
      enemy.phaseTimer = Math.max(0, (enemy.phaseTimer || 0) - deltaTime);
      if (enemy.phaseTimer === 0 && enemy.phaseColor === "#8a5b2d") {
        enemy.phaseColor = bossBiscuitsAlive ? "#8a5b2d" : "#d94f3d";
      }

      if (enemy.phaseTimer === 0 && enemy.phaseCooldown === 0) {
        enemy.phaseTimer = 3.2;
        enemy.phaseCooldown = waveNumber >= 75 ? 6 : 7.5;
        enemy.phaseColor = "#8a5b2d";
        spawnIdaenSummons(enemy);
      }
    }

    const stunFactor = enemy.stunTimer > 0 || enemy.phaseTimer > 0 ? 0 : 1;
    enemy.progress += (enemy.speed * enemy.slowFactor * stunFactor * deltaTime) / CELL_SIZE;

    const points = enemyRoutePoints(enemy);

    if (enemy.progress >= points.length - 1) {
      lives = Math.max(0, lives - 1);
      setMessage("An enemy slipped through.", 1.0);
      continue;
    }

    const index = Math.floor(enemy.progress);
    const segment = enemy.progress - index;
    const current = points[index];
    const next = points[index + 1];

    enemy.x = current.x + (next.x - current.x) * segment;
    enemy.y = current.y + (next.y - current.y) * segment;
    enemy.facingAngle = Math.atan2(next.y - current.y, next.x - current.x);
    survivors.push(enemy);
  }

  enemies = survivors;
}

function towerStats(tower) {
  const levelBonus = tower.level - 1;

  if (tower.type === "crossbow") {
    return {
      range: CELL_SIZE * 4.15,
      cooldown: tower.level >= 2 ? 0.48 : 0.64,
      damage: tower.level >= 2 ? 1.7 : 1.35,
      boltSpeed: 520,
      doubleShots: tower.level >= 2
    };
  }

  if (tower.type === "tesla") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const supercharge = path1 >= 5;
    const electrocannon = path2 >= 5;
    const path1Chains = [1, 1, 2, 2, 3, 3];
    const path2Chains = [1, 1, 1, 3, 4, 8];
    return {
      range: CELL_SIZE * (2.4 + path2 * 0.06),
      cooldown: electrocannon ? Math.max(1.45 - path1 * 0.04, 0.95) : Math.max(0.48 - path1 * 0.05 - (path1 >= 3 ? 0.09 : 0), 0.14),
      damage: (electrocannon ? 4.8 : 1.3) + path2 * 0.95 + (supercharge ? 1.2 : 0),
      chainCount: Math.max(path1Chains[path1], path2Chains[path2]),
      splash: electrocannon ? 18 : 0,
      stun: 0.22 + path2 * 0.08 + (path1 >= 4 ? 0.12 : 0),
      chainSlow: path1 >= 4 ? 0.75 : 1,
      field: path2 >= 3,
      fieldDamage: path2 >= 4 ? 0.4 : 0.18,
      fieldStun: path2 >= 4 ? 0.14 : 0.06,
      fieldCooldown: path2 >= 4 ? 0.42 : 0.7,
      detectHidden: path2 >= 3,
      supercharge,
      electrocannon
    };
  }

  if (tower.type === "missile") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    return {
      range: CELL_SIZE * (3.8 + path1 * 0.28),
      cooldown: Math.max(1.4 - path1 * 0.04, 0.72),
      damage: 3.6 + path2 * 1.35 + (path1 >= 3 ? 0.9 : 0),
      splash: 36 + path1 * 5 + (path1 >= 3 ? 8 : 0),
      speed: 120 + (path1 >= 3 ? 120 : 0),
      acceleration: 520 + (path1 >= 3 ? 220 : 0),
      burst: path1 >= 5 ? 6 : path1 >= 4 ? 2 : 1,
      burstDelay: path1 >= 5 ? 0.1 : path1 >= 4 ? 0.25 : 0,
      shrapnel: path2 >= 3,
      clusters: path2 >= 4,
      rain: path2 >= 5
    };
  }

  if (tower.type === "trapper") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const turretMode = path1 >= 3;
    const lifespan = 30 + (path2 >= 1 ? 15 : 0) + (path1 >= 4 ? 15 : 0) + (path1 >= 5 ? 35 : 0);
    return {
      range: CELL_SIZE * (2.8 + path1 * 0.08 + path2 * 0.08),
      cooldown: Math.max(2.25 - path1 * 0.42 - (path1 >= 5 ? 0.2 : 0), 0.5),
      damage: 1.15 + path2 * 0.85 + (path1 >= 5 ? 1.25 : 0),
      trapRadius: 14 + tower.level * 2,
      trapUses: path2 >= 2 ? 12 : 8,
      trapLifetime: lifespan,
      sticky: path2 >= 3,
      slow: path2 >= 3 ? 0.55 : 1,
      duration: path2 >= 3 ? 1.9 + path2 * 0.25 + (path2 >= 5 ? 0.6 : 0) : 0,
      mine: path2 >= 4,
      mango: path2 >= 5,
      turretMode,
      turretCooldown: Math.max(0.78 - (path1 >= 5 ? 0.18 : 0), 0.24),
      turretDamage: 1.75 + path2 * 0.6 + (path1 >= 5 ? 1.4 : 0),
      turretRange: CELL_SIZE * (2 + path2 * 0.08 + (path1 >= 5 ? 0.4 : 0)),
      turretBarrels: path1 >= 4 ? 2 : 1
    };
  }

  if (tower.type === "drone") {
    const path1 = tower.path1 || 0;
    const path2 = tower.path2 || 0;
    const baseRange = CELL_SIZE * (4 + levelBonus * 0.2) * (path2 >= 5 ? 1.5 : path1 >= 5 ? 1.25 : 1);
    const supportCount = path2 >= 5 ? 4 : path2 >= 3 ? 2 : 0;
    const mainGuns = path2 >= 4 ? 4 : path1 >= 1 ? 2 : 1;
    const supportGuns = path2 >= 4 ? 2 : 1;
    return {
      range: baseRange,
      cooldown: Math.max(0.74 - levelBonus * 0.04 - path2 * 0.05 - (path1 >= 5 ? 0.08 : 0), 0.2),
      damage: 0.9 + levelBonus * 0.32,
      droneRange: CELL_SIZE * (1.5 + levelBonus * 0.08 + (path1 >= 2 ? 0.24 : 0)),
      droneSpeed: 88 + levelBonus * 8 + (path1 >= 5 ? 24 : 0),
      detectHidden: path1 >= 2,
      bulletGuns: mainGuns,
      bulletDamage: 0.9 + levelBonus * 0.28,
      bulletPierce: path2 >= 2 ? 2 : 0,
      rocket: path1 >= 3,
      rocketCooldown: path1 >= 5 ? 0.42 : 0.7,
      rocketDamage: 2.8 + levelBonus * 0.45 + (path1 >= 4 ? 0.8 : 0),
      rocketSplash: path1 >= 4 ? 34 : 24,
      rocketSpeed: path1 >= 5 ? 180 : 132,
      supportCount,
      supportGuns,
      supportDamage: 0.38 + levelBonus * 0.16,
      supportRange: CELL_SIZE * 1.26,
      attackDrone: path1 >= 5
    };
  }

  return { range: CELL_SIZE * (4.6 + levelBonus * 0.22), cooldown: Math.max(0.95 - levelBonus * 0.05, 0.45), damage: 1.8 + levelBonus * 0.65 };
}

function canSeeEnemy(enemy, detectHidden = false) {
  return !enemy.hidden || detectHidden;
}

function canHitArmored(enemy, damageType) {
  return !enemy.armored || enemy.armorHp <= 0 || damageType === "laser" || damageType === "explosion";
}

function damageEnemy(enemy, amount, damageType, options = {}) {
  if (!enemy || amount <= 0) {
    return false;
  }

  const { stun = 0, slow = null, slowDuration = 0 } = options;
  const bossBiscuitsAlive = enemy.key === "idaen" && enemies.some((entry) => entry.bossShieldMinion && entry.bossOwnerId === enemy.id && entry.hp > 0);

  if (enemy.key === "idaen" && ((enemy.phaseTimer || 0) > 0 || bossBiscuitsAlive)) {
    enemy.phaseColor = "#8a5b2d";
    return false;
  }

  if (enemy.armored && enemy.armorHp > 0) {
    if (damageType === "laser" || damageType === "explosion") {
      enemy.armorHp = Math.max(0, enemy.armorHp - amount);
      if (enemy.armorHp === 0) {
        addPulse(enemy.x, enemy.y, 18, "#f3f7ff");
      }
    } else {
      return false;
    }
  } else {
    enemy.hp -= amount;
  }

  if (stun > 0) {
    enemy.stunTimer = Math.max(enemy.stunTimer, stun);
  }

  if (slow !== null && slow < 1 && slowDuration > 0) {
    enemy.slowFactor = Math.min(enemy.slowFactor, slow);
    enemy.slowTimer = Math.max(enemy.slowTimer, slowDuration);
  }

  return true;
}

function canTowerDamageEnemy(tower, enemy, stats = towerStats(tower)) {
  if (tower.type === "missile" || tower.type === "laser") {
    return true;
  }

  if (tower.type === "crossbow") {
    return canHitArmored(enemy, "bullet");
  }

  if (tower.type === "tesla") {
    return canHitArmored(enemy, stats.electrocannon ? "laser" : "shock");
  }

  if (tower.type === "trapper") {
    if (stats.turretMode) {
      return canHitArmored(enemy, "bullet");
    }
    return canHitArmored(enemy, stats.mine ? "explosion" : "trap");
  }

  if (tower.type === "drone") {
    return canHitArmored(enemy, stats.rocket ? "explosion" : "bullet");
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

function selectEnemyByPriority(candidates, priority = "first") {
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

  const scored = [...candidates].sort((left, right) => {
    if (priority === "last") {
      return left.progress - right.progress;
    }

    if (priority === "strong") {
      return right.maxHp - left.maxHp || right.hp - left.hp || right.progress - left.progress;
    }

    if (priority === "weak") {
      return left.hp - right.hp || left.maxHp - right.maxHp || right.progress - left.progress;
    }

    return right.progress - left.progress;
  });

  return scored[0];
}

function nearestEnemyInRange(tower, range, detectHidden = false) {
  const stats = towerStats(tower);
  const candidates = enemiesInRange(tower.centerX, tower.centerY, range, detectHidden, true)
    .filter((enemy) => canTowerDamageEnemy(tower, enemy, stats));
  return selectEnemyByPriority(candidates, tower.targetPriority || "first");
}

function hasLineOfSight(x1, y1, x2, y2) {
  const steps = Math.ceil(Math.hypot(x2 - x1, y2 - y1) / 8);

  for (let index = 1; index < steps; index += 1) {
    const t = index / steps;
    const px = x1 + (x2 - x1) * t;
    const py = y1 + (y2 - y1) * t;
    const cx = Math.floor(px / CELL_SIZE);
    const cy = Math.floor(py / CELL_SIZE);

    if (obstacleAt(cx, cy)) {
      return false;
    }
  }

  return true;
}

function addBeam(x1, y1, x2, y2, color) {
  effects.push({
    id: nextEffectId,
    kind: "beam",
    x1,
    y1,
    x2,
    y2,
    color,
    ttl: 0.12
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

function spawnTrapperConstruct(tower) {
  const stats = towerStats(tower);
  const cells = stats.turretMode ? wallCellsInRange(tower, stats.range) : routeCells();

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

  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  const center = cellCenter(choice.x, choice.y);
  const offsetRadius = stats.turretMode ? 14 : stats.mine ? 14 : 16;
  const offsetAngle = Math.random() * Math.PI * 2;
  const offsetDistance = Math.random() * offsetRadius;
  const offsetX = Math.cos(offsetAngle) * offsetDistance;
  const offsetY = Math.sin(offsetAngle) * offsetDistance;
  traps.push({
    id: nextTrapId,
    ownerTowerId: tower.id,
    kind: stats.turretMode ? "turret" : stats.mine ? "mine" : "trap",
    x: choice.x,
    y: choice.y,
    centerX: center.x + offsetX,
    centerY: center.y + offsetY,
    damage: stats.turretMode ? stats.turretDamage : stats.damage,
    slow: stats.slow,
    duration: stats.duration,
    radius: stats.trapRadius,
    usesRemaining: stats.trapUses,
    ttl: stats.trapLifetime,
    maxTtl: stats.trapLifetime,
    targetEnemyId: null,
    cooldown: 0,
    tickRate: stats.mine ? 0.55 : 0.3,
    range: stats.turretRange,
    barrels: stats.turretBarrels,
    attackCooldown: stats.turretCooldown,
    mango: stats.mango
  });
  nextTrapId += 1;
  return true;
}

function explodeTrap(trap) {
  const splash = trap.mango ? trap.radius * 2 : trap.radius * 1.2;
  addPulse(trap.centerX, trap.centerY, splash, trap.mango ? "#ffcb73" : "#9de67b");

  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY);
    if (distance > splash) {
      continue;
    }

    const damage = trap.damage * (1.6 - Math.min(distance / Math.max(splash, 1), 1) * 0.5);
    damageEnemy(enemy, damage, "explosion", {
      slow: trap.mango ? 0.52 : null,
      slowDuration: trap.mango ? 1.8 : 0
    });
  }

  if (trap.mango) {
    spawnSecondaryProjectiles(trap.centerX, trap.centerY, 5, "mangoBomb", trap.damage * 0.7, 20, true);
  }
}

function fireTower(tower, target) {
  const stats = towerStats(tower);
  tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);

  if (tower.type === "crossbow") {
    const volley = stats.doubleShots ? [-0.06, 0.06] : [0];
    for (const spread of volley) {
      projectiles.push({
        id: nextProjectileId,
        kind: "crossbowBolt",
        x: tower.centerX,
        y: tower.centerY,
        angle: tower.aimAngle + spread,
        speed: stats.boltSpeed,
        damage: stats.damage
      });
      nextProjectileId += 1;
    }
    return;
  }

  if (tower.type === "tesla") {
    const damage = stats.damage + (stats.supercharge ? Math.min(tower.charge, 4.5) : 0);
    const teslaDamageType = stats.electrocannon ? "laser" : "shock";
    damageEnemy(target, damage, teslaDamageType, { stun: stats.stun });
    addBeam(tower.centerX, tower.centerY, target.x, target.y, "#9bd8ff");
    tower.charge = 0;

    const chained = enemies
      .filter((enemy) => enemy.id !== target.id && Math.hypot(enemy.x - target.x, enemy.y - target.y) <= CELL_SIZE * 1.45)
      .slice(0, stats.chainCount);

    for (const enemy of chained) {
      damageEnemy(enemy, damage * 0.5, teslaDamageType, {
        stun: stats.stun * 0.72,
        slow: stats.chainSlow < 1 ? stats.chainSlow : null,
        slowDuration: stats.chainSlow < 1 ? 0.5 : 0
      });
      addBeam(target.x, target.y, enemy.x, enemy.y, "#b8ebff");
    }
    if (stats.splash > 0) {
      for (const enemy of enemies) {
        if (enemy.id === target.id || chained.some((entry) => entry.id === enemy.id)) {
          continue;
        }

        if (Math.hypot(enemy.x - target.x, enemy.y - target.y) <= stats.splash) {
          damageEnemy(enemy, damage * 0.2, teslaDamageType, { stun: stats.stun * 0.35 });
        }
      }
      addPulse(target.x, target.y, stats.splash, "#b8ebff");
    }
    return;
  }

  if (tower.type === "laser") {
    damageEnemy(target, stats.damage, "laser");
    addBeam(tower.centerX, tower.centerY, target.x, target.y, "#ff96b8");
    return;
  }

  if (tower.type === "trapper") {
    spawnTrapperConstruct(tower);
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
    const stats = towerStats(tower);
    tower.stunnedTimer = Math.max(0, (tower.stunnedTimer || 0) - deltaTime);
    tower.cooldown = Math.max(0, tower.cooldown - deltaTime);
    tower.burstTimer = Math.max(0, (tower.burstTimer || 0) - deltaTime);
    tower.fieldCooldown = Math.max(0, (tower.fieldCooldown || 0) - deltaTime);

    if (tower.stunnedTimer > 0) {
      continue;
    }

    if (tower.type === "tesla" && stats.field && tower.fieldCooldown === 0) {
      const fieldDamageType = stats.electrocannon ? "laser" : "shock";
      const fieldTargets = enemies.filter((enemy) => Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) <= stats.range);
      for (const enemy of fieldTargets) {
        damageEnemy(enemy, stats.fieldDamage, fieldDamageType, { stun: stats.fieldStun });
        addBeam(tower.centerX, tower.centerY, enemy.x, enemy.y, "#7cc8ff");
      }
      tower.fieldCooldown = stats.fieldCooldown;
    }

    if (tower.type === "tesla" && stats.supercharge && tower.cooldown > 0) {
      tower.charge = Math.min((tower.charge || 0) + deltaTime * 1.2, 4.5);
      if (tower.charge > 1.2) {
        addPulse(tower.centerX, tower.centerY, 8 + tower.charge * 3, "#9fe4ff");
      }
    }

    if (tower.type === "missile" && tower.burstShotsRemaining > 0) {
      if (tower.burstTimer > 0) {
        continue;
      }

      const burstTarget = nearestEnemyInRange(tower, stats.range, stats.detectHidden);

      if (burstTarget) {
        tower.aimAngle = Math.atan2(burstTarget.y - tower.centerY, burstTarget.x - tower.centerX);
        spawnMissileProjectile(tower, burstTarget, stats);
      }

      tower.burstShotsRemaining -= 1;
      if (tower.burstShotsRemaining > 0) {
        tower.burstTimer = stats.burstDelay;
      } else {
        tower.cooldown = stats.cooldown;
      }
      continue;
    }

    if (tower.cooldown > 0) {
      continue;
    }

    if (tower.type === "trapper") {
      if (spawnTrapperConstruct(tower)) {
        tower.cooldown = stats.cooldown;
      }
      continue;
    }

    const target = nearestEnemyInRange(tower, stats.range, stats.detectHidden);

    if (!target) {
      if (tower.type === "tesla" && stats.supercharge) {
        tower.charge = Math.min((tower.charge || 0) + deltaTime * 1.2, 4.5);
        if (tower.charge > 1.2) {
          addPulse(tower.centerX, tower.centerY, 8 + tower.charge * 3, "#9fe4ff");
        }
      }
      continue;
    }

    tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
    if (tower.type === "drone") {
      continue;
    }
    fireTower(tower, target);
    if (tower.type !== "missile" || tower.burstShotsRemaining === 0) {
      tower.cooldown = stats.cooldown;
    }
  }
}

function spawnMissileProjectile(tower, target, stats) {
  const angle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
  projectiles.push({
    id: nextProjectileId,
    kind: "missile",
    x: tower.centerX,
    y: tower.centerY,
    targetId: target.id,
    speed: stats.speed,
    acceleration: stats.acceleration,
    angle,
    damage: stats.damage,
    splash: stats.splash,
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
    ensureDroneWing(tower, towerStats(tower));
  }

  for (const drone of drones) {
    const tower = towers.find((entry) => entry.id === drone.towerId);

    if (!tower) {
      continue;
    }

    if ((tower.stunnedTimer || 0) > 0) {
      continue;
    }

    const stats = towerStats(tower);
    const isSupport = drone.support;
    const detection = stats.detectHidden;
    const attackRange = isSupport ? stats.supportRange : stats.droneRange;
    const baseDamage = isSupport ? stats.supportDamage : stats.bulletDamage;
    const gunCount = isSupport ? stats.supportGuns : stats.bulletGuns;
    drone.range = attackRange;
    drone.cooldown = Math.max(0, drone.cooldown - deltaTime);
    drone.rocketCooldown = Math.max(0, (drone.rocketCooldown || 0) - deltaTime);

    const enemiesInTowerRadius = enemies.filter((enemy) => {
      if (!canSeeEnemy(enemy, detection)) {
        return false;
      }

      if (!canTowerDamageEnemy(tower, enemy, stats)) {
        return false;
      }

      const insideOwnRadius = Math.hypot(enemy.x - tower.centerX, enemy.y - tower.centerY) <= stats.range;
      const insideAlliedRadius = stats.attackDrone && towers.some((ally) => Math.hypot(enemy.x - ally.centerX, enemy.y - ally.centerY) <= towerStats(ally).range);
      return insideOwnRadius || insideAlliedRadius;
    });

    const target = selectEnemyByPriority(enemiesInTowerRadius, tower.targetPriority || "first");

    if (target) {
      const dx = target.x - drone.x;
      const dy = target.y - drone.y;
      const distance = Math.hypot(dx, dy) || 1;
      const stopDistance = drone.range * 0.72 + drone.bodyRadius + 11;
      const desiredTravel = Math.max(distance - stopDistance, 0);
      const travel = Math.min(desiredTravel, stats.droneSpeed * deltaTime);
      const nextX = drone.x + (dx / distance) * travel;
      const nextY = drone.y + (dy / distance) * travel;
      const leashDistance = Math.hypot(nextX - tower.centerX, nextY - tower.centerY);

      if (leashDistance <= stats.range) {
        drone.x = nextX;
        drone.y = nextY;
      }
    } else {
      const base = baseCenter();
      const dx = base.x - drone.x;
      const dy = base.y - drone.y;
      const distance = Math.hypot(dx, dy) || 1;
      const settleRadius = isSupport ? 18 : 26;

      if (distance > settleRadius) {
        const travel = Math.min(distance - settleRadius, stats.droneSpeed * deltaTime);
        drone.x += (dx / distance) * travel;
        drone.y += (dy / distance) * travel;
      } else {
        drone.angle += deltaTime * (1 + tower.level * 0.08 + (isSupport ? 0.18 : 0));
        drone.orbitRadius = settleRadius;
        drone.x = base.x + Math.cos(drone.angle + drone.slot) * settleRadius;
        drone.y = base.y + Math.sin(drone.angle + drone.slot) * settleRadius;
      }
    }

    if (!target) {
      continue;
    }

    const attackDistance = Math.hypot(target.x - drone.x, target.y - drone.y);

    if (attackDistance <= drone.range && attackDistance > drone.bodyRadius + 7) {
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
            pierce: stats.bulletPierce,
            hitIds: []
          });
          nextProjectileId += 1;
        }
        drone.cooldown = stats.cooldown;
      }

      if (!isSupport && stats.rocket && drone.rocketCooldown === 0) {
        projectiles.push({
          id: nextProjectileId,
          kind: "droneRocket",
          x: drone.x,
          y: drone.y,
          targetId: target.id,
          angle: Math.atan2(target.y - drone.y, target.x - drone.x),
          speed: stats.rocketSpeed,
          acceleration: 240,
          damage: stats.rocketDamage,
          splash: stats.rocketSplash
        });
        nextProjectileId += 1;
        drone.rocketCooldown = stats.rocketCooldown;
      }

      tower.aimAngle = Math.atan2(target.y - tower.centerY, target.x - tower.centerX);
    }
  }
}

function updateTraps(deltaTime) {
  const nextTraps = [];

  for (const trap of traps) {
    trap.ttl -= deltaTime;
    trap.cooldown = Math.max(0, (trap.cooldown || 0) - deltaTime);
    let removeTrap = false;

    if (trap.kind === "turret") {
      if (trap.cooldown === 0) {
        const target = selectEnemyByPriority(
          enemies.filter((enemy) => canSeeEnemy(enemy, false) && canHitArmored(enemy, "bullet") && Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY) <= trap.range),
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
              damage: trap.damage
            });
            nextProjectileId += 1;
          }
          trap.cooldown = trap.attackCooldown;
        }
      }
    } else {
      const target = enemies.find((enemy) => enemy.id === trap.targetEnemyId);
      if (!target || target.hp <= 0 || Math.hypot(target.x - trap.centerX, target.y - trap.centerY) > trap.radius) {
        const nextTarget = enemies.find((enemy) => Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY) <= trap.radius);
        trap.targetEnemyId = nextTarget ? nextTarget.id : null;
      }

      if (trap.targetEnemyId && trap.cooldown === 0) {
        const enemy = enemies.find((entry) => entry.id === trap.targetEnemyId);

        if (enemy) {
          trap.usesRemaining -= 1;

          if (trap.kind === "mine") {
            damageEnemy(enemy, trap.damage * 0.35, "trap");
            if (trap.usesRemaining <= 0) {
              explodeTrap(trap);
              removeTrap = true;
            }
          } else {
            damageEnemy(enemy, trap.damage, "trap", {
              slow: trap.slow < 1 ? trap.slow : null,
              slowDuration: trap.slow < 1 ? trap.duration : 0
            });
            addPulse(trap.centerX, trap.centerY, trap.radius, "#9de67b");
            if (trap.usesRemaining <= 0) {
              removeTrap = true;
            }
          }

          trap.cooldown = trap.tickRate;
        }
      }
    }

    if (!removeTrap && trap.kind === "mine" && trap.ttl <= 0) {
      explodeTrap(trap);
      removeTrap = true;
    }

    if (!removeTrap && trap.ttl > 0 && (trap.kind === "turret" || trap.usesRemaining > 0)) {
      nextTraps.push(trap);
    }
  }

  traps = nextTraps;
}

function spawnSecondaryProjectiles(originX, originY, count, kind, damage, splash, rain = false) {
  for (let index = 0; index < count; index += 1) {
    const angle = (Math.PI * 2 * index) / count;
    projectiles.push({
      id: nextProjectileId,
      kind,
      x: originX,
      y: originY,
      targetId: null,
      speed: kind === "cluster" ? 130 : kind === "mangoBomb" ? 62 : 180,
      acceleration: 0,
      angle,
      damage,
      splash,
      shrapnel: false,
      clusters: false,
      rain,
      ttl: kind === "cluster" ? 0.32 : kind === "mangoBomb" ? 0.42 : 0.35
    });
    nextProjectileId += 1;
  }
}

function explodeProjectile(projectile) {
  addPulse(projectile.x, projectile.y, projectile.splash, "#ffc572");

  for (const enemy of enemies) {
    const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);

    if (distance <= projectile.splash) {
      damageEnemy(enemy, projectile.damage * (1 - distance / Math.max(projectile.splash, 1) * 0.5), "explosion");
      if (projectile.kind === "mangoBomb") {
        enemy.slowFactor = Math.min(enemy.slowFactor, 0.5);
        enemy.slowTimer = Math.max(enemy.slowTimer, 1.8);
      }
    }
  }

  if (projectile.kind === "missile" && projectile.clusters) {
    spawnSecondaryProjectiles(projectile.x, projectile.y, 10, "cluster", projectile.damage * 0.42, projectile.splash * 0.42, projectile.rain);
    return;
  }

  if (projectile.kind === "missile" && projectile.shrapnel) {
    spawnSecondaryProjectiles(projectile.x, projectile.y, 8, "shard", projectile.damage * 0.28, 10);
    return;
  }

  if (projectile.kind === "cluster" && projectile.rain) {
    spawnSecondaryProjectiles(projectile.x, projectile.y, 4, "shard", projectile.damage * 0.45, 12);
  }
}

function updateProjectiles(deltaTime) {
  const survivors = [];

  for (const projectile of projectiles) {
    if (projectile.kind === "crossbowBolt") {
      projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
      projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;
      let removed = false;

      for (const enemy of enemies) {
        if (Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y) <= 10) {
          damageEnemy(enemy, projectile.damage, "bullet");
          removed = true;
          break;
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
          if (damageEnemy(enemy, projectile.damage, "bullet")) {
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
          damageEnemy(enemy, projectile.damage, "bullet");
          removed = true;
          break;
        }
      }

      if (!removed && projectile.x > -20 && projectile.x < canvas.width + 20 && projectile.y > -20 && projectile.y < canvas.height + 20) {
        survivors.push(projectile);
      }
      continue;
    }

    const target = projectile.targetId ? enemies.find((enemy) => enemy.id === projectile.targetId) : null;

    if (target) {
      projectile.angle = Math.atan2(target.y - projectile.y, target.x - projectile.x);
    }

    projectile.speed += (projectile.acceleration || 0) * deltaTime;
    projectile.x += Math.cos(projectile.angle) * projectile.speed * deltaTime;
    projectile.y += Math.sin(projectile.angle) * projectile.speed * deltaTime;

    if (projectile.ttl !== undefined) {
      projectile.ttl -= deltaTime;
      if (projectile.ttl <= 0) {
        explodeProjectile(projectile);
        continue;
      }
    }

    if (target && Math.hypot(target.x - projectile.x, target.y - projectile.y) <= 12) {
      if (projectile.kind === "droneRocket") {
        addPulse(projectile.x, projectile.y, projectile.splash, "#ffbb73");
        for (const enemy of enemies) {
          const distance = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
          if (distance <= projectile.splash) {
            damageEnemy(enemy, projectile.damage * (1 - distance / Math.max(projectile.splash, 1) * 0.45), "explosion");
          }
        }
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
  effects = effects
    .map((effect) => ({ ...effect, ttl: effect.ttl - deltaTime }))
    .filter((effect) => effect.ttl > 0);
}

function spawnWaffleChildren(enemy, type, count, hpDivisor) {
  discoveredEnemies.add(type.key);
  renderAlmanac();

  for (let index = 0; index < count; index += 1) {
    enemies.push({
      id: nextEnemyId,
      portalIndex: enemy.portalIndex,
      type: type.name,
      shapeSides: type.shape,
      reward: Math.max(1, Math.round(type.reward * rewardMultiplier())),
      color: type.color,
      waffleSquares: type.waffleSquares,
      x: enemy.x + (index % 2 === 0 ? -6 : 6),
      y: enemy.y + (index < 2 ? -6 : 6),
      progress: enemy.progress,
      speed: Math.max(18, enemy.speed + type.speedBonus),
      hp: Math.max(1, Math.round(enemy.maxHp / hpDivisor)),
      maxHp: Math.max(1, Math.round(enemy.maxHp / hpDivisor)),
      hidden: false,
      stunTimer: 0,
      slowFactor: 1,
      slowTimer: 0,
      facingAngle: enemy.facingAngle || 0
    });
    nextEnemyId += 1;
  }
}

function purgeDefeatedEnemies() {
  const nextEnemies = [];

  for (const enemy of enemies) {
    if (enemy.hp > 0) {
      nextEnemies.push(enemy);
    } else {
      if (enemy.key === "waffle16") {
        spawnWaffleChildren(enemy, ENEMY_TYPES.waffle4, 4, 4);
      } else if (enemy.key === "waffle4") {
        spawnWaffleChildren(enemy, ENEMY_TYPES.waffle1, 4, 4);
      }
      money += enemy.reward;
    }
  }

  enemies = nextEnemies;
}

function updateHud() {
  nextPieceText.textContent = `Next block: ${activePiece.name}`;
  routeText.textContent = allRoutesOpen(routes) ? `Routes: ${routes.length} open` : "Routes: blocked";
  updateTowerButtons();
  if (blockToolButton) {
    blockToolButton.textContent = freeBlocks > 0 ? "Block (Free)" : `Block (${currentBlockCost})`;
  }
  if (moneyText) {
    moneyText.textContent = `Cash: ${money}`;
  }
  boardCashText.textContent = `Cash: ${money}`;
  freeBlockText.textContent = freeBlocks > 0 ? `Block price after free: ${currentBlockCost}` : `Block price: ${currentBlockCost}`;
  livesText.textContent = `Lives: ${lives}`;
  waveText.textContent = `Wave: ${waveNumber}`;
  enemyText.textContent = `Enemies: ${enemies.length}`;
  selectionText.textContent = `Selected: ${TOWER_INFO[selectedTowerType].name}`;
  upgradeText.textContent = `Upgrade: ${currentTool === "upgrade" ? "click tower, max 5" : "max 5"}`;

  if (messageTimer > 0) {
    statusText.textContent = message;
  } else if (lives <= 0) {
    statusText.textContent = "Game over. Reset to try another layout.";
  } else if (!allRoutesOpen(routes)) {
    statusText.textContent = "The path is blocked. Erase a block to reopen the route.";
  } else if (wave && !wave.complete) {
    statusText.textContent = `Wave ${waveNumber} in progress.`;
  } else {
    statusText.textContent = `Path ready. Build and start wave ${waveNumber + 1}.`;
  }
}

function updateAmbientEffects(deltaTime) {
  ambientTimer += deltaTime;

  const spawnRate = activeMap.scenery === "canyon" ? 0.22 : activeMap.scenery === "ruins" ? 0.32 : activeMap.scenery === "mango" ? 0.2 : Infinity;

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
        color: `rgba(143, 205, 235, ${0.08 + Math.random() * 0.08})`
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
  ctx.strokeStyle = "rgba(217, 196, 164, 0.72)";
  ctx.lineWidth = 1;

  for (let x = 0; x <= COLS; x += 1) {
    ctx.beginPath();
    ctx.moveTo(x * CELL_SIZE, 0);
    ctx.lineTo(x * CELL_SIZE, ROWS * CELL_SIZE);
    ctx.stroke();
  }

  for (let y = 0; y <= ROWS; y += 1) {
    ctx.beginPath();
    ctx.moveTo(0, y * CELL_SIZE);
    ctx.lineTo(COLS * CELL_SIZE, y * CELL_SIZE);
    ctx.stroke();
  }
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
    gradient.addColorStop(0, "#d5dbdf");
    gradient.addColorStop(0.5, "#bcc5cc");
    gradient.addColorStop(1, "#98a6b3");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "ruins") {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#14385d");
    gradient.addColorStop(0.5, "#1a4d79");
    gradient.addColorStop(1, "#0f2944");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else if (activeMap.scenery === "mango") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fff0a8");
    gradient.addColorStop(0.5, "#f9cf64");
    gradient.addColorStop(1, "#ebb24f");
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
  } else if (activeMap.scenery === "ruins") {
    ctx.fillStyle = "rgba(117, 189, 227, 0.08)";
    for (let band = 0; band < 4; band += 1) {
      ctx.fillRect(0, band * 132 + 28, canvas.width, 14);
    }
  } else if (activeMap.scenery === "mango") {
    ctx.fillStyle = "rgba(255, 240, 167, 0.22)";
    ctx.beginPath();
    ctx.arc(canvas.width * 0.83, canvas.height * 0.22, 68, 0, Math.PI * 2);
    ctx.fill();
  }

  for (const particle of ambientParticles) {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  for (const portal of activePortals()) {
    const center = cellCenter(portal.x, portal.y);
    ctx.fillStyle = "rgba(45, 108, 223, 0.18)";
    ctx.beginPath();
    ctx.arc(center.x, center.y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#2d6cdf";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  for (const obstacle of activeMap.obstacles) {
    ctx.fillStyle = "#6b747c";
    ctx.fillRect(obstacle.x * CELL_SIZE + 4, obstacle.y * CELL_SIZE + 4, CELL_SIZE - 8, CELL_SIZE - 8);
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
  if (!allRoutesOpen(routes)) {
    return;
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
      const center = cellCenter(point.x, point.y);
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

function drawBlock(block) {
  for (const cell of block.cells) {
    ctx.fillStyle = block.color;
    ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }

  ctx.strokeStyle = "rgba(255, 248, 240, 0.9)";
  ctx.lineWidth = 3;

  for (const cell of block.cells) {
    const has = (dx, dy) => block.cells.some((other) => other.x === cell.x + dx && other.y === cell.y + dy);
    const left = cell.x * CELL_SIZE;
    const top = cell.y * CELL_SIZE;
    const right = left + CELL_SIZE;
    const bottom = top + CELL_SIZE;

    ctx.beginPath();

    if (!has(0, -1)) {
      ctx.moveTo(left + 2, top + 2);
      ctx.lineTo(right - 2, top + 2);
    }
    if (!has(1, 0)) {
      ctx.moveTo(right - 2, top + 2);
      ctx.lineTo(right - 2, bottom - 2);
    }
    if (!has(0, 1)) {
      ctx.moveTo(right - 2, bottom - 2);
      ctx.lineTo(left + 2, bottom - 2);
    }
    if (!has(-1, 0)) {
      ctx.moveTo(left + 2, bottom - 2);
      ctx.lineTo(left + 2, top + 2);
    }

    ctx.stroke();
  }
}

function drawPreview() {
  if (!hoverCell || !inBounds(hoverCell.x, hoverCell.y)) {
    return;
  }

  if (currentTool === "wall") {
    const valid = canPlacePiece(hoverCell.x, hoverCell.y);

    for (const cell of placedCells(hoverCell.x, hoverCell.y)) {
      if (!inBounds(cell.x, cell.y) || isEndpoint(cell.x, cell.y)) {
        continue;
      }

      ctx.fillStyle = valid ? `${activePiece.color}66` : "rgba(204, 63, 92, 0.35)";
      ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
    return;
  }

  if (currentTool === "tower") {
    drawTowerGhost(hoverCell.x, hoverCell.y);
  }
}

function drawTowerShape(type, level, centerX, centerY, aimAngle = -Math.PI / 2, ghost = false, invalid = false, tower = null) {
  const stats = tower ? towerStats(tower) : null;
  const path1 = tower?.path1 || 0;
  const path2 = tower?.path2 || 0;
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(aimAngle);

  if (type === "crossbow") {
    ctx.strokeStyle = ghost ? (invalid ? "rgba(255, 225, 225, 0.95)" : "rgba(243, 247, 255, 0.6)") : "#f3f7ff";
    ctx.fillStyle = ghost ? "rgba(165, 176, 187, 0.45)" : "#5e6a75";
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
    ctx.strokeStyle = ghost ? "rgba(255, 255, 255, 0.82)" : "#ffffff";
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
  } else if (type === "laser") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(255, 124, 168, 0.45)") : "#ff7ca8";
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(-10, -12);
    ctx.lineTo(-10, 12);
    ctx.closePath();
    ctx.fill();
  } else if (type === "missile") {
    ctx.fillStyle = ghost ? (invalid ? "rgba(212, 73, 96, 0.85)" : "rgba(138, 99, 235, 0.42)") : "#8a63eb";
    regularPolygon(0, 0, 12, 6);
    ctx.fill();
    if (path1 >= 1) {
      ctx.fillStyle = ghost ? "rgba(214, 196, 255, 0.65)" : "#c9b4ff";
      ctx.fillRect(-8, -3, 8, 6);
    }
    if (path2 >= 3) {
      ctx.strokeStyle = ghost ? "rgba(255, 233, 180, 0.75)" : "#ffd27a";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-4, -11);
      ctx.lineTo(2, -16);
      ctx.moveTo(-4, 11);
      ctx.lineTo(2, 16);
      ctx.stroke();
    }
    if (path2 >= 4) {
      ctx.fillStyle = ghost ? "rgba(255, 206, 120, 0.75)" : "#ffb44e";
      ctx.fillRect(-14, -5, 5, 10);
    }
    if (path1 >= 5) {
      ctx.fillStyle = ghost ? "rgba(255, 220, 172, 0.75)" : "#ffd6a8";
      ctx.fillRect(10, -6, 10, 12);
    }
    if (path2 >= 5) {
      ctx.fillStyle = ghost ? "rgba(255, 184, 95, 0.75)" : "#ff9d45";
      ctx.fillRect(2, -10, 6, 20);
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
  const center = cellCenter(x, y);
  const valid = canPlaceTowerAt(x, y);
  const shake = !valid ? Math.sin(lastTimestamp / 18) * (invalidPlacementTimer > 0 ? 4 : 2) : 0;

  ctx.save();
  ctx.translate(shake, 0);
  ctx.shadowColor = valid ? "rgba(21, 30, 42, 0.22)" : "rgba(212, 73, 96, 0.48)";
  ctx.shadowBlur = 14;
  drawTowerShape(selectedTowerType, 1, center.x, center.y, -Math.PI / 2, true, !valid);
  ctx.restore();
}

function drawTower(tower) {
  const x = tower.x * CELL_SIZE;
  const y = tower.y * CELL_SIZE;
  const centerX = x + CELL_SIZE / 2;
  const centerY = y + CELL_SIZE / 2;
  const stats = towerStats(tower);

  if (tower.type === "tesla" && stats.field) {
    ctx.save();
    ctx.strokeStyle = "rgba(126, 226, 255, 0.34)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, stats.range * 0.84, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  drawTowerShape(tower.type, tower.level, centerX, centerY, tower.aimAngle || 0, false, false, tower);

  if (selectedTowerId === tower.id) {
    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 16, 0, Math.PI * 2);
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
    ctx.fillStyle = drone.support ? "#9cf0e0" : "#7de3d6";
    ctx.beginPath();
    ctx.arc(drone.x, drone.y, drone.support ? 5 : 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(13, 66, 74, 0.75)";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (selectedTowerId === drone.towerId) {
      ctx.strokeStyle = "rgba(125, 227, 214, 0.32)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(drone.x, drone.y, drone.range, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

function drawTraps() {
  for (const trap of traps) {
    const hovered = hoverPoint && Math.hypot(hoverPoint.x - trap.centerX, hoverPoint.y - trap.centerY) <= 24;

    if (trap.kind === "turret") {
      const target = enemies.find((enemy) => Math.hypot(enemy.x - trap.centerX, enemy.y - trap.centerY) <= trap.range);
      const angle = target ? Math.atan2(target.y - trap.centerY, target.x - trap.centerX) : -Math.PI / 2;
      ctx.save();
      ctx.translate(trap.centerX, trap.centerY);
      ctx.rotate(angle);
      ctx.fillStyle = "#9ce285";
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#eef8df";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = "#dff7c8";
      ctx.fillRect(1, -1.5, 7, 3);
      if (trap.barrels >= 2) {
        ctx.fillRect(1, -4, 6, 2.5);
        ctx.fillRect(1, 1.5, 6, 2.5);
      }
      ctx.restore();
      if (hovered) {
        drawTrapLifetimeBar(trap);
      }
      continue;
    }

    if (trap.kind === "mine") {
      ctx.fillStyle = trap.mango ? "#ffb347" : "#ffd067";
      ctx.beginPath();
      ctx.arc(trap.centerX, trap.centerY, 6, 0, Math.PI * 2);
      ctx.fill();
      const spikeCount = Math.max(1, trap.usesRemaining);
      ctx.strokeStyle = "#fff2c4";
      ctx.lineWidth = 1.4;
      for (let index = 0; index < spikeCount; index += 1) {
        const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / spikeCount;
        const inner = 6.5;
        const outer = 10.5;
        ctx.beginPath();
        ctx.moveTo(trap.centerX + Math.cos(angle) * inner, trap.centerY + Math.sin(angle) * inner);
        ctx.lineTo(trap.centerX + Math.cos(angle) * outer, trap.centerY + Math.sin(angle) * outer);
        ctx.stroke();
      }
      ctx.strokeStyle = "#fff2c4";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(trap.centerX, trap.centerY, 8.5, 0, Math.PI * 2);
      ctx.stroke();
      if (trap.mango) {
        ctx.fillStyle = "#8bc34a";
        ctx.beginPath();
        ctx.moveTo(trap.centerX, trap.centerY - 8);
        ctx.lineTo(trap.centerX + 3, trap.centerY - 12);
        ctx.lineTo(trap.centerX - 2, trap.centerY - 11);
        ctx.closePath();
        ctx.fill();
      }
      if (hovered) {
        drawTrapLifetimeBar(trap);
      }
      continue;
    }

    ctx.strokeStyle = "#9ce285";
    ctx.lineWidth = 1.5;
    const spikeCount = Math.max(1, trap.usesRemaining);
    for (let index = 0; index < spikeCount; index += 1) {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / spikeCount;
      const inner = 2;
      const outer = 7;
      ctx.beginPath();
      ctx.moveTo(trap.centerX + Math.cos(angle) * inner, trap.centerY + Math.sin(angle) * inner);
      ctx.lineTo(trap.centerX + Math.cos(angle) * outer, trap.centerY + Math.sin(angle) * outer);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(trap.centerX, trap.centerY, 2, 0, Math.PI * 2);
    ctx.stroke();
    if (trap.slow < 1) {
      ctx.strokeStyle = "#d7ffd2";
      ctx.beginPath();
      ctx.arc(trap.centerX, trap.centerY, 8, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (hovered) {
      drawTrapLifetimeBar(trap);
    }
  }
}

function drawTrapLifetimeBar(trap) {
  const width = 22;
  const height = 4;
  const ratio = Math.max(0, Math.min(1, trap.ttl / Math.max(trap.maxTtl || 1, 1)));
  const left = trap.centerX - width / 2;
  const top = trap.centerY - 16;

  ctx.fillStyle = "rgba(18, 26, 35, 0.55)";
  ctx.fillRect(left, top, width, height);
  ctx.fillStyle = trap.kind === "mine" ? "#ffd067" : "#9ce285";
  ctx.fillRect(left, top, width * ratio, height);
  ctx.strokeStyle = "rgba(255, 249, 240, 0.9)";
  ctx.lineWidth = 1;
  ctx.strokeRect(left, top, width, height);
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

function drawEnemies() {
  for (const enemy of enemies) {
    drawEnemyShape(enemy);

    ctx.fillStyle = "rgba(38, 50, 56, 0.24)";
    ctx.fillRect(enemy.x - 12, enemy.y - 18, 24, 4);
    ctx.fillStyle = "#7ce38b";
    ctx.fillRect(enemy.x - 12, enemy.y - 18, 24 * Math.max(enemy.hp, 0) / enemy.maxHp, 4);
  }
}

function drawEnemyShape(enemy) {
  if (enemy.key === "idaen") {
    drawIdaenEnemy(enemy);
    return;
  }

  if (enemy.waffleSquares) {
    drawWaffleEnemy(enemy);
    return;
  }

  const radius = enemy.shapeSides >= 6 ? 12 : 10.5;
  const rotation = (enemy.facingAngle || 0) + (enemy.shapeSides === 3 ? 0 : Math.PI / enemy.shapeSides);

  ctx.fillStyle = enemy.hidden ? "rgba(210, 224, 239, 0.36)" : enemy.slowFactor < 1 ? "#7fd0ff" : enemy.color;
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

  if (enemy.armored && enemy.armorHp > 0) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, radius + 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  if (enemy.hidden) {
    ctx.strokeStyle = "rgba(214, 233, 255, 0.75)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

function drawWaffleEnemy(enemy) {
  const gridSize = enemy.waffleSquares === 25 ? 5 : enemy.waffleSquares === 16 ? 4 : enemy.waffleSquares === 4 ? 2 : 1;
  const cellSize = enemy.waffleSquares === 25 ? 4.5 : enemy.waffleSquares === 16 ? 5 : enemy.waffleSquares === 4 ? 7 : 10;
  const gap = 1.5;
  const totalSize = gridSize * cellSize + (gridSize - 1) * gap;
  const left = -totalSize / 2;
  const top = -totalSize / 2;

  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.fillStyle = enemy.hidden ? "rgba(210, 224, 239, 0.36)" : enemy.color;
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
    ctx.strokeStyle = "rgba(214, 233, 255, 0.75)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(left - 2, top - 2, totalSize + 4, totalSize + 4);
  }

  if (enemy.armored && enemy.armorHp > 0) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
    ctx.lineWidth = 4;
    ctx.strokeRect(left - 4, top - 4, totalSize + 8, totalSize + 8);
  }
  ctx.restore();
}

function drawIdaenEnemy(enemy) {
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(enemy.facingAngle || 0);
  ctx.fillStyle = enemy.phaseTimer > 0 ? "#8a5b2d" : "#8d5f2e";
  ctx.strokeStyle = "rgba(83, 49, 18, 0.75)";
  ctx.lineWidth = 2;
  ctx.fillRect(-16, -14, 32, 28);
  ctx.strokeRect(-16, -14, 32, 28);
  ctx.fillStyle = "#ba8748";
  for (let row = -10; row <= 6; row += 8) {
    for (let col = -12; col <= 8; col += 8) {
      ctx.fillRect(col, row, 6, 6);
    }
  }
  ctx.fillStyle = "#6b4120";
  ctx.fillRect(-24, -4, 8, 8);
  ctx.fillRect(16, -4, 8, 8);
  ctx.fillRect(-8, 14, 6, 10);
  ctx.fillRect(2, 14, 6, 10);
  if (enemy.hidden) {
    ctx.strokeStyle = "rgba(214, 233, 255, 0.75)";
    ctx.strokeRect(-20, -18, 40, 36);
  }
  if (enemy.armored && enemy.armorHp > 0) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
    ctx.lineWidth = 4;
    ctx.strokeRect(-22, -20, 44, 40);
  }
  ctx.restore();
}

function drawBossBar() {
  const boss = activeBossEnemy();

  if (!boss) {
    return;
  }

  const biscuitsAlive = enemies.some((enemy) => enemy.bossShieldMinion && enemy.bossOwnerId === boss.id && enemy.hp > 0);
  const ratio = Math.max(0, Math.min(1, boss.hp / Math.max(boss.maxHp, 1)));
  const left = 140;
  const width = canvas.width - 280;
  const top = 12;

  ctx.fillStyle = "rgba(18, 26, 35, 0.8)";
  ctx.fillRect(left, top, width, 18);
  ctx.fillStyle = boss.phaseTimer > 0 || biscuitsAlive ? "#8a5b2d" : "#d94f3d";
  ctx.fillRect(left, top, width * ratio, 18);
  ctx.strokeStyle = "rgba(255, 249, 240, 0.95)";
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, 18);
  ctx.fillStyle = "#fffaf2";
  ctx.font = "bold 14px Georgia";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`I-daen${boss.phaseTimer > 0 || biscuitsAlive ? " - Shielded" : ""}`, left + width / 2, top + 9);
}

function drawProjectiles() {
  for (const projectile of projectiles) {
    if (projectile.kind === "droneRocket") {
      ctx.save();
      ctx.translate(projectile.x, projectile.y);
      ctx.rotate(projectile.angle || 0);
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
      ctx.arc(projectile.x, projectile.y, 2.8, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    if (projectile.kind === "crossbowBolt") {
      ctx.save();
      ctx.translate(projectile.x, projectile.y);
      ctx.rotate(projectile.angle || 0);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-7, 0);
      ctx.lineTo(7, 0);
      ctx.stroke();
      ctx.restore();
      continue;
    }

    if (projectile.kind === "trapTurretBullet") {
      ctx.fillStyle = "#d8f8c2";
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, 3, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    if (projectile.kind === "missile") {
      ctx.save();
      ctx.translate(projectile.x, projectile.y);
      ctx.rotate(projectile.angle || 0);
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
      ctx.fillStyle = "#ffb347";
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }

    ctx.fillStyle = "#ffe6a5";
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawEffects() {
  for (const effect of effects) {
    if (effect.kind === "beam") {
      ctx.strokeStyle = effect.color;
      ctx.lineWidth = 3;
      ctx.globalAlpha = effect.ttl / 0.12;
      ctx.beginPath();
      ctx.moveTo(effect.x1, effect.y1);
      ctx.lineTo(effect.x2, effect.y2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      continue;
    }

    ctx.strokeStyle = effect.color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = effect.ttl / 0.18;
    ctx.beginPath();
    ctx.arc(effect.x, effect.y, effect.radius * (1 - effect.ttl / 0.18 * 0.3), 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function drawEndpoint(point, fill) {
  const center = cellCenter(point.x, point.y);
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(center.x, center.y, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#fff9f1";
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMapScenery();
  drawGrid();
  drawRoute();

  for (const block of blocks.values()) {
    drawBlock(block);
  }

  drawTraps();
  drawSelectedTowerRange();
  drawPreview();
  drawTowers();
  drawDrones();
  drawProjectiles();
  drawEffects();
  drawEnemies();
  drawBossBar();
  for (const portal of activePortals()) {
    drawEndpoint(portal, "#1f8a70");
  }
  drawEndpoint(goalPortal(), "#cc3f5c");
}

function drawSelectedTowerRange() {
  const tower = towers.find((entry) => entry.id === selectedTowerId);

  if (!tower) {
    return;
  }

  const stats = towerStats(tower);
  ctx.save();
  ctx.strokeStyle = "rgba(18,26,35,0.55)";
  ctx.fillStyle = "rgba(18,26,35,0.14)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(tower.centerX, tower.centerY, stats.range, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  if (tower.type === "tesla" && stats.field) {
    ctx.strokeStyle = "rgba(126, 226, 255, 0.78)";
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.arc(tower.centerX, tower.centerY, stats.range * 0.84, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.restore();
}

function resetGame() {
  activeMap = MAPS[selectedMap];
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
  wave = null;
  hoverCell = null;
  activePiece = createRandomPiece();
  money = startingMoney();
  freeBlocks = 1;
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
  seedMapFeatures();
  routes = computeRoutes();
  closeTowerPopup();
  setMessage("Board reset.", 1.0);
  updateHud();
  draw();
}

function updateGame(deltaTime) {
  dashOffset = (dashOffset + deltaTime * 18) % DASH_PERIOD;
  messageTimer = Math.max(0, messageTimer - deltaTime);
  invalidPlacementTimer = Math.max(0, invalidPlacementTimer - deltaTime);

  if (infiniteMode) {
    money = 999999;
    lives = 999999;
  }

  if (lives <= 0) {
    enemies = [];
    projectiles = [];
    wave = null;
    updateHud();
    return;
  }

  updateWave(deltaTime);
  updateAmbientEffects(deltaTime);
  updateEnemies(deltaTime);
  updateTowers(deltaTime);
  updateTraps(deltaTime);
  updateDrones(deltaTime);
  updateProjectiles(deltaTime);
  updateEffects(deltaTime);
  purgeDefeatedEnemies();
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

canvas.addEventListener("click", (event) => {
  const cell = pointerToCell(event);
  applyTool(cell.x, cell.y);
});

canvas.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  clearSelection(true);
  setMessage("Selection cleared.", 0.9);
  updateHud();
  draw();
});

canvas.addEventListener("mousemove", (event) => {
  const cell = pointerToCell(event);
  hoverPoint = pointerToCanvas(event);
  hoverCell = inBounds(cell.x, cell.y) ? cell : null;
  draw();
});

canvas.addEventListener("mouseleave", () => {
  hoverPoint = null;
  hoverCell = null;
  draw();
});

toolGrid.addEventListener("click", (event) => {
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
    setMessage(`${TOWER_INFO[tower.type].name} priority set to ${TARGET_LABELS[tower.targetPriority]}.`, 1.1);
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
  const towerEntry = event.target.closest("[data-almanac-tower]");

  if (!towerEntry) {
    return;
  }

  selectedAlmanacTower = towerEntry.dataset.almanacTower;
  renderAlmanac();
});

difficultyOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-difficulty]");
  if (!button) {
    return;
  }
  selectedDifficulty = button.dataset.difficulty;
  updateMenuSelectors();
});

mapOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map]");
  if (!button) {
    return;
  }
  selectedMap = button.dataset.map;
  updateMenuSelectors();
});

rotateButton.addEventListener("click", rotateActivePiece);
waveButton.addEventListener("click", spawnWave);
pauseButton.addEventListener("click", pauseGame);
startGameButton.addEventListener("click", startGame);
openAlmanacButton.addEventListener("click", () => openAlmanac("menu"));
resumeGameButton.addEventListener("click", resumeGame);
pauseAlmanacButton.addEventListener("click", () => openAlmanac("pause"));
quitToMenuButton.addEventListener("click", quitToMenu);
closeAlmanacButton.addEventListener("click", closeAlmanac);
closeTowerPopupButton.addEventListener("click", closeTowerPopup);

window.addEventListener("keydown", (event) => {
  if (/^[0-9]$/.test(event.key)) {
    cheatBuffer.push(event.key);
    cheatBuffer = cheatBuffer.slice(-3);

    if (cheatBuffer.join(",") === "5,1,2") {
      infiniteMode = !infiniteMode;
      if (infiniteMode) {
        money = 999999;
        lives = 999999;
        setMessage("Infinite money and lives enabled.", 1.8);
      } else {
        setMessage("Infinite money and lives disabled.", 1.8);
      }
      updateHud();
      draw();
    }
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    rotateActivePiece();
  }

  if (event.key === "Escape") {
    if (gameMode === "playing") {
      pauseGame();
    } else if (gameMode === "paused") {
      resumeGame();
    }
  }
});

routes = computeRoutes();
renderAlmanac();
updateMenuSelectors();
openOverlay("menu");
updateHud();
draw();
requestAnimationFrame(animationFrame);
