import React from 'react';
import BookContainer from './BookContainer';

const BookList = (props) => {
    return (
        <div className="container">
                {
                    props.books.map((book, i) => {
                        return <BookContainer
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            published={book.volumeInfo.publishedDate}
                        />
                    })
                }
        </div>
    )
}

export default BookList;