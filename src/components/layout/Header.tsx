import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }: any) => (
    // 상단 헤더
    <header
        style={{
            background: `rebeccapurple`,
            // marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
                textAlign: 'center',
            }}
        >
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                <h1 style={{ margin: 0 }}>
                    {siteTitle}
                    Justin's Dev Log
                </h1>
            </Link>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
