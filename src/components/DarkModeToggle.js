import React from "react"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"

const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  padding: 0;
  color: ${props => props.theme.colors.textLight};
  transition: color 0.5s ease-in-out;
  font-size: 0.8em;
  .dark-mode & {
    color: ${props => props.theme.colors.novaGrey};
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <Button onClick={darkMode.toggle}>
      {darkMode.value ? (
        <FontAwesomeIcon icon={faSun} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      )}
    </Button>
  )
}

export default DarkModeToggle
