import React, { useEffect, useState } from "react";
import useTable from 'react-data-table-component'
import data from './data.json'
import { HandIcon } from "../Icons/icons.component";

function SortTable (){
  const [data, setdata] = useState (data)
  const [order, setorder] = useState("ASC");
     const sorting = (col) =>{
       if(order === "ASC"){
         const sorted = [...data].sort((a,b)=>
        {console.log(a,b);
          return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1}
         );
         setdata(sorted);
         setorder("DSC");
       }
       if (order === "DSC"){
         const sorted = [...data].sort((a,b)=>
         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
         );
         setdata(sorted);
         setorder("ASC");
       }
     };


    const [user, setUser] = useState([]);


    const fetchData = () => {
      return fetch("./data.json")
            .then((response) => response.json())
            .then((data) => setUser(data));

    }
  
    useEffect(() => {
      fetchData();
    },[])

    
    return(
   <>

      <div className="article-list-table">
      <table className="table table-bordered">
        <thead>
          <tr>
           <th >Article ID</th>
           <th onClick={()=>sorting("first_name")}>Company Name</th>
           <th onClick={()=>sorting("last_name")}>Publish Date</th>
           <th onClick={()=>sorting("last_name")}>Publication</th>
           <th onClick={()=>sorting("last_name")}>Suppliment</th>
           <th onClick={()=>sorting("last_name")}>Edition</th>
           <th>Media Type</th>
           <th>Language</th>
           <th>Headline</th>
           <th>Link</th>
           <th>Publication Type</th>
           <th>Jourlist</th>
           <th>Page No</th>
           <th>CCM</th>
           <th>MAV</th>
           <th>Circulation</th>
           <th>Zone</th>
           <th>Word Count</th>
           <th>WC Wtg</th>
           <th>MONTHLY VIS</th>
           <th>Daily Vis/Cir</th>
           <th>Priority</th>
           <th>Priority WTg</th>
           <th>Push/Pull</th>
           <th>Theme</th>
           <th>Keyword_Level_1</th>
           <th>Topic</th>
           <th>Article Type</th>
           <th>Shared/Exclusive</th>
           <th>Tolity</th>
           <th>Key Message</th>
           <th>B CCM</th>
           <th>N CCM</th>
           <th>A CCM</th>
           <th>Totat CCM</th>
           <th>Photo Weightage</th>
           <th>Headline Weightage</th>
           <th>Sh/Ex Weightage</th>
           <th>Co Score</th>
           <th>Visibility</th>
           <th>Index</th>
           <th>Spokesperson 1</th>
           <th>Spokesperson 1 Summary</th>
           <th>Spokesperson 2</th>
           <th>Spokesperson 2 Summary</th>
           <th>Spokesperson 3</th>
           <th>Spokesperson 3 Summary</th>
           <th>client_article_values_id</th>
           <th>entity_articles_id</th>
           <th>client_id</th>
           <th>Photo</th>
           <th>Headline</th>
            </tr>
            </thead>
            <tbody>
          <tr className="table-search">
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>
            <td><input type="text" placeholder="Search"/></td>

          </tr>
            {user && user.length > 0 && user.map((userObj, index) => (
                <tr>
                    <td key={userObj.id}>{userObj.id}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.name}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.email}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                    <td key={userObj.id}>{userObj.username}</td>
                   
                </tr>
       
          ))}
          </tbody>
      </table>
      
     </div>
     <div className="article-pagination">
     <ul class="pagination ">
     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
     <li class="page-item"><a class="page-link" href="#">1</a></li>
     <li class="page-item"><a class="page-link" href="#">2</a></li>
     <li class="page-item"><a class="page-link" href="#">3</a></li>
     <li class="page-item"><a class="page-link" href="#">Next</a></li>
   </ul>
   </div>
   </>
    )
}
export default SortTable;

// import React, { useEffect, useState } from "react";
//  import { setDefaultLocale } from "react-datepicker";
// import MockData from './MOCK_DATA.json'
// export default function DataList(){

//   const [data, setdata] = useState([MockData])
//   const [order, setorder] = useState("ASC");
//   const sorting = (col) =>{
//     if(order === "ASC"){
//       const sorted = [...data].sort((a,b)=>
//       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
//       );
//       setdata(sorted);
//       setorder("DSC");
//     }
//     if (order === "DSC"){
//       const sorted = [...data].sort((a,b)=>
//       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
//       );
//       setdata(sorted);
//       setorder("ASC");
//     }
//   };

//   return(
//     <div className="article-list-table">
//       <table className="table table-bordered">
//         <thead>
//           <th onClick={()=>sorting("first_name")}>Article ID</th>
//           <th onClick={()=>sorting("last_name")}>Company Name</th>
//           <th onClick={()=>sorting("email")}>Publish Date</th>
//           <th onClick={()=>sorting("gender")}>Publication</th>
//           <th>Suppliment</th>
//           <th>Edition</th>
//           <th>Media Type</th>
//           <th>Language</th>
//           <th>Headline</th>
//           <th>Link</th>
//           <th>Publication Type</th>
//           <th>Jourlist</th>
//           <th>Page No</th>
//           <th>CCM</th>
//           <th>MAV</th>
//           <th>Circulation</th>
//           <th>Zone</th>
//           <th>Word Count</th>
//           <th>WC Wtg</th>
//           <th>MONTHLY VIS</th>
//           <th>Daily Vis/Cir</th>
//           <th>Priority</th>
//           <th>Priority WTg</th>
//           <th>Push/Pull</th>
//           <th>Theme</th>
//           <th>Keyword_Level_1</th>
//           <th>Topic</th>
//           <th>Article Type</th>
//           <th>Shared/Exclusive</th>
//           <th>Tolity</th>
//           <th>Key Message</th>
//           <th>B CCM</th>
//           <th>N CCM</th>
//           <th>A CCM</th>
//           <th>Totat CCM</th>
//           <th>Photo Weightage</th>
//           <th>Headline Weightage</th>
//           <th>Sh/Ex Weightage</th>
//           <th>Co Score</th>
//           <th>Visibility</th>
//           <th>Index</th>
//           <th>Spokesperson 1</th>
//           <th>Spokesperson 1 Summary</th>
//           <th>Spokesperson 2</th>
//           <th>Spokesperson 2 Summary</th>
//           <th>Spokesperson 3</th>
//           <th>Spokesperson 3 Summary</th>
//           <th>client_article_values_id</th>
//           <th>entity_articles_id</th>
//           <th>client_id</th>
//           <th>Photo</th>
//           <th>Headline</th>
//         </thead>
//         <tbody>
//         <tr>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//             <td><input type="text" placeholder="Search"/></td>
//           </tr>
//           { data.map((d)=>(
//             <tr key={d.id}>
//                 <td>{d.first_name}</td>
//                 <td>{d.last_name}</td>
//                 <td>{d.email}</td>
//                 <td>{d.gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }