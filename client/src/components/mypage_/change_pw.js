<<<<<<< Updated upstream
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

  handleOnConfirmPasswordInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput })
  }

  doesPasswordMatch() {
    const { password, confirmPassword } = this.state
    return password === confirmPassword
  }

  confirmPasswordClassName() {
    const { confirmPassword } = this.state

    if (confirmPassword) {
      return this.doesPasswordMatch() ? "is-valid" : "is-invalid"
    }
  }

  renderFeedbackMessage() {
    const { confirmPassword } = this.state

    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
      }
=======
<<<<<<< HEAD
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios'

class Change_PW extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        password: '',
        confirmPassword: '',
    }
=======
import React, { Component } from "react"
import "../../App.css"

class Change_PW extends Component {
  state = {
    password: "",
    confirmPassword: "",
  }
>>>>>>> master

  handleOnPasswordInput(passwordInput) {
    this.setState({ password: passwordInput })
  }

  handleOnConfirmPasswordInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput })
  }

  doesPasswordMatch() {
    const { password, confirmPassword } = this.state
    return password === confirmPassword
  }

  confirmPasswordClassName() {
    const { confirmPassword } = this.state

    if (confirmPassword) {
      return this.doesPasswordMatch() ? "is-valid" : "is-invalid"
    }
  }

  renderFeedbackMessage() {
    const { confirmPassword } = this.state

    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
      }
    }
  }

<<<<<<< HEAD
    change() {
        var mem_id = this.props.username

        axios({
            method: "POST",
            url: "http://localhost:5000/memInfo/editPW",
            data: {
                mem_id: mem_id,
                mem_pw: this.state.password
            }
        })
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
=======
        return (
            <div class="form-style-1 user-pro" action="#">
            <form action="#" class="password">
						<h4>비밀번호 변경</h4>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>현재 비밀번호</label>
								<input type="password"></input>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>새 비밀번호</label>
								<input id="new_pw" type="password"
                                onChange={e => this.handleOnPasswordInput(e.target.value)}></input>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>비밀번호 확인</label>
								<input id="id_confirm" type="password"
                                onChange={e => this.handleOnConfirmPasswordInput(e.target.value)}></input>
							</div>
                            {this.renderFeedbackMessage()}
						</div>
						<div class="row">
							<div class="col-md-2">
                            <input class="submit" type="submit" value="변경" onClick={function (e) {
                                e.preventDefault();
                                this.change()
                                window.alert("비밀번호가 변경되었습니다.")
                                this.props.onChangePage("main");
                                window.location.reload(false);
                            }.bind(this)}></input>
							</div>
						</div>	
					</form>
=======
  render() {
    document.addEventListener("DOMContentLoaded", function (event) {
      var p1 = document.getElementById("new_pw").value
      var p2 = document.getElementById("id_confirm").value
      if (p1 != p2) {
        alert("비밀번호가 일치하지 않습니다.")
      }
    })

>>>>>>> Stashed changes
    return (
      <div class="form-style-1 user-pro" action="#">
        <form action="#" class="password">
          <h4>비밀번호 변경</h4>
          <div class="row">
            <div class="col-md-6 form-it">
              <label>현재 비밀번호</label>
              <input type="password"></input>
<<<<<<< Updated upstream
=======
>>>>>>> master
>>>>>>> Stashed changes
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-it">
              <label>새 비밀번호</label>
              <input id="new_pw" type="password" onChange={(e) => this.handleOnPasswordInput(e.target.value)}></input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-it">
              <label>비밀번호 확인</label>
              <input
                id="id_confirm"
                type="password"
                onChange={(e) => this.handleOnConfirmPasswordInput(e.target.value)}
              ></input>
            </div>
            {this.renderFeedbackMessage()}
          </div>
          <div class="row">
            <div class="col-md-2">
              <input class="submit" type="submit" value="변경"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Change_PW
