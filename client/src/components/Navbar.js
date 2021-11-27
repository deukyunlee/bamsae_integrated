import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-custom">
            <div
              class="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav flex-child-menu menu-left">
                <li class="hidden">
                              <a href="#page-top"></a>
                          </li>
                <li>
                  <a href="index.html"
                  onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("main");
                    window.location.reload(false);
                    window.scrollTo(0, 0);
                  }.bind(this)}>홈</a>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("movie");
                          window.scrollTo(0, 0);
                    }.bind(this)}
                  >
                    영화
                  </a>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("reserve");
                          window.scrollTo(0, 0);
                    }.bind(this)}
                  >
                    예매
                  </a>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("theater");
                          window.scrollTo(0, 0);
                    }.bind(this)}
                  >극장
                  </a>
                </li>
                <li class="dropdown first">
                <a 
                class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("store");
                    window.scrollTo(0, 0);
                  }.bind(this)}>
                    스토어</a>
                </li>
              </ul>
              <ul class="nav navbar-nav flex-child-menu menu-left">
                <div
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <div id="nav-icon1"></div>
                </div>
                <a href="/"
                  ><img
                    class="logo"
                    src="images/KakaoTalk_20211107_214306088_06.png"
                    alt=""
                    width="140"
                    height="68"
                    
                /></a>
              </ul>
              <ul class="nav navbar-nav flex-child-menu menu-right">
                <li><a 
                onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("service");
                          window.scrollTo(0, 0);
                    }.bind(this)}>고객센터</a></li>
                { this.props.is_logined
                ? <li class="mypagelink">
                  <a 
                    class="username"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage("mypage");
                        window.scrollTo(0, 0);
                    }.bind(this)}>{this.props.username} 님</a></li>
                : <li class="loginLink"><a
                onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("login");
                          window.scrollTo(0, 0);
                    }.bind(this)}>로그인</a></li>}
                { this.props.is_logined
                ? <li class="btn signupLink"><a href="#" onClick={function(e){
                  e.preventDefault();
                  this.props.logout();
                  this.props.onChangePage("main");
                  window.location.reload(false);
                  window.scrollTo(0, 0);
                }.bind(this)}>로그아웃</a></li>
                : <li class="btn signupLink"><a 
                onClick={function(e){
                          e.preventDefault();
                          this.props.onChangePage("signup");
                          window.scrollTo(0, 0);
                    }.bind(this)}>회원가입</a></li>}
              </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;