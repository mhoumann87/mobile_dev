class Books {

    title: string;
    price: number;
    author: string;

    constructor(book: string, amount: number, name: string) {

        this.title = book;
        this.price = amount;
        this.author = name;
    }

}

//one book
//let books = new Books("Pippi", 9.99, "Astrid Lindgren");
//console.log(books);

//book array
let inventory: Array<Books> = [];

inventory.push(new Books("Lionheart",11.99,"Astrid Lindgren"));
inventory.push(new Books("Choke",4.99,"Chuck Palahniuk"));
inventory.push(new Books("American Psycho",6.99,"Bret Easton Ellis"));
inventory.push(new Books("Micro Serfs", 2.99, "Douglas Coupland"));
/*
function viewBook(b:Books)
{
    console.log(b.author);
}
*/

for (let b of inventory) {
    console.log(b;
}





