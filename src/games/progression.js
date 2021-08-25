import getRandomNumber from '../getRandom.js';
import startGame from '../index.js';

const DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

const createProgression = (start, step, length) => {
  const iter = (acc, count) => {
    if (count === length) {
      return acc;
    }

    const newElement = start + step * count;

    acc.push(newElement);

    return iter(acc, count + 1);
  };

  return iter([], 0);
};

const generateQuestion = (missingElement, progression) => {
  const question = [];

  for (let index = 0; index < progression.length; index += 1) {
    if (index === missingElement) {
      question.push('..');
    } else {
      question.push(progression[index]);
    }
  }

  return question.join(' ');
};

const getData = () => {
  const start = getRandomNumber(2, 10);
  const step = getRandomNumber(2, 10);
  const missingElement = getRandomNumber(1, PROGRESSION_LENGTH - 1);

  const progression = createProgression(start, step, PROGRESSION_LENGTH);
  const question = generateQuestion(missingElement, progression);
  const correctAnswer = String(progression[missingElement]);

  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
