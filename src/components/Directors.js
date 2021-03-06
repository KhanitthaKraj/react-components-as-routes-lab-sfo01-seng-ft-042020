import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d) => (
        <div className="director">
          <h3>Name: {d.name}</h3>
          <p>Movies:</p>
          <ul> {d.movies.map((m) => <li>{m}</li>)} </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
