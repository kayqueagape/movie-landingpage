import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { name } = useParams();
  const movie = movies.find((movie) => movie.name === name);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h2>{movie.name}</h2>
      {movie.wTeaser && <p>{movie.wTeaser}</p>}
      {movie.wUrl && <a href={movie.wUrl} target="_blank" rel="noopener noreferrer">Wikipedia</a>}
      {movie.yUrl && <a href={movie.yUrl} target="_blank" rel="noopener noreferrer">YouTube</a>}
      {movie.yID && <p>YouTube ID: {movie.yID}</p>}

      <button id={movie.name}>Adiciona</button>
    </div>
  );
}

export default MovieDetail;
