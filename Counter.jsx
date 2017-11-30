import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {

        super(props);
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.state = {
            digit: 0,
        };
    }
     
        inc() {
        console.log("increment");
        if (this.state.digit < this.props.max) {
        this.setState({
        digit: this.state.digit + 1
        })
        }
        }

        dec() {
        console.log("decrement");
        if (this.state.digit > 0) {
        this.setState({
            digit: this.state.digit - 1
        })
        }
        }
    
    render() {
        return (
        
        <div>
        <p className="page-header"> {this.state.digit} </p>

        <button className="btn-primary" onClick={ this.inc }> + </button>

        <button className="btn-primary" onClick={ this.dec }> - </button>
        </div>
        );
    }
}


export default Counter;