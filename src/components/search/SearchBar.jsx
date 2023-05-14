import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

const SearchForm = ({ onSubmit, children }) => (
  <form
    style={{
      maxWidth: '300px',
      padding: '4px',
    }}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

const SearchInput = () => (
  <input
    type="text"
    name="movieName"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="May contain only letters, apostrophe, dash and spaces. For example moon"
    required
    autoComplete="off"
    autoFocus
    placeholder="Search movie..."
  />
);

export const SearchBar = ({ onSubmit }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'inherit',
          width: '30px',
          height: '30px',
          border: '0',
          marginRight: '4px',
          marginLeft: '4px',
          cursor: 'pointer',
          outline: 'none',
        }}
        type="submit"
        aria-label="search button"
      >
        <BsSearch />
      </button>
    </SearchForm>
  </div>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
