// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){ 
// var for the characters
var specialCharacters = ["!","&","(","%",")","*","+",",","$","-",".","/","<",":",";","=",">","?","@","[","]","^","_","`","{","|","}","~","#"];
var alphabetCharsLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetCharsUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersChars = ["1","2","3","4","5","6","7","8","9","0"];

var passContent= [];
    // promt asking the amount of characters wanted
    var passLength = window.prompt("password legth between 8 and 128");
    
    //the requied imput check
    if(passLength >= 8 && passLength <= 128){
        var upperConfirm = confirm("will this use uppercase letters?");
        var lowerConfirm = confirm("Will this use lowercase letters?");
        var specConfirm = confirm("Will this use special characters?");
        var numConfirm = confirm("Will this have numbers?");
             
        //making the items random based on the index
        var specChars = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
        var lowChars = alphabetCharsLower[Math.floor(Math.random()*alphabetCharsLower.length)];
        var upperChars = alphabetCharsUpper[Math.floor(Math.random()*alphabetCharsUpper.length)];
        var numChars = numbersChars[Math.floor(Math.random()*numbersChars.length)];
        // tried tomke a array to randomly pull from to not make it repetitive
        var allChars = [];
        allChars.push(specChars, lowChars, upperChars, numChars);
        console.log(allChars);
        //below is teting area
        
        //for loop to make the function repeat until it is the length requested
        for (var i=0; i <= passLength.length; i++){
          if (upperConfirm === true){
              console.log(upperChars);
              passContent.push(upperChars);
          }
          if (lowerConfirm === true){
              console.log(lowChars);
              passContent.push(lowChars);
        
          }
          if (specConfirm === true){
              console.log(specChars);
              passContent.push(specChars);
          }
          if (numConfirm === true){
              console.log(numChars);
              passContent.push(numChars);
          }
          
        } 

        //above is testing area
        } 
          //gets rid of the "," to join it together
          var finalPass = passContent.join('');
    // will return the value of final pass    
    return finalPass;
    
};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}


    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
