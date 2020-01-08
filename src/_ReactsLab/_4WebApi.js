import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from 'react-bootstrap/Alert';
import AddUser from './_5AddUser';
import Student from "./StatevsProps";

class WebApi extends Component {
    state = {
        isLoading: true,
        groups: []
    };

    constructor(props) {
        super(props);
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8081/api/v1/employees', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then( response => {
            response.json().then(data => this.setState({ groups: data, isLoading: false }));
        }).catch(ex => console.log(ex.toString()));

    }

    addUser = user => {
        const { groups } = this.state;
        let request=add;
        //check if form
        fetch('http://localhost:8081/api/v1/employees', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then( response => {
            response.json().then(data => this.setState({ groups: [...groups, data] }));
        }).catch(ex => console.log(ex.toString()));

    }

    deleteUser = u => {
        const { groups } = this.state;
        fetch('http://localhost:8081/api/v1/employees/'+u.id.toString(), {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then( response => {
            response.json().then(data => this.setState({ groups: groups.filter(group => group.id!==u.id) }));
        }).catch(ex => console.log(ex.toString()));

    }

    updateUser = u => {
        this.setState({editUser: u}) //when clicked on edit, will update add valued from here..
       }

    render() {
        const {groups, isLoading, editUser} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="WebApi" className="table-responsive">
                <AddUser addUser={this.addUser} user={editUser} />
                <Student/>
                <header className="App-header">
                    <Alert dismissible variant="danger">
                        <Alert.Heading>React Js</Alert.Heading>
                    </Alert>
                    <div className="App-intro">
                        <h2>Employees List</h2>

                            <div>
                                <table width="100%"  className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>
                                            First Name
                                        </th>
                                        <th>
                                            Last Name
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {groups.map(group =>
                                    <tr>
                                    <td>{group.firstName}</td>
                                    <td>{group.lastName}</td>
                                        <button className="button muted-button" onClick={()=>this.updateUser(group)}>Edit</button>
                                        <button className="button muted-button" onClick={() => this.deleteUser(group)}>Delete</button>
                                    </tr>
                                    )}
                                    </tbody>

                                  </table>
                            </div>

                    </div>
                </header>
            </div>
        );
    }
}

export default WebApi;