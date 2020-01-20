import generateNumber from '../utils';
import startGame from '..';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const question = generateNumber(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [rightAnswer, question];
};

export default () => startGame(game, description);
