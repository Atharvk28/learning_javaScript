var score = 0; // increaseScore function
var timer = 60;
let hit ; // setTimer function

// ============ set timer function ==========
function setTimer() {
  let timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector(".pbtm").innerHTML = `<h1> Game over </h1>`;
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

// =================== bubbles function ==========
function getBubbles() {
  let bubbles = "";

  for (let i = 1; i <= 160; i++) {
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

document.querySelector(".startdiv").addEventListener("click", () => {
  getBubbles();
  getHitnum();
  setTimer();
});
