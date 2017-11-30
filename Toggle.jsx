import React, { Component } from "react";

class Toggle extends Component {

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
        clicked: !this.state.clicked,
        })
    }
    
    render() {

                let text = this.state.clicked ? "Hello" : "World"

        return (
            <button onClick={ this.onClicked }> { text}
            </button>
        );
    }
}

export default Toggle;