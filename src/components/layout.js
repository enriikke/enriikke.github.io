import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import Footer from './Footer';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  font-family: Cabin;
  overflow-x: hidden;
}
`;

const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        author
        profile {
          favicon16: resize {
            src
          }
          favicon32: resize {
            src
          }
          bigIcon: resize {
            src
          }
          appleIcon: resize {
            src
          }
        }
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={LayoutQuery}
    render={data => {
      const lang = 'en';
      const { title, description, author, profile } = data.site.siteMetadata;

      return (
        <React.Fragment>
          <Helmet htmlAttributes={{ lang, }}>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="shortcut icon" href={`https:${profile.favicon32.src}`} />

            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
            <meta property="og:image" content={`https:${profile.bigIcon.src}`} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:description" content="{description}" />
            <meta name="twitter:image" content={`https:${profile.bigIcon.src}`} />
            <meta name="twitter:image:src" content={`https:${profile.bigIcon.src}`} />

            <link rel="apple-touch-icon" sizes="180x180" href={`https:${profile.appleIcon.src}`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`https:${profile.favicon32.src}`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`https:${profile.favicon16.src}`} />

            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossOrigin="anonymous"
            />
          </Helmet>

          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <React.Fragment>
              {children}
              <Footer />
            </React.Fragment>
          </ThemeProvider>
        </React.Fragment>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
