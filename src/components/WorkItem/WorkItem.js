import React from 'react'
import styles from './styles.scss'
import graze from '@image/graze.jpg'
import bt from '@image/bt.jpg'
import { H3 } from '@element/Heading'
import A from '@element/A'

const WorkItem = (props) => {
  let image

  switch (props.company) {
    case 'graze':
      image = graze
      break
    case 'bt':
      image = bt
      break
    default:
      image = 'https://placekitten.com/404'
  }

  return (
    <section className={styles['work-item']} >
      <div className={styles['work-item__image-wrapper']}>
        <img src={image} className={styles['work-item__image']} />
      </div>
      <div className={styles['work-item__content']}>
        <H3><A to={props.url} target='top'>{props.text}</A></H3>
        {props.children}
      </div>
    </section>
  )
}

export default WorkItem
