import React, {Component} from 'react';

class Signup extends Component {
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
                                                        <input type="text" placeholder="이름 입력"></input>
                                                    </div>
                                                    <div class="col-md-6 form-it">
                                                        <label>이메일</label>
                                                        <input type="text" placeholder="이메일 입력"></input>
                                                    </div>
                                                    <br/>
                                                    <div class="row"></div>
                                                    <div class="col-md-12 form-it">
                                                        <label>핸드폰번호</label>
                                                        <input type="text" placeholder="핸드폰번호 입력"></input>
                                                        <br/>
                                                    </div>

                                                    <div class="col-md-6 form-it">
                                                        <label>아이디</label>
                                                        <input type="text" placeholder="6~12자리의 아이디를 입력해주세요."></input>
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
                                                            id="password-2"
                                                            placeholder="특수문자 포함 8~12자리를 입력해주세요."
                                                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                                            required="required"
                                                            onChange={function (e) {
                                                                this.onHandlePWChange(e.target.value);
                                                            }.bind(this)}/>

                                                    </label>
                                                    <label style={style_input} for="password-2">
                                                        비밀번호 확인:
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password-2"
                                                            placeholder="비밀번호 확인"
                                                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                                            required="required"
                                                            onChange={function (e) {
                                                                this.onHandlePWChange(e.target.value);
                                                            }.bind(this)}/>

                                                    </label>

                                                </div>
                                                <br/>
                                                <div class="row">
                                                    <button
                                                        style={style_input}
                                                        class="redbtn"
                                                        type="submit"
                                                        onClick={function (e) {
                                                            e.preventDefault();
                                                            this.onSubmitAccount();
                                                        }.bind(this)}>회원가입</button>
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