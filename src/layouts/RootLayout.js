import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import theme from '../utils/theme'
import logo from '../assets/enrique-icon.png'
import MariaFont from '../assets/fonts/maria.woff'
import GTAmericaFont from '../assets/fonts/gt-america.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Maria";
    font-style: normal;
    font-weight: normal;
    src: url(${MariaFont});
  }

  @font-face {
    font-family: "GT America";
    font-style: normal;
    font-weight: normal;
    src: url(${GTAmericaFont});
  }

  *,
  *::after,
  *::before {
    -webkit-box-sizing: border-box;
    box-sizing: beforer-box;
    position: relative;
  }

  *::selection {
    background-color: ${props => props.theme.colors.selectionLight};

    &.dark-mode {
      background: ${props => props.theme.colors.selectionDark};
    }
  }

  body {
    margin: 0;
    overflow-x: hidden;
    transition: background .5s ease-in-out;
    background: ${props => props.theme.colors.backgroundLight};

    &.dark-mode {
      background: ${props => props.theme.colors.backgroundDark};
    }
  }

  h1, h2, h3, h4 {
    transition: color .5s ease-in-out;
    color: ${props => props.theme.colors.headerLight};

    .dark-mode & {
      color: ${props => props.theme.colors.headerDark};
    }
  }

  p, a {
    transition: color .5s ease-in-out;
    color: ${props => props.theme.colors.textLight};
    font-weight: 300;

    .dark-mode & {
      color: ${props => props.theme.colors.textDark};
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
`

const RootLayoutQuery = graphql`
  query RootLayoutQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const RootLayout = ({ children }) => (
  <StaticQuery
    query={RootLayoutQuery}
    render={data => {
      const lang = 'en'
      const { title, description, author } = data.site.siteMetadata

      return (
        <React.Fragment>
          <Helmet htmlAttributes={{ lang, }}>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content="https://imenrique.com" />
            <meta property="og:image" content={logo} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:description" content="{description}" />
            <meta name="twitter:image" content={logo} />
            <meta name="twitter:image:src" content={logo} />
          </Helmet>

          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyle />
              {children}
            </React.Fragment>
          </ThemeProvider>
        </React.Fragment>
      );
    }}
  />
)

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RootLayout