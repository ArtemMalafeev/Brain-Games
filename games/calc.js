import {
  cons, car, cdr,
} from '@hexlet/pairs';
import _ from 'lodash';
import play from '../src/index.js';
import randomNumber from '../src/getRandom.js';

const DESCRIPTION = 'What is the result of the expression?';

const calculate = (operands, operator) => {
  switch (operator) {
    case '+':
      return car(operands) + cdr(operands);
    case '-':
      return car(operands) - cdr(operands);
    case '*':
      return car(operands) * cdr(operands);
    default:
      return 'Operator not found';
  }
};

const OPERATIONS = ['+', '-', '*'];

const getData = () => {
  const operands = cons(randomNumber(), randomNumber());
  const operation = _.sample(OPERATIONS);
  const question = `Question: ${car(operands)} ${operation} ${cdr(operands)}`;
  const correctAnswer = String(calculate(operands, operation));

  return [question, correctAnswer];
};

export default () => play(DESCRIPTION, getData);
