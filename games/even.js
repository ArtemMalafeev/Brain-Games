import play from '../src/index.js';
import randomNumber from '../src/getRandom.js';

const isEven = (number) => number % 2 === 0;

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => play(DESCRIPTION, getData);
