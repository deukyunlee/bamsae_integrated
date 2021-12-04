import {Checkbox} from '@material-ui/core';
import React, {Component} from 'react';
import {useState} from 'react';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedInputs: [],
            number: 0
        }
    }
    onIncrease() {
        this.setState({
            number: this.state.number + 1
        });
    }
    onDecrease() {
        if (this.state.number == 0) 
            return;
        this.setState({
            number: this.state.number - 1
        });
    }
    setCheckedInputs(arr) {
        this.setState({checkedInputs: arr})
    }
    changeHandler = (checked, id) => {
        if (checked) {
            this.setCheckedInputs([
                ...this.state.checkedInputs,
                id
            ]);
            console.log('신용/체크카드');
        } else {
            this.setCheckedInputs(this.state.checkedInputs.filter(el => el !== id));
            console.log('카카오페이');
        }
    }

    // SignupContents = ({history}) => {

    imagestyle = {
        height: "350px",
        width: "350px"
    };

    render() {

        return (
            <div>
                <div>
                    <div class="buster-light">
                        <div class="movie-tabs">
                            <div class="tabs">
                                <div class="tab-content">
                                    <div id="" class="tab active">
                                        <div class="row">
                                            <div
                                                style={{
                                                    margin: '20px',
                                                    width: '1000px'
                                                }}
                                                class="col-md-8 col-sm-12 col-xs-12"
                                                id="final-purchase">
                                                <h2>상품 정보</h2>
                                                <form
                                                    style={{
                                                        margin: '50px'
                                                    }}
                                                    class="form-style-1">
                                                    <img src="images/003.png" height='400px' width='400px'></img>
                                                    <div
                                                        style={{
                                                            marginTop: '90px',
                                                            float: 'right',
                                                            width: '400px'
                                                        }}>
                                                        <div class="row">
                                                            <div class="col-md-6 form-it">
                                                                <label>상품명</label>
                                                                <p>싱글콤보</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6 form-it">
                                                                <label>상품 상세</label>
                                                                <p>팝콘(L) 1 + 탄산음료(R) 2</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6 form-it">
                                                                <label>가격</label>
                                                                <p>9000원</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div
                                                style={{
                                                    margin: '20px',
                                                    width: '1000px'
                                                }}
                                                class="col-md-8 col-sm-12 col-xs-12"
                                                id="final-purchase">

                                                <h2
                                                    style={{
                                                        marginLeft: '20px'
                                                    }}>결제</h2>
                                                <div class="title-hd-sm">
                                                    <h4>수량</h4>
                                                    <span>{this.state.number}</span>
                                                    <div>
                                                        <button
                                                            onClick={this
                                                                .onIncrease
                                                                .bind(this)}>+1</button>
                                                        <button
                                                            onClick={this
                                                                .onDecrease
                                                                .bind(this)}>-1</button>
                                                    </div>
                                                </div>
                                                <form
                                                    style={{
                                                        margin: '50px'
                                                    }}
                                                    class="form-style-1">
                                                    <h4>최종 결제</h4>
                                                    <div>
                                                        <br/>
                                                        <p>
                                                            <img src="images/event_icon_payco.png" class="button_nextto_paragraph"/>
                                                            페이코 결제시 최대
                                                            <b>2000원</b>
                                                            할인쿠폰
                                                            <img src="images/event_icon_payco_right_arrow.png" class="button_event_arrow"></img>
                                                        </p>

                                                        <p>
                                                            <img
                                                                src="images/payment_icon_yellow_large.png"
                                                                class="button_nextto_paragraph"/>
                                                            카카오페이 20000원 이상 결제시
                                                            <b>4000원</b>
                                                            할인쿠폰
                                                            <img src="images/event_icon_payco_right_arrow.png" class="button_event_arrow"></img>
                                                        </p>
                                                        <button class="button_step4" type="button">
                                                            <img src="images/payment_icon_yellow_large.png"/>
                                                        </button>

                                                        <button class="button_step4" type="button" onClick={function (e) {}}>
                                                            <img src="images/payment_icon_card.png"/>
                                                        </button>
                                                        <button class="button_step4" type="button" onClick={function (e) {}}>
                                                            <img src="images/payment_icon_payco.png"/>
                                                        </button>
                                                        <button class="button_step4" type="button" onClick={function (e) {}}>
                                                            <img src="images/payment_icon_naver.png"/>
                                                        </button>
                                                    </div>
                                                    {/* <input
                                                        type="checkbox"
                                                        id="check"
                                                        onChange={e => {
                                                            this.changeHandler(e.currentTarget.checked, 'check');
                                                        }}
                                                        checked={this
                                                            .state
                                                            .checkedInputs
                                                            .includes('check')
                                                                ? true
                                                                : false}></input>
                                                    <label id="check" htmlFor="check"></label>
                                                    <span >신용/체크카드</span>
                                                    <input
                                                        type="checkbox"
                                                        id="check2"
                                                        onChange={e => {
                                                            this.changeHandler(e.currentTarget.checked, 'check2');
                                                        }}
                                                        checked={this
                                                            .state
                                                            .checkedInputs
                                                            .includes('check2')
                                                                ? true
                                                                : false}
                                                        style={{
                                                            marginLeft: 60
                                                        }}></input>
                                                    <label id="check2" htmlFor="check2"></label>
                                                    <span>카카오페이</span> */
                                                    }
                                                    <h3
                                                        style={{
                                                            textAlign: 'center'
                                                        }}>{9000 * this.state.number}원
                                                    </h3>
                                                    <br/>
                                                    <div
                                                        style={{
                                                            textAlign: 'center'
                                                        }}
                                                        class="redbtn">결제하기</div>
                                                </form>
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

export default Single;