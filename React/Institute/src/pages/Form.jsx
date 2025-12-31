import React from "react";

function Form() {
  return (
    <>
        <nav>
            <div className="bg-blue-600 text-white text-2xl h-15 flex justify-center ">
                <span className="m-3 font-bold text-shadow-amber-50m">Institute Form</span>
            </div>
        </nav>


      <div className="flex justify-center mt-4 ">
        <form>
          <div className="w-full max-w-4xl bg-white border rounded-lg shadow p-4">
            {/* Personal Information */}
            <div className="relative border border-black rounded p-4 pt-6 my-4">
              <span className="absolute left-4 -top-3 bg-white px-2 text-lg text-blue-600">
                Personal Information
              </span>

              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="fullName" className="w-1/4">
                    Full Name: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="email" className="w-1/4">
                    Email Address: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="mobile" className="w-1/4">
                    Mobile No: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="number"
                    id="mobile"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="dob" className="w-1/4">
                    D.O.B: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Academic Details */}
            <div className="relative border border-black rounded p-4 pt-6 my-4">
              <span className="absolute left-4 -top-3 bg-white px-2 text-lg text-blue-600">
                Academic Details
              </span>

              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="qualification" className="w-1/4">
                    Qualification: <sup className="text-red-500">*</sup>
                  </label>
                  <select
                    id="qualification"
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">--Select Qualification</option>
                    <option value="10">Secondary Schooling</option>
                    <option value="12">Senior Secondary Schooling</option>
                    <option value="UG">Graduation</option>
                    <option value="PG">Post Graduation</option>
                    <option value="PHD">Ph.D</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="score" className="w-1/4">
                    Percentage / Grade: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    id="score"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="relative border border-black rounded p-4 pt-6 my-4">
              <span className="absolute left-4 -top-3 bg-white px-2 text-lg text-blue-600">
                Course Information
              </span>

              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="course" className="w-1/4">
                    Available Courses: <sup className="text-red-500">*</sup>
                  </label>
                  <select
                    id="course"
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">--Select Course</option>IIT-JEE, NEET, ,
                    <option value="JEE">IIT-JEE</option>
                    <option value="NEET">NEET</option>
                    <option value="BE">Banking Exams</option>
                    <option value="UPSC">UPSC</option>
                    <option value="FSD">Full Stack Development</option>
                    <option value="DS">Data Science</option>
                    <option value="DA">Data Analytics</option>
                    <option value="J-DSA">Java DSA</option>
                    <option value="P-DSA">Python DSA</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-1/4">
                    Preferred Batch: <sup className="text-red-500">*</sup>
                  </label>

                  <div className="flex gap-6">
                    {["Morning", "Afternoon", "Evening", "Weekends"].map(
                      (item) => (
                        <label key={item} className="flex items-center gap-2">
                          <input type="checkbox" className="accent-red-500" />
                          {item}
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="relative border border-black rounded p-4 pt-6 my-4">
              <span className="absolute left-4 -top-3 bg-white px-2 text-lg text-blue-600">
                Address Information
              </span>

              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="RA" className="w-1/4">
                    Residential Address: <sup className="text-red-500">*</sup>
                  </label>
                  <textarea
                    name="RA"
                    id="RA"
                    className="w-full border rounded px-2 py-1"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="city" className="w-1/4">
                    City: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label htmlFor="pin" className="w-1/4">
                    Pin Code: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="number"
                    id="pin"
                    className="w-full border rounded px-2 py-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Guardian Details */}
            <div className="relative border border-black rounded p-4 pt-6 my-4">
              <span className="absolute left-4 -top-3 bg-white px-2 text-lg text-blue-600">
                Guardian Details
              </span>

              <div className="grid gap-4">
                {/* Guardian Full Name */}
                <div className="flex items-center gap-4">
                  <label htmlFor="guardianName" className="w-1/4">
                    Guardian’s Full Name: <sup className="text-red-500">*</sup>
                  </label>

                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    required
                    pattern="[A-Za-z ]+"
                    placeholder="Enter guardian full name"
                    className="w-full border rounded px-2 py-1"
                  />
                </div>

                {/* Guardian Contact Number */}
                <div className="flex items-center gap-4">
                  <label htmlFor="guardianMobile" className="w-1/4">
                    Guardian’s Contact Number:{" "}
                    <sup className="text-red-500">*</sup>
                  </label>

                  <input
                    type="tel"
                    id="guardianMobile"
                    name="guardianMobile"
                    required
                    pattern="[6-9][0-9]{9}"
                    placeholder="10-digit mobile number"
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="relative border border-black rounded p-4 pt-6 my-4">
              <span className="absolute left-4 -top-3 bg-white px-2 text-lg text-blue-600">
                Additional Information
              </span>

              <div className="grid gap-4">
                {/* How did you hear about us */}
                <div className="flex items-center gap-4">
                  <label htmlFor="source" className="w-1/4">
                    How did you hear about us?:{" "}
                    <sup className="text-red-500">*</sup>
                  </label>

                  <select
                    id="source"
                    name="source"
                    required
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">--Select Option--</option>
                    <option value="friends">Friends</option>
                    <option value="online">Online Ad</option>
                    <option value="newspaper">Newspaper</option>
                    <option value="social">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Special Requirements */}
                <div className="flex items-start gap-4">
                  <label htmlFor="specialRequirements" className="w-1/4 pt-1">
                    Special Requirements (Optional):
                  </label>

                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows="3"
                    placeholder="Mention any special needs or preferences"
                    className="w-full border rounded px-2 py-1 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="reset"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-400 mr-5 "
            >
              clear form
            </button>

             <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800 "
            >
              Submit
            </button>


          </div>
        </form>
      </div>
    </>
  );
}

export default Form;