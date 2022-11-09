import React from "react";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import Calculator from "../assets/portfolio/Calculator.jpg"
import Todo from "../assets/portfolio/Todo.jpg"
const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: navbar,
    },
    {
      id: 2,
      src: reactSmooth,
    },
    {
      id: 3,
      src: reactWeather,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: Calculator,
    },
    {
      id: 6,
      src: Todo,
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b pt-20 md:pt-12  from-slate-200 to-slate-50 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-3 text-lg md:text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-10 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center  h-12 ">
                <a href="www.fb.com" className="w-1/2 h-2/3 px-6 py-3 flex items-center justify-center rounded-md  m-4 duration-200 hover:scale-105 hover:bg-slate-400">
                  View Code 
                </a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-slate-500">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
