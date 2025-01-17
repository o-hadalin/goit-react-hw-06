import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchBox;
