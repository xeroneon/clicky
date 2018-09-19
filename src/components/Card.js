import React, { Component } from 'react';
import '../App.css';

class Card extends Component {

    state = {
        isClicked: false
    }

    // handleClick = () => {
    //     this.setState({
    //         isClicked: true
    //     })

    //     this.props.handleClick
    // }

    render() {
        return (
            <div className="col s3 m2" onClick={() => this.props.onClick()}>
                <div className="card">
                    <div className="card-image">
                        <img src={`/images/${this.props.src}.png`} />
                        <span className="card-title">{this.props.children}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;