import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const IndexPage: React.FC = ({ data }: any) => {
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
    console.log('data');
    console.log(data);

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
                <div>
                    {data.allMdx.nodes.map(
                        (node: {
                            id: React.Key;
                            frontmatter: {
                                title: React.ReactFragment;
                                date: React.ReactFragment;
                            };
                            body: string & React.ReactNode;
                        }): any => (
                            <article style={{ border: '1px solid' }} key={node.id}>
                                <div style={{ width: '100%' }}>
                                    <h2>{node.frontmatter.title}</h2>
                                    {/* <MDXRenderer>{node.body}</MDXRenderer> */}
                                </div>
                            </article>
                        ),
                    )}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                frontmatter {
                    title
                    date
                    ecerpt
                }
            }
        }
    }
`;

export default IndexPage;
