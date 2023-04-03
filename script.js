// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
    alert("Password must be a number between 8 and 128 characters.");
    return;
  }
  var lowerCase = confirm("Would you like your password to contain lowercase letters?");
  var upperCase = confirm("Would you like your password to contain uppercase letters?");
  var numeric = confirm("Would you like your password to contain numbers?");
  var special = confirm("Would you like your password to contain special characters?");

  var password = "";
  var passwordChars = "";

  if (lowerCase === true) {
    passwordChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase === true) {
    passwordChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric === true) {
    passwordChars += "0123456789";
  }
  if (special === true) {
    passwordChars += "!@#$%^&*";
  }

  if (lowerCase === true && upperCase === true && numeric === true && special === true) {
  for (var i = 0; i < passwordLength; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }
  return password;
}
return null;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
