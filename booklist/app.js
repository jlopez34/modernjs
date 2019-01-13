//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() { }

//Clear fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

//Validate Fields
UI.prototype.validateField = function () {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        return false;
    }

    return true;
};

// Show Alert and Success
UI.prototype.showAlertAndSuccess = function (msg, success) {
    //Create div
    const div = document.createElement('div');
    //Add classes    
    if (success) {
        div.className = 'alert success';
    } else {
        div.className = 'alert error';
    }
    //Add text
    div.appendChild(document.createTextNode(msg));
    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('#book-form');
    // Insert Div
    container.insertBefore(div, form);
    // Timeout after 3sec 
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
};

// Add Book To List
UI.prototype.addBookToList = function (book) {
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
};

// Delete Book from the list
UI.prototype.deleteBook = function(target){
   if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
};

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

        // Clear fields
        ui.clearFields();

        ui.showAlertAndSuccess('Book added successfully', true);
    } else {
        ui.showAlertAndSuccess('Please fill in all fields', false);
    }

    e.preventDefault();
});


//Event Listener Delete Book
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);
    //Show aler
    ui.showAlertAndSuccess('Book deleted! successfully', true);
    
    e.preventDefault();
})
