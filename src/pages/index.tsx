import * as React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';
import Common from '../components/common';

import { graphql, Link } from 'gatsby';

const IndexPage: React.FC = ({ data }: any) => {
    // const getToday = () => {
    //     let date = new Date();
    //     let year = date.getFullYear();
    //     let month = ('0' + (1 + date.getMonth())).slice(-2);
    //     let day = ('0' + date.getDate()).slice(-2);
    //     return year + '-' + month + '-' + day;
    // };
    const contentSection = css`
        margin-top: 100px;
        width: 100%;
        padding: 30px 15px;
        border: 1px solid;
        border-radius: 15px;
        margin-bottom: 50px;
        background-color: lightblue;
    `;

    return (
        <Layout>
            <Seo title="Home | Justin's Devlog" />
            <div style={{ backgroundColor: 'lightGreen', border: '1px solid', width: '100%', height: '350px' }}>
                <h3>Image Area</h3>
                <p>FrontEnd Dev</p>
            </div>
            <section css={contentSection}>
                <Common.Column>
                    {data.allMdx.nodes.map(
                        (node: {
                            id: React.Key;
                            slug: React.ReactNode;
                            frontmatter: {
                                title: React.ReactFragment;
                                date: React.ReactFragment;
                                subtitle: React.ReactFragment;
                            };
                            body: string & React.ReactNode;
                        }): any => (
                            <div style={{ border: '1px solid' }} key={node.id}>
                                <Link to={`/posts/${node.slug}`}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                        }}
                                    >
                                        <h3>{node.frontmatter.title}</h3>
                                        <p>등록일자 :{node.frontmatter.date}</p>
                                    </div>
                                    <div>내용:{node.frontmatter.subtitle}</div>
                                </Link>
                            </div>
                        ),
                    )}
                </Common.Column>
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
                    subtitle
                }
            }
        }
    }
`;

export default IndexPage;
