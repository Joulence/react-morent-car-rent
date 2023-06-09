import { Link } from "react-router-dom";
import styles from "./BannerCard.module.css";

const BannerCard = (props) => {
  const darkTheme = `${styles.banner} ${styles.dark}`;
  const theme = `${styles.banner} ${props.dark ? darkTheme : ""}`;
  return (
    <div className={theme}>
      <h3>{props.title}</h3>
      <div className={styles["banner-text"]}>{props.text}</div>
      {props.isLink && <Link to={props.link}>Rental car</Link>}
      <div className={styles["banner-img"]}>
        <img src={props.img} alt="banner-car" />
      </div>
    </div>
  );
};

export default BannerCard;
