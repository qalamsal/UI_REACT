import React, {Component} from "react";

class Student extends Component{


    /*props are always, used with constructors, direct value of props can't be changed..
    User defined Component as Web Element , React pass JSX attribute to component as single object, this object is "props"
    Props values are passed while from render method..
    ReactDOM.render(<Student name="rahul" roll="101"/>,  here <Student> is an object of Props of JSX syntax
    internally will make like as single object
    props={
    "name":"rahul",
    "roll":"101" //or can write expression as well,  roll={100+2}
    }

    which, we use in js
    as
    function Student(props){
    return(
    <div>
    {props.name}
    {props.roll}
    </div>
    );
    }
    */

    //states values , can be changed, so if you want to change value of props, we need to modify the props to state and change them

    constructor(props) {
        super(props);
    }

    state={
        id:3,
        name:"sandesh",
        address:this.props.address
    };

    render() {
        //here is JSX, can return only one top div, can't return h1 and h2 without single tag outer
        return (
            <div>
                <h1>My name is {this.state.name} and address is {this.state.address}</h1>
            </div>
        );
    }
}
export  default Student;