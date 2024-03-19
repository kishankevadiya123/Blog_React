import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Appointment = () => {

    const history = useHistory()

    let customertoken = localStorage.getItem('customertoken')
    let techniciantoken = localStorage.getItem('techniciantoken')
    let vehicletoken = localStorage.getItem('vehicletoken')

    const appoinmentschema = Yup.object().shape({
        appointmentDate: Yup.string().required(),
        notes: Yup.string().required(),
    });


    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <div className="box-1">
                <h1 className='mb-4 text-center'>Appointment </h1>
                <Formik
                    initialValues={{
                        appointmentDate: '',
                        notes: '',
                    }}
                    validationSchema={appoinmentschema}
                    onSubmit={async (values) => {
                        axios.post('http://localhost:3001/appointment/create', values,
                            {
                                headers: {
                                     customertoken: customertoken,
                                     techniciantoken: techniciantoken,
                                     vehicletoken: vehicletoken
                                     }
                            })
                            .then((res) => {
                                console.log(res.data.data);
                                localStorage.setItem('appointmenttoken', res.data.token)
                                history.push('/')
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }}
                >
                    <Form className='d-flex flex-column'>
                        <label htmlFor="appointmentDate" className='fw-bold'>appointmentDate : </label>
                        <Field id="appointmentDate" className='in-gov' name="appointmentDate" placeholder="appointmentDate" />
                        <span><ErrorMessage name='appointmentDate' /><br /><br /></span>

                        <label htmlFor="notes" className='fw-bold'>notes :</label>
                        <Field id="notes" className='in-gov' name="notes" placeholder="notes" />
                        <span><ErrorMessage name='notes' /><br /><br /></span>

                        <div className='d-flex justify-content-center'>
                            <button type="submit" className='button'>Submit</button>
                        </div>

                        <p className='text-center mt-3'><Link to="technician-login" className="text-dark ">Already Have An Account.?</Link></p>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Appointment