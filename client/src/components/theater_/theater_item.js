import React, { Component } from 'react';
import axios from 'axios';

class TheaterItem extends Component {
    render() {
        var data = this.props.data; // array [{}, {}, {}, ...]
        var focus = this.props.focus; // String Code like "SE"
        var view = [];
        for (const item of data) {
            if (item.theater_id.substr(0, 2) === focus)
                view.push(item);
        }
        if (typeof view == "undefined" || view.length === 0)
            return (<div>영화관이 존재하지 않습니다.</div>);
        var i = 0;
        var lists = [];
        while(i < view.length) {
            lists.push(
            <div class="movie-item-style-2">
                <img src="images/ex.png" alt=""></img>
                <div class="mv-item-infor">
                    <h6><a id={view[i].theater_id} href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.handleChange("detail", e.target.id);
                        window.scrollTo(0, 0);
                    }.bind(this)}>{view[i].theater_name}</a></h6>
                    <p class="describe">{view[i].theater_info}</p>
                    <p class="seats">{view[i].theater_seatnum} 석</p>
                </div>
			</div>
            )
            i++;
        }
        return (
            <div class="theater-items">
                {lists}
            </div>
        );
    }
}

export default TheaterItem;