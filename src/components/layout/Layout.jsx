import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';
import { Link } from './Layout.styled';

export const SharedLayout = () => {
  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '20px 16px',
      }}
    >
      <header
        style={{
          padding: '20px 0',
          borderBottom: 'solid 1px grey',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
