import React from "react";
import img1 from "../../../assets/pets/img1.png";
import img2 from "../../../assets/pets/img2.png";
import img3 from "../../../assets/pets/img3.jpg";

const Pets = () => {
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
            <h1 className="text-5xl font-bold">Artificial Pets</h1>
            <p className="py-6">
              Artificial pets are digital or robotic animals designed to mimic
              the behavior of real pets. In an era where technology is reshaping
              every part of our lives, artificial pets—also known as robotic or
              virtual pets—have emerged as innovative companions that combine
              emotional support with cutting-edge technology.
            </p>
            <h3 className="text-3xl font-bold">Features:</h3>
            <ul className="mt-4">
              <li>
                1. Responsive design: desktop, tablet & smartphone layouts
              </li>
              <li>2. Used Tailwind Css for building this website</li>
              <li>3. It has Login System With FireBase</li>
              <li>
                4. For creating server API it's being used Express & Node JS
              </li>
              <li>5. It's data stored in MongoDB</li>
              <li>6. It has blog part</li>
              <li>7. It has also selling part.</li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://artificial-pets.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://artificial-pets.netlify.app/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/Artificial-pets-resale-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/Artificial-pets-resale-client
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pets;
