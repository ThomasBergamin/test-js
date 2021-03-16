const snakeCase = function(string) {

    let regex = /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~]/g;

    // Clean punctuation
    
    let cleanString = string.replace(regex, "");

    let snakeString = "";

    // Replace spaces and dashes with underscore

    for(char of cleanString){
        if(char === " " || char === "-"){
            char = "_";
        }

        snakeString += char;

    }

    // Lower all cases and return string

    return snakeString.toLowerCase();
}

module.exports = snakeCase
