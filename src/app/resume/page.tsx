import Image from "next/image";
import React from 'react';
import Header from "@/components/header";

function Resume() {
  return (
    <div>
      <Header />

      <div className="hea6">Resume</div>

      <div id="content" className="page-contenttt">
        <div className="row">
          <div className="block-title">
            <h2>Education</h2>
          </div>

          <div id="timeline_1" className="timeline">

            <div className="timeline-item">
              <div className="timeline-circle">2024</div>
              <div className="timeline-content">
                <h5 className="item-period">Currently Enrolled</h5>
                <h4 className="item-title">Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse</h4>
                <p>This immersive program equips me with in-depth knowledge of the latest advancements in artificial intelligence, Web 3.0, and the metaverse, enhancing my expertise and preparing me for future industry demands.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-circle">2024</div>
              <div className="timeline-content">
                <h5 className="item-period">Intermediate Completed</h5>
                <h4 className="item-title">St. Patrick&apos;s College</h4> {/* Escaped apostrophe */}
                <p>My studies at St. Patrick&apos;s College provided me with a strong academic foundation, focusing on analytical skills and a deeper understanding of science and technology, setting a solid path for my future educational pursuits.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-circle">2022</div>
              <div className="timeline-content">
                <h5 className="item-period">Schooling Completed</h5>
                <h4 className="item-title">The Smart School</h4>
                <p>My journey at The Smart School developed my passion for learning, emphasizing academic excellence and character development, which motivated my pursuit of higher education in tech-related fields.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6">
        <div className="block-titlee">
          <h2>Coding Skills</h2>
        </div>

        <div className="skills">
          <div className="skill">
            <p>HTML / CSS <span>100%</span></p>
            <div className="progress">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>C++ <span>95%</span></p>
            <div className="progress">
              <div className="progress-bar" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>Node.js <span>60%</span></p>
            <div className="progress">
              <div className="progress-bar" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>TypeScript <span>75%</span></p>
            <div className="progress">
              <div className="progress-bar" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        <div className="anoski">
          <h1 className="hea9"> Other skill</h1>
          <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h5 className="item-period">Copywriter</h5>
          <h4 className="item-title">Copywriting Specialist</h4>
          <p>As a copywriter, I craft compelling and persuasive text for various marketing and promotional materials. I play a crucial role in shaping the voice and tone of a brand, creating engaging content for advertisements, websites, social media, and more. By understanding target audiences and employing strategic language, I drive customer action and enhance brand messaging.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h5 className="item-period">Web Design</h5>
          <h4 className="item-title">Web Designer</h4>
          <p>A web designer is responsible for creating visually appealing and user-friendly websites. They focus on layout, color schemes, typography, and overall aesthetics to ensure that websites are both functional and attractive. Web designers work closely with clients and developers to build websites that meet user needs, enhance user experience, and align with brand identity.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h5 className="item-period">Graphic Design</h5>
          <h4 className="item-title">Graphic Designer</h4>
          <p>Graphic designers use visual elements to communicate messages and ideas effectively. They create graphics for various mediums such as print, digital, and social media. Their work includes designing logos, brochures, posters, and other visual materials. Graphic designers blend creativity with technical skills to deliver visually compelling solutions that capture attention and convey information clearly.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h5 className="item-period">Data Entry</h5>
          <h4 className="item-title">Data Entry Specialist</h4>
          <p>A data entry specialist manages and inputs data into computer systems and databases. They ensure accuracy and efficiency in handling large volumes of information, including entering, updating, and verifying data. Data entry specialists often work in administrative or support roles, providing critical data management and organizational support to ensure smooth business operations.</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
