import React, { Component } from "react"

class Review extends Component {
  render() {
    return (
      <div>
        <div class="tab-content">
          <div id="overview">
            <div class="row">
              <div class="col-md-8 col-sm-12 col-xs-12">
                <div class="title-hd-sm">
                  <h4>관람평</h4>
                  <a href="#" class="time">
                    56개의 리뷰가 더 있어요! <i class="ion-ios-arrow-right"></i>
                  </a>
                </div>
                <div class="mv-user-review-item">
                  <h3>마블덕후라면 꼭 봐야 하는 영화!</h3>
                  <div class="no-star">
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star last"></i>
                  </div>
                  <p class="time">
                    2021년 11월 17일 <a href="#"> 밤새냥 </a>
                  </p>
                  <p>
                    믿고 보는 마블~ 넘넘 재밌어용~
                  </p>
                </div>
                <br />
                <div class="mv-user-review-item">
                  <h3>마동석 최고</h3>
                  <div class="no-star">
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star"></i>
                    <i class="ion-android-star last"></i>
                  </div>
                  <p class="time">
                    2021년 11월 19일 <a href="#"> 밤새봇 </a>
                  </p>
                  <p>
                     마블의 새로운 시작을 알리다! 다양한 정체성을 지닌 캐릭터들을 보는 것만으로도 눈과 마음이 즐겁고, 앞으로 이들이 펼쳐나갈 이야기가 궁금해진다. 
                  </p>
                  
                </div>
              </div>
              <div class="col-md-4 col-xs-12 col-sm-12">
                <div class="sb-it">
                  <h6>감독: </h6>
                  <p>
                    <a href="#">클로이 자오</a>
                  </p>
                </div>
                <div class="sb-it">
                  <h6>각본: </h6>
                  <p>
                    <a href="#">매튜 K. 퍼포,</a> <a href="#">라이언 피르포</a>
                  </p>
                </div>
                <div class="sb-it">
                  <h6>배우: </h6>
                  <p>
                    <a href="#">안젤리나 졸리,</a> <a href="#">마동석,</a> <a href="#">리차드 매든,</a>
                    <a href="#"> 쿠마일 난지아니</a>
                  </p>
                  <a href="#" class="time">
                    더보기<i class="ion-ios-arrow-right"></i>
                  </a>
                </div>
                <div class="sb-it">
                  <h6>장르:</h6>
                  <p>
                    <a href="#">액션, </a> <a href="#"> 드라마,</a> <a href="#">판타지</a>
                  </p>
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
    )
  }
}

export default Review
