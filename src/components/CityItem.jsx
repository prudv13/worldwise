import React from 'react'
import styles from './CityItem.module.css'
import { formatDateWithoutWeek } from '../utils/formatdate';
import { Link } from 'react-router-dom';
import { useCities } from '../context/CitiesContext';

const CityItem = ({city}) => {
  const {currentCity} = useCities()
  const {cityName, date, id, position} = city;

  return (
    <li>
      <Link 
        className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`} 
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDateWithoutWeek(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}

export default CityItem;