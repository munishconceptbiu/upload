import React from "react";

export default function EditJournalist(){
    return(
        <>
        <div class="page-title d-flex justify-content-between">
              <h1>Add/Edit Journalist</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Email ID" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Language" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Based In" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Publication" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Genre" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Medium" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Reach" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Education" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Designation" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Primary Beat" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Publications" /></div>
                <div className="col-12 mt-10"><input className="form-control" type="text" placeholder="Article Archieve" /></div>
            </div>
            <div className="row ep-info">
                <div className="col-6 ">
                    <h6>Additional Info  :  </h6>
                    <input className="form-control" type="text" placeholder="Text Here" />
                    <input className="form-control" type="text" placeholder="Text Here" />
                    <input className="form-control" type="text" placeholder="Text Here" />
                    <input className="form-control" type="text" placeholder="Text Here" />
                    <input className="form-control" type="text" placeholder="Text Here" />
                    <input className="form-control" type="text" placeholder="Text Here" />
                </div>
                <div className="col-6">
                    <h6>Social Media Feed : </h6>
                    <input className="form-control" type="text" placeholder="Facebook" />
                    <input className="form-control" type="text" placeholder="Twitter" />
                    <input className="form-control" type="text" placeholder="Youtube" />
                    <input className="form-control" type="text" placeholder="Linkedin" />
                    <input className="form-control" type="text" placeholder="Google Plus" />
                    <input className="form-control" type="text" placeholder="Instagram" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <input className="form-control" type="text" placeholder="Name" />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" placeholder="Publication Name" />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" placeholder="From Date" />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" placeholder="Till Date" />
                </div>
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray">Save</button>
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}