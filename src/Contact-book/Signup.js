import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";


const Signup = () => {


  const history = useHistory()

  const Signupschema = Yup.object().shape({
    uname: Yup.string().required('uname require'),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          uname: '',
          email: '',
          password: '',
        }}
        validationSchema={Signupschema}
        onSubmit={async (values) => {
          axios.post('http://localhost:3001/user/signup',values)
            .then((res) => {
              console.log(res.data.data);
              history.push('/login')
            })
            .catch((error) => {
              console.log(error.response.data.message);
            })
        }}
      >
        <Form>
          <label htmlFor="uname">Uname</label>
          <Field id="uname" name="uname" placeholder="Jane" />
          <ErrorMessage name='uname'/><br></br><br></br>

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          /><ErrorMessage name='email'/><br></br><br></br>

          <label htmlFor="password">password</label>
          <Field id="password" name="password" placeholder="Doe" />
          <ErrorMessage name='password'/><br></br><br></br>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Signup