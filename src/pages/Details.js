import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
// import styles from "./Details.module.css";

const DetailsPage = () => {
  const params = useParams();
  const { data, isLoading, httpError } = useFetch(
    "description",
    `https://react-morent-car-rent-default-rtdb.firebaseio.com/cars/${params.carId}.json`
  );

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

  const { name, description, price, link, fuel, people, discount, type, gear } =
    data;

  return <div className="container">{name}</div>;
};

export default DetailsPage;
