import React, { useState, useEffect, useRef } from "react";
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import AsyncSelect from 'react-select/async';

export default function FormThree({ clientId, articleId, setKey }) {

  let selectRef = useRef();
  const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    inputValue = inputValue || 'a'
    get("journalist/name/" + inputValue).then((response) => {
      resolve(response.data.journalist.map((e) => ({
        value: `${e.id}-${e.journalist_name}`,
        label: e.journalist_name
      })));
    })

  });
  const [spokepersonList, setSpokepersonList] = useState([]);
  const getSpokepersonList = () => {
    get("dataprocess/get-spokespersonslist/").then((response) => {
      setSpokepersonList(response.data.spokespersonslist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  const [journalists, setJournalists] = useState([{
    journalistId : "",
    journalistName : "",
    type: "",
    details: ""
  }])

  const addMoreJournalist = () =>{
    const newJourn = [...journalists];
    newJourn.push({
      journalistId : "",
      journalistName : "",
      type: "",
      details: ""
    })
    setJournalists(newJourn);
  }

  const [productList, setProductList] = useState([]);
  const getProductList = () => {
    get("dataprocess/get-productslist/").then((response) => {
      setProductList(response.data.Productlist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  useEffect(() => {
    getSpokepersonList();
    // getJournalistList();
    getProductList();
  }, []);

  const setJournalist = (e, index) => {
    console.log('e, index', e, index)
    // const data = e.target.value.split('-');
    // const newJourn = [...journalists];
    // newJourn[index] = {
    //   ...newJourn[index],
    //   journalistId : data[0],
    //   journalistName : data[1]
    // }
    // setJournalists(newJourn);
  }

  const spokeProfiles = ["Interview", "Author", "Company", "Industry", "Mention"];

  const [spokespersons, setSpokesperson] = useState([{
    spokepersonId : "",
    spokepersonName : "",
    profiling: "",
    details: ""
  }])

  const addMoreSpokeperson = () =>{
    const newSpoke = [...spokespersons];
    newSpoke.push({
      spokepersonId : "",
      spokepersonName : "",
      profiling: "",
      details: ""
    })
    setSpokesperson(newSpoke);
  }

  

  const setSpokesData = (e, index) => {
    const data = e.target.value.split('-');
    const newSpoke = [...spokespersons];
    newSpoke[index] = {
      ...newSpoke[index],
      spokepersonId : data[0],
      spokepersonName : data[1]
    }
    setSpokesperson(newSpoke);
  }


  const [products, setProducts] = useState([{
    productId : "",
    productName : "",
    category: "",
    categoryId: ""
  }])

  const addMoreProduct = () =>{
    const newProduct = [...products];
    newProduct.push({
      productId : "",
      productName : "",
      category: "",
      categoryId: ""
    })
    setProducts(newProduct);
  }

  

  const setProductData = (e, index) => {
    const data = e.target.value.split('-');
    const newProduct = [...products];
    newProduct[index] = {
      ...newProduct[index],
      productId : data[0],
      productName : data[1]
    }
    setProducts(newProduct);
  }

  return (
    <>
      <div className='row form-details analysis-options'>
        <div className="col-12 text-center"><h3>1. Journalist Analysis {journalists.length}</h3></div>
       <div>
        {journalists?.map((j, index) =>  

        <div key={index} className='row form-details'> 
        {/* <div className="col-12"> */}
        <div className='col-6'>
        <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} isClearable={true} ref={(ref) => {
                    selectRef = ref;
                  }} onChange={e => setJournalist(e, index)} />
          {/* <select className='form-select' onChange={(e) => setJournalist(e, index)}>
            <option value={""}>
              Journalist Name 
            </option>
           
            {journalistList?.map((t, index) =>
              <option value={`${t.id}-${t.keyword}`}> {t.keyword}</option>
            )}
          </select> */}

        </div>

        {/* <div className='col-6'>

          <select className='form-select'>
            <option>
              Type
            </option>
            <option> Agency</option>
            <option> Bureau</option>
          </select>

        </div> */}
        <div className='col-12 mt-10 textarea'>
          <span className="radio-title">Personal Details: if any</span>
          <textarea className="form-control" 
          onChange={(e) => {
            const newJourn = [...journalists];
            newJourn[index] = {
              ...newJourn[index],
              details : e.target.value,
            }
            setJournalists(newJourn);
          }} >

          </textarea>
        </div> 
        </div>
        // </div>
        )}
        </div>
        <div className="col-12 text-right mt-10">
          <button className='btn btn-primary btn-medium' onClick={(e) => addMoreJournalist()}>+ Add More</button>
        </div>
        <div className="col-12 text-center mt-20"><h3>2. Spokesperson analysis</h3></div>

        {spokespersons?.map((j, index) =>  

<div key={index} className='row form-details'> 
        <div className='col-6 mt-20'>
          <select className='form-select' onChange={e => setSpokesData(e)}>
            <option value={""}>
              Name
            </option>
            {spokepersonList?.map((t, index) =>
              <option value={`${t.id}-${t.spokesperson_name}`}> {t.spokesperson_name}</option>
            )}
          </select>

        </div>
        <div className='col-6 mt-20'>
          <select className='form-select' disabled>
            <option>
              Designation
            </option>
          </select>

        </div>
        <div className='col-6 mt-20'>
          <select className='form-select' disabled>
            <option>
              Profiling
            </option>
          </select>

        </div>
        <div className='col-6 mt-20'>
          <select className='form-select'>
            <option>
              Visibility
            </option>
            <option> Photo</option>
            <option> Headline</option>
            <option> Company</option>
            <option> Industry</option>
            <option> Mention </option>
          </select>

        </div>
        <div class="col-6 radio-group"><span class="radio-title">Comments on</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">CFPs</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">Experts</label></span></div>
        </div>
        )}
        <div className="col-12 text-right mt-10">
          <button className='btn btn-primary btn-medium' onClick={e => addMoreSpokeperson()}>+ Add More</button>
        </div>

        <div className="col-12 text-center mt-20"><h3 >3. Product Analysis</h3></div>
        {products?.map((j, index) =>  

<div key={index} className='row form-details'> 
        <div className='col-6 mt-20'>
          <select className='form-select' onChange={e=> setProductData(e)}>
            <option value={""}>
              Name
            </option>
            {productList?.map((t, index) =>
              <option value={`${t.id}-${t.product_name}`}> {t.product_name}</option>
            )}
          </select>

        </div>
        <div className='col-6 mt-20'>
          <select className='form-select'>
            <option>
              Category
            </option>
          </select>

        </div>
        </div>
        )}
        <div className="col-12 text-right mt-10">
          <button className='btn btn-primary btn-medium' onClick={ e => addMoreProduct()}>+ Add More</button>
        </div>
        <div className="col-12 text-center mt-20"><h3 >4. Visibility Analysis</h3></div>

        <div class="col-6 radio-group"><span class="radio-title">Headline</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
        <div class="col-6 radio-group"><span class="radio-title">Photo</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
        <div class="col-6 radio-group"><span class="radio-title">Visibility Analysis</span><br></br><span class="radio-btn mt-10"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Hit / Miss</label></span><span class="radio-btn mt-10"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">Push / Pull</label></span></div>
        <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Key Message'></input></div>

        <div className="col-12 text-right mt-10">
          <button className='btn btn-primary btn-medium'>Submit</button>
          <button className='btn btn-gray btn-medium' onClick={e => setKey('tab-2')}>Previous</button>
        </div>

      </div>

    </>
  )
}

// export default FormThree