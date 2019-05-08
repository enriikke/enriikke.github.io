import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import theme from '../utils/theme';
import logo from '../images/enrique-icon.png';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: beforer-box;
}

body {
  margin: 0;
  overflow-x: hidden;
  @media (max-width: 300px) {
    overflow-x: scroll;
  }
}
`;

const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={LayoutQuery}
    render={data => {
      const lang = 'en';
      const { title, description, author } = data.site.siteMetadata;

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
            <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
            <meta property="og:image" content={logo} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:description" content="{description}" />
            <meta name="twitter:image" content={logo} />
            <meta name="twitter:image:src" content={logo} />

            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossOrigin="anonymous"
            />
          </Helmet>

          <GlobalStyle />
          <ThemeProvider theme={theme}>
            {children}
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
