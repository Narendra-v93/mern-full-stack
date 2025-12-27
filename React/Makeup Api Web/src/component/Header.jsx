import React from "react";
import {link} from "react-router-dom";
 const Header= ()=>{
    return(
        <>
        <div className="d-flex justify-content-between p-2 bg-primary text">
            <h3>My web</h3>
            <div className="d-flex gap-3">
                <Link to={"/"} className="text-decoration-none text-light">Home</Link>
                <Link to={"/About"} className="text-decoration-none text-light">About</Link>
                <Link to={"/Product"} className="text-decoration-none text-light">Product</Link>
                <Link to={"/Contact"} className="text-decoration-none text-light">Contact</Link>

            </div>



        </div>
        </>
    );


};

export default Header;