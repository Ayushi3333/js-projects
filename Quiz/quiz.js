const questionTag = document.querySelector('.question')
const answerOptionFirst = document.querySelector('.first-two-ans')
const answerOptionLast = document.querySelector('.next-two-ans')

const questions = [];
const answers = [];

fetch('https://opentdb.com/api.php?amount=20')
.then(blob => blob.json())
.then((data) => {
  data.results.forEach((element) => {
    questions.push(element.question)
      if (element.incorrect_answers.length === 3) {
        answers.push([element.correct_answer, element.incorrect_answers[0], element.incorrect_answers[1], 
        element.incorrect_answers[2]])
      } else {
        answers.push([element.correct_answer, element.incorrect_answers[0]])
      }
      console.log(answers.sample())
      questionTag.insertAdjacentHTML('beforeend', `<h4>${element.question}</h4>`)
    answerOptionFirst.insertAdjacentHTML('afterbegin', `<p>${answers.sample(1)}</p>
    <p>${answers.sample(2)}</p>`)
  });
});

