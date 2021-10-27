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

