import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 25vh;

  padding-top: 100px;
  -webkit-clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  background-color: ${props => props.theme.colors.secondary};
  background-color: #f2f5f6;
  background-color: #fff;

  color: ${props => props.theme.colors.text};
  margin-top: -100px;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-weight: 400;
  }

  h2 {
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1406px;
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <h2>Footer</h2>
    </Wrapper>
  </Container>
)

export default Footer
