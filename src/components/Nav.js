import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue">
                    <a href="" className="brand-logo center">League Of Clicks</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;