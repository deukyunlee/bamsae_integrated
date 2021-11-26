import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Frame from './frame';
import Admin from './admin_/admin';

class Footer extends Component {
    render() {
        return (
            <footer class="ht-footer">
      <div class="container">
        <div class="flex-parent-ft">
          <div class="flex-child-ft item1">
            <a href="index.html"
              ><img
                width="500"
                class="logo"
                src="images/KakaoTalk_20211107_214306088_06.png"
                alt=""
            /></a>
            <table>
              <th style={{color: 'darkgray', width: "80"}}>회원약관</th>
              <th style={{color: 'darkgray', width: "80"}}>개인정보처리방침</th>
              <th style={{color: 'darkgray', width: "130"}}>이메일무단수집거부</th>
              <th style={{color: 'darkgray', width: "210"}}>
                영상정보처리기기 운영 및 관리방침
              </th>
              <th style={{color: 'darkgray', width: "80"}}>채용안내</th>
              <th style={{color: 'darkgray', width: "100"}}>광고/임대문의</th>
              <th style={{color: 'darkgray', width: "80"}}>윤리경영</th>
              <th style={{color: 'darkgray', width: "80"}}>기업정보</th>
            </table>

            <p>
              경기도 안산시 상록구<br />
              한양대학로 55
            </p>
            <p>고객센터: <a href="#">(031) 400 5114</a></p>
            <Link to="/admin">관리자 전용</Link>
          </div>
        </div>
      </div>
      <div class="ft-copyright">
        <div class="ft-left">
          <p>
            <a target="_blank" href="https://www.templateshub.net"
              >Templates Hub</a>
          </p>
        </div>
        <div class="backtotop">
          <p>
            <a href="#" id="back-to-top"
              >Back to top <i class="ion-ios-arrow-thin-up"></i></a>
          </p>
        </div>
      </div>
    </footer>
        );
    }
}

export default Footer;