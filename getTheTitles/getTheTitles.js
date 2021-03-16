const getTheTitles = function(listBooks) {
    let titles = [];
    for(let book of listBooks){
        titles.push(book.title);
    }
    return titles;
}

module.exports = getTheTitles;
