import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import Layout from '../components/layout/layout';
import Seo from '../components/common/seo';

const Me = () => {
    return (
        <Layout>
            <Seo title="Page Me" />
            <div style={{ border: '1px solid', height: 'auto', minHeight: '80vh' }}>
                <h1>Hi from the My page</h1>
            </div>
            <footer>
                <Link to="/">Go back to the homepage</Link>
            </footer>
        </Layout>
    );
};

export const query = graphql`
    query {
        bg: file(relativePath: { eq: "about.jpg" }) {
            publicURL
        }
    }
`;

export default Me;
