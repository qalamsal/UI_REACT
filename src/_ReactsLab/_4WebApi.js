import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class WebApi extends Component {
    state = {
        isLoading: true,
        groups: []
    };

    componentDidMount() {
        fetch('http://localhost:8081/api/v1/employees', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then( response => {
            response.json().then(data => this.setState({ groups: data, isLoading: false }));
        }).catch(ex => console.log(ex.toString()));

    }

    render() {
        const {groups, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="WebApi" className="table-responsive">
                <header className="App-header">
                    <div className="App-intro">
                        <h2>Employees List</h2>
                        {groups.map(group =>
                            <div key={group.id} >
                                <table width="" class="Table">
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
                                    <tr>
                                    <td>{group.firstName}</td>
                                    <td>{group.lastName}</td>
                                    </tr>
                                    </tbody>

                                  </table>

                                {group.lastName}
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default WebApi;