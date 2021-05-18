import _ from 'lodash';
import startGameController from '../index.js';
import getRandomNumber from '../getRandom.js';

const DESCRIPTION = 'What is the result of the expression?';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Operator ${operator} not found!`);
  }
};

const OPERATIONS = ['+', '-', '*'];

const getData = () => {
  const operand1 = getRandomNumber(1, 30);
  const operand2 = getRandomNumber(1, 30);
  const operation = _.sample(OPERATIONS);
  const question = `Question: ${operand1} ${operation} ${operand2}`;
  const correctAnswer = String(calculate(operand1, operand2, operation));

  return [question, correctAnswer];
};

export default () => startGameController(DESCRIPTION, getData);
