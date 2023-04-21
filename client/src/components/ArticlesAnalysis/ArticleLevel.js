import React from "react";

function ArticleLevel(){
    return(
        <>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <select className="form-control">
                            <option>Article Type</option>
                            <option>Article Type</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <select className="form-control">
                            <option>Article Tags</option>
                            <option>Tag</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <select className="form-control">
                            <option>Article Level</option>
                            <option>Level 1</option>
                            <option>Level 2</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                <div className="row">
                    <div class="col-md-12 radio-group">
                        <span class="radio-title">Not Relavant</span>
                        <span class="radio-btn">
                                <input type="radio" id="age1" name="age" value="30"/>
                            <   label for="age1">Yes</label></span>
                            
                            <span class="radio-btn">
                                <input type="radio" id="age2" name="age" value="60"/>
                                <label for="age2">No</label>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>Reason:</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                </div>
            </form>
        </>
    )
}
export default ArticleLevel