// ***** VARIABLES *****

// Ordered list of letters used to complete the DNI:
const LETRAS = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];

// List of some identification numbers without letter:
var uncompleteIdentification = [
  "46793887",
  "47226093",
  "41928803",
  "40282877"
];


// ***** FUNCTIONS *****

// Function to calculate the letter of the uncomplete identifications:

function calculateLetter(numbers) {
  var rest = numbers % 23;
  var letter = LETRAS[rest];
  console.log(numbers + " \- " + letter);
};

uncompleteIdentification.forEach(function (number) {
  calculateLetter(number);
});

// To calculate the letter of any identification number, run this code
// replacing the number with yours:
calculateLetter(49338262);
