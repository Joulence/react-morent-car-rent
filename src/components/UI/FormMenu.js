import styles from "./FormMenu.module.css";

const FormMenu = (props) => {
  return (
    <section className={styles.menu}>
      <div className={styles["menu__info"]}>
        <div className={styles["menu__info-title"]}>
          <h2>{props.title}</h2>
          <h3>{props.subTitle}</h3>
        </div>
        <div className={styles["menu__info-step"]}>Step {props.step} of 4</div>
      </div>
      {props.children}
    </section>
  );
};

export default FormMenu;
