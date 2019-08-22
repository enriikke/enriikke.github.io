module.exports = {
  siteMetadata: {
    title: `Enrique Gonzalez`,
    description: `Enrique's personal site. A collection of thougts on programming, health, family, fun, and anything that comes to mind. I'm a software engineer, ocassional freelancer, interested in AI and Machine Learning.`,
    siteUrl: 'https://imenrique.com',
    author: `Enrique Gonzalez`,
    social: {
      twitter: '@enriikke',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: ['title'],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '÷',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Enrique`,
        short_name: `enriikke`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7b68ee`,
        display: `minimal-ui`,
        icon: `src/assets/enrique-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-use-dark-mode`,
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
}
