import React, { Component } from 'react';

class Inquiry_item extends Component {
    render() {
        return (
            <tr>
                <td><a>{this.props.name}</a></td>
                <td>{this.props.date}</td>
                <td>미완료</td>
            </tr>
        );
    }
}

export default Inquiry_item;