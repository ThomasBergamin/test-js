const reverseString = function(string) {

    // Split word(s) in a list of char
    let splittedString = string.split("");
    let reversedString = [];

    // Loop each char and at at the beginning of new list
    for(const letter of splittedString){
        reversedString.unshift(letter)
    }
    
    return reversedString.join("");
};

module.exports = reverseString
