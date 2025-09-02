// script.js

// Quiz Questions
const quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<js>",
    d: "<scripting>",
    correct: "b",
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    a: "<script name='xxx.js'>",
    b: "<script href='xxx.js'>",
    c: "<script src='xxx.js'>",
    d: "<script file='xxx.js'>",
    correct: "c",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "msg('Hello World');",
    b: "alertBox('Hello World');",
    c: "alert('Hello World');",
    d: "msgBox('Hello World');",
    correct: "c",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "=",
    b: "-",
    c: "*",
    d: "x",
    correct: "a",
  },
  {
    question: "How do you create a function in JavaScript?",
    a: "function:myFunction()",
    b: "function = myFunction()",
    c: "function myFunction()",
    d: "create.myFunction()",
    correct: "c",
  },
];

// DOM Elements
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Load first question
loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
