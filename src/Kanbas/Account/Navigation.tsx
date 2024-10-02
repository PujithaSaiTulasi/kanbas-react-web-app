import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
  <div id="wd-account-navigation">
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to="/Kanbas/Account/Signin" id="wd-account-signin-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}> 
        Signin 
      </NavLink><br />
      <NavLink to="/Kanbas/Account/Signup" id="wd-account-signup-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}> 
        Signup 
      </NavLink><br />
      <NavLink to="/Kanbas/Account/Profile" id="wd-account-profile-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}> 
        Profile 
      </NavLink><br />
    </div>
  </div>
);}
