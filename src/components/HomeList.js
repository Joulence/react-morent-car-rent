import CarCard from "./UI/CarCard";
import { useEffect, useState } from "react";

const HomeList = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://react-morent-car-rent-default-rtdb.firebaseio.com/cars.json"
        );

        if (!response.ok) {
          throw new Error("Error occurred during fetching data");
        }

        const resData = await response.json();

        const loadedCars = Object.keys(resData).map((key) => ({
          id: key,
          name: resData[key].name,
          description: resData[key].desc,
          link: resData[key].url,
          fuel: resData[key].fuel,
          people: resData[key].people,
          discount: resData[key].discount,
          type: resData[key].type,
          gear: resData[key].gear,
          price: resData[key].price,
        }));

        setCars(loadedCars);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchCars();
  }, [cars]);

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
    <div className="list">
      {cars.map((car) => (
        <CarCard
          key={car.id}
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
