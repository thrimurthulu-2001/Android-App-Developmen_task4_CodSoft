const quizzes = [
    {
        title: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Lisbon"],
                answer: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                answer: "Mars"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Ernest Hemingway"],
                answer: "William Shakespeare"
            }
        ]
    },
    {
        title: "Science",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["O2", "H2O", "CO2", "NaCl"],
                answer: "H2O"
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
                answer: "Mitochondria"
            },
            {
                question: "What is the speed of light?",
                options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"],
                answer: "300,000 km/s"
            }
        ]
    }
];

let currentQuiz = {};
let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-quiz').addEventListener('click', startRandomQuiz);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
document.getElementById('restart-quiz').addEventListener('click', restartQuiz);

function startRandomQuiz() {
    currentQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-selection').classList.add('hidden');