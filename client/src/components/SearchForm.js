import React from "react";

function SearchForm(props) {
  return (
    <div>
      <form onSubmit={props.searchBooks} 
      className="book-search">
        <div className="form-group">
          <label htmlFor="search-field">Book Search</label>
          <input
            onChange={props.onChange} 
            name={props.name}
            value={props.value} type="search" className="form-control"
            placeholder="Enter title or author HERE" />
        </div>
        <button
          onClick={props.onClick}
          className="btn btn-primary btn-group-justified"
          type="submit">
          Search</button>
      </form>
    </div>
  );
}

export default SearchForm;