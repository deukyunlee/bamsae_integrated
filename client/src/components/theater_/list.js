import React, { Component } from 'react';
import TheaterItem from './theater_item';

class List extends Component {
    countAll = () => {
		var keys = Object.keys(this.props.data);
		var sum = 0;
		for (const k of keys) {
			sum += this.props.data[k].length;
		}
		return sum;
	};

    render() {
        return (<div>
			<div class="hero common-hero">
	                <div class="container">
		                <div class="row">
			                <div class="col-md-12">
				                <div class="hero-ct">
					                <h1> 전체 극장</h1>
					                <ul class="breadcumb">
						                <li class="active"><a href="index.html">홈</a></li>
						                <li> <span class="ion-ios-arrow-right"></span> 전체 극장</li>
					                </ul>
				                </div>
			                </div>
		                </div>
	                </div>
                </div>
            <div class="page-single movie_list">
	    <div class="container">
		<div class="row ipad-width2">
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="topbar-filter">
					<p>전국 상영관 수 <span>{this.countAll()}</span> </p>
					<label>분류</label>
					<select
                        defaultValue="seoul"
                        onChange={function(e){
							this.props.handleFocus(e.target.value)
						}.bind(this)}
                    >
                            <option value="seoul">서울</option>
                            <option value="gyeonggi">경기</option>
                            <option value="incheon">인천</option>
                            <option value="gangwon">강원</option>
                            <option value="daegu">대구/충청/세종</option>
                            <option value="busan">부산/대구/경상</option>
                            <option value="gwanju">광주/전라</option>
					</select>
					<a href="movielist_light.html" class="list"><i class="ion-ios-list-outline active"></i></a>
					<a  href="moviegrid_light.html" class="grid"><i class="ion-grid"></i></a>
				</div>
				<TheaterItem data={this.props.data} focus={this.props.focus} handleChange={this.props.handleChange}></TheaterItem>
			</div>
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="sidebar">
					<div class="searh-form">
						<h4 class="sb-title">상영 정보 검색</h4>
						<form class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-12 form-it">
									<label>영화 이름</label>
									<input type="text" placeholder="영화 이름 입력"></input>
								</div>
								<div class="col-md-12 form-it">
									<label>지역 선택</label>
									<div class="group-ip">
										<select
											name="skills" multiple="" class="ui fluid dropdown">
											<option value="">--지역을 선택하세요--</option>
											<option value="seoul">서울</option>
											<option value="gyeonggi">경기</option>
											<option value="incheon">인천</option>
											<option value="gangwon">강원</option>
											<option value="daegu">대구/충청/세종</option>
											<option value="busan">부산/대구/경상</option>
											<option value="gwanju">광주/전라</option>
										</select>
									</div>
									
								</div>
								<div class="col-md-12 form-it">
									<label>영화관 선택</label>
									
									 <select>
									 	<option value="">-- 영화관을 선택하세요 --</option>
										<option value="range">강남점</option>
										<option value="saab">이태원점</option>
									</select>
									
								</div>
								<div class="col-md-12 form-it">
									<label>관람일 선택</label>
									<form>
										<p><input id="datefield" type="date"></input></p>
									</form>
								</div>
								<div class="col-md-12 ">
									<input class="submit" type="submit" value="submit"></input>
								</div>
							</div>
						</form>
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

export default List;