import React from 'react';
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="div"></div>
            <div className="footer1">
                <div className="footerc">
                    <h1>Phone</h1>
                    <p>0301xxxx</p>
                </div>
                <div className="footerE">
                    <h1>Email</h1>
                    <p>memonlaiba75@gmail.com</p>
                </div>
                <div className="footerl">
                    <h1 className='hea4'> follow me on</h1>
                    <div className="fooi">
                        <div className="logooo">
                            <Image
                                src="/fb.png"
                                alt=" image"
                                width={40}
                                height={35}
                            />
                        </div>
                        <div className="logooo">
                            <Image
                                src="/instagram (2).png"
                                alt=" image"
                                width={40}
                                height={35}
                            />
                        </div>
                        <div className="logooo">
                            <Image
                                src="/3.png"
                                alt=" image"
                                width={40}
                                height={30}
                            />
                        </div>
                    </div>
                    </div>

 <div className="footercr">
 <p>&copy; 2024 Laiba Adnan. <br /> All rights reserved.</p>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
