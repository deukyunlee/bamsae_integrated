import React, { Component } from 'react';
import Reserve_Movieitem from './reserve_movieitem';

class Reserve_Moviegrid extends Component {
    render() {
        var data = this.props.data; // array
        var i = 0;
        var arr = [];
        if (data.length === 0 || typeof data == "undefined")
            return (<div class="flex-wrap-movielist mv-grid-fw">영화가 존재하지 않습니다.</div>);
        while (i < data.length) {
            arr.push(<Reserve_Movieitem
                id={data[i].id}
                name={data[i].name}
                addItem={this.props.addItem}
                removeItem={this.props.removeItem}
                ></Reserve_Movieitem>)
            i++;
        }
        return (
            <div class="flex-wrap-movielist mv-grid-fw">
                {arr}
            </div>
        );
    }
}

export default Reserve_Moviegrid;