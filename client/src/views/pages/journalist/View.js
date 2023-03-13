import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, post, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';
import AddJournalist from './Add';
import Journalist from './Journalist';
export default function ViewJornalist(){


  let navigate = useNavigate();
  const state = store.getState();
  const [journalistList, setJournalistList] = useState([]);
  const getJournalistList = () => {
    get("journalist/name/a").then((response) => {
        setJournalistList(response.data.journalist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }


    const [journalist_name, setJournalistName] = useState('');
    const [publication_id, setPublicationId] = useState('');
    const [journalist_email, setJournalistEmail] = useState('');
    const [journalist_contact, setJournalistContact] = useState('');
    const [media_type, setMediaType] = useState('');

    const saveJournalist = async () => {

        if (journalist_name === "" || journalist_name.trim().length === 0) {
            toast.error("journalist_name can't be empty");
            return false;
        }
        if (journalist_email === "" || journalist_email.trim().length === 0) {
            toast.error("journalist_email can't be empty");
            return false;
        }
        if (publication_id === "") {
            toast.error("company_id can't be empty");
            return false;
        }
        if (journalist_contact === "" || journalist_contact.trim().length === 0) {
            toast.error("journalist_contact can't be empty");
            return false;
        }

        if (media_type === "" || media_type.trim().length === 0) {
          toast.error("media_type can't be empty");
          return false;
      }

        const formData = {
            "media_type": media_type,
            "journalist_name": journalist_name,
            "publication_id": publication_id,
            "journalist_email": journalist_email,
            "journalist_contact":journalist_contact
        }
        const uploadPromise = new Promise((resolve, reject) => {

            post(`journalist`, formData).then((response) => {
                resolve("Spokessperson Successfully Saved");
                navigate('/journalist')
            }).catch((err) => {
                reject(err.response.data.error)
            })
        });
        toast.promise(
            uploadPromise,
            {
                loading: 'saving ...',
                success: (data) => `${data}`,
                error: (err) => `This just happened: ${err}`,
            },
            {
                style: {
                    minWidth: '250px',
                },

            }
        );
    }

   
  
  const [title, setTitle] = useState('Add')
  const [isShowAddEdit, setIsShowAddEdit] = useState(false)
  useEffect(() => {
    getJournalistList();
  }, []);
    return(
        <>
        {isShowAddEdit &&
            <AddJournalist title={title}  setJournalistContact={setJournalistContact} setJournalistEmail={setJournalistEmail} setJournalistName={setJournalistName} setPublicationId={setPublicationId}  saveJournalist={saveJournalist}  journalist_name={journalist_name} journalist_email={journalist_email} journalist_contact={journalist_contact} media_type={media_type} setMediaType={setMediaType} publication_id={publication_id} setTitle={setTitle}/>
        }
            <Journalist journalistList={journalistList}  setJournalistContact={setJournalistContact} setJournalistEmail={setJournalistEmail} setJournalistName={setJournalistName} setPublicationId={setPublicationId} setMediaType={setMediaType} isShowAddEdit={isShowAddEdit} setTitle={setTitle} setIsShowAddEdit={setIsShowAddEdit} />
        </>
    )
}