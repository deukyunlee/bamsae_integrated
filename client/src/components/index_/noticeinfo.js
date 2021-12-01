import React, { Component } from "react"

class NoticeInfo extends Component {
  render() {
    return (
      <div class="col-md-8">
        <div class="title-hd">
          <h2>공지사항</h2>
        </div>
        <div class="tabs">
          <ul class="tab-links">
            <li class="active">
              <a href="#tab1">전체 공지</a>
            </li>
            <li>
              <a href="#tab2"> 극장 공지</a>
            </li>
          </ul>
          <div class="event-table">
            <table class="t">
              <th>번호</th>
              <th>극장</th>
              <th>구분</th>
              <th>제목</th>
              <th>등록일</th>
              <tr>
                <td>1</td>
                <td>강남</td>
                <td>극장</td>
                <td>극장 이용가능 시간 안내</td>
                <td>2021.11.8</td>
              </tr>
              <tr>
                <td>2</td>
                <td>부산</td>
                <td>극장</td>
                <td>휴점 안내</td>
                <td>2021.11.15</td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td>전체</td>
                <td>방역지침 관련 안내드립니다.</td>
                <td>2021.11.21</td>
              </tr>
              <tr>
                <td>4</td>
                <td>광교</td>
                <td>극장</td>
                <td>광교 개점 이벤트</td>
                <td>2021.12.2</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="tab-content">
          <div class="tabs">
            <ul class="tab-links-3">
              <li class="active">
                <a href="#tab31">#Movies </a>
              </li>
              <li>
                <a href="#tab32"> #TV Shows </a>
              </li>
              <li>
                <a href="#tab33"> # Celebs</a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="tab31" class="tab active">
                <div class="row">
                  <div class="blog-item-style-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoticeInfo
