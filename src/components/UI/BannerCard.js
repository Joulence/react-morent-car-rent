import { Link } from "react-router-dom";
import styles from "./BannerCard.module.css";

const BannerCard = (props) => {
  const darkTheme = `${styles.banner} ${styles.dark}`;
  const theme = `${styles.banner} ${props.dark ? darkTheme : ""}`;
  return (
    <div className={theme}>
      <h3>{props.title}</h3>
      <div>{props.text}</div>
      <Link to={props.link}>Rental car</Link>
      <img src={props.img} alt="banner-car" />
    </div>
  );
};

export default BannerCard;