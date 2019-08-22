import React from "react"
import styled from "styled-components"
import { Container, Link } from "./System"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

const SocialLinksContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  padding: 0;
  font-size: 0.8em;

  ${Link} {
    margin-left: 1.5em;
  }
`

const SocialLinks = () => (
  <SocialLinksContainer>
    <Link href="https://github.com/enriikke" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </Link>

    <Link href="https://twitter.com/enriikke" target="_blank">
      <FontAwesomeIcon icon={faTwitter} size="lg" />
    </Link>
  </SocialLinksContainer>
)

export default SocialLinks
