import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './share/css/allPages.css'
import AppAllModules from './AppAllModules';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppAllModules /> 
  </StrictMode>,
)