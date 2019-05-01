import React from "react"
import styled from 'styled-components';
import { Heading } from 'rebass';
import Layout from "../components/Layout"

// TODO: break up components on footer
// TODO: set up grid correctly (use something?)
// TODO: add space invader
// TODO: finish about me section
// TODO: finish links
//
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
