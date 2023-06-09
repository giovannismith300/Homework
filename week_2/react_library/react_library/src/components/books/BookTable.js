import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from 'react';
import App from "../../App";
import Spinner from '../common/Spinner.js'
import "../common/Spinner.css"
function BookTable(props){
    //console.log(props.books)
    
    const bookList = props.books.map((book) => {
        return (
        <tbody>


            <tr key = {book.isbn} >
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                    <button onClick = {() => {
                        props.onDeleteButtonClick(book)
                    }} className="btn btn-outline-danger me-1">
                            
                            <i className="bi bi-trash"></i>

                        </button>

                    <button onClick = {() => props.onEditButtonClick(book)}
                    className="btn btn-outline-warning ms-1">EDIT</button>
                </td>
             </tr>
        </tbody>
        )
        
    })




    return(
        <>
        { props.loading ? (<div className="mt-4 text-center">
            <Spinner id= "spinner"></Spinner>
            </div>) : (
            <table className ="table mt-5">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>ISBN</td>
                        <td>Actions</td>
                    </tr>

                </thead>
                
                
                    { bookList } 
                
                
            
            </table>)
        }
        </>
    )
}

export default BookTable;
