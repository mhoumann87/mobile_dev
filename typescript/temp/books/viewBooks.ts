import {Books} from './books';
import {EBooks} from './eBooks';
import {PrintBooks} from './printBooks';

function viewBooks(books: Books) {

    var text = books.author.firstName + " " + books.author.lastName + "," + books;

    if (books instanceof PrintBooks) {
        text = "Printed book: " + text;
        var pb: PrintBooks = books;
        text = text + ", " + pb.noPages + ' pages';
    } else if (books instanceof EBooks) {
        text = "e-book: " + text;
        var eb:EBooks = books;
        text = text + ", " + eb.sizeMb + 'MB';
    } else {
        text = "Book: " + text;
    }
    console.log(text);
}

function viewAll(books: Array<Books>) {

    for (let book of books) {
        viewBooks(book);
    }
}

var book1: Books = new Books();
book1.title = "The Brothers Lionheart";
book1.price = 11.99;
book1.author = {firstName: 'Astrid', lastName: 'Lindgren'};


var book2: PrintBooks = new PrintBooks();
book2.title = "Choke";
book2.price = 9.99;
book2.author = {firstName: 'Chuck', lastName: 'Palahniuk'};
book2.noPages = 293;

var book3: EBooks = new EBooks;
book3.title = "American Psycho";
book3.price = 11.30;
book3.author = {firstName: 'Bret', lastName: 'Ellis'};
book3.sizeMb = 3.3;

var book4: PrintBooks = new PrintBooks;
book4.title = "Microserfs";
book4.price = 11.99;
book4.author = {firstName: 'Douglas', lastName: 'Coupland'};
book4.noPages = 384;

var books: Array<Books> = new Array<Books>();
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);

viewAll(books);






