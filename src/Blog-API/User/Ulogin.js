import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Ulogin = () => {

    const history = useHistory()

    const loginschema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className="box-1">
                <h1 className='mb-4 mt-5'>User Login</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={loginschema}
                    onSubmit={async (values) => {
                        axios.post('http://localhost:3001/user/login', values)
                            .then((res) => {
                                console.log(res.data);
                                localStorage.setItem('usertoken', res.data.usertoken)
                                history.push('/blog/create')
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }}
                >
                    <Form className='d-flex flex-column'>

                        <label htmlFor="email" className='fw-bold' >Email :</label>
                        <Field
                            className='in-gov'
                            id="email"
                            name="email"
                            placeholder="Email123@email.com"
                            type="email"
                        />
                        <span><ErrorMessage name='email' /><br /><br /></span>

                        <label htmlFor="password" className='fw-bold'>password :</label>
                        <Field id="password" className='in-gov' name="password" placeholder="password" />
                        <span><ErrorMessage name='password' /><br /><br /></span>

                        <div className='d-flex justify-content-center'>
                            <button type="submit" className='button submit'>Submit</button>
                        </div>
                        {/* <p className='text-center mt-3'><Link to="/user/signup" className="text-dark">Don't Have An Account ? Please signup</Link></p> */}
                        <Link to="/user/signup" className=" text-dark mt-2 text-center"><li className=' fw-bold blog-btn'>Don't Have An Account ? Please signup</li></Link>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Ulogin