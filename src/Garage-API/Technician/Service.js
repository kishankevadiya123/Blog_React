import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup"

const Service = () => {

    const history = useHistory()

    let techniciantoken = localStorage.getItem('techniciantoken')


    const serviceData = (values) => {

        const form = new FormData();
        form.append('image', values.image);
        form.append('serviceName', values.serviceName);
        form.append('decription', values.decription);
        form.append('cost', values.cost);

        axios.post('http://localhost:3001/service/create', form,
            {
                headers: {
                    techniciantoken: techniciantoken,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log(res.data.data);
                history.push('/')
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })

    }

    const serivceschema = Yup.object().shape({
        image: Yup.string().required('image require'),
        serviceName: Yup.string().required('uname require'),
        decription: Yup.string().required('uname require'),
        cost: Yup.string().required('uname require'),

    });


    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <div className="box-1">
                <h1>Service page  </h1>
                <Formik
                    initialValues={{
                        image: '',
                        serviceName: '',
                        decription: '',
                        cost: '',
                    }}
                    validationSchema={serivceschema}
                    onSubmit={async (values) => {
                        serviceData(values)
                    }}
                >
                    {
                        (props) => (
                            <Form className='d-flex flex-column'>
                                <label htmlFor="image"  className='fw-bold'>image</label>
                                <input type="file" className='in-gov' onChange={(e) => props.setFieldValue("image", e.target.files[0])} />
                                <span><ErrorMessage name='image' /><br></br></span>

                                <label htmlFor="serviceName"  className='fw-bold'>serviceName</label>
                                <Field id="serviceName" className='in-gov' name="serviceName" placeholder="serviceName" />
                                <span><ErrorMessage name='serviceName' /><br></br></span>

                                <label htmlFor="decription"  className='fw-bold'>decription</label>
                                <Field id="decription" className='in-gov' name="decription" placeholder="decription" />
                                <span> <ErrorMessage name='decription' /><br></br></span>

                                <label htmlFor="cost"  className='fw-bold'>cost</label>
                                <Field id="cost  className='in-gov'" name="cost" placeholder="cost" />
                                <span> <ErrorMessage name='cost' /><br></br></span>

                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className='button'>Submit</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Service