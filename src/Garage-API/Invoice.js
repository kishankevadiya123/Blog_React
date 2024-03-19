import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Invoice = () => {
  
  const history = useHistory()

  let appointmenttoken = localStorage.getItem('appointmenttoken')

  const Invoiceschema = Yup.object().shape({
    totalCost: Yup.string().required(),
    paymentStatus: Yup.string().required(),
    paymentDate: Yup.string().required(),
    
  });

  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
      <div className="box-1">
        <h1 className='mb-4 text-center'>Invoice</h1>
        <Formik
          initialValues={{
            totalCost: '',
            paymentStatus: '',
            paymentDate: '',
          }}
          validationSchema={Invoiceschema}
          onSubmit={async (values) => {
            axios.post('http://localhost:3001/invoice/create', values,
            {
              headers: { appointmenttoken : appointmenttoken}
            })
              .then((res) => {
                console.log(res.data.data);
                history.push('/')
              })
              .catch((error) => {
                console.log(error.response.data.message);
              })
          }}
        >
          <Form className='d-flex flex-column'>
            <label htmlFor="totalCost" className='fw-bold' >totalCost : </label>
            <Field id="totalCost" className='in-gov' name="totalCost" placeholder="totalCost" />
            <span><ErrorMessage name='totalCost' /><br /><br /></span>

            <label htmlFor="paymentStatus" className='fw-bold'>paymentStatus :</label>
            <Field id="paymentStatus" className='in-gov' name="paymentStatus" placeholder="paymentStatus" />
            <span><ErrorMessage name='paymentStatus' /><br /><br /></span>

            <label htmlFor="paymentDate" className='fw-bold'>paymentDate :</label>
            <Field id="paymentDate" className='in-gov' name="paymentDate" placeholder="paymentDate" />
            <span><ErrorMessage name='paymentDate' /><br /><br /></span>

            <div className='d-flex justify-content-center'>
              <button type="submit" className='button'>Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Invoice