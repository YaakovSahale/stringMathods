
//!..................................1



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



//!...................................2



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



//!................................3



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



//!...............................4



// function str5Longer(str){
//     if(str.length > 5){
//         return "long"
//     }
//     return "short"
// }


// let string = prompt("enter a string")

// console.log(str5Longer(string)); 



//!................................5



// function country3Shorter(str){
//     if(str.length < 3){
//         return "yes"
//     }
//     return "no"
// }


// let country = prompt("enter a name of a country")

// console.log(country3Shorter(country)); 



//!................................6



// function str6Longer(str, note){
//     if(str.length > 6){
//         return str
//     }
//     return note.indexOf(note)
// }


// let string = prompt("enter a string")
// let char = prompt("enter a charcter")

// console.log(str6Longer(string, char)); 



//!.................................7



// function str6Longer(str, note){
//     if(str.indexOf(note) != -1){
//         return str.indexOf(note)
//     }
//     return str
// }


// let string = prompt("enter a string")
// let char = prompt("enter a charcter")

// console.log(str6Longer(string, char)); 



//!.................................8



// function orgnaizedNames(str1,str2){
//    return `${str1[0]}. ${str2.toUpperCase()}`;
// }

// let firstName = prompt("enter your first name")
// let lastName = prompt("enter your last name")


// console.log(orgnaizedNames(firstName,lastName))



//!..................................9



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



//!.................................10



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



