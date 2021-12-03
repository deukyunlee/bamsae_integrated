import React, { Component } from 'react';
import Home from './home';
import Test from './test';
import Result from './result';
import BeforeResult from './beforeResult';

class MBTI_Contents extends Component {
    render() {
        if (this.props.page === "home") {
            return (<Home onChangePage={this.props.onChangePage}></Home>);
        }
        else if (this.props.page === "test") {
            return (<Test onChangePage={this.props.onChangePage}></Test>);
        }
        else if (this.props.page === "result") {
            return (<Result onChangePage={this.props.onChangePage}></Result>);
        }
        else if (this.props.page === "beforeResult") {
            return (<BeforeResult onChangePage={this.props.onChangePage}></BeforeResult>);
        }
    }
}

export default MBTI_Contents;