import generateNumber from '../utils';
import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const sqrt = Math.ceil(Math.sqrt(num)) + 1;

  for (let i = 2; i < sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const question = generateNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(rightAnswer), question];
};

export default () => startGame(game, description);
