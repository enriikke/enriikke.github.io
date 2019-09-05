import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/PageLayout"
import Sparkle from "../components/Sparkle"

const Hero = styled.section`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  padding: 15vh 3rem;
`

const Intro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: ${props => props.theme.layout.maxWidth};
  min-width: ${props => props.theme.layout.minWidth};
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    font-weight: ${props => props.theme.font.thin};
    line-height: 1.4em;

    @media (max-width: ${props => props.theme.layout.xsBreakpoint}) {
      font-size: 1.8rem;
    }

    &:first-child {
      margin-top: 2rem;
    }

    &:nth-child(2) {
      max-width: 700px;
    }
  }

  p {
    font-size: 1.2rem;
  }

  a {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.accent};
  }
`

const IndexPage = () => {
  return (
    <PageLayout>
      <Hero>
        <Intro>
          <h1>
            <strong>Enrique Gonzalez</strong>
          </h1>

          <h1>
            Software engineer specialized in building high-quality web
            applications.
          </h1>

          <div>
            <p>
              <strong>Get In Touch</strong>
              <br />
              <Sparkle>
                <a href="mailto:enriikke@gmail.com">enriikke@gmail.com</a>
              </Sparkle>
            </p>
          </div>
        </Intro>
      </Hero>
    </PageLayout>
  )
}

export default IndexPage
