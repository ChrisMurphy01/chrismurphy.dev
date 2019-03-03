import React from 'react'
import Header from '@component/Header'
import Footer from '@component/Footer'
import styles from './styles.scss'

export default (Page, color) => class DefaultPage extends React.Component {
  render() {
    return (
      <div className={`${styles["container"]} ${color}`}>
        <Header />
        <main className="content">
          <Page />
        </main>
        <Footer />
      </div>
    )
  }
}
