import React from "react"
import styled from 'styled-components';
import { Heading } from 'rebass';
import Layout from "../components/Layout"

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;




const IndexPage = () => (
  <Layout>
    <SectionContainer>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[5, 6, 8]}
        mb={[3, 4, 5]}
      >
        Hola, I'm Enrique!
      </Heading>

      <Heading
        textAlign="center"
        as="h2"
        color="primary"
        fontSize={[4, 5, 6]}
        mb={[3, 5]}
      >
        I like to build stuff
      </Heading>
    </SectionContainer>
  </Layout>
)

export default IndexPage
