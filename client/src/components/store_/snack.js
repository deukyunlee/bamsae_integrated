import React, {Component} from 'react';

class Snack extends Component {
    render() {
            return (
                <div class="tab-content">
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>팝콘/음료</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw">
                                                <div class="movie-item-style-2 movie-item-style-1">
                                                    <img src="/images/003.png" alt=""/>
                                                    <div class="hvr-inner">
                                                        <a
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
                                                            <a href="#">싱글콤보</a>
                                                        </h6>
                                                        <span>팝콘(L) 1 + 탄산음료(R) 2</span>
                                                    </div>
                                                    <span>9000원</span>
                                                </div>
                                                <div class="movie-item-style-2 movie-item-style-1">
                                                    <img src="/images/005.png" alt=""/>
                                                    <div class="hvr-inner">
                                                        <a
                                                            onClick={function (e) {
                                                                e.preventDefault();
                                                                this
                                                                    .props
                                                                    .onChangeTab("double");
                                                            }.bind(this)}>
                                                            구매하기
                                                            <i class="ion-android-arrow-dropright"></i>
                                                        </a>
                                                    </div>
                                                    <div class="mv-item-infor">
                                                        <h6>
                                                            <a href="#">더블콤보</a>
                                                        </h6>
                                                        <span>팝콘(L) 2 + 탄산음료(R) 2</span>
                                                    </div>
                                                    <span>12000원</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default Snack;