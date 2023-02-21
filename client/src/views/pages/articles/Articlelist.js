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

  const [publication, setPublication] = useState()
  const [zone, setZone] = useState()
  const [edition, setEdition] = useState()
  const [journalist, setJournalist] = useState()
  const getArticleList = () => {
    post("dataprocess/get-articlesrowlist", {"client_id":"5193","media_type":"2","page":"1","fromDate":"2022-12-15","toDate":"2022-12-16"}
    ).then((response) => {
      setArticleList(response.data.articlesrowlist)
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

  const getJournalistList = () => {
    get("journalist"
    ).then((response) => {
      setJournalistList(response.data.journalist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  const getZoneList = () => {
    get("zone").then((response) => {
      setZoneList(response.data.zone)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  useEffect(() => {
    getPublicationList();
    getJournalistList();
    getZoneList();
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
      filter: numberFilter(),
      editable: false,
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
      formatter: (cell) => {
        return cell.length > 15 ? cell.substring(0, 15) +'...' : cell ;
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
        return cell === 1 ? 'Print' : 'Online';
      },
      editor: {
        type: Type.SELECT,
        options: [{
          value: 1,
          label: 'Print'
        }, {
          value: 2,
          label: 'Online'
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
        return cell.length > 15 ? cell.substring(0, 15) +'...' : cell ;
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
      if(oldValue === newValue){
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


  return (
    <>
      <div className="page-title">
        <h1 >
          Article List
        </h1>
      </div>
      <div className='content-box'>
        <div className='row article-list-form'>
          <div className='col-3'>    <DatePicker
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
          <div className='col-3'>

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

          </div>
          <div className='col-3'>

            <select className='form-select'>
              <option>
                Media Type
              </option>
              <option> HDFC Bank</option>
              <option> Apollo Healthcare</option>
              <option> Tata Motors</option>
              <option> ICICI Bank</option>
            </select>

          </div>
          <div className='col-3'>

            <select className='form-select'>
              <option>
                Zone
              </option>
              <option> Mumbai</option>
              <option> Delhi</option>
              <option> Hyderabad</option>
              <option> ICICI Bank</option>
            </select>

          </div>
          <div className='col-3'>

            <select className='form-select'>
              <option value="">Edition</option>
              <option value="408">Adilabad</option>
              <option value="249">Agartala</option>
              <option value="114">Agra</option>
              <option value="50">Ahmedabad</option>
              <option value="191">Ahmedkarnagar</option>
              <option value="115">Ahmednagar</option>
              <option value="450">Aizawl</option>
              <option value="64">Ajmer</option>
              <option value="116">Akola</option>
              <option value="600">Alappuzha</option>
              <option value="437">Alibag</option>
              <option value="117">Aligarh</option>
              <option value="1082">Alipurduar</option>
              <option value="71">Allahabad</option>
              <option value="575">alleppey</option>
              <option value="724">Almora</option>
              <option value="40">Alwar</option>
              <option value="118">Amaravathi</option>
              <option value="502">Amarkantak</option>
              <option value="95">Ambala</option>
              <option value="914">Ambernath </option>
              <option value="616">Ambikapur</option>
              <option value="868">Amethi</option>
              <option value="402">Amreli</option>
              <option value="177">Amritsar</option>
              <option value="712">Amroha</option>
              <option value="167">Anand</option>
              <option value="652">Anantapur</option>
              <option value="119">Ananthapur</option>
              <option value="483">Andaman &amp; Nikobar</option>
              <option value="860">Angul</option>
              <option value="630">Angul Dhenekal</option>
              <option value="363">Angul-Dhenkanal</option>
              <option value="484">Ankleshwar</option>
              <option value="436">Arunachal Pradesh</option>
              <option value="261">Asansol</option>
              <option value="992">Asia</option>
              <option value="81">Assam</option>
              <option value="481">Athmakur</option>
              <option value="69">Aurangabad</option>
              <option value="686">Ayodhya</option>
              <option value="202">Azamgarh</option>
              <option value="393">Babrala</option>
              <option value="194">Badaun</option>
              <option value="310">Baddi</option>
              <option value="467">Badnawar</option>
              <option value="493">Badrinath</option>
              <option value="225">Bagalkote</option>
              <option value="548">Bagdogra</option>
              <option value="199">Baghpat</option>
              <option value="986">Bahadurgarh</option>
              <option value="468">Bahjoi</option>
              <option value="524">Bahrain </option>
              <option value="1004">Baikunthpur</option>
              <option value="80">Baitool</option>
              <option value="1038">Balangir</option>
              <option value="98">Balasore</option>
              <option value="459">Baleswar</option>
              <option value="622">Balia</option>
              <option value="192">Ballika</option>
              <option value="1022">Baloda Bazar</option>
              <option value="1089">Banaskantha</option>
              <option value="594">Banda</option>
              <option value="668">Banga</option>
              <option value="51">Bangalore</option>
              <option value="1066">Bangladesh</option>
              <option value="1085">Bankura</option>
              <option value="210">Barabanki</option>
              <option value="1094">Baramati</option>
              <option value="634">Baran</option>
              <option value="250">Bardwan</option>
              <option value="120">Bareilly</option>
              <option value="1026">Bargarh</option>
              <option value="1071">Baripada</option>
              <option value="442">Barmer</option>
              <option value="259">Barnala</option>
              <option value="284">Baroda</option>
              <option value="1074">Barpeta</option>
              <option value="644">Barwani</option>
              <option value="618">Bastar</option>
              <option value="315">Basti</option>
              <option value="507">Batala</option>
              <option value="534">Beed</option>
              <option value="342">Begusarai</option>
              <option value="565">Belagavi City</option>
              <option value="226">Belgaum</option>
              <option value="122">Bellary</option>
              <option value="121">Berhampur</option>
              <option value="672">Bettiah</option>
              <option value="1030">Bhadrak</option>
              <option value="462">Bhadurgarh</option>
              <option value="308">Bhagalpur</option>
              <option value="966">Bhandara</option>
              <option value="1036">Bhanjanagar</option>
              <option value="343">Bharatpur</option>
              <option value="280">Bharuch</option>
              <option value="306">Bhatinda</option>
              <option value="123">Bhavnagar</option>
              <option value="544">Bhawanipatna</option>
              <option value="296">Bhilai</option>
              <option value="620">Bhilwara</option>
              <option value="370">Bhiwani </option>
              <option value="39">Bhopal</option>
              <option value="97">Bhubaneswar</option>
              <option value="79">Bhuj</option>
              <option value="559">Bhutan</option>
              <option value="206">Bidar</option>
              <option value="227">Bijapur</option>
              <option value="196">Bijnor</option>
              <option value="124">Bikaner</option>
              <option value="102">Bilaspur</option>
              <option value="1095">Bilaspur(HP)</option>
              <option value="541">Boisar</option>
              <option value="270">Bokaro</option>
              <option value="846">Bongaigaon</option>
              <option value="1032">Boudh</option>
              <option value="1072">Brahmaputra</option>
              <option value="197">Bulandshar</option>
              <option value="125">Buldhana</option>
              <option value="1067">Bundi</option>
              <option value="318">Burdwan</option>
              <option value="294">Calicut </option>
              <option value="295">Cannanore </option>
              <option value="978">Chakan</option>
              <option value="3">Chandigarh</option>
              <option value="126">Chandrapur</option>
              <option value="996">Chapra</option>
              <option value="527">Charkhi Dadri</option>
              <option value="678">Chatrapur</option>
              <option value="1046">Chattar</option>
              <option value="573">Chattarpur</option>
              <option value="380">Chaukhatiya</option>
              <option value="1083">Chengalpattu</option>
              <option value="24">Chennai</option>
              <option value="994">Chhatarpur (MP)</option>
              <option value="431">Chhindwara</option>
              <option value="357">Chikamagalur</option>
              <option value="894">Chikkaballapur</option>
              <option value="547">China</option>
              <option value="127">Chiplum</option>
              <option value="688">Chiplun</option>
              <option value="110">Chitradurga </option>
              <option value="425">Chittor</option>
              <option value="504">Chittorgarh</option>
              <option value="852">Churu</option>
              <option value="128">Coimbatore</option>
              <option value="438">Colombo</option>
              <option value="319">Coochbehar</option>
              <option value="571">coorg</option>
              <option value="440">Cuddalore</option>
              <option value="283">Cuttack</option>
              <option value="902">Dahanu</option>
              <option value="285">Dahode</option>
              <option value="247">Daltongunj</option>
              <option value="485">Daman</option>
              <option value="555">Damoh</option>
              <option value="886">Darbhanga</option>
              <option value="320">Darjeeling</option>
              <option value="1096">Darlaghat</option>
              <option value="230">Davangere</option>
              <option value="90">Deesa</option>
              <option value="101">Dehradun</option>
              <option value="242">Deoghar</option>
              <option value="908">Deoria</option>
              <option value="480">Devarakadra</option>
              <option value="340">Devghar</option>
              <option value="415">Dewas</option>
              <option value="405">Dhaka</option>
              <option value="237">Dhaka</option>
              <option value="205">Dhanbad</option>
              <option value="465">Dhar</option>
              <option value="254">Dharamshala</option>
              <option value="588">Dharmapuri</option>
              <option value="228">Dharwad</option>
              <option value="854">Dhenkanal</option>
              <option value="1073">Dhubri</option>
              <option value="174">Dhule</option>
              <option value="466">Dibrugarh</option>
              <option value="457">Dimapur</option>
              <option value="383">Dindigul</option>
              <option value="1068">Dishergarh</option>
              <option value="942">Dombivli</option>
              <option value="525">Dubai</option>
              <option value="988">Dumka</option>
              <option value="348">Durg</option>
              <option value="260">Durgapur</option>
              <option value="476">Dwarka</option>
              <option value="850">EASTERN CAPE - Africa</option>
              <option value="896">eluru</option>
              <option value="536">Ernakulam</option>
              <option value="129">Erode</option>
              <option value="287">Etawah</option>
              <option value="46">extra</option>
              <option value="209">Faizabad</option>
              <option value="27">Faridabad</option>
              <option value="1099">Faridkot</option>
              <option value="706">Farukhabad</option>
              <option value="528">Fatehabad</option>
              <option value="1100">Fatehgarh Sahib</option>
              <option value="312">Fatehpur</option>
              <option value="1104">Fazilka</option>
              <option value="377">Ferozpur</option>
              <option value="454">Firozabad</option>
              <option value="916">Firozpur</option>
              <option value="818">FREE STATE - Africa</option>
              <option value="233">Gadag</option>
              <option value="954">Gadchiroli</option>
              <option value="379">Gairsain</option>
              <option value="1052">Gajapati</option>
              <option value="78">Gandhi Dham</option>
              <option value="76">Gandhi Nagar</option>
              <option value="479">Ganga Nagar</option>
              <option value="1098">Gangapur</option>
              <option value="474">Gangavathi</option>
              <option value="130">Gangtok</option>
              <option value="822">GAUTENG - Africa</option>
              <option value="349">Gaya</option>
              <option value="87">Ghaziabad</option>
              <option value="91">Goa</option>
              <option value="976">Godda</option>
              <option value="990">Gonda</option>
              <option value="962">Gondal</option>
              <option value="952">Gondia</option>
              <option value="451">Gopalganj</option>
              <option value="371">Gopeshwar</option>
              <option value="131">Gorakhpur</option>
              <option value="521">Greater Noida</option>
              <option value="132">Gulbarga</option>
              <option value="427">Guna</option>
              <option value="133">Guntur</option>
              <option value="258">Gurdaspur</option>
              <option value="85">Gurgaon</option>
              <option value="1060">Gurugram</option>
              <option value="34">Guwahati</option>
              <option value="37">Gwalior</option>
              <option value="892">Hadoti  </option>
              <option value="520">Hajipur</option>
              <option value="355">Haldia</option>
              <option value="244">Haldwani</option>
              <option value="460">Hamirpur</option>
              <option value="419">Hansi</option>
              <option value="420">Hanumangarh</option>
              <option value="443">Hapur</option>
              <option value="567">Harda</option>
              <option value="316">Hardoi</option>
              <option value="281">Haridwar</option>
              <option value="134">Haryana</option>
              <option value="224">Hasan</option>
              <option value="638">Hassan</option>
              <option value="413">Hathras</option>
              <option value="561">Haveri</option>
              <option value="974">Hazaribagh</option>
              <option value="486">Himmatnagar</option>
              <option value="614">Hingoli</option>
              <option value="135">Hisar</option>
              <option value="604">Hong Kong</option>
              <option value="884">Hooghly</option>
              <option value="256">Hosangabad</option>
              <option value="640">Hoshangabad</option>
              <option value="257">Hoshiarpur</option>
              <option value="229">Hospet</option>
              <option value="394">Hosur</option>
              <option value="330">How to spend it</option>
              <option value="1090">Howrah</option>
              <option value="86">Hubli</option>
              <option value="4">Hyderabad</option>
              <option value="876">Idukki</option>
              <option value="346">Imphal </option>
              <option value="38">Indore</option>
              <option value="70">International</option>
              <option value="828">INTERNATIONAL - Africa</option>
              <option value="526">Islamabad</option>
              <option value="579">itanagar</option>
              <option value="428">Itarsi</option>
              <option value="193">J P Nagar</option>
              <option value="74">Jaamnagar</option>
              <option value="136">Jabalpur</option>
              <option value="307">Jagadiri</option>
              <option value="1056">Jagatsinghpur</option>
              <option value="840">Jagdalpur</option>
              <option value="28">Jaipur</option>
              <option value="352">Jaisalmer</option>
              <option value="447">Jajpur</option>
              <option value="57">Jalandhar</option>
              <option value="299">Jalendhar</option>
              <option value="137">Jalgaon</option>
              <option value="448">Jalna</option>
              <option value="321">Jalpaiguri</option>
              <option value="29">Jammu</option>
              <option value="509">Jamnagar</option>
              <option value="49">Jamshedpur</option>
              <option value="702">Jamtara</option>
              <option value="1093">Jamuria</option>
              <option value="203">Jaunpur</option>
              <option value="458">Jeypore</option>
              <option value="369">Jhajjar</option>
              <option value="495">Jhalawar</option>
              <option value="138">Jhansi</option>
              <option value="113">Jharkhand</option>
              <option value="1012">Jharsuguda</option>
              <option value="378">Jind</option>
              <option value="31">Jodhpur</option>
              <option value="842">Jorhat</option>
              <option value="139">Junagadh</option>
              <option value="397">Kadapa</option>
              <option value="488">Kadi</option>
              <option value="441">Kaithal</option>
              <option value="140">Kakinada</option>
              <option value="848">Kakot</option>
              <option value="676">Kalaburagi</option>
              <option value="1010">Kalahandi</option>
              <option value="514">Kalburgi</option>
              <option value="557">Kaliapani</option>
              <option value="322">Kalimpong</option>
              <option value="494">Kalinganagar</option>
              <option value="426">Kalka</option>
              <option value="489">Kalol</option>
              <option value="940">Kalyan</option>
              <option value="690">Kamareddy</option>
              <option value="384">Kanchipuram</option>
              <option value="1024">Kandhamal</option>
              <option value="461">Kangra</option>
              <option value="708">Kannauj</option>
              <option value="162">Kannur</option>
              <option value="48">Kanpur</option>
              <option value="1006">Kanyakumari</option>
              <option value="650">Kapurthala</option>
              <option value="602">karachi</option>
              <option value="385">Karaikudi</option>
              <option value="345">Karimganj</option>
              <option value="141">Karimnagar</option>
              <option value="970">Karjat</option>
              <option value="263">Karnal</option>
              <option value="356">Karnataka</option>
              <option value="386">Karur</option>
              <option value="234">Karwar</option>
              <option value="880">Kasaragod</option>
              <option value="82">Kashi</option>
              <option value="404">Kathmandu</option>
              <option value="648">Katihar</option>
              <option value="972">Kaushambi</option>
              <option value="422">Kavali</option>
              <option value="950">Kawai</option>
              <option value="862">Kendrapara</option>
              <option value="816">KENYA - Africa</option>
              <option value="516">Keonjhar</option>
              <option value="505">Kerala</option>
              <option value="545">Kesinga</option>
              <option value="1018">Khagaria</option>
              <option value="1070">Khambhat </option>
              <option value="365">Khammam</option>
              <option value="395">Khandwa </option>
              <option value="513">Khanna</option>
              <option value="696">Kharagpur</option>
              <option value="918">Kharora</option>
              <option value="610">Khopoli</option>
              <option value="1034">Khordha</option>
              <option value="596">khusinagar</option>
              <option value="1063">Kirandul</option>
              <option value="424">Kishanganj</option>
              <option value="84">Kochi</option>
              <option value="499">Kohima</option>
              <option value="235">Kolar</option>
              <option value="142">Kolhapur</option>
              <option value="25">Kolkata</option>
              <option value="163">Kollam</option>
              <option value="358">Koppal</option>
              <option value="920">Koraput</option>
              <option value="586">Korba</option>
              <option value="670">Koriya</option>
              <option value="109">Kota</option>
              <option value="722">Kotdwar</option>
              <option value="482">Kothakota</option>
              <option value="446">Kottakkal</option>
              <option value="143">Kottayam</option>
              <option value="144">Kozhikode</option>
              <option value="518">Krishnagiri</option>
              <option value="252">Kullu</option>
              <option value="387">Kumbakonam</option>
              <option value="362">Kurnool</option>
              <option value="323">Kurseong</option>
              <option value="344">Kurukshetra</option>
              <option value="718">Kushinagar</option>
              <option value="473">Kustagi</option>
              <option value="272">Kutch</option>
              <option value="824">KWAZULU NATAL - Africa</option>
              <option value="810">KWAZULU NATAL(Africa)</option>
              <option value="1091">Ladakh</option>
              <option value="844">Lakhimpur</option>
              <option value="898">Lalitpur</option>
              <option value="100">Lathur</option>
              <option value="832">LIMPOPO - Africa</option>
              <option value="368">Lonavala</option>
              <option value="99">London</option>
              <option value="33">Lucknow</option>
              <option value="83">Ludhiana</option>
              <option value="1076">Madhavaram</option>
              <option value="549">Madhubani</option>
              <option value="236">Madikeri</option>
              <option value="112">Madurai</option>
              <option value="326">Magazine</option>
              <option value="329">Magazine</option>
              <option value="327">Magazine</option>
              <option value="325">Magazine</option>
              <option value="328">Magazine</option>
              <option value="409">Mahabubnagar</option>
              <option value="912">Maharajganj</option>
              <option value="529">Mahendragarh</option>
              <option value="416">Mainpuri</option>
              <option value="145">Malappuram</option>
              <option value="890">Malda</option>
              <option value="938">Malegaon</option>
              <option value="523">Malerkotla</option>
              <option value="1042">Malkangiri</option>
              <option value="982">Malkapur</option>
              <option value="477">Mallapuram</option>
              <option value="682">Malwa</option>
              <option value="540">Mambakkam</option>
              <option value="253">Manali</option>
              <option value="411">Manchiryal</option>
              <option value="453">Mandi</option>
              <option value="94">Mangalore</option>
              <option value="146">Manipal</option>
              <option value="584">Manipur</option>
              <option value="1092">Mansa</option>
              <option value="382">Mathura</option>
              <option value="201">Mau</option>
              <option value="1016">Mayiladuthurai</option>
              <option value="864">Mayurbhanj</option>
              <option value="698">Medak</option>
              <option value="423">Medinipur</option>
              <option value="26">Meerut</option>
              <option value="291">Mehsana</option>
              <option value="464">Mewat</option>
              <option value="934">Miraj</option>
              <option value="1020">Miryalaguda</option>
              <option value="714">Mirzapur</option>
              <option value="412">Mithapur</option>
              <option value="511">Mizoram</option>
              <option value="449">Moga</option>
              <option value="297">Mohali</option>
              <option value="508">Moradabad</option>
              <option value="960">Morbi</option>
              <option value="429">Morena</option>
              <option value="238">Motijheel</option>
              <option value="834">MPUMALANGA - Africa</option>
              <option value="666">Mukerian</option>
              <option value="5">Mumbai</option>
              <option value="434">Mundra</option>
              <option value="147">Muradabad</option>
              <option value="276">Muraina</option>
              <option value="239">Muriana</option>
              <option value="418">Mussoorie</option>
              <option value="92">Muzaffar Nagar</option>
              <option value="275">Muzaffarpur</option>
              <option value="103">Mysore</option>
              <option value="432">Naamakkal</option>
              <option value="273">Nadiad </option>
              <option value="583">Nagaland</option>
              <option value="866">Nagapattinam</option>
              <option value="1014">Nagaur</option>
              <option value="164">Nagercoil</option>
              <option value="1097">Nagina</option>
              <option value="30">Nagpur</option>
              <option value="245">Nainital</option>
              <option value="406">Nalagonda</option>
              <option value="282">Nanded</option>
              <option value="944">Nanded-Waghala</option>
              <option value="1000">Nandyal</option>
              <option value="1088">Narmada</option>
              <option value="463">Narnaul</option>
              <option value="636">Nashik</option>
              <option value="66">Nasik</option>
              <option value="32">National</option>
              <option value="812">National - Africa</option>
              <option value="376">Navi Mumbai</option>
              <option value="279">Navsari</option>
              <option value="1080">Nawada</option>
              <option value="1102">Nawanshahr</option>
              <option value="1044">Nayagarh</option>
              <option value="478">Neemuch</option>
              <option value="265">Nellai  </option>
              <option value="148">Nellore</option>
              <option value="506">Netherland</option>
              <option value="6">New Delhi</option>
              <option value="1028">New York</option>
              <option value="814">NIGERIA - Africa</option>
              <option value="410">Nizamabad</option>
              <option value="190">Noida</option>
              <option value="984">North Bengal</option>
              <option value="830">NORTH WEST - Africa</option>
              <option value="836">NORTHERN CAPE - Africa</option>
              <option value="1040">Nuapada</option>
              <option value="530">Nuh</option>
              <option value="309">old Bhubaneswar</option>
              <option value="314">old Trivendrum</option>
              <option value="292">old Vizag</option>
              <option value="592">Ongole</option>
              <option value="496">Ooty</option>
              <option value="512">Osmanabad</option>
              <option value="878">Palakkad</option>
              <option value="246">Palamou</option>
              <option value="700">Palamu</option>
              <option value="305">Palanpur</option>
              <option value="533">Palghar</option>
              <option value="684">Pali</option>
              <option value="455">Palwal</option>
              <option value="391">Panchkula</option>
              <option value="67">Panipat</option>
              <option value="93">Panjim</option>
              <option value="421">Pantnagar</option>
              <option value="932">Panvel</option>
              <option value="1064">Paradeep</option>
              <option value="936">Parbhani</option>
              <option value="274">Patan </option>
              <option value="874">Pathanamthitta</option>
              <option value="658">Pathankot</option>
              <option value="104">Patiala</option>
              <option value="7">Patna</option>
              <option value="515">Pattukkottai</option>
              <option value="692">Peddapalli</option>
              <option value="656">Phagwara</option>
              <option value="444">Philippines</option>
              <option value="510">Pilani</option>
              <option value="598">Pilbhit</option>
              <option value="720">Pilibhit</option>
              <option value="354">Pimpri Chinchwad</option>
              <option value="870">Pithampur</option>
              <option value="726">Pithoragarh</option>
              <option value="546">Pollachi</option>
              <option value="826">POLOKWANE - Africa</option>
              <option value="149">Pondicherry</option>
              <option value="539">Poonamallee</option>
              <option value="674">Poorniya</option>
              <option value="1105">Porbandar</option>
              <option value="543">Port Blair</option>
              <option value="838">PORT ELIZABETH - Africa</option>
              <option value="926">Prayagraj</option>
              <option value="65">Pune</option>
              <option value="980">Pune Gramin</option>
              <option value="417">Puri</option>
              <option value="350">Purnia</option>
              <option value="1086">Purulia</option>
              <option value="77">Pusa</option>
              <option value="388">Puthukottai</option>
              <option value="730">Raibareilly</option>
              <option value="208">Raiberli</option>
              <option value="231">Raichur</option>
              <option value="435">Raigad</option>
              <option value="1075">Raiganj</option>
              <option value="624">Raigarh</option>
              <option value="928">Raikheda</option>
              <option value="68">Raipur</option>
              <option value="150">Rajahmundry</option>
              <option value="151">Rajasthan</option>
              <option value="73">Rajkot</option>
              <option value="1087">Rajpipla</option>
              <option value="1084">Rajpura</option>
              <option value="353">Rajsamand</option>
              <option value="888">Ramanagara</option>
              <option value="195">Rampur</option>
              <option value="41">Ranchi</option>
              <option value="922">Ranga Reddy</option>
              <option value="471">Ranibennur</option>
              <option value="577">Raniganj</option>
              <option value="241">Ratlam</option>
              <option value="373">Ratnagiri</option>
              <option value="542">Raxaul</option>
              <option value="632">Rayagada</option>
              <option value="277">Rewa</option>
              <option value="311">Rewari</option>
              <option value="470">Rishikesh</option>
              <option value="35">Rohtak</option>
              <option value="361">Roorkee</option>
              <option value="680">Ropar</option>
              <option value="255">Rourkela</option>
              <option value="392">Rudrapur</option>
              <option value="1103">Rupnagar</option>
              <option value="375">Saangli</option>
              <option value="430">Sagar</option>
              <option value="198">Saharanpur</option>
              <option value="553">Sahibabad</option>
              <option value="1002">Salboni</option>
              <option value="152">Salem</option>
              <option value="248">Sambalpur      </option>
              <option value="469">Sambhal</option>
              <option value="664">Samrala</option>
              <option value="490">Sanand</option>
              <option value="491">Sangli</option>
              <option value="946">Sangli-Miraj-Kupwad </option>
              <option value="439">Sangrur</option>
              <option value="910">Sant Kabir Nagar</option>
              <option value="63">Saraikela</option>
              <option value="414">Sasni</option>
              <option value="374">Satara</option>
              <option value="175">Satna</option>
              <option value="517">Saurashtra</option>
              <option value="351">Sehore</option>
              <option value="169">Seoul</option>
              <option value="551">Shahada</option>
              <option value="500">Shahdol</option>
              <option value="207">Shahjahanpur </option>
              <option value="302">Shillong</option>
              <option value="251">Shimla</option>
              <option value="456">Shimoga</option>
              <option value="360">Shimoga</option>
              <option value="433">Shirpur</option>
              <option value="642">Shivpuri</option>
              <option value="646">Shuklaganj</option>
              <option value="906">Siddharthnagar </option>
              <option value="407">Siddipet</option>
              <option value="264">Sikar</option>
              <option value="535">Sikkim</option>
              <option value="176">Silchar</option>
              <option value="96">Siliguri</option>
              <option value="522">Silvassa</option>
              <option value="475">Sindanur</option>
              <option value="372">Sindhudurg</option>
              <option value="612">Sindhudurga</option>
              <option value="492">Singanamala</option>
              <option value="313">Singrouli</option>
              <option value="531">Sirmaur</option>
              <option value="341">Sirohi</option>
              <option value="266">Sirsa</option>
              <option value="200">Sitapur</option>
              <option value="396">Sivakasi</option>
              <option value="998">Siwan</option>
              <option value="569">Sohagpur</option>
              <option value="290">Solan</option>
              <option value="165">Solapur</option>
              <option value="716">Sonbhadra</option>
              <option value="1054">Sonepur</option>
              <option value="858">Songoti</option>
              <option value="269">Sonipat</option>
              <option value="271">South Bengal </option>
              <option value="503">Sri Ganganagar</option>
              <option value="1101">Sri Muktsar Sahib</option>
              <option value="166">Sriganganagar</option>
              <option value="367">Srikakulam</option>
              <option value="303">Srinagar</option>
              <option value="704">Sultanpur</option>
              <option value="89">Surat</option>
              <option value="501">Surendranagar</option>
              <option value="1079">Suri</option>
              <option value="590">Suryapeta</option>
              <option value="654">Tadepalligudem</option>
              <option value="262">Tamil Nadu</option>
              <option value="364">Tanjavoor</option>
              <option value="660">Tarn Taran</option>
              <option value="243">Tehri</option>
              <option value="872">Telangana</option>
              <option value="337">TEst</option>
              <option value="338">TEst</option>
              <option value="1050">Tezpur</option>
              <option value="173">Thane</option>
              <option value="538">Thanjavur</option>
              <option value="381">Tharali</option>
              <option value="366">Thirpur</option>
              <option value="1008">Thiruvallur</option>
              <option value="628">Thiruvananthapuram</option>
              <option value="106">Thiruvannamalai</option>
              <option value="1062">Thodupuzha</option>
              <option value="519">Thrissur</option>
              <option value="1065">Tikamgarh</option>
              <option value="958">Tilda</option>
              <option value="882">Tinsukia</option>
              <option value="608">Tiptur</option>
              <option value="286">Tirunelveli</option>
              <option value="155">Tirupati</option>
              <option value="389">Tirupur</option>
              <option value="956">Tiruvallar</option>
              <option value="1069">Tiruvetipuram </option>
              <option value="498">Tonk</option>
              <option value="331">Trade</option>
              <option value="161">Trichur</option>
              <option value="111">Trichy</option>
              <option value="581">Tripura</option>
              <option value="154">Trivandrum</option>
              <option value="359">Tumkur</option>
              <option value="401">Tuticorin</option>
              <option value="445">UAE</option>
              <option value="75">Udaipur</option>
              <option value="728">Udhampur</option>
              <option value="232">Udupi</option>
              <option value="268">Ujjain</option>
              <option value="403">Umbergaon</option>
              <option value="1077">Una</option>
              <option value="710">Unnao</option>
              <option value="856">Upakula </option>
              <option value="964">Upleta</option>
              <option value="904">Uran </option>
              <option value="332">USA</option>
              <option value="324">USA Test</option>
              <option value="563">Uttara Kannada</option>
              <option value="156">Uttaranchal</option>
              <option value="72">Vadodara</option>
              <option value="452">Vaishali</option>
              <option value="278">Valsad</option>
              <option value="900">Vanur</option>
              <option value="293">Vapi</option>
              <option value="36">Varanasi</option>
              <option value="400">Vasai </option>
              <option value="948">Vasai-Virar</option>
              <option value="532">Vashi</option>
              <option value="157">Vellore</option>
              <option value="606">Vidarbha</option>
              <option value="298">Vidisha</option>
              <option value="1048">Vijayapura</option>
              <option value="158">Vijayawada</option>
              <option value="1081">Vikarabad</option>
              <option value="390">Villupuram</option>
              <option value="88">Visakhapatnam</option>
              <option value="924">Vizianagaram</option>
              <option value="398">Warangal</option>
              <option value="968">Wardha</option>
              <option value="160">Washim</option>
              <option value="399">Wayanad</option>
              <option value="820">WESTERN CAPE - Africa</option>
              <option value="694">Yadadri</option>
              <option value="497">Yadgir</option>
              <option value="347">Yamuna Nagar</option>
              <option value="159">Yavatmal</option>
              <option value="930">Zalawad</option>
            </select>

          </div>

          <div className='col-3'>

            <select className='form-select'>
              <option>Publication</option>
            </select>
          </div>
          <div className='col-3'>

            <select className='form-select'>
              <option>Jounalist</option>
            </select>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary'>Search</button>
          </div>
        </div>

        <div className='row article-list'>
        <BootstrapTable
    keyField="id"
    data={ articleList }
    columns={ columns }
    cellEdit={ cellEditFactory({
      mode: 'click',
      beforeSaveCell
    }) }
    filter={ filterFactory() }
  filterPosition="top"
    pagination={ paginationFactory() }
    selectRow={ selectRow }
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
      </div>
    </>
  )
}
export default Articlelist

