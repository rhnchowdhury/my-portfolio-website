import React from "react";
import img1 from "../../../assets/travel/img1.jpg";
import img2 from "../../../assets/travel/img2.jpg";
import img3 from "../../../assets/travel/img3.jpg";

const Travel = () => {
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
            <h1 className="text-5xl font-bold">GOL Travel Agent</h1>
            <p className="py-6">
              GOL Travel Agency is a full-service travel agency committed to
              providing high-quality, personalized travel planning services.{" "}
              <br />
              We believe that every journey begins with a dream—and we’re here
              to turn that dream into reality. Whether you’re planning a
              relaxing getaway, a business trip, or an adventurous expedition,
              GOL is your trusted partner in travel.
            </p>
            <h3 className="text-3xl font-bold">Features:</h3>
            <ul className="mt-4">
              <li>
                1. Responsive design: desktop, tablet & smartphone layouts
              </li>
              <li>2. Used Tailwind Css for building this website</li>
              <li>3. It has Holiday Packages system.</li>
              <li>
                4. It has Flight Bookings parts. User can booking flight where
                user want to go.
              </li>
              <li>5. It has Hotel Reservations parts</li>
              <li>6. It gives user Visa & Travel Insurance</li>
              <li>7. It also has Group & Corporate Travel system</li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://agumentik-software-ui.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://agumentik-software-ui.netlify.app/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/Agumentik-Frontend-assignment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/GolTravel
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
