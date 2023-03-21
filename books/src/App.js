import { useEffect, useState } from "react"
import axios from "axios";
import BookCreate from "./components/Bookcreate";
import BookList from "./components/BookList"

export default function App(params) {

    const [books,setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        
        setBooks(response.data)
    }

    useEffect( ()=> {
        fetchBooks();
    },[])

    const createBook = async (title)=> {
        const response = await axios.post('http://localhost:3001/books',{
            title,
        })

        const updateBook = [...books,response.data]
        setBooks(updateBook)

    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updateBook = books.filter((book)=>{
            return id!==book.id
        })

        setBooks(updateBook);
    }

    const editBook = async (id, newTitle) => { 

        const response = await axios.put(`http://localhost:3001/books/${id}`,
            { title:newTitle })
    
        const updateBook = books.map((Book) => { 
            if (id===Book.id) {
                return { ...Book, ...response.data}
            }

            return Book
            
        })
        setBooks(updateBook);
    }

    return(
        <>
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBook} onEdit={ editBook }/>
            <BookCreate onCreate={createBook}></BookCreate>
        </div>
        </>
        
    )
}