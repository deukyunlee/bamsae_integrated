import React, { Component } from 'react';
import Mp_Content from './mypage_/mp_content';

class MyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			section: "info",
			mode: "view"
		}
	}

    render() {
        return (<div>
            <div class="hero user-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1>이동호 님의 프로필</h1>
					<ul class="breadcumb">
						<li>Lv.1</li>
                        <li><progress title="결제 금액 : 50000/150000" class="membership_exp" value="50000" max="150000"></progress></li>
						<li> <span class="ion-ios-arrow-right"></span>Lv.2</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="buster-light">
<div class="page-single">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-3 col-sm-12 col-xs-12">
				<div class="user-information">
					<div class="user-img">
						<a href="#"><img src="images/uploads/user-img.png" alt=""></img><br></br></a>
						<a href="#" class="redbtn">프로필 변경</a>
					</div>
					<div class="user-fav">
						<p>기본 정보</p>
						<ul>
							<li><a href="#" onClick={function(e) {
								e.preventDefault();
								this.setState({
									section: "info",
									mode: "view",
								})
							}.bind(this)}>고객 정보</a>
							</li>
							<li><a href="userfavoritelist.html" onClick={function(e){
								e.preventDefault();
								this.setState({
									section: "reserve_info",
									mode: "view",
								})
							}.bind(this)}>예매 내역</a></li>
							<li><a href="userrate.html">MY 무비 로그</a></li>
							<li><a href="#" onClick={function(e){
								e.preventDefault();
								this.setState({
									section: "review_info",
									mode: "view",
								})
							}.bind(this)}>리뷰/평점 관리</a></li>
							<li><a href="userrate.html" onClick={function(e){
								e.preventDefault();
								this.setState({
									section: "1:1",
									mode: "view",
								})
							}.bind(this)}>1:1 문의</a></li>
						</ul>
					</div>
					<div class="user-fav">
						<p>계정 관리</p>
						<ul>
							<li><a href="#" onClick={function(e) {
								e.preventDefault();
								this.setState({
									section: "change_pw",
									mode: "view",
								})
							}.bind(this)}>비밀번호 변경</a></li>
							<li><a href="#">회원탈퇴</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-9 col-sm-12 col-xs-12">
				<Mp_Content
					section={this.state.section}
					mode={this.state.mode}
					onChangeSection={function(code){
                		this.setState({
                    		mode: code,
                		});
            		}.bind(this)}
				></Mp_Content>
			</div>
		</div>
	</div>
</div>
</div>
</div>
        );
    }
}

export default MyPage;