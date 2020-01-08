import React, {Component} from "react";

class Student extends Component{


    //props are always, used with constructors
    //

    constructor(props) {
        super(props);
    }

    state={
        id:3,
        name:"sandesh"
    };

    render() {
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
            </div>
        );
    }
}

export  default Student;