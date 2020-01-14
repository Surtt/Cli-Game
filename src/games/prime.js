import startGame, { generateNumber } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if ((num % 2 === 0 && num !== 2) || num < 2) {
    return false;
  }

  const sqrt = Math.ceil(Math.sqrt(num)) + 1;

  for (let i = 3; i < sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const question = generateNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(rightAnswer), question];
};

export default () => startGame(game, description);
