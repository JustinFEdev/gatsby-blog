import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import Common from '../components/common';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/seo';

const containerStyle = css`
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid;
    height: auto;
    min-height: 80vh;
`;
const topMenu = css`
    color: #000;
    font-size: 50px;
`;

const MePage = () => {
    return (
        <Layout>
            <Seo title="Page Me" />
            <Common.Container css={containerStyle}>
                <div>
                    <h1 css={topMenu}>Who Am I?</h1>
                    <StaticImage
                        src="../images/Justin_1.jpg"
                        width={300}
                        quality={95}
                        formats={['auto', 'webp', 'avif']}
                        alt="It's me!"
                        style={{ marginBottom: `1.45rem` }}
                    />
                </div>
                <main className="main-contents">
                    <Common.Section className="intro">
                        <h2>Introduction</h2>
                        <Common.Column className="intro_text">
                            <p>I'm FrontEnd</p>
                        </Common.Column>
                    </Common.Section>

                    <Common.Section className="exp">
                        <h2>Experience</h2>
                    </Common.Section>

                    <Common.Section className="skills">
                        <h2>Skills</h2>
                    </Common.Section>
                </main>
            </Common.Container>
        </Layout>
    );
};

export const query = graphql`
    query {
        bg: file(relativePath: { eq: "about.jpg" }) {
            publicURL
        }
    }
`;

export default MePage;
