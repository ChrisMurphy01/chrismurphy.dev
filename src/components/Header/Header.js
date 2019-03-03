import React from 'react'
import styles from './styles.scss'
import Wrapper from '@component/Wrapper'
import { H1, H2 } from '@element/Heading'
import Nav from '@component/Nav'

const Header = () => (
  <header className={styles.header}>
    <Wrapper wide>
      <div>
        <H1 className={styles.name}>Chris Murphy</H1>
        <H2 className={styles.job}>front-end dev</H2>
      </div>
      <Nav />
    </Wrapper>
  </header>
)

export default Header
