import React, { Component } from "react"

class Movie_slider extends Component {
  render() {
    return (
      <div class="slider movie-items">
        <div class="container">
          <div class="row">
            <div class="social-link">
              <p>Follow us:</p>
              <a href="#">
                <i class="ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="ion-social-googleplus"></i>
              </a>
              <a href="#">
                <i class="ion-social-youtube"></i>
              </a>
            </div>
            <div class="slick-multiItemSlider">
              <div class="movie-item">
                <div class="mv-img">
                  <a href="#">
                    <img src="images/uploads/mv-item5.jpg" alt="" width="285" height="437" />
                  </a>
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="blue">
                      <a href="#">SF</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">듄</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>9.2</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <a href="#">
                    <img src="images/uploads/mv-item2.jpg" alt="" width="285" height="437" />
                  </a>
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="yell">
                      <a href="#">액션</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">이터널스</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>8.2</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <a href="#">
                    <img src="images/uploads/mv-item3.jpg" alt="" width="285" height="437" />
                  </a>
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="green">
                      <a href="#">코미디</a>
                    </span>
                
                  </div>
                  <h6>
                    <a href="#">엔칸토:마법의세계</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>8.1</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <a href="#">
                    <img src="images/uploads/mv-item1.jpg" alt="" width="285" height="437" />
                  </a>
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="orange">
                      <a href="#">스릴러</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">유체이탈자</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>7.4</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <a href="#">
                    <img src="images/uploads/mv-item4.jpg" alt="" width="285" height="437" />
                  </a>
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="green">
                      <a href="#">로맨스 코미디</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">연애 빠진 로맨스</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>6.4</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <a href="#">
                    <img src="images/uploads/mv-item9.jpg" alt="" width="285" height="437" />
                  </a>
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="green">
                      <a href="#">코미디</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">프렌치 디스패치</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>7.5</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <img src="images/uploads/mv-item6.jpg" alt="" width="285" height="437" />
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="blue">
                      <a href="#">애니메이션</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">태일이</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>7.9</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <img src="images/uploads/mv-item8.jpg" alt="" width="285" height="437" />
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="orange">
                      <a href="#">드라마</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">디어 에반 헨슨</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>8.7</span> /10
                  </p>
                </div>
              </div>
              <div class="movie-item">
                <div class="mv-img">
                  <img src="images/uploads/mv-item7.jpg" alt="" width="285" height="437" />
                </div>
                <div class="title-in">
                  <div class="cate">
                    <span class="green">
                      <a href="#">로맨스 코미디</a>
                    </span>
                  </div>
                  <h6>
                    <a href="#">장르만 로맨스</a>
                  </h6>
                  <p>
                    <i class="ion-android-star"></i>
                    <span>5.1</span> /10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie_slider
