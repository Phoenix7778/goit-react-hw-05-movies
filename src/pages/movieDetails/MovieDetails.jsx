import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { getMovieDetails } from '../../api/Api';
import { Button, LinkBack } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);
  return (
    <div>
      <Button type="button">
        <LinkBack to={location.state?.from ?? '/'}>
          <HiArrowNarrowLeft size={16} />
          Go back
        </LinkBack>
      </Button>
      <div
        style={{
          display: 'flex',
          padding: '20px',
          borderBottom: 'solid 1px grey',
        }}
      >
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
        <div
          style={{
            padding: '20px 40px',
          }}
        >
          <h2
            style={{
              margin: '0',
            }}
          >
            {original_title}
          </h2>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              padding: '0',
              gap: '16px',
            }}
          >
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div
        style={{
          padding: '20px',
          borderBottom: 'solid 1px grey',
          marginBottom: '30px',
        }}
      >
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            {' '}
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
