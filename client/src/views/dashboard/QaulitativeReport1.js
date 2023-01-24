import React from 'react'
import Tabs from '../../components/Tabs'
import AnalysisDetails from '../../components/AnalysisDetails'

// import AsyncSelect from 'react-select/async';
// import swal from 'sweetalert';
// import AppHeader from '../../components/AppHeader'

// import { ProgressBar } from "react-bootstrap"
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import axios from 'axios';
// import { get, post } from "../../services/CommanService";
// import myData from '../../assets/geoJson/client.json';
// import { store } from '../../store/store';
// import toast from 'react-hot-toast';

// import Reorder, {
//   reorder,
//   reorderImmutable,
//   reorderFromTo,
//   reorderFromToImmutable
// } from "react-reorder";
// import move from "lodash-move";



// const qualitative = () => {
//   const state = store.getState();
  
//   const [client_id, setClientId] = useState()
//   const [client_name, setClientName] = useState()
//   const [ip, setIP] = useState('');

//   let selectRef = React.useRef();
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;

//   //creating function to load ip address from the API
//   const getData = async () => {
//     const res = await axios.get('https://geolocation-db.com/json/')
//     console.log(res.data);
//     setIP(res.data.IPv4)
//   }
//   const upload = async () => {
//     const client = selectRef.getValue()[0]
//     if (client === "" || client === undefined || client === null) {
//       toast.error("Client id can't be empty");
//       return false;
//     }
//     if (startDate === "" || startDate === null) {
//       toast.error("Start Date can't be empty");
//       return false;
//     }
//     if (endDate === "" || endDate === null) {
//       toast.error("End Date can't be empty");
//       return false;
//     }

//     if (file === "" || file === undefined) {
//       toast.error("File can't be empty");
//       return false;
//     }

//     const formData = new FormData();

//     formData.append('upload', file);
//     formData.append('client_id', client.value);
//     formData.append('client_name', client.label);
//     formData.append('start_date', moment(startDate).format('L'))
//     formData.append('end_date', moment(endDate).format('L'))
//     formData.append('username', state.auth.auth.first_name + ' ' + state.auth.auth.last_name);
//     formData.append('email', state.auth.auth.email);
//     formData.append('user_id', state.auth.auth.id)
//     formData.append('ip_address', ip)
   

//     const uploadPromise = new Promise((resolve, reject) => {

//       post(`http://qa.conceptbiu.com/unifiedapi/artical`, formData).then((response) => {
//         setFile('')
//         selectRef.clearValue();
//         setClientName();
//         setClientId()
//         resolve("Article upload processing");
//       }).catch((err) => {
//         console.log('err', err.response.data.error)
//         setFile('')
//         selectRef.clearValue();
//         setClientName();
//         setClientId()
//         reject(err.response.data.error)
//       })
//     });
//     toast.promise(
//       uploadPromise,
//       {
//         loading: 'uploading ...',
//         success: (data) => `${data}`,
//         error: (err) => `This just happened: ${err}`,
//       },
//       {
//         style: {
//           minWidth: '250px',
//         },

//       }
//     );
//   }
//   const [file, setFile] = useState('')
//   const onFileChange = event => {
//     // Update the state 
//     setFile(event.target.files[0]);
//   };

//   const promiseOptions = (inputValue) =>
//     new Promise((resolve) => {
//       inputValue = inputValue || 'a'
//       get("artical/get-setting-clientlist/" + inputValue).then((response) => {
//         resolve(response.data.client.map((e) => ({
//           value: e.client_id,
//           label: e.client_name
//         })));
//       })

//     });

//   useEffect(() => {
//     // getClientList();
//     getData()
//   }, []);
//   return (
//     <>

//       <AppHeader />
      
//     </>

//   )
// }

// export default qualitative

const qualitative = () => {
    return (
        <>
        
        <div className="container-list">
            <div className='row'>
                <div className='col-5'>
                    <AnalysisDetails/>
                </div>
                <div className='col-7 '>
                    <h3 className='text-center'>Qualitative Form</h3>
                    <Tabs/>
                </div>
            </div>
        </div>
        </>
          )
}
export default qualitative

