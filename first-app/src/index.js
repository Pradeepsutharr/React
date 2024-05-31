import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, router } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Router />}>
      <Route index element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
