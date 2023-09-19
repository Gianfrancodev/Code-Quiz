var startButton = document.getElementById('start-button');
var questionContainer = document.getElementById('question-container');
var choicesContainer = document.getElementById('choices-container');
var timerElement = document.getElementById('timer');
var highScoresList = document.getElementById('high-scores');

var questions = [
    {
        question: 'Inside which HTML element do we put the Javascript?',
        choices: ['<js>', '<javascript>', '<script>', '<scripting>'],
        correctAnswer: '<script>',
    },
    {
        question: 'Which programming language is used for web development?',
        choices: ['Java', 'Python', 'JavaScript', 'C++'],
        correctAnswer: 'JavaScript',
    },
    {
        question: 'What is the correct Javascript syntax to write "Hello World?" ',
        choices: ['response("Hello World")', '"Hello World"', 'document.write("Hello World")', 'Idk'],
        correctAnswer: 'document.write("Hello World")',
    },
    {
        question: 'An external Javascript must contain the <script> tag?',
        choices: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        choices: ['"Comment"', '//Comment', '!Comment', 'Whats a comment'],
        correctAnswer: '//Comment',
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        choices: ['Style', 'Font', 'Class', 'Styles'],
        correctAnswer: 'Style',
    },
    {
        question: 'Which is the correct CSS syntax?',
        choices: ['body {color:black}', '{body;color:black}', 'body:color=black', '{body:color=black(body}'],
        correctAnswer: 'body {color:black}',
    },
    {
        question: 'To define a style sheet, you need to?',
        choices: ['specify each property and its corresponding value', 'associate property-value pairs to dedicated HTML tag', 'Both A & B', 'None of the above'],
        correctAnswer: 'JavaScript',
    },
];

const quizDurationSeconds = 60;
let currentQuestionIndex = 0;
let timer;
let score = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.disabled = true;
    timer = setInterval(updateTimer, 1000);
    showQuestion();
}

function updateTimer() {
    quizDurationSeconds--;
    timerElement.textContent = quizDurationSeconds;

    if (quizDurationSeconds <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;

        choicesContainer.innerHTML = '';

        currentQuestion.choices.forEach((choice) => {
            const choiceButton = document.createElement('button');
            choiceButton.textContent = choice;
            choiceButton.addEventListener('click', () => checkAnswer(choice, currentQuestion.correctAnswer));
            choicesContainer.appendChild(choiceButton);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    } else {
        quizDurationSeconds -= 10; // Subtract 10 seconds for a wrong answer
    }

    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.textContent = 'Quiz Over!';
    choicesContainer.innerHTML = '';

    // Store and display the high score
    const playerName = prompt('Enter your name:');
    const highScore = { name: playerName, score: score };
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    highScores.push(highScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    displayHighScores();
}

function displayHighScores() {
    highScoresList.innerHTML = '';
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${score.name}: ${score.score}`;
        highScoresList.appendChild(li);
    });
}
