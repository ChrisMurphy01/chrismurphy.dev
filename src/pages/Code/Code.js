import React from 'react'
import styles from './styles.scss'
import defaultPage from '@layout/default'
import Wrapper from '@component/Wrapper'
import actionShot from '@image/chris-in-the-office_600.jpg'
import { H2 } from '@element/Heading'
import Text from '@component/Text'
import A from '@element/A'
import { scrollTop } from '@util/helpers'

class Code extends React.PureComponent {
  componentDidMount() {
    scrollTop()
  }

  render() {
    return (
      <Wrapper>
        <figure className={styles.figure}>
          <div className={styles["action-shot__wrapper"]}>
            <img src={actionShot} className={styles["action-shot"]} alt="chris murphy action shot" />
            <figcaption className={styles.caption}>action shot!</figcaption>
          </div>
        </figure>
        <H2>code</H2>
        <Text>
          <p>
            I take a similar approach to code as I do to the finished product,
            creating a great user experience: performant, accessible, organised,
            well-structured with separated concerns; DRY and maintainable - for me, future me and everyone else.
          </p>
          <p>
            If you're technical, the best way to see how I work is to have a look at how I built this site.<br />
            You can view the code on <A to="https://github.com/ChrisMurphy01/chrismurphy.me" target="top" type="github">GitHub</A>
          </p>

          Expect to find:
          <ul>
            <li>A well structured codebase</li>
            <li>Semantic, accessible markup</li>
            <li>React</li>
            <li>scss/postcss</li>
            <li>ES6+</li>
            <li>Basic routing</li>
            <li>Use of HOC's for page templates</li>
            <li>Use of state in the Nav component</li>
          </ul>

        </Text>
      </Wrapper>
    )
  }
}

export default defaultPage(Code, 'teal')
