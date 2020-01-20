import generateNumber from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const mathExpressions = ['+', '-', '*'];

const getExpression = (expression, a, b) => {
  switch (expression) {
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

const game = () => {
  const a = generateNumber(1, 10);
  const b = generateNumber(1, 10);
  const expression = mathExpressions[generateNumber(0, mathExpressions.length)];
  const question = `${a} ${expression} ${b}`;
  const rigthAnswer = getExpression(expression, a, b);

  return [String(rigthAnswer), question];
};

export default () => startGame(game, description);
