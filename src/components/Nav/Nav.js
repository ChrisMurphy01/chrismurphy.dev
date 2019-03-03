import React from 'react'
import styles from './styles.scss'
import A from '@element/A'


class Nav extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      showMenu: false
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    e.preventDefault()

    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className={`${styles['nav-wrapper']}${this.state.showMenu ? ' visible' : ''}`}>
        <nav className={`${styles.nav}`}>
          <button onClick={this.handleOnClick} className={styles.button} type="button">
            <span className={styles['button--line-1']}></span>
            <span className={styles['button--line-2']}></span>
            <span className={styles['button--line-3']}></span>
          </button>
          <ul className={styles['nav-list']}>
            <li></li>
            <li><A to='/' className={styles['nav-link']}>Home</A></li>
            <li><A to='/code' className={styles['nav-link']}>Code</A></li>
            <li><A to='/work' className={styles['nav-link']}>Work</A></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
