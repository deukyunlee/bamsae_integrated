<<<<<<< Updated upstream
import React, { Component } from "react"

class Info_edit extends Component {
=======
<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios'

class Info_edit extends Component {
    render() {
        return (
            <div class="form-style-1 user-pro" action="#">
						<form action="#" class="user">
							<h4>고객정보</h4>
									
							
					<div class="row">
						<div class="col-md-6 form-it">
							<label>이메일 주소</label>
							<p><input id="mem_id"></input></p>
						</div>
								<div class="col-md-6 form-it" id="mem_phone">
									<label>핸드폰 번호</label>
									<p><input id="mem_phone"></input></p>
								</div>
								<div class="col-md-6 form-it">
									<label>주소</label>
									<p><input type="text" id="city"></input></p>
						</div>
						<div class="col-md-6 form-it">
							<label>상세 주소</label>
							<p><input type="text" id="address"></input></p>
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
											axios.post("http://localhost:5000/memInfo/edit")
											window.alert("수정 완료되었습니다.")
											
                                        }.bind(this)}
									></input>
								</div>
							</div>	
						</form>
					</div>
        );
    }
=======
import React, { Component } from "react"

class Info_edit extends Component {
>>>>>>> Stashed changes
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
              <p>
                <input></input>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-it">
              <label>핸드폰 번호</label>
              <p>
                <input></input>
              </p>
            </div>
            <div class="col-md-6 form-it">
              <label>주소</label>
              <p>
                <input type="text" id="address_kakao"></input>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <input
                class="submit"
                type="submit"
                value="수정"
                onClick={function (e) {
                  e.preventDefault()
                  this.props.onChangeSection("view")
                }.bind(this)}
              ></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
<<<<<<< Updated upstream
=======
>>>>>>> master
>>>>>>> Stashed changes
}

export default Info_edit
