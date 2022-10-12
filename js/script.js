let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook
}

function displayBooks () {
  myLibrary.forEach((book) => {
    addBookToDisplay(book);
  })
}

function addBookToDisplay(book) {
  const booksContainer = document.querySelector(".books");
  const template = document.getElementById("book-template");
  let newCard = template.content.firstElementChild.cloneNode(true);

  newCard.querySelector("#title").textContent = book.title;
  newCard.querySelector("#author").textContent = `Written by ${book.author}`;
  newCard.querySelector("#pages").textContent = `${book.pages} pages`;
  newCard.querySelector("#read").textContent = (book.read ? "Read" : "Not Read");

  let index = myLibrary.findIndex((entry) => {
    return entry == book;
  });

  newCard.dataset.index = index
  console.log(newCard);

  booksContainer.appendChild(newCard);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 234, true);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 260, true);
addBookToLibrary("Dune", "Frank Herbert", 652, true);
displayBooks();

function showForm() {
  const form = document.querySelector(".new-book-form");
  const button = document.getElementById("new-book-button");

  form.classList.remove("hidden");
  button.className = "hidden";
}


// Form script
const form = document.querySelector(".new-book-form");
form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  let newBookTitle = document.querySelector("#new-book-title").value;
  let newBookAuthor = document.querySelector("#new-book-author").value;
  let newBookPages = document.querySelector("#new-book-pages").value;
  let newBookRead = document.querySelector("#new-book-read").value

  const newBook = addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookRead);
  
  addBookToDisplay(newBook);

  form.reset();
  form.classList.add("hidden");

  const button = document.getElementById("new-book-button");
  button.className = "";
});

