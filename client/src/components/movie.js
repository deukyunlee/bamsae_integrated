import { Component } from 'react';
import MovieGrid from './movie_/movie_grid';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    id: 0,
                    name: "이터널스",
                    rate: 9.5,
                },
                {
                    id: 1,
                    name: "베놈2",
                    rate: 9.2,
                },
                {
                    id: 2,
                    name: "어바웃타임",
                    rate: 9.3,
                }
            ]
        };
    }

    render() {
        return (
            <div class="buster-light">
            <div class="hero common-hero">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-ct">
                <h1 width="100px">전체영화</h1>
                <ul class="breadcumb">
                  <li class="active"><a href="#">영화</a></li>
                  <li><span class="ion-ios-arrow-right"></span> 전체영화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div class="page-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="topbar-filter fw">
                <p>개봉작 <span>{this.state.data.length} 개</span>의 영화가 있어요!</p>
                <label>분류</label>
                <select>
                  <option value="popularity">인기순</option>
                  <option value="popularity">별점순</option>
                  <option value="rating">리뷰순</option>
                </select>
                <a href="movielist.html" class="list"><i class="ion-ios-list-outline"></i></a>
                <a href="moviegridfw.html" class="grid"><i class="ion-grid active"></i></a>
              </div>
              <MovieGrid data={this.state.data} onChangePage={this.props.onChangePage}></MovieGrid>
            </div>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default Movie;