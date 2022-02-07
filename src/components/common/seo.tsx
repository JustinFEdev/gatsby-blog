import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
// import { query } from 'pages/using-typescript';

type Props = {
    title?: string;
    description?: string;
    article?: boolean;
};

const Seo = ({ title, description = 'Blog posted about development', article = false }: Props) => {
    const { site, img } = useStaticQuery(query);
    const { defaultTitle } = site.siteMetadata;

    return (
        <Helmet title={title || defaultTitle}>
            <meta name="title" content={title || defaultTitle} />
            <meta name="description" content={description || ''} />
            <meta property="og:type" content={article ? 'article' : 'webpage'} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:url" content="" />
            <meta property="og:description" content={description || ''} />
            {/* <meta property="og:image" content={img.publicURL} /> */}
        </Helmet>
    );
};

const query = graphql`
    query SEO {
        # img: file(relativePath: { eq: "pageImage.png" }) {
        #     publicURL
        # }
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl
            }
        }
    }
`;

// Seo.defaultProps = {
//     lang: `en`,
//     meta: [],
//     description: ``,
// };

// Seo.propTypes = {
//     description: PropTypes.string,
//     lang: PropTypes.string,
//     meta: PropTypes.arrayOf(PropTypes.object),
//     title: PropTypes.string.isRequired,
// };

export default Seo;
