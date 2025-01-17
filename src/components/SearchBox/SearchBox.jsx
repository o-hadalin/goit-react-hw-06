import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilterValue } from '../../redux/selectors'; // Селектор для фільтру
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue); // Отримання фільтра

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase())); // Оновлення значення фільтру
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
        value={filter}
        onChange={handleChange}
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBox;
