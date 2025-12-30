import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };


  return (
    <>
      <div className="flex justify-center">
        <div className="text-center">
        <h1 className="font-bold text-2xl " >Contact Us</h1>
        
        <div className="container">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="bg-amber-100  max-w-md p-8 w-full  shadow-md rounded-xl">
            <div>
              <label htmlFor="fullName">Full Name :-</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={contactData.fullName}
                onChange={handleChange}

                
                placeholder="Enter your Name"
                 className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2"
            required
              />
            </div>

            <div>
              <label htmlFor="email">Email :-</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                 className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2 "
            required
              />
            </div>

            <div>
              <label htmlFor="phone">Phone :-</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                 className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2"
            required
              />
            </div>

            <div>
              <label htmlFor="city">City :-</label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                 className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2"
            required
              />
            </div>

            <div>
              <label htmlFor="subject">Subject :-</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                 className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2"
            required
              />
            </div>

            <div>
              <label htmlFor="religion">Religion :-</label>
              <select
                name="religion"
                id="religion"
                onChange={handleChange}
                value={contactData.religion}
                className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2 ml-2"
              >
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="sikhism">Sikhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender">Gender :-</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                className="ml-2"
                checked={contactData.gender === "male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              Other
            </div>

            <div>
              <label htmlFor="skill">Skill known :-</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                className="ml-2 mb-2"
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />{" "}
              HTML
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />{" "}
              CSS
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "js"
                  )
                    ? true
                    : false
                }
              />{" "}
              JS
              <input
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).includes("react")
                }
              />{" "}
              React
            </div>

            <div>
              <label htmlFor="message">Message :-</label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                 className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2"
            required
              ></textarea>
            </div>
            <div>
               <button
              type="clear"
              disabled={isLoading}
              className={`px-6 py-2 rounded text-white ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-blue-950"
              }`}
            >
              {isLoading ? "Loading..." : "clear"}
            </button>
               <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 ml-2 rounded text-white ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-800 hover:bg-blue-950"
              }`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Contact;
