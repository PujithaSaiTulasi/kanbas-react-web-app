import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signup from "./Signup";
import Profile from "./Profile";
import Signin from "./Signin";
export default function Account() {
  return (
  <div id="wd-account-screen">
    <div className="d-flex">
      <div className="d-none d-md-block me-5">
        <AccountNavigation />
      </div>
      <div className="col-md-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div> 
    </div>
  </div>
  );
}
