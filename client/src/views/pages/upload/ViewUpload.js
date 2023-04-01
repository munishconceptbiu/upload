import React, { useState, useEffect, useRef } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import { store } from '../../../store/store';
import { DeleteIcon } from "../../../Icons/icons.component";
import WidgetPagination from '../../../components/WidgetPagination';

import { get , deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { CSmartTable } from '@coreui/react-pro'

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ViewUpload = ({ fetchList }) => {
  const state = store.getState();
  
    const [uploadList, setUploadList] = useState([]);
    const [client_id, setClientId] = useState();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUploadId, setSelectedUploadId] = useState(null);

    const [perPage, setPerPage] = useState(10);
    const [uploadListLength, setUploadListLength] = useState(0);
    const [selectedPageIndex, setSelectedPageIndex] = useState(0);
    const [uploadListPages, setUploadListPages] = useState([]);

    const scrollRef = useRef();


  const columns = [
    {
      key: 'client_name',
      label: 'Client Name',
    },
    {
      key: 'start_date',
      label: 'Report Start Date',
    },
    {
      key: 'end_date',
      label: 'Report End Date',
    },
    {
      key: 'file',
      label: 'File Link',
    },
    {
      key: 'username',
      label: 'Uploaded By',
    },
    {
      key: 'createdAt',
      label: 'Uploaded At',
    },
    {
      key: 'total_article',
      label: 'Uploaded Article Count',
    },
    {
      key: 'nm_total_article',
      label: 'Mismatch Article Count',
    },
    {
      key: 'action',
      label: 'Action',
      filter: false,
    sorter: false,
    },
  ]

 
    useEffect(() => {
      // console.log(selectedPageIndex);
      scrollRef.current && scrollRef.current.scrollIntoView({behavior: "smooth"});
      uploadListPages.length && setUploadList(uploadListPages);
    }, [uploadListPages, selectedPageIndex, fetchList]);

    const formatAndSetUploadList = (list) => {
      const sorted = list.sort((a, b) => a.createdAt > b.createdAt ? -1 : a.createdAt === b.createdAt ?  0 : 1);
      setUploadListLength(sorted.length);
      const pagesLength = Math.ceil(sorted.length / perPage);
      const pagesArr = [];
      for(let i = 0; i < pagesLength; i++) {
        const currPage = [];
        const currItemIdx = i * perPage;
        list.filter((v,idx) => idx >= currItemIdx && idx < currItemIdx + perPage).forEach((elm, idx) => {
          currPage.push(elm);
        });
        pagesArr.push(currPage);
      }
      setUploadListPages(pagesArr);
      // console.log(pagesArr);
      // setUploadList(pagesArr[selectedPageIndex]);
    }

    const getUploadList = (cid) => {
      const id = cid || ""
      const url = state?.auth?.auth?.role === 'admin' && cid === undefined ?  'artical/get-upload' : "artical/viewlist/"+ state?.auth?.auth?.id +"/?client_id="+ id
      get(url).then((response) => {
        console.log('response', response)
        setUploadList(response.data.data.map((e, index) => ({
          id: index,
          ...e
        })));
        // setUploadList(upList);
          })
          .catch(() => {
            // handleLoginFailure({ status: UNAUTHORIZED });
          })
          
    }

    const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      get("artical/get-setting-clientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.id,
          label: e.client_name
        })));
      })

    });

  const clientChange = (e) => {
    setClientId(e.value)
    getUploadList(e.value);
  }
  
  const deleteUpload= (id) => {
      const uploadPromise = new Promise((resolve, reject) => {

        deleteMethod(`artical/delete-upload/${id}`).then((response) => {
          resolve("Upload Successfully deleted");
          getUploadList()
        }).catch((err) => {
            reject(err.response.data.error)
        })
    });
    toast.promise(
        uploadPromise,
        {
            loading: 'deleting ...',
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

  const startDeleteUpload = (id) => {
    setSelectedUploadId(id);
    setShowDeleteModal(true);
  }

  const cancelDelete = () => {
    setSelectedUploadId(null);
    setShowDeleteModal(false);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uploadNMArticleList, setUploadNMArticleList] = useState([]);
  const getNMArticleList = (id) => {
    get("artical/view-not-matching-upload-list/" + id).then((response) => {
      handleShow();

      setUploadNMArticleList(response.data.list)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

    useEffect(() => {
      getUploadList();
      }, [fetchList]);

      const columnsNm = [
        {
          key: 'id',
          label: '#',
          filter: false,
          sorter: false,
        },
        {
          key: 'client_name',
          label: 'Client Name',
          filter: false,
          sorter: false,
        },
        {
          key: 'client_id',
          label: 'Client Id',
          filter: false,
          sorter: false,
        },
        {
          key: 'entity_name',
          label: 'Entity Name',
          filter: false,
          sorter: false,
        },
      ]
      const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const fileExtension = '.xlsx';
    
          const exportToCSV = (csvData, fileName) => {
            const ws = XLSX.utils.json_to_sheet(csvData);
            const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], {type: fileType});
            FileSaver.saveAs(data, fileName + fileExtension);
        }
      
    return (
      <div className="uqr-contents" ref={scrollRef}>
        <div className="component-title">
            <h5>
              Previous Uploads
            </h5>
          </div>
      <div className="container-fluid">

      <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={uploadList}
      pagination
      sorter
      // columnFilterValue={{
      //   createdAt: (date) =>
      //     new Date(Date.parse(date))
      // }}
      scopedColumns={{
        action: (item) => (
          <td className='action-btns'> {state.auth.auth.role === 'admin' && <a href="javascript:void(0)" onClick={e => startDeleteUpload(item.id)} className='deleicon'><DeleteIcon /></a> }  {state.auth.auth.role !== 'admin' && <span>-</span>} </td>
        ),
        nm_total_article: (list) => (
          <td>{list.nm_total_article === 0 || list.nm_total_article === null && <span> - </span> } 
          {list.nm_total_article > 0 && <span onClick={e => getNMArticleList(list.id)} title='view' style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>{list.nm_total_article}</span> } </td>
        ),
        total_article: (list) => (
          <td>{ list.total_count === 0 || list.total_count === null ? '-' : list.total_count}</td>
        ),
        start_date: (list) => (
          <td>{moment(list.start_date).format('YYYY-MM-DD')}</td>
        ),
        end_date: (list) => (
          <td>{moment(list.end_date).format('YYYY-MM-DD')}</td>
        ),
        file: (list) => (
          <td><a href={list.file} target="_blank">Download File</a></td>
        ),
        createdAt: (list) => (
          <td>{moment(list.createdAt).format('YYYY-MM-DD HH:MM A')}</td>
        )
      }}
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
        {/* <div style={{ "padding": "4px 4px 32px" }}>      <button className="btn btn-success pull-right" style={{ float: "right" }} onClick={addSetting}>Add Setting</button>
        </div> */}

        {/* <div className='client-select client-section'>
          <label htmlFor="country" className="form-label">Select Client</label>
          <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
        </div>
      {uploadList.length > 0 && <div className="view-setting">
        
        <table className='table'>
      <thead>
        <tr>
          <th>#</th> */}
          {/* <th>Email</th> */}
          {/* <th>Client Name</th>
          <th>Report Start Date</th>
          <th>Report End Date</th>
          <th>File Link</th>
          <th>Uploaded By</th>
          <th>Uploaded At</th>
          <th> Uploaded Article Count </th>
          <th> Mismatch Article Count </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {uploadList?.map((list, index) => (
        <tr  key={index}>
          <td>{index + 1 + (selectedPageIndex*perPage)}</td> */}
          {/* <td>{list.email}</td> */}
          {/* <td>{list.client_name}</td>
          <td>{moment(list.start_date).format('ll')}</td>
          <td>{moment(list.end_date).format('ll')}</td>
          <td><a href={list.file} target="_blank">Download File</a></td>
          <td>{list.username}</td>
          <td>{moment(list.createdAt).format('lll')}</td>
          <td>{ list.total_count === 0 || list.total_count === null ? '-' : list.total_count}</td>
          <td>{list.nm_total_article === 0 || list.nm_total_article === null && <span> - </span> } 
          {list.nm_total_article > 0 && <span onClick={e => getNMArticleList(list.id)} title='view' style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>{list.nm_total_article}</span> } </td>
          <td className='action-btns'> {state.auth.auth.role === 'admin' && <a href="javascript:void(0)" onClick={e => startDeleteUpload(list.id)} className='deleicon'><DeleteIcon /></a> }  {state.auth.auth.role !== 'admin' && <span>-</span>} </td>
        </tr>
       ))}
      </tbody>
    </table>
    <WidgetPagination datasetLength={uploadListPages.length} selectedIndex={selectedPageIndex} onSelectPage={(i) => setSelectedPageIndex(--i)}/>
    </div>}
    {!uploadList.length && <div className='empty-message'>No data for selected client</div>} */}
    </div>

    <Modal size="med" show={showDeleteModal} onHide={()=>cancelDelete()}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
              <Modal.Body>
                <div className='container'>
                  <h6>Are you sure you want to delete?</h6>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={() => {
                  deleteUpload(selectedUploadId);
                  cancelDelete();
                }}>
                  Yes
                </Button>
                <Button variant="warning" onClick={() => cancelDelete()}>
                  No
                </Button>
              </Modal.Footer>
    </Modal>
    <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Mismatcing Articles</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="warning pull-right" style={{marginLeft:"89%"}} onClick={(e) => exportToCSV(uploadNMArticleList,'Mismatch-article')}>Export</Button>
              <div className="container ">
                <div className="row">
                  <div className="col-12">
                  <CSmartTable
      columns={columnsNm}
      columnFilter
      columnSorter
      items={uploadNMArticleList.map((e, index) => ({
        id: index + 1,
        ...e
      }))}
      pagination
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
                  {/* <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Client Name</th>
          <th>Client Id</th>
          <th>Article Id</th>
          <th>Entity Name</th>
         
        </tr>
      </thead>
      <tbody>
        {uploadNMArticleList?.map((list, index) => (
        <tr  key={index}>
          <td>{index+1}</td>
          <td>{list.client_name}</td>
          <td>{list.client_id}</td>
          <td>{list.article_id}</td>
          <td>{list.entity_name}</td>
        </tr>
       ))}
      </tbody>
    </table> */}

                  </div>

                </div>
              </div>

            </Modal.Body>
          
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
    </Modal>
    </div>

    )
}

export default ViewUpload

