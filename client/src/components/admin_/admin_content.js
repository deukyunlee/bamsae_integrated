import React, { Component } from "react"
import Sales from "./sales"
import Pay from "./pay"
import Board from "./borad"
import Product from "./product"
import All_chart from "./chart_/all_chart"
import Other_place from "./chart_/other_place"
import Movie from "../admin_/movie"
import Theater from "./theater"
import Employee from './employee'
import Commuting from './commuting';

class Admin_content extends Component {
    render() {
      if (this.props.tab === "theater") {
            return <Theater></Theater>
      }else if (this.props.tab === "sales") {
          return <Sales onChangeDetail={this.props.onChangeDetail}></Sales>
      } else if (this.props.tab === "employee") {
        return <Employee></Employee>
      } else if (this.props.tab === "commuting") {
        return (<Commuting onChangeDetail={this.props.onChangeDetail}></Commuting>);
      } else if (this.props.tab === "all") {
          return <All_chart onChangeDetail={this.props.onChangeDetail}></All_chart>
      } else if (this.props.tab === "other_place") {
          return <Other_place onChangeDetail={this.props.onChangeDetail}></Other_place>
      } else if (this.props.tab === "payment") {
          return <Pay onChangeDetail={this.props.onChangeDetail}></Pay>
      } else if (this.props.tab === "movie") {
          return <Movie></Movie>
      } else if (this.props.tab === "board") {
          return <Board></Board>
      } else if (this.props.tab === "product") {
          return <Product></Product>
      } 
  }
}

export default Admin_content
