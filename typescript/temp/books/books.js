var Books = (function () {
    function Books(book, amount, name) {
        this.title = book;
        this.price = amount;
        this.author = name;
    }
    return Books;
}());
//one book
//let books = new Books("Pippi", 9.99, "Astrid Lindgren");
//console.log(books);
//book array
var inventory = [];
inventory.push(new Books("Lionheart", 11.99, "Astrid Lindgren"));
inventory.push(new Books("Choke", 4.99, "Chuck Palahniuk"));
inventory.push(new Books("American Psycho", 6.99, "Bret Easton Ellis"));
inventory.push(new Books("Micro Serfs", 2.99, "Douglas Coupland"));
/*
function viewBook(b:Books)
{
    console.log(b.author);
}
*/
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var b = inventory_1[_i];
    console.log(b);
}
