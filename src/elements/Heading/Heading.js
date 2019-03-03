import React from 'react'
import styles from './styles.scss'

function heading(props, level) {
  const TagName = `h${level}`

  return (
    <TagName className={`${styles[TagName]} ${props.className}`}>
      {props.children}
    </TagName>
  )
}

export const H1 = props => heading(props, 1)
export const H2 = props => heading(props, 2)
export const H3 = props => heading(props, 3)
export const H4 = props => heading(props, 4)
export const H5 = props => heading(props, 5)
export const H6 = props => heading(props, 6)
