import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AboutSearch = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/search/movies?q=${id}`);
        if (response.data && response.data.similar && response.data.similar.info) {
          const movieInfo = response.data.similar.info.find((item) => item.name === id && item.type === 'movie');
          setMovie(movieInfo);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{movie.name}</h2>
      {movie.wTeaser && <p>{movie.wTeaser}</p>}
      {movie.wUrl && <a href={movie.wUrl} target="_blank" rel="noopener noreferrer">Wikipedia</a>}
      {movie.yUrl && <a href={movie.yUrl} target="_blank" rel="noopener noreferrer">YouTube</a>}
      {movie.yID && <p>YouTube ID: {movie.yID}</p>}
    </div>
  );
};

export default AboutSearch;
