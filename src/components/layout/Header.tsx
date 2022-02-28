import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import '../../styles/variables';
import './layout.css';

const Header = () => {
    const { title } = useSiteMetadata();

    // let prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     let currentScrollPos = window.pageYOffset;
    //     let navbar = document.getElementById('navbar');
    //     if (prevScrollpos > currentScrollPos) {
    //         navbar.style.top = '0';
    //     } else {
    //         navbar.style.top = '-100px';
    //         navbar.style.backgroundColor = 'rgba(255,255,255,0.5)';
    //     }
    //     prevScrollpos = currentScrollPos;
    // };

    return (
        // 상단 헤더
        <header
            style={{
                background: `rebeccapurple`,
                display: 'flex',
                margin: `0 auto`,
                padding: `1.45rem 1.0875rem`,
                textAlign: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            // id="navbar"
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
            <div
                style={{
                    textAlign: 'center',
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
                        color: '#ffff',
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
                        <Link to="/post/">Post</Link>
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
