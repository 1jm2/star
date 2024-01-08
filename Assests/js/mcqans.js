
// Function to toggle the visibility of answer paragraphs based on the checkbox state
function toggleAnswers() {
  const showAnswersCheckbox = document.getElementById('showAnswers');
  const answerParagraphs = document.querySelectorAll('.answer');

  for (const answerParagraph of answerParagraphs) {
    answerParagraph.style.display = showAnswersCheckbox.checked ? 'block' : 'none';
  }
}

// Attach an event listener to the checkbox to toggle answers
const showAnswersCheckbox = document.getElementById('showAnswers');
showAnswersCheckbox.addEventListener('change', toggleAnswers);


