import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Technician = () => {

  const [appoinment, setAppoinment] = useState([])

  const history = useHistory()

  const getAppointment = () => {
    axios.get('http://localhost:3001/appointment/find')
      .then((res) => {
        console.log(res.data.data);
        setAppoinment(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getAppointment()
  }, [])

   const card = () => {
    history.push('/invoice')
   }

  return (
    <div>


      <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className='mb-4 pt-5'>Technicaian</h1>
              <Link to="/service" className="service fw-bold">Add service..!</Link>
            </div>
            <div className="col-6 p-0">
              <img  width="100%" src="https://cfw.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoidGFydW5tb3RvcnMuY29tIiwidiI6NDAyNDQ4MDMzNiwiaSI6IjI4ZWY3NjNlLTVlYWQtNDUyOC01NTNkLTE5NjRmMjUyODYwMCJ9/wp-content/uploads/elementor/thumbs/Engine-brake-and-transmission-experts-q2ru83jqdzlhto2t43ni8azezp0rwen73rk99g7qe0.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-lite text-dark'>
        <div className="container">
          <div className="row d-flex py-5">
            {
              appoinment.map((el,index) => {
                return <div className="col-4 p-0 bg-white m-3 bor" key={index} onClick={card}>
                  
                    <div className="box text-dark pos-rel">
                      <div className='p-3'>
                        <h2 className='text-center'>----- Technician -----</h2>
                        <h4 className='pt-1 mb-0 fw-bold' >{el.appointmentDate}</h4>
                        <p className='pt-1  mb-0 fs-18'>{el.notes}</p>
                        <div className='mt-2'>
                          <a href="" className="text-dark details fw-bold ">More Details..!</a>
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

export default Technician