import React from 'react'
import { HandIcon } from '../../../Icons/icons.component'
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../components/main.css'
import ReactDatePicker from 'react-datepicker';

function Articlelist(){
    return(
        <>
        <div className="page-title">
          <h1 >
            Article List
          </h1>
        </div>
          <div className='uqr-contents'>
            <div className='row article-list-form'>
            <div className='col-3'><span className='aldatepicker'><input type='text' className=' react-datepicker-ignore-onclickoutside' placeholder='Date Range'/><CalendarIcon/> </span> </div>
                <div className='col-3'>
                
                <select name="clients"  class=" form-select">
                                        <option value="">Select Client</option>
                                                                                    <option value="7685">Adani Group(Cement)</option>
                                                                                    <option value="4445">Adani Transmission Ltd</option>
                                                                                    <option value="6482">Aditya Birla Management Corporation Private Limited</option>
                                                                                    <option value="5862">AirAsia India</option>
                                                                                    <option value="7278">All Ministries</option>
                                                                                    <option value="7935">AMNS India</option>
                                                                                    <option value="4684">AP Moller MAERSK Group</option>
                                                                                    <option value="1333">Apollo Healthcare</option>
                                                                                    <option value="4698">Apple Inc</option>
                                                                                    <option value="4868">Apraava India</option>
                                                                                    <option value="5135">ASK Group</option>
                                                                                    <option value="3405">Aster DM Healthcare</option>
                                                                                    <option value="7430">Atlassian</option>
                                                                                    <option value="1389">Australian High Commission</option>
                                                                                    <option value="1250">Bajaj Allianz General Insurance</option>
                                                                                    <option value="5090">Bajaj Allianz Life Insurance</option>
                                                                                    <option value="8594">Bajaj Allianz Life Insurance (Test)</option>
                                                                                    <option value="668">Bangalore International Airport Limited</option>
                                                                                    <option value="5621">Bank of India Investment Managers Private Limited</option>
                                                                                    <option value="7688">Bay Capital</option>
                                                                                    <option value="2583">Bharti Infratel</option>
                                                                                    <option value="2362">Bisleri International Pvt. Ltd.</option>
                                                                                    <option value="7832">Boehringer Ingelheim</option>
                                                                                    <option value="2700">Cairn India</option>
                                                                                    <option value="5350">Cargill India</option>
                                                                                    <option value="3376">Chennaiyin FC</option>
                                                                                    <option value="3613">Ciena Corporation</option>
                                                                                    <option value="7950">CIFF- Transport Decarbonisation Programme</option>
                                                                                    <option value="8580">CIL</option>
                                                                                    <option value="8837">CIL TOPSTORY</option>
                                                                                    <option value="6396">Cloudnine Hospitals</option>
                                                                                    <option value="8827">Clover Connect</option>
                                                                                    <option value="3135">Coal India Limited</option>
                                                                                    <option value="8285">Cordelia Cruise</option>
                                                                                    <option value="1922">CRISIL Ltd</option>
                                                                                    <option value="4660">Crop Life India</option>
                                                                                    <option value="4959">Dainik Bhaskar</option>
                                                                                    <option value="8639">Delhi-NCR Open Golf Championship</option>
                                                                                    <option value="4997">Dhanuka Agritech Ltd</option>
                                                                                    <option value="3614">DP World</option>
                                                                                    <option value="8826">DP World India.</option>
                                                                                    <option value="7442">Edelweiss General Insurance</option>
                                                                                    <option value="8983">Elgi Equipments Limited</option>
                                                                                    <option value="5240">Embassy of The United States</option>
                                                                                    <option value="7477">ESPNcricinfo</option>
                                                                                    <option value="4436">Experian India</option>
                                                                                    <option value="5982">Fertilizer Association of India (FAI)</option>
                                                                                    <option value="7765">Fidelity Investments India</option>
                                                                                    <option value="5681">Fidelity Mutual Funds</option>
                                                                                    <option value="524">Ford Foundation</option>
                                                                                    <option value="4191">Fortune</option>
                                                                                    <option value="8421">Future Generali India Insurance Company</option>
                                                                                    <option value="1999">GMR</option>
                                                                                    <option value="967">Godrej &amp; Boyce</option>
                                                                                    <option value="6733">Godrej Appliances</option>
                                                                                    <option value="2719">Godrej Consumer Products Ltd.</option>
                                                                                    <option value="3340">Godrej Interio</option>
                                                                                    <option value="6735">Godrej Locking Solutions &amp; Systems</option>
                                                                                    <option value="3271">Godrej Tyson Foods Ltd</option>
                                                                                    <option value="7424">Government of Uttar Pradesh</option>
                                                                                    <option value="4519">Green Business Certification Inc. (GBCI)</option>
                                                                                    <option value="8940">HEALTHCARE.</option>
                                                                                    <option value="2887">Hermes India</option>
                                                                                    <option value="3486">Hockey India</option>
                                                                                    <option value="6902">Home First Finance Co India Ltd</option>
                                                                                    <option value="713">Honeywell</option>
                                                                                    <option value="4448">Honor</option>
                                                                                    <option value="4697">HP Inc</option>
                                                                                    <option value="247">Hyundai Motors</option>
                                                                                    <option value="105">IBM</option>
                                                                                    <option value="2881">IDC INDIA</option>
                                                                                    <option value="5112">IDFC FIRST Bank Limited</option>
                                                                                    <option value="2889">India Ratings and Research</option>
                                                                                    <option value="6071">India Today TV</option>
                                                                                    <option value="6108">India – Australia News</option>
                                                                                    <option value="3">Indian Hotels Company Ltd</option>
                                                                                    <option value="2218">IRB Infrastructure</option>
                                                                                    <option value="79">ITC Hotels</option>
                                                                                    <option value="7838">ITC Royal Bengal</option>
                                                                                    <option value="2292">Jaguar Land Rover</option>
                                                                                    <option value="8887">Jakson Limited</option>
                                                                                    <option value="7590">Japan International Cooperation Agency</option>
                                                                                    <option value="8598">Jindal Stainless Ltd.</option>
                                                                                    <option value="5110">JSW Group</option>
                                                                                    <option value="2447">Kalyan Jewellers</option>
                                                                                    <option value="7583">Khatabook</option>
                                                                                    <option value="2291">Knight Frank</option>
                                                                                    <option value="3829">kokilaben Dhirubhai Ambani Hospital</option>
                                                                                    <option value="7673">Koo App</option>
                                                                                    <option value="6851">Kotak General Insurance</option>
                                                                                    <option value="7996">Kotak Institutional Equities</option>
                                                                                    <option value="7814">Kotak Investment Advisors</option>
                                                                                    <option value="794">Kotak Life Insurance</option>
                                                                                    <option value="8001">Kotak Mahindra Bank Ltd</option>
                                                                                    <option value="8002">Kotak Mahindra Bank Ltd (Commercial)</option>
                                                                                    <option value="5577">Kotak Mahindra Capital Company Ltd</option>
                                                                                    <option value="8003">Kotak Mahindra Prime Ltd</option>
                                                                                    <option value="5690">Kotak Mutual Fund</option>
                                                                                    <option value="5149">Kotak Private </option>
                                                                                    <option value="1143">Kotak Securities</option>
                                                                                    <option value="2585">KPMG</option>
                                                                                    <option value="8934">Kyndryl</option>
                                                                                    <option value="1181">Lemon Tree</option>
                                                                                    <option value="284">LG Electronics India Pvt Ltd</option>
                                                                                    <option value="4803">Liberty General Insurance</option>
                                                                                    <option value="2150">LIC Housing Finance</option>
                                                                                    <option value="5609">LinkedIn</option>
                                                                                    <option value="8795">Maharashtra Natural Gas Limited</option>
                                                                                    <option value="5358">Manappuram Finance Limited</option>
                                                                                    <option value="8261">MetricStream</option>
                                                                                    <option value="7651">Ministry of AYUSH</option>
                                                                                    <option value="7896">Ministry of Corporate Affairs</option>
                                                                                    <option value="6781">Ministry of Defence </option>
                                                                                    <option value="7262">Ministry of Defence (MoD)</option>
                                                                                    <option value="7254">Ministry of Health and Family Welfare</option>
                                                                                    <option value="7890">Ministry of Heavy Industries and Public Enterprises</option>
                                                                                    <option value="8431">Ministry of Railways (MoR)</option>
                                                                                    <option value="3878">MullenLowe Lintas Group</option>
                                                                                    <option value="2985">NAREDCO</option>
                                                                                    <option value="3797">Netflix</option>
                                                                                    <option value="8469">Niva Bupa</option>
                                                                                    <option value="256">NTPC</option>
                                                                                    <option value="7213">Oasis Fertility</option>
                                                                                    <option value="2049">Oberoi Mall</option>
                                                                                    <option value="6664">Ovum Fertility</option>
                                                                                    <option value="185">Panasonic</option>
                                                                                    <option value="2044">Panasonic Life Solutions</option>
                                                                                    <option value="7624">PG Electroplast Limited</option>
                                                                                    <option value="7940">PharmEasy</option>
                                                                                    <option value="5771">Piramal Realty</option>
                                                                                    <option value="8441">Policy Announcements</option>
                                                                                    <option value="7261">Prime Minister's Office</option>
                                                                                    <option value="1412">Raymond Group</option>
                                                                                    <option value="353">Reliance Industries Ltd.</option>
                                                                                    <option value="2233">Reliance Sports</option>
                                                                                    <option value="5811">Reserve Bank of India</option>
                                                                                    <option value="3024">RMZ Corp</option>
                                                                                    <option value="3054">Roche India</option>
                                                                                    <option value="2340">Roots Corporations Ltd.</option>
                                                                                    <option value="7546">Royal Commission for Al-Ula</option>
                                                                                    <option value="8726">Saifee Burhani Upliftment Trust</option>
                                                                                    <option value="2530">Shapoorji Pallonji</option>
                                                                                    <option value="4946">Shell – Industry and Policy update</option>
                                                                                    <option value="8889">Sids Farm</option>
                                                                                    <option value="8460">Skoda Auto Volkswagen India Private Limited</option>
                                                                                    <option value="2941">South Africa Tourism</option>
                                                                                    <option value="662">SpiceJet</option>
                                                                                    <option value="5800">Star Bharat</option>
                                                                                    <option value="4444">Sterlite Power</option>
                                                                                    <option value="3659">Sterlite Technologies Ltd.</option>
                                                                                    <option value="1035">Suzlon</option>
                                                                                    <option value="2787">Suzlon Group</option>
                                                                                    <option value="3417">Swiggy</option>
                                                                                    <option value="2250">Tata Asset Management</option>
                                                                                    <option value="1132">Tata Capital</option>
                                                                                    <option value="10">Tata Chemicals Ltd.</option>
                                                                                    <option value="9">Tata Consultancy Services</option>
                                                                                    <option value="6">TATA Consumer Products Ltd</option>
                                                                                    <option value="1371">Tata Housing Development Company Ltd.</option>
                                                                                    <option value="49">Tata International</option>
                                                                                    <option value="8">Tata Motors</option>
                                                                                    <option value="6631">Tata Motors(PV)</option>
                                                                                    <option value="5">Tata Power Company Ltd</option>
                                                                                    <option value="2874">Tata Power Delhi Distribution Ltd.</option>
                                                                                    <option value="7271">Tata Power.</option>
                                                                                    <option value="1">Tata Sons</option>
                                                                                    <option value="11">Tata Steel</option>
                                                                                    <option value="4">Tata Teleservices</option>
                                                                                    <option value="3286">Tata Trusts</option>
                                                                                    <option value="5431">TCS iON</option>
                                                                                    <option value="2886">TCS world 10k 2014</option>
                                                                                    <option value="4261">TCS-Digital</option>
                                                                                    <option value="3452">ThyssenKrupp India</option>
                                                                                    <option value="20">Titan Company Ltd.</option>
                                                                                    <option value="251">Toyota</option>
                                                                                    <option value="33">Trent Ltd</option>
                                                                                    <option value="6984">UNICA</option>
                                                                                    <option value="5193">Unilever</option>
                                                                                    <option value="1100">United Breweries Limited</option>
                                                                                    <option value="4004">US Embassy</option>
                                                                                    <option value="5566">UTI Capital</option>
                                                                                    <option value="3206">Valvoline</option>
                                                                                    <option value="7806">Varde Partners</option>
                                                                                    <option value="7705">Vedanta Group</option>
                                                                                    <option value="1995">Volkswagen</option>
                                                                                    <option value="881">Wal Mart</option>
                                                                                    <option value="8392">Webo Test Client 4</option>
                                                                                    <option value="4391">Westside</option>
                                                                            </select>
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
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Headline</th>
        <th>Entity</th>
        <th>Media Type</th>
        <th>Edition</th>
        <th>Publication</th>
        <th>Publish Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Tata Motors Article</td>
        <td>Tata Motors</td>
        <td>Shreyas treble spurs blue star </td>
        <td>Deccan Herald</td>
        <td>Mainline</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Qualitative" className="nav-link" title="Qualitative" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>
      </tr>

      <tr>
        <td>2</td>
        <td>Apollo Healthcare</td>
        <td>amit675</td>
        <td>CM Presented FIH mens hockey world </td>
        <td>Dumani Mail</td>
        <td>Regional</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>

      <tr>
        <td>3</td>
        <td>HDFC Bank</td>
        <td>conceptbiu436</td>
        <td>CM Purchases Hockey</td>
        <td>Free Press</td>
        <td>Financial</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>
      <tr>
        <td>4</td>
        <td>Essar Ports</td>
        <td>barkhadutt456</td>
        <td>Ticket TO WC</td>
        <td>Orissa Post</td>
        <td>Online</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>
      <tr>
        <td>5</td>
        <td>ICICI Bank</td>
        <td>amit675</td>
        <td>Shreyas treble spurs blue star </td>
        <td>Orissa Post</td>
        <td>Periodical</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>


      
      
    </tbody>
  </table>
            </div>
            </div>
        </>
    )
}
export default Articlelist

