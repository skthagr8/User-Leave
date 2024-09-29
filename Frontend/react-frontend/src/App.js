import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './components/layout/Layout';  // Import the Layout component
import EmployeeHome from './pages/Employee-View/EmployeeHome';
import LeaveApplicationForm from './pages/Employee-View/LeaveApplicationForm';
import LeaveStatus from './pages/Employee-View/LeaveStatus';
import ManagerLeaveApproval from './pages/Managers-View/ManagerLeaveApproval';
import AllEmployeesLeaveHistory from './pages/Managers-View/AllEmployeesLeaveHistory';
import AllEmployeesOnLeave from './pages/Managers-View/AllEmployeesOnLeave';
import ScheduledLeaves from './pages/Managers-View/ScheduledLeaves';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/Settings';
import EmployeeLeaveHistory from './pages/Employee-View/EmployeeLeaveHistory';
import ColleaguesOnLeave from './pages/Employee-View/ColleaguesOnLeave';
import ManagerHome from './pages/Managers-View/ManagerHome';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Route without Layout */}
          <Route path="/Start" element={<LandingPage />} />

          {/* Routes with Navbar and Sidebar (wrapped inside Layout) */}
          <Route element={<Layout />}>
            {/* Employee Views */}
            <Route path="/Employee-Home-Page" element={<EmployeeHome />} />
            <Route path="/LeaveApplicationForm" element={<LeaveApplicationForm />} />
            <Route path="/Leave-Status" element={<LeaveStatus />} />
            <Route path="/Employee-Leave-History" element={<EmployeeLeaveHistory />} />
            <Route path='/ColleaguesOnLeave' element={<ColleaguesOnLeave />} />

            {/* Manager Views */}
            <Route path="/ManagerLeaveApproval" element={<ManagerLeaveApproval />} />
            <Route path="/ManagerHome" element={<ManagerHome />} />
            <Route path="/AllEmployeesLeaveHistory" element={<AllEmployeesLeaveHistory />} />
            <Route path="/AllEmployeesOnLeave" element={<AllEmployeesOnLeave />} />
            <Route path="/ScheduledLeaves" element={<ScheduledLeaves />} />

            {/* Common Views */}
            <Route path="/Settings" element={<SettingsPage />} />
            <Route path="/NotificationsPage" element={<NotificationsPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register/>} />
            


          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
