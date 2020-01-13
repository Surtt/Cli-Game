import startGame, { generateNumber } from '..';

const description = 'What number is missing in the progression?';
const getProgression = () => {
  const firstNumber = generateNumber();
  const step = generateNumber();
  let progression = '';
  for (let i = 0; i < 10; i += 1) {
    progression += `${firstNumber + step * i} `;
  }
  return progression.slice(0, -1);
};

const game = () => {
  const hideNumber = generateNumber();
  const progression = getProgression().split(' ');
  const rightAnswer = progression[hideNumber];
  progression[hideNumber] = '..';
  const question = progression.join(' ');
  return [rightAnswer, question];
};

export default () => startGame(game, description);
