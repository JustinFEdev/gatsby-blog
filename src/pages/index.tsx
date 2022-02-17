import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage: React.FC = () => {
    // const getToday = () => {
    //     let date = new Date();
    //     let year = date.getFullYear();
    //     let month = ('0' + (1 + date.getMonth())).slice(-2);
    //     let day = ('0' + date.getDate()).slice(-2);
    //     return year + '-' + month + '-' + day;
    // };

    // const data = [
    //     { title: 'title1', description: 'abc', createDate: getToday() },
    //     { title: 'title2', description: 'abc1', createDate: getToday() },
    //     { title: 'title3', description: 'abc2', createDate: getToday() },
    //     { title: 'title4', description: 'abc3', createDate: getToday() },
    //     { title: 'title5', description: 'abc4', createDate: getToday() },
    // ];
    // console.log('data');
    // console.log(data);

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
                {/* {data.map((info, i) => {
                    <>
                        <div style={{ width: '100%' }} key={i}>
                            <h3>{info.title}</h3>
                            <p style={{ width: 'auto', margin: 0, position: 'relative', border: '1px solid' }}>
                                {info.description}
                            </p>
                        </div>
                        <div style={{ width: '150px', border: '1px solid' }}>{info.createDate}</div>
                    </>;
                })} */}
            </section>
        </Layout>
    );
};

export default IndexPage;
