import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import { InverseLink } from './Link';

const Container = styled.section`
  padding: 2em 0;
  background-color: ${props => props.theme.colors.secondaryDark};
  width: 100%;
`;

const Heading = styled.h4`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.font.thin};
  font-size: 0.7em;
  text-align: center;
  margin: 0;
`;

const BuiltWithLove = () => (
  <Container>
    <Heading>
      Built with <Emoji label="love" src="❤️" /> by
      <InverseLink href="#" target="_blank"> @enriikke</InverseLink>
    </Heading>
  </Container>
)

export default BuiltWithLove;
