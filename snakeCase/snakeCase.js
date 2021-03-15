const snakeCase = function(string) {

    cleanString = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    console.log(cleanString)

    return cleanString;
}

module.exports = snakeCase
