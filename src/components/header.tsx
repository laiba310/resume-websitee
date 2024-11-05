import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-start">
                    <div className="logo"></div>
                    <h1 className='hea1'>Laiba Adnan</h1>
                </div>
                <ul>
                    <Link href="/">Home
                    </Link>
                    <div className="divisor"></div>
                    <Link href="/resume">Resume</Link>
                    <div className="divisor"></div>
                    <Link href="/project">Project</Link>
                    <div className="divisor"></div>
                    <Link href="/contact">Contact us</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
