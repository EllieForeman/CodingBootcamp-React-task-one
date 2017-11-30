import React, { Component } from "react"; //importing react//
import Button from "./Button"; //importing the child jsx file (controlled component - maybe not - maybe only a CC if it has an input) to this file (which is the container component) - this is so we can control the state from this file. 

class Buttons extends Component {  //class which uses components//
    constructor(props) {
        super(props); //need to use to enable this.state, this.props, render (all of reacts functionality//
        this.state = { selected: 1 }; // inital state on loading the page. we decided to use a number - easier to read and open. we use colon because it's inside an object literal - { key : value} you would use = if it was not an OL
        this.clicked = this.clicked.bind(this); // don't actually need this - as this.clicked is in a annonymous function, so it keeps the state of this.

    }

    clicked(anyNumber) {  //method called clicked 
        console.log("Clicked");
        this.setState({
        selected: anyNumber, //when the button is clicked the  - references this.clicked(1) <- calls in number 1,2, 3 or 4
        })
    }

    render() { /*everything that you pass into a component is just a prop. it can only be an event handler when it is passed as HTML. everythign green is a prop*/
        return (
            <div>
            <Button selected={this.state.selected === 1 } onClick={ () => this.clicked(1) }/>
            <Button selected={this.state.selected === 2 } onClick={ () => this.clicked(2) }/>
            <Button selected={this.state.selected === 3 } onClick={ () => this.clicked(3) }/>
            <Button selected={this.state.selected === 4 } onClick={ () => this.clicked(4) }/>
            </div>
        );
    }
}

//all the buttons need to have different values so when the true/false function is called, only one can be red at a time//

export default Buttons;

