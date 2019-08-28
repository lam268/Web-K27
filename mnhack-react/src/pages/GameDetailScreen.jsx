import React, { Component } from 'react';

class GameDetailScreen extends Component {

    render() {
        return (
            <div className='container mt-5'>
                <table className="table">
                    <thead className='thead'></thead>
                    <tbody className='tbody'></tbody>
                </table>
                <button className='btn btn-primary add-round'>Add round</button>
            </div>
        );
    }
}

export default GameDetailScreen;
