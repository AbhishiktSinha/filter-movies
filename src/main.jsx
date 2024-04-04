import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ApplyFilterContextProvider from './context/ApplyFilterContextProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApplyFilterContextProvider>
    <App />
  </ApplyFilterContextProvider>,
)
