import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaInbox } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const [activeLink, setActiveLink] = useState("/Kanbas/Dashboard");

  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} className="kanbas-nav rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center"><img src="/images/NEU.png" width="80px" /></a>
      <Link to="/Kanbas/Account" id="wd-account-link" className={`list-group-item text-center border-0 ${activeLink === "/Kanbas/Account" ? "active" : ""}`}
        onClick={() => setActiveLink("/Kanbas/Account")}><FaRegCircleUser className="fs-1" /><br />Account</Link>
      <Link to="/Kanbas/Dashboard"
        id="wd-dashboard-link" className={`list-group-item text-center border-0 ${activeLink === "/Kanbas/Dashboard" ? "active" : ""}`} 
        onClick={() => setActiveLink("/Kanbas/Dashboard")}><AiOutlineDashboard className="fs-1" /><br />Dashboard</Link>
      <Link to="/Kanbas/Dashboard" id="wd-course-link" className={`list-group-item text-center border-0 ${activeLink === "/Kanbas/Courses" ? "active" : ""}`}
        onClick={() => setActiveLink("/Kanbas/Courses")}><LiaBookSolid className="fs-1" /><br />Courses</Link>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={`list-group-item text-center border-0 ${activeLink === "/Kanbas/Calendar" ? "active" : ""}`}
        onClick={() => setActiveLink("/Kanbas/Calendar")}><IoCalendarOutline className="fs-1" /><br />Calendar</Link>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link" className={`list-group-item text-center border-0 ${activeLink === "/Kanbas/Inbox" ? "active" : ""}`}
        onClick={() => setActiveLink("/Kanbas/Inbox")}><FaInbox className="fs-1" /><br />Inbox</Link>
      <Link to="/Labs" id="wd-labs-link" className={`list-group-item text-center border-0 ${activeLink === "/Labs" ? "active" : "" }`}
        onClick={() => setActiveLink("/Labs")}><MdOutlineSettings className="fs-1" /><br />Labs</Link>
      <Link to="/LandingPage" id="wd-lp-link" className={`list-group-item text-center border-0 ${activeLink === "/LandingPage" ? "active" : ""}`}
        onClick={() => setActiveLink("/LandingPage")}><MdHome className="fs-1" /><br />LandingPage</Link>
    </div>
  );
}
