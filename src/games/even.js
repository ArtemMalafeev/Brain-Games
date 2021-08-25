import startGame from '../index.js';
import getRandomNumber from '../getRandom.js';

const isEven = (number) => number % 2 === 0;

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
