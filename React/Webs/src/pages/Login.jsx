
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
      handleClearForm(); // ✅ success ke baad clear
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6 flex items-center gap-1 justify-center">
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

          <div className="text-blue-800 text-center">
            <a href="/signup">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>

    </>
  );
};

export default Login;
