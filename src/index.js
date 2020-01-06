import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';  //After setting up Bootstrap, npm install --save bootstrap


//Created by Sandesh
/*
1. All html contents are in index.html, inside public folder
where <name> tag is defined as a container, to hold rendered component from js

2. Create a component, _1HelloWorld.js is a component , which calls the render() of react

3. Finally the index.js, where this comment is written... he he..
calls the ReactDOM.render, with component name and tag name, where the components _1HelloWorld is rendered
and showed in name tag


Thoughts: But in real time, we will have APP and inside APP, we will add other components

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>_1HelloWorld World!</h1>
            <_1HelloWorld />
        </div>
    );
  }
}
Here, we have added _1HelloWorld Components which shows name sandesh after _1HelloWorld World !

 */

//ReactDOM.render(<_1HelloWorld/>,document.getElementById('name')); // can call this way, but recommened wasy is
//to use it inside APP component

/*
2 Ways to define (COMPONENT)
1. Function // Js functions
eg:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

2. Class (ES6 Class): Ecma Script
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
*/
//Provided by React it self
ReactDOM.render(<App />, document.getElementById('root'));

