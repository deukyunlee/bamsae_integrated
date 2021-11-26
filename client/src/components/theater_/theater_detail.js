import React, { Component } from 'react';
import Pick_date from './datepicker';

class Theater_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_date : new Date(),
        }
    }

    render() {
        return (
            <div class="buster-light">
<div class="hero mv-single-hero">
</div>
<div class="page-single movie-single movie_single">
	<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img src="images/ex.png" alt=""></img>
					<div class="movie-btn">	
					</div>
				</div>
			</div>
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">강남점</h1>
					<div class="social-btn">
						<a href="#" class="parent-btn"><i class="ion-heart"></i>관심 극장에 추가</a>
						<div class="hover-bnt">
							<a href="#" class="parent-btn"><i class="ion-android-share-alt"></i>공유하기</a>
							<div class="hvr-item">
								<a href="#" class="hvr-grow"><i class="ion-social-facebook"></i></a>
								<a href="#" class="hvr-grow"><i class="ion-social-twitter"></i></a>
								<a href="#" class="hvr-grow"><i class="ion-social-googleplus"></i></a>
								<a href="#" class="hvr-grow"><i class="ion-social-youtube"></i></a>
							</div>
						</div>		
					</div>
					<div class="movie-tabs">
						<div class="tabs">
							<ul class="tab-links tabs-mv">
								
                                    <br/><br/><br/>
                                    <li><a href="#">상영시간표</a></li>
                                    <li><a href="#">이벤트</a></li>
                                    <li><a href="#">공지사항</a></li>
							</ul>
						</div>
					</div>
                    <div class="tab-content">
						        <div class="tab-content">
						        <br/><br/>
						        <div id="reviews" class="tab review">
						           <div class="row">
						            	<div class="rv-hd">
						            		<div class="div">
							            		<h3>강남점</h3>
						       	 				<h2>상영시간표</h2>
							            	</div>
						            	</div>
						            	<div class="topbar-filter">
                                            <p>최대 30일 이후의 상영정보까지 예매 가능합니다.</p>
											<label>상영일 선택</label>
                                            <Pick_date onChange={function(date){
												this.setState({
													selected_date : date,
												})
											}.bind(this)}/>
										</div>
										<div class="mv-user-review-item">
											<div class="user-infor">
												<div>
													<h3>{this.state.selected_date.getFullYear()}년
													{this.state.selected_date.getMonth()+1}월
													{this.state.selected_date.getDate()}일의 상영정보</h3>										
												</div>
											</div>
											<div class="schedule">
												<p>Movie item goes here</p>
											</div>
										</div>
						            </div>
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

export default Theater_detail;