"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const questions = [
    {
        question: 'Typescript is the _____ of javascript?',
        choices: ['Superset', 'subset', 'Latest version', 'none'],
        correctAnswer: 0,
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctAnswer: 0,
    },
    {
        question: 'How many bones in a Humain being?',
        choices: ['206', '300', '144', '30'],
        correctAnswer: 0,
    },
];
const askQuestion = (index) => {
    const question = questions[index];
    rl.question(`${question.question} (${question.choices.join(', ')}): `, (answer) => {
        const choiceIndex = question.choices.findIndex(choice => choice.toLowerCase() === answer.toLowerCase());
        if (choiceIndex === question.correctAnswer) {
            console.log('Correct!\n');
        }
        else {
            console.log(`Incorrect. The correct answer is: ${question.choices[question.correctAnswer]}\n`);
        }
        if (index < questions.length - 1) {
            askQuestion(index + 1);
        }
        else {
            console.log('Quiz complete. Thanks for playing!');
            rl.close();
        }
    });
};
console.log('Welcome to the Quiz App!\n');
askQuestion(0);
