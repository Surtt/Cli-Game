import generateNumber from '../utils';
import startGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const getProgression = () => {
  const firstNumber = generateNumber(0, 10);
  const step = generateNumber(1, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const generateGameData = () => {
  const hideNumberPosition = generateNumber(0, progressionLength - 1);
  const progression = getProgression();
  const rightAnswer = progression[hideNumberPosition];
  progression[hideNumberPosition] = '..';
  const question = progression.join(' ');
  return [String(rightAnswer), question];
};

export default () => startGame(generateGameData, description);
