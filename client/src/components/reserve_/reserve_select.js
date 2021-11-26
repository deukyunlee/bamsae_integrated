import React, { Component } from 'react';

class Reserve_select extends Component {
    render() {
        return (
            <div class="container">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <br /><br />
                <br /><br />
                    버튼에 쓸 이미지 필요<br/>
                    <button onClick={function(e){
                        e.preventDefault();
                        this.props.toStep1();
                    }.bind(this)}>비회원 예매</button>
                    <button onClick={function(e){
                        e.preventDefault();
                        this.props.toStep1();
                    }.bind(this)}>회원으로 예매</button>
                </div>
            </div>
        );
    }
}

export default Reserve_select;