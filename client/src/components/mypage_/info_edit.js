import React, { Component } from 'react';

class Info_edit extends Component {
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
									<p><input></input></p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 form-it">
									<label>핸드폰 번호</label>
									<p><input></input></p>
								</div>
								<div class="col-md-6 form-it">
									<label>주소</label>
									<p><input type="text" id="address_kakao"></input></p>
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
                                            this.props.onChangeSection("view");
                                        }.bind(this)}
									></input>
								</div>
							</div>	
						</form>
					</div>
        );
    }
}

export default Info_edit;