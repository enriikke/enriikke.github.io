import React from "react"
import styled from "styled-components"
import PageLayout from "../layouts/PageLayout"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 1800px;
  margin: 0 auto;
  min-width: 300px;
`

// TODO: add a way to go back home
const NotFoundPage = () => (
  <PageLayout>
    <Main>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Main>
  </PageLayout>
)

export default NotFoundPage
