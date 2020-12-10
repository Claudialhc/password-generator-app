// Assignment Code
var generateBtn = document.querySelector("#generate");

var user;
var uppercase;
var lowercase;
var characters;
var numbers;
var alpha1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
var num = "0123456789"
var empty = []

for (var i = 0; i < alpha1.length; i++) {
  console.log(alpha1[i]);
}
  console.log("----")

  

function generatePassword() {
  var length = parseInt(prompt ("How many Characters would you like your password to be? Between 8 and 128?"));
  while (length < 8 || user < 128) {
    alert("OPPS! Must be between 8 and 128 characters.")
        length = parseInt(prompt ("How many Characters would you like your password to be? Between 8 and 128?"));
  }   
  for (var i = 0; i < length; i++) {
     length.push = (alpha1[Math.floor(Math.random)] * 26);
      if (length < 8 || user > 128) {
          alert("OPPS! Must be between 8 and 128 characters.")
  }   else if (length > 8 || user < 128) {
          alert("Click ok to include special characters?")
  }   else {
          numbers = ok("Click okay to include numbers?")
          lowercase = ok("click ok to include lowercase?")
          uppercase = ok("click ok to include uppercase?")
          }
}; 

  return "password";
}
// Generator function 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
