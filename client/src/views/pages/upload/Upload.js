import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import AppHeader from '../../../components/AppHeader'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';
import { get, post } from "../../../services/CommanService";
import { store } from '../../../store/store';
import toast from 'react-hot-toast';



const graphType = [
  {
    label: 'Share of Voice',
    value: 1,
  },
  {
    label: 'Thematic Analysis',
    value: 2
  },
  {
    label: 'Geographical Spread',
    value: 3
  },
  {
    label: 'Journalist',
    value: 4
  },
  {
    label: 'Spokesperson',
    value: 5
  },
  {
    label: 'Sentiment',
    value: 6
  },
  {
    label: 'Keyword Analysis',
    value: 7
  },
  {
    label: 'Publication',
    value: 8
  },
  // {
  //   label: 'Visibility',
  //   value: 9
  // }

]
const Upload = () => {
  const state = store.getState();
  
  const [client_id, setClientId] = useState()
  const [client_name, setClientName] = useState()
  const [ip, setIP] = useState('');

  let selectRef = React.useRef();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  const upload = async () => {
    const client = selectRef.getValue()[0]
    if (client === "" || client === undefined || client === null) {
      toast.error("Client id can't be empty");
      return false;
    }
    if (startDate === "" || startDate === null) {
      toast.error("Start Date can't be empty");
      return false;
    }
    if (endDate === "" || endDate === null) {
      toast.error("End Date can't be empty");
      return false;
    }

    if (file === "" || file === undefined) {
      toast.error("File can't be empty");
      return false;
    }

    const formData = new FormData();

    formData.append('upload', file);
    formData.append('client_id', client.value);
    formData.append('client_name', client.label);
    formData.append('start_date', moment(startDate).format('L'))
    formData.append('end_date', moment(endDate).format('L'))
    formData.append('username', state.auth.auth.username);
    formData.append('email', state.auth.auth.email);
    formData.append('user_id', state.auth.auth.id)
    formData.append('ip_address', ip)
   

    const uploadPromise = new Promise((resolve, reject) => {

      post(`http://qa.conceptbiu.com/unifiedapi/artical`, formData).then((response) => {
        setFile('')
        selectRef.clearValue();
        setClientName();
        setClientId()
        resolve(response.data.message);
      }).catch((err) => {
        console.log('err', err.response.data.error)
        setFile('')
        selectRef.clearValue();
        setClientName();
        setClientId()
        reject(err.response.data.error)
      })
    });
    toast.promise(
      uploadPromise,
      {
        loading: 'uploading ...',
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
  const [file, setFile] = useState('')
  const onFileChange = event => {
    // Update the state 
    setFile(event.target.files[0]);
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'
      get("artical/get-setting-clientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.client_id,
          label: e.client_name
        })));
      })

    });

  useEffect(() => {
    // getClientList();
    getData()
  }, []);
  return (
    <>

      <AppHeader />
      <div className="uqr-contents">

        <div className="container-fluid">
          <form className="needs-validation" noValidate>
            <div className="row g-3">

              <div className="col-6">
                <div className='client-section'>
                  <label htmlFor="country" className="form-label">Client</label>
                  <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} isClearable={true} ref={(ref) => {
                    selectRef = ref;
                  }} />
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="state" className="form-label">Start Date & End Date</label>

                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  // isClearable={true}
                  className="form-control"
                />

              </div>



              <div className="col-6 ">
                <label htmlFor="zip" className="form-label">Document</label>
                <input type="file" className="form-control" id="zip" accept=".xls, .xlsx" onChange={onFileChange} placeholder="" required />
                <div className="mt-10 img-note">
                  Check the sample file before upload <a href="http://qa.conceptbiu.com//unifiedapi/qualitative/sample_template1666253552888.xlsx" target="_blank">Sample file</a>
                </div>
              </div>
            </div>

            <br></br>
            {/* {isLoading && <h5 className="loading">uploading</h5>}
            <p ref={statusRef}></p> */}

            <button className="btn btn-primary btn-medium" type="button" onClick={e => upload()}>Upload</button>
          </form>
        </div>
      </div>
    </>

  )
}

export default Upload

