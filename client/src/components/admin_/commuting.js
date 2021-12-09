import React, {Component} from 'react';
import Commuting_table from '../service_/table/commuting_table';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Commuting extends Component {

    render() {
        const stylebtn = {
            width: '50px',
            float: 'right'
        }
        const stylebtn2 = {
            width: '50px',
            float: 'right'
        }
        const faq = [
            {
                'id': 1,
                'sorting': '정직원',
                'name': '배소정',
                'hour': 'sojeong@bscinema.com',
                'date': '2021/11/30',
                'phone' : '010-1234-5678'
            }, {
                'id': 2,
                'sorting': '정직원',
                'name': '손윤석',
                'hour': 'yoonseok@bscinema.com',
                'date': '2021/11/30',
                'phone' : '010-1243-5778'
            }, {
                'id': 3,
                'sorting': '정직원',
                'name': '박지우',
                'hour': 'jiwoo@bscinema.com',
                'date': '2021/11/30',
                'phone' : '010-1423-5778'
            }, {
                'id': 4,
                'sorting': '정직원',
                'name': '이득윤',
                'hour': 'deukyoon@bscinema.com',
                'date': '2021/11/30',
                'phone' : '010-1224-5578'
            }, {
                'id': 5,
                'sorting': '정직원',
                'name': '이유진',
                'hour': 'yujin@bscinema.com',
                'date': '2021/11/30',
                'phone' : '010-4158-5678'
            }
        ]
        return (

            <div>
                <div
                    style={{
                        margin: '10px'
                    }}
                    class="col-md-12 form-it">
                    <form>
                        <p>
                            <input id="datefield" type="date"></input>
                        </p>
                    </form>
                </div>

                <button style={stylebtn2}>삭제</button>
                <button style={stylebtn}>추가</button>

                <br/>
                <br/>
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{
                                        width: 100,
                                        textAlign: "center"
                                    }}>번호</TableCell>
                                <TableCell
                                    style={{
                                        width: 200,
                                        textAlign: "center"
                                    }}>직급</TableCell>
                                <TableCell
                                    style={{
                                        width: 200,
                                        textAlign: "center"
                                    }}
                                    align="right">이름</TableCell>
                                <TableCell
                                    style={{
                                        width: 200,
                                        textAlign: "center"
                                    }}>이메일</TableCell>
                                <TableCell
                                    style={{
                                        width: 200,
                                        textAlign: "center"
                                    }}
                                    align="right">입사일</TableCell>
                                <TableCell
                                    style={{
                                        width: 200,
                                        textAlign: "center"
                                    }}
                                    align="right">연락처</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                faq.map(c => {
                                    return <Commuting_table
                                        key={c.id}
                                        id={c.id}
                                        sorting={c.sorting}
                                        name={c.name}
                                        hour={c.hour}
                                        date={c.date}
                                        phone={c.phone}
                                        onChangeDetail={this.props.onChangeDetail}
                                        getData={function () {
                                            this
                                                .props
                                                .upData(faq);
                                        }.bind(this)}/>
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>

        );
    }
}

export default Commuting;