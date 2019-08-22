import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  overflow-x: hidden;
`

// TODO: define breakpoints
// TODO: width: calc(100% - ${props => props.theme.layout.gutter} * 2);
export const Container = styled.div`
    max-width: ${ props => props.theme.layout.maxWidth};
    margin: 0 auto;
    width: 100%;
    padding: 0 ${ props => props.theme.layout.gutter};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${props => props.theme.layout.mediumBreakpoint}) {
        flex-direction: row;
    }
`

export const Column = styled.div`
    flex: 1;
`

// TODO: repetitive?
export const Link = styled.a`
color: ${props => props.theme.colors.textLight};
.dark-mode & {
  color: ${props => props.theme.colors.novaGrey};
}

&:hover {
  color: ${props => props.theme.colors.accent};

  .dark-mode & {
    color: ${props => props.theme.colors.novaPurple};
  }
}
`

// TODO: should this be in the global styles?
export const FancyLink = styled.a`
  background-image: linear-gradient(180deg, transparent 65%, ${props => props.theme.colors.accent} 0);
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  transition: background-size .4s ease;
  color: ${props => props.theme.colors.text};

  &:hover {
    background-size: 100% 100%;
  }
`

const Line = styled.div`
  position: absolute;

  ${
  props => props.right
    ? 'right: 5em;'
    : 'left: 5em;'
  }

  bottom: -5em;
  width: 3px;
  height: 10em;
  border: none;
  background-color: ${props => props.theme.colors.textLight};
  transition: background .5s ease-in-out;
  z-index: 100;

  .dark-mode & {
    background-color: ${props => props.theme.colors.novaGrey};
  }
`

export const Connector = ({ right }) => (
  <Container>
    <Line right={right} />
  </Container>
)

Connector.propTypes = {
  right: PropTypes.bool,
}