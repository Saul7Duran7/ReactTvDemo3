import React, {Component} from 'react'


       
    
class TVShow extends Component  {     
    
    
    renderDelete = () => {
        if (this.props.allowDelete === true){
            return(
                <button onClick={this.props.deleteHandler} className="Remove">-</button>
            )
            }
        }

    render(){

        return (

                <div>
                    <button onClick={this.props.selectHandler} className="Shows">{this.props.name}</button>
                    {this.renderDelete()}

                </div>

        )

    }

}          







   
export default TVShow 
               
