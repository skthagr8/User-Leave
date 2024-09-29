import { Outlet, Link } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineForm, AiOutlineHistory, AiOutlineCalendar, AiOutlineSetting, AiOutlineTeam, AiOutlineBell, AiOutlineLogout } from "react-icons/ai"; // Import additional icons

const Layout = () => {
  return (
    <div className="flex min-h-screen">
    
      <nav className="w-64 text-black fixed h-full bg-gray-100">

        <div className="text-center p-6">
          <h1 className="text-3xl font-pacifico text-black">
            Swift Leave
          </h1>
        </div>

        <ul className="p-4">
       
          <li className="mb-4 flex items-center">
            <AiOutlineDashboard className="mr-2 text-xl text-black" />
            <Link to="/Employee-Home-Page" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <AiOutlineForm className="mr-2 text-xl text-black" />
            <Link to="/LeaveApplicationForm" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Apply for Leave
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <AiOutlineHistory className="mr-2 text-xl text-black" />
            <Link to="/Employee-Leave-History" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Leave History
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <AiOutlineCalendar className="mr-2 text-xl text-black" />
            <Link to="/ScheduledLeaves" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Scheduled Leaves
            </Link>
          </li>

     
          <li className="mb-4 flex items-center">
            <AiOutlineSetting className="mr-2 text-xl text-black" />
            <Link to="/Settings" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Personal Settings
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <AiOutlineTeam className="mr-2 text-xl text-black" />
            <Link to="/Members" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Members
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <AiOutlineBell className="mr-2 text-xl text-black" />
            <Link to="/NotificationsPage" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Notifications
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <AiOutlineLogout className="mr-2 text-xl text-black" />
            <Link to="/Logout" className="block p-2 text-lg font-DM_Sans hover:bg-gray-200 rounded">
              Logout
            </Link>
          </li>
        </ul>
      </nav>


      <div className="flex-1 ml-64 p-6 bg-white">

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
