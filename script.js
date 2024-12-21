const questions = [
  { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the highest mountain in the world?", choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"], answer: "Everest" },
  { question: "What is the largest country by area?", choices: ["Russia", "China", "Canada", "United States"], answer: "Russia" },
  { question: "Which is the largest planet in our solar system?", choices: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
  { question: "What is the capital of Canada?", choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"], answer: "Ottawa" }
];

const questionsElement = document.getElementById('questions');
const scoreElement = document.getElementById('score');
const submitButton = document.getElementById('submit');

// Function to render questions and choices
function renderQuestions() {
  const savedAnswers = JSON.parse(sessionStorage.getItem('progress')) || [];

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('p');
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    question.choices.forEach(choice => {
      const choiceLabel = document.createElement('label');
      const choiceInput = document.createElement('input');
      choiceInput.type = 'radio';
      choiceInput.name = `question-${index}`;
      choiceInput.value = choice;

      // If there's a saved answer, mark the radio button as selected
      if (savedAnswers[index] === choice) {
        choiceInput.checked = true;
      }

      choiceLabel.appendChild(choiceInput);
      choiceLabel.appendChild(document.createTextNode(choice));
      questionDiv.appendChild(choiceLabel);
    });

    questionsElement.appendChild(questionDiv);
  });
}

// Function to save progress to sessionStorage
function saveProgress() {
  const selectedAnswers = [];

  questions.forEach((_, index) => {
    const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
    selectedAnswers.push(selectedOption ? selectedOption.value : null);
  });

  sessionStorage.setItem('progress', JSON.stringify(selectedAnswers));
}

// Function to calculate and display the score
function calculateScore() {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
    if (selectedOption && selectedOption.value === question.answer) {
      score++;
    }
  });

  localStorage.setItem('score', score);
  scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
  calculateScore();
  saveProgress();
});

// Render questions when the page loads
renderQuestions();

