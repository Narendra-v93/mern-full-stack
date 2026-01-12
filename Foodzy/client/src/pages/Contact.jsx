import React from "react";
import food from "../assets/food.jpg";
import food2 from "../assets/food2.webp";

const Contact = () => {

  // const [contactData, setContactData] = useState({
  //   fullName: "",
  //   email: "",
  //   message: "",
   
  // });

  //  const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     let temp = contactData.skill;
  //     if (checked) {
  //       temp.push(value);
  //       setContactData((previousData) => ({ ...previousData, [name]: temp }));
  //     } else {
  //       temp = Object.values(temp); //Convert to Array
  //       temp = temp.filter((word) => word !== value); //Remove the Undersired Value
  //       setContactData((previousData) => ({ ...previousData, [name]: temp }));
  //     }
  //   } else {
  //     setContactData((previousData) => ({ ...previousData, [name]: value }));
  //   }
  // };

  //  const handleClearForm = () => {
  //   setContactData({
  //     fullName: "",
  //     email: "",
  //     message: "",
      
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     console.log(contactData);
  //   } catch (error) {
  //     console.log(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  //   handleClearForm();
  // };


  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="relative inline-block ">
          <img src={food} alt="" className="w-400 h-auto" />
          <div className="absolute top-5 left-5  bg-opacity-50 text-white text-6xl font-bold px-4 py-2 rounded">
            Contact Us
          </div>
          <div className="absolute top-20 left-50  bg-opacity-50 text-white text-2xl font-bold px-4 py-2 rounded">
            <div>
              Are you a food lover? If your answer is yes, then a restaurant for
              you.
            </div>
            <div>
              We serve foods for reasonable price. It`s awesome, we know.
            </div>

            <div className="mt-20  border-5 rounded-2xl shadow-2xl gap-5 flex">
              <div>
                <div className="ml-5 mt-5">
                <label htmlFor="fullName">Full Name :-</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  // value={contactData.fullName}
                  // onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2 "
                  
                />
              </div>
              <div className="ml-18 mt-5">
                <label htmlFor="email">Email :-</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value={contactData.email}
                  // onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2 "
                  
                />
              </div>
              <div className="ml-9">
                <label htmlFor="message">Message :-</label>
                <textarea
                  name="message"
                  id="message"
                  // value={contactData.message}
                  // onChange={handleChange}
                  placeholder="Enter your Message"
                  required
                  className="border  rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none mb-2 mt-3"
                  
                ></textarea>
              </div>
              <button  className="flex-1 bg-gray-300 text-gray-800 font-bold mt-5 ml-20 py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105">
                Submit
              </button>
              </div>
              <div className="max-w-sm mx-auto">
                <img src={food2} alt="" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
