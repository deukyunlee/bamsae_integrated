import React, { Component } from "react"
import "../../App.css"

class Change_PW extends Component {
  state = {
    password: "",
    confirmPassword: "",
  }

  handleOnPasswordInput(passwordInput) {
    this.setState({ password: passwordInput })
  }

  renderFeedbackMessage() {
    const { confirmPassword } = this.state

    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
      }
    }
  }

  render() {
    document.addEventListener("DOMContentLoaded", function (event) {
      var p1 = document.getElementById("new_pw").value
      var p2 = document.getElementById("id_confirm").value
      if (p1 != p2) {
        alert("비밀번호가 일치하지 않습니다.")
      }
    })

    return (
      <div class="form-style-1 user-pro" action="#">
        <form action="#" class="password">
          <h4>회원 탈퇴</h4>
          <div class="row">
            <div class="col-md-6 form-it">
              <p>정말 탈퇴하시겠습니까?</p>
              <p>탈퇴하시려면 비밀번호를 다시 입력해주세요.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-it">
              <label>비밀번호 확인</label>
              <input
                id="password"
                type="password"
                onChange={(e) => this.handleOnPasswordInput(e.target.value)}
              ></input>
            </div>
            {this.renderFeedbackMessage()}
          </div>
          <div class="row">
            <div class="col-md-2">
              <input class="submit" type="submit" value="탈퇴하기"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Change_PW
