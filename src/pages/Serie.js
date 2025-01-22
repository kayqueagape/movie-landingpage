import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Serie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [categories] = useState({
    'Melhores de Ação': [],
    'Melhores de Comédia': [],
    'Melhores de Drama': [],
    'Melhores de Ficção Científica': [],
    'Melhores de Terror': [],
    'Melhores de Romance': [],
    'Melhores de Animação': [],
    'Melhores de Documentário': [],
    'Melhores de Suspense': [],
    'Melhores de Fantasia': [],
    'Melhores de Aventura': [],
    'Melhores de Musical': [],
    'Melhores de Faroeste': [],
    'Melhores de Crime': []
  });

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 2) {
      try {
        const response = await axios.get(`http://localhost:3001/api/movies?q=${event.target.value}&verbose=1`);
        if (response.data && response.data.similar && response.data.similar.results) {
          setMovies(response.data.similar.results);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search for movies..." />
      <div>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.name}>
                <Link to={`/filme/${movie.name}`} target="_blank">{movie.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          //retorno da  api
          <p>return api</p>
        )}
      </div>
      <div className="grid-container">
        {Object.keys(categories).map((category) => (
          <div key={category} className="grid-item">
            <h3>{category}</h3>
            <ul>
              {categories[category].map((movie) => (
                <li key={movie.name}>{movie.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Serie;
