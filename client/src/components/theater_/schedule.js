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
        var allItems = Object.values(this.state);
        var itemObject = {
            1: [], // 1관
            2: [], // 2관
            3: [], // 3관
            4: [], // imax
        }
        for (const timeline of allItems) {
            for (const item of timeline) {
                for (var i=1; i<5; i++) {
                    if (item.loc === i) {
                        itemObject[String(i)].push(item);
                        continue;
                    }
                    itemObject[String(i)].push(null);
                }
                
            }
        }
        var list = [];
        for (var j=0; j<allItems.length; j++) {
            var items = [];
            for (var k=1; k<5; k++) {
                if (itemObject[String(k)][j] === null) {
                    items.push(<td></td>);
                    continue;
                }
                // <td>{itemObject[String(k)][j].movie_name}<br/>{itemObject[String(k)][j].start_time}</td>
                items.push(<td>여기 영화</td>);
            }
            list.push(
                <tr>
                <th>am{j+6}:00</th>
                    {items}
                </tr>)
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
                    {list}
                    <th>월급</th>
                    <td>100원</td>
                    <td>200원</td>
                    <td>400원</td>
                </tbody>
            </table>
        );
    }
}

export default Schedule;