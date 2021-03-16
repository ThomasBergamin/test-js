const fibonacci = function(number) {
    number = parseInt(number)
    if(number===0){
        return(0);
    }
    else if(number===1){
        return(1);
    }

    // Cannot input negative numbers
    else if(number < 0){
        return("OOPS");
    }

    else if(number > 1){

        // Init the beginning of the fibonacci sequence
        let listNumber = [1, 1];

        // Append numbers in the fibonacci sequence until the length of the list is equal to the input

        while(listNumber.length < number){
            
            // Add 2 last numbers in the list then add this number at the end of the list
            let newNumber = listNumber[listNumber.length-1] + listNumber[listNumber.length-2];
            listNumber.push(newNumber);
        }
        return(listNumber[listNumber.length-1]);
    }
}


module.exports = fibonacci
