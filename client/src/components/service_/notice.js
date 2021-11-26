import React, { Component } from 'react';
import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColoumn';
import CommonTableRow from './table/CommonTableRow';

class Notice extends Component{
  render(){
    return( 
<div id="overview" class="tab-content">
                <div class="tab active">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <h3>공지사항</h3>

                                        <div> <CommonTable headersName={['구분', '제목', '등록일', '조회수']}>
                                            <CommonTableRow>
                                                <CommonTableColumn>1</CommonTableColumn>
                                                <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
                                                <CommonTableColumn>2021-11-25</CommonTableColumn>
                                                <CommonTableColumn>6</CommonTableColumn>
                                            </CommonTableRow>
                                            <CommonTableRow>
                                                <CommonTableColumn>2</CommonTableColumn>
                                                <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
                                                <CommonTableColumn>2020-10-25</CommonTableColumn>
                                                <CommonTableColumn>5</CommonTableColumn>
                                            </CommonTableRow>
                                            <CommonTableRow>
                                                <CommonTableColumn>3</CommonTableColumn>
                                                <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
                                                <CommonTableColumn>2020-10-25</CommonTableColumn>
                                                <CommonTableColumn>1</CommonTableColumn>
                                            </CommonTableRow>
                                            <CommonTableRow>
                                                <CommonTableColumn>4</CommonTableColumn>
                                                <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
                                                <CommonTableColumn>2020-10-25</CommonTableColumn>
                                                <CommonTableColumn>2</CommonTableColumn>
                                            </CommonTableRow>
                                            <CommonTableRow>
                                                <CommonTableColumn>5</CommonTableColumn>
                                                <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
                                                <CommonTableColumn>2020-10-25</CommonTableColumn>
                                                <CommonTableColumn>4</CommonTableColumn>
                                            </CommonTableRow>
                                        </CommonTable>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                )
  }}

  export default Notice;