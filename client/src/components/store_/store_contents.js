import React, {Component} from 'react';
import Snack from './snack';
import Ticket from './ticket';
import Product from './product';
import Single from './single';
import Double from './double';

class Store_Content extends Component {
  render(){
    if (this.props.tab === "single") {
      return(<Single></Single>);
    }
    else if (this.props.tab === "double") {
      return(<Double></Double>);
    }
    else if (this.props.tab === "snack") {
      return (<Snack onChangeTab={this.props.onChangeTab}></Snack>);
    }
    else if(this.props.tab === "ticket"){
      return(<Ticket onChangeDetail={this.props.onChangeDetail}></Ticket>)
    }
    else if(this.props.tab === "product"){
      return(<Product onChangeDetail={this.props.onChangeDetail}></Product>)
    }
  }
}

export default Store_Content;