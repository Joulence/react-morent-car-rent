import FormMenu from "../UI/FormMenu";
import Cities from "./Cities";
import styles from "./Form.module.css";

const RentalInfo = () => {
  return (
    <FormMenu
      title="Rental Info"
      subTitle="Please select your rental date"
      step={2}
    >
      <div>
        <div className={styles.additional}>Pick - Up</div>
        <div className={styles.menu}>
          <div className={styles.input}>
            <label>Locations</label>
            <select required>
              <option value="default">Select your city</option>
              <Cities />
            </select>
          </div>
          <div className={styles.input}>
            <label>date</label>
            <input placeholder="Select your date" type="date" required />
          </div>
          <div className={styles.input}>
            <label>Time</label>
            <input placeholder="Select your time" type="time" required />
          </div>
        </div>

        <div className={`${styles.additional} ${styles["additional-second"]}`}>
          Drop - Off
        </div>
        <div className={styles.menu}>
          <div className={styles.input}>
            <label>Locations</label>
            <select required>
              <option value="default">Select your city</option>
              <option value="Kyiv">Kyiv</option>
              <option value="Lviv">Lviv</option>
              <option value="Kharkiv">Kharkiv</option>
              <option value="Odesa">Odesa</option>
              <option value="Dnipro">Dnipro</option>
              <option value="Donetsk">Donetsk</option>
              <option value="Zaporizhzhia">Zaporizhzhia</option>
              <option value="Kryvyi Rih">Kryvyi Rih</option>
              <option value="Sevastopol">Sevastopol</option>
              <option value="Mykolaiv">Mykolaiv</option>
              <option value="Mariupol">Mariupol</option>
              <option value="Luhansk">Luhansk</option>
              <option value="Vinnytsia">Vinnytsia</option>
              <option value="Vinnytsia">Vinnytsia</option>
              <option value="Kherson">Kherson</option>
            </select>
          </div>
          <div className={styles.input}>
            <label>date</label>
            <input placeholder="Select your date" type="date" required />
          </div>
          <div className={styles.input}>
            <label>Time</label>
            <input placeholder="Select your time" type="time" required />
          </div>
        </div>
      </div>
    </FormMenu>
  );
};

export default RentalInfo;
