import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Seo title="Home" />
            <div style={{ height: '100vh', border: '1px solid', padding: 30 }}>
                <h1>empty area</h1>
            </div>
        </Layout>
    );
};

export default IndexPage;
