import * as React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Common from '../common';
import Header from './Header';
import './layout.css';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            {/* <Global css={global} /> */}
            <Header />
            <Common.Container
            // style={{
            //     margin: `0 auto`,
            //     maxWidth: 960,
            //     padding: `0 1.0875rem 1.45rem`,
            // }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    <a href="https://www.gatsbyjs.com/Me/"> Park Woojun</a>
                </footer>
            </Common.Container>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
