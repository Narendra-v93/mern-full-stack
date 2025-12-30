import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";



function App() {
  // let a = 5;
  // let b = 10;
  // console.log(a+b);

  return (
    <>
      {/* <h1 id="head">
        <i className="bi bi-airplane-engines-fill"></i> Hello World
      </h1> */}


      {/* <div className="bg-primary text-light">This is my first React App</div>
      <Header />
      <Home/>
      <Footer/> */}


      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
       </Routes>



   <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;