function translate(string) {
	
	const vowels = ["a", "e", "i", "o", "u"];

	// In case there are multiple words

	const listWords = string.split(" ");
	const convertedWords = [];

	// Loop through all words : 

	for(let word of listWords){

		let vowelIndex;

		// Case where first letter is a vowel : 

		if(vowels.includes(word[0])){

			word = word + "ay";
			convertedWords.push(word);

		}else{

			// Loop until another vowel is found
			for(let char of word){

				if(vowels.includes(char)){
					// Case where we have "u" check if previous letter was not a "q" otherwise ignore "u"
					if(char === "u"){
						let uIndex = word.indexOf(char);
						
						if(word.charAt(uIndex-1) !== "q"){
							vowelIndex = word.indexOf(char);
							break;
						}

					} else {

						// Keep index of vowel found
						vowelIndex = word.indexOf(char);
						break;

					}

				}
			}
		

			// Slice to get the end of the word + beginning + "ay"
			word = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
			convertedWords.push(word);
		}


	}

	return convertedWords.join(" ")


}


module.exports = {
	translate
}

