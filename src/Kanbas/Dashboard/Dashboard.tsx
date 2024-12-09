import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";
export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling,
    setEnrolling,
    updateEnrollment,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (course: string, enrolled: boolean) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const FACULTY = currentUser.role !== "STUDENT";

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button 
                    onClick={() => setEnrolling(!enrolling)} 
                    className="float-end btn btn-primary"
                >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1>
            
           
            <ProtectedContent>
            <hr />
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
            </ProtectedContent>
            
            <ProtectedContent>
            <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
                value={course.description}
                className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
            <hr />
            </ProtectedContent>
            
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>
            <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div 
                            key={course._id} 
                            className="wd-dashboard-course col" 
                            style={{ width: "300px" }}
                        >
                            <div className="card">
                                <Link
                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img 
                                        src={`/images/${course.image}`}
                                        width="100%" 
                                        alt={course.name} 
                                    />
                                    <div className="card-body">
                                        {enrolling && (
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);
                                                    }}
                                                    className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                                                >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                        
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p
                                            className="card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                            <>
                                            
                                        
                                            {FACULTY && (
                                                <>
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
                                                </>
                                            )}
                                        </>
                                            
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}







// import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewCourse, deleteCourse, updateCourse } from "./coursesReducer";
// import { enrollCourse, unenrollCourse } from "./enrollmentsReducer";
// import * as userClient from "../Account/client";
// import * as courseClient from "../Courses/client";
// import * as enrollmentClient from "./client";

// export default function Dashboard() {
//     const [courses, setCourses] = useState<any[]>([]);
//     const [allcourses, setAllCourses] = useState<any[]>([]);
//     const [enrollments, setEnrollments] = useState<any[]>([]);
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const FACULTY = currentUser.role === "FACULTY";

//     const dispatch = useDispatch();
//     const [courseNumber, setCourseNumber] = useState(0);
//     const [enrollmentMode, setEnrollmentMode] = useState(false);
//     const [course, setCourse] = useState({
//         _id: "1234",
//         name: "New Course",
//         number: "New Number",
//         startDate: "2023-09-10",
//         endDate: "2023-12-15",
//         description: "New Description",
//     });

//     const fetchUserCourses = async () => {
//         try {
//             const mycourses = await userClient.findMyCourses();
//             setCourses(mycourses);
            
//         } catch (error) {
//             console.error("Error fetching user courses:", error);
//         }
//     };
//     const fetchallCourses = async () => {
//         const allcourses = await courseClient.fetchAllCourses();
//         setAllCourses(allcourses);
//         setCourseNumber(allcourses.length);
//     }
//     const createNewCourse = async () => {
//         const newCourse = await userClient.createCourse(course);
//         setCourses([...courses, newCourse]);
//         dispatch(addNewCourse(course))
//     };

//     const removeCourse = async (courseId: string) => {
//         await courseClient.deleteCourse(courseId);
//         setCourses(courses.filter((course) => course._id !== courseId));
//         dispatch(deleteCourse(courseId));
//     };
//     const saveCourse = async () => {
//         await courseClient.updateCourse(course);
//         setCourses(courses.map((c) => {
//             if (c._id === course._id) { return course; }
//             else { return c; }
//         })
//         );
//         dispatch(updateCourse(course))
//     };
//     const fetchEnrollments = async () => {
//         try {
//             const enrollments = await enrollmentClient.getEnrollmentsByUser(currentUser._id);
//             setEnrollments(enrollments);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     const enroll = async (courseId: string) => {
//         try {
//             await enrollmentClient.addEnrollment(courseId, currentUser._id);
//             dispatch(enrollCourse({ courseId, userId: currentUser._id }));
//         } catch (error) {
//             console.error("Error enrolling:", error);
//         }
//     };
//     const unenroll = async (courseId: string) => {
//         try {
//             await enrollmentClient.deleteEnrollment(courseId, currentUser._id);
//             dispatch(unenrollCourse({ courseId, userId: currentUser._id }));
//         } catch (error) {
//             console.error("Error unenrolling:", error);
//         }
//     };






//     useEffect(() => {
//         fetchEnrollments();
//         fetchallCourses();
//         fetchUserCourses();
//     }, [
//         //courses, allcourses,
//         enrollments
//     ]);


//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             {FACULTY && (
//                 <div>
//                     <h5>
//                         New Course
//                         <button
//                             className="btn btn-primary float-end "
//                             id="wd-add-new-course-click"
//                             onClick={() => createNewCourse()}
//                         >
//                             Add
//                         </button>
//                         <button
//                             className="btn btn-warning float-end me-2"
//                             onClick={() => saveCourse()}
//                             id="wd-update-course-click"
//                         >
//                             Update
//                         </button>
//                     </h5>
//                     <br />
//                     <input
//                         value={course.name}
//                         className="form-control mb-2"
//                         onChange={(e) =>
//                             setCourse({ ...course, name: e.target.value })
//                         }
//                     />
//                     <textarea
//                         value={course.description}
//                         className="form-control"
//                         onChange={(e) =>
//                             setCourse({
//                                 ...course,
//                                 description: e.target.value,
//                             })
//                         }
//                     />
//                     <hr />
//                 </div>
//             )}
//             {!FACULTY && (
//                 <div>
//                     <button
//                         className="btn btn-primary float-end"
//                         onClick={() => setEnrollmentMode(!enrollmentMode)}
//                     >
//                         Enrollment
//                     </button>
//                 </div>
//             )}
//             <h2 id="wd-dashboard-published">
//                 Published Courses ({courseNumber})
//             </h2>
//             <hr />


//             <div id="wd-dashboard-courses" className="row">
//                 <div className="row row-cols-1 row-cols-md-5 g-4">
//                     {(enrollmentMode || FACULTY ? allcourses : courses)


//                         .map((course: any) => (
//                             <div
//                                 key={course._id}
//                                 className="wd-dashboard-course col"
//                                 style={{ width: "300px" }}
//                             >
//                                 <div className="card rounded-3 overflow-hidden">
//                                     <Link
//                                         to={`/Kanbas/Courses/${course._id}/Home`}
//                                         className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     >
//                                         <img
//                                             src="/images/reactjs.jpg"
//                                             width="100%"
//                                             height={160}
//                                         />
//                                         <div className="card-body">
//                                             <h5 className="wd-dashboard-course-title card-title">
//                                                 {course.name}
//                                             </h5>
//                                             <p
//                                                 className="wd-dashboard-course-title card-text overflow-y-hidden"
//                                                 style={{ maxHeight: 100 }}
//                                             >
//                                                 {course.description}
//                                             </p>
//                                             <button className="btn btn-primary">
//                                                 Go
//                                             </button>
//                                             {FACULTY && (
//                                                 <>
//                                                     <button
//                                                         onClick={(event) => {
//                                                             event.preventDefault();
//                                                             removeCourse(course._id);

//                                                         }}
//                                                         className="btn btn-danger float-end"
//                                                         id="wd-delete-course-click"
//                                                     >
//                                                         Delete
//                                                     </button>
//                                                     <button
//                                                         id="wd-edit-course-click"
//                                                         onClick={(event) => {
//                                                             event.preventDefault();
//                                                             setCourse(course);
//                                                         }}
//                                                         className="btn btn-warning me-2 float-end"
//                                                     >
//                                                         Edit
//                                                     </button>
//                                                 </>
//                                             )}
//                                             {!FACULTY &&  enrollmentMode && (
//                                                 <>
//                                                     {enrollments.some(
//                                                         (enrollment: any) =>
//                                                             enrollment.course ===course._id && enrollment.user === currentUser._id
//                                                     )  ? (
//                                                         <button
//                                                             className="btn btn-danger float-end"
//                                                             onClick={(e) => {
//                                                                 e.preventDefault();
//                                                                 unenroll(course._id)

//                                                             }}
//                                                         >
//                                                             Unenroll
//                                                         </button>
//                                                     ) : (
//                                                         <button
//                                                             className="btn btn-success float-end"
//                                                             onClick={(e) => {
//                                                                 e.preventDefault();
//                                                                 enroll(course._id)

//                                                             }}
//                                                         >
//                                                             Enroll
//                                                         </button>
//                                                     )}
//                                                 </>
//                                             )}
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// }