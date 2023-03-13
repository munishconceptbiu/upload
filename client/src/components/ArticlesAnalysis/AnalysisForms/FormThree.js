import React, { useState, useEffect, useRef } from "react";
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import AsyncSelect from 'react-select/async';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function FormThree({ clientId, articleId, setKey, articleList, simallerArticleCount, checkArticleList, setStepTwoData, setStepOneData, stepTwoData, stepOneData }) {

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
    journalistId: "",
    journalistName: "",
    type: "",
    details: ""
  }])

  const addMoreJournalist = () => {
    const newJourn = [...journalists];
    newJourn.push({
      journalistId: "",
      journalistName: "",
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
    const data = e.value.split('-');
    const newJourn = [...journalists];
    newJourn[index] = {
      ...newJourn[index],
      journalistId : data[0],
      journalistName : data[1]
    }
    setJournalists(newJourn);
  }

  const spokeProfiles = ["Interview", "Author", "Company", "Industry", "Mention"];

  const [spokespersons, setSpokesperson] = useState([{
    spokepersonId: "",
    spokepersonName: "",
    profiling: "",
    details: ""
  }])

  const addMoreSpokeperson = () => {
    const newSpoke = [...spokespersons];
    newSpoke.push({
      spokepersonId: "",
      spokepersonName: "",
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
      spokepersonId: data[0],
      spokepersonName: data[1]
    }
    console.log('newSpoke', newSpoke)
    setSpokesperson(newSpoke);
  }


  const [products, setProducts] = useState([{
    productId: "",
    productName: "",
    category: "",
    categoryId: ""
  }])

  const addMoreProduct = () => {
    const newProduct = [...products];
    newProduct.push({
      productId: "",
      productName: "",
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
      productId: data[0],
      productName: data[1]
    }
    setProducts(newProduct);
  }

  const [headlineMention, setHeadlinMention] = useState(false);
  const [photoMention, setPhotoMention] = useState(false)
  const [hitMiss, setHitMiss] = useState(false)
  const [keyMessage, setKeyMessage] = useState();



  const saveCall = (articleData) => {
    console.log('stepTwoData', stepTwoData)
    console.log('stepOneData', stepOneData)
    const formData = {};
    formData.data = {
      ...stepTwoData,
      ...stepOneData,
      "photo_mention": photoMention,
      "headline_mention": headlineMention,
      "hit_miss": hitMiss === true ? true : false,
      "push_pull": hitMiss === false ? true : false,
      "key_message": keyMessage,
      "quality_check": 1
    }
    formData.journalist = journalists;
    formData.spokeperson = spokespersons;
    formData.products = products
    formData.articles = articleData;
    const uploadPromise = new Promise((resolve, reject) => {

      put(`qaarticle/finalstep/add`, formData).then((response) => {
        resolve("Article Successfully Updated");
        setKey('tab-3')

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

      });
  }
  const saveYes = () => {
    const data = articleList.map(e => ({ 'id': e.id }));
    saveCall(data)
  }

  const saveNo = () => {
    const data = articleList.filter(e => e.id === parseInt(articleId)).map(e => ({ 'id': e.id }))
    saveCall(data)
  }

  const saveNext = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            {checkArticleList.length === 0 && 
            <p>There are {simallerArticleCount} similar articles found do you want to apply same change </p>
            }
            {checkArticleList.length !== 0 && 
            <p>are sure to apply same values to selected articles </p> }
            <button onClick={() => {
              saveNo()
              onClose()
            }}>No</button>
            <button
              onClick={() => {
                saveYes()
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      }
    });
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
                    console.log('newJourn', newJourn)
                    newJourn[index] = {
                      ...newJourn[index],
                      details: e.target.value,
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
              <select className='form-select' onChange={e => setSpokesData(e, index)}>
                <option value={""}>
                  Name
                </option>
                {spokepersonList?.map((t, index) =>
                  <option value={`${t.id}-${t.spokesperson_name}`}> {t.spokesperson_name}</option>
                )}
              </select>

            </div>
            {/* <div className='col-6 mt-20'>
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

            </div> */}
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
              <select className='form-select' onChange={e => setProductData(e, index)}>
                <option value={""}>
                  Name
                </option>
                {productList?.map((t, index) =>
                  <option value={`${t.id}-${t.product_name}`}> {t.product_name}</option>
                )}
              </select>

            </div>
            {/* <div className='col-6 mt-20'>
              <select className='form-select'>
                <option>
                  Category
                </option>
              </select>

            </div> */}
          </div>
        )}
        <div className="col-12 text-right mt-10">
          <button className='btn btn-primary btn-medium' onClick={e => addMoreProduct()}>+ Add More</button>
        </div>
        <div className="col-12 text-center mt-20"><h3 >4. Visibility Analysis</h3></div>

        <div class="col-6 radio-group">
          <span class="radio-title">Headline</span>
          <span class="radio-btn">
            <input type="radio" id="headlineMention1" name="headlineMention"  checked={headlineMention === true ? true : false} value="true" onChange={e => setHeadlinMention(true)}></input>
            <label for="age1">Yes</label>
          </span>
          <span class="radio-btn"><input type="radio" id="headlineMention2" name="headlineMention"  checked={headlineMention === false ? true : false} value="false" onChange={e => setHeadlinMention(false)}></input>
            <label for="age2">No</label>
          </span>
        </div>
        <div class="col-6 radio-group">
          <span class="radio-title">Photo</span>
          <span class="radio-btn">
            <input type="radio" id="photoMention1" name="photoMention"  checked={photoMention === true ? true : false} value="true" onChange={e => setPhotoMention(true)}></input>
            <label for="age1">Yes</label>
          </span><span class="radio-btn">
            <input type="radio" id="photoMention2" name="photoMention" checked={photoMention === false ? true : false} value="true" onChange={e => setPhotoMention(false)}></input>
            <label for="age2">No</label>
          </span>
        </div>
        <div class="col-6 radio-group">
          <span class="radio-title">Visibility Analysis</span>
          <br></br><span class="radio-btn mt-10">
            <input type="radio" id="hitMiss1" name="hitMiss" checked={hitMiss === true ? true : false} value="true" onChange={e => setHitMiss(true)}></input>
            <label for="age1">Hit / Miss</label>
          </span>
          <span class="radio-btn mt-10">
            <input type="radio" id="hitMiss2" name="hitMiss"  checked={hitMiss === false ? true : false} value="false" onChange={e => setHitMiss(false)}></input>
            <label for="age2">Push / Pull</label>
          </span>
        </div>
        <div className='col-6 mt-20'>
          <input type="text" className='qa-input' onChange={(e) => setKeyMessage(e.target.value)} placeholder='Key Message'></input>
        </div>

        <div className="col-12 text-right mt-10">
          <button className='btn btn-primary btn-medium' onClick={() => saveNext()}>Submit</button>
          <button className='btn btn-gray btn-medium' onClick={e => setKey('tab-2')}>Previous</button>
        </div>

      </div>

    </>
  )
}

// export default FormThree