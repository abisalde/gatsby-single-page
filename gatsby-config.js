module.exports = {
    siteMetadata: {
        title: `Omoyemi E`,
        description: `Public Profile of Owa Ewere Omoyemi`,
        author: `@abisalde`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Portofolio Template`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: `gatsby-plugin-anchor-links`,
            options: {
                offset: -100,
                duration: 500,
            },
        },
    ],
}
