const palindromes = function(string) {

    // Lower all characters

    let lowercaseString = string.toLowerCase();

    // Remove punctuations

    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    var cleanString = lowercaseString.replace(regex, "")

    // Remove white space

    var stringToReverse = cleanString.split(" ").join("");

    // Create a variable with the reversed string

    let splittedString = stringToReverse.split("");
    let listReversedString = [];

    for(const letter of splittedString){
        listReversedString.unshift(letter)
    }

    reversedString = listReversedString.join("")

    // Compare both strings

    if(reversedString === stringToReverse){
        return true;
    } else {
        return false;
    }
    
}

module.exports = palindromes

