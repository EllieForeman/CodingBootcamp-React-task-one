import React, { Component } from "react";

class SquareLS extends Component {

    render() {
        let {selected, onClick } = this.props;
        let style = (selected ? "red" : "blue"); 

        return <div style={{height: '200px', width: '200px', background: 'grey', border: '5px solid ' + style}}  onClick={ onClick }></div>;
    }
}

export default SquareLS;