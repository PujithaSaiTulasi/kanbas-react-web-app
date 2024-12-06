import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedContent from "./Account/ProtectedContent";
import {
  enrollCourse,
  setEnrollments,
  unenrollCourse,
} from "./Enrollments/enrollmentreducer";
import {
  enrollInCourse,
  unenrollFromCourse,
  getEnrollments,
} from "./Enrollments/client";

import { fetchAllCourses } from "./Courses/client";

type EnrollmentStatus = { [key: string]: boolean };

export default function Dashboard({
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling, 
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void 
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showEnrollments, setShowEnrollments] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<EnrollmentStatus>({});
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        const allCoursesData = await fetchAllCourses();
        setAllCourses(allCoursesData);

        if (currentUser.role === "STUDENT") {
          const enrollments = await getEnrollments(currentUser._id);
          dispatch(setEnrollments(enrollments));

          const status: EnrollmentStatus = {};
          enrollments.forEach((enrollment: { course: string }) => {
            status[enrollment.course] = true;
          });
          setEnrollmentStatus(status);

          const enrolled = allCoursesData.filter((course: { _id: string; }) =>
            enrollments.some((enrollment: { course: string }) => enrollment.course === course._id)
          );
          setEnrolledCourses(enrolled);
        }
      } catch (error) {
        console.error("Failed to initialize dashboard:", error);
      }
    };

    initializeDashboard();
  }, [currentUser, dispatch]);

  const handleEnroll = async (userId: string, courseId: string) => {
    try {
      await enrollInCourse(userId, courseId);
      dispatch(enrollCourse({ userId, courseId }));

      setEnrollmentStatus((prev) => ({ ...prev, [courseId]: true }));

      const newCourse = allCourses.find((course) => course._id === courseId);
      if (newCourse) {
        setEnrolledCourses((prev) => [...prev, newCourse]);
      }
    } catch (error) {
      console.error("Failed to enroll:", error);
      alert("Could not enroll. Please try again.");
    }
  };

  const handleUnenroll = async (userId: string, courseId: string) => {
    try {
      await unenrollFromCourse(userId, courseId);
      dispatch(unenrollCourse({ userId, courseId }));

      setEnrollmentStatus((prev) => {
        const updated = { ...prev };
        delete updated[courseId];
        return updated;
      });

      setEnrolledCourses((prev) => prev.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Failed to unenroll:", error);
      alert("Could not unenroll. Please try again.");
    }
  };
  

  const toggleEnrollments = () => {
    setShowEnrollments((prev) => !prev);
  };

  const handleGo = (courseId: string) => {
    if (currentUser.role === "STUDENT") {
      if (enrollmentStatus[courseId]) {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
      } else {
        alert("You must enroll in this course to access it.");
      }
    } else {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  const displayedCourses = showEnrollments ? enrolledCourses : allCourses;

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
        </h1>
        {currentUser.role === "STUDENT" && (
          <button className="btn btn-info float-end" onClick={toggleEnrollments}>
            {showEnrollments ? "View All Courses" : "View Enrolled Courses"}
          </button>
        )}
      </div>
      <hr />

      <ProtectedContent>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </ProtectedContent>

      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden">
                <img
                  src={`/images/${course.image}`}
                  width="100%"
                  height={160}
                  alt={course.name}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  {enrolling && (
                    <button onClick={(event) => {
                      event.preventDefault();
                      updateEnrollment(course._id, !course.enrolled);
                    }}
                    className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                     )}
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  <button
                    onClick={() => handleGo(course._id)}
                    className="btn btn-primary"
                  >
                    Go
                  </button>
                  {currentUser.role === "STUDENT" && (
                    enrollmentStatus[course._id] ? (
                      <button
                        onClick={() =>
                          handleUnenroll(currentUser._id, course._id)
                        }
                        className="btn btn-danger float-end"
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleEnroll(currentUser._id, course._id)
                        }
                        className="btn btn-success float-end"
                      >
                        Enroll
                      </button>
                    )
                  )}
                  <ProtectedContent>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                  </ProtectedContent>
                  <ProtectedContent>
                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </ProtectedContent>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
