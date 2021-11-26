import { Component } from 'react';
import Movie_Content from './movie_content';

class Movie_Detail extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tab : "info",
            in_detail : false,
        }
    }
    render() {
        return (
            <div class="buster-light">
<div class="hero mv-single-hero">
</div>
<div class="page-single movie-single movie_single">
	<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img src="/images/movie_image.jpeg" alt=""></img>
					<div class="movie-btn">	
						<div class="btn-transform transform-vertical red">
							<div><a href="#" class="item item-1 redbtn"> <i class="ion-play"></i>예고편보기</a></div>
							<div><a href="https://www.youtube.com/embed/o-0hcF97wy0" class="item item-2 redbtn fancybox-media hvr-grow"><i class="ion-play"></i></a></div>
						</div>
						<div class="btn-transform transform-vertical">
							<div><a href="#" class="item item-1 yellowbtn"> <i class="ion-card"></i>예매하기</a></div>
							<div><a href="#" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">이터널스<span>2021</span></h1>
					<div class="social-btn">
						<a href="#" class="parent-btn"><i class="ion-heart"></i>찜하기</a>
						<div class="hover-bnt">
							<a href="#" class="parent-btn"><i class="ion-android-share-alt"></i>공유하기</a>
							<div class="hvr-item">
								<a href="#" class="hvr-grow"><i class="ion-social-facebook"></i></a>
								<a href="#" class="hvr-grow"><i class="ion-social-twitter"></i></a>
								<a href="#" class="hvr-grow"><i class="ion-social-googleplus"></i></a>
								<a href="#" class="hvr-grow"><i class="ion-social-youtube"></i></a>
							</div>
						</div>		
					</div>
					<div class="movie-rate">
						<div class="rate">
							<i class="ion-android-star"></i>
							<p><span>6.57</span> /10<br></br>
								<span class="rv">156 Reviews</span>
							</p>
						</div>
						<div class="rate-star">
							<p>평점:  </p>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star"></i>
							<i class="ion-ios-star-outline"></i>
						</div>
					</div>
					<div class="movie-tabs">
						<div class="tabs">
							<ul class="tab-links tabs-mv">
								<li>
									<a href="#overview" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "info",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>영화정보</a></li>
								<li><a href="#reviews" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "review",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>관람평</a></li>
								<li><a href="#cast" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "cast",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>출연진</a></li>
								<li><a href="#pre" onClick={function(e){
                                        e.preventDefault();
                                        this.setState({
                                            tab: "pre",
                                            in_detail: false,
                                        });
                                    }.bind(this)}>예고편/스틸컷</a>
																		</li> 
								                      
							</ul>
							<Movie_Content tab={this.state.tab} in_detail={this.state.in_detail} onChangeDetail={function(e){
                                var det = this.state.in_detail;
                                this.setState({
                                    in_detail : !det
                                });
                            }.bind(this)}></Movie_Content>
						   
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

export default Movie_Detail;