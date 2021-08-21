

//!..................................1


// function longerThan5 (rngString){
//     if(rngString.length > 5){
//         return "longer"
//     }
//     return "short"
// }

// var tempString = "shalom"

// longerThan5 (tempString)

//!...................................2

// function foundAInstring (rngString){
//     if(rngString.indexOf("a") != -1){
//         return rngString.indexOf("a")
//     }
//     return "not found"
// }

// var tempString = "shalom"

// foundAInstring(tempString)

//!.....................................3


// function foundRInstring (rngString){
//     if(rngString.indexOf("r") != -1){
//         return true
//     }
//     return false
// }

// var tempString = "shalom"

// foundRInstring(tempString)

//!......................................4


// function foundCharInstring (rngString, rngChar){
//     if(rngString.indexOf(rngChar) != -1){
//         return true
//     }
//     return false
// }

// var tempString = "shalom"
// var tempChar = "s"

// foundCharInstring(tempString, tempChar)

//!.......................................5

// function foundCharInstring (rngString, rngChar){
//     if(rngString.lastIndexOf(rngChar) != -1){
//         return rngString.lastIndexOf(rngChar)
//     }
//     return `${rngChar} isn't in the string ${rngString}`
// }

// var tempString = "shalom"
// var tempChar = "s"

// foundCharInstring(tempString, tempChar)

//!..........................................6

// function getFisrtsCharSayonara(){
//     return "sayonara".substr(0,2)
// }

// console.log(getFisrtsCharSayonara())

//!..........................................9

// function getCharSayonara(){
//     return "sayonara".substr("sayonara".indexOf("o"))
// }

// console.log(getCharSayonara);

//!..........................................10

// function compareStrAndIndex(rngString, rngIndex){
//     if(rngIndex > rngString.length){
//         return "this index is too big"
//     }
//     return rngString.substr(rngString)
// }

// var tempString = "shalom";
// var tempIndex = 7;

// console.log(compareStrAndIndex(tempString, tempIndex));

//!...........................................11

// function compareStrAndIndex(rngString, rngIndex){
//     if(rngIndex > rngString.length){
//         return "this index is too big"
//     }
//     return rngString.substr(rngString,rngString+2)
// }

// var tempString = "shalom";
// var tempIndex = 7;

// console.log(compareStrAndIndex(tempString, tempIndex+2));

//!...............................................12

// function getStringByNumbers(rngString,num1,num2){
//    return rngString.substring(num1,num2)
// }

// var tempString = "shalom";
// var i = 0
// while(i<1){
//     var number1 = prompt("enter a number")
//     var number2 = prompt("enter a number")
    
//     if(number1 && number2 < tempString.length){
//         i++
//     }
    
// }

// console.log(getStringByNumbers(number1,number2))

//!..............................................13

// function getFisrtsCharSayonara(){
//     return "sayonara".substring(0,3)
// }

// console.log(getFisrtsCharSayonara())

//!..............................................14


// function getCharSayonara(){
//     return "sayonara".substr("sayonara".indexOf("y"),"sayonara".indexOf("y")+3)
// }

// console.log(getCharSayonara);

//!.................................................15

// function getCharSayonara(){
//     return "sayonara".substr("sayonara".indexOf("o"))
// }

// console.log(getCharSayonara);

//!................................................16


// function printLongStr (str1, str2){
//     if(str1.length > str2.length){
//         return str1
//     }

//     return str2
// }

// let firstName = prompt("enter your first name")
// let lasttName = prompt("enter your last name")

// let longName = printLongStr(firstName, lasttName)
// console.log(longName);

//!..................................17



// function getEquleString (str1, str2){
//     if(str1.toLowerCase() ==  str2.toLowerCase()){
//         return true
//     }

//     return false
// }

// let firststr = prompt("enter your first name")
// let secondstr = prompt("enter your last name")

// let longName = getEquleString(firststr, secondstr)
// console.log(longName);



//!...................................18



// function printAExist (str){
//     if(str.indexOf("a") != -1){
//         return "a exist in the firstname"
//     }
//     return "a doesnt exist in the firstname"
// }

// function printApiExist (str){
//     if(str.indexOf("api") != -1){
//         return "api exist in the lastname"
//     }
//     return "api doesnt exist in the lastname"
// }


// function printIfInfirstAndLastname(str1, str2){

//     console.log(printAExist(str1));
//     console.log(printApiExist(str2));
// }


// let firstName = prompt("enter your first name")
// let lastName = prompt("enter your last name")


// printIfInfirstAndLastname(firstName,lastName)



//!................................19



// function strLength(str){
//     return str.length
// }

// function spaceInstr(str){
//     if(str.indexOf(" ") != -1){
//         return "there is a space in the full name"
//     }
//     return "there isnot a space in the full name"
// }

// function printFirstAndLastName(str){
//     console.log(str.substring(0,str.indexOf(" ")))
//     console.log(str.substring(str.indexOf(" ")+1))
// }

// function fullNameMathods(str){
//     console.log(strLength(str));
//     console.log(spaceInstr(str));
//     printFirstAndLastName(str);
// }

// let fullName = prompt("enter your full name")

// fullNameMathods(fullName)



//!...............................20



// function str5Longer(str){
//     if(str.length > 5){
//         return "long"
//     }
//     return "short"
// }


// let string = prompt("enter a string")

// console.log(str5Longer(string)); 



//!................................21



// function country3Shorter(str){
//     if(str.length < 3){
//         return "yes"
//     }
//     return "no"
// }


// let country = prompt("enter a name of a country")

// console.log(country3Shorter(country)); 



//!................................22



// function str6Longer(str, note){
//     if(str.length > 6){
//         return str
//     }
//     return note.indexOf(note)
// }


// let string = prompt("enter a string")
// let char = prompt("enter a charcter")

// console.log(str6Longer(string, char)); 



//!.................................23



// function str6Longer(str, note){
//     if(str.indexOf(note) != -1){
//         return str.indexOf(note)
//     }
//     return str
// }


// let string = prompt("enter a string")
// let char = prompt("enter a charcter")

// console.log(str6Longer(string, char)); 



//!.................................24



// function orgnaizedNames(str1,str2){
//    return `${str1[0]}. ${str2.toUpperCase()}`;
// }

// let firstName = prompt("enter your first name")
// let lastName = prompt("enter your last name")


// console.log(orgnaizedNames(firstName,lastName))



//!..................................25



// function getLongerLastName(lastName1,lastName2){
//     if(lastName1.length > lastName2.length){
//         console.log(lastName2.toLowerCase());
//         return lastName1
//     }
//     console.log(lastName1.toLowerCase());
//     return lastName2
// }

// let lastName01 = prompt("enter the first last name")
// let lastName02 = prompt("enter the second last name")

// console.log(getLongerLastName(lastName01,lastName02))



//!.................................26



// function charInFuncationName(inputName,char){
//     let functionName = "charInFuncationName"
//     if(functionName.indexOf(char) != -1){
//         return inputName
//     } 
//     return `the charcter ${char} isn't in the functionName`    
// }


// let userInput = prompt("enter a name")
// let char = prompt("enter a charcter")

// console.log(charInFuncationName(userInput,char))



