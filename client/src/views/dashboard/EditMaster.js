import React from "react";

function EditMaster(){
    return(
        <div className="row">
            <div className="col-4">
                <input type={text} placeholder="Publication" />
            </div>
            <div className="col-4">
                <input type={text} placeholder="Editions" />
            </div>
            <div className="col-4">
                <input type={text} placeholder="Genre" />
            </div>
            <div className="col-4">
                <input type={text} placeholder="Circulation" />
            </div>
            <div className="col-6">
                <input type={text} placeholder="Readership" />
            </div>
            <div className="col-6">
                <input type={text} placeholder="Media House" />
            </div>
            <div className="col-12">
                <button type="submit" className="Primary">Save</button>
                <button type="submit">submit</button>
            </div>
        </div>
    )
}