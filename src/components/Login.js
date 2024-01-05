import React, { useState } from "react";
import Header from "./Header";
import { netflix_bg_logo } from "../helper/Constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflix_bg_logo} alt="logo" />
      </div>

      <form className="absolute w-3/12 p-12 text-white bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-4 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
