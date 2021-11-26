import React, { Component } from 'react';
import CommonTable from '../service_/table/CommonTable';
import CommonTableRow from '../service_/table/CommonTableRow';
import CommonTableColumn from '../service_/table/CommonTableColoumn';

class OnetoOne extends Component {
    render() {
        return (
            <div class="form-style-1 user-pro" action="#">
                <h3>문의 내역</h3><br/>
                <div class="table-mp">
                <table class="table-mp" border="1">
                <th>제목</th>
                <th>등록일</th>
                <th>답변상태</th>
                <tr>
                    <td>질문1</td>
                    <td>2021-11-23</td>
                    <td>미완료</td>
                </tr>
                <tr>
                    <td>질문2</td>
                    <td>2021-11-22</td>
                    <td>답변완료</td>
                </tr>
                </table>
                </div>
					</div>
        );
    }
}

export default OnetoOne;