import React from "react";
import img1 from "../../../assets/rcc/img1.jpg";
import img2 from "../../../assets/rcc/img2.jpg";
import img3 from "../../../assets/rcc/img3.jpg";

const RainCloud = () => {
  return (
    <div className="mt-5 lg:m-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={img1} alt="" className="max-w-sm rounded-lg shadow-2xl" />
            <img
              src={img2}
              alt=""
              className="max-w-sm rounded-lg shadow-2xl my-6"
            />
            <img src={img3} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className=" lg:ml-16 lg:mb-auto">
            <h1 className="text-5xl font-bold">RainCloud Communications Ltd</h1>
            <p className="py-6">
              We are an Advertising & Marketing firm. We're here to help your
              business excel in a competitive market. Discover how we can
              elevate your brand today. We create eye-catching and effective
              materials that build brand identity, engage audiences, and drive
              success. We specialize in creating strategic and effective
              contents for various digital and social media platforms.
            </p>
            <h3 className="text-3xl font-bold">Features:</h3>
            <ul className="mt-4">
              <li>
                1. Responsive design: desktop, tablet & smartphone layouts
              </li>
              <li>2. Used Tailwind Css for building this website</li>
              <li>3. It Help Brands Grow To Their Full Potential</li>
              <li>4. It is an Advertising & Marketing firm.</li>
              <li>5. It has business portfolio section.</li>
              <li>6. It has case study</li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://raincloud-comms-ltd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://raincloud-comms-ltd.netlify.app/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/RainCloud-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/RainCloud-website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainCloud;
