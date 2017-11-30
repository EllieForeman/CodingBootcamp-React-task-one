import React, { Component } from "react";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: []
         };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        }
    

    handleSubmit(e){
        e.preventDefault(e);
        if (!this.state.value.length) {
           return;
    }
    
    const newItem = {
        value: this.state.value,
    };

    this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
    }));
    }

render() {
    return (
        <div>
            <h3>Make a List</h3>

            <form onSubmit={this.handleSubmit}>

             <input onChange={this.handleChange} value={this.state.value}
                />

                <button onClick={this.state.items}>Add</button>

                  <ul>
            {this.state.items.map(item => (
                <li key={item}>{item.value}</li>
                ))}
            </ul>

            </form>
        </div>
    );
}
}

export default List;