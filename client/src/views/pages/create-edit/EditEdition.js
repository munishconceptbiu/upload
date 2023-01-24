import React from "react";

export default function EditEdition(){
    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Edition</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="City Name " /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="State Name" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Zone" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Cluster" /></div>
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