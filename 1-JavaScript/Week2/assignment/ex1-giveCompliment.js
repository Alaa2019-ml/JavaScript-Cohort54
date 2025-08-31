export function giveCompliment(name) {
  const compliments = [
    'kind',
    'smart',
    'beautiful',
    'strong',
    'brave',
    'talented',
    'generous',
    'helpful',
    'creative',
    'friendly',
  ];

  return `You are ${compliments[Math.floor(Math.random() * compliments.length)]}, ${name}!`;
}

function main() {
  const myName = 'Alaa';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
