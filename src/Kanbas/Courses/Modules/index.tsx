import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />

        <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />Week 1 - Course Introduction, Syllabus, Agenda, Internet, Web, HTML, Assignment 1<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating a development environment<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Getting started with the 1st assignment<LessonControlButtons /></li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML<LessonControlButtons /></li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating an HTTP server with Node.js<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Commit your source to GitHub.com<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Deploying to Netlify<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Deploying multiple branches in Netlify<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Kanbas Web App on Netlify<LessonControlButtons /></li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />A1 LAB<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to HTML and the DOM<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Formatting Web content with Headings and Paragraphs<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Formatting content with Lists and Tables<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating Web Forms<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Navigating with Anchors<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Single Page Navigation<LessonControlButtons /></li>
          </ul>

        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />Week 2 - Formatting User Interfaces with HTML <ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Keep working on assignment 1<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify<LessonControlButtons /></li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML<LessonControlButtons /></li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Embedding content with Iframes<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Drawing with Scalable Vector Graphics<LessonControlButtons /></li>
          </ul>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />A1 KANBAS<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Implementing the Kanbas Account Screens<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Implementing the Kanbas Dashboard Screen<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Implementing the Kanbas Courses Screen<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Implementing the Kanbas Modules Screen<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Implementing the Kanbas Assignments Screens<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Kanbas Web App on Netlify<LessonControlButtons /></li>
          </ul>
        </li>   
        </ul>
      </div>
  );}
  