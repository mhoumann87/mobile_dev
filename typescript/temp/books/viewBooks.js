"use strict";
var books_1 = require("./books");
var eBooks_1 = require("./eBooks");
var printBooks_1 = require("./printBooks");
function viewBooks(books) {
    var text = books.author.firstName + " " + books.author.lastName + "," + books;
    if (books instanceof printBooks_1.PrintBooks) {
        text = "Printed book: " + text;
        var pb = books;
        text = text + ", " + pb.noPages + ' pages';
    }
    else if (books instanceof eBooks_1.EBooks) {
        text = "e-book: " + text;
        var eb = books;
        text = text + ", " + eb.sizeMb + 'MB';
    }
    else {
        text = "Book: " + text;
    }
    console.log(text);
}
function viewAll(books) {
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var book = books_2[_i];
        viewBooks(book);
    }
}
var book1 = new books_1.Books();
book1.title = "The Brothers Lionheart";
book1.price = 11.99;
book1.author = { firstName: 'Astrid', lastName: 'Lindgren' };
var book2 = new printBooks_1.PrintBooks();
book2.title = "Choke";
book2.price = 9.99;
book2.author = { firstName: 'Chuck', lastName: 'Palahniuk' };
book2.noPages = 293;
var book3 = new eBooks_1.EBooks;
book3.title = "American Psycho";
book3.price = 11.30;
book3.author = { firstName: 'Bret', lastName: 'Ellis' };
book3.sizeMb = 3.3;
var book4 = new printBooks_1.PrintBooks;
book4.title = "Microserfs";
book4.price = 11.99;
book4.author = { firstName: 'Douglas', lastName: 'Coupland' };
book4.noPages = 384;
var books = new Array();
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
viewAll(books);
