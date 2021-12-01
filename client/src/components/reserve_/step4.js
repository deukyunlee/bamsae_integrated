import { Step } from "@material-ui/core"
import React, { Component } from "react"
import Kakaopay from "./payment/kakaopay"
import Step3 from "./step3"
import Step1 from "./step1"

class Step4 extends Component {
  render() {
    return (
      <div class="container">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <br />
          <br />
          <h3> Step.4 결제 수단 선택</h3>
          <br />
          <br />
          <div class="searh-form">
            <form class="form-style-1" action="#">
              <div class="row">
                <div class="col-md-3 form-it">
                  <label>성인</label>
                  <div class="group-ip">
                    <p>{this.props.ticket[0].adult == "" ? 0 : this.props.ticket[0].adult} 명</p>
                  </div>
                </div>
                <div class="col-md-3 form-it">
                  <label>청소년</label>
                  <div class="group-ip">
                    <p>{this.props.ticket[0].youth == "" ? 0 : this.props.ticket[0].youth} 명</p>
                  </div>
                </div>
                <div class="col-md-3 form-it">
                  <label>어린이</label>
                  <div class="group-ip">
                    <p>{this.props.ticket[0].children == "" ? 0 : this.props.ticket[0].children} 명</p>
                  </div>
                </div>
                <div class="col-md-3 form-it">
                  <label>국가유공자/사회적약자</label>
                  <div class="group-ip">
                    <p>{this.props.ticket[0].welfare == "" ? 0 : this.props.ticket[0].welfare} 명</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <label>좌석</label>
                  <p>C8, C9, C10, C11</p>
                </div>
              </div>
            </form>
            <div>
              <p>
                <img src="images/event_icon_payco.png" class="button_nextto_paragraph" />
                페이코 결제시 최대 <b>2000원</b> 할인쿠폰
                <img src="images/event_icon_payco_right_arrow.png" class="button_event_arrow"></img>
              </p>

              <p>
                <img src="images/payment_icon_yellow_large.png" class="button_nextto_paragraph" />
                카카오페이 20000원 이상 결제시 <b>4000원</b> 할인쿠폰
                <img src="images/event_icon_payco_right_arrow.png" class="button_event_arrow"></img>
              </p>
            </div>

            <a href="http://localhost:5000/kakaopay?order_id=2&mem_id=abc&item_name=popcorn&quantity=2&price=2000">
              <button class="button_step4" type="button">
                <img src="images/payment_icon_yellow_large.png" />
              </button>
            </a>
            <button class="button_step4" type="button" onClick={function (e) {}}>
              <img src="images/payment_icon_card.png" />
            </button>
            <button class="button_step4" type="button" onClick={function (e) {}}>
              <img src="images/payment_icon_payco.png" />
            </button>
            <button class="button_step4" type="button" onClick={function (e) {}}>
              <img src="images/payment_icon_naver.png" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Step4
