import React, { Component } from 'react';

class Review_info extends Component {
    render() {
        return (
            <div class="col-md-9 col-sm-12 col-xs-12">
				<div class="topbar-filter">
					<p>�궡媛� �벖 由щ럭 <span>3 </span> 媛�</p>
					<label>�젙�젹:</label>
					<select>
						<option value="range">�룊�젏�닚</option>
						<option value="saab">愿��엺�씪�닚</option>
					</select>
				</div>
				<div class="movie-item-style-2 userrate">
					<img src="images/uploads/mv1.jpg" alt=""></img>
					<div class="mv-item-infor">
						<h6><a href="#">oblivion <span>(2012)</span></a></h6>
						<p class="time sm-text">�궡媛� 以� �룊�젏:</p>
						<p class="rate"><i class="ion-android-star"></i><span>9.0</span> /10</p>
						<p class="time sm-text">�궡媛� �벖 由щ럭:</p>
						<h6>Best Marvel movie in my opinion</h6>
						<p class="time sm">02 April 2017</p>
						<p>��쏷his is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.���</p>		
					</div>
				</div>
				<div class="movie-item-style-2 userrate">
					<img src="images/uploads/mv2.jpg" alt=""></img>
					<div class="mv-item-infor">
						<h6><a href="#">into the wild <span>(2014)</span></a></h6>
						<p class="time sm-text">�궡媛� 以� �룊�젏:</p>
						<p class="rate"><i class="ion-android-star"></i><span>7.0</span> /10</p>				
					</div>
				</div>
				<div class="movie-item-style-2 userrate last">
					<img src="images/uploads/mv3.jpg" alt=""></img>
					<div class="mv-item-infor">
						<h6><a href="#">blade runner<span>(2015)</span></a></h6>
						<p class="time sm-text">�궡媛� 以� �룊�젏:</p>
						<p class="rate"><i class="ion-android-star"></i><span>10.0</span> /10</p>	
						<p class="time sm-text">�궡媛� �벖 由щ럭:</p>
						<h6>A masterpiece!</h6>
						<p class="time sm">01 February 2017</p>
						<p>��쏷o put it simply, the movie is fascinating, exciting and fantastic. The dialog, the fight choreography, the way the story moves, the characters charisma, all and much more are combined together to deliver this masterpiece. Such an amazing flow, providing a fusion between the 90s and the new century, it's like the assassins are living in another world, with another mindset, without people understanding it. Just one advice for you though: Don't build an expectation of what you want to watch in this movie, if you do, then you will ruin it. This movie has it's own flow and movement, so watch it with a clear mind, and have fun.���</p>				
					</div>
				</div>
				<div class="topbar-filter">
					<label>Movies per page:</label>
					<select>
						<option value="range">20 Movies</option>
						<option value="saab">10 Movies</option>
					</select>
					<div class="pagination2">
						<span>Page 1 of 1:</span>
						<a class="active" href="#">1</a>
						<a href="#"><i class="ion-arrow-right-b"></i></a>
					</div>
				</div>
			</div>
        );
    }
}

export default Review_info;