import { useState } from "react";
import useFetch from "../hooks/use-fetch";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const { data } = useFetch("search");

  const filteredCars = data.filter((car) =>
    car.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        placeholder="Search something here"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>
        {inputValue &&
          filteredCars.map((car) => <div key={car.id}>{car.name}</div>)}
      </div>
    </div>
  );
};

export default SearchBar;
