import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import './Home.css';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-b from-slate-300 to-slate-50 mycss"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full order-last md:order-first ">
          <h3 className="text-4xl sm:text-7xl font-medium ">
            <span className="font-signature2 mr-2">Hy! I am</span> 
            <span className="font-signature2">Yash Parmar</span> 
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
            Frontend developer with high level of experience <br /> in web designing and development.
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div >
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full myimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
