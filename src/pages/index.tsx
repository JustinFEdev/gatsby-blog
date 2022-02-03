import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';

const topMenu = css`
    color: #000;
    font-size: 50px;
`;

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home" />
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
                        <Link to="/Tag">Tags</Link> <br />
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-dsg">Else</Link> <br />
                    </li>
                </ul>
            </div>
            <div style={{ height: '100vh', border: '1px solid', padding: 30 }}>
                <h1 css={topMenu}>Who Am I?</h1>
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={300}
                    quality={95}
                    formats={['auto', 'webp', 'avif']}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                />
            </div>
        </Layout>
    );
};

export default IndexPage;
