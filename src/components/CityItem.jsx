import React from 'react'
import styles from './CityItem.module.css'
import { formatDateWithoutWeek } from '../utils/formatdate';
import { Link } from 'react-router-dom';

const CityItem = ({city}) => {
    const {cityName, date, id, position} = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDateWithoutWeek(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}

export default CityItem;