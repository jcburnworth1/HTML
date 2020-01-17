////////////////////////////// Functions //////////////////////////////
// Capture rock, paper, or scissor
const getUserChoice = userInput => {
  // To lower case for consistency
  userInput = userInput.toLowerCase();

  // Chcek for valid entry
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid Entry. Rock, Paper, or Scissors only');
  }
}

// Test valid and invalid entries
// Valid
// console.log(getUserChoice('rock'));

// Invalid
// console.log(getUserChoice('aaaa'));

// Computer makes a choice
const getComputerChoice = () => {
  // Generate random 0, 1, or 2
  let randomNumber = Math.floor(Math.random() * 3);

  // Switch for computer to pick rock, paper, scissor
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;

    case 1:
      return 'paper';
      break;

    case 2:
      return 'scissor';
      break;

    default:
      return 'Invalid';
      break;
  }
}

// Test getComputerChoice
// console.log(getComputerChoice());

// Determine who wins
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice == 'paper') {
      return 'Sorry, computer won.';
    } else {
      return 'Congratulations! You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice == 'scissors') {
      return 'Sorry, computer won.';
    } else {
      return 'Congratulations! You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice == 'rock') {
      return 'Sorry, computer won.';
    } else {
      return 'Congratulations! You won!';
    }
  }
}

// Test determineWinner
// console.log(determineWinner('rock','paper'));
// console.log(determineWinner('paper','paper'));
// console.log(determineWinner('scissors','paper'));

// Play game function
const playGame = () => {
  // Generate user and computer choices
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();

  // Output choices to track the game
  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);

  // Figure out who won
  console.log(determineWinner(userChoice, computerChoice));
}

// Play the play
playGame();
