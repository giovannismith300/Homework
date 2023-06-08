import React, {useState, useEffect} from 'react';

import '../../App.css';
import BookForm from './BookForm';
import BookTable from './BookTable';
import BookServices from '../../services/bookservices'

import "bootstrap/dist/css/bootstrap.min.css"
import {motion} from 'framer-motion'

export default function Library() {
    const [books, setBooks] = useState([])
  const [bookToEdit, setBookToEdit] = useState(null)

  useEffect(() => {
    if(!books.length){
       onInitialLoad()
      
    }
    
  }, [])

  async function onInitialLoad(){
    try{
      const bookArray = await BookServices.fetchBooks()
      setBooks(bookArray)
    } catch(err){
      console.log(err)
    }
    
  }

  function newBook(book){
    setBookToEdit(null)



    setBooks(books => [...books, book])
    
    

  }
  async function onDeleteButtonClick(book){
    setBooks(
      books.filter((x) =>  x.isbn !== book.isbn)
      
    )
try{
    await BookServices.deleteBook(book)
} catch (err){
  console.log(err)
}
    
  }

  function onEditButtonClick(book){

    BookServices.deleteBook(book)
    setBookToEdit(book)
    
    setBooks(books.filter((x) =>  x.isbn !== book.isbn))

  }
  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <h1 className= "text-center"> Welcome To The Library!</h1>
        <motion.i class="bi bi-truck fa-2x" id="truck"
        initial= {{opacity: 1}}
        animate={{x: [0, 800], opacity: 0}}
        transition={{
          duration: 1.5
        }}></motion.i> 
      </div>

      <BookForm newBook={newBook} bookToEdit = {bookToEdit}></BookForm>
      <BookTable books = {books}
      onDeleteButtonClick= {onDeleteButtonClick}
      onEditButtonClick = {onEditButtonClick}></BookTable>


    </div>
  )
}
