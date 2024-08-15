import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-80 my-36 rounded-lgs">
        <h1 className="py-4 text-3xl font-bold">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700"
        />
        <button className="w-full p-4 my-6 bg-red-700 rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
