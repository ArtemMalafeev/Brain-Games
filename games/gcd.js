import {
  car, cdr, cons,
} from '@hexlet/pairs';
import play from '../src/index.js';
import randomNumber from '../src/getRandom.js';

const findGcd = (operand1, operand2) => {
  if (!operand2) {
    return operand1;
  }

  return findGcd(operand2, operand1 % operand2);
};

const description = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const operands = cons(randomNumber(), randomNumber());
  const question = `Question: ${car(operands)} ${cdr(operands)}`;
  const correctAnswer = String(findGcd(car(operands), cdr(operands)));

  return [question, correctAnswer];
};

export default () => play(description, getData);
