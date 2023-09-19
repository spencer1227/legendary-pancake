const generateBtn = document.querySelector("#generate");

const randomLowercase = () => {
    const randomLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    return lowercase[Math.floor(Math.random() * lowercase.length)];
};

const randomUppercase = () => {
    const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    return uppercase[Math.floor(Math.random() * uppercase.length)];
};

const randomNumber = () => {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return num[Math.floor(Math.random() * num.length)];
};

const randomSpecialCharacter = () => {
    const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "?", ".", ","];
    return symbol[Math.floor(Math.random() * symbol.length)];
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

const choicesToAsk = [
    {
    key: "isLowercase",
    question: "Do you want lowercase characters?",
    execute: randomLowercase,
    },

    {
    key: "isUppercase",
    question: "Do you want uppercase characters?",
    execute: randomUppercase,
    },
    
    {
    key: "isNumber",
    question: "Do you want numbers?",
    execute: randomNumber,
    },

    {
    key: "isSpecialCharacter",
    question: "Do you want special characters?",
    execute: randomSpecialCharacter,
    },
];

const getChoices = () => {
    const choices = {};
    const askUser = (choiceObject) => {
        const confirmedChoice = confirm(choiceObject.question);
        choices[choiceObject.key] = confirmedChoice;
    };

    choicesToAsk.forEach(askUser);
    return choices;
};

const validateChoices = (choices) => {
    const choicesArray = Object.entries(choices);

    const checkIfFalse = (choice) => {
        return !choice[1];
    };

    return !choicesArray.every(checkIfFalse);
};

const generatePassword = () => {
    const passwordLength = getPasswordLength();


    const isValidPasswordLength = validatePasswordLength(passwordLength);

    if (isValidPasswordLength) {
        const choices = getChoices();
        const isValidChoices = validateChoices(choices);
        if (isValidChoices) {
            
        } else {
            alert("Select at least one (1) option.");
        };

    };
};

const writePassword = () => {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
};