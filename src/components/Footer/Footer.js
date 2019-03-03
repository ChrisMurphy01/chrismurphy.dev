import React from 'react'
import styles from './styles.scss'
import Wrapper from '@component/Wrapper'
import A from '@element/A'

const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper wide>
      <p>
        Contact<br />
        <A to='mailto:chrismurphy01@gmail.com' type="light">chrismurphy01@gmail.com</A><br />
      </p>
      <p>
        I also take photographs<br />
        <A to='https://www.chrismurphy.photography' type="light" target="top">https://www.chrismurphy.photography</A>
      </p>
    </Wrapper>
  </footer>
)

export default Footer
