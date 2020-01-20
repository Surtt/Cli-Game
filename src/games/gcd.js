import generateNumber from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (x) {
    return getGcd(y % x, x);
  }
  return y;
};

const game = () => {
  const a = generateNumber(1, 10);
  const b = generateNumber(1, 10);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return [String(rightAnswer), question];
};

export default () => startGame(game, description);
