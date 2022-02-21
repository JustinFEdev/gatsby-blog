import Layout from 'components/layout/Layout';
import SEO from 'components/common/seo';
import React from 'react';
import { graphql } from 'gatsby';

const PostPage = () => {
    return (
        <Layout>
            <SEO title="Posts | Justin's Dev Log" />
            <div>here is post Layout</div>
            <section></section>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                slug
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
            }
        }
    }
`;

export default PostPage;
