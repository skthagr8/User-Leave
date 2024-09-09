import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/layout/Navbar';
import EmployeeHome from './pages/Employee-View/EmployeeHome';
import LeaveApplicationForm from './pages/Employee-View/LeaveApplicationForm';
import LeaveStatus from './pages/Employee-View/LeaveStatus';
import ManagerLeaveApproval from './pages/Managers-View/ManagerLeaveApproval';
import AllEmployeesLeaveHistory from './pages/Managers-View/AllEmployeesLeaveHistory';
import AllEmployeesOnLeave from './pages/Managers-View/AllEmployeesOnLeave';
import ScheduledLeaves from './pages/Managers-View/ScheduledLeaves';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/Settings';
import EmployeeLeaveHistory from'./pages/Employee-View/EmployeeLeaveHistory';
import ColleaguesOnLeave from './pages/Employee-View/ColleaguesOnLeave';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Start" element={<LandingPage />} />
          <Route path="/Employee-Home-Page" element={<EmployeeHome />} />
          <Route path="/LeaveApplicationForm" element={<LeaveApplicationForm />} />
          <Route path="/Leave-Status" element={<LeaveStatus />} />
          <Route path="/Employee-Leave-History" element={<EmployeeLeaveHistory />} />
          <Route path='/ColleaguesOnLeave' element={<ColleaguesOnLeave />} />

          <Route path="/ManagerLeaveApproval" element={<ManagerLeaveApproval />} />
          <Route path="/AllEmployeesLeaveHistory" element={<AllEmployeesLeaveHistory />} />
          <Route path="/AllEmployeesOnLeave" element={<AllEmployeesOnLeave />} />
          <Route path="/ScheduledLeaves" element={<ScheduledLeaves />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/NotificationsPage" element={<NotificationsPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
