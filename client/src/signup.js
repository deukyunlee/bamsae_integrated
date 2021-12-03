import React, { Component } from 'react';
import axios from 'axios'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            password2: "",
            name: "",
            email: "",
            phone: "",
            add1: "",
            add2: "",
            gender: "",
            birth: ""
        };
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    join() {
        axios({
            method: "POST",
            data: this.state,
            url: 'http://localhost:5000/memJoin'
        })
    }

    render() {

        const style_input = {
            width: '450px',
            margin: '20px'
        }

        return (
            <div>
                <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">회원가입</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                회원가입</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                            <ul class="tab-links tabs-mv">
                                <div class="login-wrapper" id="signup-content">
                                    <div class="login-content">
                                        <h3>회원가입</h3>
                                        <br/>
                                        <div>

                                            <form method="post" class="form-style-1" action="#">

                                                <div class="row">
                                                    <div class="col-md-6 form-it">
                                                        <label>이름</label>
                                                        <input type="text" placeholder="이름 입력" name='name' onChange={this.inputChange} value={this.state.name}></input>
                                                    </div>
                                                    <div class="col-md-6 form-it">
                                                        <label>이메일</label>
                                                        <input type="text" placeholder="이메일 입력" name='email' onChange={this.inputChange} value={this.state.email}></input>
                                                    </div>
                                                    <br/>
                                                    <div class="row"></div>
                                                    <div class="col-md-12 form-it">
                                                        <label>핸드폰번호</label>
                                                        <input type="text" placeholder="핸드폰번호 입력" name='phone' onChange={this.inputChange} value={this.state.phone}></input>
                                                        <br/>
                                                    </div>

                                                    <div class="col-md-6 form-it">
                                                        <label>아이디</label>
                                                        <input type="text" placeholder="6~12자리의 아이디를 입력해주세요." name='id' onChange={this.inputChange} value={this.state.id}></input>
                                                    </div>
                                                    <div class="col-md-6 form-it">
                                                        <button
                                                            style={{
                                                                width: '150px',
                                                                height: '35px',
                                                                marginTop: '35px'
                                                            }}>아이디 중복 확인</button>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label style={style_input} for="password-2">
                                                        비밀번호:
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            placeholder="특수문자 포함 8~12자리를 입력해주세요."
                                                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                                            required="required"
                                                            onChange={this.inputChange} value={this.state.password}/>

                                                    </label>
                                                    <label style={style_input} for="password-2">
                                                        비밀번호 확인:
                                                        <input
                                                            type="password"
                                                            name="password2"
                                                            placeholder="비밀번호 확인"
                                                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                                            required="required"
                                                            value={this.state.password2}
                                                            onChange={this.inputChange}/>
                                                    </label>

                                                </div>
                                                <div class="row">
                                                    <label style={style_input}>
                                                        생년월일:
                                                        <input
                                                            type="date"
                                                            name="birth"
                                                            placeholder="생년월일을 입력해주세요"
                                                            required="required"
                                                            value={this.state.birth}
                                                            onChange={this.inputChange} />
                                                    </label>
                                                </div>
                                                <div class="row">
                                                    <label style={style_input}>
                                                        주소:
                                                        <input
                                                            type="text"
                                                            name="add1"
                                                            placeholder="주소를 입력해주세요."
                                                            required="required"
                                                            onChange={this.inputChange} value={this.state.add1} />

                                                    </label>
                                                    <label style={style_input} for="password-2">
                                                        상세 주소:
                                                        <input
                                                            type="text"
                                                            name="add2"
                                                            placeholder="상세 주소를 입력해주세요"
                                                            required="required"
                                                            value={this.state.add2}
                                                            onChange={this.inputChange} />
                                                    </label>
                                                </div>

                                                <br/>
                                                <div class="row">
                                                    <button
                                                        style={style_input}
                                                        class="redbtn"
                                                        type="submit"
                                                        onClick={function (e) {
                                                            console.log(this.state)
                                                            this.join()
                                                        }.bind(this)}>
                                                        회원가입</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;