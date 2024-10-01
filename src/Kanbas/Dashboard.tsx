import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text"> Full Stack software developer </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5610/Home">
              <img src="/images/wd.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5610 Web Development</h5>
                  <p className="wd-dashboard-course-title card-text"> Web Application Development <br/> 202510_1 Fall 2025 Semester Full Term</p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 
        
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5520/Home">
              <img src="/images/mad.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5520 Mobile Application Development</h5>
                  <p className="wd-dashboard-course-title card-text"> Mobile Application Development </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 
        
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5220/Home">
              <img src="/images/pm.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">EMGT5220 Engineering Project Management</h5>
                  <p className="wd-dashboard-course-title card-text"> Engineering Project Management </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 
        
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/6305/Home">
              <img src="/images/fm.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">EMGT6305 Financial Management for Engrs</h5>
                  <p className="wd-dashboard-course-title card-text"> Financial Management for Engineers </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 
        
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5100/Home">
              <img src="/images/pd.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">GE5100 Product Developement for Engrs</h5>
                  <p className="wd-dashboard-course-title card-text"> Product Developement for Engineers </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/6200/Home">
              <img src="/images/ps.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">IE6200 Engineering Probs & Stats</h5>
                  <p className="wd-dashboard-course-title card-text"> Engineering Probability & Statistics </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 
        
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/6205/Home">
              <img src="/images/or.jpg"  width="100%" height={160} />
              <div  className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">OR6205 Deterministic Ops Research</h5>
                  <p className="wd-dashboard-course-title card-text"> Deterministic Operations Research </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div> 
        </div> 
      </div>
      </div>
    </div>
  );
}

