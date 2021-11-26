import React, {Component} from 'react';

class Board extends Component {
    render() {
        return (
          <div>
            <div class="tab-content">
                <div id="overview" class="tab active">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <h3>게시판 관리</h3>
                                        <div class="flex-wrap-movielist mv-grid-fw">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Board;