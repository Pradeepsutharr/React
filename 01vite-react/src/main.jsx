import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import First from './First.jsx'

const user = "Praveen"

const CustomElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me',
  user //injecting variable
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  
  CustomElement

  // <App/>

  //   </React.StrictMode>
  
)
