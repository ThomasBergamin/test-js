const removeFromArray = function(array, ...argsToRemove) {

    // Loop over all args
    for(arg of argsToRemove){

        // Check if they are in array, else ignore
        if (array.includes(arg)){
            // Remove them in array
            let index = array.indexOf(arg);
            array.splice(index, 1);
        }
        
    }
    return array

}

module.exports = removeFromArray
