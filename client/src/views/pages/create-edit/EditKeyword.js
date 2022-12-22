import React from "react";

export default function EditKeyword(){
    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Keyword</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-4"><input className="form-control" type="text" placeholder="Keyword" /></div>
                <div className="col-4"><input className="form-control" type="text" placeholder="Keyword Category" /></div>
                <div className="col-4"><input className="form-control" type="text" placeholder="Theme" /></div>
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