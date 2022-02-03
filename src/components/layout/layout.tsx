import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Header from './Header';
import './layout.css';

const Layout: React.FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div style={{ textAlign: 'center' }}>
                {/* <h1>Justin's Dev Log</h1> */}
                <ul
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        outline: 'none',
                        listStyleType: 'none',
                    }}
                >
                    <li style={{ margin: '0 20px', textDecoration: 'none' }}>
                        <Link to="/Me/">Justin</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-typescript/">Post</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/Tag/">Tags</Link> <br />
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-dsg">Else</Link> <br />
                    </li>
                </ul>
            </div>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
