import React, { Component } from 'react'
import StyledCard from './StyledCard';
import './Card.css';

export default class Card extends Component {
    render() {
        const { title, image, subtitle, text } = this.props.item;
        return (
            <StyledCard image={image} className="card" >
                <div>
                    <h1> {title} </h1>
                    <h3> { subtitle && subtitle } </h3>
                    <p> {text} </p>
                </div>
            </StyledCard>
        )
    }
}
