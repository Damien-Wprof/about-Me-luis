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

