import React, { Component } from 'react';
import Seat_item from './seat_item';

class Row extends Component {
    iterseats() {
        var seats = [];
        for (var i=1; i<10; i++) {
            seats.push(<Seat_item key={String.fromCharCode(i+64) + this.props.row_no}
            seat_no={String.fromCharCode(i+64) + this.props.row_no}
            sendData={this.props.sendData}></Seat_item>)
        }
        return seats;
    }

    render() {
        return (
            <tr>{this.iterseats()}</tr>
        );
    }
}

export default Row;