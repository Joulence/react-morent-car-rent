import BannerCard from "../components/UI/BannerCard";
import styles from "./Home.module.css";
import bannerCarFirst from "../assets/images/banners/banner1.png";
import bannerCarSecond from "../assets/images/banners/banner2.png";

const HomePage = () => {
  return (
    <div className="container">
      <div className={styles.banners}>
        <BannerCard
          title="The Best Platform for Car Rental"
          text="Ease of doing a car rental safely and reliably. Of course at a low price."
          img={bannerCarFirst}
        />

        <BannerCard
          title="Easy way to rent a car at a low price"
          text="Providing cheap car rental services and safe and comfortable facilities."
          img={bannerCarSecond}
          dark={true}
        />
      </div>
    </div>
  );
};

export default HomePage;
