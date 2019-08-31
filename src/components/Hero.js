import React from "react"
import styled from "styled-components"
import { FancyLink } from "./System"

const HeroSection = styled.section`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  max-width: 1440px;
  min-width: 350px;
  margin: 0 auto;
  padding-top: 7em;
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 5em;
  overflow-x: scroll;

  p {
    font-weight: ${props => props.theme.font.thin};
    line-height: 1.5em;
    max-width: 800px;
    color: #444452;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`

const BigText = styled.p`
  font-size: 2em;
`

const RegText = styled.p`
  font-size: 1.2em;
`

const Hero = () => (
  <HeroSection>
    <BigText>
      👋 Hola! I'm <strong>Enrique</strong>.
    </BigText>
    <BigText>
      A software engineer specializing in building high-quality web applications
      and finding ways to augment them with machine learning.
    </BigText>

    <RegText>
      I'm available for limited freelance work!
      <br />
      👉{" "}
      <FancyLink href="mailto:enriikke@gmail.com">enriikke@gmail.com</FancyLink>
    </RegText>
  </HeroSection>
)

export default Hero
