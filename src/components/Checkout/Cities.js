import { Fragment } from "react";

const Cities = () => {
  const cities = [
    "Kyiv",
    "Kharkiv",
    "Odesa",
    "Dnipro",
    "Donetsk",
    "Zaporizhzhia",
    "Lviv",
    "Kryvyi Rih",
    "Sevastopol",
    "Mykolaiv",
    "Mariupol",
    "Luhansk",
    "Vinnytsia",
    "Makiivka",
    "Simferopol",
    "Poltava",
    "Chernihiv",
    "Kherson",
    "Cherkasy",
    "Khmelnytskyi",
    "Chernivtsi",
    "Sumy",
    "Zhytomyr",
    "Horlivka",
    "Rivne",
    "Ivano-Frankivsk",
    "Kamianske",
    "Kropyvnytskyi",
    "Ternopil",
    "Kremenchuk",
    "Lutsk",
  ];
  const options = cities.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ));
  return <Fragment>{options}</Fragment>;
};

export default Cities;
