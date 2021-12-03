import React, { Component } from 'react';
import Select_seat from './seat/select_seat';
import axios from 'axios';

class Step2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filled : [],
			theater_selected: false,
			theaters: {},
			region: "",
		}
	}

	componentDidMount() {
		this.updateTheaters();
	}

	updateTheaters = async () => {
		var sort = {
			'SE': [],
			'GG': [],
			'GW': [],
			'BU': [],
			'GS': [],
			'CC': [],
			'JR': [],
			'JJ': [],
		};
		axios
          .get("http://localhost:5000/theater")
          .then((data_) => {
            var arr = data_.data.data;
			for (var i=0; i<arr.length; i++) {
				var code = arr[i].theater_id.substr(0, 2);
				sort[code].push(arr[i]);
			}
			this.setState({
				theaters: sort,
			});
          }
          )
          .catch(e => {
            console.error(e);
          });
	}

	filterByRegion(regionCode) {
		this.setState({
			region: regionCode,
		})
	}

    checkAllItemsAreFilled(value) {
        if (value === "" || value == "null")
			return false;
		return true;
    }

	checkLast() {
		var date = document.getElementById("datefield").value;
		var arr = this.state.filled;
		if (date !== "") {
			arr.push(date);
			this.setState({
				filled : arr,
			})
		}
		if (this.state.filled.length > 2) {
			return true;
		}
		alert("모든 항목을 입력해주십시오.");
	}

    render() {
        var items = this.props.selected_items; // arr
        var arr = []
        var names = []
		var options = []
        for (const item of items) {
            arr.push(
                <div class="movie-item-style-2">
                <img src="images/uploads/mv1.jpg" alt=""></img>
                <div class="mv-item-infor">
                    <h6>{item.name}</h6>
                    <p class="describe"></p>
                    <p class="seats">12 석</p>
                </div>
			</div>
            );
            names.push(item.name + " ")
        }
		if (this.state.region !== "") {
			var filtered = this.state.theaters[this.state.region] // array
			for (var i=0; i<filtered.length; i++) {
				options.push(<option value={String(i)}>{filtered[i].theater_name}</option>)
			}
		}
        return (
            <div class="container">
                <div class="col-md-16 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.2 극장 선택</h3>
                <br/><br/>                
                <div class="searh-form">						
						<form class="form-style-1" action="#">
							<div class="row">
								<div class="col-md-12 form-it">
									<label>영화 이름</label>
									<p>{names}</p>
								</div>
								<div class="col-md-12 form-it">
									<label>지역 선택</label>
									<div class="group-ip">
										<select
											name="province" multiple="" class="ui fluid dropdown"
											onChange={function(e){
												var arr = this.state.filled;
												if (this.checkAllItemsAreFilled(e.target.value)) {
													arr.push(e.target.value)
													this.setState({filled: arr})
												}
												this.filterByRegion(e.target.value);
											}.bind(this)}>
											<option value="">--지역을 선택하세요--</option>
											<option value="SE">서울</option>
											<option value="GG">경기</option>
											<option value="GW">강원</option>
											<option value="BU">부산</option>
											<option value="GS">경상</option>
											<option value="JR">전라</option>
											<option value="CC">충청</option>
											<option value="JJ">제주</option>
										</select>
									</div>
									
								</div>
								<div class="col-md-12 form-it">
									<label>영화관 선택</label>
									
									 <select name="theater"
									 onChange={function(e){
											var arr = this.state.filled;
											if (this.checkAllItemsAreFilled(e.target.value)) {
												arr.push(e.target.value)
												this.setState({filled: arr})
											}
										}.bind(this)}>

									 	<option value="">-- 영화관을 선택하세요 --</option>
										{options}
									</select>
									
								</div>
								<div class="col-md-12 form-it">
									<label>관람일 선택</label>
									<form>
										<p><input id="datefield" type="date"></input></p>
									</form>
								</div>
								<div class="col-md-12 ">
									<input class="submit" type="submit" value="submit" onClick={function(e){
                                        e.preventDefault();
										if (this.checkLast())
                                        	this.setState({
												theater_selected: true,
											})
                                    }.bind(this)}></input>
								</div>
								<div class='col-md-12'>
								<br/>
								{this.state.theater_selected ? <Select_seat toStep3={this.props.toStep3} getSelected={this.props.getSelected}></Select_seat> : <div/> }
								</div>
							</div>
						</form>
					</div>
                    </div>
            </div>
        );
    }
}

export default Step2;