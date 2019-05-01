import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { InverseLink } from './Link';

const Container = styled.section`
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  text-transform: uppercase;
  font-size: 0.9em;
  font-family: Rubik;
  font-weight: ${props => props.theme.font.medium};
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  span {
    margin-right: 16px;
    color: ${props => props.theme.colors.accent};
  }
`;

// TODO: pass items through props
const ContactInfo = () => (
  <Container>
    <List>
      <Item>
        <FontAwesome name="envelope" />
        <InverseLink href="#" target="_blank">hello@imenrique.com</InverseLink>
      </Item>

      <Item>
        <FontAwesome name="github" />
        <InverseLink href="#" target="_blank">on GitHub</InverseLink>
      </Item>

      <Item>
        <FontAwesome name="twitter" />
        <InverseLink href="#" target="_blank">on Twitter</InverseLink>
      </Item>
    </List>
  </Container>
)

export default ContactInfo;
