
import React, { useState } from "react";
import { SlLogin } from "react-icons/sl";

const Login = () => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(LoginData);
      handleClearForm(); 
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className=" flex items-center min-h-screen justify-center">
      <div className="bg-white  max-w-md p-8 w-full  shadow-md rounded-xl">
        <h1 className="text-3xl  text-center font-semibold items-center mb-6 flex   justify-center gap-1">
          <SlLogin />
          Login
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={LoginData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={LoginData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />
          <div className="font-bold py-3 px-6  transition duration-300 transform hover:scale-105"><a href="/signup">Forgot your <u>password?</u></a></div>

          <div className="flex justify-between pt-4">
            <button
              type="reset"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-amber-500"
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 rounded text-white ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-800 hover:bg-blue-950"
              }`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>

          <div>
            
             <a href="/Register">Don`t have an Account <u className="font-bold py-4 px-6  transition duration-300 transform hover:scale-105">Register</u></a>
          </div>
        </form>
      </div>
    </div>

    </>
  );
};

export default Login;
