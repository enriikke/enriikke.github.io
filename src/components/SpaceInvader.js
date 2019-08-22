import React from "react"
import styled, { keyframes } from "styled-components"

const InvaderAnimation = keyframes`
  0%, 50% {
    box-shadow: 0 0 0 1em #191a1d, 0 1em 0 1em #191a1d, -2.5em 1.5em 0 0.5em #191a1d, 2.5em 1.5em 0 0.5em #191a1d, -3em -3em 0 0 #191a1d, 3em -3em 0 0 #191a1d, -2em -2em 0 0 #191a1d, 2em -2em 0 0 #191a1d, -3em -1em 0 0 #191a1d, -2em -1em 0 0 #191a1d, 2em -1em 0 0 #191a1d, 3em -1em 0 0 #191a1d, -4em 0 0 0 #191a1d, -3em 0 0 0 #191a1d, 3em 0 0 0 #191a1d, 4em 0 0 0 #191a1d, -5em 1em 0 0 #191a1d, -4em 1em 0 0 #191a1d, 4em 1em 0 0 #191a1d, 5em 1em 0 0 #191a1d, -5em 2em 0 0 #191a1d, 5em 2em 0 0 #191a1d, -5em 3em 0 0 #191a1d, -3em 3em 0 0 #191a1d, 3em 3em 0 0 #191a1d, 5em 3em 0 0 #191a1d, -2em 4em 0 0 #191a1d, -1em 4em 0 0 #191a1d, 1em 4em 0 0 #191a1d, 2em 4em 0 0 #191a1d;
  }

  51%, 100% {
    box-shadow: 0 0 0 1em #191a1d, 0 1em 0 1em #191a1d, -2.5em 1.5em 0 0.5em #191a1d, 2.5em 1.5em 0 0.5em #191a1d, -3em -3em 0 0 #191a1d, 3em -3em 0 0 #191a1d, -2em -2em 0 0 #191a1d, 2em -2em 0 0 #191a1d, -3em -1em 0 0 #191a1d, -2em -1em 0 0 #191a1d, 2em -1em 0 0 #191a1d, 3em -1em 0 0 #191a1d, -4em 0 0 0 #191a1d, -3em 0 0 0 #191a1d, 3em 0 0 0 #191a1d, 4em 0 0 0 #191a1d, -5em -2em 0 0 #191a1d, -4em 1em 0 0 #191a1d, 4em 1em 0 0 #191a1d, 5em -2em 0 0 #191a1d, -5em -1em 0 0 #191a1d, 5em -1em 0 0 #191a1d, -5em 0em 0 0 #191a1d, -4em 2em 0 0 #191a1d, 4em 2em 0 0 #191a1d, 5em 0em 0 0 #191a1d, 5em 1em 0 0 #191a1d, -5em 1em 0 0 #191a1d, -3em 3em 0 0 #191a1d, -4em 4em 0 0 #191a1d, 4em 4em 0 0 #191a1d, 3em 3em 0 0 #191a1d;
  }
`

const Container = styled.div`
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  overflow: hidden;
  margin: 3em auto;
  margin-top: 1.5em;
  background: ${props => props.theme.colors.secondary};
  animation: ${InvaderAnimation} 1s linear 1s infinite;
  box-shadow: 0 0 0 1em #191a1d, 0 1em 0 1em #191a1d,
    -2.5em 1.5em 0 0.5em #191a1d, 2.5em 1.5em 0 0.5em #191a1d,
    -3em -3em 0 0 #191a1d, 3em -3em 0 0 #191a1d, -2em -2em 0 0 #191a1d,
    2em -2em 0 0 #191a1d, -3em -1em 0 0 #191a1d, -2em -1em 0 0 #191a1d,
    2em -1em 0 0 #191a1d, 3em -1em 0 0 #191a1d, -4em 0 0 0 #191a1d,
    -3em 0 0 0 #191a1d, 3em 0 0 0 #191a1d, 4em 0 0 0 #191a1d,
    -5em 1em 0 0 #191a1d, -4em 1em 0 0 #191a1d, 4em 1em 0 0 #191a1d,
    5em 1em 0 0 #191a1d, -5em 2em 0 0 #191a1d, 5em 2em 0 0 #191a1d,
    -5em 3em 0 0 #191a1d, -3em 3em 0 0 #191a1d, 3em 3em 0 0 #191a1d,
    5em 3em 0 0 #191a1d, -2em 4em 0 0 #191a1d, -1em 4em 0 0 #191a1d,
    1em 4em 0 0 #191a1d, 2em 4em 0 0 #191a1d;

  @media (max-width: ${props => props.theme.layout.mediumBreakpoint}) {
    font-size: 1.5em;
  }

  @media (max-width: ${props => props.theme.layout.smallBreakpoint}) {
    display: none;
  }
`

const SpaceInvader = () => <Container />

export default SpaceInvader
