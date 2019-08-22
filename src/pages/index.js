import React from "react"
import PageLayout from "../layouts/PageLayout"
import Hero from "../components/Hero"
import About from "../components/About"
import { Connector } from "../components/System"

const IndexPage = () => {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  )
}

export default IndexPage
