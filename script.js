function renderQuestions() {
  // Get the DOM element where questions will be rendered
  const questionsElement = document.getElementById("questions");

  if (!questionsElement) {
    console.error("Error: questionsElement is not defined. Make sure there is a container with id 'questions' in your HTML.");
    return;
  }

  // Loop through the questions and render them
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }

    questionsElement.appendChild(questionElement);
  }
}
