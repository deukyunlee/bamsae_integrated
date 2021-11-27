import React, {Component} from 'react';
import Admin_content from './admin_content';
class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "all",
            in_detail: false
        }
    }
    render() {
        const stylebtn = {
            width: '100px'
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
                                            <h3>매출 현황</h3>
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
                    <div class="row">
                        <div class="col-md-6 form-it">
                            <ul class="tab-links tabs-mv">
                                <li>
                                    <a
                                        href="#overview"
                                        onClick={function (e) {
                                            e.preventDefault();
                                            this.setState({tab: "all", in_detail: false});
                                        }.bind(this)}>
                                        <button style={stylebtn}>전체 통계</button>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#overview"
                                        onClick={function (e) {
                                            e.preventDefault();
                                            this.setState({tab: "other_place", in_detail: false});
                                        }.bind(this)}>
                                        <button style={stylebtn}>지점별 통계</button>
                                    </a>
                                </li>
                            </ul>
                            <Admin_content
                                tab={this.state.tab}
                                in_detail={this.state.in_detail}
                                onChangeDetail={function (e) {
                                    var det = this.state.in_detail;
                                    this.setState({
                                        in_detail: !det
                                    });
                                }.bind(this)}></Admin_content>
                        </div>
                    </div>
                </div>
                <div></div>

            </div>
        );
    }
}

export default Sales;