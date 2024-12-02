import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signup from "./Signup";
import Profile from "./Profile";
import Signin from "./Signin";
import { useSelector } from "react-redux";
import Users from "./Users";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
  <div id="wd-account-screen">
    <div className="d-flex">
      <div className="d-none d-md-block me-5">
        <AccountNavigation />
      </div>
      <div className="col-md-3">
        <Routes>
          <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" } />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Users/:uid" element={<Users />} />
        </Routes>
      </div> 
    </div>
  </div>
  );
}
