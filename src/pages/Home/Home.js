import React from 'react'
import defaultPage from '@layout/default'
import Wrapper from '@component/Wrapper'
import Mugshot from '@component/Mugshot'
import { H2 } from '@element/Heading'
import Text from '@component/Text'
import { scrollTop, yearsDeveloping } from '@util/helpers'

class Home extends React.PureComponent {
  componentDidMount() {
    scrollTop()
  }

  render() {
    return (
      <Wrapper>
        <Mugshot />
        <H2>about</H2>
        <Text>
          I'm a front-end developer living in Brighton &amp; Hove.<br />
          I'm passionate about the web, about user experience and accessibility,
          I’m driven to create performant sites with a great UX and those little finishing touches that make a good experience great.
        </Text>
        <Text>
          My background is largely in the development of eCommerce sites,
          working in teams, collaborating with Designers and Product Owners to create engaging sites.
          In a previous life I designed and made furniture.
          I've been building websites since 2008, part-time, full time for around {yearsDeveloping()} years,
          and began contracting in 2015.
        </Text>
        <Text>
          Recently, I’ve primarily worked with HTML, (S)CSS, JS and React, as well as all the related tooling.
          But over the years I’ve used plethora of templating languages, libraries and frameworks.
        </Text>
      </Wrapper>
    )
  }
}

export default defaultPage(Home, 'orange')
