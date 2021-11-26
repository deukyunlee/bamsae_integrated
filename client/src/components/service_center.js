import React, { Component   } from 'react';
import Service_content from './service_/service_content';


class Service_center extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tab : "FAQ",
            in_detail : false,
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
                                        });
                                    }.bind(this)}>  FAQ</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "Notice",
                                        });
                                    }.bind(this)}>공지사항</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "Inquiry",
                                        });
                                    }.bind(this)}>1:1문의</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "Lent",
                                        });
                                    }.bind(this)}>단체관람/대관문의</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "Lost",
                                        });
                                    }.bind(this)}>분실물문의</a>
                                </li>
                            </ul>
                            <Service_content tab={this.state.tab} onChangeDetail={function(code){
                                this.setState({
                                    tab: code,
                                })
                            }.bind(this)}></Service_content>
                        </div>
                    </div>
                </div>
                
            </div>       
    );
  }
}

export default Service_center;