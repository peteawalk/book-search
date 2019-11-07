import React from 'react';

const BookContainer = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={props.image} alt={props.title} />
                    <div className="desc">
                        <h2>{props.title}</h2>
                        <h3>{props.author}</h3>
                        <p>{props.publishedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookContainer;