import React, { Component } from 'react';
import Faq_table from "./table/faq_table"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import axios from "axios"

class Notice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notice: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/memBoard/all")
            .then(res => res.json())
            .then(res => this.setState({notice: res}))
    }


    render() {
        const styletext = {
            textAlign: "center",
        }

        return (
            <div>
                <div class="tab-content">
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>공지사항</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            width: 50,
                                            textAlign: "center",
                                        }}
                                    >
                                        번호
                  </TableCell>
                                    <TableCell
                                        style={{
                                            width: 700,
                                            textAlign: "center",
                                        }}
                                    >
                                        제목
                  </TableCell>
                                    <TableCell
                                        style={{
                                            width: 200,
                                            textAlign: "center",
                                        }}
                                        align="right"
                                    >
                                        게시일
                  </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.notice.map((c) => {
                                    console.log(c)
                                    return (
                                        <Faq_table
                                            key={c.post_no}
                                            id={c.post_no}
                                            name={c.post_title}
                                            date={c.posted_date}
                                            onChangeDetail={this.props.onChangeDetail}
                                            getData={function () {
                                                this.props.upData(this.state.notice)
                                            }.bind(this)}
                                        />
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

  export default Notice;