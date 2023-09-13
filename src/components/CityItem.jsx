import React from 'react'
import styles from './CityItem.module.css'
import { formatDateWithoutWeek } from '../utils/formatdate';

const CityItem = ({city}) => {
    const {cityName, date} = city;
  return (
    <li className={styles.cityItem}>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDateWithoutWeek(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
    </li>
  )
}

export default CityItem;