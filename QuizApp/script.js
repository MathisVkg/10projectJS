
const quizzAnswer = [
    {
        question: "What's the most used programming languages in 2019?",
        a: "Python",
        b: "C",
        c: "PHP",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What's the name of php inventor?",
        a: "Brendan Eich",
        b: "Michele Mosca",
        c: "Rasmus Lerdorf",
        d: "Zeev Suraski",
        correct: "c",
    },
    {
        question: "What is github?",
        a: "Web hosting and software development management service",
        b: "A cottage rental service",
        c: "A octopus",
        d: "Development service for python",
        correct: "a",
    },
    {
        question: "Find the wrong phrase",
        a: "Web developers write all their codes themselves",
        b: "The code never bugs",
        c: "I can fix this problem later",
        d: "I don't need anyone's help",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Tag Markup",
        b: "Hyper Text Markup Language",
        c: "Hyperlinks Text Mark Language",
        d: "Helicopter Terminals Motorboats Lamborginis",
        correct: "b",
    }
]


let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let aText = document.getElementById("aText");
let bText = document.getElementById("bText");
let cText = document.getElementById("cText");
let dText = document.getElementById("dText");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let currentQuizData = quizzAnswer[currentQuiz];
let answerEl;

function loadQuiz() {
    deselectAnswers();
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener("click", () => {
    console.log("check");
    const answer = getSelected();
    if (answer) {
        if (answer === quizzAnswer[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizzAnswer.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizzAnswer.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

loadQuiz();
