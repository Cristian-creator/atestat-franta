import React, { Component } from 'react'
import header from '../../images/Belgium2.jpg';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <img className="image" src={header} alt="" /> */}
                <span>
                    <p> Belgia </p>
                </span>
            </div>
        )
    }
}
