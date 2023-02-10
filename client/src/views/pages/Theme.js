import React from "react";

function Theme(){
    return(
        <>
        <div class="page-title"><h1>Theme</h1></div>
            <div className="uqr-form">
                <div className="content-box">
                    <div className="row">
                        <div className="col-4">
                            <select className="form-select">
                                <option>Select Client</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-select">
                                <option>Select Entity</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-select">
                                <option>Select Color Code</option>
                            </select>
                        </div>
                    </div>
                    <div className="theme-details">
                        <table className="table table-bordered">
                            <thead>
                                <th>Id</th>
                                <th>Client Name</th>
                                <th>Entity</th>
                                <th>Color Code</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1234</td>
                                    <td>Tata Motors</td>
                                    <td>Tata Motors</td>
                                    <td>#fffff</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            </>
       
    )
}
export default Theme;