const repeatString = function(string, number) {
    
    try {
        return string.repeat(number);
    } 
    catch(RangeError) {
        return "ERROR";
    }

};

module.exports = repeatString
