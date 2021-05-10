import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import _ from 'lodash';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const calculate = (operands, operator) => {
  switch (operator) {
    case '+':
      return car(operands) + cdr(operands);
    case '-':
      return car(operands) - cdr(operands);
    case '*':
      return car(operands) * cdr(operands);
    default:
      return 'Operator not found';
  }
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const regulations = 'What is the result of the expression?';
  console.log(regulations);

  const MAX_NUMBER = 100;
  let roundCount = 3;
  const OPERATIONS = ['+', '-', '*'];

  while (roundCount > 0) {
    const operands = cons(getRandomInt(MAX_NUMBER), getRandomInt(MAX_NUMBER));
    const operation = _.sample(OPERATIONS);

    const question = `Question: ${car(operands)} ${operation} ${cdr(operands)}`;
    console.log(question);

    const correctAnswer = String(calculate(operands, operation));
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }

    console.log('Correct!');
    roundCount -= 1;
  }

  console.log(`Congratulations, ${name}`);
};

export default playGame;
