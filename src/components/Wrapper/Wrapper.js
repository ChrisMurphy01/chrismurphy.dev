import React from 'react'
import './styles.scss'

const Wrapper = (props) => (
  <div className={`wrapper${props.wide ? ' wide' : ''}`}>
    {props.children}
  </div>
)

export default Wrapper
