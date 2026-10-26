var score = 0; // increaseScore function
var timer = 5;
let hit ; // setTimer function
let level; //to get level of game

// ============ set timer function ==========
function setTimer() {
  let timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector(".pbtm").innerHTML = `<h1 class="gameoverscreen"> Game over </h1>
      <button class="replaybutton"> <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/memories.png" alt="memories"/></i>RePlay</button>`;
    }
  }, 1000);
}

// ============= Score function ==============
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// ================= hit number ====================
function getHitnum() {
  hit = Math.floor(Math.random() * 10); // hit number function
  document.querySelector("#hitval").textContent = hit;
}

// ============== level of game =========== 
document.querySelector

// =================== bubbles function ==========
function getBubbles() {
  let bubbles = "";

  for (let i = 1; i <= level; i++) {
    var rn = Math.ceil(Math.random() * 10);
    bubbles += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = bubbles;
}

// =============== bubble click function==========

document.querySelector(".pbtm").addEventListener("click", (details) => {
  let bubbleclk = Number(details.target.textContent);

  if (hit == bubbleclk) {
    increaseScore();
    getBubbles();
    getHitnum();
  }
  else{
    getBubbles();
    getHitnum();
  }
});

// ======== start button ============= 
document.querySelector(".startdiv").addEventListener("click", () => {
  getBubbles();
  getHitnum();
  setTimer();
});
