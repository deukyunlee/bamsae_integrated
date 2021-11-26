import React, { Component } from 'react';

class Info_view extends Component {
    render() {
        return (
            <div class="form-style-1 user-pro" action="#">
						<form action="#" class="user">
							<h4>고객정보</h4>
							<div class="row">
								<div class="col-md-6 form-it">
									<label>성명</label>
									<p>이동호</p>
								</div>
								<div class="col-md-6 form-it">
									<label>이메일 주소</label>
									<p>dhlee@hanyang.ac.kr</p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 form-it">
									<label>핸드폰 번호</label>
									<p>010-1234-5678</p>
								</div>
								<div class="col-md-6 form-it">
									<label>주소</label>
									<p>경기도 안산시 상록구 한양대학로 55</p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-2">
									<input
                                        class="submit"
                                        type="submit"
                                        value="수정"
                                        onClick={function(e){
                                            e.preventDefault();
                                            this.props.onChangeSection("edit");
                                        }.bind(this)}
                                    ></input>
								</div>
							</div>	
						</form>
					</div>
        );
    }
}

export default Info_view;