import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex } from 'rebass'
import styled, { ThemeConsumer } from  'styled-components'
import { H1 } from '../Heading'
import { SearchButton } from '../Button'
import { Section } from '../Section' 

const Outer = styled.header`
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
`
    
 const Inner = styled.div`
  margin: 0px auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
 `

const StyledLink = styled(Link)`
  color: white;
  textdecoration: none;
  margin: 0 10px;
  &:visited {
    color: white;
  }
  &:hover {
    color: #61dbfb;
  }
`

const Image = styled.img`
  margin: 0;
`
const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
  
`

const MediaQuery = styled.div`
  @media (max-width: 450px;) {
    display: none;
    
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Section flex>
        <Section
          width={1 / 12}
          flex
          flexDirection="column"
          justifyContent="center"
        >
          <ThemeConsumer>
            {theme => <Image src={theme.images.mainHeaderImage} />}
          </ThemeConsumer>
        </Section>
        <Section
          width={11 / 12}
          flex
          flexDirection="column"
          justifyContent="center"
        >
          <Nav>
            <Title>
              <StyledLink to="/">{siteTitle}</StyledLink>
            </Title>
            <MediaQuery>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
              <StyledLink to="/page-2/">Photos</StyledLink>
            </MediaQuery>
            <SearchButton variant="contrast" />
          </Nav>
        </Section>
      </Section>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }