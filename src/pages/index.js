import React from "react"
import styled from 'styled-components';
import { Heading } from 'rebass';
import Layout from "../components/Layout"

// const SectionContainer = styled.div`
//   display: flex;
//   margin: auto;
//   flex: 0 1 auto;
//   flex-direction: column;
//   justify-content: center;
//   padding: 5em 1em;
//   scroll-behavior: smooth;
// `;


// const SectionContainer = styled.main`
//   min-width: 100vw;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 1em 5em;
//   scroll-behavior: smooth;
// `;
//
// const MainHeading = styled.h1`
//   font-size: 7vw;
//   color: black;
// `;


const SectionContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 55vh;
`;

const Introduction = styled.div``;

const IntroTitle = styled.h1`
`;

const IntroSubTitle = styled.h2`
  color: #5e5e5e;
  font-weight: 300;
`;

const SpaceInvader = styled.div``;


const IndexPage = () => (
  <Layout>
    <SectionContainer>
      <Introduction>
        <IntroTitle>Hey, I'm Enrique.</IntroTitle>
        <IntroSubTitle>I'm a software engineer</IntroSubTitle>
      </Introduction>

      <SpaceInvader>YO</SpaceInvader>
    </SectionContainer>
  </Layout>
)

export default IndexPage



// <p>
//         <span role="img" aria-label="love">❤️</span>
//         <span role="img" aria-label="death">💀</span>
//         <span role="img" aria-label="robots">🤖</span>
//       </p>
