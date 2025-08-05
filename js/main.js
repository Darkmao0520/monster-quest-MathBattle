let hearts = 3;
let coins = 0;
let currentRoom = 0;
const totalRooms = 10;

const mapEl = document.getElementById("map");
const gameEl = document.getElementById("game");
const spriteImg = document.getElementById("sprite-img");
const walkModal = document.getElementById("walk-modal");
const walkImg = document.getElementById("walk-img");

const battleModal = document.getElementById("battle-modal");
const battleBox = document.getElementById("battle-box");
const battleQuestion = document.getElementById("battle-question");
const battleAnswer = document.getElementById("battle-answer");
const battleResult = document.getElementById("battle-result");

// Animation state
let animationInterval = null;
let heroFrames = [
  "assets/sprites/hero/idle/Idle (1).png",
  "assets/sprites/hero/idle/Idle (2).png",
  "assets/sprites/hero/idle/Idle (3).png",
  "assets/sprites/hero/idle/Idle (4).png",
  "assets/sprites/hero/idle/Idle (5).png",
  "assets/sprites/hero/idle/Idle (5).png",
  "assets/sprites/hero/idle/Idle (6).png",
  "assets/sprites/hero/idle/Idle (6).png",
  "assets/sprites/hero/idle/Idle (7).png",
  "assets/sprites/hero/idle/Idle (8).png",
  "assets/sprites/hero/idle/Idle (9).png",
  "assets/sprites/hero/idle/Idle (10).png"
];
let currentHeroFrame = 0;

startHeroAnimation(); // Start animation on initial load

let walkFrames = [
  "assets/sprites/hero/walk/Walk (1).png",
  "assets/sprites/hero/walk/Walk (2).png",
  "assets/sprites/hero/walk/Walk (3).png",
  "assets/sprites/hero/walk/Walk (4).png",
  "assets/sprites/hero/walk/Walk (5).png",
  "assets/sprites/hero/walk/Walk (6).png"
];

let currentEnemy = null;
let currentEnemyDamage = 1;
let enemyAnimationInterval = null;
let currentEnemyFrame = 0;


const enemies = [
  {
    name: "monsterOne",
    frames: [
      "assets/sprites/enemies/monsterOne1.png",
      "assets/sprites/enemies/monsterOne2.png",
      "assets/sprites/enemies/monsterOne3.png",
      "assets/sprites/enemies/monsterOne4.png",
	  "assets/sprites/enemies/monsterOne5.png",
      "assets/sprites/enemies/monsterOne6.png",
	  "assets/sprites/enemies/monsterOne7.png",
      "assets/sprites/enemies/monsterOne8.png",
	  "assets/sprites/enemies/monsterOne9.png"
    ],
    drop: "coin"
  },
  {
    name: "monsterTwo",
    frames: [
      "assets/sprites/enemies/monsterTwo1.png",
      "assets/sprites/enemies/monsterTwo2.png",
      "assets/sprites/enemies/monsterTwo3.png",
      "assets/sprites/enemies/monsterTwo4.png",
	  "assets/sprites/enemies/monsterTwo5.png",
      "assets/sprites/enemies/monsterTwo6.png",
	  "assets/sprites/enemies/monsterTwo7.png",
      "assets/sprites/enemies/monsterTwo8.png"
    ],
    drop: "heart"
  },
  {
    name: "monsterThree",
    frames: [
      "assets/sprites/enemies/monsterThree1.png",
      "assets/sprites/enemies/monsterThree2.png",
      "assets/sprites/enemies/monsterThree3.png",
      "assets/sprites/enemies/monsterThree4.png",
	  "assets/sprites/enemies/monsterThree5.png",
      "assets/sprites/enemies/monsterThree6.png",
	  "assets/sprites/enemies/monsterThree7.png",
      "assets/sprites/enemies/monsterThree8.png",
	  "assets/sprites/enemies/monsterThree9.png",
	  "assets/sprites/enemies/monsterThree10.png",
      "assets/sprites/enemies/monsterThree11.png"
    ],
    drop: "coin"
  },
 {
    name: "monsterFour",
    frames: [
      "assets/sprites/enemies/monsterFour1.png",
      "assets/sprites/enemies/monsterFour2.png",
      "assets/sprites/enemies/monsterFour3.png",
      "assets/sprites/enemies/monsterFour4.png",
	  "assets/sprites/enemies/monsterFour5.png",
      "assets/sprites/enemies/monsterFour6.png"
    ],
    drop: "heart"
  },
  {
    name: "monsterFive",
    frames: [
      "assets/sprites/enemies/monsterFive1.png",
      "assets/sprites/enemies/monsterFive2.png",
      "assets/sprites/enemies/monsterFive3.png",
      "assets/sprites/enemies/monsterFive4.png",
	  "assets/sprites/enemies/monsterFive5.png",
      "assets/sprites/enemies/monsterFive6.png"
    ],
    drop: "heart"
  },
  {
    name: "monsterSix",
    frames: [
      "assets/sprites/enemies/monsterSix1.png",
      "assets/sprites/enemies/monsterSix2.png",
      "assets/sprites/enemies/monsterSix3.png",
      "assets/sprites/enemies/monsterSix4.png",
	  "assets/sprites/enemies/monsterSix5.png",
      "assets/sprites/enemies/monsterSix6.png"
    ],
    drop: "heart"
  },
  {
    name: "monsterSeven",
    frames: [
      "assets/sprites/enemies/monsterSeven1.png",
      "assets/sprites/enemies/monsterSeven2.png",
      "assets/sprites/enemies/monsterSeven3.png",
      "assets/sprites/enemies/monsterSeven4.png",
	  "assets/sprites/enemies/monsterSeven5.png",
      "assets/sprites/enemies/monsterSeven6.png",
	  "assets/sprites/enemies/monsterSeven7.png"
    ],
    drop: "coin"
  },
  {
    name: "monsterEight",
    frames: [
      "assets/sprites/enemies/monsterEight1.png",
      "assets/sprites/enemies/monsterEight2.png",
      "assets/sprites/enemies/monsterEight3.png",
      "assets/sprites/enemies/monsterEight4.png",
	  "assets/sprites/enemies/monsterEight5.png",
      "assets/sprites/enemies/monsterEight6.png",
	  "assets/sprites/enemies/monsterEight7.png",
      "assets/sprites/enemies/monsterEight8.png"
    ],
    drop: "heart"
  },
  {
    name: "monsterNine",
    frames: [
      "assets/sprites/enemies/monsterNine1.png",
      "assets/sprites/enemies/monsterNine2.png",
      "assets/sprites/enemies/monsterNine3.png",
      "assets/sprites/enemies/monsterNine4.png",
	  "assets/sprites/enemies/monsterNine5.png",
      "assets/sprites/enemies/monsterNine6.png",
	  "assets/sprites/enemies/monsterNine7.png",
      "assets/sprites/enemies/monsterNine8.png",
	  "assets/sprites/enemies/monsterNine9.png"
    ],
    drop: "coin"
  },
];


const coinChestFrames = [
  "assets/sprites/treasure/chest.png",
  "assets/sprites/treasure/gold_chest.png"
];

const heartChestFrames = [
  "assets/sprites/treasure/chest.png",
  "assets/sprites/treasure/gem_chest.png"
];

const emptyChestFrames = [
  "assets/sprites/treasure/chest.png",
  "assets/sprites/treasure/empty_chest.png"
];

const enemyStrikeFrames = [
  "assets/sprites/hero/damage1.png",
  "assets/sprites/hero/damage2.png",
  "assets/sprites/hero/damage3.png",
  "assets/sprites/hero/damage4.png",
  "assets/sprites/hero/damage5.png"
];


const heroAttackFrames = [
	"assets/sprites/hero/battle/sprite_00.png",
	"assets/sprites/hero/battle/sprite_01.png",
	"assets/sprites/hero/battle/sprite_02.png",
	"assets/sprites/hero/battle/sprite_03.png",
	"assets/sprites/hero/battle/sprite_04.png",
	"assets/sprites/hero/battle/sprite_05.png",
	"assets/sprites/hero/battle/sprite_06.png",
	"assets/sprites/hero/battle/sprite_07.png",
	"assets/sprites/hero/battle/sprite_08.png",
	"assets/sprites/hero/battle/sprite_09.png",
	"assets/sprites/hero/battle/sprite_10.png",
	"assets/sprites/hero/battle/sprite_11.png",
	"assets/sprites/hero/battle/sprite_12.png",
	"assets/sprites/hero/battle/sprite_13.png",
	"assets/sprites/hero/battle/sprite_14.png",
	"assets/sprites/hero/battle/sprite_15.png",
	"assets/sprites/hero/battle/sprite_16.png",
	"assets/sprites/hero/battle/sprite_17.png",
	"assets/sprites/hero/battle/sprite_18.png",
	"assets/sprites/hero/battle/sprite_19.png",
	"assets/sprites/hero/battle/sprite_20.png",
	"assets/sprites/hero/battle/sprite_21.png",
	"assets/sprites/hero/battle/sprite_22.png",
	"assets/sprites/hero/battle/sprite_23.png",
	"assets/sprites/hero/battle/sprite_24.png",
	"assets/sprites/hero/battle/sprite_25.png",
	"assets/sprites/hero/battle/sprite_26.png",
	"assets/sprites/hero/battle/sprite_27.png",
	"assets/sprites/hero/battle/sprite_28.png",
	"assets/sprites/hero/battle/sprite_29.png",
	"assets/sprites/hero/battle/sprite_30.png",
	"assets/sprites/hero/battle/sprite_31.png",
	"assets/sprites/hero/battle/sprite_32.png",
	"assets/sprites/hero/battle/sprite_33.png",
	"assets/sprites/hero/battle/sprite_34.png",
	"assets/sprites/hero/battle/sprite_35.png",
	"assets/sprites/hero/battle/sprite_36.png",
	"assets/sprites/hero/battle/sprite_37.png",
	"assets/sprites/hero/battle/sprite_38.png",
	"assets/sprites/hero/battle/sprite_39.png",
	"assets/sprites/hero/battle/sprite_40.png",
	"assets/sprites/hero/battle/sprite_41.png",
	"assets/sprites/hero/battle/sprite_42.png",
	"assets/sprites/hero/battle/sprite_43.png",
	"assets/sprites/hero/battle/sprite_44.png",
	"assets/sprites/hero/battle/sprite_45.png",
	"assets/sprites/hero/battle/sprite_46.png",
	"assets/sprites/hero/battle/sprite_47.png",
	"assets/sprites/hero/battle/sprite_48.png",
	"assets/sprites/hero/battle/sprite_49.png"
];

document.body.classList.add("flash-red");
setTimeout(() => {
  document.body.classList.remove("flash-red");
}, 200);

function renderStats() {
  document.getElementById("hearts").textContent = hearts;
  document.getElementById("coins").textContent = coins;
}

function renderMap() {
  mapEl.innerHTML = "";
  for (let i = 0; i < totalRooms; i++) {
    const room = document.createElement("div");
    room.className = "room";
    if (i < currentRoom) room.classList.add("cleared");
    else if (i === currentRoom && hearts > 0) room.classList.add("current");
    else if (hearts <= 0) room.classList.add("dead");
    else room.classList.add("unvisited");
    mapEl.appendChild(room);
  }
}

function choosePath(direction) {
  if (hearts <= 0 || currentRoom >= totalRooms) return;

  showWalkAnimation(() => {
    const encounter = Math.random();

    if (encounter < 0.5) {
      // Monster encounter
      stopAnimation(); // Stop hero
      currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
      startEnemyAnimation(currentEnemy.frames);
      startBattle();
	} else if (encounter < 0.75) {
	  stopAnimation();
	  const loot = Math.random() < 0.5 ? "heart" : "coin";

	  if (loot === "heart" && hearts < 3) {
		hearts++;
		animateChest(heartChestFrames || ["assets/sprites/treasure/gem_chest.png"]);
		gameEl.innerHTML = "You found a ❤️ heart!";
	  } else if (loot === "coin") {
		coins++;
		animateChest(coinChestFrames || ["assets/sprites/treasure/gold_chest.png"]);
		gameEl.innerHTML = "You found a 💰 coin!";
	  } else {
	    animateChest(emptyChestFrames || ["assets/sprites/treasure/empty_chest.png"]);
		gameEl.innerHTML = "You opened a chest... but it's empty.";
	  }

	  nextRoom();
	  
	} else {
	  stopAnimation();
	  animateChest(emptyChestFrames); // Animate empty chest
	  gameEl.innerHTML = "You opened a chest... but it's empty.";
	  nextRoom();
	}

    renderStats();
    renderMap();
  });
}

let enemyInterval = null;

function startEnemyAnimation() {
  const enemyImg = document.getElementById("enemy-img");

  if (enemyAnimationInterval) clearInterval(enemyAnimationInterval);

  enemyAnimationInterval = setInterval(() => {
    enemyImg.src = currentEnemy.frames[currentEnemyFrame];
    currentEnemyFrame = (currentEnemyFrame + 1) % currentEnemy.frames.length;
  }, 100); // Change 100ms to adjust speed
}

function stopEnemyAnimation() {
  if (enemyAnimationInterval) clearInterval(enemyAnimationInterval);
  enemyAnimationInterval = null;
}


function animateChest(frames) {
  let frame = 0;
  spriteImg.src = frames[0];

  const chestInterval = setInterval(() => {
    spriteImg.src = frames[frame];
    frame++;
    if (frame >= frames.length) {
      clearInterval(chestInterval);
    }
  }, 100);
}


function animateEnemyStrike(frames, loopDuration = 600) {
  let frame = 0;
  
  spriteImg.src = frames[0];

  // stop any ongoing hero animation while showing strike
  stopAnimation();

  const strikeInterval = setInterval(() => {
    spriteImg.src = frames[frame];
    frame = (frame + 1) % frames.length;
  }, 100);

	setTimeout(() => {
	  clearInterval(strikeInterval);
	  spriteImg.classList.remove("shake");
	}, loopDuration);
	
}


let currentCorrectAnswer = 0;

function startBattle() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  currentCorrectAnswer = a + b;

  // Set enemy damage based on difficulty
  if (currentCorrectAnswer <= 10) currentEnemyDamage = 1;
  else if (currentCorrectAnswer <= 15) currentEnemyDamage = 2;
  else currentEnemyDamage = 3;

  // Randomly pick an enemy
  currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  currentEnemyFrame = 0;

  // Start enemy animation
  startEnemyAnimation();

  // Set question text
  battleQuestion.innerHTML = `A ${currentEnemy.name} blocks your way!<br>What is ${a} + ${b}?`;
  battleAnswer.value = "";
  battleResult.textContent = "";
  battleModal.style.display = "flex";

  setTimeout(() => battleAnswer.focus(), 100);
}

function submitAnswer() {
  const userAnswer = parseInt(battleAnswer.value);
  battleModal.style.display = "none";

  if (userAnswer === currentCorrectAnswer) {
    if (currentEnemy.drop === "coin") coins++;
    if (currentEnemy.drop === "heart" && hearts < 3) hearts++;
    gameEl.innerHTML = `You defeated the ${currentEnemy.name}!`;

	  // ✅ Show modal attack animation
	  showAttackAnimation(() => {
		animateMonsterDefeat();
		showVictoryAnimation();
	  });

	
  } else {
    const damage = Math.min(currentEnemyDamage, hearts);

    // play looping enemy strike animation
    animateEnemyStrike(enemyStrikeFrames);
    hearts -= damage;
    gameEl.innerHTML = `Wrong! The ${currentEnemy.name} hit you for ${damage} damage!`;
	
	// Damage animation effect
    spriteImg.classList.add("shake");
	
	  stopAnimation();
	  stopEnemyAnimation();
	  renderStats();
	  renderMap();
	  nextRoom();
	  
	  
  }

}

function nextRoom() {
	
  currentRoom++;
  
  if (hearts <= 0) {
  stopEnemyAnimation();
  
  spriteImg.src = "assets/sprites/hero/gameover.png";
    gameEl.innerHTML += "<br><strong>Game Over!</strong>";
		document.getElementById("choices").innerHTML = `
		  <button onclick="restartGame()" class="restart-btn">
			<img src="assets/ui/retryGame.png" alt="Restart" />
		  </button>
		`;
  } else if (currentRoom >= totalRooms) {
    gameEl.innerHTML += "<br><strong>You escaped the dungeon!</strong>";
		document.getElementById("choices").innerHTML = `
	  <button onclick="restartGame()" class="restart-btn">
		<img src="assets/ui/retryGame.png" alt="Restart" />
	  </button>
	`;
  }
}

function restartGame() {
  hearts = 3;
  coins = 0;
  currentRoom = 0;
  
  gameEl.innerHTML = "You re-enter the dungeon...";
  
  document.getElementById("choices").innerHTML = `
<div id="choices">
  <button class="path-button" onclick="choosePath('left')">
    <img src="assets/ui/left-btn.png" alt="Go Left" />
  </button>
  <button class="path-button" onclick="choosePath('right')">
    <img src="assets/ui/right-btn.png" alt="Go Right" />
  </button>
</div>
  `;
  
  startHeroAnimation();
  renderStats();
  renderMap();
}

function startHeroAnimation() {
  if (animationInterval) clearInterval(animationInterval);
  animationInterval = setInterval(() => {
    currentHeroFrame = (currentHeroFrame + 1) % heroFrames.length;
    spriteImg.src = heroFrames[currentHeroFrame];
  }, 60); // Adjust speed (ms)
}

function stopAnimation() {
  if (animationInterval) clearInterval(animationInterval);
  animationInterval = null;
}


function showWalkAnimation(callback) {
  walkModal.style.display = "flex";
  currentWalkFrame = 0;

  walkInterval = setInterval(() => {
    walkImg.src = walkFrames[currentWalkFrame];
    currentWalkFrame = (currentWalkFrame + 1) % walkFrames.length;
  }, 80);

  setTimeout(() => {
    clearInterval(walkInterval);
    walkModal.style.display = "none";
    if (callback) callback();
  }, 1500);
}


function animateMonsterDefeat() {
  // create image element for the defeated effect
  const img = document.createElement("img");
  img.src = "assets/sprites/enemies/defeated_monser.png"; // path from provided container
  img.className = "defeat-overlay";

  // position it roughly over the enemy image
  const enemyImg = document.getElementById("sprite-img");
  const rect = enemyImg.getBoundingClientRect();

  // container to attach to (assuming body or a relative parent)
  document.body.appendChild(img);
  img.style.left = rect.left + rect.width / 2 + "px";
  img.style.top = rect.top + rect.height / 2 + "px";
  img.style.width = rect.width + "px";
  img.style.height = "auto";

  // trigger the animation (scale up & fade out)
  requestAnimationFrame(() => {
    img.style.transform = "translate(-50%, -50%) scale(1.9)";
    img.style.opacity = "0";
  });

  // remove after animation
  setTimeout(() => {
    img.remove();
  }, 1000000);
}


function showAttackAnimation(callback) {
  const attackModal = document.getElementById("attack-modal");
  const attackImg = document.getElementById("attack-img");
  let frame = 0;

  attackModal.style.display = "flex";

  const attackInterval = setInterval(() => {
    attackImg.src = heroAttackFrames[frame];
    frame++;
    if (frame >= heroAttackFrames.length) {
      clearInterval(attackInterval);
      attackModal.style.display = "none";
      if (callback) callback();
    }
  }, 70); // adjust speed
}

function showVictoryAnimation() {
  const victoryEl = document.getElementById("sprite-img");
  //victoryEl.style.display = "block";
  spriteImg.src = "assets/ui/winner.png";

/*   setTimeout(() => {
    victoryEl.style.display = "none";
  }, 2000); // Show for 2 seconds */
}

function startGame() {


  // Delay closing the modal (e.g., 1 second)
  setTimeout(() => {
	  document.getElementById("intro-modal").style.display = "none";
	  startHeroAnimation(); // Begin idle animation
	  renderStats();
	  renderMap();
	  gameEl.innerHTML = "You enter the dungeon...";
  }, 1500); // 1000ms = 1 second delay
}



//renderStats();
//renderMap();
