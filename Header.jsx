import React, { Component } from "react";

class Header extends Component {

    constructor(props) {

        super(props);
        this.onClicked = this.onClicked.bind(this);
        this.state = {
            clicked: false,
        };
    }   

    onClicked() {
        console.log("Clicked");
        this.setState({
        clicked: true,
        })
    }
    
    render() {
        return (
            <div className="jumbotron" onClick={ this.onClicked }>
             { this.state.clicked ? <h1>Nice</h1> : <h1>You have not clicked me</h1> }
            </div>
        );
    }
}

export default Header;