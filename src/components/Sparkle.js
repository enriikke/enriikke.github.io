/*

This code was taken from https://github.com/MeganKeesee/personal-site (Adapted to use syled-components and minor style modifications)

Specifically these files:
- https://github.com/MeganKeesee/personal-site/tree/1adc12d67dd5f39a8f0a4791e24e375841fcb390/components/Button
- https://github.com/MeganKeesee/personal-site/tree/1adc12d67dd5f39a8f0a4791e24e375841fcb390/components/Sparkle

Thank you! ❤️
*/

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

const SparkleSVG = styled.svg`
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
  <SparkleSVG
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
  </SparkleSVG>
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

const Sparkle = ({ children }) => (
  <SparkleContainer>
    {children}

    <Spark />
    <Spark />
    <Spark />
    <Spark />
    <Spark />
  </SparkleContainer>
)

export default Sparkle
