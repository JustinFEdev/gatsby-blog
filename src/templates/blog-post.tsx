import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/common/seo';
import Layout from 'components/layout/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({ data: { mdx } }: any) => {
    return (
        <Layout>
            <SEO title={`${mdx.frontmatter.title} | Justin's Devlog`} description={mdx.excerpt} article />
            <section>
                <h1>{mdx.frontmatter.title}</h1>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query getPost($slug: String) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            body
            excerpt(truncate: true)
        }
    }
`;

export default BlogPost;
