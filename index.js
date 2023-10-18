function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${title} by ${author}, ${numberOfPages} pages, ${haveRead}.`
    }
}

