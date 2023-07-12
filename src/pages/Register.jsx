import React from "react";

const Register = () => {
  return (
    <div className="font-urbanist p-3 w-[100vw] h-[100vh] flex justify-center items-center bg-register bg-no-repeat bg-cover bg-center">
      <div className="w-2/3 bg-white sm:h-2/3 h-auto opacity-80 p-5">
        <h1 className="font-bold sm:text-2xl text-lg">CREATE AN ACCOUNT</h1>

        <form className="w-full">
          <div className="flex sm:flex-row flex-col w-full sm:my-5 my-0">
            <div className="sm:w-1/2 w-full border sm:p-3 p-1 sm:mx-2 mx-0 sm:my-0 my-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full outline-0"
              />
            </div>

            <div className="sm:w-1/2 w-full border sm:p-3 p-1 sm:mx-2 mx-0 sm:my-0 my-2">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full outline-0"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col w-full sm:my-5 my-0">
            <div className="sm:w-1/2 w-full border sm:p-3 p-1 sm:mx-2 mx-0 sm:my-0 my-2">
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-0"
              />
            </div>

            <div className="sm:w-1/2 w-full border sm:p-3 p-1 sm:mx-2 mx-0 sm:my-0 my-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full outline-0"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col w-full sm:my-5 my-0">
            <div className="sm:w-1/2 w-full border sm:p-3 p-1 sm:mx-2 mx-0 sm:my-0 my-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-0"
              />
            </div>

            <div className="sm:w-1/2 w-full border sm:p-3 p-1 sm:mx-2 mx-0 sm:my-0 my-2">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full outline-0"
              />
            </div>
          </div>

          <p className="p-2 sm:text-base text-sm">By creating an account I consent to the processing of my personal data in accordance with the <span className="font-bold">PRIVACY POLICY</span>.</p>

          <button type="submit" className="border sm:w-auto w-full sm:mx-2 mx-0 px-3 py-1 font-bold text-white bg-[#1f061b] hover:bg-white hover:text-[#1f061b] active:scale-95">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
