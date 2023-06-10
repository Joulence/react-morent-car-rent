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
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/juizzyboy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/?lang=uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://uk-ua.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
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
            <Link to="/policy">Privacy & Policy</Link>
            <Link to="/terms">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
