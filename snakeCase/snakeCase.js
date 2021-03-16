const snakeCase = function(string) {

    let regex = /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~]/g;
    
    let cleanString = string.replace(regex, "");

    let snakeString = "";

    for(char of cleanString){
        if(char === " " || char === "-"){
            char = "_";
        }

        snakeString += char;

    }

    //.split(" ").join("_")

    return snakeString;
}

module.exports = snakeCase
