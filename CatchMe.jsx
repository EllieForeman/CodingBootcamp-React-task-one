import React, { Component } from "react";

class CatchMe extends Component {

    constructor(props) {
    	super(props);
        this.catch = this.catch.bind(this);
        this.state = {
        	pos: this.props.jump
        };
    }


        catch() {
        console.log("clicked");
		this.setState({
       		pos: this.state.pos + this.props.jump
       		 })
        }


        render() {

        	let jump = this.props.jump

        return (
        	<div>
        	<button className="btn-primary" style= {{position: 'absolute', top: this.state.pos}} onClick={ this.catch }>Catch Me!</button>
        	</div>
        );
    }
}


export default CatchMe;