// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  let passLength;
  do {
    passLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Invalid input. Please enter a valid number between 8 and 128.");
    }
  } while (passLength < 8 || passLength > 128 || isNaN(passLength));
  let incLowerChars = confirm("Do you want to include lowercase letters in your password?");
  let incUpperChars = confirm("Do you want to include uppercase letters in your password?");
  let incNumericChars = confirm("Do you want to include numbers in your password?");
  let incSpecChars = confirm("Do you want to include special characters in your password?");

  if (!(incLowerChars || incUpperChars || incNumericChars || incSpecChars)) {
    alert("You must choose at least one character type.");
    return getPasswordOptions();
  }

  return {
    length: passLength,
    incLowerChars,
    incUpperChars,
    incNumericChars,
    incSpecChars
  };
}



// Function for getting a random element from an array
function getRandom(arr) {
  let randomArrIndex = Math.floor(Math.random() * arr.length);
  let randomArrElement = arr[randomArrIndex];
  return randomArrElement;
}

let randSpecChars = getRandom(specialCharacters);
let randLowerChars = getRandom(lowerCasedCharacters);
let randUpperChars = getRandom(upperCasedCharacters);
let randNumbers = getRandom(numericCharacters)

// Function to generate password with user input
function generatePassword() {
  userPass = getPasswordOptions();
  let finalPassword = '';
  if (userPass.incLowerChars) {
    finalPassword += lowerCasedCharacters.join('');
  }
  if (userPass.incSpecChars) {
    finalPassword += specialCharacters.join('');
  }
  if (userPass.incNumericChars) {
    finalPassword += numericCharacters.join('');
  }
  if (userPass.incUpperChars) {
    finalPassword += upperCasedCharacters.join('');
  }

  let generatedPassword = "";
  for (let i =0; i < userPass.length; i++) {
    let randomIndex = Math.floor(Math.random() * finalPassword.length);
    generatedPassword += finalPassword[randomIndex];
  } 
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);