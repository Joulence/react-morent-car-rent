import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input placeholder="Search something here" type="text" />
    </div>
  );
};

export default SearchBar;
