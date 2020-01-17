////////////////////////////// Functions //////////////////////////////
// getSleepHours
const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'sunday':
      return 8;
      break;

    case 'monday':
      return 7;
      break;

    case 'tuesday':
      return 6;
      break;

    case 'wednesday':
      return 5;
      break;

    case 'thursday':
      return 4;
      break;

    case 'friday':
      return 3;
      break;

    case 'saturday':
      return 2;
      break;

    default:
      return 1;
      break;
  }
}

// Test getSleepHours
// console.log(getSleepHours('Sunday'));
// console.log(getSleepHours('Monday'));
// console.log(getSleepHours('Endday'));

// getActualSleepHours
const getActualSleepHours = () => {
  return getSleepHours('sunday') + getSleepHours('monday') +
         getSleepHours('tuesday') + getSleepHours('wednesday') +
         getSleepHours('thursday') + getSleepHours('friday') +
         getSleepHours('saturday');
}

// Test getActualSleepHours
// console.log(getActualSleepHours());

// getIdealSleepHours
const getIdealSleepHours = () => {
  return 2 * 7;
}

// Test getIdealSleepHours
// console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
    console.log(actualSleepHours - idealSleepHours);
  } else if (actualSleepHours > idealSleepHours) {
    console.log('More sleep than needed!');
    console.log(actualSleepHours - idealSleepHours);
  } else {
    console.log('Get more sleep!');
    console.log(actualSleepHours - idealSleepHours);
  }
}

// Test calculateSleepDebt
calculateSleepDebt();
