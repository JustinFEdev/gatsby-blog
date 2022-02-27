import * as React from 'react';
import { Global, css } from '@emotion/react';

import PropTypes from 'prop-types';
import Header from './Header';
import global from 'styles/global';
import '../layout/layout.css';

const Layout: React.FC = ({ children }) => {
    const container = css`
        margin: 0 auto;
        max-width: 960px;
        padding: 0 1.0875rem 1.45rem;
    `;

    return (
        <>
            {/* <Global css={global} /> */}
            <Header />
            <div css={container}>
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    <a href="https://www.gatsbyjs.com/Me/"> Park Woojun</a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
