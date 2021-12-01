import React, {Component} from 'react';

class Double extends Component {
    render() {
        const imagestyle = {
            height: "350px",
            width: "350px",
        };
        return (
            <div>
                <div>
                    <div class="buster-light">
                        <div class="movie-tabs">
                            <div class="tabs">
                                <div class="tab-content">
                                    <div id="" class="tab active">
                                        <div class="row">
                                            <div class="col-md-8 col-sm-12 col-xs-12">
                                                <h3>더블콤보</h3>
                                                <div class="mvsingle-item ov-item">
                                                    <a
                                                        class="img-lightbox"
                                                        data-fancybox-group="gallery"
                                                        href="images/uploads/image11.jpg"><img src="/images/003.png" alt="" style={imagestyle}/></a>
                                                    <a href="#" class="redbtn">구매하기</a>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>금액</h4>
                                                    <p>12000원</p>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>사용기간</h4>
                                                    <p>구매일로부터 90일</p>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>판매수량</h4>
                                                    <p>1회 8개</p>
                                                </div>
                                                <div class="title-hd-sm">
                                                    <h4>구매취소</h4>
                                                    <p>구매일로부터 7일 이내 취소 가능</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Double;