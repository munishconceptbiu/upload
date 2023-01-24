import React from "react";

export default function EditWtgMaster(){
    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Spoke Person</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input type="file" class="form-control" id="zip" accept="jpb, png," placeholder="" required=""/>              
</div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Their Designation" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Member for Industry Platforms" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Suggested by whom" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Client or Team update" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Created On" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Created by" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Last Modified On" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Last Modified by" /></div>
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