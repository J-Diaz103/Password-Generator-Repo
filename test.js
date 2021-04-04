
// tried using the for loop
var passContent= [];
//

console.log(passLength);
console.log(upperConfirm);
console.log(lowerConfirm);
console.log(specConfirm);
console.log(numConfirm);



for (var i=0; i <= passLength.length; i++){
    if (upperConfirm === true){
        console.log(upperChars);
    }
    if (lowerConfirm === true){
        console.log(lowChars);
    }
    if (specConfirm === true){
        console.log(specChars);
    }
    if (numConfirm === true){
        console.log(numChars);
    }

    var allChars= [specChars, lowChars,upperChars, numChars];
    var allChars = Math.floor(Math.random()*allChars.length);

    passContent.push(allChars);
  } 





