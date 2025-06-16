import React from "react";
import img1 from "../../../assets/gym/img1.jpg";
import img2 from "../../../assets/gym/img2.jpg";
import img3 from "../../../assets/gym/img3.jpg";

const Gym = () => {
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
            <h1 className="text-5xl font-bold">Online Gym Trainer</h1>
            <p className="py-6">
              Online Training platform with monthly subscription. Enjoy every
              week with new and direct classes prepared for you with unlimited
              access to more than 100 different routines everyday. Where you can
              see your daily gym routine. you can take advice from the trainer
              from anywhere. Also can book appointment for trainer suggestions.
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
              <li>
                6. It has add service part where you can add your preferable
                service.
              </li>
              <li>7. User can add review & also see others review.</li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://online-gym-trainer.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://online-gym-trainer.netlify.app/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/Online-fitness-trainer-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/Online-fitness-trainer-client
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
