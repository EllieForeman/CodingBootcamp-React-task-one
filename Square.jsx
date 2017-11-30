import React, { Component } from "react";

class Square extends Component {

constructor(props) {

   super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color_black: false,
        };
    }   

    changeColor() {
        console.log("Clicked");
         this.setState({
        	color_black: !this.state.color_black,
        })
    }

     render() {
     	let bdcolor = this.state.color_black ? "black" : "hotpink"

        return (
        	 <div style= {{ height: '200px', width: '200px', background: 'grey', border: '5px solid ' + bdcolor}} onClick={ this.changeColor }>
             
            </div>


        );
    }
}
export default Square;
