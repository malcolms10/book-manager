import BookShow from "./BookShow"

export default function BookList({books, onDelete, onEdit}) {

    const renderedbooks = books.map((book) =>{
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={ onEdit }/>
    })

    return(
        <div className="book-list">{renderedbooks}</div>
    )
}