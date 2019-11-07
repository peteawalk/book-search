import React from 'react';
import './search.css';

const BookSearch = (props) => {
    return (
        <div className="container">
            <div className="search-area">
                <div className="form-group">
                    <form>
                        <small id="helpId" className="form-text text-muted">Book Search</small>
                        <input type="text" onChange={props.handleSearch}
                        className="form-control" name="" id="" aria-describedby="helpId" 
                        placeholder="Search for Author or Title"></input>
                    
                        <div className="text-right">
                            <button onSubmit={props.searchBooks} className="btn btn-primary" type="submit" value="Submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookSearch;