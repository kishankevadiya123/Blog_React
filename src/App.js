// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import "~slick-carousel/slick/slick.css";

// function App() {
//   const [data, setData] = useState([
//     {
//       "userId": 10,
//       "id": 97,
//       "title": "quas fugiat ut perspiciatis vero provident",
//       "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
//     },
//     {
//       "userId": 10,
//       "id": 98,
//       "title": "laboriosam dolor voluptates",
//       "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
//     }
//   ]);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data)
//       })
//       .catch((res) => {
//         console.log(res.data);
//       })
//   }, [])
//   return (
//     <div className="App">
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>userId</th>
//             <th>id</th>
//             <th>title</th>
//             <th>body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((el) => {
//               return <tr>
//                 <td>{el.userId}</td>
//                 <td>{el.id}</td>
//                 <td>{el.title}</td>
//                 <td>{el.body}</td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;


//  - - - - - - - - - - - - - - - - - - - - -  Json-Placehodel CORS CRUD in react - - - - 

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import "~slick-carousel/slick/slick.css";
// import { Formik, Field, Form } from 'formik';

// function App() {
//   const [data, setData] = useState([]);
//   const [initialValues, setInitialValues] = useState([]);
//   const [row, setRow] = useState(null);

//   const getData = () => {
//     axios.get('http://localhost:3001/data/find')
//       .then((res) => {
//         setData(res.data.data)

//       })
//       .catch((res) => {
//         console.log(res.data);
//       })
//   }

//   useEffect(() => {
//     getData();
//   }, [])

//   function Delete(id) {
//     axios.delete('http://localhost:3001/data/' + id)
//       .then((res) => {
//         getData()
//       })
//       .catch((error) => {
//         console.log("error", error.response.data.message);
//       })
//   }

//   function update(id) {
//     axios.get('http://localhost:3001/data/findOne/' + id)
//     .then((res) => {
//       setInitialValues(res.data.data)
//       setRow(id)
//     })
//     .catch((error) => {
//       console.log("error", error.response.data.message);
//     })
//   }

//   return (
//     <div className="App">

//       <Formik
//         initialValues={{
//           userId: '',
//           title: '',
//           body: '',
//           ...initialValues
//         }}

//         enableReinitialize={true}

//         onSubmit={async (values, action) => {
//           if (row == null) {
//             axios.post('http://localhost:3001/data/create', values)
//               .then((res) => {
//                 console.log(res.data.data);
//                 getData()
//                 action.resetForm()
//               })
//               .catch((error) => {
//                 console.log(error.response.data.message);
//               })
//           }
//           else{
//             axios.put('http://localhost:3001/data/' + row, values)
//               .then((res) => {
//                 console.log(res.data.data);
//                 getData()
//                 setInitialValues()
//                 setRow(null)
//               })
//               .catch((error) => {
//                 console.log(error.response.data.message);
//               })
//           }
//         }}

//       >
//         <Form>
//           <label htmlFor="userId">userId</label>
//           <Field id="userId" name="userId" placeholder="Jane" />

//           <label htmlFor="title">Title</label>
//           <Field id="title" name="title" placeholder="Doe" />

//           <label htmlFor="body">Body</label>
//           <Field id="body" name="body" placeholder="Doe" />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>

//       <table border={1}>
//         <thead>
//           <tr>
//             <th>userId</th>
//             <th>id</th>
//             <th>title</th>
//             <th>body</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((el, index) => {
//               return <tr key={index}>
//                 <td>{el.userId}</td>
//                 <td>{el.id}</td>
//                 <td>{el.title}</td>
//                 <td>{el.body}</td>
//                 <td><button onClick={() => Delete(el._id)}>Delete</button> </td>
//                 <td><button onClick={() => update(el._id)}>Update</button> </td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   );

// }
// export default App;



//  - - - - - - - - - - - - - - -  Contact-Book CRUD IN REACT- - - - - - - - 



// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import "~slick-carousel/slick/slick.css";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import Signup from './router/Signup';
// import Login from './router/Login';
// import Contact from './router/Contact';


// function App() {

//   return (
//     <div className="App">
//       <Router>
//         <Switch>

//           <Route exact path="/">
//             <Signup></Signup>
//           </Route>

//           <Route path="/login">
//             <Login></Login>
//           </Route>

//           <Route path="/contact">
//             <Contact></Contact>
//           </Route>

//         </Switch>
//       </Router>
//     </div >
//   );

// }
// export default App;



//  - - - - - - - - - - - - - - - - - - - - - -   Garage API CRUD IN REACT


// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import "~slick-carousel/slick/slick.css";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Signup from './Garage-API/Technician/Signup';
// import Header from './Garage-API/Header';

// import Vehical from './Garage-API/Vehical';
// import Login from './Garage-API/Technician/Login';
// import Home from './Garage-API/Home';
// import Csignup from './Garage-API/Customer/Csignup';
// import Clogin from './Garage-API/Customer/Clogin';
// import Appointment from './Garage-API/Appointment';
// import Technician from './Garage-API/Technician/Technician';
// import Service from './Garage-API/Technician/Service';
// import Invoice from './Garage-API/Invoice';
// import Cprotect from './Garage-API/protector/Cprotect';

// function App() {

//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Switch>

//           {/* home page */}
//           <Route exact path="/">
//             <Home></Home>
//           </Route>


//           {/* technician page */}
//           <Route path="/technician">
//             <Technician></Technician>
//           </Route>

//           <Route path="/technician-signup">
//             <Signup></Signup>
//           </Route>

//           <Route path="/technician-login">
//             <Login></Login>
//           </Route>

//           {/* serivce page */}
//           <Route path="/service">
//             <Service></Service>
//           </Route>


//           {/* customer page*/}
//           <Route path="/customer-signup">
//             <Csignup></Csignup>
//           </Route>

//           <Route path="/customer-login">
//             <Clogin></Clogin>
//           </Route>


//           {/* vehical page */}
//           <Route path="/vehical">
//             <Cprotect>
//               <Vehical></Vehical>
//             </Cprotect>
//           </Route>


//           {/* appoinment page */}
//           <Route path="/appoinment">
//             <Appointment></Appointment>
//           </Route>

//           {/* invoice page */}
//           <Route path="/invoice">
//             <Invoice></Invoice>
//           </Route>

//         </Switch>
//       </Router>
//     </div >
//   );

// }
// export default App;



//  - - - - - - - - - - - - - - - - - - - - - -   BLOG API IN REACT

// https://www.wix.com/website-template/view/html/1872?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fblog&tpClick=view_button&esi=ad5e5c67-770d-4889-b046-d25c45bf4d32

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Blog-API/Header';
import Usignup from './Blog-API/User/Usignup';
import Home from './Blog-API/Home';
import Ulogin from './Blog-API/User/Ulogin';
import Cblog from './Blog-API/Blog/Cblog';
import Blog from './Blog-API/Blog/Blog';
import Footer from './Blog-API/Footer';



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* User Pages */}
          <Route path="/user/signup">
            <Usignup></Usignup>
          </Route>

          <Route path="/user/login">
            <Ulogin></Ulogin>
          </Route>

          {/* User Pages */}
          <Route path="/blog/create">
            <Cblog></Cblog>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div >
  );
}
export default App;
