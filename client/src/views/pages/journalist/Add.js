import React from 'react';

export default function Add({ setJournalistContact, setJournalistEmail, setJournalistName, setPublicationId,  saveJournalist,  journalist_name, journalist_email, journalist_contact, media_type, setMediaType, publication_id }) {
  return (
    <>
      <div class='page-title d-flex justify-content-between'>
        <h1>Add/Edit Journalist</h1>
      </div>
      <div className='content-box edit-pubication'>
        <div className='row'>
        <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Journalist Name'
              value={journalist_name} onChange={e => setJournalistName(e.target.value)}
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Email ID'
              value={journalist_email} onChange={e => setJournalistEmail(e.target.value)}
            />
          </div>
          
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Contact'
              value={journalist_contact} onChange={e => setJournalistContact(e.target.value)}
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Publication'
              value={publication_id} onChange={e => setPublicationId(e.target.value)}
            />
          </div>
          <div className='col-3'>
          <select className="form-control" value={media_type} placeholder="Media Type" onChange={e => setMediaType(e.target.value)} >
                        <option value="">Media Type</option>
                        <option value="Print">Print</option>
                        <option value="Online">Online</option>
                    </select>
          </div>
          {/* <div className='col-3'>
            <input className='form-control' type='text' placeholder='Medium' />
          </div>
          <div className='col-3'>
            <input className='form-control' type='text' placeholder='Reach' />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Education'
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Designation'
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Primary Beat'
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Publications'
            />
          </div>
          <div className='col-12 mt-10'>
            <input
              className='form-control'
              type='text'
              placeholder='Article Archieve'
            />
          </div> */}
        </div>
        {/* <div className='row ep-info'>
          <div className='col-6 '>
            <h6>Additional Info : </h6>
            <input
              className='form-control'
              type='text'
              placeholder='Text Here'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Text Here'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Text Here'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Text Here'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Text Here'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Text Here'
            />
          </div>
          <div className='col-6'>
            <h6>Social Media Feed : </h6>
            <input
              className='form-control'
              type='text'
              placeholder='Facebook'
            />
            <input className='form-control' type='text' placeholder='Twitter' />
            <input className='form-control' type='text' placeholder='Youtube' />
            <input
              className='form-control'
              type='text'
              placeholder='Linkedin'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Google Plus'
            />
            <input
              className='form-control'
              type='text'
              placeholder='Instagram'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <input className='form-control' type='text' placeholder='Name' />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Publication Name'
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='From Date'
            />
          </div>
          <div className='col-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Till Date'
            />
          </div>
        </div> */}
        <div className='row mt-20'>
          <div className='col-12'>
            <button class='btn btn-gray' >Reset</button>
            <button class='btn btn-primary' onClick={() => saveJournalist()}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
