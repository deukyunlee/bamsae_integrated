import { Component } from 'react';
import Row from './row';

class Select_seat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : [],
        };
    }

    iter_columns() {
        var ths = [];
        for (var i=65; i<74; i++) {
            var char = String.fromCharCode(i);
            ths.push(<th style={{textAlign:"center",}}>{char}</th>)
        }
        return ths;
    }

    iter_rows() {
        var rows = [];
        for (var i=1; i<11; i++) {
            rows.push(<Row key={i} row_no={i} sendData={function(data){
                if (this.state.selected.find(x => x === data))
                    return;
                var arr = this.state.selected;
                arr.push(data);
                this.setState({
                    selected : arr,
                });
            }.bind(this)}></Row>);
        }
        return rows;
    }

    render() {
        return (<div>
            <label>좌석 선택</label>
            <table class="seats">
                {this.iter_columns()}
                {this.iter_rows()}
            </table>
            <label>
                선택된 좌석<br/>
                <p>{this.state.selected.join(" , ")}</p>
            </label>
            <div class="col-md-12 ">
            <button onClick={function(e){
                e.preventDefault();
                this.setState({
                    selected: [],
                })
                for (const x of this.state.selected) {
                    document.getElementById(x).style.backgroundColor = "#E4EAF0";
                }
            }.bind(this)}
            class="redbtn">선택 좌석 초기화</button>
            <button class="redbtn" style={{backgroundColor: "#4280bf", marginLeft:20,}}
            onClick={function(e){
                e.preventDefault();
                if (this.state.selected.length === 0) {
                    alert("좌석을 선택해주세요.")
                    return;
                }
                this.props.getSelected(this.state.selected);
                this.props.toStep3();
            }.bind(this)}>확인</button>
            </div>
            </div>
        );
    }
}

export default Select_seat;