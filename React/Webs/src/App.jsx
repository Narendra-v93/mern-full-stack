import react from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import { FaHome } from "react-icons/fa";
import Login from "./pages/Login";
import Signup from './pages/Signup';



  const App= () =>{

    return (
    <>
     {/* <div className="bg-red-500 text-white">App</div>
     <div className="bg-[#ffbfde] m-1.25">Home</div>
     <button className="border border-blue-700 rounded bg-amber-300 text-red-50 px-3 py-1 hover:bg-amber-700">ABCD</button>
     <div className="grid grid-cols-5 justify-items-center gap-2">
      <div className="border p-3 w-10 h-10">1</div>
      <div className="border p-3 w-10 h-10">2</div>
      <div className="border p-3 w-10 h-10">3</div>
      <div className="border p-3 w-10 h-10">4</div>
      <div className="border p-3 w-10 h-10">5</div>
      <div className="border p-3 w-10 h-10">6</div>
      <div className="border p-3 w-10 h-10">7</div>
      <div className="border p-3 w-10 h-10">8</div>
      <div className="border p-3 w-10 h-10">9</div>
      <div className="border p-3 w-10 h-10">10</div>
     </div> */}

      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="Login" element={<Login/>}/>
      <Route path="Signup" element={<Signup/>}/>

       </Routes>

       


     <Footer/>
      </BrowserRouter>
   
   
   
   
    </>
  );
  }

  


export default App