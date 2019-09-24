const readline = require('readline');
let answerObject = {};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  answerObject.nickname = answer
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answerObject.activity = `${answer}`
    rl.question('What do you listen to while doing that? ', (answer) => {
      answerObject.music = `${answer}`
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        answerObject.meal = `${answer}`
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answerObject.food = `${answer}`
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answerObject.sport = `${answer}`
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answerObject.superpower = `${answer}`
              console.log(`${answerObject.nickname} likes to listen to ${answerObject.music} while ${answerObject.activity}. ${answerObject.meal} is my favourite meal and ${answerObject.food}. I love playing ${answerObject.sport}. My superpower is ${answerObject.superpower}`);
              rl.close();
            });
});
});
});
});
});
});