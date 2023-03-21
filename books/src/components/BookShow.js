import { useState } from "react"
import BookEdit from "./BookEdit"

export default function BookShow({book, onDelete, onEdit}) {

    const [BookShow,setBookShow] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setBookShow(!BookShow)
    }

    const handleSubmit = (id, newTitle) => {
        onEdit(id, newTitle)
        setBookShow(false)
    }

    let content = <h3>{book.title}</h3>
    if (BookShow) {
        content = <BookEdit book={book} onSubmit={ handleSubmit }></BookEdit>
    }

    return(
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}