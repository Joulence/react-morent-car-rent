import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-wrapper"]}>
          <div className={styles["header__menu"]}>
            <Logo />
            <div className={styles["header__menu-search"]}>
              <input placeholder="Search something here" type="text" />
            </div>
          </div>
          <div className={styles["header__buttons"]}>
            <Link to={"favourites"}>
              <img src="./images/fav.svg" alt="favourites" />
            </Link>
            <Link to={"notifications"}>
              <img src="./images/notification.svg" alt="notifications" />
            </Link>
            <Link to={"settings"}>
              <img src="./images/settings.svg" alt="settings" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
