import React, { Component } from 'react';

class Ticket extends Component {
  render() {
    return(
       <div class="tab-content">
                <div id="overview" class="tab active">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <h3>관람권</h3>
                                        <div class="flex-wrap-movielist mv-grid-fw">
                                            <div class="movie-item-style-2 movie-item-style-1">
                                                <img src="/images/006.png" alt=""/>
                                                <div class="hvr-inner">
                                                    <a
                                                        href="index.html"
                                                        onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeTab("single");
                                                        }.bind(this)}>
                                                        구매하기
                                                        <i class="ion-android-arrow-dropright"></i>
                                                    </a>
                                                </div>
                                                <div class="mv-item-infor">
                                                    <h6>
                                                        <a href="#">일반관람권</a>
                                                    </h6>
                                                    <span>일반관람권 1매</span>
                                                </div>
                                                <span>11000원</span>
                                            </div>
                                            <div class="movie-item-style-2 movie-item-style-1">
                                                <img src="/images/007.png" alt=""/>
                                                <div class="hvr-inner">
                                                    <a
                                                        href="index.html"
                                                        onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeTab("single");
                                                        }.bind(this)}>
                                                        구매하기
                                                        <i class="ion-android-arrow-dropright"></i>
                                                    </a>
                                                </div>
                                                <div class="mv-item-infor">
                                                    <h6>
                                                        <a href="#">일반관람권 1+1</a>
                                                    </h6>
                                                    <span>일반관람권 2매</span>
                                                </div>
                                                    <span>22000원</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }}

    export default Ticket;