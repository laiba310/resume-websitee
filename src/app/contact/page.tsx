import Image from "next/image";
import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="title">Contact us.....</h1>
                <form className="form">
                    <div className="te-in">
                        <input type="text" className="input" placeholder="Name" required />
                        <input type="email" className="input" placeholder="Email" required />
                    </div>
                    <div className="te-in">
                        <input type="text" className="input" placeholder="Subject" required />
                        <input type="text" className="input" placeholder="Phone" required />
                    </div>
                    <textarea className="textarea" placeholder="Message" required></textarea>
                    <div className="but">
                        <button type="submit" className="butt">Send Now</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact; // Ensure this is the default export
