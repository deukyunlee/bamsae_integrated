import React, { Component   } from 'react';
import Service_content from './service_/service_content';


class Service_center extends Component{
    constructor(props) {
        super(props);
        this.state = {
            faq_id: null,
            tab : "FAQ",
            in_detail : false,
            data: [],
        };
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
                                        <h1 width="100px">고객센터</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                고객센터</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                            <ul
                            class="tab-links tabs-mv">
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "FAQ",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>FAQ</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "Notice",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>공지사항</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        if (!this.props.is_logined) {
                                            alert("로그인이 필요한 서비스입니다.")
                                            this.props.onChangePage("login");
                                            return;
                                        }
                                        this.setState({
                                            tab: "Inquiry",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>1:1문의</a>
                                </li>
                            </ul>
                            <Service_content tab={this.state.tab} onChangeDetail={function(id){
                                this.setState({
                                    faq_id : id,
                                    in_detail: true,
                                })
                            }.bind(this)}
                            onChangePage={this.props.onChangePage}
                            onChangeTab={function(code){
                                this.setState({
                                    tab: code,
                                })
                            }.bind(this)}
                            inquiry_data={this.props.inquiry_data} addInquiryData={this.props.addInquiryData}
                            faq_id={this.state.faq_id}
                            in_detail={this.state.in_detail}
                            upData={function(arr){
                                this.setState({
                                    data : arr,
                                })
                            }.bind(this)}
                            data={this.state.data}
                            ></Service_content>
                        </div>
                    </div>
                </div>
                
            </div>       
    );
  }
}

export default Service_center;