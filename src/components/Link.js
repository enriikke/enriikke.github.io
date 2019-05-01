import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;

  transition: color 0.5s;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const InverseLink = styled.a`
  text-decoration: none;

  transition: color 0.5s;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export default Link;
