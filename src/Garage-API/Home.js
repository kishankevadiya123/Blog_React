import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { RiServiceFill } from "react-icons/ri";



const Home = () => {

  const [service, setService] = useState([])

  const history = useHistory()

  const getService = () => {
    axios.get('http://localhost:3001/service/find')
      .then((res) => {
        console.log(res.data.data);
        setService(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getService()
  }, [])

  const card = () => {
    history.push('/customer-login')
  }

  return (
    <div>

      <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className='pt-5'>Garage API</h1>
              <h4 className='mt-2 mb-3'>Gear Up imgFor Great Quality Service</h4>
              <Link to="/" className="service fw-bold">Watch More..!</Link>
            </div>
            <div className="col-6 p-0">
              <img width="100%" src="https://cfw.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoidGFydW5tb3RvcnMuY29tIiwidiI6NDAyNDQ4MDMzNiwiaSI6IjI4ZWY3NjNlLTVlYWQtNDUyOC01NTNkLTE5NjRmMjUyODYwMCJ9/wp-content/uploads/elementor/thumbs/Engine-brake-and-transmission-experts-q2ru83jqdzlhto2t43ni8azezp0rwen73rk99g7qe0.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className='container-fluid bg-lite text-dark'>
        <div className="container">
          <div className="row d-flex py-5">
            {
              service.map((el, index) => {
                return <div className="col-4 box p-0 bg-white m-3 bor" key={index} onClick={card}>

                  <div className=" text-dark pos-rel">
                    <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                    <div className="img-box"><img className='w-100' src={'http://localhost:3001/images/' + el.image} alt="" /></div>
                    <div className='p-3'>
                      <h4 className='pt-1 mb-0 fw-bold' >{el.serviceName}</h4>
                      <p className='pt-1  mb-0 fs-18'>{el.decription}</p>
                      <h6 className='pt-1 f-color'>${el.cost}</h6>
                      <div>
                        <a href="/" className="text-dark details fw-bold">More Details..!</a>
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

// Tech login  ->  technicain page -> add Service -> service -> Home add card click -> customer login -> vehical -> appointment -> home

//  Appointment -> technicain page  card appointment no -> appoinment card click -> invoice -> home. 