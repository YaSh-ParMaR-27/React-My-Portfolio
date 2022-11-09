import React from "react";
import { BsWhatsapp, BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import ContactForm from "./ContactForm";

export default function ContactMe() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <MdOutlineMarkEmailRead size={20} />
        </>
      ),
      href: "http://outlook.live",
      name: "Email",
      value: "user@gmail.com",
    },
    {
      id: 2,
      child: (
        <>
          <BsWhatsapp size={20} />
        </>
      ),
      href: "http://www.whatsapp.com",
      name: "Whatsapp",
      value: "+91783XXXXXXX",
    },
    {
      id: 3,
      child: (
        <>
          <RiMessengerLine size={25} />
        </>
      ),
      href: "http://www.messenger.com",
      name: "Messenger",
      value: "user.fb123",
    },
  ];

  return (
    <div
      name="contact"
      className="h-screen md:h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-300 to-slate-50"
    >
      <h3 className="font-bold mb-11 text-4xl border-b-2 inline border-black">
        Contact
      </h3>
      <div className=" w-full flex justify-evenly items-center">
        <div className=" hidden md:flex flex-col justify-center items-center ">
          <p className="text-xl border-b-2 border-black">Talk to me</p>
          <div className="flex flex-col">
            {links.map(({ id, child, href, name, value }) => (
              <div className="flex flex-col bg-slate-50 p-4 justify-center items-center mt-3 shadow-xl">
                <p>{child}</p>
                <p>{name}</p>
                <p className="font-bold mb-2">{value}</p>

                <a href={href}>
                  <BsFillArrowRightCircleFill />{" "}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-4/5 md:w-1/4">
          <p className="flex text-2xl mb-3 md:mb-4">
            <span className="mr-2 pt-2  ">
              <RiSendPlaneLine size={20} />
            </span>{" "}
            Write me your Project
          </p>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
        
    </div>
  );
}
