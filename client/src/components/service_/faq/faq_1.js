import React, {Component} from 'react';

class Faq_1 extends Component {
    render() {
        return (
            <div class="tab-content">
                <div>
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>공지사항</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <br/>
                    <div class="title-hd-sm">
                        <h4>{this.props.data[Number(this.props.faq_id) - 1].id}</h4>
                        <h4>{this.props.data[Number(this.props.faq_id) - 1].name}</h4>
                        <h4>{this.props.data[Number(this.props.faq_id) - 1].date}</h4>
                    </div>
                    <br/>
                    <span>{this.props.data[Number(this.props.faq_id) - 1].content}</span>
                    <br />
                    <span>{this.props.data[Number(this.props.faq_id) - 1].content2}</span>

                </div>
            </div>
        )
    }
}

export default Faq_1;