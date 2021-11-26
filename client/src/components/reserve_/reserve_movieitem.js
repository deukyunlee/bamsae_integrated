import React, { Component } from 'react';
import MovieItem_Check from './movieitem_check';

class Reserve_Movieitem extends Component {
    
    render() {
        return (
            <div class="movie-item-style-2 movie-item-style-1">
                <img src="images/uploads/mv1.jpg" alt="" />
                <div class="mv-item-infor">
                    <MovieItem_Check
                        id={this.props.id}
                        name={this.props.name}
                        addItem={this.props.addItem}
                        removeItem={this.props.removeItem}
                        />
                    <h6><a href="#">{this.props.name}</a></h6>
                </div>
            </div>
        );
    }
}

export default Reserve_Movieitem;