// Questions data
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

// Function to render questions on the screen
function renderQuestions() {
  const questionsElement = document.getElementById("questions");

  if (!questionsElement) {
    console.error("Error: questionsElement is not defined. Make sure there is a container with id 'questions' in your HTML.");
    return;
  }

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    questionElement.style.marginBottom = "20px";

    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];

      const choiceLabel = document.createElement("label");
      choiceLabel.style.marginRight = "10px";

      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

      choiceLabel.appendChild(choiceElement);
      choiceLabel.appendChild(document.createTextNode(choice));

      questionElement.appendChild(choiceLabel);
    }

    questionsElement.appendChild(questionElement);
  }
}

// Function to calculate score
function calculateScore() {
  let score = 0;
  const selectedAnswers = [];

  for (let i = 0; i < questions.length; i++) {
    const selectedAnswer = document.querySelector(`input[name="question-${i}"]:checked`);

    if (selectedAnswer) {
      selectedAnswers.push(selectedAnswer.value);
      if (selectedAnswer.value === questions[i].answer) {
        score++;
      }
    }
  }

  // Store selected answers in sessionStorage and score in localStorage
  sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  localStorage.setItem("score", score);

  // Display score in the score div
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
  }
}

// Attach event listener to the submit button
document.getElementById("submit").addEventListener("click", calculateScore);

// Render questions on page load
renderQuestions();

