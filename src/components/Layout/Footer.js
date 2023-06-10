import { Link } from "react-router-dom";
import Logo from "../Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer-wrapper"]}>
          <div className={styles["footer__info"]}>
            <Logo />
            <div className={styles["footer__info-text"]}>
              Our vision is to provide convenience and help increase your sales
              business.
            </div>
          </div>

          <div className={styles["footer__links"]}>
            <div className={styles["footer__links-section"]}>
              <h3>about</h3>
              <ul>
                <li>
                  <Link to="/how-it-works">How it works</Link>
                </li>
                <li>
                  <Link to="/featured">Featured</Link>
                </li>
                <li>
                  <Link to="/partnership">Partnership</Link>
                </li>
                <li>
                  <Link to="/business">Bussines Relation</Link>
                </li>
              </ul>
            </div>

            <div className={styles["footer__links-section"]}>
              <h3>Community</h3>
              <ul>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/podcast">Podcast</Link>
                </li>
                <li>
                  <Link to="/invite">Invite a friend</Link>
                </li>
              </ul>
            </div>

            <div className={styles["footer__links-section"]}>
              <h3>about</h3>
              <ul>
                <li>
                  <Link to="#">Discord</Link>
                </li>
                <li>
                  <Link to="#">Instagram</Link>
                </li>
                <li>
                  <Link to="#">Twitter</Link>
                </li>
                <li>
                  <Link to="#">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles["footer-credits"]}>
          <div className={styles["footer-credits__copyright"]}>
            ©2022 MORENT. All rights reserved
          </div>
          <div className={styles["footer-credits__links"]}>
            <Link to="#">Privacy & Policy</Link>
            <Link to="#">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
