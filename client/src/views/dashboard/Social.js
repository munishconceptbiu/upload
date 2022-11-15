import React, { Component, useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import swal from 'sweetalert';
import AppHeader from '../../components/AppHeader'
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { get, post } from "../../services/CommanService";
import myData from '../../assets/geoJson/client.json';
import { store } from '../../store/store';

const platformType = [
  {
    label: 'Blogs',
    value: 'blog',
  },
  {
    label: 'Forum',
    value: 'forum'
  },
  {
    label: 'Youtube',
    value: 'youtube'
  },

]
const Social = () => {
  const state = store.getState();
  const [clientList, setClientList] = useState([]);
  const [setting, setSetting] = useState([])

  const [client_id, setClientId] = useState()
  const [client_name, setClientName] = useState()

  const [isLoading, setIsLoading] = useState(false)
  const [platformTypes, setGraphTypes] = useState(platformType)
  const [platformTypeName, setPlatformTypeName] = useState()

  const [platformTypeId, setPlatformTypeId] = useState()
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [topics, setTopics] = useState([])
  const clientChange = (e) => {
    setClientName(e.label);
    setClientId(e.value)
  }

  const handleFromDateChange = (value) => {
    setFromDate(value);
  }
  const handleToDateChange = (value) => {
    setToDate(value);
  }

  const setEnitiy = (e) => {
    console.log('Array.isArray(e) ? e.map(x => x.value)', e.map(x => x.value))
    setTopics(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  const setPlatformTypeChange = (e) => {
    setPlatformTypeId(e.target.value)
    setPlatformTypeName(platformTypes[e.target.value - 1].label)
  }


  const fetchData = () => {
    console.log('topics', topics)
    if (client_id === "") {
      toast.error("Client can't be empty");
      return false;
    }
    if (platformTypeId === "") {
      toast.error("Platform type can't be empty");
      return false;
    }
    const promise = new Promise((resolve, reject) => {

      let url = `https://clientportalv2.conceptbiu.com/unifiedapi/admin/cron/fetch-${platformTypeId}?client_id=${client_id}&topic_ids[]=&searchParams[from_date]=${moment(fromDate).format('L')}&searchParams[to_date]=${moment(toDate).format('L')}`

      get(`${url}`).then((response) => {
        setPlatformTypeName('');
        setPlatformTypeId('')
        resolve("Successfully setting added");
      }).catch((err) => {
        setPlatformTypeName('');
        setPlatformTypeId('')
        reject(err.message)
      })


    });
    toast.promise(
      promise,
      {
        loading: 'Saving...',
        success: <b>Setting saved</b>,
        error: <b>Could not save.</b>,
      },
      {
        style: {
          width: '200px',
          paddingRight: '10px',
        },
      }
    );
  }

  const promiseOptions = (inputValue) =>
    new Promise((resolve, reject) => {
      inputValue = inputValue || 'a'
      get("artical/getclientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.id,
          label: e.client_name
        })));
      })
    });

  useEffect(() => {
    // getClientList();
    setClientList(myData.result)
  }, [myData]);
  return (
    <>

      <div className="page-title">
        <h1 >
          Social
        </h1>
      </div>
      <div className="uqr-contents">

        <div className="container-fluid">
          <form className="needs-validation" novalidate>
            <div className="row g-3">

              <div className="col-12">
                <div className='client-section'>
                  <label for="country" className="form-label">Client</label>
                  <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
                </div>
              </div>
              <div className="col-12">
                <label for="state" className="form-label">Topic</label>

                <Select
                  isMulti
                  name="toptics"
                  options={[{
                    value: "all",
                    label: "All Topics"
                  }]}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={setEnitiy}
                />

              </div>
              <div className="col-12">
                <label for="state" className="form-label">From Date</label>
                <DatePicker className="form-control" selected={fromDate} onChange={(date) => setFromDate(date)} />

              </div>
              <div className="col-12">
                <label for="state" className="form-label">To Date</label>
                <DatePicker className="form-control" selected={toDate} onChange={(date) => setToDate(date)} />
              </div>

              <div className="col-12">
                <label for="state" className="form-label">Platform</label>
                <select className="form-select" id="state" onChange={e => setPlatformTypeChange(e)} required>
                  <option value="">Choose...</option>
                  {platformTypes?.map((e) => (
                    <option value={e.value}>{e.label}</option>
                  ))}
                </select>

              </div>

            </div>
            <br />
            <div className="col-12 ">
              <button className="btn btn-primary" onClick={e => fetchData()} type="reset" >Fetch {platformTypeName}</button>
            </div>

          </form>
        </div>
      </div>
    </>

  )
}

export default Social

