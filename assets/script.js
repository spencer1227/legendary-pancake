const generateBtn = document.querySelector("#generate");
const Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
const Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SpecialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "?", ".", ","];

let characterpool = []
const randomLowercase = () => {
    characterpool = characterpool.concat(Lowercase)
    console.log(characterpool)
    // return lowercase[Math.floor(Math.random() * lowercase.length)];
};

const randomUppercase = () => {
    characterpool = characterpool.concat(Uppercase)
    console.log(characterpool)
    // const index = uppercase[Math.floor(Math.random() * uppercase.length)];
    // console.log(index);
};

const randomNumber = () => {
    characterpool = characterpool.concat(Number)
    console.log(characterpool)
    // // const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // return num[Math.floor(Math.random() * num.length)];
};

const randomSpecialCharacter = () => {
    characterpool = characterpool.concat(SpecialCharacter)
    console.log(characterpool)
    // const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "?", ".", ","];
    // return symbol[Math.floor(Math.random() * symbol.length)];
};

const getPasswordLength = () => {
    const getPasswordLengthString = prompt(
        "How long is the password? (must be between 8 and 28 characters)");
    return parseInt (getPasswordLengthString, 10);
};

const validatePasswordLength = (passwordLength) => {
    if (passwordLength >= 8 && passwordLength <= 28) {
        return true;
        } else {
        alert("Password must meet required amount of characters (between 8 and 28)"
        );
        return false};
    };

// const choicesToAsk = [
//     {
//     key: "isLowercase",
//     question: "Do you want lowercase characters?",
//     execute: randomLowercase,
//     },

//     {
//     key: "isUppercase",
//     question: "Do you want uppercase characters?",
//     execute: randomUppercase,
//     },
    
//     {
//     key: "isNumber",
//     question: "Do you want numbers?",
//     execute: randomNumber,
//     },

//     {
//     key: "isSpecialCharacter",
//     question: "Do you want special characters?",
//     execute: randomSpecialCharacter,
//     },
// ];

// const getChoices = () => {
//     const choices = {};
//     const askUser = (choiceObject) => {
//         const confirmedChoice = confirm(choiceObject.question);
//         choices[choiceObject.key] = confirmedChoice;
//     };

//     choicesToAsk.forEach(askUser);
//     return choices;
// };

// const validateChoices = (choices) => {
//     const choicesArray = Object.entries(choices);

//     const checkIfFalse = (choice) => {
//         return !choice[1];
//     };

//     return !choicesArray.every(checkIfFalse);
// };

const generatePassword = () => {
    const passwordLength = getPasswordLength();
    const confirmLowercase = confirm("Do you want lowercase characters?")
    const confirmUppercase = confirm("Do you want uppercase characters?")
    const confirmNumber = confirm("Do you want numbers?")
    const confirmSpecialCharacter = confirm("Do you want special characters?")

let finalpassword = []

    const isValidPasswordLength = validatePasswordLength(passwordLength);
console.log(passwordLength);

    if (isValidPasswordLength) {
        // const choices = getChoices();
        // const isValidChoices = validateChoices(choices);
        // if (isValidChoices) {
            if(confirmLowercase === true) {
                randomLowercase();
            }
            if(confirmUppercase === true) {
                randomUppercase();
            }
            if(confirmNumber === true) {
                randomNumber();
            }
            if(confirmSpecialCharacter === true) {
                randomSpecialCharacter();
            }
console.log(characterpool)
for(let i=0; i < passwordLength; i++) {
    const newindex = Math.floor(Math.random()* characterpool.length)
    const indexvalue = characterpool[newindex]
    finalpassword.push(indexvalue)
    console.log(finalpassword)
    };
        return finalpassword.join("")
        // } else {
        //     alert("Select at least one (1) option.");
        // };
    };
};

const writePassword = () => {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword)