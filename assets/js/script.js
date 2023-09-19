var startButton = document.getElementById('start-button');
var questionContainer = document.getElementById('question-container');
var choicesContainer = document.getElementById('choices-container');
var timerElement = document.getElementById('timer');
var highScoresList = document.getElementById('high-scores');

var questions = [
    {
        question: 'What is the capital of France?',
        choices: ['Madrid', 'Rome', 'Paris', 'Berlin'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which programming language is used for web development?',
        choices: ['Java', 'Python', 'JavaScript', 'C++'],
        correctAnswer: 'JavaScript',
    },
    // Add more questions here
];

