import React from "react";

function ProductAnalysis(){
    return(
        <div className="row spokeperson-analysis">
              <div className="col-md-12"><h3>Product Analysis</h3></div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Name
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Category
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Photo
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Headline
                  </option>
                </select>
            </div>
            <div className="col-md-12 mt-10">
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="CheckProductAnalysis"/>
  <label class="form-check-label" for="CheckProductAnalysis">
    Indeterminate checkbox
  </label>
</div>
            </div>
            <div className="col-md-12 mt-10"><button className="btn btn-primary">Save & Next Company</button><button className="btn btn-gray float-end">Submit & Send to QC</button></div>

        </div>
    )
}
export default ProductAnalysis