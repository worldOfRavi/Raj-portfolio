import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MailContextProvider } from './store/mailContext.jsx'
// import { MailContextProvider } from './store/mailContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MailContextProvider>
    <App />
  </MailContextProvider>
  </React.StrictMode>,
) 
