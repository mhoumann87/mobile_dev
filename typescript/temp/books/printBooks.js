"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var books_1 = require("./books");
var PrintBooks = (function (_super) {
    __extends(PrintBooks, _super);
    function PrintBooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrintBooks;
}(books_1.Books));
exports.PrintBooks = PrintBooks;
