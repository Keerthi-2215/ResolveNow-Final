import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Components
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import FAQs from "./components/common/FAQs";
import Contact from "./components/common/Contact";

// User Components
import ComplaintForm from "./components/common/ComplaintForm/ComplaintForm";
import TrackComplaint from "./components/user/TrackComplaint";
import Complaint from "./components/user/Complaint";
import Status from "./components/user/Status";
import HomePage from "./components/user/HomePage";

// Admin & Agent
import AdminHome from "./components/admin/AdminHome";
import AgentHome from "./components/agent/AgentHome";
import AgentInfo from "./components/admin/AgentInfo";
import UserInfo from "./components/admin/UserInfo";

function App() {
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/submit" element={<ComplaintForm />} />
          <Route path="/track" element={<TrackComplaint />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authenticated Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/agentinfo" element={<AgentInfo />} />
              <Route path="/agenthome" element={<AgentHome />} />
              <Route path="/userinfo" element={<UserInfo />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/status" element={<Status />} />
            </>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;