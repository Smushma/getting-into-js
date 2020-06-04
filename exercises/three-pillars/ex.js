class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
	
	function addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	function printFavoriteBooks() {
		console.log(`Favorite Books: ${this.favoriteBooks.length}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}

function loadBooks(bookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function callAddFavBook(bookNames) {
		for (let book of bookNames) {
			bookshelf.addFavoriteBook(book);
		}
		bookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

var testBookshelf = new Bookshelf();
loadBooks(testBookshelf);
// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
