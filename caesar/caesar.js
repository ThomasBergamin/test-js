const caesar = function(string, shift) {

    let encodedString = "";

    // Case where shift is negative

    if(shift < 0){

        let multiplier = 1;

        // Case where we have large negative shift
        if(shift < -26){

            multiplier = Math.floor(Math.abs(shift) / 26);
            
        }

        shift = shift + 26 * multiplier; 
            
    }

    // Loop over all char in string
    for(let char of string){


        // Get index of each character
        
        let charIndex = string.indexOf(char);

        // Convert the character to unicode

        charInUnicode = string.charCodeAt(charIndex);


        // Check if it's a letter : unicode of A,Z = 65, 90, unicode of a,z = 97, 122

        if(charInUnicode >= 65 && charInUnicode <= 90 || charInUnicode >= 97 && charInUnicode <= 122){

            // Case where we have a upper case letter : 

            if(charInUnicode >= 65 && charInUnicode <= 90){

                // Refactor the shift in case it is higher than 26 : ex char B (66) and shift 28 => 66 - 65 + 28 = 29 % 26 = 3 + 65 = 68 (D)

                // charInUnicode - 65 so we reset unicode back to 0, A = 0, B = 1 ...
                // % 26 so we cut useless multiples of 26 in the shift

                encodedChar = String.fromCharCode(((charInUnicode - 65 + shift) % 26) + 65);

                // Case where we have a lower case letter

            } else if(charInUnicode >= 97 && charInUnicode <= 122) {

                encodedChar = String.fromCharCode(((charInUnicode - 97 + shift) % 26) + 97);
            }


            // Add encoded character to the final string
            encodedString += encodedChar;
        }else{
            // Just append char 
            encodedString += char;
        }

        
    }
    
    return encodedString;
}

module.exports = caesar
