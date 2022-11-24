import React, { Component, useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import swal from 'sweetalert';
import AppHeader from '../../components/AppHeader'

import { ProgressBar } from "react-bootstrap"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';
import { get, post } from "../../services/CommanService";
import myData from '../../assets/geoJson/client.json';
import { store } from '../../store/store';
import toast from 'react-hot-toast';

import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable
} from "react-reorder";
import move from "lodash-move";


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
const Dashboard = () => {
  const state = store.getState();
  console.log('state', state)
  const [clientList, setClientList] = useState([]);
  const [setting, setSetting] = useState([])
  // const getClientList = () => {
  //   var config = {
  //     method: 'POST',
  //     url: 'https://betadevapi.conceptbiu.com/app/client/clientslist',
  //     headers: { 
  //       'Content-Type': 'application/json', 
  //       'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMjI4MCRHb2RyZWpfY29yQGNvbmNlcHRiaXUuY29tIn0.GH2rYa8tLt0wnTnU1sDn6nY_MCbLtQxPD_tHfn2Z_LY',
  //       "Access-Control-Allow-Origin": 'http://localhost:3000'

  //     //   'Access-Control-Allow-Headers': 'Content-Type, 139.59.53.62ization'
  //     },
  //   };
  //   post("users/clientlist").then((response) => {
  //     console.log('response', response)
  //         setClientList(response.data.result)
  //       })
  //       .catch(() => {
  //         // handleLoginFailure({ status: UNAUTHORIZED });
  //       })
  //       // .finally(() => setIsLoading(false));
  //    setClientList(myData.result)
  //     //   .finally(() => setIsLoading(false));
  // }
  const [client_id, setClientId] = useState()
  const [client_name, setClientName] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [graphTypes, setGraphTypes] = useState(graphType)
  const [graphTypeName, setGraphTypeName] = useState()
  const [entityLevel, setEntityLevel] = useState(false)
  const [publicationLevel, setPublicationLevel] = useState(false)
  const [journalistLevel, setjournalistLevel] = useState(false)
  const [cityLevel, setCityLevel] = useState(false)
  const [keywordLevel, setKeywordLevel] = useState(false)
  const [spokespersonLevel, setSpokespersonLevel] = useState(false);
  const [profilingLevel, setProfilingLevel] = useState(false);
  const [visibilityLevel, setVisibilityLevel] = useState(false)
  const [topicLevel, setTopicLevel] = useState(false)
  const [ip, setIP] = useState('');
  const [graphTypeId, setGraphTypeId] = useState()
  const [is_vertical, setIsVertical] = useState(0)
  const [verticals, setVerticals] = useState([])
  const [vertical, setVertical] = useState()

  const [isIndex, setIndex] = useState(false);
  const [isReach, setReach] = useState(false);

  const [isOnline, setIsOnline] = useState(false);
  const [isPrint, setIsPrint] = useState(false);
  const [isPrintOnline, setIsPrintOnline] = useState(false);
  const [progress, setProgress] = useState()

  let selectRef = React.useRef();
  const statusRef = React.useRef();
  const loadTotalRef = React.useRef();
  const progressRef = React.useRef();

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  const upload = async () => {
    console.log('musih',selectRef.getValue());
    
    const client = selectRef.getValue()[0]
    if(client === "" || client === undefined || client === null){
      toast.error("Client id can't be empty");
      return false;
    }
    if(startDate  === "" || startDate === null){
      toast.error("Start Date can't be empty");
      return false;
    }
    if(endDate === "" || endDate === null){
      toast.error("End Date can't be empty");
      return false;
    }
    
    if(isPrint === false && isOnline === false && isPrintOnline === false){
      toast.error("Please select altleast any two media types");
      return false;
    }
    if(isPrint === true && isOnline === true && isPrintOnline === true){
      toast.error("Please select only two media types");
      return false;
    }
    if((isPrint === true && isOnline === false && isPrintOnline === false) || (isPrint === false && isOnline === true && isPrintOnline === false) || (isPrint === false && isOnline === false && isPrintOnline === true)){
      toast.error("Please select two media types");
      return false;
    }
    if(file === "" || file === undefined){
      toast.error("File can't be empty");
      return false;
    }

   
    setIsLoading(true);
    
    const formData = new FormData();

    formData.append('upload', file);
    formData.append('client_id', client.value);
    formData.append('client_name', client.label);
    formData.append('start_date', moment(startDate).format('L'))
    formData.append('end_date', moment(endDate).format('L'))
    formData.append('username', state.auth.auth.first_name + ' ' + state.auth.auth.last_name);
    formData.append('email', state.auth.auth.email)
    formData.append('ip_address', ip)
    formData.append('setting', JSON.stringify(setting))
    formData.append('verticals', JSON.stringify(verticals))
    formData.append('is_vertical', is_vertical)
    formData.append('isIndex', isIndex)
    formData.append('isReach', isReach)
    formData.append('isOnline', isOnline)
    formData.append('isPrint', isPrint)
    formData.append('isPrintOnline', isPrintOnline)
    var config = {
      method: 'POST',
      url: 'http://qa.conceptbiu.com/unifiedapi/artical',
      data: formData,
      // onUploadProgress: data => {
      //   //Set the progress value to show the progress bar
      //   setProgress(Math.round((100 * data.loaded) / data.total))
      //   if (Math.round((100 * data.loaded) / data.total) === 100) {
      //     swal("Success!", "Upload document done", "success");
      //   }
      // },
    };
    // var xhr = new XMLHttpRequest();
    // // xhr.upload.addEventListener("progress", ProgressHandler, false);
    // xhr.addEventListener("load", SuccessHandler, false);
    // xhr.addEventListener("error", ErrorHandler, false);
    // xhr.addEventListener("abort", AbortHandler, false);
    // xhr.open("POST", "http://qa.conceptbiu.com/unifiedapi/artical");
    // xhr.send(formData);

    const uploadPromise = new Promise((resolve, reject) => {

      post(`http://qa.conceptbiu.com/unifiedapi/artical`, formData).then((response) => {
        setGraphTypeName('');
        setGraphTypeId('')
        emptyLevel()
        setSetting([])
        setVerticals([])
        setVertical('')
        setFile('')
        selectRef.clearValue();
    setClientName();
    setClientId()
        resolve("Article upload processing");
      }).catch((err) => {
        console.log('err', err.response.data.error)
        setGraphTypeName('');
        setGraphTypeId('')
        emptyLevel()
        setSetting([])
        setVerticals([])
        setVertical('');
        setFile('')
        selectRef.clearValue();
    setClientName();
    setClientId()
        reject(err.response.data.error)
      })
    //  axios(config).then((response) => {
      
    // })
    //   .catch((err) => {
    //     reject(err.message)
    //   })

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

  const ProgressHandler = (e) => {
    setIsLoading(false);
    loadTotalRef.current.innerHTML = `uploaded ${e.loaded} bytes of ${e.total}`;
    var percent = (e.loaded / e.total) * 100;
    progressRef.current.value = Math.round(percent);
    statusRef.current.innerHTML = Math.round(percent) + "% uploaded...";

  };

  const SuccessHandler = (e) => {
    setIsLoading(false);

    statusRef.current.innerHTML = JSON.parse(e.target.responseText).message;
    progressRef.current.value = 0;
  };
  const ErrorHandler = () => {
    setIsLoading(false);
    statusRef.current.innerHTML = "upload failed!!";
  };
  const AbortHandler = () => {
    setIsLoading(false);

    statusRef.current.innerHTML = "upload aborted!!";
  };


  const clientChange = (e) => {
    setClientName(e.label);
    setClientId(e.value)
  }
  const emptyLevel = () => {
    setCityLevel(false);
    setEntityLevel(false)
    setPublicationLevel(false)
    setjournalistLevel(false)
    setKeywordLevel(false)
    setSpokespersonLevel(false)
    setProfilingLevel(false);
    setVisibilityLevel(false)
    setTopicLevel(false)
  }

  const setGraphTypeChange = (e) => {
    if(e.target.value === ""){
      setGraphTypeId()
      setGraphTypeName()
      emptyLevel()
    }else{
      setGraphTypeId(e.target.value)
    setGraphTypeName(graphTypes[e.target.value - 1].label)
    emptyLevel()
    }
    
  }

  const addSetting = (e) => {
    if(cityLevel === false && entityLevel === false && publicationLevel === false && journalistLevel === false && keywordLevel === false && spokespersonLevel === false && profilingLevel === false && topicLevel === false ){
      toast.error("Please select atleast one level");
      return false;
    } 
    const currentSetting = {
      graph_type: graphTypeName,
      city_level: cityLevel,
      entity_level: entityLevel,
      publication_level: publicationLevel,
      journalist_level: journalistLevel,
      keyword_level: keywordLevel,
      spokesperson_level: spokespersonLevel,
      profiling_level: profilingLevel,
      visibility_level: visibilityLevel,
      topic_level: topicLevel,
      graph_id: graphTypeId
    }
    let newSetting = [...setting];
    newSetting.push(currentSetting)
    setSetting(newSetting);
    setGraphTypeName("");
    setGraphTypeId("")
    emptyLevel()
  }

  const onReorder = (e, from, to) => {
    setSetting(move(setting, from, to));
  };
  const deleteLevel = (index) => {
    let newSetting = [...setting];
    newSetting.splice(index, 1)
    setSetting(newSetting);
  }
  const editLevel = (index) => {
    let editsetting = setting[index];
    setGraphTypeName(editsetting.graph_type);
    setGraphTypeId(editsetting.graph_id)
    setCityLevel(editsetting.city_level);
    setEntityLevel(editsetting.entity_level)
    setPublicationLevel(editsetting.publication_level)
    setjournalistLevel(editsetting.journalist_level)
    setKeywordLevel(editsetting.keyword_level)
    setSpokespersonLevel(editsetting.spokesperson_level)
    setProfilingLevel(editsetting.profiling_level);
    setVisibilityLevel(editsetting.visibility_level)
    setTopicLevel(editsetting.topic_level);
    let newSetting = [...setting];
    newSetting.splice(index, 1)
    setSetting(newSetting);
  }

  const addVertical = () => {
    if(vertical === ''){
      toast.error("Vertical can't be empty");
      return false
    }
    let newvertical = [...verticals];
    newvertical.push(vertical)
    setVerticals(newvertical)
    setVertical("")
  }
  const deleteVertical = (index) => {
    let newvertical = [...verticals];
    newvertical.splice(index, 1)
    setVerticals(newvertical);
  }
  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
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
    getData()
  }, []);
  return (
    <>

      <AppHeader />
      <div className="uqr-contents">

        <div className="container-fluid">
          <form className="needs-validation" novalidate>
            <div className="row g-3">

              <div className="col-6">
                <div className='client-section'>
                  <label for="country" className="form-label">Client</label>
                  <AsyncSelect cacheOptions defaultOptions  loadOptions={promiseOptions} isClearable={true}  ref={(ref) => {
            selectRef = ref;
          }}/>              
                </div>
              </div>
              <div className="col-6">
                <label for="state" className="form-label">Start Date & End Date</label>
                
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
              {/* <div className="col-6">
                <label for="state" className="form-label">Month</label>
                <select className="form-select" id="state" onChange={e => setMonth(e.target.value)} required>
                  <option value="">Choose...</option>
                  <option value={"January"}>January</option>
                  <option value={"February"}>February</option>
                  <option value={"March"}>March</option>
                  <option value={"April"}>April</option>
                  <option value={"May"}>May</option>
                  <option value={"June"}>June</option>
                  <option value={"July"}>July</option>
                  <option value={"August"}>August</option>
                  <option value={"September"}>September</option>
                  <option value={"October"}>October</option>
                  <option value={"November"}>November</option>
                  <option value={"December"}>December</option>
                </select>

              </div>
              <div className="col-6">
                <label for="state" className="form-label">Year</label>
                <select className="form-select" id="state" onChange={e => setYear(e.target.value)} required>
                  <option value="">Choose...</option>
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                </select>

              </div> */}

              <div className="col-12">
                <label for="state" className="form-label">Graph Type</label>
                <select className="form-select" id="state" onChange={e => setGraphTypeChange(e)} required>
                  <option value="">Choose...</option>
                  {graphTypes?.map((e) => (
                    <option disabled={setting.filter(s => s.graph_type === e.label).length === 1} value={e.value}>{e.label}</option>
                  ))}
                </select>

              </div>
              {graphTypeName && (
                <div className="container graph-options">
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={entityLevel} onChange={e => setEntityLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckDefault1">
                        Entity Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked={publicationLevel} onChange={e => setPublicationLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked2">
                        Publication Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked={journalistLevel} onChange={e => setjournalistLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckDefault3">
                        Journlist Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked={cityLevel} onChange={e => setCityLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked4">
                        City  Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked5" checked={keywordLevel} onChange={e => setKeywordLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked5">
                        Keyword Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked9" checked={topicLevel} onChange={e => setTopicLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked9">
                        Topic Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked6" checked={spokespersonLevel} onChange={e => setSpokespersonLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked6">
                        Spokesperson Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked7" checked={profilingLevel} onChange={e => setProfilingLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked7">
                        Profiling Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked8" checked={visibilityLevel} onChange={e => setVisibilityLevel(e.target.checked)} />
                      <label className="form-check-label" for="flexCheckChecked8">
                        Visibility Level
                      </label>
                    </div>

                  </div>
                  <div className="col-12 ">
                    <button className="btn btn-primary" onClick={e => addSetting()} type="button" >ADD GRAPH TYPE</button>
                  </div>

                </div>
              )}
              <div className="col-12 ">
              {setting.length > 0 && <span>Use Drag and Drop Arrange the Order </span>}
              <Reorder
          reorderId="my-list" // Unique ID that is used internally to track this list (required)
          reorderGroup="reorder-group" // A group ID that allows items to be dragged between lists of the same group (optional)
          // getRef={this.storeRef.bind(this)} // Function that is passed a reference to the root node when mounted (optional)
          component="div" // Tag name or Component to be used for the wrapping element (optional), defaults to 'div'
          // placeholderClassName="placeholder" // className name to be applied to placeholder elements (optional), defaults to 'placeholder'
          draggedClassName="dragged" // className name to be applied to dragged elements (optional), defaults to 'dragged'
          lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
          holdTime={500} // Default hold time before dragging begins (mouse & touch) (optional), defaults to 0
          touchHoldTime={500} // Hold time before dragging begins on touch devices (optional), defaults to holdTime
          mouseHoldTime={200} // Hold time before dragging begins with mouse (optional), defaults to holdTime
          onReorder={onReorder} // Callback when an item is dropped (you will need this to update your state)
          autoScroll={true} // Enable auto-scrolling when the pointer is close to the edge of the Reorder component (optional), defaults to true
          disabled={false} // Disable reordering (optional), defaults to false
          disableContextMenus={true} // Disable context menus when holding on touch devices (optional), defaults to true
          // placeholder={
          //   <div className="col-3" /> // Custom placeholder element (optional), defaults to clone of dragged element
          // }
        >  
                {setting?.map((e, index) => (
                  <div className="card" key={index} style={{ width: "18rem", cursor: "pointer" }}>
                    <div className="card-body">
                    <h5 className="">Order : {index + 1}</h5>
                      <h5 className="card-title">{e.graph_type}</h5>
                      {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                      {e.entity_level === true && <p className="card-text">Entity Level :  Yes</p>}
                      {e.publication_level === true && <p className="card-text">Publication Level : Yes</p>}
                      {e.journalist_level === true && <p className="card-text">Journalist Level :  Yes</p>}
                      {e.city_level === true && <p className="card-text">City Level : Yes</p>}
                      {e.keyword_level === true && <p className="card-text">Keyword Level :  Yes</p>}
                      {e.topic_level === true && <p className="card-text">Topic Level :  Yes</p>}
                      {e.spokesperson_level === true && <p className="card-text">Spokesperson Level :  Yes</p>}
                      {e.profiling_level === true && <p className="card-text">Profiling Level :  Yes</p>}
                      {e.visibility_level === true && <p className="card-text">Visibility Level :  Yes</p>}
                      <a href="javascript:void(0)" onClick={e => deleteLevel(index)} className="card-link">Remove</a>
                      <a href="javascript:void(0)" onClick={e => editLevel(index)} className="card-link">Edit</a>
                    </div>
                  </div>
                ))}
                </Reorder>
              </div>

              <div className="col-12">
                <label for="vertical" className="form-label">Vertical</label>
                <select className="form-select" id="vertical" onChange={e => setIsVertical(e.target.value)} required>
                  <option value="">Choose...</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>

              </div>
              {is_vertical === "1" && (
                <div className="col-12 ">
                  {/* <label for="vertical" className="form-label">Add </label> */}
                  <input type="text" className="form-control" id="vertical" value={vertical} onChange={e => setVertical(e.target.value)} placeholder="" />



                  <div className="col-12 mt-10">
                    <button className="btn btn-primary" onClick={e => addVertical()} type="button" >Add Vertical</button>
                  </div>
                </div>
              )}
              <div className="col-12 ">
                {verticals?.map((e, index) => (
                  <div className="card" key={index} style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{e}</h5>

                      <a href="javascript:void(0)" onClick={e => deleteVertical(index)} className="card-link">Remove</a>
                    </div>
                  </div>
                ))}

              </div>
              <div className="col-12">
                <label for="state" className="form-label">Filter</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="index" checked={isIndex} onChange={e => setIndex(e.target.checked)} />
                  <label className="form-check-label" for="index">
                    Index
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="reach" checked={isReach} onChange={e => setReach(e.target.checked)} />
                  <label className="form-check-label" for="reach">
                    Reach '000
                  </label>
                </div>

              </div>
              <div className="col-12">
                <label for="prints" className="form-label">Media Type</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="print" checked={isPrint} onChange={e => setIsPrint(e.target.checked)} />
                  <label className="form-check-label" for="print">
                    Print
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="online" checked={isOnline} onChange={e => setIsOnline(e.target.checked)} />
                  <label className="form-check-label" for="online">
                    Online
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="printonline" checked={isPrintOnline} onChange={e => setIsPrintOnline(e.target.checked)} />
                  <label className="form-check-label" for="printonline">
                    Print & Online
                  </label>
                </div>

              </div>
              <div className="col-6 ">
                <label for="zip" className="form-label">Document</label>
                <input type="file" className="form-control" id="zip" onChange={onFileChange} placeholder="" required />
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

export default Dashboard

