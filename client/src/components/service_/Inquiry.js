import React, {Component} from 'react';

class Inquiry extends Component {

    render() {
         const styleform = {
            width: '1300px',
            left: '40px',
        }
        const styleinput = {
            height: '200px'
        }
        const stylebox = {
            width: '300px',
        }
        const stylebox2 = {
            width: '400px',
        }
        const stylebox3 = {
            width: '370px',
        }
        this.state = {
            menu: '영화관'
        }
        return (
            <div>
                <div id="overview" class="tab-content">
                    <div class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>1:1문의</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div style={styleform} class="col-md-6 col-sm-12 col-xs-12">
                    <div class="sidebar">
                        <div class="searh-form">
                            <form class="form-style-1" action="#">
                                
                                <div class="row">
                                        <div class="col-md-8 form-it">
                                    <div class="col-md-8 form-it">
                                            <div class="row">
                                                <div class="col-md-6 form-it">
                                                    <label>이름</label>
                                                    <input type="text" placeholder="이름 입력"></input>
                                                </div>
                                                <div 
                                                class="col-md-6 form-it">
                                                    <label>이메일</label>
                                                    <input type="text" placeholder="이메일 입력"></input>
                                                </div>
                                               <div class="col-md-12 form-it">
                                                    <label>핸드폰번호</label>
                                                    <input 
                                                    type="text" placeholder="핸드폰번호 입력"></input>
                                                </div>
                                            </div>
                                            <label>문의 종류</label>
                                            <div class="group-ip">
                                                <select name="skills" multiple="" class="ui fluid dropdown">
                                                    <option value="">--문의 종류를 선택하세요.--</option>
                                                    <option value="단체관람">단체관람</option>
                                                    <option value="대관문의">대관문의</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label>제목</label>
                                        <input type="text" placeholder="제목을 입력하세요."></input>
                                        <br/>
                                        <label>문의 내용</label>
                                        <input style={styleinput} type="text" placeholder="문의 내용을 입력하세요."></input>
                                    </div>
                                    <div class="col-md-12 ">
                                        <input class="submit" type="submit" value="등록"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inquiry;