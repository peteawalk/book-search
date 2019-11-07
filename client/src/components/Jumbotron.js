import React from 'react';

function Jumbotron() {
  return (
    <div className='jumbotron text-center bg-dark'>
      <h1>Google Books Search</h1>
        <p>Search and Save Books. Built with React.</p>
        <button className="jumboButtons">Search</button>
        <button className="jumboButtons">Saved</button>
    </div>
  );
}

export default Jumbotron;