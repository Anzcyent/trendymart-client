import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div className="p-3 bg-beige flex flex-col items-center justify-center text-center font-urbanist h-[40vh] mt-5">
      <h3 className="font-bold sm:text-6xl text-4xl tracking-wide my-3">Newsletter</h3>
      <p className="sm:text-2xl texdt-lg font-semibold text-aqua my-3">
        Get timely updates from your favourite products.
      </p>
      <div className="flex sm:w-1/2 w-full my-3">
        <input type="email" placeholder="Your email" className="outline-0 border-0 w-full h-10 p-2" />
        <button type="button" className="bg-white flex justify-center items-center w-20 hover:bg-black hover:text-white active:scale-95"><AiOutlineSend /></button>
      </div>
    </div>
  );
};

export default Newsletter;
