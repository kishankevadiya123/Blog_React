import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Vehical = () => {

    const history = useHistory()

    let token = localStorage.getItem('customertoken')

    const vehicalschema = Yup.object().shape({
        model: Yup.string().required(),
        year: Yup.string().required(),
        licensePlate: Yup.string().required(),
    });

    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <div className="box-1">
                <h1>Vehical Page</h1>
                <Formik
                    initialValues={{
                        model: '',
                        year: '',
                        licensePlate: '',
                    }}
                    validationSchema={vehicalschema}
                    onSubmit={async (values) => {
                        axios.post('http://localhost:3001/vehicle/create', values,
                            {
                                headers: { customertoken: token }
                            })
                            .then((res) => {
                                console.log(res.data.data);
                                localStorage.setItem('vehicletoken', res.data.token)
                                history.push('/appoinment')
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }}
                >
                    <Form className='d-flex flex-column'>
                        <label htmlFor="model"  className='fw-bold' >model : </label>
                        <Field id="model" className='in-gov' name="model" placeholder="model" />
                        <span><ErrorMessage name='model' /><br /><br /></span>

                        <label htmlFor="year"  className='fw-bold'>year :</label>
                        <Field id="year" className='in-gov' name="year" placeholder="year" />
                        <span><ErrorMessage name='year' /><br /><br /></span>

                        <label htmlFor="licensePlate"  className='fw-bold'>licensePlate :</label>
                        <Field id="licensePlate" className='in-gov' name="licensePlate" placeholder="licensePlate" />
                        <span><ErrorMessage name='licensePlate' /><br /><br /></span>

                        <div className='d-flex justify-content-center'>
                            <button type="submit" className='button'>Submit</button>
                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Vehical