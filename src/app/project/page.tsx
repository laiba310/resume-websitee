import Image from "next/image";
import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from 'next/link';

function Project() {
  return (
    <div className="main">
      <div>
        <Header />
        <h1 className="hea8">Project</h1>
        <div className="pro1">
          <div className="ii">
            <div className="he1">
              <h1>REAL ESTATE WEBSITE</h1>
            </div>
            <div className="par1">
              This real estate website, built with Next.js and styled using Tailwind CSS, showcases luxury property investment opportunities with a clean, modern design. The page highlights an investment project in San Diego, featuring a countdown timer, project details, and clear call-to-action buttons to attract potential investors. The responsive layout ensures a seamless experience across all devices, making it visually appealing and user-friendly.
            </div>
          </div>
          <div className="I1">
            <Link href="https://real-state-eight-beige.vercel.app/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  className="ss"
                  src="/Screenshot 2024-11-01 125106.png"
                  alt="Screenshot of Real Estate Website"
                  width={800}
                  height={300}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="pro1">
          <div className="ii">
            <div className="he1">
              <h1>E-COMMERCE WEBSITE</h1>
            </div>
            <div className="par1">
              This e-commerce site, crafted with custom CSS and Node.js, offers a sleek, modern design tailored to attract and engage users, particularly in the furniture sector. With a smooth, responsive layout, it provides an ideal platform for showcasing products and delivering a seamless shopping experience.
            </div>
          </div>
          <div className="I1">
            <Link href="https://website-2-omega-five.vercel.app/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  className="ss"
                  src="/Screenshot 2024-11-01 125007.png"
                  alt="Screenshot of E-commerce Website"
                  width={800}
                  height={300}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="pro1">
          <div className="ii">
            <div className="he1">
              <h1>FORM WEBSITE</h1>
            </div>
            <div className="par1">
              In this project, I have developed a user-friendly contact form using HTML and CSS. The form is designed to facilitate communication between user&apos;s and the website by collecting essential information such as the users name, email address, and a message.
            </div>
          </div>
          <div className="I1">
            <Link href="https://resume-builder-inky-mu.vercel.app/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  className="ss"
                  src="/Screenshot 2024-11-01 124927.png"
                  alt="Screenshot of Form Website"
                  width={800}
                  height={300}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
