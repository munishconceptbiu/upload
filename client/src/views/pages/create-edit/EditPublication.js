import React from "react";

export default function EditPublication(){
    return(
        <>
        <div class="page-title d-flex justify-content-between">
              <h1>Add/Edit Publication</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Publication" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Editions" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Genre" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Circulation" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Readership" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Media House" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Media House" /></div>
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