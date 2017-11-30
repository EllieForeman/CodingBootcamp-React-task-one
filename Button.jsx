import React, { Component } from "react";

class Button extends Component {

    render() {
    	let { name, selected, onClick } = this.props;
        let className = "btn " + (selected ? "btn-danger" : "btn-primary"); //when selected = 1, the colour goes red - this is set in buttons.jsx// 

        return <button className={ className } onClick={ onClick }>{ name }</button>;
    }
}

export default Button;