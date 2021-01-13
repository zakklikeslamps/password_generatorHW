// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "(", ")", ",", ".", "<", ">", "?", "/"];
var useUpperCaseChar = true;
var useLowerCaseChar = true;
var useNumericChar = true;
var useSpecialChar = true;
var charLength = 128;
var characterChoice = [];

function getResponses() {
  useUpperCaseChar = confirm("Do you want to use upper case letters?");
  useLowerCaseChar = confirm("Do you want to use lower case letters?");
  useNumericChar = confirm("Do you want to use numbers?");
  useSpecialChar = confirm("Do you want to use special characters?");
  charLength = prompt("How many characters would you like to use?");
}

function writePassword() {
  getResponses();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  if (useUpperCaseChar) {
    characterChoice.push(upperCaseChar)
  }
  if (useLowerCaseChar) {
    characterChoice.push(lowerCaseChar)
  }
  if (useNumericChar) {
    characterChoice.push(numericChar)
  }
  if (useSpecialChar) {
    characterChoice.push(specialChar)
  }
  var password = ""
  for (var index = 1; index <= charLength; index++) {
    var randomCharacterIndex = Math.floor(Math.random() * characterChoice.length)
    var randomCharacterType = characterChoice[randomCharacterIndex]
    var randomIndex = Math.floor(Math.random() * randomCharacterType.length)
    password += randomCharacterType[randomIndex]
  }
  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
