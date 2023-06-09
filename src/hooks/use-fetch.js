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

        let loadedData;

        switch (view) {
          case "search":
            loadedData = Object.keys(responseData).map((key) => ({
              id: key,
              name: responseData[key].name,
              price: responseData[key].price,
            }));
            break;
          case "description":
            loadedData = Object.keys(responseData).map((key) => ({
              id: key,
              name: responseData[key].name,
              description: responseData[key].desc,
              link: responseData[key].url,
              fuel: responseData[key].fuel,
              people: responseData[key].people,
              discount: responseData[key].discount,
              type: responseData[key].type,
              gear: responseData[key].gear,
              price: responseData[key].price,
            }));
            break;
          default:
            loadedData = Object.keys(responseData).map((key) => ({
              id: key,
              name: responseData[key].name,
              link: responseData[key].url,
              fuel: responseData[key].fuel,
              people: responseData[key].people,
              discount: responseData[key].discount,
              type: responseData[key].type,
              gear: responseData[key].gear,
              price: responseData[key].price,
            }));
        }

        setData(loadedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };
    fetchData();
  }, [url, view]);
  return { data, isLoading, httpError };
};

export default useFetch;
