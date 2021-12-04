import React, {Component} from 'react';
import MBTI_Contents from './mbti/mbti_contents';


class Mbti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page : "home",
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
                                        <h1 width="100px">영화 취향 MBTI</h1>
                                        <ul class="breadcumb">
                                            <li class="active">
                                                <a href="#">홈</a>
                                            </li>
                                            <li>
                                                <span class="ion-ios-arrow-right"></span>
                                                MBTI</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-tabs">
                        <div class="tabs">
                        <MBTI_Contents onChangePage={function(code){
                            this.setState({
                                page: code,
                            });
                        }.bind(this)}
                        page={this.state.page}/>
                        </div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Mbti;