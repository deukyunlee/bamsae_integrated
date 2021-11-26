import React, {Component} from 'react';
import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColoumn';
import CommonTableRow from './table/CommonTableRow';

class Lost extends Component {
    constructor(props) {
    super(props);
    this.state = {
        tab : "faq",
        in_detail : false,
    }
}
    render() {
        const styleform = {
            position: 'relative',
            margin: '-10px',
            left: '1230px',
            right: '50px',
            color: '#9575cd'
        }
        return (
            <div>
                <div id="overview" class="tab-content">
                    <div class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>분실물문의</h3>
                                            <div style={styleform}>
                                                <a href="#" 
                                                class="redbtn"
                                                onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeDetail("Lost_form");
                                                        }.bind(this)}>
                                                            분실물 문의
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CommonTable headersName={['번호', '극장', '제목', '접수상태', '등록일']}>
                        <CommonTableRow>
                            <CommonTableColumn>1</CommonTableColumn>
                            <CommonTableColumn>강남점</CommonTableColumn>
                            <CommonTableColumn>분실물 문의드립니다.</CommonTableColumn>
                            <CommonTableColumn>답변완료</CommonTableColumn>
                            <CommonTableColumn>2021-11-25</CommonTableColumn>
                        </CommonTableRow>
                        <CommonTableRow>
                            <CommonTableColumn>2</CommonTableColumn>
                            <CommonTableColumn>강남점</CommonTableColumn>
                            <CommonTableColumn>분실물 문의드립니다.</CommonTableColumn>
                            <CommonTableColumn>답변완료</CommonTableColumn>
                            <CommonTableColumn>2021-11-25</CommonTableColumn>
                        </CommonTableRow>
                        <CommonTableRow>
                            <CommonTableColumn>3</CommonTableColumn>
                            <CommonTableColumn>강남점</CommonTableColumn>
                            <CommonTableColumn>분실물 문의드립니다.</CommonTableColumn>
                            <CommonTableColumn>답변완료</CommonTableColumn>
                            <CommonTableColumn>2021-11-25</CommonTableColumn>
                        </CommonTableRow>
                        <CommonTableRow>
                            <CommonTableColumn>4</CommonTableColumn>
                            <CommonTableColumn>강남점</CommonTableColumn>
                            <CommonTableColumn>분실물 문의드립니다.</CommonTableColumn>
                            <CommonTableColumn>답변완료</CommonTableColumn>
                            <CommonTableColumn>2021-11-25</CommonTableColumn>
                        </CommonTableRow>
                        <CommonTableRow>
                            <CommonTableColumn>5</CommonTableColumn>
                            <CommonTableColumn>강남점</CommonTableColumn>
                            <CommonTableColumn>분실물 문의드립니다.</CommonTableColumn>
                            <CommonTableColumn>답변완료</CommonTableColumn>
                            <CommonTableColumn>2021-11-25</CommonTableColumn>
                        </CommonTableRow>
                    </CommonTable>
                </div>
            </div>
        )
    }
}

export default Lost;