function selectRandomly(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

export function tellFortune(childrenArr, partnersArr, locationsArr, jobsArr) {
  const numKids = selectRandomly(childrenArr);
  const partnerName = selectRandomly(partnersArr);
  const location = selectRandomly(locationsArr);
  const jobTitle = selectRandomly(jobsArr);

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKids} kids.`;
}

function main() {
  const numKids = [2, 4, 1, 7, 5];

  const partnerNames = ['Yusuf', 'Leen', 'Sarah', 'Eliana', 'Amal'];

  const locations = ['Amsterdam', 'Breda', 'Tilburg', 'Utrecht', 'Rotterdam'];

  const jobTitles = ['Programmer', 'Teacher', 'Soldier', 'Manager', 'Musician'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
