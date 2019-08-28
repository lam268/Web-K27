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

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h2>Score keeper</h2>

                    <form className='mt-4 create-game-form'>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player1"
                                placeholder="Enter player name"
                                value={this.state.players1}
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
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player3"
                                placeholder="Enter player name"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control player4"
                                placeholder="Enter player name"
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