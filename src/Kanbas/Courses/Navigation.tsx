import { NavLink } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}> 
        Home 
      </NavLink><br />
      
      <NavLink to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Modules 
      </NavLink><br />
      
      <NavLink to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Piazza 
      </NavLink><br />
      
      <NavLink to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Zoom 
      </NavLink><br />
      
      <NavLink to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Assignments 
      </NavLink><br />
      
      <NavLink to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Quizzes 
      </NavLink><br />
      
      <NavLink to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        People 
      </NavLink><br />
    </div>
  );
}


