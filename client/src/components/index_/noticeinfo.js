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
              <a href="#tab2"> 극장별 공지</a>
            </li>
          </ul>
          <div class="event-table">
          <table class="table" style={{ color: "white"}}>
              <thead>
                <tr>
                  <th style={{textAlign:"center" }}>공지번호</th>
                  <th>        구분</th>
                  <th style={{width:"300px",textAlign:"center"}}>제목</th>
                  <th style={{textAlign:"center" }}>등록일</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{textAlign:"center" }}>1</td>
                  <td>
                    <button class="btn btn-primary btn-sm">전체</button>
                  </td>
                  <td style={{textAlign:"center" }}>극장 이용가능 시간 안내</td>
                  <td>
                    <span class="active-circle bg-success"></span> 2021.11.08
                  </td>
                  <td>
                    <div class="dropdown ">
                      <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="triggerId1">
                        <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                        <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td style={{textAlign:"center" }}>2</td>
                  <td>
                    <button class="btn btn-secondary btn-sm">극장</button>
                  </td>
                  <td style={{textAlign:"center" }}>휴점 안내</td>
                  <td>
                    <span class="active-circle bg-success"></span> 2021.10.03
                  </td>
                  <td>
                    <div class="dropdown ">
                      <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="triggerId1">
                        <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                        <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td style={{textAlign:"center" }}>3</td>
                  <td>
                    <button class="btn btn-primary btn-sm">전체</button>
                  </td>
                  <td style={{textAlign:"center" }}>방역지침 관련 안내드립니다.</td>
                  <td>
                    <span class="active-circle bg-success"></span> 2021.11.21
                  </td>
                  <td>
                    <div class="dropdown ">
                      <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="triggerId1">
                        <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                        <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td style={{textAlign:"center" }}>4</td>
                  <td>
                    <button class="btn btn-primary btn-sm">전체</button>
                  </td>
                  <td style={{textAlign:"center" }}>극장 이용가능 시간 안내</td>
                  <td>
                    <span class="active-circle bg-success"></span> 2021.11.08
                  </td>
                  <td>
                    <div class="dropdown ">
                      <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="triggerId1">
                        <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                        <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td style={{textAlign:"center" }}>5</td>
                  <td>
                    <button class="btn btn-primary btn-sm">전체</button>
                  </td>
                  <td style={{textAlign:"center" }}>극장 이용가능 시간 안내</td>
                  <td>
                    <span class="active-circle bg-success"></span> 2021.11.08
                  </td>
                  <td>
                    <div class="dropdown ">
                      <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="triggerId1">
                        <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                        <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>

                </tr>
              </tbody>
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
