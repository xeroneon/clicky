import React, { Component } from 'react';
import '../App.css';

class Score extends Component {
    render() {
        return (
            <div className="col s12 green-text">
                    <h1>Score: {this.props.score}</h1>
                    <h1>Top Score: {this.props.topScore}</h1>
            </div>
        );
    }
}

export default Score;