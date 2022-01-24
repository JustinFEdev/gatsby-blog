import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const topMenu = css`
    margin: '0 15px';
`;

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home" />
            <div style={{ textAlign: 'center' }}>
                <h1>Justin's WebSite</h1>
                <ul style={{ display: 'flex' }}>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/page-2/">첫번째 페이지</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-typescript/">두번째 페이지</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-ssr">세번째 페이지</Link> <br />
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-dsg">네번째 페이지</Link> <br />
                    </li>
                </ul>
            </div>
            <div style={{ height: '100vh', border: '1px solid', width: '100%' }}>
                <h1>empty area</h1>
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
