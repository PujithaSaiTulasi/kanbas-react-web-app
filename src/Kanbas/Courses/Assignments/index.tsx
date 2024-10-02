import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentTitleControlButtons from "./AssignmentTitleControlButtons";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

export default function Assignments() {
    return (
        <div id="wd-assignments-controls" className="p-3">
            
            <div className="search-and-buttons-container mb-4 d-flex justify-content-between">
                <div className="search-container d-flex align-items-center">
                    <CiSearch className="search-icon me-2" />
                    <input type="text" className="search-input form-control" placeholder="Search..."/>
                </div>
                <div className="button-group"> 
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1"><FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />Group</button>
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1"><FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />Assignment</button> 
                </div>
            </div>

            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center fw-bold">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineArrowDropDown className="me-2 fs-3" />
                            ASSIGNMENTS
                        </div>
                        <AssignmentTitleControlButtons />
                    </div>

                    <ul className="wd-assignment-list list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-3 fs-3" />
                                <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
                                <div className="flex-grow-1">
                                    <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123"> A1 </a><br />
                                    <span className="red-text">Multiple Modules</span> | <span className="bold-darkgray-text">Not available until</span> May 6 at 12:00am |<br />
                                    <span className="bold-darkgray-text">Due</span> May 13 at 11:59pm | 100 pts
                                </div>
                                <LessonControlButtons /> 
                            </div>
                        </li>
                    </ul>

                    <ul className="wd-assignment-list list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-3 fs-3" />
                                <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
                                <div className="flex-grow-1">
                                    <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123"> A2 </a><br />
                                    <span className="red-text">Multiple Modules</span> | <span className="bold-darkgray-text">Not available until</span> May 13 at 12:00am |<br />
                                    <span className="bold-darkgray-text">Due</span> May 20 at 11:59pm | 100 pts
                                </div>
                                <LessonControlButtons /> 
                            </div>
                        </li>
                    </ul>

                    <ul className="wd-assignment-list list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-3 fs-3" />
                                <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
                                <div className="flex-grow-1">
                                    <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123"> A3 </a><br />
                                    <span className="red-text">Multiple Modules</span> | <span className="bold-darkgray-text">Not available until</span> May 20 at 12:00am |<br />
                                    <span className="bold-darkgray-text">Due</span> May 27 at 11:59pm | 100 pts
                                </div>
                                <LessonControlButtons /> 
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
