import React, { Component } from "react"
import Movie_slider from "./index_/Slider_movieitem"
import Movieinfo from "./index_/movieinfo"
import Event from "./index_/Event"
import NoticeInfo from "./index_/noticeinfo"
import axios from "axios"

class Main_A extends Component {
  // axiosAPI = async () => {
  //   const products = await axios.get("http://localhost:5000/movieSearch?movie_title=이터널스")
  //   console.log(products.data.data[0])
  // }
  // componentDidMount() {
  //   this.axiosAPI()
  // }
  render() {
    return (
      <div>
        <Movie_slider></Movie_slider>
        <div class="movie-items">
          <div class="container">
            <div class="row ipad-width">
              <Movieinfo></Movieinfo>
              <Event></Event>
            </div>
          </div>
        </div>
        <div class="ads">
        </div>
        <div class="latestnew">
          <div class="container">
            <div class="row ipad-width">
              <NoticeInfo></NoticeInfo>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main_A
