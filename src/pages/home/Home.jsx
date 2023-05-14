import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from '../../api/Api';
import { Loader } from '../../components/loader/Loader';
import { MovieLink } from './Home.styled';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h2
        style={{
          marginTop: '40px',
          marginBottom: '0',
          textAlign: 'center',
        }}
      >
        Top Movies for today
      </h2>
      <ul
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          justifyContent: 'center',
          marginRight: 'auto',
          marginLeft: 'auto',
          padding: '0',
        }}
      >
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </div>
  );
};
