import React, {Component} from 'react';
import Theater_Contents from './theater_/theater_contents';

class Theater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "list",
            focus: "seoul",
            selected_item: "null",
            data: {
                seoul: [
                    {
                        name: "강남점",
                        desc: "서울의 중심에 서다",
                        seat: 580
                    }, {
                        name: "이태원점",
                        desc: "젊음의 도시",
                        seat: 610
                    }
                ],
                gyeonggi: [
                    {
                        name: "안산점",
                        desc: "하냥이의 고향",
                        seat: 420
                    }
                ]
            }
        }
    }

    handleChange = (code) => {
        this.setState({
            page: code,
        });
    };

    handleFocus = (focus_) => {
        this.setState({
            focus : focus_,
        });
    }

    countAll = () => {
        var keys = Object.keys(this.state.data);
        var sum = 0;
        for (const k of keys) {
            sum += this
                .state
                .data[k]
                .length;
        }
        return sum;
    };

    render() {
        return (
            <div class="buster-light">
                <Theater_Contents
                    page={this.state.page}
                    focus={this.state.focus}
                    data={this.state.data}
                    handleChange={this.handleChange}
                    handleFocus={this.handleFocus}></Theater_Contents>
            </div>
        );
    }
}

export default Theater;