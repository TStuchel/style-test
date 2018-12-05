import React, { Component } from 'react';
import glamorous from 'glamorous';
import './Card.scss'

const CardFrame = glamorous.div((props) => ({
    position: 'absolute',
    display: 'flex',
    height: '200px',
    width: '150px',
    verticalAlign: 'middle',
    color: 'white',
    borderRadius: '10px',
    margin: 'auto',
    cursor: 'pointer',
    userSelect: 'none',
    border: '2px solid',

    borderColor: props.isHeld ? 'black' :  props.background,
    background: props.background,
    zIndex: props.isHeld ? 1000 : 0,
    top: props.y,
    left: props.x,
}))

const CardText = glamorous.p({
    margin: 'auto'
})

export default class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            x: props.x,
            y: props.y,
            isHeld: false
        }
    }

    handleMouseDown = (event) => {
        this.setState({
            holdX: event.clientX - this.state.x,
            holdY: event.clientY - this.state.y,
            isHeld: true
        })
    }

    handleMouseUp = (event) => {
        this.setState({ isHeld: false })
    }

    handleMouseMove = (event) => {
        if (this.state.isHeld) {
            this.setState({ 
                x: event.clientX - this.state.holdX,
                y: event.clientY - this.state.holdY
            })
        }
    }

    render() {
        return (
            <CardFrame className="cardFrame" background={this.props.background} x={this.state.x} y={this.state.y} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} isHeld={this.state.isHeld}>
                <CardText>
                    {this.props.text}
                </CardText>
            </CardFrame>
        )
    }
}