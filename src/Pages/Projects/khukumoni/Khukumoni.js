import React from "react";
import img1 from "../../../assets/khukumoni/img1.png";
import img2 from "../../../assets/khukumoni/img2.png";
import img3 from "../../../assets/khukumoni/img3.png";

const Khukumoni = () => {
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
            <h1 className="text-5xl font-bold">Khukumoni Welfare Foundation</h1>
            <p className="py-6">
              Khukumoni Foundations is a non-profit organization committed to
              making a positive impact on the lives of underserved communities
              in Bangladesh. Founded in [Year], our mission is to promote
              sustainable development, education, healthcare, and social
              welfare, with a focus on empowering individuals and communities to
              break the cycle of poverty.
            </p>
            <h3 className="text-3xl font-bold">Features:</h3>
            <ul className="mt-4">
              <li>
                1. Responsive design: desktop, tablet & smartphone layouts
              </li>
              <li>2. Used Tailwind Css for building this website</li>
              <li>3. It has Donate option for helpless People</li>
              <li>4. After Sign in one can donate as much as wants</li>
              <li>
                5. For creating server API it's being used Express & Node JS
              </li>
              <li>6. It's data stored in MongoDB</li>
              <li>7. It has volunteer option for being volunteer.</li>
              <li>
                8. Donate for helpless people, Palestine people, & others poor
                country people.
              </li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://khukumoni.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://khukumoni.com/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/Khukumoni-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/Khukumoni-Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khukumoni;
