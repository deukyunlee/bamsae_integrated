import React, {Component} from 'react';
import Store_Content from './store_/store_contents';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab : "snack",
        }
    }
    render() {
        return (
            <div>
                <div class="buster-light">
                    <div class="hero common-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-ct">
                                        <h1 width="100px">스토어</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                스토어</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                            <ul class="tab-links tabs-mv">
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "snack",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>팝콘/음료</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "ticket",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>관람권</a>
                                </li>
                                <li>
                                    <a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "product",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>상품</a>
                                </li>
                            </ul>
                            <Store_Content tab={this.state.tab} onChangeTab={function(code){
                                this.setState({
                                    tab: code,
                                })
                            }.bind(this)}></Store_Content>
                        </div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Store;