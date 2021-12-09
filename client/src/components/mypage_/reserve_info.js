import React, { Component } from "react"
import axios from "axios"

class Reserve_info extends Component {
  getHistory = async () => {
    const reservation = await axios.get("http://localhost:5000/reservation/history?mem_name='홍길동'")
    console.log(reservation.data.data)
  }
  componentDidMount() {
    this.getHistory()
  }
  render() {
    return (
      <div class="col-md-9 col-sm-12 col-xs-12">
        <h4>예매 내역 조회</h4>
        <br />
        <p>최근 30일</p>
        <div class="flex-wrap-movielist grid-fav">
          <div class="movie-item-style-2 movie-item-style-1 style-3">
            <img src="images/uploads/mv-item1.jpg" alt=""></img>
            <div class="hvr-inner">
              <a href="moviesingle.html">
                {" "}
                예매 취소 <i class="ion-android-arrow-dropright"></i>{" "}
              </a>
            </div>
            <div class="mv-item-infor">
              <h6>
                <a href="moviesingle.html">유체이탈자</a>
              </h6>
            </div>
            <div class="reserve_info">
              <h7>2021-12-21</h7>
              <p>성인 2명 청소년 1명</p>
              <p>안산점 4관 C4 C5 C6</p>
            </div>
          </div>
          <div class="movie-item-style-2 movie-item-style-1 style-3">
            <img src="images/uploads/mv-item2.jpg" alt=""></img>
            <div class="hvr-inner">
              <a href="moviesingle.html">
                {" "}
                리뷰 쓰기 <i class="ion-android-arrow-dropright"></i>{" "}
              </a>
            </div>
            <div class="mv-item-infor">
              <h6>
                <a href="moviesingle.html">이터널스</a>
              </h6>
            </div>
            <div class="reserve_info">
              <h7>2021-12-5</h7>
              <p>성인 1명</p>
              <p>초지점 11관 J2</p>
            </div>
          </div>
          <div class="movie-item-style-2 movie-item-style-1 style-3">
            <img src="images/uploads/mv-item3.jpg" alt=""></img>
            <div class="hvr-inner">
              <a href="moviesingle.html">
                {" "}
                리뷰 쓰기 <i class="ion-android-arrow-dropright"></i>{" "}
              </a>
            </div>
            <div class="mv-item-infor">
              <h6>
                <a href="moviesingle.html">엔칸토:마법의세계</a>
              </h6>
            </div>
            <div class="reserve_info">
              <h7>2021-11-21</h7>
              <p>성인 3명</p>
              <p>강남점 2관 F4 F5 F6</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Reserve_info
