import React, { Component } from 'react';
import Sales from './sales';
import Pay from './pay';
import Benefit_analysis from './benefit_analysis.js';
import Board from './borad';
import Movie from './movie';
import Product from './product';



class Admin_content extends Component {
  render(){
    if (this.props.tab === "sales") {
      return (<Sales></Sales>);
    }
    else if(this.props.tab === "pay"){
      return(<Pay></Pay>)
    }
    else if(this.props.tab === "benefit_analysis"){
      return(<Benefit_analysis></Benefit_analysis>)
    }
    else if(this.props.tab === "board"){
      return(<Board></Board>)
    }
    else if(this.props.tab === "movie"){
      return(<Movie></Movie>)
    }
    else if(this.props.tab === "product"){
      return(<Product></Product>)
    }
  }
}

export default Admin_content;