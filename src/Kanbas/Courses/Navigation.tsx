import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation">
    <ul>
      <li><Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home">Home</Link><br/></li>
      <li><Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules</Link><br/></li>
      <li><Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza">Piazza</Link><br/></li>
      <li><Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom">Zoom</Link><br/></li>
      <li><Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">  Assignments</Link><br/></li>
      <li><Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes </Link><br/></li>
      <li><Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades">Grades</Link><br/></li>
      <li><Link id="wd-course-people-link"  to="/Kanbas/People">People</Link><br/></li>
    </ul>
    </div>
);}
