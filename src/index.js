import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

const rulesEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const generateNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
};

const evenGame = () => {
  const name = askUserName();
  const isEven = (num) => num % 2 === 0;

  for (let i = 0; i < 3; i += 1) {
    const question = generateNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  greeting, askUserName, rulesEven, generateNumber, evenGame,
};
