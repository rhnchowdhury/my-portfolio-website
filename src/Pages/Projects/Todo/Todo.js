import React from "react";
import img1 from "../../../assets/todo/img1.jpg";
import img2 from "../../../assets/todo/img2.png";

const Todo = () => {
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
          </div>
          <div className=" lg:ml-16 lg:mb-auto">
            <h1 className="text-5xl font-bold">TODO App</h1>
            <p className="py-6">
              A To-Do App is more than just a checklist—it's a habit-forming
              tool that helps people live more organized, intentional lives.
              <br />
              It replaces paper lists and helps us stay on top of what needs to
              be done—anytime, anywhere.
            </p>
            <h3 className="text-3xl font-bold">Features:</h3>
            <ul className="mt-4">
              <li>
                1. Responsive design: desktop, tablet & smartphone layouts
              </li>
              <li>2. Used Tailwind Css for building this website</li>
              <li>3. Add Tasks Quickly</li>
              <li>4. It has Edit and Update part</li>
              <li>5. Remove unwanted or completed items from the list.</li>
              <li>6. It Improves Time Management</li>
              <li>7. User-Friendly Interface</li>
            </ul>
            <p className="mt-4 mb-4">
              Live Link:{" "}
              <a
                href="https://react-todoapp-crt.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://react-todoapp-crt.netlify.app/
              </a>
            </p>
            <p>
              GitHub Code Link:{" "}
              <a
                href="https://github.com/rhnchowdhury/TODO-APP-using-React"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600">
                https://github.com/rhnchowdhury/TODO-APP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
