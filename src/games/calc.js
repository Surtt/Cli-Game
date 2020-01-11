import startGame, { generateNumber } from '..';

const description = 'What is the result of the expression?';
const game = () => {
  let question;
  let rigthAnswer;
  const a = generateNumber();
  const b = generateNumber();
  const randomNumber = generateNumber();

  if (randomNumber > 7) {
    rigthAnswer = a + b;
    question = `${a} + ${b}`;
  } else if (randomNumber < 4) {
    rigthAnswer = a * b;
    question = `${a} * ${b}`;
  } else {
    rigthAnswer = a - b;
    question = `${a} - ${b}`;
  }
  return [String(rigthAnswer), question];
};

export default () => startGame(game, description);
