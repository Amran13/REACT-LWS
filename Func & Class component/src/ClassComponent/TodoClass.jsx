import React, { Component } from 'react';

class TodoClass extends Component {
    state = {
        todo : '',
        warning : null
    }

    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'Yes, Includes Js' : 'Good Choice!'
        console.log(inputValue, warning);
        this.setState({
            todo : inputValue,
            warning,
        })
    }
    
    render() {
        return (
            <div>
                <p> {this.state.todo} </p>
                <input type="text" onChange={this.handleInput} name="input" id="" />
                <hr />
                <p> {this.state.warning} </p>
            </div>
        );
    }
}

export default TodoClass;