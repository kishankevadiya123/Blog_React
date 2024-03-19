import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';


const Contact = () => {

    const [data, setData] = useState([]);
    const [initialValues, setInitialValues] = useState([]);
    const [row, setRow] = useState(null);

    let token = localStorage.getItem('token')

    const getData = () => {
        axios.get('http://localhost:3001/contact/find')
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    useEffect(() => {
        getData()
    }, [])


    function Delete(id) {
        axios.delete('http://localhost:3001/contact/' + id)
            .then((res) => {
                getData()
            })
            .catch((error) => {
                console.log("error", error.response.data.message);
            })
    }

    function update(id) {
        axios.get('http://localhost:3001/contact/findone/' + id)
            .then((res) => {
                setInitialValues(res.data.data)
                setRow(id)
            })
            .catch((error) => {
                console.log("error", error.response.data.message);
            })
    }

    return (
        <div>
            <h1>Contact Page</h1>
            <Formik
                initialValues={{
                    fname: '',
                    lname: '',
                    address: '',
                    contact: '',
                    email: '',
                    ...initialValues
                }}
                enableReinitialize={true}
                onSubmit={async (values, action) => {
                    if (row == null) {
                        axios.post('http://localhost:3001/contact/create', values,
                            {
                                headers: { token: token }
                            })
                            .then((res) => {
                                console.log(res.data.data);
                                getData()
                                action.resetForm()
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }
                    else {
                        axios.put('http://localhost:3001/contact/' + row, values)
                            .then((res) => {
                                console.log(res.data.data);
                                getData()
                                setInitialValues()
                                setRow(null)
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }
                }}
            >
                <Form>
                    <label htmlFor="fname">fname</label>
                    <Field id="fname" name="fname" placeholder="Jane" /><br></br><br></br>

                    <label htmlFor="lname">lname</label>
                    <Field id="lname" name="lname" placeholder="Jane" /><br></br><br></br>

                    <label htmlFor="address">address</label>
                    <Field id="address" name="address" placeholder="Jane" /><br></br><br></br>

                    <label htmlFor="contact">contact</label>
                    <Field id="contact" name="contact" placeholder="Jane" /><br></br><br></br>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    /><br></br><br></br>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>


            <table border={2}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>address</th>
                        <th>contact</th>
                        <th>email</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, index) => {
                            return <tr key={index}>
                                <td>{el.fname}</td>
                                <td>{el.lname}</td>
                                <td>{el.address}</td>
                                <td>{el.contact}</td>
                                <td>{el.email}</td>
                                <td><button onClick={() => Delete(el._id)}>Delete</button> </td>
                                <td><button onClick={() => update(el._id)}>Update</button> </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default Contact