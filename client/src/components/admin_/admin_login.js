import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchLogin } from './auth';

class Admin_login extends Component {
    constructor(props) {
        super(props);
        this.style_input={
            width: '450px',
            margin: '20px'
        }
        this.state = {
            account: {
                id: "",
                password: "",
            }
        }
    }

    onHandleIDChange(value) {
        this.setState({
            account: {
                id : value,
                password : this.state.account.password,
            }
        });
    }

    onHandlePWChange(value) {
        this.setState({
            account: {
                id : this.state.account.id,
                password: value,
            }
        });
    }

    onSubmitAccount = async () => {
        try {
            const user = await fetchLogin(this.state.account);
      
            //성공하면 해당 user 아이디 패스워드값 셋팅
            //성공하면 해당 url로 이동(main페이지로)
            alert("로그인 성공");
            <Navigate to={{
                pathname: "/admin",
                state: {
                    is_logined: true,
                }
            }}></Navigate>
            this.props.loginSucess();
          } catch (error) {
      
              //실패하면 throw new Error("") 값 출력
            window.alert(error);
          }
    };

    render() {
        return (
            <div class="movie-tabs">
                        <div class="tabs">
                            <ul class="tab-links tabs-mv">
                                <div class="login-wrapper" id="signup-content">
                                    <div class="login-content">
                                        <h3>로그인</h3>
                                        <br/>
                                        <div>
                                            <form method="post" 
                                            class="form-style-1"
                                            action="#">
                                                <div 
                                                
                                                class="row">
                                                    <label 
                                                    style={this.style_input}
                                                    for="username-2">
                                                        아이디:
                                                        <input
                                                            id="user_id"
                                                            type="text"
                                                            name="username"
                                                            class="username-2"
                                                            placeholder="아이디"
                                                            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$"
                                                            required="required"
                                                            onChange={function(e){
                                                                this.onHandleIDChange(e.target.value);
                                                            }.bind(this)}
                                                            />
                                                    </label>
                                                </div>
                                                <div 
                                                class="row">
                                                    <label 
                                                    style={this.style_input}
                                                    for="password-2">
                                                        비밀번호:
                                                        <input
                                                            id="user_pw"
                                                            type="password"
                                                            name="password"
                                                            id="password-2"
                                                            placeholder="비밀번호"
                                                            // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                                            required="required"
                                                            onChange={function(e){
                                                                this.onHandlePWChange(e.target.value);
                                                            }.bind(this)}
                                                            />
                                                    </label>
                                                </div>
                                                <br/>
                                                <div class="row">
                                                    <button 
                                                    style={this.style_input}
                                                    class="redbtn" type="submit"
                                                    onClick={function(e){
                                                        e.preventDefault();
                                                        this.onSubmitAccount();
                                                    }.bind(this)}
                                                    >로그인</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
        );
    }
}

export default Admin_login;