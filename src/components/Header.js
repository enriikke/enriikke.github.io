import React from 'react'
import styled from 'styled-components'
import { Container } from './System'
import SocialLinks from './SocialLinks'
import DarkModeToggle from './DarkModeToggle'

const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Separator = styled.div`
  width: 0;
  height: 2.5em;
  border-right: 1px solid #f0f0f0;
  margin: 0 1.5em;
  .dark-mode & {
    border-right: 1px solid ${props => props.theme.colors.novaGrey};
  }
`

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Nav />
        <Nav>
          <SocialLinks />
          <Separator />
          <DarkModeToggle />
        </Nav>
      </Container>
    </HeaderSection>
  )
}

export default Header