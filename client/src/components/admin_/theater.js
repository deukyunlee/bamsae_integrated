import React, { Component } from "react"
import Board_table from '../service_/table/board_table';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Board extends Component {
    categoryChange(e) {
        var good_a = ["지점 선택", "강남", "신촌", "마포", "강변", "건대입구", "구로", "대학로", "동대문", "명동", "목동", "미아", "상봉", "수유", "송파"];
        var good_b = ["지점 선택", "고양", "광교", "동탄", "안산", "하남", "평택", "안성", "동수원", "수원", "북수원", "화성"];
        var target = document.getElementById("theater");

        if (e == "a") var d = good_a;
        else if (e == "b") var d = good_b;

        target.options.length = 0;
        d.forEach(x => {
            var opt = document.createElement("option");
            opt.value = x;
            opt.innerHTML = x;
            target.appendChild(opt);
        })
    }

    theaterChange(e) {
        console.log(e)
        if (e == "강남") {
            let x = document.getElementsByClassName("name")[0];
            x.innerText = "BS시네마 강남점";
            x = document.getElementsByClassName("intro")[0];
            x.innerText = "강남에 중심하여 최상의 view를 제공하는 로맨틱 멀티플렉스!";
            x = document.getElementsByClassName("address")[0];
            x.innerText = "서울특별시 강남구 역삼동 814-6 스타플렉스";
            x = document.getElementsByClassName("num")[0];
            x.innerText = "1544-1122";
        } else if (e == "신촌") {
            let x = document.getElementsByClassName("name")[0];
            x.innerText = "BS시네마 신촌점";
            x = document.getElementsByClassName("intro")[0];
            x.innerText = "고급화된 인테리어의 안락함을 즐길 수 있는 신촌의 멀티플렉스";
            x = document.getElementsByClassName("address")[0];
            x.innerText = "서울특별시 서대문구 신촌역로 30 신촌민자역사 5층";
            x = document.getElementsByClassName("num")[0];
            x.innerText = "1544-1249";

        }
    }

    render() {
        const stylebtn = {
            display: "flex",
            width: "200px",
            margin: "10px",
        }
        const stylebtn2 = {
            width: '50px',
            float: 'right',
        }
        const stylebtn3 = {
            width: '50px',
            float: 'right',
            marginRight: '20px'
        }
        const board = [
            {
                'id': 1,
                'name': '극장 이용가능 시간 안내',
                'date': '2021.11.08',
                'content': '정부 방역 지침 준수를 위해 BS시네마 강남점은 오후 10시까지 이용가능합니다. 협조 부탁드리며 감사합니다.'
            }, {
                'id': 2,
                'name': '대관 관련 안내',
                'date': '2021.11.25',
                'content': 'BS시네마 강남점은 방역 지침 준수를 위해 11.31까지 대관이 불가능하오니 참고바랍니다.'
            }, {
                'id': 3,
                'name': '강남점 특별 이벤트',
                'date': '2021.12.6',
                'content': 'BS시네마 강남점에서만 열리는 특별한 이벤트!',
                'content2': "12.31까지 BS시네마 강남점을 이용해주시는 고객님들께 추가 포인트 적립 10%를 제공합니다. 많은 이용 부탁드립니다."
            },
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
                                            <h3>극장 관리</h3>
                                            <br></br>
                                                <select onChange={function (e) {
                                                    this.categoryChange(e.target.value);
                                                }.bind(this)}>
                                                <option value="">지역 선택</option>
                                                <option value="a">서울</option>
                                                <option value="b">경기</option>
                                                <option value="c">인천</option>
                                                <option>강원</option>
                                                <option>대전/충청</option>
                                                <option>대구</option>
                                                <option>부산/울산</option>
                                                <option>경상</option>
                                                <option>광주/전라/제주</option>

                                            </select>
                                            <select id="theater" onChange={function (e) {
                                                this.theaterChange(e.target.value);
                                            }.bind(this)}>
                                                <option value="">지점</option>
                                            </select>

                                            <br></br><br></br>
                                            <div class="form-style-1 user-pro" action="#">
                                                <form action="#" id="info">
                                                    <h5>극장 정보</h5><br></br>
                                                    <div class="row">
                                                        <div class="col-md-6 form-it">
                                                            <label>극장명</label>
                                                            <p><span class='name'></span></p>
                                                        </div>
                                                        <div class="col-md-6 form-it">
                                                            <label>극장 소개</label>
                                                            <p><span class='intro'></span></p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6 form-it">
                                                            <label>극장 전화번호</label>
                                                            <p><span class='num'></span></p>
                                                        </div>
                                                        <div class="col-md-6 form-it">
                                                            <label>극장 주소</label>
                                                            <p><span class='address'></span></p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <input
                                                                class="submit"
                                                                type="submit"
                                                                value="수정"
                                                                onClick={function (e) {
                                                                    e.preventDefault()
                                                                    this.props.onChangeSection("edit")
                                                                }.bind(this)}
                                                            ></input>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h5>극장 게시판</h5>
                                            <button style={stylebtn3}>삭제</button>
                                            <button style={stylebtn2}>추가</button><br></br>
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
                                                                board.map(c => {
                                                                    return <Board_table key={c.id} id={c.id} name={c.name} date={c.date} onChangeDetail={this.props.onChangeDetail} getData={function () {
                                                                        this.props.upData(board);
                                                                    }.bind(this)
                                                                    } />
                                                                })
                                                            }
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </div>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
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

export default Board
