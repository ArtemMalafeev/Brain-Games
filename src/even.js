import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const getRandomInt = () => Math.floor(Math.random() * 1000);

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const regulations = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(regulations);

  let roundCount = 3;

  while (roundCount > 0) {
    const question = getRandomInt();
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
