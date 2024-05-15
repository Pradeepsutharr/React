import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Router from './Router';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Counter from './components/Counter/Counter'
import Password from './components/Password/Password';
import User from './components/User/User';
import Github, { githubLoader } from './components/Github/Github';


// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: 'counter',
//         element: <Counter />
//       },
//       {
//         path: 'password',
//         element: <Password />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Router />}>
      <Route index element={<Home />} />
      {/* <Route path='' element={<Home />} /> */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='counter' element={<Counter />} />
      <Route path='password' element={<Password />} />
      <Route path='user/:UserId' element={<User />} />
      <Route loader={githubLoader} path='github' element={<Github />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
