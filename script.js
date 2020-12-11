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
var pool = []

for (var i = 0; i < alpha1.length; i++) {
  console.log(alpha1[i]);
}
console.log("----")



function generatePassword() {
  //if (useLowercase) {
  //   pool = pool.concat(lowercase)  
  //}
  var length = parseInt(prompt("How many Characters would you like your password to be?"));
  while (length < 8 || user < 128) {
    alert("OPPS! Must be between 8 and 128 characters.")
    length = parseInt(prompt("How many Characters would you like your password to be?"));
  }
  for (var i = 0; i < length; i++) {
    length.push = (alpha1[Math.floor(Math.random)] * alpha1); //originally was 2 x26 instead of alpha1 change if needed -- change alpha1 to
    if (length < 8 || user > 128) {
      alert("OPPS! Must be between 8 and 128 characters.");
    } if (length > 8 || user < 128) {
      confirm("Click ok to include special characters?");
    } if ("Click ok to include special characters?") { //how do I get this one to loop in ? another while loop?
      confirm("Click ok to include numbers?");
    } if ("Click ok to include numbers?") {
      confirm("Click ok to include lowercase?");
    } if ("Click ok to include numbers?") {
      return confirm("Click ok to inclide uppercase?");
    }
  };
  //return stops the function
  //lowercase = ok("click ok to include lowercase?")
  //uppercase = ok("click ok to include uppercase?")

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
