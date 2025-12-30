
import React, { useState } from "react";
import { SlUserFollow } from "react-icons/sl";

const Signup = () => {
  const [SignupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirm:"",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setSignupData({
      name: "",
      email: "",
      password: "",
      confirm:"",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(SignupData);
      handleClearForm();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6 flex items-center gap-1 justify-center">
          <SlUserFollow />
          Sign Up
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={SignupData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={SignupData.email}
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
            value={SignupData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <label htmlFor="confirm">Confirm Password :</label>
          <input
            id="confirm "
            type="confirm "
            name="confirm "
            value={SignupData.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            
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
                  : "bg-blue-400 hover:bg-blue-500"
              }`}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>

          <div className="text-blue-800 text-center">
            <a href="/Login">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
