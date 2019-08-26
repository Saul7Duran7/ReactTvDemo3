import React, {Component} from 'react'
import TVShow from '../../components/tvshow/tvshow';


class ManagePage extends Component {
    
  
  tvShowSelected = () => {

    console.log('TV Show Selected')

}

tvShowDeleted = () => {

  console.log('TV Show Deleted')

}

saveTVShow = () => {

  console.log('TV Show Saved')

}

  
  
  
  render(){
        return(
                

           
                
                <div>               
                                    
                 <title>Manage-Page</title>
                 <link rel="stylesheet" href="Stylesheet.css" />
                 <div className="grid-container">
                   <div className="item1">
                     <a href="manage-page.html">Manage Page </a> 
                     <a href="preview-page.html">Manage Preview</a>
                     <h1>Manage Page</h1>     
                   </div>    
                   <div className="item2">
                     
             
                     <dd /><dt><h2>Shows</h2></dt>

                     
                     <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name="Full House" allowDelete={true}/>

                      <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name="Noticiero Univision" allowDelete={true}/>  
                     {/* <dl><button>Show1</button><button>-</button></dl>
                     <dl><button>Show2</button><button>-</button></dl> */}
                      
                   </div>         
                   <div className="item3">
                     <dd>
                     </dd><dt /><dt><h2>New/Edit Show</h2></dt>
                     <dl>Name: <textarea defaultValue={"  "} />
                     </dl>
                     <dl>Rating: <textarea defaultValue={"  "} /></dl>
                     <dl>Image Url: <textarea defaultValue={"  "} /></dl>
                     <dl><input type="button" onClick={this.saveTVShow} value="Create/Update"/></dl> 
                   </div>
                                     </div>
               </div>
              )
            }
          }
            
        
export default ManagePage;

