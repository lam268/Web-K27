import React, { Component } from 'react';

class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        errMessage: "",
    };

    handleemailchange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlepasschange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleonSubmit = (event) => {
        event.preventDefault();
        if (!this.state.username || !this.state.password) {
            this.setState({
              fail_message: "Please fill it all"
            });
            return;
          }
          fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include' ,
            body: JSON.stringify({
              email: this.state.username,
              password: this.state.password,
            }),
          })
            .then((response) => {
              // response.json() only when server reponse with json
              // response.text() only when server response with string
              return response.json();
            })
            .then((data) => {
              if (data.success) {
                window.location.href = `/curren-user`;
              }
              else {
                console.log(data);
                this.setState({
                  fail_message: data.message,
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
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 pt-4">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={this.state.email} onChange={this.handleemailchange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handlepasschange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        {this.state.errMessage ? (
                            <div class="invalid-feedback">
                                {this.state.errMessage}
                            </div>
                        ) : null}
                        <button onSubmit={this.handleonSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-3'></div>
            </div>
        );
    }
}

export default LoginScreen;