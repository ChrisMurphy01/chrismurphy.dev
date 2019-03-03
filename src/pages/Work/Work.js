import React from 'react'
import defaultPage from '@layout/default'
import { H2 } from '@element/Heading'
import Wrapper from '@component/Wrapper'
import Text from '@component/Text'
import WorkItem from '@component/WorkItem'
import A from '@element/A'
import { scrollTop } from '@util/helpers'

class Work extends React.PureComponent {
  componentDidMount() {
    scrollTop()
  }

  render() {
    return (
      <Wrapper wide>
        <H2>work</H2>
        <Text>
          <p>
            A couple of projects I've worked on in the last couple of years.
          </p>
          <p>
            For a more detailed work history have a look at <A to='https://www.linkedin.com/in/chris-murphy-brighton/' type='linkedin' target='top'>LinkedIn</A>
            or my <A to='https://docs.google.com/document/d/1tBrFPKsd45xeNbXgPHPeHfNTzLp27dJ3ak5vnyuS0tQ/edit?usp=sharing' target='top'>CV</A>.
          </p>
        </Text>

        <WorkItem
          company='graze'
          url='https://graze.com'
          text='graze'>
          <p>
            Implemented the rebrand of the website &#43; style guide.<br />
            Replatformed onto React, documented in Storybook and tested with Jest.<br />
            Replatformed onto Shopify.<br />
          </p>
        </WorkItem>

        <WorkItem
          company='bt'
          url='https://www.bt.com/mobile'
          text='BT'>
          <p>
            Development of the Mobile and SIM card site.
            A UI of note is the complex product selection, with combinations of phone SIMs and offers. React based.<br />
          </p>
        </WorkItem>

      </Wrapper >
    )
  }
}

export default defaultPage(Work, 'green')
