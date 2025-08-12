import React from "react";
import Contact from "../Contacts/Contact";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="m-12">
      <h1 className="text-7xl font-bold">
        Hi, <br /> I'm Md. <span className="text-purple-600">Rhihan</span>
      </h1>
      <p className="text-2xl font-medium mt-4">
        A <span className="text-purple-600">Front-End Web Developer</span>{" "}
        passionate about <br /> creating interactive applications.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
        <button className="btn btn-circle w-32 bg-purple-600">
          <a href="Resume.pdf" download>
            Resume
          </a>
        </button>
        <div className="grid grid-cols-1 lg:flex  mt-2 ">
          <a
            href="https://www.linkedin.com/in/md-rhihan-0b350120b/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="w-20 h-10 text-purple-600"></FaLinkedin>
          </a>
          <a
            href="https://github.com/rhnchowdhury"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="w-20 h-10 text-purple-600" />
          </a>
          <a
            href="https://twitter.com/RaiHaNC19029735"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter className="w-20 h-10 text-purple-600"></FaTwitter>
          </a>
        </div>
      </div>
      <h1 className="mt-16 text-3xl font-semibold text-purple-600">SKILLS</h1>
      <div className="mt-12 lg:ml-12 lg:shadow-2xl rounded-3xl p-6">
        <ul className="grid grid-cols-2 gap-12 lg:grid-cols-5 lg:gap-5 m-12">
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
            <p className="ml-2">HTML</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"
              alt=""
            />
            <p className="ml-3">CSS</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              className=""
              alt=""
            />
            <p>Javascript</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
              className=""
              alt=""
            />
            <p>React</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg"
              className=""
              alt=""
            />
            <p>Node</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s"
              className=""
              alt=""
            />
            <p>Rest API</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://git-scm.com/images/logo@2x.png"
              className=""
              alt=""
            />
            <p className="ml-4">Git</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://www.gstatic.com/devrel-devsite/prod/v7aeef7f1393bb1d75a4489145c511cdd5aeaa8e13ad0a83ec1b5b03612e66330/firebase/images/lockup.svg"
              className=""
              alt=""
            />
            <p>Firebase</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
              className=""
              alt=""
            />
            <p>MongoDB</p>
          </li>
          <li className="lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png"
              className=""
              alt=""
            />
            <p>Vs Code</p>
          </li>
        </ul>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
