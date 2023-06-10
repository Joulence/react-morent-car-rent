import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import CarDetail from "../components/CarDetail";

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

  const { name, desc, price, url, fuel, people, discount, type, gear } = data;

  return (
    <div className="container">
      <CarDetail
        name={name}
        desc={desc}
        type={type}
        people={people}
        gear={gear}
        fuel={fuel}
        price={price}
        discount={discount}
        url={url}
      />
    </div>
  );
};

export default DetailsPage;
