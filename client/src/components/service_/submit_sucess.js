import React, {Component} from 'react';

class Submit_sucess extends Component {
    render() {
        return (
            <div>
                <div id="overview" class="tab-content">
                    <div class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>1:1문의</h3><br/>
                                            <div class="searh-form">
                            <form class="form-style-1" action="#">
                                <div class="row">
                                        <div class="col-md-8 form-it">
                                        <h6>문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.</h6>
                                        <br/>
                                        <button class="redbtn" onClick={function(e){
                                            e.preventDefault();
                                            this.props.onChangePage("mypage");
                                        }.bind(this)}>문의 내역 보기</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Submit_sucess;