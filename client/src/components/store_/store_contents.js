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
    else if (this.props.tab === "snack") {
      return (<Snack onChangeTab={this.props.onChangeTab}></Snack>);
    }
    else if(this.props.tab === "ticket"){
      return(<Ticket onChangeTab={this.props.onChangeTab}></Ticket>)
    }
    else if(this.props.tab === "product"){
      return(<Product onChangeTab={this.props.onChangeTab}></Product>)
    }
  }
}

export default Store_Content;