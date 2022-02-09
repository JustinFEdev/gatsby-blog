import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Seo title="Home" />
            <div style={{ backgroundColor: 'lightGreen', border: '1px solid', width: '100%', height: '350px' }}>
                <h3>Image Area</h3>
                <p>FrontEnd Dev</p>
            </div>
            <section
                style={{
                    marginTop: '100px',
                    width: '100%',
                    padding: '30px 15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid',
                }}
            >
                <div style={{ width: '100%' }}>
                    <h3>Contant Title</h3>
                    <p style={{ width: 'auto', margin: 0, position: 'relative', border: '1px solid' }}>button</p>
                </div>
                <div style={{ width: '150px', border: '1px solid' }}>create date</div>
            </section>
        </Layout>
    );
};

export default IndexPage;
