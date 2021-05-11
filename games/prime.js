import play from '../src/index.js';
import randomNumber from '../src/getRandom.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getData = () => {
  const question = randomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => play(DESCRIPTION, getData);
