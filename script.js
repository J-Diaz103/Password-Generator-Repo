// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !&(%)*+,$-./:;<=>?@[]^_`{|}~# ";
var alphabetCharsLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetCharsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChars = "1234567890";
var passlength = [8,9,10,11,12,13,14];// has to be between 8 to 128 

function generatePassword(){
    alert("lets create a password")
    var passLength = prompt("password legth between 8 and 14");
    console.log(passLength);
    var upperConfirm = confirm("will this use uppercase letters?");
    console.log(upperConfirm);
    var lowerConfirm = confirm("Will this use lowercase letters?");
    console.log(lowerConfirm);
    var specialConfirm = confirm("Will this use special characters?");
    console.log(specialConfirm);
    var numConfirm = confirm("Will this have numbers?");
    console.log(numConfirm);
    var randomPass = [upperConfirm, lowerConfirm, specialConfirm, numConfirm]
    if (passLength === true,upperConfirm ===true,lowerConfirm === true, specialConfirm === true, numConfirm === true){
        for (var i = 0; i < randomPass.length; i++) { 
            console.log("what comes up?")
    }

}











/*function generatePassword(){ 
    var randomPass = function() {
        var passLength = prompt("password legth between 8 and 14");
        if(passLength >= 8 && passLength <= 14){
            console.log("working so far")
            if(confirm("will this use uppercase letters?")=== true){
                console.log("will use  upper case chars")
            };
            if (confirm("Will this use lowercase letters?")=== true){
                console.log("will have lower case")
            };
            if (confirm("Will this use special characters?")=== true){
                console.log("will have special chars")
            };
            if (confirm("Will this have numbers?")=== true){
                console.log("will have numbers")
    }
            }

        return randomPass;  
    }
    
};
*/




// Write password to the #password input
function writePassword() {
  //
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}


    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
