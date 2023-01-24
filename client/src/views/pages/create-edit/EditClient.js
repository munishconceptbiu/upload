import React from "react";

export default function EditClient(){
    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Client</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-6"><input className="form-control" type="text" placeholder="Categorise the Clients" /></div>
                <div className="col-6"><input className="form-control" type="text" placeholder="Index Calculation" /></div>
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