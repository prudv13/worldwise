import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <p>{country.country}</p>
    </li>
  );
}

export default CountryItem;
