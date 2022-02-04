import * as React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home" />

            <div style={{ height: '100vh', border: '1px solid', padding: 30 }}></div>
        </Layout>
    );
};

export default IndexPage;
