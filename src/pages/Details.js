import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import CarDetail from "../components/CarDetail";
import Reviews from "../components/Reviews";

const DetailsPage = () => {
  const params = useParams();
  const id = params.carId;
  const { data, isLoading, httpError } = useFetch(
    "description",
    `https://react-morent-car-rent-default-rtdb.firebaseio.com/cars/${id}.json`
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
        id={id}
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
      <Reviews />
    </div>
  );
};

export default DetailsPage;
