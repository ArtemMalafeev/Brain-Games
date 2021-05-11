import readlineSync from 'readline-sync';

const play = (description, data) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const ROUND_COUNTS = 3;

  const iter = (rounds) => {
    if (rounds === 0) {
      console.log(`Congratulations, ${name}`);
      return;
    }

    const [question, answer] = data();
    console.log(`Questions: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }

    console.log('Correct!');

    return iter(rounds -= 1);
  }

  return iter(ROUND_COUNTS);
};

export default play;
