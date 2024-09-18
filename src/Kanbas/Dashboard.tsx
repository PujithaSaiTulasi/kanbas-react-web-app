import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title"> Full Stack software developer </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5610/Home">
          <img src="/images/wd.jpg" width={200} />
          <div>
              <h5>CS5610 Web Development</h5>
              <p className="wd-dashboard-course-title"> Web Application Development </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5520/Home">
          <img src="/images/mad.jpg" width={200} />
          <div>
              <h5>CS5520 Mobile Application Development</h5>
              <p className="wd-dashboard-course-title"> Mobile Application Development </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5220/Home">
          <img src="/images/pm.jpg" width={200} />
          <div>
              <h5>EMGT5220 Engineering Project Management</h5>
              <p className="wd-dashboard-course-title"> Engineering Project Management </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6305/Home">
          <img src="/images/fm.jpg" width={200} />
          <div>
              <h5>EMGT6305 Financial Management for Engrs</h5>
              <p className="wd-dashboard-course-title"> Financial Management for Engineers </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5100/Home">
          <img src="/images/pd.jpg" width={200} />
          <div>
              <h5>GE5100 Product Developement for Engrs</h5>
              <p className="wd-dashboard-course-title"> Product Developement for Engineers </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6200/Home">
          <img src="/images/ps.jpg" width={200} />
          <div>
              <h5>IE6200 Engineering Probs & Stats</h5>
              <p className="wd-dashboard-course-title"> Engineering Probability & Statistics </p>
              <button> Go </button>
          </div>
          </Link>
        </div> <br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6205/Home">
          <img src="/images/or.jpg" width={200} />
          <div>
              <h5>OR6205 Deterministic Ops Research</h5>
              <p className="wd-dashboard-course-title"> Deterministic Operations Research </p>
              <button> Go </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

