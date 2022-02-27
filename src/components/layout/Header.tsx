import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import '../../styles/variables';
import './layout.css';

const Header = () => {
    const { title } = useSiteMetadata();
    return (
        // 상단 헤더
        <header
            style={{
                background: `rebeccapurple`,
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
                    <h1 style={{ margin: 0 }}>{title}</h1>
                </Link>
            </div>
            <div
                style={{
                    textAlign: 'center',
                    backgroundColor: '#ffff',
                    border: '1px solid',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        outline: 'none',
                        listStyleType: 'none',
                        margin: 0,
                    }}
                >
                    <li style={{ margin: '0 20px', textDecoration: 'none' }}>
                        <Link to="/">Home</Link>
                    </li>
                    <li style={{ margin: '0 20px', textDecoration: 'none' }}>
                        <Link to="/Me/">Justin</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/using-typescript/">Post</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link to="/Tag/">Tags</Link> <br />
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
