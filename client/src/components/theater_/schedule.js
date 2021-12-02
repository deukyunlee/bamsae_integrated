import React, { Component } from 'react';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_6am :[],
            item_8am :[],
        };
        this.makeRows();
    }
    
    makeRows() {
        // 표에서 시간대별로 리스트에 데이터를 추가하는 작업
        var schedule = this.props.schedule // array 영화 id 조건화는 추후 schedule[i] 이 부분에서 반영하게끔
        for (const item of schedule) {
            switch (item.start_time.getHours()) {
                case 6:
                    var a = this.state.item_6am;
                    a.push(item);
                    this.setState({
                        item_6am: a,
                    });
                    break;
                case 8:
                    var a = this.state.item_8am;
                    a.push(item);
                    this.setState({
                        item_8am: a,
                    });
                    break;
            }
        }
    }

    render() {
        var allSchedule = Object.values(this.state);
        
        var row = [];
        for (const timeline of allSchedule) {
            var obj = {
                1: [], // 1관
                2: [], // 2관
                3: [], // 3관
                4: [] // imax 관
            }
            for (const item of timeline) { // loc 2
                for (var j=1; j<=4; j++) {
                    if (item.loc == j) {
                        obj[j.toString()].push(item);
                        break;
                    }
                }
            }
            row.push(obj);
        }
        // row = [ {1:[], 2:[], 3:[], 4:[]} , {1:[], 2:[], 3:[], 4:[]} ]
        var arr = [];
        for (var i=0; i<row.length; i++) {
            var timerow = row[i] // object
            var items = Object.values(timerow);
            var temp = [];
            for (const timeline of items) {
                if (timeline.length == 0) {
                    temp.push(<td></td>);
                } else {
                    for (const item of timeline) {
                        temp.push(<td>{item.movie_name}</td>)
                    }
                }
            }
            arr.push(<tr>
                <th>am{i}:00</th>
                {temp}
            </tr>);
        }
        return (
            <table>
                <thead>
                    <td/>
                    <th>1관</th>
                    <th>2관</th>
                    <th>3관</th>
                    <th>IMAX관</th>
                </thead>
                <tbody>
                {arr}
                </tbody>
            </table>
        );
    }
}

export default Schedule;