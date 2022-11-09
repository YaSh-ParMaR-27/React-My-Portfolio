import React from "react";
import { TbLeaf } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { HiCodeBracket } from "react-icons/hi2";

export default function Services() {
  const serviceIcons = [
    { id: 1, child: <BsGrid1X2 size={25} />, title: "UI/UX Designer" },
    { id: 2, child: <HiCodeBracket size={25} />, title: "Web Developer" },
    { id: 3, child: <TbLeaf size={25} />, title: "Digital Animator" },
  ];
  return (
    <section name="Services" className="flex flex-col  items-center h-screen mb-48 md:mb-0 pt-6  bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      <div className="flex flex-col my-10 ">
        <h className="text-4xl p-4 pb-0 mb-6 border-b-4 border-gray-500">Services</h>
        <span className=" text-xl pb-4 ml-8">What i offer</span>
      </div>

      <div className="max-w-screen-lg mx-auto  px-6 md:px-8 grid gap-8 md:grid-flow-col sm:grid-cols-2 md:grid-cols-3 justify-center items-center w-full ">
        {serviceIcons.map(({ id, child, title }) => (
          <div id={id} className="bg-slate-300 p-8 rounded-xl  duration-500 hover:scale-105 shadow-md ">
            <div className="flex flex-col items-center gap-2" >
              <i className="font-extrabold">{child}</i>
              <h3 className="font-bold">{title}</h3>
              <p className="text-center">
                Service that provides the best quality and at the request of the
                client , with profesional work and customer support
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
