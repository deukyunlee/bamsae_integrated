import { Component } from 'react';

class Step3 extends Component {
    countAll() {
        var adult_ = document.getElementById("count_A").value;
        var youth_ = document.getElementById("count_Y").value;
        var children_ = document.getElementById("count_C").value;
        var welfare_ = document.getElementById("count_W").value;
        var arr = [];
        arr.push({
            adult : adult_,
            youth : youth_,
            children : children_,
            welfare : welfare_,
        });
        var temp = Object.values(arr[0]);
        var sum = 0;
        for (const i of temp) {
            sum += i;
        }
        if (sum > this.props.limit) {
            alert("좌석 수를 초과해서 선택할 수 없습니다.");
            return false;
        }
        if (sum > 0) {
            this.props.getCount(arr);
            return true;
        }
        alert("인원을 입력해주십시오.");
        return false;
    }

    render() {
        return (
            <div class="container">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.3 인원 선택</h3>
                <br /><br />
                <div class="searh-form">						
						<form class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-3 form-it">
									<label>성인</label>
									<div class="group-ip">
										<input type="number" name="count" id="count_A" min="0" step="1" placeholder="0"></input>
									</div>
									
								</div>
								<div class="col-md-3 form-it">
									<label>청소년</label>
									<div class="group-ip">
										<input type="number" name="count" id="count_Y" min="0" step="1" placeholder="0"></input>
									</div>
									
								</div>
                                <div class="col-md-3 form-it">
									<label>어린이</label>
									<div class="group-ip">
										<input type="number" name="count" id="count_C" min="0" step="1" placeholder="0"></input>
									</div>
									
								</div>
                                <div class="col-md-3 form-it">
									<label>국가유공자/사회적약자</label>
									<div class="group-ip">
										<input type="number" name="count" id="count_W" min="0" step="1" placeholder="0"></input>
									</div>
									
								</div>
								<div class="col-md-12 ">
									<input class="submit" type="submit" value="submit" onClick={function(e){
                                        e.preventDefault();
                                        if(this.countAll())
                                            this.props.toStep4();
                                    }.bind(this)}></input>
								</div>
							</div>
						</form>
					</div>
                </div>
            </div>
        );
    }
}

export default Step3;