import React, { Component } from "react"
import axios from "axios"

class Info_edit extends Component {
  render() {
    return (
      <div class="form-style-1 user-pro" action="#">
        <form action="#" class="user">
          <h4>고객정보</h4>

          <div class="row">
            <div class="col-md-6 form-it">
              <label>이메일 주소</label>
              <p>
                <input id="mem_id"></input>
              </p>
            </div>
            <div class="col-md-6 form-it" id="mem_phone">
              <label>핸드폰 번호</label>
              <p>
                <input id="mem_phone"></input>
              </p>
            </div>
            <div class="col-md-6 form-it">
              <label>주소</label>
              <p>
                <input type="text" id="city"></input>
              </p>
            </div>
            <div class="col-md-6 form-it">
              <label>상세 주소</label>
              <p>
                <input type="text" id="address"></input>
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
                  axios.post("http://localhost:5000/memInfo/edit")
                  window.alert("수정 완료되었습니다.")
                }.bind(this)}
              ></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Info_edit
