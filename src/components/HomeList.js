import CarCard from "./UI/CarCard";
import styles from "./HomeList.module.css";
import useFetch from "../hooks/use-fetch";

const HomeList = () => {
  const { data, isLoading, httpError } = useFetch("", "https://react-morent-car-rent-default-rtdb.firebaseio.com/cars.json");

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div className={styles.list}>
      {data.map((car) => (
        <CarCard
          key={car.id}
          id={car.id}
          name={car.name}
          type={car.type}
          img={car.link}
          fuel={car.fuel}
          gear={car.gear}
          people={car.people}
          price={car.price}
          discount={car.discount}
          linkToCar={`cars/${car.id}`}
        />
      ))}
    </div>
  );
};

export default HomeList;
