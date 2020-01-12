import startGame, { generateNumber } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (x) {
    return getGcd(y % x, x);
  }
  return y;
};

const game = () => {
  const a = generateNumber();
  const b = generateNumber();
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return [String(rightAnswer), question];
};

export default () => startGame(game, description);
