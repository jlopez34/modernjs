class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a src="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlertAndSuccess(message, success) {
        //Create div
        const div = document.createElement('div');
        //Add classes    
        if (success) {
            div.className = 'alert success';
        } else {
            div.className = 'alert error';
        }
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#book-form');
        // Insert Div
        container.insertBefore(div, form);
        // Timeout after 3sec 
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }


    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    validateField() {
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        if (title === '' || author === '' || isbn === '') {
            return false;
        }

        return true;
    }

}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();

        books.forEach(book => {
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }


    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index) {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);



//Event Listener add Book
document.getElementById('book-form').addEventListener('submit', function (e) {
    //Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    //Validate
    if (ui.validateField()) {
        // Add book to list
        ui.addBookToList(book);

        // Add Local Store book
        Store.addBook(book);

        // Clear fields
        ui.clearFields();

        ui.showAlertAndSuccess('Book added successfully', true);
    } else {
        ui.showAlertAndSuccess('Please fill in all fields', false);
    }

    e.preventDefault();
});


//Event Listener Delete Book
document.getElementById('book-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UI();

    // Revome from UI
    ui.deleteBook(e.target);

    // Revome from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //Show alerr
    ui.showAlertAndSuccess('Book deleted! successfully', true);

    e.preventDefault();
});
