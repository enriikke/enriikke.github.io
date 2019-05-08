module.exports = {
  siteMetadata: {
    title: `Enrique Gonzalez`,
    description: `Enrique's personal site. A collection of thougts on programming, health, family, fun, and anything that comes to mind. I'm a software engineer, ocassional freelancer, interested in AI and Machine Learning.`,
    author: `@enriikke`,

    profile: {
      resize: {
        src: "//placekitten.com/g/200/300"
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
