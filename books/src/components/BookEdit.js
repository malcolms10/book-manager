import { useState } from "react"

export default function BookEdit({book, onSubmit}) {

    const [value,setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, value)

    }

    return(
        <>
            <form onSubmit={handleSubmit} className="book-edit">
                <label>Title</label>
                <input className="input" placeholder={book.title} onChange={handleChange}/>
                <button className="button is-primary">Save</button>
            </form>
        </>
    )
}