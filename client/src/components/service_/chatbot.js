import React, { Component } from 'react';
import Faq_table from "./table/faq_table"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import axios from "axios"

class Notice extends Component {
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
                                            <p>궁금한 점이 있거나 도움을 받고 싶다면 BS 시네마의 챗봇 밤새냥을 이용해보세요.</p>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                            <button class="col-md-2" onClick={function (e) {
                                                e.preventDefault()
                                                window.open('https://frogue.danbee.ai/?chatbot_id=e2aaeff1-83f6-4838-80d1-96b3c1e705b4')
                                            }.bind(this)}>챗봇 이용하기</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notice;