import React, { Component } from 'react';

class Product extends Component {
  render() {
    return(
       <div class="tab-content">
                <div id="overview" class="tab active">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <h3>상품</h3>
                                        <div class="flex-wrap-movielist mv-grid-fw">
                                            <div class="movie-item-style-2 movie-item-style-1">
                                                <img src="/images/001.png" alt=""/>
                                                <div class="hvr-inner">
                                                    <a
                                                        href="index.html"
                                                        onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeDetail();
                                                        }.bind(this)}>
                                                        상세정보
                                                        <i class="ion-android-arrow-dropright"></i>
                                                    </a>
                                                </div>
                                                <div class="mv-item-infor">
                                                    <h6>
                                                        <a href="#">싱글패키지</a>
                                                    </h6>
                                                    <span>팝콘(L) 1 + 탄산음료(R) 2 + 관람권 2매 </span>
                                                </div>
                                                <span>18000원</span>
                                            </div>
                                            <div class="movie-item-style-2 movie-item-style-1">
                                                <img src="/images/004.png" alt=""/>
                                                <div class="hvr-inner">
                                                    <a
                                                        href="index.html"
                                                        onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeDetail();
                                                        }.bind(this)}>
                                                        상세정보
                                                        <i class="ion-android-arrow-dropright"></i>
                                                    </a>
                                                </div>
                                                <div class="mv-item-infor">
                                                    <h6>
                                                        <a href="#">더블패키지</a>
                                                    </h6>
                                                    <span>팝콘(L) 2 + 탄산음료(R) 2 + 관람권 2매</span>
                                                </div>
                                                <span>23000원</span>
                                            </div>
                                            <div class="movie-item-style-2 movie-item-style-1">
                                                <img src="/images/008.png" alt=""/>
                                                <div class="hvr-inner">
                                                    <a
                                                        href="index.html"
                                                        onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeDetail();
                                                        }.bind(this)}>
                                                        상세정보
                                                        <i class="ion-android-arrow-dropright"></i>
                                                    </a>
                                                </div>
                                                <div class="mv-item-infor">
                                                    <h6>
                                                        <a href="#">패밀리패키지</a>
                                                    </h6>
                                                    <span>팝콘(L) 2 + 탄산음료(R) 2 + 관람권 3매</span>
                                                </div>
                                                <span>30000원</span>
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

    export default Product;