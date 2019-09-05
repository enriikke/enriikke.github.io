import React from "react"
import PropTypes from "prop-types"
import RootLayout from "./RootLayout"
import Header from "../components/Header"

const PageLayout = ({ children }) => (
  <RootLayout>
    <Header />
    <main>{children}</main>
  </RootLayout>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
