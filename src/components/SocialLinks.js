import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Container = styled.section`
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  margin: 0 0.5em;
  font-size: 2.2em;

  transition: color 0.5s;
  color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const SocialLinks = () => (
  <Container>
    <Link href="https://github.com/enriikke" target="_blank">
      <FontAwesome name="github" />
    </Link>

    <Link href="https://twitter.com/enriikke" target="_blank">
      <FontAwesome name="twitter" />
    </Link>

    <Link href="mailto:enrique@chiibo.com" target="_blank">
      <FontAwesome name="envelope" />
    </Link>
  </Container>
)

export default SocialLinks;
