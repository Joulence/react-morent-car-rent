import { useEffect, useState } from "react";
import CarCard from "./UI/CarCard";
import styles from "./HomeList.module.css";

const FavouritesList = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const storedFavorites = Object.keys(localStorage).filter((key) =>
      key.startsWith("car")
    );

    const fetchFavoriteCars = async () => {
      const favoriteCarData = await Promise.all(
        storedFavorites.map(async (carId) => {
          const response = await fetch(
            `https://react-morent-car-rent-default-rtdb.firebaseio.com/cars/${carId}.json`
          );
          const carData = await response.json();
          return { ...carData, id: carId };
        })
      );

      setFavoriteCars(favoriteCarData);
    };

    fetchFavoriteCars();
  }, []);

  if (favoriteCars.length === 0 || favoriteCars.every((car) => car === null)) {
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
            img={car.url}
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
