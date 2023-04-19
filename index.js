// Conditionals
var age = 27;
if (age >= 25) {
    alert("You are 25 years old and up.");
} else {
    alert("You are under 25 years old.");
}

var number = prompt("Enter a number less than 100:");
if (number < 100) {
    alert("You entered a number less than 100.");
} else {
    alert("The number you entered is not less than 100.");
}

// Loops
document.write("<h2>Numbers 0-30:</h2>");
for (var i = 0; i <= 30; i++) {
    document.write(i + "<br>");
}

document.write("<h2>Even numbers 0-40:</h2>");
for (var i = 0; i <= 40; i+=2) {
    document.write(i + "<br>");
}

document.write("<h2>Multiples of 3, descending from 40 to 10:</h2>");
for (var i = 40; i >= 10; i-=3) {
    document.write(i + "<br>");
}