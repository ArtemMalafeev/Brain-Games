import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (description, getData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  console.log(description);

  const iter = (round) => {
    if (round === 0) {
      console.log(`\nCongratulations, ${name}!`);
      return;
    }

    const [question, trueAnswer] = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    iter(round - 1);
  };

  iter(ROUNDS_COUNT);
};
