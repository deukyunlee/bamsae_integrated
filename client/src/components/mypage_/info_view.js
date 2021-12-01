<<<<<<< Updated upstream
import React, { Component } from "react"

class Info_view extends Component {
=======
<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios'

class Info_view extends Component {
	constructor(props) {
		super(props)
		this.state = {
			info:
			{
				mem_name:"",
				mem_email: "",
				mem_phone: "",
				mem_address:""
            }
        }
		var mem_id = this.props.username
		axios({
			method: "POST",
			url: "http://localhost:5000/memInfo",
			data: {
				mem_id: mem_id
			}
		}).then((res) => {
			this.setState({
				info:
				{
					mem_name: res.data.mem_name,
					mem_email: res.data.mem_email,
					mem_phone: res.data.mem_phone,
					mem_address: res.data.mem_city + res.data.mem_address
				}
			})
		})
    }

	render() {
		return (
            <div class="form-style-1 user-pro" action="#">
						<form action="#" class="user">
							<h4>고객정보</h4>
							<div class="row">
								<div class="col-md-6 form-it">
							<label>성함</label>
							<p>{this.state.info.mem_name}</p>
								</div>
								<div class="col-md-6 form-it">
									<label>이메일 주소</label>
							<p>{this.state.info.mem_email}</p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 form-it">
									<label>핸드폰 번호</label>
							<p>{this.state.info.mem_phone}</p>
								</div>
								<div class="col-md-6 form-it">
									<label>주소</label>
							<p>{this.state.info.mem_address}</p>
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
=======
import React, { Component } from "react"

class Info_view extends Component {
>>>>>>> Stashed changes
  render() {
    return (
      <div class="form-style-1 user-pro" action="#">
        <form action="#" class="user">
          <h4>고객정보</h4>
          <div class="row">
            <div class="col-md-6 form-it">
              <label>성명</label>
              <p>{this.props.username}</p>
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
                onClick={function (e) {
                  e.preventDefault()
                  this.props.onChangeSection("edit")
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

export default Info_view
