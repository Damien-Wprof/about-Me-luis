let name = prompt("Hello, what is your name?");
alert("Welcome, " + name + "! 👋");

let age = prompt("What is your age, if I may ask?");
if (age < 18) {
  alert("Youth is a wonderment! 🚀");
} else {
  alert("What a wonderful age 😎");
} // ← THIS was missing

let color = prompt("What is your favorite color?");
if (color.toLowerCase() === "blue") {
  alert("Blue Bayou, cool choice 💙");
} else {
  alert(color + " is a great choice 🎨");
}

let book = prompt("What is your favorite book?");
alert('Nice! "' + book + '" sounds fascinating 📖');

let song = prompt("What is your favorite song?");
alert('I must listen to it. "' + song + '" 🎵');
