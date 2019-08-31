import React from "react"
import styled from "styled-components"
import { Container } from "./System"
import SocialLinks from "./SocialLinks"
import Button from "./Button"
import Resume from "../assets/docs/Resume.pdf"

const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding-top: 3em;
  padding-bottom: 3em;

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding-top: 2em;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding-top: 2em;
  }
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
          <Button href={Resume}>Resume</Button>
        </Nav>
      </Container>
    </HeaderSection>
  )
}

export default Header
