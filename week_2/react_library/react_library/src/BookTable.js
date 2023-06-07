import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from 'react';
import App from "./App";

function BookTable(props){
    //console.log(props.books)
    
    const bookList = props.books.map((book) => {
        return <tr key ={book.isbn} >
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
        
    })




    return(
        <>
        <table className ="table mt-5">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>ISBN</td>
                    <td>Actions</td>
                </tr>

            </thead>
            <tbody id="table-body">
                { bookList }
            </tbody>
            
        </table>


        </>
    )
}

export default BookTable;
