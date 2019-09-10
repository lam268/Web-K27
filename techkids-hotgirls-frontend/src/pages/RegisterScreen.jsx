import React, { Component } from 'react';

class RegisterScreen extends Component {
    state = {
        email: "",
        fullname: "",
        password: "",
        confirm_password: "",
        errMessage: "",
    }

    handleemailChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            email: newValue,
            errMessage: "",
        });
    };

    handlefullnameChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            fullname: newValue,
            errMessage: "",
        });
    };

    handlePasswordChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            password: newValue,
            errMessage: "",
        })
    }

    handleConfirmPasswordChange = (event) => {
        const newValue = event.target.value;
        this.setState({
            confirm_password: newValue,
            errMessage: "",
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.email || !this.state.fullname || !this.state.password || !this.state.confirm_password) {
            this.setState({
                errMessage: "Invalid feedback"
            });
            return;
        }
        if (this.state.password !== this.state.confirm_password) {
            this.setState({
                errMessage: "Password and Confirm password must be the same"
            });
            return;
        }
        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email: this.state.email,
                fullName: this.state.fullname,
                password: this.state.password,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    console.log(data);
                    window.location.href = `/login`;
                }
                else {
                    this.setState({
                        errMessage: data.message,
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                window.alert(error.message);
            });
    }

    render() {
        return (
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form className="form"> 
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label><br></br>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                            value={this.state.email}
                                            onChange={this.handleemailChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fullname">Fullname:</label><br></br>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fullname"
                                            value={this.state.fullname}
                                            onChange={this.handlefullnameChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label><br></br>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                            autoComplete="off"
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Confirm Password:</label><br></br>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Confirm password"
                                            autoComplete="off"
                                            value={this.state.confirm_password}
                                            onChange={this.handleConfirmPasswordChange}></input>
                                    </div>
                                    {(!this.state.errMessage) ? <div></div> : <div className="alert alert-danger">{this.state.errMessage}</div>}
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary"
                                            onClick={this.handleSubmit}>Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default RegisterScreen;