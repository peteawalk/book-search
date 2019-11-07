import React, { Component } from 'react';
import BookSearch from './BookSearch';
import BookList from './BookList';

class Books extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    } // To update state of application when adding to input box.

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
        console.log(e.target.value);
    }

    searchBooks = (e) => {
        e.preventDefault();
        const axios = require("axios");
        axios.get(`https://www.googleapis.com/books/v1/volumes` , {q: this.state.searchField })
            .then((response) => {
                console.log(response.data.items);
                // this.setState({ books: [...response.data.items] })
                console.log(`status code: ${response.status}`)
            });
        }

    render() {
        return (
            <div>
                <BookSearch 
                // response={this.state}
                searchBooks={this.searchBooks}
                handleSearch={this.handleSearch}/>
                <BookList books={this.state.books}/>
            </div>
        )
    }
}

export default Books;