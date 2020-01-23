import readlineSync from 'readline-sync';

const countOfQuestions = 3;

export default (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  for (let i = 0; i < countOfQuestions; i += 1) {
    const [rightAnswer, question] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
