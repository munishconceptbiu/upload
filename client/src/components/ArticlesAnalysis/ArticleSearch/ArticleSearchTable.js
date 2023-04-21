import React from "react";
import {Container, Row, Tabs, Tab, Pagination} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditPopup from "../EditPopup";
import useTable from 'react-data-table-component'
function ArticleSearchTable(){
    
    return(
        <>
        

        <Container className='article-search-tab'>
            <div className="row table-options">
                <div className="col-md-12">
                <button className="btn btn-primary">Tag</button>
                <button className="btn btn-primary">Export</button>
                <button className="btn btn-primary">Mark as</button>
                </div>
            </div>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="Pending(120)">
            <div className="article-search-table">
            <table className="table ">
            <thead>
                <th>Article ID</th>
                <th>Headline</th>
                <th>Entity</th>
                <th>Edition</th>
                <th>Media Type</th>
                <th>Publication</th>
                <th>Published Date</th>
                <th>Tonality</th>
                <th>Language</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                <td>0123</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>Periodical</td>
                <td>Financial Chronicle</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><EditPopup/><a href="#"><DeleteIcon/></a></td>
                </tr>
                <tr>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>ABC</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
            </tbody>
           </table>
           <div className="row">
     
     <ul class="pagination">
 <li class="page-item"><a class="page-link" href="#">Previous</a></li>
 <li class="page-item"><a class="page-link" href="#">1</a></li>
 <li class="page-item active"><a class="page-link" href="#">2</a></li>
 <li class="page-item"><a class="page-link" href="#">3</a></li>
 <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
   
     </div>
           </div>
          </Tab>
          <Tab eventKey="tab-2" title="On Process(60)">
          <div className="article-search-table">
           <table className="table ">
            <thead>
                <th>Article ID</th>
                <th>Headline</th>
                <th>Entity</th>
                <th>Edition</th>
                <th>Media Type</th>
                <th>Publication</th>
                <th>Published Date</th>
                <th>Tonality</th>
                <th>Language</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                <td>0123</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>Periodical</td>
                <td>Financial Chronicle</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
                <tr>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>ABC</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
            </tbody>
           </table>
           <div className="row">
     
     <ul class="pagination">
 <li class="page-item"><a class="page-link" href="#">Previous</a></li>
 <li class="page-item"><a class="page-link" href="#">1</a></li>
 <li class="page-item active"><a class="page-link" href="#">2</a></li>
 <li class="page-item"><a class="page-link" href="#">3</a></li>
 <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
   
     </div>
           </div>
          </Tab>
          <Tab eventKey="tab-3" title="QC(60)">
          <div className="article-search-table">
           <table className="table ">
            <thead>
                <th>Article ID</th>
                <th>Headline</th>
                <th>Entity</th>
                <th>Edition</th>
                <th>Media Type</th>
                <th>Publication</th>
                <th>Published Date</th>
                <th>Tonality</th>
                <th>Language</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>ABC</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
                <tr>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>ABC</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
            </tbody>
           </table>
           </div>
          </Tab>
          <Tab eventKey="tab-4" title="NA(40)">
          <div className="article-search-table">
           <table className="table ">
            <thead>
                <th>Article ID</th>
                <th>Headline</th>
                <th>Entity</th>
                <th>Edition</th>
                <th>Media Type</th>
                <th>Publication</th>
                <th>Published Date</th>
                <th>Tonality</th>
                <th>Language</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>ABC</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
                <tr>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>ABC</td>
                <td>7 Feb 2023</td>
                <td>Tonality</td>
                <td>Marathi</td>
                <td><a href="#"><EditPopup/></a><a href="#"><DeleteIcon/></a></td>
                </tr>
            </tbody>
           </table>
           <div className="row">
     
     <ul class="pagination">
 <li class="page-item"><a class="page-link" href="#">Previous</a></li>
 <li class="page-item"><a class="page-link" href="#">1</a></li>
 <li class="page-item active"><a class="page-link" href="#">2</a></li>
 <li class="page-item"><a class="page-link" href="#">3</a></li>
 <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
   
     </div>
           </div>
           
          </Tab>
        </Tabs>

 
    </Container>

        </>
    )
    
}
export default ArticleSearchTable