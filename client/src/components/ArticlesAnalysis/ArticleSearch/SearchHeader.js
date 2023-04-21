import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "../../../Icons/icons.component";

function SearchHeader(){
    return(
        <>
            <div className="article-search-filter">
                    <div className="row">
                    <div className="col-md-2">
                    <span className='aldatepicker'><input type='text' className=' react-datepicker-ignore-onclickoutside' placeholder='Date Range'/><CalendarIcon/> </span> </div>
                        <div className="col-md-2"><input type="text" className="form-control" placeholder="Select Client"/></div>
                        <div className="col-md-2"><input type="text" className="form-control" placeholder="Select Entity"/></div>
                        <div className="col-md-2"><input type="text" className="form-control" placeholder="Media Type"/></div>
                        <div className="col-md-2"><input type="text" className="form-control" placeholder="Keyword"/></div>
                        <div className="col-md-2"><input type="text" className="form-control" placeholder="Publication"/></div>
                        <div className="col-md-10 article-found mt-10"><a href="#">250 Articles </a>  were found from 10th April 2023 to 11th April 2023</div>
                        <div className="col-md-2 text-right"><button type="submit" className="btn btn-primary">Search</button></div>
                        
                    </div>
                   
                    
            </div>
            
        </>
        
    )
}
export default SearchHeader