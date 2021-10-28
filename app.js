//PASSWORD GENERATOR

//Character Generator Functions

//we want a random number returned which is why we are using randomIndex. `chicken` is being passed into the argument of `str`. Next it is taking chicken and counting the letters (str.length) which is 7 but it is using Index (so it will be a number 0-6) and then multiplying it to Math.random (which is a random number 0-1, not including 1). After it multiplies that, it rounds that number down (Math.floor), whatver number that gives you will be the random number you get.
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}
randomIndex(`chicken`);//0,1,2,3,4,5,6

//Example of the randomIndex function
console.log(randomIndex(`chicken`));//0,1,2,3,4,5,6

//Function that returns a random lowercase letter using a random index in the "letters" string. So we are taking all 26 letters and passing them in the above function just like we did for `chicken`
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    //for [randomIndex(letters)] you could do [randomIndex(bcdefghijklmnopqrstuvwxyz)] but we set the alphabet to letters, so thats why we are using letters
    return letters[randomIndex(letters)];
}

//Example of the getRandomLower function
console.log(getRandomLower());// Random lowercase letter

//Function thst returns a random uppercase letter
function getRandomUpper(){
    //Running the "getRandomLower" function to create a random letter and setting that value to the letter variable
    const letter = getRandomLower();
    //Changing the random letter to an uppercase letter and returning it from the function
    return letter.toUpperCase();
}

//Example of the getRandomUpper function
console.log(getRandomUpper());//Random UpperCase Letter

//Function that returns a random number (AKA Random number as a string value)
function getRandomNumber(){
    const numbers = `0123456789`;
    //Returning a random number using a random index in the "numbers" string
    return numbers[randomIndex(numbers)];
}

//Example of the gerRandomNumber function
console.log(getRandomNumber()); //Random number from `numbers` string

//Function that returns a random symbol 
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    //Returning a random symbol using a random index in the "symbols" string
    return symbols[randomIndex(symbols)];
}

//Example of the getRandomSymbol function
console.log(getRandomSymbol());//Random symbol from the "symbols" string

//Objects to store all the character generator functions
const randomFunctions = {
    lower: getRandomLower, 
    upper: getRandomUpper, 
    number: getRandomNumber, 
    symbol: getRandomSymbol, 
};

// Selecting the DOM ELements
//El stands for element
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

//Function that accepts true or false values as well as a number as arguments. If the user checks the box, that value will be true. If they don't check the box, the value will be false
//NOTE: The checkbox inputs and number (AKA length) input will determine the value/arguments entered into this function
function generatePassword(lower, upper, number, symbol, length){

    console.log(lower, upper, number, symbol, length);

    //1. CREATE TH PASSWORD VARIABLE
    let generatedPassword = ``;

    //2. FILTER OUT UNCHECKED OPTIONS
    //True and false value can be addedc together (True is 1 and false is 0)
   //NOTE: The value set to typesCount will be used when building the password
   //true or false is passed in for each value depending on which boxes are checked or not. typesCount just returns a number based on which values are true. So if all the boxes are checked, 4 will be returned. If they check 2 boxes, 2 will be returned
const typesCount = lower + upper + number + symbol;

//This is alerting the user to check at least 1 box if the user doesn't check anything. If they do not check any boxes, the return `` (empty string) is returned, meaning it breaks the loop to alert the user to check something
if (typesCount === 0){
    alert(`Please select at lease one option`);
    return ``;
}

//Creating an array of arrays. The first item in each nested array holds the value of a string that will be used to access a function in the randomFunctions object. Also, the second item in each nested array is one of the values passed into this generatePassword function.
let typesARR = [
    [`lower`, lower],
    [`upper`, upper],
    [`number`, number],
    [`symbol`, symbol],
];

//The filter method creates a new array
//This is filtering out the false values. Whichever items are true, they are added to the new array. The false items are removed from the array
typesArr = typesArr.filter(item => {
    console.log(item[1]);
    return item[1];
});

    //3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION

//Building password with a for loop
//
for (i = 0; i < length; 1 += typesCount){
    
}



    //4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION

}

//Example of generatePassword function
//NOTE: Using the starting value for when the page first loads
//below is saying all the boxes are checked and 10 is set for length. This is an example of when the page first loads
generatePassword(true, true, true, true, 10)

