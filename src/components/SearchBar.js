import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    onSearch(searchItem);
  }, [onSearch, searchItem]);

  return (
    <div className={styles.search}>
      <input
        placeholder="Search something here"
        type="text"
        value={searchItem}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
