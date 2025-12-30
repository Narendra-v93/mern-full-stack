import {Link} from "react-router-dom";
 const Header= ()=>{
    return(
        <>
        <div className=" flex gap-x-100 p-2 text-black bg-green-400 justify-items-center font-bold justify-between ">
            <h1 className="text-4xl">My Website</h1>
      
        <div className="flex gap-16  ">
           <Link to={"/"} >Home</Link>
           <Link to={"/about"} >About</Link>
           <Link to={"/product"} >Product</Link>
           <Link to={"/contact"} >Contact</Link>
           <Link to={"/signup"} >Signup</Link>
           <Link to={"/login"} >Login</Link>
        </div>
          </div>
        </>
    );


};

export default Header;