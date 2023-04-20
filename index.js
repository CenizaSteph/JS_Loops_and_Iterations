//if else statements
// a.) Conforming a user is 25 years old and up.
var age = prompt("Enter your age:");
if (age >= 25) {
	alert("You are 25 years old and up.");
} else {
	alert("You are under 25 years old.");
}

// b.) Conforming a user entered number less than 100.
var number = prompt("Enter a number:");
if (number < 100) {
    alert("You entered a number less than 100.");
} else {
	alert("The number you entered is not less than 100.");
}
		

// Loops
// a.) Print 0-30.
function displayLoop1() {
    // Create a new div element to contain the loop
    var div = document.createElement("div");
    div.className = "slideIn";

	// Add the loop to the div element
	div.innerHTML = "<h2>Numbers 0-30:</h2>";
	for (var i = 0; i <= 30; i++) {
		div.innerHTML += i + "<br>";
	}

	// Add the div element to the page
	document.body.appendChild(div);

	// Set a timer to remove the div element after the slide out animation completes
	setTimeout(function() {
		div.className = "slideOut";
		setTimeout(function() {
			document.body.removeChild(div);
		}, 500);
	}, 3000);
}
		
// b.) Print even numbers from 0-40.
function displayLoop2() {
	// Create a new div element to contain the loop
	var div = document.createElement("div");
	div.className = "slideIn";

	// Add the loop to the div element
	div.innerHTML = "<h2>Even numbers 0-40:</h2>";
	for (var i = 0; i <= 40; i++) {
		if(i % 2 ===0){
			div.innerHTML += i + "<br>";
		}
	}

	// Add the div element to the page
	document.body.appendChild(div);

	// Set a timer to remove the div element after the slide out animation completes
	setTimeout(function() {
		div.className = "slideOut";
		setTimeout(function() {
			document.body.removeChild(div);
		}, 500);
	}, 3000);
}
		
// c.) Print 40-10 desc order multiple of 3.
function displayLoop3() {
	// Create a new div element to contain the loop
	var div = document.createElement("div");
	div.className = "slideIn";

	// Add the loop to the div element
	div.innerHTML = "<h2>Multiples of 3, descending from 40 to 10:</h2>";
	for (var i = 40; i >= 10; i--) {
		if(i % 3 === 0){
			div.innerHTML += i + "<br>";
		}
	}

	// Add the div element to the page
	document.body.appendChild(div);

	// Set a timer to remove the div element after the slide out animation completes
	setTimeout(function() {
		div.className = "slideOut";
		setTimeout(function() {
			document.body.removeChild(div);
		}, 500);
	}, 3000);
}