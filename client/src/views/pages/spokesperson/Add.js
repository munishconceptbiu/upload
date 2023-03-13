import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, deleteMethod } from "../../../services/CommanService";
import { store } from '../../../store/store';
import toast from 'react-hot-toast';

import Reorder, {
} from "react-reorder";
import move from "lodash-move";
import { useNavigate, useParams } from 'react-router-dom';

export default function AddSpokePerson({ title,clientChange, promiseOptions, setSpokesperson, setCompanyName, setDesignation, setCompanyId,  saveSpokeperson, spokesperson_name, designation, company_id, company_name, setIsShowAddEdit }){
    

    return(
        <>
        <div class="page-title">
              <h1>{title} Spoke Person</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
            <div className="col-3">
                <AsyncSelect value={company_id} placeholder="Select Client" cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />

                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Spokesperson Name"   value={spokesperson_name} onChange={e => setSpokesperson(e.target.value)}  /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Their Designation"  value={designation} onChange={e => setDesignation(e.target.value)}  /></div>
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Member for Industry Platforms"  value={company_id} onChange={e => setCompanyId(e.target.value)}  /></div> */}
                
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Client or Team update"  value={spokesperson_name} onChange={e => setSpokesperson(e.target.value)}  /></div> */}
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray" onClick={() => setIsShowAddEdit(false)}>Close</button>
                    <button class="btn btn-primary" onClick={saveSpokeperson}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}