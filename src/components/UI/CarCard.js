import styles from "./CarCard.module.css";
import gasImage from "../../assets/images/icons/gas.svg";
import carImage from "../../assets/images/icons/car.svg";
import peopleImage from "../../assets/images/icons/people.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const CarCard = (props) => {
  return (
    <div>
      <button>heart</button>
      <div>
        <span>{props.name}</span>
        <span>{props.type}</span>
      </div>
      <img src={props.img} alt={props.name} />
      <div>
        <div>
          <img src={gasImage} alt="gas" />
          <span>{props.fuel}L</span>
        </div>

        <div>
          <img src={carImage} alt="car" />
          <span>{props.gear}</span>
        </div>

        <div>
          <img src={peopleImage} alt="people" />
          <span>{props.people}</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            ${props.price} / <span>day</span>
          </div>
          {typeof props.discount === "number" && <div>{props.discount}</div>}
        </div>
        <Link to={props.linkToCar}>Rent Now</Link>
      </div>
    </div>
  );
};

export default CarCard;
