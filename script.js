// Array of questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Function to render the questions
function renderQuestions() {
  const questionsElement = document.getElementById("questions");

  // Check if the questions container exists
  if (!questionsElement) {
    console.error(
      "Error: questionsElement is not defined. Ensure there's a container with id 'questions' in your HTML."
    );
    return;
  }

  // Loop through the questions and render them
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    // Add question text
    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    // Add choices
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceContainer = document.createElement("div");
      choiceContainer.classList.add("choice");

      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

      const choiceLabel = document.createElement("label");
      choiceLabel.textContent = choice;

      choiceContainer.appendChild(choiceElement);
      choiceContainer.appendChild(choiceLabel);
      questionElement.appendChild(choiceContainer);
    }

    questionsElement.appendChild(questionElement);
  }
}

// Function to calculate the score
function calculateScore() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    // Get the selected answer for each question
    const selectedAnswer = document.querySelector(
      `input[name="question-${i}"]:checked`
    );

    // Check if the selected answer matches the correct answer
    if (selectedAnswer && selectedAnswer.value === questions[i].answer) {
      score++;
    }
  }

  // Store the score in localStorage
  localStorage.setItem("score", score);

  // Display the score
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
  } else {
    alert(`Your score is ${score} out of ${questions.length}.`);
  }
}

// Attach event listener to the submit button
document.getElementById("submit").addEventListener("click", calculateScore);

// Render the questions on page load
document.addEventListener("DOMContentLoaded", renderQuestions);

