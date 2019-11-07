import React from "react";

function Results({title, googleId, author, description, image, link, buttonIcon, saveBook}) {
  return (
    <div className="book-result">
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <img className="image" src={image} alt="cover art" />
      <p className="description">{description}</p>
      <div className="btn-panel">
        <a className="link btn btn-primary" href={link} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-eye"></i>
        </a>
        <div className="save-btn btn btn-primary" onClick={() => saveBook(title, googleId, author, description, image, link)}>
          <i className={buttonIcon}></i>
        </div>
      </div>
    </div>
  );
}

export default Results;