import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { FcLikePlaceholder } from "react-icons/fc";

const Home = () => {

  const [blog, setBlog] = useState([])

  const history = useHistory()

  const getBlog = () => {
    axios.get('http://localhost:3001/blog/find')
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getBlog()
  }, [])

  const card = (id) => {
    console.log(id);
    localStorage.setItem('blogid',id)
    history.push('/blog')
  }


  return (
    <div>

    {/* Main IMG */}
      <div className="container-fluid mb-5 p-0">
        <div className="container-fluid mt-3 mb-5 position-relative d-block">
          <div className="row align-items-center">
            <div className="p-0 img">
              <img width="100%" height="750px" src="https://st2.depositphotos.com/4107269/9004/i/450/depositphotos_90042754-stock-photo-top-view-of-trendy-white.jpg" alt="" style={{objectFit:'cover'}} />
            </div>
          </div>
        </div>

        <div className="container-fluid pos-ab">
          <div className="row align-items-center">
            <div className="p-0">
              <h1 className='fs-60 fs-sm-6' style={{marginTop:'220px'}}>DESIGN <span className='fs-2 fs-sm-6 for'>FOR</span> LIFE</h1>              
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-lite text-dark'>
        <div className="container">
          <div className="row d-flex py-5 g-4 ">
            {
              blog.map((el, index) => {
                return <div className="d-flex box-75 bor-box p-0  box"    key={index} >
                  <div className="col-5 p-0">
                    <div className="img-box">
                      <img className='w-100'onClick={() => card(el._id)}  src={'http://localhost:3001/images/' + el.image} alt="" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className='ms-5 mt-4'>
                      <h3 className='fw-bold'>{el.title}</h3>
                      <p>{el.description}</p>
                      <div>
                        <a href="" onClick={() => card(el._id)}  className="text-dark details fw-bold">Read More..!</a>
                      </div>
                    </div>
                    <div className='d-flex bor-top mt-4 ms-5 justify-content-between align-items-center'>
                      <div>
                        <ul className=' ps-0 d-flex'>
                          <li className='p-2'>views</li>
                          <li className='p-2'>comments</li>
                        </ul>
                      </div>
                      <div className='p-2 me-5'>
                        <p><FcLikePlaceholder /> like</p>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>


    </div>


  )
}

export default Home