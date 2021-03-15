let findTheOldest = function(listPeople){

    let ageOldestPerson = 0;
    let oldestPerson;

    // Calculate age of every person in the list of objects if age not defined and add it in object

    for(person of listPeople){
        if (!person.age){
            if (person.yearOfDeath){
                person.age = person.yearOfDeath - person.yearOfBirth;
            } else { 
                // Case where person is still alive
                let currentYear = new Date().getFullYear();
                person.age = currentYear - person.yearOfBirth;
            };
        };

        // Then compare age of everyone

        if(person.age > ageOldestPerson){
            ageOldestPerson = person.age
            oldestPerson = person
        }
    };

    return(oldestPerson);
};

module.exports = findTheOldest
