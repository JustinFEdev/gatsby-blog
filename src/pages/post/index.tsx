import Layout from 'components/layout/Layout';
import SEO from 'components/common/seo';
import React from 'react';
import { graphql } from 'gatsby';

const PostPage = () => {
    return (
        <Layout>
            <SEO title="Posts | Justin's Dev Log" />
            <div></div>
            <section>
                <div></div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    slug
                    title
                }
                id
            }
        }
    }
`;

export default PostPage;
