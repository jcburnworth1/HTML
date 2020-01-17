// Setup variables
let userName = '';
let userQuestion = 'What up?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Evaluate userName
userName ? console.log(`Hello ${userName}`) : console.log('Hello');

// Question to console
console.log(userQuestion);

// Switch statement to
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;

  case 1:
    eightBall = 'It is decidely so';
    break;

  case 2:
    eightBall = 'Reply hazy try again';
    break;

  case 3:
    eightBall = 'Cannot predict now';
    break;

  case 4:
    eightBall = 'Do not count on it';
    break;

  case 5:
    eightBall = 'My sources say no';
    break;

  case 6:
    eightBall = 'Outlook not so good';
    break;

  case 7:
    eightBall = 'Signs point to yes';
    break;

  default:
    eightBall = 'Try again';
    break;
}

// Write out prediction
console.log(`Magic 8-ball says: ${eightBall}`);
