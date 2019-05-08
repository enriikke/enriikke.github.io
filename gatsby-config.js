module.exports = {
  siteMetadata: {
    title: `Enrique Gonzalez`,
    description: `Enrique's personal site. A collection of thougts on programming, health, family, fun, and anything that comes to mind. I'm a software engineer, ocassional freelancer, interested in AI and Machine Learning.`,
    author: `@enriikke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/enrique-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
