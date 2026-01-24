import React, { useState } from "react";
import UserSidebar from "../../components/userDashboard/userSidebar";
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOrder from '../../components/userDashboard/UserOrder';
import UserTransaction from '../../components/userDashboard/UserTransaction';
import UserHelpDesk from '../../components/userDashboard/UserHelpDesk';
import UserOverview from "../../components/userDashboard/userOverview";


const UserDashboard = () => {
  const [active, setActive] = useState('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  
  return (
    <>
    
      <div className="w-full h-[90vh] flex">
        <div className={`bg-gray-500 duration-300  ${isCollapsed ? "w-2/60" : "w-12/60"} `}>
          <UserSidebar active = {active} setActive={setActive} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>
        <div className="border border-amber-700 w-11/14">
        {active === 'overview' && <UserOverview/>}
        {active === 'profile' && <UserProfile/>}
        {active === 'orders' && <UserOrder/>}
        {active === 'transaction' && <UserTransaction/>}
        {active === 'helpdesk' && <UserHelpDesk/>}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
