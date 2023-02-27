import React from "react";
function EntityColorCode(){

    return(
        <>
		
        <div class="page-title"><h1>Entity Color Code</h1></div>
		
        <div className='content-box'>
			<div className="row ecode-form">
			<div className="col-4">
				<input type="text" placeholder="Client"/>
			</div>
			<div className="col-4">
				<input type="text" placeholder="Entity"/>
			</div>
			<div className="col-4">
				<input type="text" placeholder="Color Code"/>
			</div>
			<div className="col-12 mt-20">
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
		</div>
			<div className="table-container mt-20">
				<table className="table table-bordered article-list-table">
					<thead>
						<tr>
							<th >Article ID
								
							</th>
							<th >Client Name							
							</th>
							<th >Entity Name
							</th>
							<th >
								Color Picker
							</th>
							<th>
								<span>Action</span>
							</th>
							
						</tr>
					</thead>
					<tbody>
						<tr className="search-filter">
							<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					
				/>
			</div></td>
			<td><b>Edit/Delete</b></td>
			
						</tr>
						
						
						</tbody>
				</table>
			</div>
      </div>
      </>
	);
}
export default EntityColorCode;