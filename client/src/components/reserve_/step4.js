import { Component } from 'react';
import Kakaopay from './payment/kakaopay';

class Step4 extends Component {
    render() {
        return (
            <div class="container">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.4 결제 수단 선택</h3>
                <br /><br />
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
                                    <p>{this.props.selected_seats.join(" , ")}</p>
								</div>
							</div>
						</form>
                        <button class="kakaopay" type="button" onClick={function(e){
							
						}}><img src="images/payment_icon_yellow_large.png" /></button>
					</div>
                </div>
            </div>
        );
    }
}

export default Step4;