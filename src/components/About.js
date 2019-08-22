import React from "react"
import styled from "styled-components"
import { Container, Column } from "./System"
import SpaceInvader from "../components/SpaceInvader"

const AboutSection = styled.section`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding-bottom: 100px;

  h2 {
    margin-bottom: 3rem;
  }

  button {
    margin-top: 1.5rem;
  }
`

const About = () => (
  <AboutSection>
    <Container>
      <Column>
        <h2>About</h2>
        <p>TBD</p>
        <button>Download Resume</button>
      </Column>

      <Column>
        <SpaceInvader />
      </Column>
    </Container>
  </AboutSection>
)

export default About
