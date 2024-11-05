import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Hero = () => {
    return (
        <div className="maincon">
            <div className="semimain">
                <div className='heroimg'>
                    <Image
                        className="img1"
                        src="/img2.jpg"
                        alt="image"
                        width={600}
                        height={300}
                    />
                </div>
                <div className='heap'>
                    <h1 className='hea2'>Hello</h1>
                    <h1 className='hea3'>A Bit About Me</h1>
                    <p className='para1'>
                        I&apos;m Laiba, an 18-year-old passionate about coding <br />
                        and editing. I love exploring new technologies and <br />
                        improving my skills in web development.
                    </p>
                    <div className="buttons">
                        <Link href="/resume">
                            <button className='b1'>Resume</button>
                        </Link>
                        <Link href="/project">
                            <button className='b2'>Project</button>
                        </Link>
                        <Link href="/contact">
                            <button className='b3'>Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
