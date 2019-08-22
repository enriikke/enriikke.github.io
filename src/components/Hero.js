import React from "react"
import styled from "styled-components"
import { Container, Column } from "./System"

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  h1 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;

    .dark-mode & {
      color: ${props => props.theme.colors.novaGrey};
    }
  }

  h2 {
    text-align: center;
    font-weight: 400;

    .dark-mode & {
      color: ${props => props.theme.colors.novaGrey};
    }
  }
`

const Hero = () => (
  <HeroSection>
    <Container>
      <Column>
        <h1>
          Enrique
          <br />
          Gonzalez
        </h1>
      </Column>
    </Container>
  </HeroSection>
)

export default Hero
