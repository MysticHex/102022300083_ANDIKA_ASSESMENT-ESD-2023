const inputString="Naip Lovyu"

const processedString = inputString.replace(/[^a-zA-Z]/g, '').toLowerCase()

const stringArray2 = [...inputString];

var randomizedUser = "";

for (let index = 0; index < 6; index++) {
  const randomIndex = Math.floor(Math.random() * processedString.length);
  randomizedUser += processedString[randomIndex];
}

console.log(randomizedUser);
