
// variables
var rollButton = document.getElementById("button");
var audio = document.getElementById("sound01");
var dice = document.getElementById("die");

var coin = new Dice(2);
var d4 = new Dice(4);
var d6 = new Dice(6);
var d10 = new Dice(10);
var d8 = new Dice(8);
var d12 = new Dice(12);
var d20 = new Dice(20);


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
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

dice.addEventListener("click", (e) => {
      e.preventDefault;
      // -> removing the animation class
      dice.classList.remove("shake");
      // -> triggering reflow
      void dice.offsetWidth;
      // -> re-adding the animation class
      dice.classList.add("shake");
      // -> dice result
      var result = d20.roll();
      printNumber(result);
      // -> play sound
      play();
}, false);

rollButton.addEventListener("click", (e) => {
      e.preventDefault;
      // -> removing the animation class
      dice.classList.remove("shake");
      // -> triggering reflow
      void dice.offsetWidth;
      // -> re-adding the animation class
      dice.classList.add("shake");
      // -> dice result
      var result = d20.roll();
      printNumber(result);
      // -> play sound
      play();
      console.log("hello world");
}, false);

//Dice varructor function creates instance objects
function Dice(sides) {
  this.sides = sides;
  this.roll = function()  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  };
}
