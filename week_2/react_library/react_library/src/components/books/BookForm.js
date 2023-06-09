import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from 'react';
import Book from "../../models/Book";
import BookServices from '../../services/bookservices'
import 'bootstrap-icons/font/bootstrap-icons.css'; 





function BookForm(props){

    const[title, setTitle] = useState("")
    const[author, setAuthor] = useState("")
    const[isbn, setISBN] = useState("")
    const button = <button className="btn btn-outline-primary btn-lg btn-block"> {props.bookToEdit ? "Update" : "Add Book"}</button>

    async function formSubmit(e){
        e.preventDefault()
        const book = new Book(title, author, isbn, props.user.uid)
        
        
        props.newBook(book)
        
        
        
        setTitle("")
        setAuthor('')
        setISBN('')

        
        await BookServices.addBook(book)
        
        

    }

    useEffect(() => {
        console.log("hello")
        if(props.bookToEdit){
            setTitle(props.bookToEdit.title);
            setAuthor(props.bookToEdit.author);
            setISBN(props.bookToEdit.isbn)
        }
    }, [props.bookToEdit]);

    
    

    return (
        <>
         <form onSubmit = {formSubmit}>
                <div className="mb-3">
                    <label className = "form-label">Title</label>
                    <input id="title-input" type="text"  placeholder="Enter Your Title Here!" className="form-control "
                    onChange = {(e) => setTitle(e.target.value)}
                    value = {title}/>
                </div>

                <div className="mb-3">
                    <label className = "form-label">Author</label>
                    <input id="author-input" type="text" className="form-control " placeholder="Enter Your Author Here!"
                    onChange = {(e) => setAuthor(e.target.value)}
                    value = {author}/>
                </div>

                <div className="mb-3">
                    <label className ="form-label">IBSN</label>
                    <input id="isbn-input" type="text"  placeholder="Enter Your ISBN Here!" className="form-control"
                    onChange = {(e) => setISBN(e.target.value)} 
                    value = {isbn}/>
                </div>

                <div className="d-flex justify-content-center">
                    {button}
                </div>
         </form>
        </>

    );
}

export default BookForm