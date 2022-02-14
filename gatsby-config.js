module.exports = {
    siteMetadata: {
        title: `Justin's DevLog`,
        description: `언제나 환영합니다.`,
        author: `Justin Park`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-emotion',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-advanced-sitemap',
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages`,
                name: `pages`,
            },
        },
    ],
};
