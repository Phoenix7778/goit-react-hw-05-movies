import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from './../../api/Api';

export const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCastList(data.cast));
  }, [movieId]);

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-15px',
        padding: '0',
        justifyContent: 'center',
      }}
    >
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <li
              style={{
                width: '150px',
                margin: '15px',
                borderRadius: '4px',
                boxShadow:
                  '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
              }}
              key={id}
            >
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width="100px"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  padding: '5px',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 8px 0',
                    textAlign: 'center',
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    margin: '0',
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Character: {character}
                </p>
              </div>
            </li>
          ))
        : 'No info found'}
    </ul>
  );
};
