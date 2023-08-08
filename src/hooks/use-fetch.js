import { useEffect, useState } from "react";

const useFetch = (view, url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error occurred during fetching data");
        }

        const responseData = await response.json();

        let loadedData = [];

        switch (view) {
          case "home":
            loadedData = Object.entries(responseData).map(([id, car]) => ({
              id,
              name: car.name,
              link: car.url,
              fuel: car.fuel,
              people: car.people,
              discount: car.discount,
              type: car.type,
              gear: car.gear,
              price: car.price,
            }));
            break;
          case "search":
            loadedData = Object.entries(responseData).map(([id, car]) => ({
              id,
              name: car.name,
              price: car.price,
            }));
            break;
          case "description":
            loadedData = responseData;
            break;
          default:
            loadedData = Object.entries(responseData).map(([id, car]) => ({
              id,
              name: car.name,
              link: car.url,
              fuel: car.fuel,
              people: car.people,
              discount: car.discount,
              type: car.type,
              gear: car.gear,
              price: car.price,
            }));
        }

        setData(loadedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError("Ooops... Error happened during the fetch!");
      }
    };

    fetchData();
  }, [url, view]);

  return { data, isLoading, httpError };
};

export default useFetch;
