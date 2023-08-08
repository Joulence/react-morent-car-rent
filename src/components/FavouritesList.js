import { useEffect, useState } from "react";
import CarCard from "./UI/CarCard";
import styles from "./HomeList.module.css";
import { getFav } from "../utils/favourite-tools";

const FavouritesList = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const storedFavorites = Object.keys(localStorage).filter((key) =>
      key.startsWith("car")
    );

    const favorites = storedFavorites.map((car) => {
      return JSON.parse(getFav(car));
    });

    setFavoriteCars(favorites);
  }, []);

  if (favoriteCars.length === 0 || favoriteCars.every((car) => car == null)) {
    return <p>No favorite cars found.</p>;
  }

  return (
    <div className={styles.list}>
      {favoriteCars.map((car) =>
        car && car.id ? (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            type={car.type}
            img={car.img}
            fuel={car.fuel}
            gear={car.gear}
            people={car.people}
            price={car.price}
            discount={car.discount}
            linkToCar={`/cars/${car.id}`}
            fav={true}
          />
        ) : null
      )}
    </div>
  );
};

export default FavouritesList;
