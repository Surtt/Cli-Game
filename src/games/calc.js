import generateNumber from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getСalculationResult = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const generateGameData = () => {
  const a = generateNumber(1, 10);
  const b = generateNumber(1, 10);
  const operator = operators[generateNumber(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const rigthAnswer = getСalculationResult(operator, a, b);

  return [String(rigthAnswer), question];
};

export default () => startGame(generateGameData, description);
