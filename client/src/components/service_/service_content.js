import React, {Component} from 'react';
import Faq from './faq';
import Notice from './notice';
import Inquiry from './Inquiry';
import Lent from './lent';
import Lost from './Lost';
import Form from './form';

class Service_content extends Component {
  render(){
    if (this.props.tab === "FAQ") {
      return (<Faq onChangeDetail={this.props.onChangeDetail}></Faq>);
    }
    else if(this.props.tab === "Notice"){
      return(<Notice></Notice>)
    }
    else if(this.props.tab === "Inquiry"){
      return(<Inquiry></Inquiry>)
    }
    else if(this.props.tab === "Lent"){
      return(<Lent></Lent>)
    }
    else if(this.props.tab === "Lost"){
      return(<Lost onChangeDetail={this.props.onChangeDetail}></Lost>)
    }
    else if (this.props.tab === "Lost_form") {
      return (<Form></Form>)
    }
  }
}

export default Service_content;