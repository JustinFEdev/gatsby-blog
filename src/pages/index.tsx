import * as React from 'react';
import { css } from '@emotion/react';
import Common from '../components/common';
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
    const bannerArea = css`
        background-color: #8ae38a;
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const contentSection = css`
        margin-top: 100px;
        width: 100%;
    `;

    const contentItem = css`
        padding: 30px 15px;
        border-radius: 15px;
        margin-top: 50px;
        margin-bottom: 25px;
        box-shadow: 10px 5px 5px gray;
        border: 1px solid lightgray;
        &:hover {
            background-color: lightyellow;
            transition: 0.5s;
        }
    `;

    return (
        <Layout>
            <Seo title="Home | Justin's Devlog" />
            <div css={bannerArea}>
                <p>FrontEnd Dev</p>
            </div>
            <section css={contentSection}>
                <Link to={`/post/`}>Post 전체보기</Link>
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
                            <Link to={`/posts/${node.slug}`}>
                                <Common.Column css={contentItem} key={node.id}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                        }}
                                    >
                                        <h3>{node.frontmatter.title}</h3>
                                        <p>{node.frontmatter.date}</p>
                                    </div>
                                    <div>{node.frontmatter.subtitle}</div>
                                </Common.Column>
                            </Link>
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
                    date(formatString: "YYYY.MM.DD")
                    subtitle
                }
            }
        }
    }
`;

export default IndexPage;
