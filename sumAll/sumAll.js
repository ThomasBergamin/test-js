const sumAll = function(num1, num2) {
    
    // Check if conditions are met, both inputs are numbers and integers or return ERROR
    if(typeof(num1) === "number" && typeof(num2) === "number" && num1 > 0 && num2 > 0){
        let highestNum = 0;
        let lowestNum = 0;
        let total = 0;

        // Find highest and lowest num in case they are inverted
        if(num1 > num2){
            highestNum = num1;
            lowestNum = num2;
        } else{
            highestNum = num2;
            lowestNum = num1;
        }

        // Loop through all numbers between the lowest and the highest number and add them to the total
        for(i=lowestNum; i <= highestNum; i++){
            total += i;
        }

        return total;

    } else{
        return "ERROR"
    }

}

module.exports = sumAll
