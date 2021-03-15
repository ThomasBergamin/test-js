const reverseString = function(string) {

    let splittedString = string.split("");
    let reversedString = [];

    for(const letter of splittedString){
        reversedString.unshift(letter)
    }
    
    return reversedString.join("");
};

module.exports = reverseString
