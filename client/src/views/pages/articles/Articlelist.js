import { CalendarIcon, HandIcon } from '../../../Icons/icons.component'
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../components/main.css'
import DatePicker from 'react-datepicker';
import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import { CSmartTable } from '@coreui/react-pro'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter, dateFilter, numberFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import toast from 'react-hot-toast';
import { DateRangePicker } from 'rsuite';
import AsyncSelect from 'react-select/async';
import moment from 'moment';

// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function Articlelist() {

  const [articleList, setArticleList] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [entityList, setEntityList] = useState([]);
  const [publicationList, setPublicationList] = useState([])
  const [zoneList, setZoneList] = useState([])
  const [editionList, setEditionList] = useState([])
  const [journalistList, setJournalistList] = useState([])

  const [publication, setPublication] = useState('')
  const [zone, setZone] = useState('')
  const [edition, setEdition] = useState('')
  const [journalist, setJournalist] = useState('');
  const [mediatype, setMediaType] = useState(1);
  const [message, setMessage] = useState('')
  const getArticleList = () => {
    console.log('selectRef.getValue()[0]', selectRef.getValue()[0])
    post("dataprocess/get-articlesrowlist", { "client_id": selectRef.getValue().length ? selectRef.getValue()[0]?.value : "5193", "media_type": mediatype, "page": "1", "fromDate": startDate === "" || startDate === null ? "2022-12-15" : moment(startDate).format('L'), "toDate": endDate === "" || endDate === null ? "2022-12-16" : moment(endDate).format('L'), zone: zone, publication: publication, edition: edition, journalist: journalist }
    ).then((response) => {
      setArticleList(response.data.articlesrowlist)
      setMessage(`<div style="color: rgb(0, 54, 185); margin-top: 5px; margin-bottom: 5px; font-size: 14px;">Total <span className="feed-count-info"><b>${response.data.articlesrowlist.length}</b></span> articles were found from <span class="feed-count-info"><b>${moment(startDate).format('LL')}</b></span> to <span className="feed-count-info"> <b>${moment(endDate).format('LL')}</b></span> <span className="feed-count-info">with selected client <b> ${selectRef.getValue().length ? selectRef.getValue()[0]?.label : ""} </b></span></div>`)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  const getPublicationList = () => {
    get("dataprocess/get-publicationlist"
    ).then((response) => {
      setPublicationList(response.data.publicationlist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const getJournalistList = (publication) => {
    get("journalist/publication/" + publication
    ).then((response) => {
      setJournalistList(response.data.journalist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  const getZoneList = () => {
    get("zone").then((response) => {
      setZoneList(response.data.zones)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  const getEditionList = (zone) => {
    get("zone/editions/" + zone).then((response) => {
      setEditionList(response.data.editions)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  useEffect(() => {
    getPublicationList();
    getZoneList();
    // getArticleList()
  }, []);

  const columns = [
    {
      dataField: 'id',
      text: 'No',
      sort: true
    },
    {
      dataField: 'article_id',
      text: 'Article Id',
      sort: true,
      filter: textFilter(),
      editable: false,
      formatter: (cell, row) => {
        return (<NavLink  to={`/Qualitative/${row.client_id}-${cell}-${row.entity_id}-${row.media_type_id}-${row.id}`}  className="nav-link"> {cell} </NavLink>);
      },
      // filter: false,
      // sorter: false,
    },
    {
      dataField: 'headline',
      text: 'Headline',
      sort: true,
      filter: textFilter(),
      editor: {
        type: Type.TEXTAREA
      },
      // formatter: (cell) => {
      //   return cell.length > 15 ? cell.substring(0, 15) + '...' : cell;
      // },
      formatter: (cell, row) => {
        return (<div style={{padding : "25px 13px 43px"}}> {cell} </div>);
      },
      // style: {
      //   fontWeight: 'bold',
      //   fontSize: '18px',
      //   width: '100%',
      //   backgroundColor: '#20B2AA'
      // },
      // editCellStyle: {
      //   width: '100%',
      //   backgroundColor: '#20B2AA'
      // }
      // filter: false,
      // sorter: false,
    },

    {
      dataField: 'entity_name',
      text: 'Entity',
      sort: true,
      filter: textFilter()
      // filter: false,
      // sorter: false,
    },

    {
      dataField: 'media_type_id',
      text: 'Media Type',
      sort: true,
      filter: textFilter(),
      formatter: (cell) => {
        return cell === 1 ? 'Online' : 'Print';
      },
      editor: {
        type: Type.SELECT,
        options: [{
          value: 1,
          label: 'Online'
        }, {
          value: 2,
          label: 'Print'
        }]
      }
    },
    {
      dataField: 'edition',
      text: 'Edition',
      sort: true,
      filter: textFilter()
      // filter: false,
      // sorter: false,
    },

    {
      dataField: 'publication',
      text: 'Publication',
      sort: true,
      filter: textFilter()
      // filter: false,
      // sorter: false,
    },
    {
      dataField: 'publish_date',
      text: 'Publish Date',
      sort: true,
      filter: dateFilter(),
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== 'object') {
          dateObj = new Date(cell);
        }
        return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
      },
      editor: {
        type: Type.DATE
      }
    },
    {
      dataField: 'headline_mention',
      text: 'Headline Mention',
      sort: true,
      filter: textFilter(),
      editor: {
        type: Type.CHECKBOX,
        value: '1:0'
      }
    },
    {
      dataField: 'ccm',
      text: 'CCM',
      sort: true,
      filter: numberFilter()
      // filter: false,
      // sorter: false,
    },
    {
      dataField: 'mav',
      text: 'MAV',
      sort: true,
      filter: numberFilter()
      // filter: false,
      // sorter: false,
    },
    {
      dataField: 'tonality',
      text: 'Tonality',
      sort: true,
      filter: textFilter(),
      formatter: (cell) => {
        return cell === 1 ? 'Postive' : cell === 2 ? 'Netural' : 'Negative';
      },
      editor: {
        type: Type.SELECT,
        options: [{
          value: 1,
          label: 'Postive'
        }, {
          value: 2,
          label: 'Netural'
        },
        {
          value: 3,
          label: 'Negative'
        }
        ]
      }
    },
    {
      dataField: 'word_count',
      text: 'Word Count',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'zone',
      text: 'Zone',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'co_score',
      text: 'Co Score',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'visibility_score',
      text: 'Visibility Score',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'reach',
      text: 'Reach',
      sort: true,
      filter: numberFilter()
    },
    // {
    //   dataField: 'index',
    //   text: 'Index',
    //   sort: true,
    //   filter: numberFilter()
    // },
    {
      dataField: 'vertical',
      text: 'Vertical',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'theme',
      text: 'Theme',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'total_ccms',
      text: 'Total ccms',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'page_no',
      text: 'Page No',
      sort: true,
      editor: {
        type: Type.TEXTAREA
      },
      filter: numberFilter(),
      formatter: (cell) => {
        return cell.length > 15 ? cell.substring(0, 15) + '...' : cell;
      },
    },
    {
      dataField: 'language',
      text: 'Language',
      sort: true,
      filter: textFilter()
    },
  ]


  function beforeSaveCell(oldValue, newValue, row, column, done) {
    setTimeout(() => {
      if (oldValue === newValue) {
        return false;
      }
      const formData = {};
      formData[column.dataField] = newValue
      const uploadPromise = new Promise((resolve, reject) => {

        put(`qaarticle/${row.id}`, formData).then((response) => {
          resolve("Article Successfully Saved");
          getArticleList()
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
    }, 0);
    return { async: true };
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true
  };
  let selectRef = React.useRef();

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

  const changeZone = (id) => {
    setZone(id);
    if (id !== "") getEditionList(id)
  }

  const changePublication = (id) => {
    setPublication(id);
    if (id !== "") getJournalistList(id)
  }


  return (
    <>
      <div class="page-title d-flex justify-content-between">
        <h1> Article List</h1>
      </div>
      <div className="content-box edit-pubication">
        <div className="row">
          <div className="col-3">  <DatePicker
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
          <div className='col-3'>
            <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} isClearable={true} ref={(ref) => {
              selectRef = ref;
            }} />
          </div>
          {/* <div className='col-3'>

            <select className='form-select'>
              <option>
                Select Entity
              </option>
              <option> Grasim Industries</option>
              <option> Hindalco</option>
              <option> Ultratech Cement</option>
              <option> Aditya Birla Group</option>
              <option> Vodafone Idea Ltd</option>
              <option> Novelies</option>
              <option> Birla Carbon</option>
              <option> Liva</option>
            </select>

          </div> */}
          <div className='col-3'>

            <select className='form-select' onChange={e => setMediaType(e.target.value
            )}>
              <option>
                Media Type
              </option>
              <option value="1"> Online</option>
              <option value="2"> Print</option>
            </select>

          </div>
          <div className='col-3'>

            <select className='form-select' onChange={e => changeZone(e.target.value)}>
              <option value={""}>
                Zone
              </option>
              {zoneList?.map((e, index) =>
                <option key={index} value={e.id}> {e.zone}</option>
              )}

            </select>

          </div>
          <div className='col-3'>

            <select className='form-select' onChange={e => setEdition(e.target.value)}>
              <option value="">Edition</option>
              {editionList?.map((e, index) =>
                <option key={index} value={e.id}> {e.edition_name}</option>
              )}
            </select>

          </div>

          <div className='col-3'>

            <select className='form-select' onChange={e => changePublication(e.target.value)}>
              <option value="">Publication</option>
              {publicationList?.map((e, index) =>
                <option key={index} value={e.id}> {e.publication}</option>
              )}
            </select>
          </div>
          <div className='col-3'>

            <select className='form-select' onChange={e => setJournalist(e.target.value)}>
              <option>Jounalist</option>
              {journalistList?.map((e, index) =>
                <option key={index} value={e.id}> {e.journalist_name}</option>
              )}
            </select>
          </div>
          <div className='col-12'>
            <button type='button' onClick={e => getArticleList()} className='btn btn-primary'>Search</button>
          </div>
        </div>
      </div>
      <div className="content-box">
        <div dangerouslySetInnerHTML={{ __html: message }}></div>
        <br /> <br />
        <BootstrapTable
          keyField="id"
          data={articleList}
          columns={columns}
          cellEdit={cellEditFactory({
            mode: 'click',
            beforeSaveCell
          })}
          filter={filterFactory()}
          filterPosition="top"
          pagination={paginationFactory()}
          selectRow={selectRow}
          tabIndexCell
        />
        {/* <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={articleList.map((e, index) => ({
        id: index,
        ...e
      }))}
      pagination
      scopedColumns={{
       
        media_type: (list) => (
          <td>{list.media_type === 1 ? 'print' : 'online'}</td>
        ),
        headline: (list) => (
          <>
          {list.isEdit === false ? (
          <td onDoubleClick={(e) => addEditInput(e, list.id, list.headline)}>{list.headline}</td> ) :
            ( <ViewInput id={list.id} value={list.headline} /> )
          }
          </>
        )
       }}
      tableProps={{
        hover: true,
        responsive: true,
      }}
    /> */}
      </div>
    </>
  )
}
export default Articlelist

