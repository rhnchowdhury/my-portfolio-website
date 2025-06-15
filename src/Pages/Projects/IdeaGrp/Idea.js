import React from "react";
import img1 from "../../../assets/idea/img1.jpg";
import img2 from "../../../assets/idea/img2.jpg";
import img3 from "../../../assets/idea/img3.jpg";

const Idea = () => {
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
            <h1 className="text-5xl font-bold">IDEA Group Ltd</h1>
            <p className="py-6">
              IDEA Group Is Just What Your Business Needs Provident cupiditate
              voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.
            </p>
            <h3 className="text-3xl font-bold">Features:</h3>
            <ul className="mt-4">
              <li>
                1. Responsive design: desktop, tablet & smartphone layouts
              </li>
              <li>2. Used Tailwind Css for building this website</li>
              <li>3. It Processing immigration and work files</li>
              <li>4. It has experienced immigration experts and own lawyers</li>
              <li>5. It provides Powerful cleaning agent.</li>
              <li>6. Designed to tackle tough stains and dirt on clothing</li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://ipl-group.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://ipl-group.netlify.app/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/IPL-Group-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/IPL-Group-website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
