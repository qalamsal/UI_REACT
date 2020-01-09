import React from 'react';

export default class extends React.Component {

    state = {
        "user": {
            "firstName":"",
            "lastName":"",
            "emailId":""
        },
        "isUpdate": false
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { user } = nextProps;
        if(user)
            this.setState({
                user: nextProps.user,
                isUpdate: true
            })
        else
            this.setState({
                "user": {
                    "firstName":"",
                    "lastName":"",
                    "emailId":""
                },
                "isUpdate": false
            });
    }

    handleSubmit = () => {
        const { isUpdate } = this.state;
        if(isUpdate)
            this.props.updateUser(this.state.user)
        else
            this.props.addUser(this.state.user);
    }

    render() {
        const { user, isUpdate } = this.state;
        return (
            <form>
                <label>
                    {"First Name:"} <input type="text" value={user.firstName} onChange={
                        data => this.setState({user: {...user, firstName :data.target.value}})
                    }/>
                </label>
                <label>
                    Last Name: <input type="text" value={user.lastName} onChange={
                    data => this.setState({user: {...user, lastName :data.target.value}})
                }/>
                </label>
                <label>
                    Email Id: <input type="text" value={user.emailId} onChange={
                    data => this.setState({user: {...user, emailId :data.target.value}})
                }/>
                </label>
                <input type="button" value={isUpdate ? "Update" : "Enter"} onClick={() => this.handleSubmit()}/>
            </form>
        )
    }

}

