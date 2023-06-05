import React, {useState, useEffect} from 'react';

import './App.css';
import BookForm from './BookForm';
import BookTable from './BookTable';


import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [books, setBooks] = useState([])
  const [bookToEdit, setBookToEdit] = useState(null)

  function newBook(book){
    setBookToEdit(null)
    setBooks(books => [...books, book])
    
    

  }
  function onDeleteButtonClick(book){
    setBooks(
      books.filter((x) =>  x.isbn !== book.isbn)
      
    )
    
  }

  function onEditButtonClick(book){

   
    setBookToEdit(book)
    
    setBooks(books.filter((x) =>  x.isbn !== book.isbn))

  }
  return (
    <div className="App">
      <h1> Library</h1>

      <BookForm newBook={newBook} bookToEdit = {bookToEdit}></BookForm>
      <BookTable books = {books}
      onDeleteButtonClick= {onDeleteButtonClick}
      onEditButtonClick = {onEditButtonClick}></BookTable>


    </div>
  );
}

export default App;
