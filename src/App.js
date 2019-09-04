import React from 'react';
import Logo from './logo.svg';
import './App.css';
import ManagePage from './pages/managepage/manage-page'
import PreviewPage from './pages/previewpage/preview-page'
import Navigation from './components/navigation/navigation'

import {Route} from 'react-router-dom'
function App() {
  return(
    
    
    <div className="app">
      
      
    
    <Navigation/>
    <Route exact path = "/" component = {ManagePage} />
    <Route exact path = "/preview-page" component = {PreviewPage} />
    
    </div>
    
    
  );
  } 
    

  export default App;

