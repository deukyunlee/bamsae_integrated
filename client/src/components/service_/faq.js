import React, {Component} from 'react';
import Faq_table from './table/faq_table'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Faq extends Component {

    render() {
        const styletext={
            textAlign: 'center',
        }
        const faq = [
            {
                'id': 1,
                'name': '구매에 따른 적립금 혜택이 어떻게 되나요?',
                'date': '2021/10/20',
                'content': '구매시 결제금액의 5%가 적립됩니다.'
            }, {
                'id': 2,
                'name': '멤버십 포인트가 적립되지 않았습니다.',
                'date': '2021/11/03',
                'content': '포인트는 영화 관람 2~3일 후 확인 가능합니다. ',
                'content2': '이후에도 확인되지 않을 시, 고객센터로 문의 주시기 바랍니다.',
            }, {
                'id': 3,
                'name': '티켓/관람권 구매 시 카드 할부 결제 되나요?',
                'date': '2021/10/20',
                'content':'■ 영화 티켓 구매: 영화 티켓 구매 금액이 5만원 이상일 경우, 할부 결제 가능합니다. 단, 현장 매표소를 통해서만 할부 결제 가능한 점 참고 부탁드립니다.' ,
                'content2' :'■ 관람권 구매: 관람권은 유가증권으로 구매 금액 상관없이 할부 결제 불가합니다.'
            }, {
                'id': 4,
                'name': '밤새시네마의 오픈일은 언제인가요?',
                'date': '2021/12/10',
                'content': '밤새시네마의 정식 오픈 날짜는 2021/12/10입니다! 많은 애용 부탁드립니다^^~'
            }
        ]
        return (
            <div>
                <div class="tab-content">
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>FAQ</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                    style={{
                                            width: 50,
                                            textAlign: "center",
                                        }}>번호</TableCell>
                                    <TableCell
                                    style={{
                                            width: 700,
                                            textAlign: "center",
                                        }}>제목</TableCell>
                                    <TableCell
                                        style={{
                                            width: 200,
                                            textAlign: "center"
                                        }}
                                        align="right">게시일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    faq.map(c => {
                                        return <Faq_table key={c.id} id={c.id} name={c.name} date={c.date} onChangeDetail={this.props.onChangeDetail} getData={function(){
                                            this.props.upData(faq);
                                        }.bind(this)
                                    }/>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>

        );
    }
}

export default Faq;