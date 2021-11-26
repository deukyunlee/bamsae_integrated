import React, { Component } from 'react';

class TheaterItem extends Component {
    render() {
        var data = this.props.data; // object
        var focus = this.props.focus; // String
        var view = data[focus]; // array
        if (typeof view == "undefined")
            return (<div>영화관이 존재하지 않습니다.</div>);
        var i = 0;
        var lists = [];
        while(i < view.length) {
            lists.push(
            <div class="movie-item-style-2">
                <img src="images/uploads/mv1.jpg" alt=""></img>
                <div class="mv-item-infor">
                    <h6><a href="moviesingle_light.html" onClick={function(e){
                        e.preventDefault();
                        this.props.handleChange("detail");
                    }.bind(this)}>{view[i].name}</a></h6>
                    <p class="describe">{view[i].desc}</p>
                    <p class="seats">{view[i].seat} 석</p>
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