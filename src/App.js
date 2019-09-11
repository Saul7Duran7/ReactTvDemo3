// import React from 'react';
import Logo from './logo.svg';
import './App.css';
import ManagePage from './pages/managepage/manage-page'
import PreviewPage from './pages/previewpage/preview-page'
import Navigation from './components/navigation/navigation'

import {Route} from 'react-router-dom'

import React, {Component} from 'react'






class App extends Component {


  state = {
    show:[],
    tvShows:[],
    };       


    tvShowDeleted = () => {
      this.setState({ show:""})
    }
    
   
       
      saveTVShow = (show) => {
        this.setState((prevState) => ({
          show,
          tvShows: [...prevState.tvShows, {
            name: show.name,
            rating: show.rating,
            url: show.url}    ]
          })
        )
        }


      renderManagePage = () => {
        return (
        <ManagePage show={this.state.show} tvShows={this.state.tvShows} tvShowDeleted={this.tvShowDeleted} saveTVShow={this.saveTVShow}/>
          )
      }
    
      renderPreviewPage = () => {
        return (
          <PreviewPage show={this.state.show}/>
        )
      }
    

  render() {
 
    console.log(this.state)
 
    return(    
    <div className="app">      
    
    <Navigation/>
    <Route exact path = "/" render = {this.renderManagePage} />
    <Route exact path = "/preview-page" render = {this.renderPreviewPage} />
    
    </div>
       
  )
  } 
}



  export default App;

