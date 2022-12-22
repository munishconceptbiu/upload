import React from "react";

export default function EditProduct(){
    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Product</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Product Name " /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Product Keyword" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Product Category" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Product Profiling" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Product Event" /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Product Attribute" /></div>
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