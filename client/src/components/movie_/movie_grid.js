import React, { Component } from "react"
import MovieItem from "./movie_item"

class MovieGrid extends Component {
  render() {
    var data = this.props.data // array
    var i = 0
    var arr = []
    if (typeof data == "undefined" || data.length === 0)
      return <div class="flex-wrap-movielist mv-grid-fw">영화가 존재하지 않습니다.</div>
    while (i < data.length) {
      var rate = (Math.random() * 3 + 7).toFixed(2)
      arr.push(
        <MovieItem
          id={data[i].movie_id}
          name={data[i].movie_title}
          rate={rate}
          onChangeDetail={this.props.onChangeDetail}
        ></MovieItem>
      )
      i++
    }
    return <div class="flex-wrap-movielist mv-grid-fw">{arr}</div>
  }
}

export default MovieGrid
