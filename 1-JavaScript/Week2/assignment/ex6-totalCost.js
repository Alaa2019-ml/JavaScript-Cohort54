const cartForParty = {
  chips: 1.75,
  juice: 2.4,
  frenchfries: 4.99,
  cake: 8.99,
  choclate: 2.99,
};

function calculateTotalPrice(obj) {
  let sum = 0;
  for (const [_, value] of Object.entries(obj)) {
    sum += value;
  }
  return Number(sum.toFixed(2));
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 21.12;
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
}

test();
