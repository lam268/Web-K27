import React, { Component } from 'react';

class UserScreen extends Component {
    state = {
        signin: false,
        email: "",
        fullname: "",
    }

    componentWillMount() {
        fetch(`http://localhost:3001/users/test`, { credentials: 'include' })
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                if (data.data) {
                    this.setState({
                        email: data.data.email,
                        fullname: data.data.fullName,
                        signin: true,
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>Welcome</div>
        );
    }
}

export default UserScreen;