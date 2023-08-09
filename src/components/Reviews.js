import { useState } from "react";
import styles from "./Reviews.module.scss";
import Stars from "./UI/Stars";
import { useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFullReviews, setShowFullReviews] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://react-morent-car-rent-default-rtdb.firebaseio.com/reviews.json"
        );

        const responseData = await response.json();

        let loadedData = [];

        loadedData = Object.entries(responseData).map(([id, review]) => ({
          id,
          name: review.name,
          job: review.job,
          date: review.date,
          text: review.text,
        }));

        setReviews(loadedData);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        setError("Ooops... Something wrong happened! Try refreshing the page!");
      }
    };
    fetchData();
  }, []);

  const reviewButtonHandler = () => {
    setShowFullReviews(true);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading... Please Wait!</p>;
  }

  return (
    <section className={styles.reviews}>
      <div className={styles["reviews-title"]}>
        <h2>Reviews</h2>
        <span>{reviews.length}</span>
      </div>
      {
        <ul>
          {!showFullReviews
            ? reviews.slice(0, 2).map((review) => (
                <li key={review.id}>
                  <div className={styles["reviews-info"]}>
                    <div className={styles["reviews-info__left"]}>
                      <h3>{review.name}</h3>
                      <span>{review.job}</span>
                    </div>
                    <div className={styles["reviews-info__right"]}>
                      <span>{review.date}</span>
                      <Stars />
                    </div>
                  </div>
                  <div className={styles["reviews-text"]}>{review.text}</div>
                </li>
              ))
            : reviews.slice(0, reviews.length).map((review) => (
                <li key={review.id}>
                  <div className={styles["reviews-info"]}>
                    <div className={styles["reviews-info__left"]}>
                      <h3>{review.name}</h3>
                      <span>{review.job}</span>
                    </div>
                    <div className={styles["reviews-info__right"]}>
                      <span>{review.date}</span>
                      <Stars />
                    </div>
                  </div>
                  <div className={styles["reviews-text"]}>{review.text}</div>
                </li>
              ))}
        </ul>
      }

      {!showFullReviews && (
        <button onClick={reviewButtonHandler}>
          Show All{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00026 11.1996C7.53359 11.1996 7.06692 11.0196 6.71359 10.6663L2.36692 6.31964C2.17359 6.1263 2.17359 5.80631 2.36692 5.61297C2.56026 5.41964 2.88026 5.41964 3.07359 5.61297L7.42026 9.95964C7.74026 10.2796 8.26026 10.2796 8.58026 9.95964L12.9269 5.61297C13.1203 5.41964 13.4403 5.41964 13.6336 5.61297C13.8269 5.80631 13.8269 6.1263 13.6336 6.31964L9.28692 10.6663C8.93359 11.0196 8.46692 11.1996 8.00026 11.1996Z"
              fill="#90A3BF"
              stroke="#90A3BF"
              strokeWidth="0.5"
            />
          </svg>
        </button>
      )}
    </section>
  );
};

export default Reviews;
