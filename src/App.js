import React from 'react';
import { Component } from 'react';
import _1HelloWorld from "./_ReactsLab/_1HelloWorld";
import _2AskNameTextBox from "./_ReactsLab/_2AskNameTextBox";
import _3DropDownListBox from "./_ReactsLab/_3DropDownListBox";
import _4WebApi from "./_ReactsLab/_4WebApi"; //


class App extends Component {
  render() {
    return (
        <div className="">
          <h1>Hello World!</h1>
            <_1HelloWorld />

            <div><_2AskNameTextBox/></div>
            <br/>
            <div><_3DropDownListBox/></div>

            <div><_4WebApi/></div>

        </div>
    );
  }
}

export default App;
