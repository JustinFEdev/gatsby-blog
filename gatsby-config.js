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
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.description,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + `/posts/${edge.node.slug}`,
                                    guid: site.siteMetadata.siteUrl + `/posts/${edge.node.slug}`,
                                    custom_elements: [{ 'content:encoded': edge.node.html }],
                                });
                            });
                        },
                        query: `
                {
                  allMdx(
                    sort: { order: DESC, fields: [frontmatter___date] },
                  ) {
                    edges{
                        node {
                        html
                        slug 
                        frontmatter {
                            title
                            subtitle
                            date(formatString: "YYYY.MM.DD")
                        }
                        }
                    }   
                  }
                }
              `,
                        output: '/rss.xml',
                        title: "Your Site's RSS Feed",
                        match: '^/posts/',
                        link: 'https://feeds.feedburner.com/gatsby/blog',
                    },
                ],
            },
        },
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
    ],
};
