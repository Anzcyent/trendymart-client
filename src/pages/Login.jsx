import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isFetching, error, errorMessage} = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { username: data.username, password: data.password };

    login(dispatch, user);
  };

  return (
    <div className="font-urbanist p-3 w-[100vw] h-[100vh] flex justify-center items-center bg-login bg-no-repeat bg-cover lg:bg-center bg-right">
      <div className="sm:w-1/3 w-2/3 bg-white opacity-80 p-5">
        <h1 className="font-bold sm:text-2xl text-lg">SIGN IN</h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full border sm:p-3 p-1 my-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-0"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>

          <div className="w-full border sm:p-3 p-1 my-5">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-0"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isFetching}
            className="border disabled:bg-black disabled:cursor-not-allowed sm:w-auto w-full px-3 py-1 font-bold text-white bg-[#1f061b] hover:bg-[#fff] hover:border-[#1f061b] hover:text-[#1f061b] active:scale-95"
          >
            SIGN IN
          </button>

          {error && <p className="p-2 sm:text-base text-sm mt-5 text-red font-bold">{errorMessage}</p>}

          <p className="p-2 sm:text-base text-sm mt-5">
            DO NOT YOU HAVE AN ACCOUNT?{" "}
            <span
              onClick={() => navigate("/register")}
              className="font-bold cursor-pointer hover:opacity-80"
            >
              CREATE A NEW ACCOUNT
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
