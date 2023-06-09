import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef(null);

  const { data } = useFetch(
    "search",
    "https://react-morent-car-rent-default-rtdb.firebaseio.com/cars.json"
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setIsMenuOpen(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSearchTerm("");
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredCars = data.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a car"
        ref={inputRef}
      />

      {isMenuOpen && filteredCars.length > 0 && (
        <div className={styles["search-cars"]}>
          {filteredCars.map((car) => (
            <Link to={`/cars/${car.id}`} key={car.id} onClick={toggleMenu}>
              <span>{car.name}</span>
              <span>{car.price}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
