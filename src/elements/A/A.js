import React from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom'

const A = ({ to, children, type, ...props }) => {
  if (/^https?:\/\//.test(to) || /mailto:./.test(to)) {
    return <a className={`${styles[type]}`} href={to} {...props}>{children}</a>
  }

  return (
    <Link className={`${styles[type]}`} to={to} {...props}>
      {children}
    </Link>
  )

}

export default A
