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


export default function AddPublication({ savePublication,  setPublication, setCirclation, setEdition, setMediaType, setPublicationTypeId, setReadership, setWebName, promiseOptions, publication, media_type, publication_type_id,edition_id, readership, circlation, webname, editionChange, title  }){

   

    return(
        <>
        <div class="page-title d-flex justify-content-between">
              <h1> {title} Publication</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
            <div className="col-3">
                <AsyncSelect placeholder="Select Edition"  cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => editionChange(e)} />

                    
                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Publication" value={publication} onChange={e => setPublication(e.target.value)} /></div>
               
                <div className="col-3"><input className="form-control" type="text" placeholder="Webname" value={webname} onChange={e => setWebName(e.target.value)} /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Circulation" value={circlation} onChange={e => setCirclation(e.target.value)} /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Readership" value={readership} onChange={e => setReadership(e.target.value)} /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Publication Type Id" value={publication_type_id} onChange={e => setPublicationTypeId(e.target.value)} /></div>
                <div className="col-3">
                    <select className="form-control" type="text" placeholder="Media House" onChange={e => setMediaType(e.target.value)} >
                        <option value="">Media House</option>
                        <option value="1">Print</option>
                        <option value="2">Online</option>
                    </select>
                    </div>
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray">Reset</button>
                    <button class="btn btn-primary" onClick={savePublication}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}