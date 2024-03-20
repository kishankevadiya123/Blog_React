import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { FaArrowLeftLong } from "react-icons/fa6";

const Blog = () => {


  const [data, setData] = useState([])


  let id = localStorage.getItem('blogid')

  const getBlogone = () => {
    axios.get('http://localhost:3001/blog/findone/' + id)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  // delete
  const Delet = (id) => {
    axios.delete('http://localhost:3001/blog/delete/' + id)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }


  useEffect(() => {
    getBlogone()
  }, [])


  return (
    <div>

      <div className="container-fluid mb-5 p-0">
        <div className="container-fluid mt-3 mb-5 position-relative d-block">
          <div className="row align-items-center">
            <div className="p-0 img">
              <img width="100%" height="100%" src="https://st2.depositphotos.com/4107269/9004/i/450/depositphotos_90042754-stock-photo-top-view-of-trendy-white.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="container-fluid pos-ab">
          <div className="row align-items-center">
            <div className="p-0">
              <h1 className='fs-60'>Publish your passions, your way</h1>
              <p className='fs-3 mb-4'>Create a unique and beautiful blog easily</p>
              <div>
                <a href="/user/login" className="text-dark fs-5 p-3 blog-btn rounded-0 fw-bold">Create Blog..</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-0 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5">
              <div className="blog-box">
                <div className='mb-3'>
                  <img width="100%" src={'http://localhost:3001/images/' + data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p className='mt-4 fs-4'>{data.description}</p>
                <p className='fs-4'>{data.description} </p>
                <div className='mt-5 text-center'>
                  <a href="/" className="text-dark fs-5 p-3 blog-btn rounded-0 fw-bold"> <FaArrowLeftLong /> Back To Home</a>
                </div>
                <div className='mt-5 text-center' onClick={() => Delet(data._id)} >
                  <a href="/" className="text-dark fs-5 p-3 blog-btn rounded-0 fw-bold"> Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog
