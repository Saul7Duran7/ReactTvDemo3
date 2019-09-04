import React, {Component} from 'react'
import TVShow from '../../components/tvshow/tvshow';
import PropTypes from 'prop-types';


class ManagePage extends Component {
    
         constructor(props){
           super(props)
           this.state = {
             name : "" ,
             rating : "", 
             imageurl : "",
                          
            };           

            
          
                     
                     
           }
           

          
     
           
        //   show = ( ) => {
        //    let newShow = this.state.show 
        //    this.setState({
        //      show: newShow  
        //                })
        //  }
       



  tvShowSelected = () => {

    console.log('Tv Show Selected', this.state)
    
  }



tvShowDeleted = () => {

 
  console.log( 'TV Show Deleted')
  this.setState({name:""})
}

saveTVShow = () => {
   
  console.log('TV Show Saved')
  this.setState({name: "", rating: "", imageurl: "",    
})
  

}

renderShows = () => { return (<TVShow  selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name={this.state.name} allowDelete = {true}  />)}
     

  
  
  
  render(){
    console.log(this.state)
    
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
                     

                   {this.renderShows()}
                     
                 {/* renderShows = () => {<TVShow  selectHandler={this.tvShowSelected} deleteHandler={this.tvshowDeleted} name="Full House"  allowDelete={true}  />} */}


                      {/* <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvshowDeleted} name="Noticiero Univision" allowDelete={true}/>   */}
                     {/* <dl><button>Show1</button><button>-</button></dl>
                     <dl><button>Show2</button><button>-</button></dl> */}
                      
                   </div>         
                   <div className="item3">
                  
                     <dt><h2>New/Edit Show</h2></dt>
                    
                    <dl> Name: <input type="text" value={this.state.name}  onChange={(e) =>
                               this.setState({name: e.target.value })} /> </dl>
                                
                    <dl>  Rating: <input type="text" value={this.state.rating} onChange={(e) =>
                               this.setState({rating: e.target.value })} /> </dl>

                    <dl>  Image URL: <input type="text" value={this.state.imageurl} onChange={(e) =>
                               this.setState({imageurl: e.target.value })} /> </dl>






                     {/* <dl>Name: <input type="text" onChange={this.setState}  defaultValue={this.state.name} ></input>

                     </dl> */}
                        

                     {/* <dl>Rating: <textarea defaultValue={"  "} /></dl> */}
                     {/* <dl>Image Url: <textarea defaultValue={"  "} /></dl> */}
                     <dl><input type="button" onClick={this.saveTVShow} value="Create/Update"  /></dl>
                   </div>
                   </div>
               </div>
              )
            }
          }
            
 
     ManagePage.propTypes = {
      title: PropTypes.string,
      allowDelete: PropTypes.bool,
      name: PropTypes.string,
      rating: PropTypes.string,
      imageurl: PropTypes.string
  }    
export default ManagePage