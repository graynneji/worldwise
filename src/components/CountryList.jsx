/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
// import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/citiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  //understand this
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );

  // const { cities, isLoading } = useCities();
  // if (isLoading) return <Spinner />;
  // if (!cities.length)
  //   return (
  //     <Message message="Add your first city by clicking on a city on the map" />
  //   );
  // return (
  //   <ul className={styles.cityList}>
  //     {cities.map((city) => (
  //       <CityItem city={city} key={city.id} />
  //     ))}
  //   </ul>
  // );
}

export default CountryList;
