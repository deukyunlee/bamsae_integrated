import React, { Component } from 'react';

class Seat_item extends Component {
    sendData() {
        this.props.sendData(this.props.seat_no);
    }

    render() {
        return (
            <td onMouseOver={function(e){
                e.target.style.color = 'red';   
            }}
            onMouseOut={function(e){
                e.target.style.color = 'black';
            }}
            onClick={function(e){
                e.target.style.backgroundColor = "#cad6e3";
                this.sendData();
            }.bind(this)}
            id={this.props.seat_no} style={{textAlign: "center", padding:15,}}>{this.props.seat_no}</td>
        );
    }
}

export default Seat_item;