import React, { Component } from 'react';
import Reserve_select from './reserve_/reserve_select';
import Step1 from './reserve_/step1';
import Step2 from './reserve_/step2';
import Step3 from './reserve_/step3';
import Step4 from './reserve_/step4';

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step1: false,
            step3 : false,
            step4 : false,
            data : [
                {
                    id: 0,
                    name: "이터널스",                    
                },
                {
                    id: 1,
                    name: "베놈2",
                },
                {
                    id: 2,
                    name: "어바웃타임",
                }
            ],
            selected_items : [],
            ticket : [],
        };
    }

    render() {
        return (
            <div class="buster-light">
                <div class="hero common-hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="hero-ct">
                                    <h1> 예매</h1>
                                    <ul class="breadcumb">
                                        <li class="active"><a href="index.html">홈</a></li>
                                        <li> <span class="ion-ios-arrow-right"></span> 예매</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {!this.props.is_logined && !this.state.step1 ? <Reserve_select toStep1={function(){
                    this.setState({
                        step1: true,
                    })
                }.bind(this)}
                onChangePage={this.props.onChangePage}
                /> : <br/>}
	    
                {this.props.is_logined || this.state.step1 ? <Step1 data={this.state.data} getItems={function(arr){
                    this.setState({
                        selected_items : arr,
                    })
                }.bind(this)}
                selected_items={this.state.selected_items}
                /> : <div/>}
                {this.state.selected_items.length > 0 ? <Step2 selected_items={this.state.selected_items}
                toStep3={function(){
                    this.setState({
                        step3: true,
                    })
                }.bind(this)}></Step2> : <br/>}
                {this.state.step3 ? <Step3 getCount={function(arr){
                    this.setState({
                        ticket : arr
                    })
                }.bind(this)}
                toStep4={function(){
                    this.setState({
                        step4: true,
                    })
                }.bind(this)}
                /> : <br/>}
                {this.state.step4 ? <Step4 ticket={this.state.ticket}/> : <br/>}
	</div>
        );
    }
}

export default Reserve;