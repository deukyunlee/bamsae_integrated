import React, {Component} from 'react';


class Lost extends Component {
    constructor(props) {
    super(props);
    this.state = {
        tab : "faq",
        in_detail : false,
    }
}
    render() {
        const styleform = {
            position: 'relative',
            margin: '-10px',
            left: '1230px',
            right: '50px',
            color: '#9575cd'
        }
        return (
            <div>
                <div id="overview" class="tab-content">
                    <div class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>분실물문의</h3>
                                            <div style={styleform}>
                                                <a href="#" 
                                                class="redbtn"
                                                onClick={function (e) {
                                                            e.preventDefault();
                                                            this
                                                                .props
                                                                .onChangeTab("Lost_form");
                                                        }.bind(this)}>
                                                            분실물 문의
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        )
    }
}

export default Lost;