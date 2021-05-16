import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex } from 'rebass'
import styled, { ThemeConsumer } from  'styled-components'
import { H1 } from '../Heading'
import { SearchButton } from '../Button'
import { Section } from '../Section' 

//color grey   ${({ theme }) => theme.variants.header.primary.backgroundColor}

const Outer = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`
    
 const Inner = styled.div`
  margin: 0px auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
 `

const StyledLink = styled(Link)`
  color: #3333339c;
  text-decoration: none;
  font-size: 2rem;
  font-family: revert;
  font-weight: bolder;
  margin: 0 10px;
  &:visited {
    color: #3333339c;
  }
  &:hover {
    color: #0f181b;
  }
`

const Image = styled.img`
  margin: 0;
`
const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
`

const MediaQuery = styled.div`
  display; none;

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
            <MediaQuery>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
              <StyledLink to="/photos/">Photos</StyledLink>
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
