import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';
import { graphql, Link, useStaticQuery } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';

const IndexPage: React.FC = ({ data }: any) => {
    // const getToday = () => {
    //     let date = new Date();
    //     let year = date.getFullYear();
    //     let month = ('0' + (1 + date.getMonth())).slice(-2);
    //     let day = ('0' + date.getDate()).slice(-2);
    //     return year + '-' + month + '-' + day;
    // };
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
                <div style={{ width: '100%' }}>
                    {data.allMdx.nodes.map(
                        (node: {
                            id: React.Key;
                            slug: React.ReactNode;
                            frontmatter: {
                                title: React.ReactFragment;
                                date: React.ReactFragment;
                                description: React.ReactFragment;
                            };
                            body: string & React.ReactNode;
                        }): any => (
                            <article style={{ border: '1px solid', marginBottom: 50 }} key={node.id}>
                                <Link to={`/posts/${node.slug}`}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                        }}
                                    >
                                        <h2>{node.frontmatter.title}</h2>
                                        {/* <p>등록일자 :{getToday(node.frontmatter.date)}</p> */}
                                        {/* <MDXRenderer>{node.body}</MDXRenderer> */}
                                    </div>
                                    <div>내용:{node.frontmatter.description}</div>
                                </Link>
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
                slug
                frontmatter {
                    title
                    date
                    description
                }
            }
        }
    }
`;

export default IndexPage;
