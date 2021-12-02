import React, {Component} from 'react';
import Admin_content from './admin_content';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "commuting",
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
                                            <h3>직원 관리</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                    <div class="row">
                        <div class="col-md-12 form-it">
                            <ul class="tab-links tabs-mv">
                                <li>
                                    <a
                                        href="#overview"
                                        onClick={function (e) {
                                            e.preventDefault();
                                            this.setState({tab: "commuting", in_detail: false});
                                        }.bind(this)}>
                                        <button style={stylebtn}>근무 관리</button>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#overview"
                                        onClick={function (e) {
                                            e.preventDefault();
                                            this.setState({tab: "payment", in_detail: false});
                                        }.bind(this)}>
                                        <button style={stylebtn}>급여관리</button>
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

            </div>
        );
    }
}

export default Employee;