import React, { Component } from "react"

class Review_info extends Component {
    render() {
        return (
            <div class="col-md-9 col-sm-12 col-xs-12">
				<div class="topbar-filter">
					<p>내가 쓴 리뷰 <span>3 </span> 개</p>
					<label>정렬:</label>
					<select>
						<option value="range">평점순</option>
						<option value="saab">관람일순</option>
					</select>
				</div>
				<div class="movie-item-style-2 userrate">
					<img src="images/uploads/mv1.jpg" alt=""></img>
					<div class="mv-item-infor">
						<h6><a href="#">오블리비언 <span>(2013)</span></a></h6>
						<p class="time sm-text">내가 준 평점:</p>
						<p class="rate"><i class="ion-android-star"></i><span>9.0</span> /10</p>
						<p class="time sm-text">내가 쓴 리뷰:</p>
						<br></br><h6>화려한 비주얼과 음모론 그리고 톰크루즈</h6>
						<p class="time sm">02 April 2017</p>
						<p>“지구에 동료와 둘만 남아 지구를 지키는 남자 톰크루즈라는 설정이 정말 흥미롭습니다. 초반이 거의 지루함 없이 전개가 되고, 화려한 영상미가 돋보입니다.”</p>		
					</div>
				</div>
				<div class="movie-item-style-2 userrate">
					<img src="images/uploads/mv2.jpg" alt=""></img>
					<div class="mv-item-infor">
						<h6><a href="#">인투 더 와일드 <span>(2015)</span></a></h6>
						<p class="time sm-text">내가 준 평점:</p>
						<p class="rate"><i class="ion-android-star"></i><span>7.0</span> /10</p>				
					</div>
				</div>
				<div class="movie-item-style-2 userrate last">
					<img src="images/uploads/mv3.jpg" alt=""></img>
					<div class="mv-item-infor">
						<h6><a href="#">블레이드 러너 2049 <span>(2017)</span></a></h6>
						<p class="time sm-text">내가 준 평점:</p>
						<p class="rate"><i class="ion-android-star"></i><span>10.0</span> /10</p>	
						<p class="time sm-text">내가 쓴 리뷰:</p>
						<br></br><h6>전작을 뛰어넘는 속편</h6>
						<p class="time sm">01 February 2017</p>
						<p>“요즘 유행하는 빠른 템포의 영화가 아니라 러닝시간이 매우 긴 영화입니다. 그래서 좋은 평을 듣기엔 어려울 수 있으나 저는 정말 재밌게 보았습니다.”</p>				
					</div>
				</div>
				<div class="topbar-filter">
					<label>한 페이지당 출력:</label>
					<select>
						<option value="range">영화 20개</option>
						<option value="saab">영화 10개</option>
					</select>
					<div class="pagination2">
						<span>1 of 1:</span>
						<a class="active" href="#">1</a>
						<a href="#"><i class="ion-arrow-right-b"></i></a>
					</div>
				</div>
			</div>
        );
    }
}

export default Review_info
