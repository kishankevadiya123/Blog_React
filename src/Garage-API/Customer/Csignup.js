import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";


const Csignup = () => {

    const history = useHistory()

    const Signupschema = Yup.object().shape({
        fname: Yup.string().required('uname require'),
        lname: Yup.string().required('uname require'),
        contact: Yup.string().required('uname require'),
        address: Yup.string().required('uname require'),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <div className="box-1">
                <h1 className='mb-4'>Customer Signup</h1>
                <Formik
                    initialValues={{
                        fname: '',
                        lname: '',
                        contact: '',
                        address: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={Signupschema}
                    onSubmit={async (values) => {
                        axios.post('http://localhost:3001/customer/signup', values)
                            .then((res) => {
                                console.log(res.data.data);
                                history.push('/customer-login')
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }}
                >
                    <Form className='d-flex flex-column'>
                        <label htmlFor="fname"  className='fw-bold' >fname : </label>
                        <Field id="fname" className='in-gov' name="fname" placeholder="fname" />
                        <span><ErrorMessage name='fname' /><br /><br /></span>

                        <label htmlFor="lname"  className='fw-bold'>lname :</label>
                        <Field id="lname" className='in-gov' name="lname" placeholder="lanem" />
                        <span><ErrorMessage name='lname' /><br /><br /></span>

                        <label htmlFor="contact"  className='fw-bold'>contact :</label>
                        <Field id="contact" className='in-gov' name="contact" placeholder="contact" />
                        <span><ErrorMessage name='contact' /><br /><br /></span>

                        <label htmlFor="address"  className='fw-bold' >address :</label>
                        <Field id="address" className='in-gov' name="address" placeholder="address" />
                        <span><ErrorMessage name='address' /><br /><br /></span>

                        <label htmlFor="email"  className='fw-bold'>Email :</label>
                        <Field
                            className='in-gov'
                            id="email"
                            name="email"
                            placeholder="Email123@email.com"
                            type="email"
                        />
                        <span><ErrorMessage name='email' /><br /><br /></span>

                        
                        <label htmlFor="password"  className='fw-bold'>password :</label>
                        <Field id="password" className='in-gov' name="password" placeholder="password" />
                        <span><ErrorMessage name='password' /><br /><br /></span>

                        <div className='d-flex justify-content-center'>
                            <button type="submit" className='button'>Submit</button>
                        </div>
                        <p className='text-center mt-3'><Link to="customer-login" className="text-dark ">Already Have An Account.?</Link></p>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Csignup