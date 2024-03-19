import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";

const Usignup = () => {

    const history = useHistory()

    const Signupschema = Yup.object().shape({
        uname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });


    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <div className="box-1">
                <h1 className='mb-4'>User Signup</h1>
                <Formik
                    initialValues={{
                        uname: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={Signupschema}
                    onSubmit={async (values) => {
                        axios.post('http://localhost:3001/user/signup', values)
                            .then((res) => {
                                console.log(res.data.data);
                                history.push('/user/login')
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }}
                >
                    <Form className='d-flex flex-column'>
                        <label htmlFor="uname" className='fw-bold' >uname : </label>
                        <Field id="uname" className='in-gov' name="uname" placeholder="uname" />
                        <span><ErrorMessage name='uname' /><br /><br /></span>

                        <label htmlFor="email" className='fw-bold'>Email :</label>
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
                            <button type="submit" className='button'>Submit</button>
                        </div>
                        {/* <p className='text-center mt-3'><Link to="/user/login" className="text-dark ">Already Have An Account.?</Link></p> */}
                        <Link to="/user/login" className="text-dark mt-3 text-center"><li className=' me-2 fw-bold  blog-btn'>Already Have An Account.?</li></Link>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Usignup