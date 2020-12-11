// Assignment Code
var generateBtn = document.querySelector("#generate");

//these are the variables
var user;
var uppercase;
var lowercase;
var characters;
var numbers;
//these are the arrays for that will be needed to generate the random password.
var alpha1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//I made this array look different to show that you can also use them as strings and it will still work like the above
var symbols = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
var num = "0123456789"
//this is the empty variable that is suppose to be the glue of it all
var pool = []




//here is the function used to generate the password
function generatePassword() {
  if (alpha2) {
    pool = pool.concat(alpha2)
  }
  //this is the prompt needed to trigger the first window on the page followed by the confirms
  var length = parseInt(prompt("How many Characters would you like your password to be?"));
  while (length < 8 || user < 128) {
    alert("OPPS! Must be between 8 and 128 characters.")
    length = parseInt(prompt("How many Characters would you like your password to be?"));
  }
  for (var i = 0; i < length; i++) {
    length.push = (pool[Math.floor(Math.random)] * pool); //originally was 2 x26 instead of alpha1 change if needed -- change alpha1 to
    if (length < 8 || user > 128) {
      alert("OPPS! Must be between 8 and 128 characters.");
    } if (length > 8 || user < 128) {
      confirm("Click ok to include special characters?");
    } if ("Click ok to include special characters?") { //how do I get this one to loop in ? another while loop?
      confirm("Click ok to include numbers?");
    } if ("Click ok to include numbers?") {
      confirm("Click ok to include lowercase?");
    } if ("Click ok to include numbers?") {
      //the return infront of the confirm makes the loop stop and lets the generator know it is time to hand out a password
      return confirm("Click ok to inclide uppercase?");
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


