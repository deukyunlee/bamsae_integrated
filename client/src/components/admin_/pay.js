import React, {Component} from "react"
import axios from "axios"
import Pay_table from "../service_/table/pay_table";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Pay extends Component {
    getSalary = async () => {
        const salary = await axios.get(
            "http://localhost:5000/emp/salary/dept?emp_dept='회계부'"
        )
        console.log(salary.data.data)
    }
    componentDidMount() {
        this.getSalary()
    }
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
                'hour': '82시간',
                'salary': '1,690,000'
            }, {
                'id': 2,
                'sorting': '정직원',
                'name': '손윤석',
                'hour': '91시간',
                'salary': '1,820,000'
            }, {
                'id': 3,
                'sorting': '정직원',
                'name': '박지우',
                'hour': '102시간',
                'salary': '2,010,000'
            }, {
                'id': 4,
                'sorting': '정직원',
                'name': '이득윤',
                'hour': '71시간',
                'salary': '1,520,000'
            }, {
                'id': 4,
                'sorting': '정직원',
                'name': '이유진',
                'hour': '68시간',
                'salary': '1,480,000'
            }
        ]
        return (
            <div>
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
                                    }}>총 근무시간</TableCell>
                                <TableCell
                                    style={{
                                        width: 200,
                                        textAlign: "center"
                                    }}
                                    align="right">급여</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                faq.map(c => {
                                    return <Pay_table
                                        key={c.id}
                                        id={c.id}
                                        sorting={c.sorting}
                                        name={c.name}
                                        hour={c.hour}
                                        salary={c.salary}
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

export default Pay
