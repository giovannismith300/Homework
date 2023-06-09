import React, {useState, useEffect} from 'react';

import '../../App.css';
import BookForm from './BookForm';
import BookTable from './BookTable';
import BookServices from '../../services/bookservices'

import "bootstrap/dist/css/bootstrap.min.css"
import {motion} from 'framer-motion'

export default function Library(props) {
    const [books, setBooks] = useState([])
  const [bookToEdit, setBookToEdit] = useState(null)
  const [loading, setLoading] = useState(false)
  
 
  useEffect(() => {
    if(!books.length){
       onInitialLoad()
      
    }
    
  }, [])

  async function onInitialLoad(){
    setLoading(true)
    try{
      const bookArray = await BookServices.fetchBooks()
      setBooks(bookArray.filter((book) => book.userId === props.user.uid ))
    } catch(err){
      console.log(err)
    }
    setLoading(false)
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
        <motion.i className="bi bi-truck fa-2x" id="truck"
        initial= {{opacity: 1}}
        animate={{x: [0, 800], opacity: 0}}
        transition={{
          duration: 1.5
        }}></motion.i> 
      </div>

      <BookForm user = {props.user} newBook={newBook} bookToEdit = {bookToEdit}></BookForm>
      <BookTable books = {books}
      onDeleteButtonClick= {onDeleteButtonClick}
      onEditButtonClick = {onEditButtonClick}
      loading = {loading}></BookTable>


    </div>
  )
}
