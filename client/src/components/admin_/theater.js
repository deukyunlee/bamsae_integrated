import React, { Component } from "react"

class Board extends Component {
    categoryChange(e) {
        var good_a = ["강남", "신촌", "마포"];
        var good_b = ["빅토리아", "엠버", "루나", "크리스탈"];
        var good_c = ["LE", "하니", "정화", "혜린", "솔지"];
        var target = document.getElementById("theater");

        if (e == "a") var d = good_a;
        else if (e == "b") var d = good_b;
        else if (e == "c") var d = good_c;

        target.options.length = 0;
        //d.forEach(x => {
        //    var opt = document.createElement("option");
        //    opt.value = d[x];
        //    opt.innerHTML = d[x];
        //    target.appendChild(opt);
        //})
    }

    render() {
        const stylebtn = {
            display: "flex",
            width: "200px",
            margin: "10px",
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
                                            <h3>극장 관리</h3>
                                            <div><br></br>
                                                <select onChange={function (e) {
                                                    this.categoryChange(e.target.value);
                                                }.bind(this)}>
                                                <option>지역</option>
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
                                            <select id="theater">
                                                <option value="">지점</option>
                                                </select>
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
