import React, { Component } from 'react';

class CreateGameScreen extends Component {

    state = {
        player1: '',
        player2: '',
        player3: '',
        player4: '',
    }

    handleplayerchange = (playerNumber, value) => {
        const player = `player${playerNumber}`;
        this.setState({
            [player]: value,
        })
    }

    handleformsubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3001/create-game`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                users: [this.state.player1, this.state.player2, this.state.player3, this.state.player4],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.href = `games/${data.data._id}`
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
                window.alert(error.message)
            })
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h2>Score keeper</h2>

                    <form className='mt-4 create-game-form' onSubmit={this.handleformsubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player1"
                                placeholder="Enter player name"
                                value={this.state.player1}
                                onChange={(event) => {
                                    this.handleplayerchange(1, event.target.value)
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player2"
                                placeholder="Enter player name"
                                value={this.state.player2}
                                onChange={(event) => {
                                    this.handleplayerchange(2, event.target.value)
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player3"
                                placeholder="Enter player name"
                                value={this.state.player3}
                                onChange={(event) => {
                                    this.handleplayerchange(3, event.target.value)
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player4"
                                placeholder="Enter player name"
                                value={this.state.player4}
                                onChange={(event) => {
                                    this.handleplayerchange(4, event.target.value)
                                }}
                            />
                        </div>

                        <div className='error'></div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-primary submit"
                                value='Create Game'
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateGameScreen;