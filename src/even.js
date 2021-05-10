import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const regulations = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(regulations);

  const MAX_NUMBER = 100;
  let roundCount = 3;

  while (roundCount > 0) {
    const question = getRandomInt(MAX_NUMBER);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
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
