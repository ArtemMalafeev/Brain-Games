import startGameController from '../index.js';
import getRandomNumber from '../getRandom.js';

const findGcd = (operand1, operand2) => {
  if (!operand2) {
    return operand1;
  }

  return findGcd(operand2, operand1 % operand2);
};

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const operand1 = getRandomNumber(1, 50);
  const operand2 = getRandomNumber(1, 50);
  const question = `Question: ${operand1} ${operand2}`;
  const correctAnswer = String(findGcd(operand1, operand2));

  return [question, correctAnswer];
};

export default () => startGameController(DESCRIPTION, getData);
