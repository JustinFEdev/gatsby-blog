import * as React from 'react';
import { css } from '@emotion/react';
import Common from '../components/common';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';
import { graphql, Link } from 'gatsby';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
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
        height: 450px;
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

    SwiperCore.use([Autoplay]);

    return (
        <Layout>
            <Seo title="Home | Justin's Devlog" />
            <div css={bannerArea}>
                <p>FrontEnd Dev</p>
            </div>
            <div style={{ marginTop: 80, padding: '0 30px', paddingBottom: 100 }}>
                <section css={contentSection}>
                    <h1>Featured Posts</h1>
                    <div style={{ width: 400, height: 450, border: '1px solid' }}>
                        <div style={{ borderBottom: '1px solid', height: 150 }} />
                        <div style={{ padding: 30, height: '100%' }}>
                            <h2 style={{ borderBottom: '1px solid' }}>FE개발자의 성장 스토리</h2>
                            <div style={{ borderBottom: '1px solid' }}>
                                안녕하세요, 수퍼트리 프론트엔드 개발자 저스틴입니다.
                            </div>
                            <div style={{ bottom: 0 }}>subtitle</div>
                        </div>
                    </div>
                    {/* <Swiper
                    slidesPerView="auto"
                    autoplay={{
                        delay: AUTO_PLAY_DELAY,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop
                ></Swiper> */}
                </section>
                <section css={contentSection}>
                    <h1>
                        <Link to={`/post/`}>Post 전체보기</Link>
                    </h1>
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
                <section css={contentSection}>
                    <h1>Tech Report & Magazine</h1>
                    <div style={{ position: 'relative', width: 400, height: 400, border: '1px solid' }}>
                        <div style={{ padding: 30 }}>
                            <h2 style={{ borderBottom: '1px solid' }}>FE개발자의 성장 스토리</h2>
                            <div style={{ borderBottom: '1px solid', height: 80, marginBottom: 20 }}>
                                각종 정보와 뉴스를 접할수있는 영역.
                            </div>
                            <div style={{ position: 'relative', border: '1px solid', height: 180, bottom: 0 }}>
                                이미지
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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
