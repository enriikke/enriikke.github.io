// This code was taken from https://github.com/MeganKeesee/personal-site
// Specifically these files:
// https://github.com/MeganKeesee/personal-site/tree/1adc12d67dd5f39a8f0a4791e24e375841fcb390/components/Button
// https://github.com/MeganKeesee/personal-site/tree/1adc12d67dd5f39a8f0a4791e24e375841fcb390/components/Sparkle
//
// Adapted to us  syled-components and minor style modifications
//
// Thank you!

import React from "react"
import styled, { keyframes } from "styled-components"

const SparkleAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.25;
  }

  25% {
    transform: scale(1.1);
    opacity: 1;
  }

  50% {
    transform: scale(0.9);
    opacity: 0.6;
  }

  60% {
    opacity: 0.9;
  }

  95% {
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
`

const SparkSVG = styled.svg`
  position: absolute;
  margin: 0;
  animation: ${SparkleAnimation} 1s infinite 400ms alternate linear;
  opacity: 0;
  speak: none;
  visibility: hidden;
  z-index: 10;
  pointer-events: none;

  &:first-of-type {
    top: 10%;
    left: 4%;
    animation-delay: 0ms;
  }

  &:nth-of-type(2) {
    right: 6%;
    bottom: 10%;
    animation-delay: -500ms;
  }

  &:nth-of-type(4) {
    bottom: 24%;
    left: -6%;
    animation-delay: -500ms;
  }

  &:nth-of-type(5) {
    bottom: 36%;
    left: 55%;
  }
`

const Spark = () => (
  <SparkSVG
    xmlns="http://www.w3.org/2000/svg"
    width="22px"
    height="22px"
    viewBox="0 0 22 22"
    version="1.1"
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="11.3809772%"
        x2="100%"
        y2="100%"
        id="gradient1"
      >
        <stop stopColor="#9792FA" offset="0%" />
        <stop stopColor="#F683F4" offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-300.000000, -1496.000000)"
        fill="url(#gradient1)"
      >
        <path
          d="M311.629736 1511.3467L310.2497 1517.66628 308.869762 1511.3467C308.526282 1509.77398 307.307353 1508.53873 305.737272 1508.17237L299.9997 1506.83329 305.737272 1505.4943C307.307353 1505.12785 308.526282 1503.8926 308.869762 1502.31988L310.2497 1496.0004 311.629736 1502.31988C311.973118 1503.8926 313.192047 1505.12785 314.762128 1505.4943L320.4997 1506.83329 314.762128 1508.17237C313.192047 1508.53873 311.973118 1509.77398 311.629736 1511.3467"
          id="Fill-1"
        />
      </g>
    </g>
  </SparkSVG>
)

const SparkleContainer = styled.span`
  display: inline-block;
  position: relative;

  &:hover {
    & svg {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const Sparkle = ({ children }) => (
  <SparkleContainer>
    {children}

    <Spark />
    <Spark />
    <Spark />
    <Spark />
    <Spark />
  </SparkleContainer>
)

const ButtonLink = styled.a`
  display: inline-block;
  position: relative;
  /* Avoiding half pixels on border, so not setting the padding in REM. */
  /* stylelint-disable unit-blacklist */
  padding: 2px;
  /* stylelint-enable unit-blacklist */
  clip: rect(0, 0, 0, 0);
  border-radius: 0.409em;
  color: inherit;
  font-family: "GT America";
  font-weight: 800;
  letter-spacing: 0.091em;
  cursor: pointer;
  overflow: hidden;
  /* Removes the 300ms delay on touch-enabled devices. */
  touch-action: manipulation;
  /* Disables the selection of text on mobile so that we better reconigize a user is clicking on a link */
  user-select: none;
  background-color: #444452;
  transition: background 0.5s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.accent};

    /* stylelint-disable selector-max-specificity */
    &::after {
      opacity: 1;
    }
    /* stylelint-enable */
  }

  &::before,
  &::after {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 275ms linear, opacity 300ms linear;
    border-radius: inherit;
    content: "";
    z-index: -2;
  }

  &::after {
    opacity: 0;
    z-index: -1;
  }

  &:active {
    /* stylelint-disable unit-blacklist */
    transform: translateY(1px) scale(0.99);
    /* stylelint-enable unit-blacklist */
  }
`

// originally: background-image: linear-gradient(-150deg, #ffefef 0%, #fffeef 75%);
const ButtonInsides = styled.span`
  display: block;
  padding: 6px 0.8rem;
  border-radius: 0.318em;
  text-transform: uppercase;
  background-color: #fff;
  color: #444452;
  font-size: 0.8em;
`

export const SparkleButton = ({ href, children }) => (
  <Sparkle>
    <ButtonLink href={href} target="_blank">
      <ButtonInsides>{children}</ButtonInsides>
    </ButtonLink>
  </Sparkle>
)

export default SparkleButton
