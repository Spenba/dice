
// variables
const rollButton = document.getElementById("button");
const audio = document.getElementById("sound01");
const dice = document.getElementById("die");

const coin = new Dice(2);
const d4 = new Dice(4);
const d6 = new Dice(6);
const d10 = new Dice(10);
const d8 = new Dice(8);
const d12 = new Dice(12);
const d20 = new Dice(20);


// Sound function
function play() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.currentTime = 0;
    }
}

// Display dice result
function printNumber(number) {
  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

die.addEventListener("click", (e) => {
      e.preventDefault;
      // -> removing the animation class
      dice.classList.remove("shake");
      // -> triggering reflow
      void die.offsetWidth;
      // -> re-adding the animation class
      dice.classList.add("shake");
      // -> dice result
      let result = d20.roll();
      printNumber(result);
      // -> play sound
      play();
}, false);

rollButton.addEventListener("click", (e) => {
      e.preventDefault;
      // -> removing the animation class
      dice.classList.remove("shake");
      // -> triggering reflow
      void die.offsetWidth;
      // -> re-adding the animation class
      dice.classList.add("shake");
      // -> dice result
      let result = d20.roll();
      printNumber(result);
      // -> play sound
      play();
      console.log("hello world");
}, false);

//Dice constructor function creates instance objects
function Dice(sides) {
  this.sides = sides;
  this.roll = function()  {
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  };
}
