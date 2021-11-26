import React, { Component } from 'react';

class Reserve_info extends Component {
    render() {
        return (
            <div class="col-md-9 col-sm-12 col-xs-12">
				<h4>예매 내역 조회</h4><br/><p>최근 30일</p>
				<div class="flex-wrap-movielist grid-fav">
						<div class="movie-item-style-2 movie-item-style-1 style-3">
							<img src="images/uploads/mv1.jpg" alt=""></img>
							<div class="hvr-inner">
	            				<a  href="moviesingle.html"> 예매 취소 <i class="ion-android-arrow-dropright"></i> </a>
	            			</div>
							<div class="mv-item-infor">
								<h6><a href="moviesingle.html">oblivion</a></h6>
							</div>
                            <div class="reserve_info">
                                <h7>2021-11-23</h7>
                                <p>성인 3명</p>
                                <p>C4 C5 C6</p>
                            </div>
						</div>					
						<div class="movie-item-style-2 movie-item-style-1 style-3">
							<img src="images/uploads/mv2.jpg" alt=""></img>
							<div class="hvr-inner">
	            				<a  href="moviesingle.html"> 리뷰 쓰기 <i class="ion-android-arrow-dropright"></i> </a>
	            			</div>
							<div class="mv-item-infor">
								<h6><a href="moviesingle.html">into the wild</a></h6>
							</div>
                            <div class="reserve_info">
                                <h7>2021-11-22</h7>
                                <p>성인 3명</p>
                                <p>C4 C5 C6</p>
                            </div>
						</div>					
						<div class="movie-item-style-2 movie-item-style-1 style-3">
	            			<img src="images/uploads/mv-item3.jpg" alt=""></img>
	            			<div class="hvr-inner">
	            				<a  href="moviesingle.html"> 리뷰 쓰기 <i class="ion-android-arrow-dropright"></i> </a>
	            			</div>
	            			<div class="mv-item-infor">
	            				<h6><a href="moviesingle.html">Die hard</a></h6>
	            			</div>
                            <div class="reserve_info">
                                <h7>2021-11-21</h7>
                                <p>성인 3명</p>
                                <p>C4 C5 C6</p>
                            </div>
	            		</div>
				</div>		
			</div>
        )
    }
}

export default Reserve_info;