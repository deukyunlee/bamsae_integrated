import React, {Component} from 'react';
import Admin_login from './admin_login';
import Admin_content from './admin_content';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_logined: false,
            tab: "theater",
            in_detail: false
        };
    }

    tabChange(str) {
        let x = document.getElementsByClassName("now")[0];
        x.innerText = str;
    }

    render() {
        const style_input = {
            width: '450px',
            margin: '20px'
        }
    }
    render() {
        return (
            <div>
                <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">관리자 페이지</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">관리자</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                <span class='now'>극장 관리</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!this.state.is_logined ? <Admin_login loginSucess={function(){
                        this.setState({
                            is_logined : true,
                        });
                    }.bind(this)}></Admin_login> : 
                    <div class="movie-tabs">
                    <div class="tabs">
                        <ul class="tab-links tabs-mv">
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({ tab: "theater", in_detail: false });
                                        this.tabChange("극장 관리")
                                    }.bind(this)}>극장 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({ tab: "sales", in_detail: false });
                                        this.tabChange("매출 현황")
                                    }.bind(this)}>매출 현황</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({ tab: "employee", in_detail: false });
                                        this.tabChange("직원 관리")
                                    }.bind(this)}>직원 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({ tab: "board", in_detail: false });
                                        this.tabChange("게시판 관리")
                                    }.bind(this)}>게시판 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({ tab: "movie", in_detail: false });
                                        this.tabChange("영화 정보 관리")
                                    }.bind(this)}>영화 정보 관리</a>
                            </li>
                            <li>
                                <a
                                    href="#overview"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        this.setState({ tab: "product", in_detail: false });
                                        this.tabChange("상품 관리")
                                    }.bind(this)}>상품 관리</a>
                            </li>
                        </ul>
                        <Admin_content
                            tab={this.state.tab}
                              in_detail={this.state.in_detail} onChangeDetail={function(e){
                                var det = this.state.in_detail;
                                this.setState({
                                    in_detail : !det
                                });
                            }.bind(this)}></Admin_content>
                    </div>
                </div>} 
                </div>
            </div>
        );
    }
}

export default Admin;