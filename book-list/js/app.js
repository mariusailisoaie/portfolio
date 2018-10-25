class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  };
}

class UI {
  addBookToList(book) {
    const tableBody = document.querySelector('#table-content');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    tableBody.appendChild(row);
  }

  deleteBookFromList(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
      this.showAllertMessage('Book removed!', 'success');
    }
  }

  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  showAllertMessage(message, className) {
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    const alertDiv = document.createElement('div');
    alertDiv.className = className;
    alertDiv.appendChild(document.createTextNode(message));
    container.insertBefore(alertDiv, form);

    setTimeout(function () {
      alertDiv.remove();
    }, 3000);

  }
}

class Store {
  static getBooksFromLS() {
    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBooksToLS(book) {
    const books = this.getBooksFromLS();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = this.getBooksFromLS();
    const ui = new UI();

    books.forEach(function (book) {
      ui.addBookToList(book);
    });
  }

  static removeBooksFromLS(isbn) {
    const books = this.getBooksFromLS();
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks());

document.querySelector('#book-form').addEventListener('submit', function (e) {
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  const isbnInput = document.querySelector('#isbn').value;

  const book = new Book(titleInput, authorInput, isbnInput);

  const ui = new UI();

  if (titleInput === '' || authorInput === '' || isbnInput === '') {
    ui.showAllertMessage('Please fill out all fields', 'error');
  } else {
    ui.addBookToList(book);
    Store.addBooksToLS(book);
    ui.showAllertMessage('Book added!', 'success');
    ui.clearFields();
  }

  e.preventDefault();
});

document.querySelector('#table-content').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBookFromList(e.target);
  Store.removeBooksFromLS(e.target.parentElement.previousElementSibling.textContent);
  e.preventDefault();
});