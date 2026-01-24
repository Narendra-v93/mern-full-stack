import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { SiHelpdesk } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSidebar = ({ active, setActive,isCollapsed,setIsCollapsed}) => {

  const menuItem = [
    {key: "overview", title: "OverView", icon: <TbChartTreemap/>},
    {key: "profile", title: "Profile", icon: <ImProfile/>},
    {key: "orders", title: "Orders", icon: <FaShoppingCart/>},
    {key: "transaction", title: "Transaction", icon: <GrTransaction/>},
    {key: "helpdesk", title: "Help Desk", icon: <SiHelpdesk/>},
  ]

  
  return (
    <>
   
      
        <div className="p-0">
          <div className="text-xl h-10 font-bold flex gap-5 items-center mb-3 ">
            <button className="ms-2 hover:scale-105"
            onClick={()=> setIsCollapsed(!isCollapsed)}
            >
              &#9776;

            </button>
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">User Deshboard</span>
            )}
        </div>  
      <hr/>

      <div className="grid gap-3 p-3 ">
        {menuItem.map((item,idx) => (
          <button
          className={`flex gap-3 items-center text-lg ps-2 rounded-xl h-15 w-full text-nowrap overflow-hidden duration-300
            ${
              active === item.key
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }
            `}
          onClick={() => setActive(item.key)}
          key={idx}
        >
          {" "}
          {item.icon}
          {!isCollapsed && item.title}
        </button>


        )
        )}
        
        </div>
      </div>
      
    </>
  );
};

export default UserSidebar;
