
let score = 0;

let name = prompt("Hello, what is your name?");
console.log("Name entered:", name);

alert("Welcome, " + name.toUpperCase() + "! 👋");

let age = prompt("What is your age, if I may ask?");
console.log("Age entered:", age);

if (age < 18) {
  alert("Youth is a wonderment! 🚀");
} else {
  alert("What a wonderful age 😎");
}

let color = prompt("What is your favorite color?");
console.log("Color entered (raw):", color);

let colorLower = color.toLowerCase();
console.log("Color after toLowerCase():", colorLower);

if (colorLower === "blue") {
  alert("Blue Bayou, cool choice 💙");
} else {
  alert(color + " is a great choice 🎨");
}

let book = prompt("What is your favorite book?");
console.log("Book entered:", book);

alert('Nice! "' + book + '" sounds fascinating 📖');

let song = prompt("What is your favorite song?");
console.log("Song entered:", song);

alert('I must listen to it. "' + song + '" 🎵');

// NUMBER GAME
let secretNumber = 3;

for (let i = 1; i <= 4; i++) {

  let guess = prompt("Try " + i + " of 4: Guess the number");

  if (guess == secretNumber) {
    alert("🎉 Correct!");
    break;
  } else if (guess < secretNumber) {
    alert("Too low ⬇️");
  } else {
    alert("Too high ⬆️");
  }

  if (i === 4) {
    alert("Out of tries! The number was " + secretNumber);
  }
}

// ✅ NUMBER LOOP ENDS RIGHT HERE


// 7th Question - Bread Game STARTS HERE
let breads = ["sourdough", "artisan", "brioche", "baguette", "croissant", "ciabatta"];
let correct = false;

for (let i = 1; i <= 6; i++) {

  let guess = prompt("7️⃣ Try " + i + " of 6: Name a type of bread!");
  guess = guess.toLowerCase();

  if (breads.includes(guess)) {
    alert("🥖 Correct!");
    break;
  } else {
    alert("Nope, try again!");
  }

  if (i === 6) {
    alert("Out of tries!");
  }
}

alert("Possible answers were: " + breads.join(", "));
