import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';
import { BrowserRouter as Router} from 'react-router-dom';
import { StateProvider } from './context/StateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
    <Router>
	    <App />  
    </Router>
    </StateProvider>
  </React.StrictMode>,
)
