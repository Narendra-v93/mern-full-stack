import React, { useState } from "react";
import toast from "react-hot-toast";
import { SlLogin } from "react-icons/sl";
import api from "../config/Api";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ForgotPasswordModal from "../components/publicModels/ForgotPasswordMadal";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();

  const navigate = useNavigate();

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

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

  // if (
  //     !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
  //       formData.email
  //     )
  //   ) {
  //     Error.email = "Use Proper Email Format";
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(LoginData);

    try {
      const res = await api.post("/auth/login", LoginData);
      console.log(LoginData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravigUser", JSON.stringify(res.data.data));
      handleClearForm();

      switch (res.data.data.role) {
        case "customer": {
          setRole("customer");
          navigate("/user-dashboard");
          break;
        }
         case "partner": {
          setRole("rider");
          navigate("/rider-dashboard");
          break;
        }
         case "restaurant": {
          setRole("restaurant");
          navigate("/restaurant-dashboard");
          break;
        }
         case "admin": {
          setRole("admin");
          navigate("/admin-dashboard");
          break;
        }
        default: 
        break;
      }


      // navigate("/user-dashboard");
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className=" flex items-center min-h-screen justify-center  h-[90vh]">
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
              type="email"
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
            <div className="font-bold py-3 px-6  ">
              <button onClick={() => { e.preventDefault(); setShowForgotPasswordModal(true)}}>
                Forgot your{" "}
                <u className="transition duration-300 transform hover:scale-105">
                  password?
                </u>
              </button>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="reset"
                disabled={isLoading}
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
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>

            <div>
              <a href="/Register">
                Don`t have an Account{" "}
                <u className="font-bold py-3 px-6  transition duration-300 transform hover:scale-105">
                  Register
                </u>
              </a>
            </div>
          </form>
        </div>
      </div>

      {showForgotPasswordModal && (
        <ForgotPasswordModal
          onClose={() => setShowForgotPasswordModal(false)}
        />
      )}
    </>
  );
};

export default Login;
