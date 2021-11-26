import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div class="movie-item-style-2 movie-item-style-1">
                <img src="images/uploads/mv1.jpg" alt="" />
                <div class="hvr-inner">
                    <a href="moviesingle.html" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage("movie_detail");
                    }.bind(this)}>
                        예매하기 <i class="ion-android-arrow-dropright"></i>
                    </a>
                </div>
                <div class="mv-item-infor">
                    <h6><a href="#">{this.props.name}</a></h6>
                    <p class="rate">
                        <i class="ion-android-star"></i><span>{this.props.rate}</span> /10
                    </p>
                </div>
            </div>
        );
    }
}

export default MovieItem;