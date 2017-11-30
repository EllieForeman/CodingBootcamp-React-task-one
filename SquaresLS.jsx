import React, { Component } from "react"; //importing react//
import SquareLS from "./SquareLS"; //importing the child jsx file (controlled component - maybe not - maybe only a CC if it has an input) to this file (which is the container component) - this is so we can control the state from this file. 

class SquaresLS extends Component {  //class which uses components//
    constructor(props) {
        super(props); //need to use to enable this.state, this.props, render (all of reacts functionality//
        this.clicked = this.clicked.bind(this); // don't actually need this - as this.clicked is in a annonymous function, so it keeps the state of this.
        this.state = { selected: true }; // inital state on loading the page. we decided to use a number - easier to read and open. we use colon because it's inside an object literal - { key : value} you would use = if it was not an OL

    }

    clicked(square) {  //method called clicked 
        console.log("Clicked");
        this.setState({
        selected: !this.state.selected,//when the button is clicked the  - references this.clicked(true) <- calls in the boolean true or false
        })
    }   

 render() {

        return (
            <div>
            <SquareLS selected={this.state.selected === true } onClick={ () => this.clicked(true) }/>
            <SquareLS selected={this.state.selected === false } onClick={ () => this.clicked(false) }/>
            </div>
        );
    }
}

export default SquaresLS;
