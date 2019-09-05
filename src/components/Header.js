import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Sparkle from "./Sparkle"
import Resume from "../assets/docs/resume.pdf"

const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-width: 100vw;
  z-index: 100;
  padding: 2rem 3rem 3rem 3rem;
`

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  max-width: ${props => props.theme.layout.maxWidth};
  min-width: ${props => props.theme.layout.minWidth};
  margin: 0 auto;

  font-size: 0.8rem;

  a {
    margin-left: 1.5em;
  }

  @media (max-width: ${props => props.theme.layout.xsBreakpoint}) {
    justify-content: center;
  }
`

const Separator = styled.div`
  width: 0;
  height: 2.5em;
  border-right: 1px solid #f0f0f0;
  margin-left: 1.5em;
`

const Button = styled.a`
  border: 1px solid #000;
  padding: 4px 6px;

  &:hover {
    border: 1px solid ${props => props.theme.colors.accent};
  }
`

const Header = () => {
  return (
    <HeaderSection>
      <Nav>
        <a href="https://github.com/enriikke" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://twitter.com/enriikke" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <Separator />
        <Sparkle>
          <Button href={Resume} target="_blank">
            RESUME
          </Button>
        </Sparkle>
      </Nav>
    </HeaderSection>
  )
}

export default Header
