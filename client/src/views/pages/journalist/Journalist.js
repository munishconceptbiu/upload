import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
// import EditJournalist from "../create-edit/EditJournalist";

import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { store } from '../../../store/store';
import { CSmartTable } from '@coreui/react-pro'

export default function Journalist({journalistList,  setJournalistContact ,setJournalistEmail, setJournalistName, setPublicationId, setMediaType}){

  const columns = [
    {
      key: 'id',
      label: 'No',
    },
    {
      key: 'journalist_name',
      label: 'Journalist Name',
      // filter: false,
      // sorter: false,
    },
    
    {
      key: 'journalist_contact',
      label: 'Contact Number	',
      // filter: false,
      // sorter: false,
    },

    {
      key: 'journalist_email',
      label: 'Email ID',
      // filter: false,
      // sorter: false,
    },
    {
      key: 'action',
      label: 'Action',
      filter: false,
      sorter: false,
    },
  ]

  const getJournalistSingleList = (id) => {
    get("journalist/"+id).then((response) => {
      setJournalistName(response.data.journalist.journalist_name);
      setJournalistEmail(response.data.journalist.journalist_email);
      setJournalistContact(response.data.journalist.journalist_contact);
      setPublicationId(response.data.journalist.publication_id);
      setMediaType(response.data.journalist.media_type);
       
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }

  const deleteJournalist = (id) => {
    
    delete("journalist/"+id).then((response) => {
      toast.success("Publication successfully deleted");      
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Journalist List</h1>
              {/* <NavLink to="/add-journalist" className="btn btn-primary btn-medium"  title="Journalist" data-bs-toggle="tooltip" >Add Journalist</NavLink> */}
              {/* <button className="btn btn-primary btn-medium">Add Journalist</button> */}
              </div>
            <div className="content-box">
            <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={journalistList.map((e, index) => ({
        id: index,
        ...e
      }))}
      pagination
      scopedColumns={{
        action: (list) => (
          <td className='action-btns'><a  href="javascript:void(0)" onClick={e => getJournalistSingleList(list.id)}><EditIcon /></a> 
          &nbsp;&nbsp;&nbsp;<a href="javascript:void(0)"  className='deleicon' onClick={e => deleteJournalist(list.id)}><DeleteIcon /></a></td>
        ),
       }}
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
            </div>
        </>
    )
}