import React from "react"
import styled from 'styled-components';

import { Link } from 'rebass';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 45vh;

  padding: 0 2em;
  padding-top: 100px;
  -webkit-clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  background-color: #101a16;
  background-color: #191a1d;
  color: #fff;

  h1 {
    font-weight: 400;
  }

  h2 {
    color: #5e5e5e;
    font-weight: 300;
  }
`;

// const IconLink = styled(Link)`
//   transition: color 0.5s;
//   color: ${props => props.theme.colors.primary};
//
//   &:hover {
//     color: ${props => props.theme.colors.primaryLight};
//   }
// `;

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: #5e5e5e;

  &:hover {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1406px;
`;

const GetInTouch = styled.div`
  width: 60%;
`;

const ContactInfo = styled.div`
  width: 40%;
`;

const BuiltWithLove = styled.div`
  margin-top: 4em;
  color: #5e5e5e;
  h4 {
    font-weight: 300;
    font-size: 0.7em;
  }
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <GetInTouch>
        <h1>Get In Touch</h1>
        <h2>I love stuff</h2>
      </GetInTouch>

      <ContactInfo>
        <ul>
          <li>hello@imenrique.com</li>
          <li>on twitter</li>
          <li>on GitHub</li>
        </ul>
      </ContactInfo>
    </Wrapper>

    <BuiltWithLove>
      <h4>
        Built with <span role="img" aria-label="love">❤️</span> by

        <IconLink href="#" target="_blank">
          @enriikke
        </IconLink>
      </h4>
    </BuiltWithLove>
  </Container>
)

export default Footer;
