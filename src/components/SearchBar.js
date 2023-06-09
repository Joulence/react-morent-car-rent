import { useState } from "react";
import useFetch from "../hooks/use-fetch";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { data } = useFetch("search");

  const filteredCars = data.filter((car) =>
    car.name.trim().toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className={styles.search}>
      <input
        placeholder="Search something here"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isInputFocused && inputValue && filteredCars.length > 0 && (
        <div className={styles["search-cars"]}>
          <ul>
            {filteredCars.map((car) => (
              <Link key={car.id} to={`cars/${car.id}`}>
                <li>
                  <span>{car.name}</span>
                  <span>{car.price}$</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
