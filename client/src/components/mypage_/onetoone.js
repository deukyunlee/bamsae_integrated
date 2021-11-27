import React, { Component } from 'react';
import Inquiry_item from './inquiry_item';

class OnetoOne extends Component {
    render() {
        var inquiries = this.props.inquiry_data;
        var i;
        var arr = [];
        for (i=0; i<inquiries.length; i++) {
            arr.push(<Inquiry_item name={inquiries[i].title} date={inquiries[i].date}></Inquiry_item>)
        }
        return (
            <div class="form-style-1 user-pro" action="#">
                <h3>문의 내역</h3><br/>
                <div class="table-mp">
                <table class="table-mp" border="1">
                <th>제목</th>
                <th>등록일</th>
                <th>답변상태</th>
                {arr}
                </table>
                </div>
					</div>
        );
    }
}

export default OnetoOne;