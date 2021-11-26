import React, { Component } from 'react';
import '../../App.css';

class Change_PW extends Component {
    state = {
        password: '',
        confirmPassword: '',
    }

    handleOnPasswordInput(passwordInput) {
        this.setState({ password: passwordInput });
    }

    handleOnConfirmPasswordInput(confirmPasswordInput) {
        this.setState({ confirmPassword: confirmPasswordInput });
    }

    doesPasswordMatch() {
        const { password, confirmPassword } = this.state;
        return password === confirmPassword;
    }

    confirmPasswordClassName() {
        const { confirmPassword } = this.state;

        if (confirmPassword) {
            return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
        }
    }

    renderFeedbackMessage() {
        const { confirmPassword } = this.state;

        if (confirmPassword) {
            if (!this.doesPasswordMatch()) {
                return (
                    <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
                )
            }
        }
    }

    render() {
        document.addEventListener("DOMContentLoaded", function(event) {
            var p1 = document.getElementById('new_pw').value;
            var p2 = document.getElementById('id_confirm').value;
            if (p1 != p2) {
                alert("비밀번호가 일치하지 않습니다.")
            }
        });

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
								<input class="submit" type="submit" value="변경"></input>
							</div>
						</div>	
					</form>
            </div>
        );
    }
}

export default Change_PW;