import {db} from '../firebase/firebase'
import {doc, collection, addDoc, setDoc, deleteDoc, query, getDocs} from 'firebase/firestore'
import Book from '../models/Book'

class BookServices{
    constructor(){
        this.collection = 'books'
    }

     async fetchBooks(){
        const collectionRef = collection(db, this.collection)

        const q = query(collectionRef)
        const querySnapshot = await getDocs(q)

        const books = []

        querySnapshot.forEach((doc)=>{
            const data = doc.data()
            const book = new Book (data.title, data.author, data.isbn, data.userId)

            books.push(book)
            
        })
        
        return books

    }

    async deleteBook(book){

        await deleteDoc(doc(db, this.collection, book.isbn))


    }


    async addBook(book){
        await setDoc(doc(db, this.collection, book.isbn), {
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            userId: book.userId
            
        })
        
        
    }






}

const service = new BookServices()

export default service