import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import SpaceInvader from '../components/SpaceInvader';
import SocialLinks from '../components/SocialLinks';

const IntroTitle = styled.h1`
  font-weight: 900;
  font-size: 7em;
`;


const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 1800px;
  margin: 0 auto;
  min-width: 300px;
`;

const Name = styled.h1`
  color: ${props => props.theme.colors.secondary};
  font-size: 5em;
  font-weight: ${props => props.theme.font.bold};
  text-align: center;

  @media (max-width: 800px) {
    font-size: 4em;
  }

  @media (max-width: 500px) {
    font-size: 3em;
  }
`;

const IndexPage = () => (
  <Layout>
    <Main>
      <Name>Enrique<br/>Gonzalez</Name>
      <SocialLinks />
    </Main>
  </Layout>
)

export default IndexPage
