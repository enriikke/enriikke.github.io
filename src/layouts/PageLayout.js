import React from 'react'
import PropTypes from 'prop-types'
import RootLayout from './RootLayout'
import Header from '../components/Header'
import { Main } from '../components/System'

const PageLayout = ({ children }) => (
    <RootLayout>
        <Header />
        <Main>{children}</Main>
    </RootLayout>
)

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageLayout