import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ManagePage from '../../pages/managepage/manage-page';

       
    
class TVShow extends Component  {     
    
       
 
    
    
    renderDelete = () => {
        if (this.props.allowDelete === true){
            return(
                <button onClick={this.props.deleteHandler} className="Remove"  >-</button>
            )
            }
        }

    render(){

        return (

                <div>
                    <button onClick={this.props.selectHandler} className="Shows" >{this.props.name}</button>
                    {this.renderDelete()}

                </div>

        )

    }

}          





TVShow.propTypes = {
    show: PropTypes.string,
    allowDelete: PropTypes.bool,
    name: PropTypes.string,
    rating: PropTypes.string,
    imageurl: PropTypes.string
}    
{/* <span>{this.deleteButto()}<h3>{this.props.title}</h3></span>    */}

export default TVShow 
               
