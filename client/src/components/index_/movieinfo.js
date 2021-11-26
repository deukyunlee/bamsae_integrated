import { Component } from 'react';

class Movieinfo extends Component {
    render() {
        return (
            <div class="col-md-8">
              <div class="title-hd">
                <h2>영화 정보</h2>
                <a href="#" class="viewall">View all <i class="ion-ios-arrow-right"></i></a>
              </div>
              <div class="tabs">
                <ul class="tab-links">
                  <li class="active"><a href="#tab1">#인기작</a></li>
                  <li><a href="#tab2"> #상영 예정작</a></li>
                  <li><a href="#tab3"> #평점순 </a></li>
                  <li><a href="#tab4"> #많은 리뷰순</a></li>
                </ul>
                <div class="tab-content">
                  <div id="tab1" class="tab active">
                    <div class="row">
                      <div class="slick-multiItem">
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item1.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Interstellar</a></h6>
                              <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item2.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The revenant</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item3.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item4.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The walk</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item5.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Interstellar</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item6.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The revenant</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item7.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item8.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The walk</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item3.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab2" class="tab">
                    <div class="row">
                      <div class="slick-multiItem">
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item5.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Interstellar</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item6.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The revenant</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item7.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item8.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The walk</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item3.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab3" class="tab">
                    <div class="row">
                      <div class="slick-multiItem">
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item1.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Interstellar</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item2.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The revenant</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item3.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item4.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The walk</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item3.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab4" class="tab">
                    <div class="row">
                      <div class="slick-multiItem">
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item5.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Interstellar</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item6.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The revenant</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item7.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item8.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">The walk</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="slide-it">
                          <div class="movie-item">
                            <div class="mv-img">
                              <img
                                src="images/uploads/mv-item3.jpg"
                                alt=""
                                width="185"
                                height="284"
                              />
                            </div>
                            <div class="hvr-inner">
                              <a href="moviesingle.html">
                                Read more
                                <i class="ion-android-arrow-dropright"></i>
                              </a>
                            </div>
                            <div class="title-in">
                              <h6><a href="#">Die hard</a></h6>
                              <p>
                                <i class="ion-android-star"></i><span>7.4</span> /10
                              </p>
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

export default Movieinfo;