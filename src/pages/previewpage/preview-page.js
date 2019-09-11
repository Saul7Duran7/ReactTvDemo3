

import React, {Component} from 'react'
import TVShow from '../../components/components/tvshow';
import propTypes from 'prop-types';

class previewPage extends Component {
  static propTypes = {
    show: propTypes.object.isRequired,
  }

  state = {
    tvShowSelected: {
        name: 'show',
        rating: 'rating',
        url: 'url',
    }
  };
  renderShows = () => {
    return(<TVShow selectHandler={this.tvShowSelected} name={this.props.show.name}/>
      )}
tvShowSelected = () => {
    this.setState({
        tvShowSelected:{
        name:this.props.show.name, 
        rating:this.props.show.rating, 
        url:this.props.show.url
        }
      })
}
 
  render(){
	 return(
	
		<div>
            
       
        <title>Preview-Page</title>
        <link rel="stylesheet" href="Stylesheet.css" />
        <div className="grid-container">
          <div className="item1">
            {/* <a href="manage-page.html">Manage Page</a>
            <a href="preview-page.html">Preview Page</a>  	 */}
            <h1>Preview Page</h1>
          </div>
          <div className="item2"><h2>Shows</h2>
          {/* 
           */}
            {this.renderShows()}
          </div>
          <div className="item3">
            <dd>
            </dd><dt>
              <dl> <textarea defaultValue={"Show Name "} />
              </dl>
              <dl> <textarea defaultValue={"Rating "} /> </dl>
              <dl>Image</dl>
            </dt>
          </div>
        </div>  
      </div>

		)
	 }
  }
  



//  PreviewPage.propTypes = {
//     title: PropTypes.string,
//     allowDelete: PropTypes.bool,
//     name: PropTypes.string,
//     rating: PropTypes.string,
//     imageurl: PropTypes.string
// }    
export default previewPage