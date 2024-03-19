import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {

    const history = useHistory()

    return (

        <div>
            <h1>Login Page</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    axios.post('http://localhost:3001/user/login', values)
                        .then((res) => {
                            console.log(res.data.data);
                            localStorage.setItem('token' , res.data.token)
                            history.push('/contact')
                        })
                        .catch((error) => {
                            console.log(error.response.data.message);
                        })
                }}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    /><br></br><br></br>

                    <label htmlFor="password">password</label>
                    <Field id="password" name="password" placeholder="Doe" /><br></br><br></br>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
     
    )
}

export default Login