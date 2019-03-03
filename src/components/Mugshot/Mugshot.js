import React from 'react'
import styles from './styles.scss'
import mugshot from '@image/mugshot_400.jpg'


const Mugshot = (props) => (
  <img src={mugshot} className={styles.mugshot} alt="chris murphy mugshot" />
)

export default Mugshot
