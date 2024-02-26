function calculateTravelTime() {
  // Get selected planets
  const departurePlanet = document.getElementById("departurePlanet").value;
  const destinationPlanet = document.getElementById("destinationPlanet").value;

  // Sample travel time calculation logic (adjust as needed)
  const travelTime = calculateSampleTravelTime(
    departurePlanet,
    destinationPlanet
  );

  // Display the result
  document.getElementById(
    "travelTimeResult"
  ).textContent = `Estimated travel time: ${travelTime} days`;
}

// Sample function for travel time calculation (adjust as needed)
function calculateSampleTravelTime(departurePlanet, destinationPlanet) {
  const travelTimeMap = {
    "earth-mars": 300,
    "earth-jupiter": 700,
    // Add more entries for other planet combinations
  };

  const key = `${departurePlanet}-${destinationPlanet}`;
  return travelTimeMap[key] || "N/A";
}

// SECTION 2

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  const result = num1 + num2;
  document.getElementById(
    "calculationResult"
  ).textContent = `Result: ${result}`;
}

// session 3

// Special Offer Functionality
document.addEventListener("DOMContentLoaded", function () {
  const checkEligibilityButton = document.getElementById("checkEligibility");
  const ageInput = document.getElementById("age");
  const eligibilityResult = document.getElementById("eligibilityResult");

  checkEligibilityButton.addEventListener("click", function () {
    const age = parseInt(ageInput.value);

    if (isNaN(age)) {
      alert("Please enter a valid age.");
      return;
    }

    let eligibilityMessage = "";

    if (age >= 18 && age <= 30) {
      eligibilityMessage =
        "Congratulations! You are eligible for our special offer!";
    } else {
      eligibilityMessage =
        "Sorry, this offer is only available for customers aged 18-30.";
    }

    eligibilityResult.textContent = eligibilityMessage;
  });
});

// SESSION 4

function submitForm(e) {
  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name && !email && !message) {
      throw new Error("All fields must be filled out");
    }

    // Your form submission logic here

    // If successful, reset the form
    document.getElementById("contactForm").reset();
    document.getElementById("errorMessage").textContent = "";
  } catch (error) {
    document.getElementById("errorMessage").textContent = error.message;
  }
}

// SESSION 6

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const agree = document.getElementById("agree").checked;

  if (!name || !email || !message || !agree) {
    document.getElementById("validationMessage").textContent =
      "Please fill out all fields and agree to the terms.";
  } else {
    // If validation passes, you can submit the form or perform other actions
    document.getElementById("validationMessage").textContent =
      "Form submitted successfully!";
  }
}

// SESSION 7
function calculateElapsedTime() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please enter valid numbers for day, month, and year.");
    return;
  }

  const currentDate = new Date();
  const enteredDate = new Date(year, month - 1, day); // Month is zero-based

  const timeDifference = currentDate - enteredDate;
  const elapsedTime = calculateTimeUnits(timeDifference);

  document.getElementById(
    "result"
  ).textContent = `Elapsed Time: ${elapsedTime.years} years, ${elapsedTime.months} months, ${elapsedTime.days} days`;
}

function calculateTimeUnits(timeDifference) {
  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInMonth = 30; // Assuming an average month has 30 days
  const monthsInYear = 12;

  const seconds =
    Math.floor(timeDifference / millisecondsInSecond) % secondsInMinute;
  const minutes =
    Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute)) %
    minutesInHour;
  const hours =
    Math.floor(
      timeDifference / (millisecondsInSecond * secondsInMinute * minutesInHour)
    ) % hoursInDay;
  const days =
    Math.floor(
      timeDifference /
        (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)
    ) % daysInMonth;
  const months =
    Math.floor(
      timeDifference /
        (millisecondsInSecond *
          secondsInMinute *
          minutesInHour *
          hoursInDay *
          daysInMonth)
    ) % monthsInYear;
  const years = Math.floor(
    timeDifference /
      (millisecondsInSecond *
        secondsInMinute *
        minutesInHour *
        hoursInDay *
        daysInMonth *
        monthsInYear)
  );

  return {
    years,
    months,
    days,
  };
}

// SESSION 8
function submitFeedback() {
  const feedbackOptions = document.getElementById("options");
  const selectedOptions = Array.from(feedbackOptions.selectedOptions).map(
    (option) => option.value
  );

  // Convert the array to a string for display
  const feedbackString = selectedOptions.join(", ");

  document.getElementById(
    "feedbackResult"
  ).textContent = `Feedback: ${feedbackString}`;
}

// SESSION 9

function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  // Regular expressions for enhanced validation
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isUsernameValid = usernameRegex.test(username);
  const isPasswordValid = passwordRegex.test(password);
  const isEmailValid = emailRegex.test(email);

  if (isUsernameValid && isPasswordValid && isEmailValid) {
    document.getElementById("validationResult").textContent =
      "Validation Passed!";
  } else {
    document.getElementById("validationResult").textContent =
      "Validation Failed. Please check your input.";
  }
}
