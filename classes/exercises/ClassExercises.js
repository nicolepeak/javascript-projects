// Define your Book class here:
class Book {
    constructor (title, author, copyrightDate, isbn, numOfPages, numOfCheckouts, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.numOfCheckouts = numOfCheckouts;
        this.discarded = discarded;
    }
    
    checkout (uses = 1){
        this.numOfCheckouts += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, numOfCheckouts, discarded){
        super(title, author, copyrightDate, isbn, numOfPages, numOfCheckouts, discarded);
    }
    dispose(currentYear){
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = 'yes'
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, numOfCheckouts, discarded){
        super(title, author, copyrightDate, isbn, numOfPages, numOfCheckouts, discarded);
    }
    dispose(){
        if (this.numOfCheckouts > 100){
            this.discarded = 'yes'
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'no' )


let tssbManual = new Manual ('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'no' )


// Code exercises 4 & 5 here:
tssbManual.dispose(2024)
console.log(tssbManual)

prideAndPrejudice.checkout(5)
prideAndPrejudice.dispose()
console.log(prideAndPrejudice)