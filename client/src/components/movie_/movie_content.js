import React, {Component} from 'react';
import Info from './info';
import Cast from './cast';
import Review from './review';
import Pre from './pre';


class Movie_Content extends Component {
  render(){
    // if (this.props.in_detail) {
    //   return(<Store_details></Store_details>);
    // }
    if (this.props.tab === "info") {
      return (<Info onChangeDetail={this.props.onChangeDetail}></Info>);
    }
    else if(this.props.tab === "cast"){
      return(<Cast onChangeDetail={this.props.onChangeDetail}></Cast>)
    }
    else if(this.props.tab === "review"){
      return(<Review onChangeDetail={this.props.onChangeDetail}></Review>)
    }
    else if(this.props.tab === "pre"){
      return(<Pre onChangeDetail={this.props.onChangeDetail}></Pre>)
    }
  }
}

export default Movie_Content;