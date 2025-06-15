import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/projects/img1.jpg";
import img2 from "../../assets/projects/img2.jpg";
import img3 from "../../assets/projects/img3.jpg";
import img4 from "../../assets/projects/img4.jpg";
import img5 from "../../assets/projects/img5.jpg";
import img6 from "../../assets/projects/img6.png";
import img7 from "../../assets/projects/img7.jpg";
import img8 from "../../assets/projects/img8.png";
import img9 from "../../assets/projects/img9.jpg";
import img10 from "../../assets/projects/img10.png";
import img11 from "../../assets/projects/img11.jpg";

import Contact from "../Contacts/Contact";

const Project = () => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img1} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Khukumoni Welfare Foundation</h2>
          <p>
            We are working to build a country free of illiteracy, hunger,
            poverty and make people realize their rights to become respected
            citizens.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/khuku">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img2} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">RainCloud Communications Ltd</h2>
          <p>
            We are a dynamic and results-driven 360 marketing agency dedicated
            to propelling your business to new heights in the digital age.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/garage">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img3} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">IDEA Group Ltd</h2>
          <p>
            We understand the importance of approaching each work integrally and
            believe in the power of simple and easy communication.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/garage">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img4} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Artificial Pet's</h2>
          <p>
            AI Pets site where you can buy pets and also sell your domestic
            pets. Client easily finds there favorite pets in here. And see pets
            related treatments.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/garage">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img5} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Online Gym</h2>
          <p>
            Where you can see your daily gym routine. you can take advice from
            the trainer from anywhere. Also can book appointment for trainer
            suggestions.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/garage">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img6} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mobile Garage</h2>
          <p>
            A mobile garage involves a mechanic who performs mobile repairs and
            maintenance in the customer's desired.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/garage">Details</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img7} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">GOL Travel Agent</h2>
          <p>
            A govt approved travel agent where you can see your flight details.
            Anyone can books their desire flight with appropriate packages.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/sage">Details</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img8} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Todo App</h2>
          <p>
            Your daily activities web app. Where you can list your daily task,
            what you will do in that's day. It's make your life perfect.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/life">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img9} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Programming Sage</h2>
          <p>
            It covering many aspects of languages, including C, Java, Python,
            JavaScript, PHP, Kotlin and Swift.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/code">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img10} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Daily Life Activities</h2>
          <p>
            Daily-life is a activity web app. See what you are doing in every
            day and calculate it very easily.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/code">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img11} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">CodeHS</h2>
          <p>
            CodeHS is about providing excellent teaching and learning
            opportunities in computer science for students all over the world.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to="/code">Details</Link>
            </button>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Project;
