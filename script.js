// Constants for the answer elements
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const question = document.getElementById("questions");
const submitButton = document.getElementById("submit-answer");

// Function to reset the quiz options and state
function resetQuiz() {
  option1.checked = false;
  option2.checked = false;
  option3.checked = false;
  option4.checked = false;
  submitButton.innerHTML = "Submit Answer";
}

// Function to update the submitted questions and answers
function updateSubmissions() {
  console.log("Submitted Questions:", submittedQs);
  checkAnswer();
  if (submittedQs !== numberSubmitted) {
    updatePage();
    numberSubmitted = submittedQs;
    console.log("Submitted Answers:", numberSubmitted);
  }

  return submittedQs;
}

// Function to update the options based on the current question
// and reset the quiz if all questions have been answered
function updateOptions(submittedQs) {
  if (submittedQs === 0) {
    question.innerHTML =
      "What game 2025 video game by Hideo Kojima features actor, Norman Reedus as the main character?";
    answer1.innerHTML = "The Walking Dead: Daryls Revenge";
    answer2.innerHTML = "Death Stranding 2";
    answer3.innerHTML = "Fallout 4";
    answer4.innerHTML = "Baldurs Gate 3";
    console.log("Options updated for question 0");
    console.log("Submitted Questions:", submittedQs);
  } else if (submittedQs === 1) {
    question.innerHTML = "Which Overwatch Character is an animal?";
    answer1.innerHTML = "Winston";
    answer2.innerHTML = "Zarya";
    answer3.innerHTML = "Tracer";
    answer4.innerHTML = "Baptiste";
    console.log("Options updated for question 1");
    console.log("Submitted Questions:", submittedQs);
  } else if (submittedQs === 2) {
    question.innerHTML =
      "Which installment of the Fallout franchise takes place in West Virginia?";
    answer1.innerHTML = "Fallout 2";
    answer2.innerHTML = "Fallout 3";
    answer3.innerHTML = "Fallout: New Vegas";
    answer4.innerHTML = "Fallout 76";
    console.log("Submitted Questions:", submittedQs);
    console.log("Options updated for question 2");
  } else if (submittedQs === 3) {
    question.innerHTML =
      "Which character does NOT exist in the Five Nights at Freddys franchise?";
    answer1.innerHTML = "Freddy";
    answer2.innerHTML = "Chica";
    answer3.innerHTML = "Mangle";
    answer4.innerHTML = "Torment";
    console.log("Submitted Questions:", submittedQs);
    console.log("Options updated for question 3");
  } else if (submittedQs === 4) {
    question.innerHTML = "How many Pokemon currently exist?";
    answer1.innerHTML = "1024";
    answer2.innerHTML = "956";
    answer3.innerHTML = "1025";
    answer4.innerHTML = "698";
    console.log("Submitted Questions:", submittedQs);
    console.log("Options updated for question 4");
  }
}

// Function to check the selected answer and update the score
// and background color of the answer elements
function checkAnswer() {
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  );

  if (selectedOption) {
    selectedValue = selectedOption ? Number(selectedOption.value) : null;
  } else if (!selectedOption) {
    selectedValue = null;
    submittedQs--;
  }
  if (submittedQs === 5) {
    displayScore();
    return;
  }

  if (selectedValue !== null) {
    submittedAnswers.push(selectedValue);
    console.log("Submitted Answers:", submittedAnswers);
  } else if (selectedValue === null) {
    console.log("No option selected for question", submittedQs);

    return;
  }
  if (submittedQs === 0) {
    if (selectedValue === correctAnswers[0]) {
      score++;
      document.getElementById(
        `answer${correctAnswers[0]}`
      ).style.backgroundColor = "green";
      console.log("Correct answer for question 0");
    } else {
      document.getElementById(`answer${selectedValue}`).style.backgroundColor =
        "red";
      document.getElementById(
        `answer${correctAnswers[0]}`
      ).style.backgroundColor = "green";
      console.log("Incorrect answer selected for question 0");
    }
  } else if (submittedQs === 1) {
    if (selectedValue === correctAnswers[1]) {
      score++;
      document.getElementById(
        `answer${correctAnswers[1]}`
      ).style.backgroundColor = "green";
      console.log("Correct answer for question 1");
    } else {
      document.getElementById(`answer${selectedValue}`).style.backgroundColor =
        "red";
      document.getElementById(
        `answer${correctAnswers[1]}`
      ).style.backgroundColor = "green";
      console.log("Incorrect answer selected for question 1");
    }
  } else if (submittedQs === 2) {
    if (selectedValue === correctAnswers[2]) {
      score++;
      document.getElementById(
        `answer${correctAnswers[2]}`
      ).style.backgroundColor = "green";
      console.log("Correct answer for question 2");
    } else {
      document.getElementById(`answer${selectedValue}`).style.backgroundColor =
        "red";
      document.getElementById(
        `answer${correctAnswers[2]}`
      ).style.backgroundColor = "green";
      console.log("Incorrect answer selected for question 2");
    }
  } else if (submittedQs === 3) {
    if (selectedValue === correctAnswers[3]) {
      score++;
      document.getElementById(
        `answer${correctAnswers[3]}`
      ).style.backgroundColor = "green";
      console.log("Correct answer for question 3");
    } else {
      document.getElementById(`answer${selectedValue}`).style.backgroundColor =
        "red";
      document.getElementById(
        `answer${correctAnswers[3]}`
      ).style.backgroundColor = "green";
      console.log("Incorrect answer selected for question 3");
    }
  } else if (submittedQs === 4) {
    if (selectedValue === correctAnswers[4]) {
      score++;
      document.getElementById(
        `answer${correctAnswers[4]}`
      ).style.backgroundColor = "green";
      console.log("Correct answer for question 4");
    } else {
      document.getElementById(`answer${selectedValue}`).style.backgroundColor =
        "red";
      document.getElementById(
        `answer${correctAnswers[4]}`
      ).style.backgroundColor = "green";
      console.log("Incorrect answer selected for question 4");
    }
  }

  console.log("Current score:", score);
}

function displayScore() {
  console.log("Your score is:", score);
  if (score === 5) {
    console.log("Congratulations! You answered all questions correctly.");
    question.innerHTML =
      "Congratulations! You answered all questions correctly.";
  } else if (score === 0) {
    console.log("You answered no questions correctly. Better luck next time!");
    question.innerHTML =
      "You answered no questions correctly. Better luck next time!";
  } else {
    console.log(`You answered ${score} out of 5 questions correctly.`);
    question.innerHTML = `You answered ${score} out of 5 questions correctly.`;
  }
  submitButton.innerHTML = "Restart Quiz";
  console.log("Quiz completed. Click 'Restart Quiz' to play again.");
  submitButton.innerHTML = "Restart Quiz";
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";
  option4.style.display = "none";
  answer1.style.display = "none";
  answer2.style.display = "none";
  answer3.style.display = "none";
  answer4.style.display = "none";
}

// Function to restart the quiz if all questions have been answered
// and reset the submitted questions and answers
function restartQuiz() {
  submittedQs = 0;
  numberSubmitted = 0;
  submittedAnswers = [];
  score = 0;
  buttonClicks = 0;
  waitingForNext = false;
  window.location.reload();
  console.log("Quiz reset. Submitted Questions and Answers set to 0.");
}

function updateQuestions() {}

function handleButtonClick() {
  if (!waitingForNext && buttonClicks < 8) {
    // User is checking an answer
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;

    // Disable the submit button until user clicks an option
    option1.addEventListener("click", function () {
      submitButton.disabled = false;
    });
    option2.addEventListener("click", function () {
      submitButton.disabled = false;
    });
    option3.addEventListener("click", function () {
      submitButton.disabled = false;
    });
    option4.addEventListener("click", function () {
      submitButton.disabled = false;
    });

    checkAnswer();
    submitButton.innerHTML = "Next Question";
    waitingForNext = true;
    buttonClicks++;
  } else if (!waitingForNext && buttonClicks === 8) {
    // Changes the text of the submit button to "Show Results"
    // User is checking the last answer
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;

    // Disable the submit button until user clicks an option
    option1.addEventListener("click", function () {
      submitButton.disabled = false;
    });
    option2.addEventListener("click", function () {
      submitButton.disabled = false;
    });
    option3.addEventListener("click", function () {
      submitButton.disabled = false;
    });
    option4.addEventListener("click", function () {
      submitButton.disabled = false;
    });

    checkAnswer();
    submitButton.innerHTML = "Show Results";
    waitingForNext = true;
    buttonClicks++;
  } else if (waitingForNext && buttonClicks < 9) {
    // User can submit next question
    // Re-enables the options for the next question
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;
    //disable the submit button until user clicks an option
    submitButton.disabled = true;
    //resets the background color of the answer elements
    answer1.style.backgroundColor = "#f8f9fa";
    answer2.style.backgroundColor = "#f8f9fa";
    answer3.style.backgroundColor = "#f8f9fa";
    answer4.style.backgroundColor = "#f8f9fa";

    buttonClicks++;
    submittedQs++;
    updateOptions(submittedQs);
    resetQuiz();
    submitButton.innerHTML = "Submit Answer";
    waitingForNext = false;
  } else if (buttonClicks === 9) {
    displayScore();
    waitingForNext = null;
    buttonClicks++;
  } else if (buttonClicks > 9) {
    restartQuiz();
    updateOptions(submittedQs);
  }
}

function buttonDisabler() {
  if (selectedValue !== null) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function updatePage() {
  checkAnswer();
  updateQuestions();
  resetQuiz();
  console.log("Page updated with new options and questions.");
}

const correctAnswers = [2, 1, 4, 4, 3];
let buttonClicks = 0;
let waitingForNext = false;
let submittedQs = 0;
let score = 0;
let selectedValue = 0;
let submittedAnswers = [];

//Disables the first submit button until an option is selected
submitButton.disabled = true; // Disable the submit button initially
option1.addEventListener("click", function () {
  if (option1.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});
option2.addEventListener("click", function () {
  if (option2.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});
option3.addEventListener("click", function () {
  if (option3.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

option4.addEventListener("click", function () {
  if (option4.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

//Event listener for the submit button
//Starts the quiz and handles button clicks
submitButton.addEventListener("click", handleButtonClick);
