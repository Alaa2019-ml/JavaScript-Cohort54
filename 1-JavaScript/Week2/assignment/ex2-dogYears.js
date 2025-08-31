export function calculateDogAge(age) {
  return `Your doggie is ${age * 7} years old in dog years!`;
}

function main() {
  console.log(calculateDogAge(1));
  console.log(calculateDogAge(2));
  console.log(calculateDogAge(3));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
