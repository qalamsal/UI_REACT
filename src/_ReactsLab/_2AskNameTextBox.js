import React from 'react';
import { Component } from 'react';

class _2AskNameTextBox extends Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state={value:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);  //REGISTER THE handleSubmit
    }

     handleChange(event){
         this.setState({value: event.target.value}); //Set state to change the value of component
     }

    handleSubmit(event){
        alert('A name was submited' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default _2AskNameTextBox;