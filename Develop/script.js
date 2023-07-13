// Assignment code here

// Setting up the variables

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@]^_`{|}~[";

// Function to generate the password and rules for the password.

function generatePassword() {
  var passwordLength = prompt("Enter the length of new password (8-128 characters):");
  passwordLength = parseInt(passwordLength);

  // Prompt for characters to include in the password.

  var includeNumeric = confirm("Include numeric characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validates that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Select at least one character type.");
    return "";
  }

// If statements to determine what characters to add to password if chosen to include these variables.

var selectedChar = "";
  if (includeLowercase) {
    selectedChar += lowercaseChars;
  }
  if (includeUppercase) {
    selectedChar += uppercaseChars;
  }
  if (includeNumeric) {
    selectedChar += numericChars;
  }
  if (includeSpecial) {
    selectedChar += specialChars;
  }

// creates the password and stops it from generating past the selected number of characters.

var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChar.length);
    password += selectedChar.charAt(randomIndex);
  }

  return password;
}

var passwordText = document.querySelector("#password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);