// Variable for Kelvin which is a constant of 293
const kelvin = 0;

// Variable for Celcius which is always 273 less than kelvin
const celcius = kelvin - 273;

// Fahrenheit = Celcius * (9/5) + 32
let fahrenheit = celcius * (9/5) + 32;

// Round fahrenheit down to nearest whole
fahrenheit = Math.floor(fahrenheit);

// Output the result
console.log(fahrenheit);
