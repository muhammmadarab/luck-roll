// declaring the variables
let score = 0;

// collecting display elements
const scoreDisplay = document.querySelector(".display__score > span");
const choiceDisplay = document.querySelector(".display__choice > span");
const outcomeDisplay = document.querySelector(".display__outcome > span");
const timeDisplay = document.querySelector(".display__time > span");
const messageDisplay = document.querySelector(".resultMessage");

// the dice
const dice = document.querySelector(".dice");

// collecting choice elements
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");

// getting the choice and updating in UI
const getChoice = () => {
  if (one.checked) {
    choiceDisplay.innerHTML = 1;
    return 1;
  } else if (two.checked) {
    choiceDisplay.innerHTML = 2;
    return 2;
  } else if (three.checked) {
    choiceDisplay.innerHTML = 3;
    return 3;
  } else if (four.checked) {
    choiceDisplay.innerHTML = 4;
    return 4;
  } else if (five.checked) {
    choiceDisplay.innerHTML = 5;
    return 5;
  } else if (six.checked) {
    choiceDisplay.innerHTML = 6;
    return 6;
  }
};

// update outcome in UI
const updateOutcome = (num) => {
  outcomeDisplay.innerHTML = num;
};

// timer function
const timer = (sec) => {
  setInterval(() => {
    if (sec > 0) {
      timeDisplay.innerHTML = --sec;
    }
  }, 1000);
};

// rolling the dice
const roll = () => {
  const num = Math.floor(1 + 6 * Math.random());
  if (num === 1) {
    dice.innerHTML = `
        <div class="dice__side dice__side--one">
            <div class="dot"></div>
        </div>
    `;
  } else if (num === 2) {
    dice.innerHTML = `
        <div class="dice__side dice__side--two">
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `;
  } else if (num === 3) {
    dice.innerHTML = `
        <div class="dice__side dice__side--three">
            <div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
  } else if (num === 4) {
    dice.innerHTML = `
        <div class="dice__side dice__side--four">
            <span>
                <div class="dot"></div>
                <div class="dot"></div>
            </span>
            <span>
                <div class="dot"></div>
                <div class="dot"></div>
            </span>
        </div>
    `;
  } else if (num === 5) {
    dice.innerHTML = `
        <div class="dice__side dice__side--five">
            <span>
                <div class="dot"></div>
                <div class="dot"></div>
            </span>
            <span>
                <div class="dot"></div>
            </span>
            <span>
                <div class="dot"></div>
                <div class="dot"></div>
            </span>
        </div>
    `;
  } else if (num === 6) {
    dice.innerHTML = `
        <div class="dice__side dice__side--six">
            <span>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </span>
            <span>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </span>
        </div>
    `;
  }

  setTimeout(() => {
    getResult(num);
  }, 1500);
};

// diaply message
const message = (result) => {
  if (result) {
    messageDisplay.innerHTML = "Your guess was right";
    messageDisplay.classList.add("resultMessage--true");
  } else {
    messageDisplay.innerHTML = "Your guess was wrong";
    messageDisplay.classList.add("resultMessage--false");
  }
  setTimeout(() => {
    messageDisplay.classList.remove(
      "resultMessage--true",
      "resultMessage--false"
    );
  }, 4000);
};

// results
const getResult = (num) => {
  updateOutcome(num);
  if (num === getChoice()) {
    score += 10;
    message(true);
  } else {
    message(false);
  }
  scoreDisplay.innerHTML = score;
};

const resetScore = () => {
  score = 0;
};

// initialize
const initialize = () => {
  // updating choice in UI
  document.querySelector(".choices").addEventListener("click", () => {
    getChoice();
  });

  timer(10);

  setInterval(() => {
    roll();
    setTimeout(() => {
      timer(10);
    }, 1000);
  }, 11000);
};

initialize();
