import React from "react";

const Login = () => {
  return (
    <div className="font-urbanist p-3 w-[100vw] h-[100vh] flex justify-center items-center bg-login bg-no-repeat bg-cover lg:bg-center bg-right">
      <div className="sm:w-1/3 w-2/3 bg-white opacity-80 p-5">
        <h1 className="font-bold sm:text-2xl text-lg">SIGN IN</h1>

        <form>
          <div className="w-full border sm:p-3 p-1 my-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-0"
            />
          </div>

          <div className="w-full border sm:p-3 p-1 my-5">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-0"
            />
          </div>

          <button
            type="submit"
            className="border sm:w-auto w-full px-3 py-1 font-bold text-white bg-[#1f061b] hover:bg-[#fff] hover:border-[#1f061b] hover:text-[#1f061b] active:scale-95"
          >
            SIGN IN
          </button>

          <p className="p-2 sm:text-base text-sm mt-5">
            DO NOT YOU REMEMBER THE PASSWORD?{" "}
            <span className="font-bold">CREATE A NEW ACCOUNT</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
