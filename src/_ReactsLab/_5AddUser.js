import React from 'react';

export default class extends React.Component {

    state = {
        "user": {
            "firstName":"",
            "lastName":"",
            "emailId":""
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { user } = nextProps;
        if(user)
            this.setState({
                user: nextProps.user
            })
    }

    handleSubmit = () => {
        this.props.addUser(this.state.user);
    }

    render() {
        return (
            <form>
                <label>
                    First Name: <input type="text" value={this.state.user.firstName} onChange={
                        data => this.setState({user: {...this.state.user, firstName :data.target.value}})
                    }/>
                </label>
                <label>
                    Last Name: <input type="text" value={this.state.user.lastName} onChange={
                    data => this.setState({user: {...this.state.user, lastName :data.target.value}})
                }/>
                </label>
                <label>
                    Email Id: <input type="text" value={this.state.user.emailId} onChange={
                    data => this.setState({user: {...this.state.user, emailId :data.target.value}})
                }/>
                </label>
                <input type="button" value="Enter" onClick={() => this.handleSubmit()}/>
            </form>
        )
    }

}

