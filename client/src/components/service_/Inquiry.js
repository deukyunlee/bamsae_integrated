import React, {Component} from 'react';

class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : "rent",
        }
    }

    isAllItemsFilled = () => {
        const inputFeilds = document.getElementsByTagName("input");
        var i= 4;
        for (i; i<inputFeilds.length; i++) {
            if (inputFeilds[i].value === "") {
                alert("모든 항목을 입력해주세요");
                return false;
            }
        }
        const select = document.getElementById("type");
        var item = select.options[select.selectedIndex].value
        if (item === "") {
            alert("문의 종류를 선택하세요.");
            return false;
        }
        return true;
    }

    submitData() {
        var name_ = document.getElementById("name").value;
        var e_mail_ = document.getElementById("e_mail").value;
        var hp_ = document.getElementById("hp").value;
        const select = document.getElementById("type");
        var type_ = select.options[select.selectedIndex].value;
        var title_ = document.getElementById("title").value;
        var content_ = document.getElementById("content").value;
        var data = this.props.inquiry_data;
        var today = new Date();

        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);

        var dateString = year + '-' + month  + '-' + day;
        data.push({
            name: name_,
            e_mail: e_mail_,
            hp: hp_,
            type: type_,
            title: title_,
            content: content_,
            date: dateString,
        });
        this.props.addInquiryData(data);
    }

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
                                                    <input id="name" type="text" placeholder="이름 입력"></input>
                                                </div>
                                                <div 
                                                class="col-md-6 form-it">
                                                    <label>이메일</label>
                                                    <input id="e_mail" type="text" placeholder="이메일 입력"></input>
                                                </div>
                                               <div class="col-md-12 form-it">
                                                    <label>핸드폰번호</label>
                                                    <input 
                                                    id="hp" type="text" placeholder="핸드폰번호 입력"></input>
                                                </div>
                                            </div>
                                            <label>문의 종류</label>
                                            <div class="group-ip">
                                                <select id="type" name="skills" multiple="" class="ui fluid dropdown">
                                                    <option value="">--문의 종류를 선택하세요.--</option>
                                                    <option value="group">단체관람</option>
                                                    <option value="rental">대관문의</option>
                                                    <option value="lost">분실물문의</option>
                                                    <option value="guitar">기타</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label>제목</label>
                                        <input id="title" type="text" placeholder="제목을 입력하세요."></input>
                                        <br/>
                                        <label>문의 내용</label>
                                        <input id="content" style={styleinput} type="text" placeholder="문의 내용을 입력하세요."></input>
                                    </div>
                                    <div class="col-md-12 ">
                                        <input class="submit" type="submit" value="등록" onClick={function(e){
                                            e.preventDefault();
                                            if (!this.isAllItemsFilled()) {
                                                return;
                                            }
                                            this.submitData();
                                            this.props.onChangeTab("submit_sucess");
                                            window.scrollTo(0,0);
                                        }.bind(this)}></input>
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