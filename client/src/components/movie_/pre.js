import React, { Component } from 'react';

class Pre extends Component {
    render() {
        return (
            <div>
               <div class="tab-content">
						        <div id="overview" class="tab active">
						            <div class="row">
						            	<div class="col-md-8 col-sm-12 col-xs-12">
						            		<div class="title-hd-sm">
												<h4>예고편/스틸컷</h4>
												<a href="#" class="time">All 5 Videos & 245 Photos <i class="ion-ios-arrow-right"></i></a>
											        </div>
											<div class="mvsingle-item ov-item">
												<a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src="images/uploads/image1.jpg" alt=""></img></a>
												<a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src="images/uploads/image2.jpg" alt=""></img></a>
												<a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src="images/uploads/image3.jpg" alt=""></img></a>
												<div class="vd-it">
													<img class="vd-img" src="images/uploads/image4.jpg" alt=""></img>
													<a class="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt=""></img></a>
												</div>
											</div>
						            	</div>
						            	<div class="col-md-4 col-xs-12 col-sm-12">
						            		<div class="sb-it">
						            			<h6>감독: </h6>
						            			<p><a href="#">클로이 자오</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>각본: </h6>
						            			<p><a href="#">매튜 K. 퍼포,</a> <a href="#">라이언 피르포</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>배우: </h6>
						            			<p><a href="#">안젤리나 졸리,</a> <a href="#">마동석,</a> <a href="#">리차드 매든,</a><a href="#"> 쿠마일 난지아니</a></p>
															<a href="#" class="time">더보기<i class="ion-ios-arrow-right"></i></a>
						            		</div>
						            		<div class="sb-it">
						            			<h6>장르:</h6>
						            			<p><a href="#">액션, </a> <a href="#"> 드라마,</a> <a href="#">판타지</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>개봉일:</h6>
						            			<p>2021년 11월 3일</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>상영시간:</h6>
						            			<p>155분</p>
						            		</div>
						            	</div>
						            </div>
						        </div>
						    </div>
            </div>
        );
    }
}

export default Pre;