import BannerCard from "./UI/BannerCard";
import bannerCarFirst from "../assets/images/banners/banner1.png";
import bannerCarSecond from "../assets/images/banners/banner2.png";
import styles from "./HomeBanners.module.css";

const HomeBanners = () => {
  return (
    <div className={styles.banners}>
      <BannerCard
        title="The Best Platform for Car Rental"
        text="Ease of doing a car rental safely and reliably. Of course at a low price."
        img={bannerCarFirst}
        isLink={true}
        link="cars/car1"
      />

      <BannerCard
        title="Easy way to rent a car at a low price"
        text="Providing cheap car rental services and safe and comfortable facilities."
        img={bannerCarSecond}
        isLink={true}
        link="cars/car2"
        dark={true}
      />
    </div>
  );
};

export default HomeBanners;
