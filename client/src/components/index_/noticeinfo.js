import React, { Component } from 'react';

class NoticeInfo extends Component {
    render() {
        return (
            <div class="col-md-8">
                
                <div class="title-hd">
                  <h2>공지사항</h2>
                </div>
                <div class="tabs">
                  <ul class="tab-links">
                    <li class="active"><a href="#tab1">전체공지</a></li>
                    <li><a href="#tab2"> 극장공지</a></li>
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
                            <td>공지</td>
                            <td>극장이용안내</td>
                            <td>2021.11.8</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>강남</td>
                            <td>공지</td>
                            <td>극장이용안내</td>
                            <td>2021.11.8</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>강남</td>
                            <td>공지</td>
                            <td>극장이용안내</td>
                            <td>2021.11.8</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>강남</td>
                            <td>공지</td>
                            <td>극장이용안내</td>
                            <td>2021.11.8</td>
                          </tr>
                      </table>
                    </div>

                  </div>
                  <div class="tab-content">
                <div class="tabs">
                  <ul class="tab-links-3">
                    <li class="active"><a href="#tab31">#Movies </a></li>
                    <li><a href="#tab32"> #TV Shows </a></li>
                    <li><a href="#tab33"> # Celebs</a></li>
                  </ul>
                  <div class="tab-content">
                    <div id="tab31" class="tab active">
                      <div class="row">
                        <div class="blog-item-style-1">
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

export default NoticeInfo;