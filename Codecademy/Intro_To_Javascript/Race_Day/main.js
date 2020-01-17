// Variables
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 20;

// Control flow for registration
if (earlyRegister) {
  raceNumber += 1000;
}

// Control flow for runner start time
if (earlyRegister) {
  console.log(`Runner Start Time: 9:30AM \n Race Number: ${raceNumber}`);
} else if (runnerAge > 18){
  console.log(`Runner Start Time: 11:00AM \n Race Number: ${raceNumber}`);
} else {
  console.log(`Runner Start Time: 12:30PM \n Race Number: ${raceNumber}`);
}
