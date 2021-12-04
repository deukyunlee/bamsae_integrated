import React, { Component } from 'react';
import axios from 'axios';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
        }
    }

    componentDidMount() {
        this.getSchedule();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.date !== prevProps.date)
            this.getSchedule();
    }

	getSchedule = async () => {
        var str = "";
        var mm = this.props.date.getMonth()+1;
        var dd = this.props.date.getDate();
        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;
        str += this.props.date.getFullYear() + "-";
        str += mm + "-";
        str += dd
		axios
            .get("http://localhost:5000/theater/sched?emp_belong=" + this.props.theater_id +
            "&beg=" + str)
            .then((data_) => {
                this.setState({
                schedule : data_.data,
                });
            }
            )
            .catch(e => {
                console.error(e);
            });
	}
    
    makeRows() {
        // 표에서 시간대별로 리스트에 데이터를 추가하는 작업
        var timeline =
        {
            item_6am :[],
            item_7am :[],
            item_8am :[],
            item_9am :[],
            item_10am :[],
            item_11am :[],
            item_12pm :[],
            item_1pm :[],
            item_2pm :[],
            item_3pm :[],
            item_4pm :[],
            item_5pm :[],
            item_6pm :[],
        }
        var schedule = this.state.schedule // array [{}, {}, {} ...]
        if (schedule === undefined)
            return;
        for (const item of schedule) {
            var hours = item.screen_beg.substr(11, 2);
            switch (hours) {
                case "06":
                    timeline.item_6am.push(item);
                    break;
                case "07":
                    timeline.item_7am.push(item);
                    break;
                case "08":
                    timeline.item_8am.push(item);
                    break;
                case "09":
                    timeline.item_9am.push(item);
                    break;
                case "10":
                    timeline.item_10am.push(item);
                    break;
                case "11":
                    timeline.item_11am.push(item);
                    break;
                case "12":
                    timeline.item_12pm.push(item);
                    break;
                case "13":
                    timeline.item_1pm.push(item);
                    break;
                case "14":
                    timeline.item_2pm.push(item);
                    break;
                case "15":
                    timeline.item_3pm.push(item);
                    break;
                case "16":
                    timeline.item_4pm.push(item);
                    break;
                case "17":
                    timeline.item_5pm.push(item);
                    break;
                case "18":
                    timeline.item_6pm.push(item);
                    break;
                default:
                    break;
            }
        }
        return timeline;
    }

    render() {
        var timeline = this.makeRows();
        var allSchedule = Object.values(timeline); // [ [{}, {}], [], [] ] 
        var row = [];
        for (const timeline of allSchedule) {
            if (timeline.length === 0) {
                row.push(null);
                continue;
            }
            var obj = {
                1: [], // 1관
                2: [], // 2관
                3: [], // 3관
                4: [] // imax 관
            }
            for (const item of timeline) { // loc 2
                for (var j=1; j<=4; j++) {
                    if (item.audit_no === j) {
                        obj[j.toString()].push(item);
                        break;
                    }
                }
            }
            row.push(obj);
        }
        // row = [ {1:[], 2:[], 3:[], 4:[]} , null ]
        var arr = [];
        for (var i=0; i<row.length; i++) {
            var temp = [];
            if (row[i] === null)
                for (var j=0; j<4; j++) temp.push(<td/>);
            else {
                var timerow = row[i] // object
                var items = Object.values(timerow); // [ [], [] ]
                for (const timeline of items) {
                    if (timeline.length === 0) {
                        temp.push(<td></td>);
                    } else {
                        for (const item of timeline) {
                            temp.push(<td>{item.movie_title}<br/>{item.screen_beg.substr(11,8)}</td>)
                        }
                    }
                }
            }
            arr.push(<tr>
                <th>{6+i}:00</th>
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