const fibonacci = function(number) {
    number = parseInt(number)
    if(number===0){
        return(0);
    }
    else if(number===1){
        return(1);
    }
    else if(number < 0){
        return("OOPS");
    }
    else if(number > 1){
        let listNumber = [1, 1];

        while(listNumber.length < number){
            let newNumber = listNumber[listNumber.length-1] + listNumber[listNumber.length-2];
            listNumber.push(newNumber);
        }
        return(listNumber[listNumber.length-1]);
    }
}


module.exports = fibonacci
