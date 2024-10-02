import { RxCross2 } from "react-icons/rx";
export default function AssignmentEditor() {
    return (
    <div id="wd-assignments-editor">

        <h4><label htmlFor="wd-name">Assignment Name</label></h4>

        <input id="wd-name" className="form-control mb-3" value="A1" />
        
        <textarea id="wd-description" className="form-control mb-3" rows={6} 
        defaultValue={`
The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanban application
• Links to all relevant source code repositories

The Kanban application should include a link to navigate back to the landing page.`}
        /><br />

        <div className="container">
        {/* Points */}
        <div className="row mb-3">
            <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Points</label>
            <div className="col-sm-9">
            <input id="wd-points" className="form-control" type="number" defaultValue={100} />
            </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
            <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end">Assignment Group</label>
            <div className="col-sm-9">
            <select id="wd-group" className="form-select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
            </select>
            </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
            <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label text-end">Display Grade as</label>
            <div className="col-sm-9">
            <select id="wd-display-grade-as" className="form-select">
                <option value="ASSIGNMENTS">Percentage</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
            </select>
            </div>
        </div>

        {/* Submission Type and Online Entry Options */}
        <div className="row mb-3">
            <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label text-end">Submission Type</label>
            <div className="col-sm-9">
            <div className="border p-3">
                <select id="wd-submission-type" className="form-select mb-3">
                <option value="ASSIGNMENTS">Online</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
                </select>
                
                <h6><b>Online Entry Options</b></h6>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-text-entry" />
                <label htmlFor="wd-text-entry" className="ms-2 mb-2">Text Entry</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-website-url" checked/>
                <label htmlFor="wd-website-url" className="ms-2 mb-2">Website URL</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings" className="ms-2 mb-2">Media Recordings</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation" className="ms-2 mb-2">Student Annotation</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-file-upload" />
                <label htmlFor="wd-file-upload" className="ms-2 mb-2">File Uploads</label>
                </div>
            </div>
            </div>
        </div>
        
        {/* Assign */}
        <div className="row mb-3">
            <label htmlFor="wd-assign" className="col-sm-3 col-form-label text-end">Assign</label>
            <div className="col-sm-9">
                <div className="border p-3"> 
                <label htmlFor="wd-assign-to" className="col-form-label fw-bold">Assign to</label>
                <div className="input-wrapper "><div className="tag ">Everyone  <RxCross2 /></div></div>

                <div className="col">
                <label htmlFor="wd-due-date" className="col-form-label fw-bold">Due</label>
                <input type="datetime-local" id="wd-due-date" defaultValue="2024-05-13T23:59" className="form-control mb-3" />
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="wd-available-from" className="col-form-label fw-bold">Available From</label>
                        <input type="datetime-local" id="wd-available-from" defaultValue="2024-05-06T23:59" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="wd-available-until" className="col-form-label fw-bold">Until</label>
                        <input type="datetime-local" id="wd-available-until" defaultValue="2024-05-20T23:59" className="form-control" />
                    </div>
                </div>
                </div>
            </div>
        </div><hr />

        <div className="text-end">
        <button id="wd-cancel" type="button" className="btn btn-secondary me-2">Cancel</button>
        <button id="wd-save" type="button" className="btn btn-danger">Save</button>
        </div>

        </div>
    </div>
);}

