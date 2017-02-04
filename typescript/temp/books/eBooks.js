"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var books_1 = require("./books");
var EBooks = (function (_super) {
    __extends(EBooks, _super);
    function EBooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EBooks;
}(books_1.Books));
exports.EBooks = EBooks;
