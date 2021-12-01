import React, { Component } from 'react';
import Info_view from './info_view';
import Info_edit from './info_edit';
import Change_PW from './change_pw';
import Reserve_info from './reserve_info';
import Review_info from './review_info';
import OnetoOne from './onetoone';

class Mp_Content extends Component {
    render() {
		if (this.props.section === "info" && this.props.mode === "view") {
			return (<Info_view onChangeSection={this.props.onChangeSection} username={this.props.username}></Info_view>);
		} else if (this.props.section === "info" && this.props.mode === "edit") {
			return (<Info_edit onChangeSection={this.props.onChangeSection} username={this.props.username}></Info_edit>);
		} else if (this.props.section === "change_pw") {
			return (<Change_PW></Change_PW>);
		} else if (this.props.section === "reserve_info") {
			return (<Reserve_info/>);
		} else if (this.props.section === "review_info") {
			return (<Review_info/>);
		} else if (this.props.section === "1:1") {
			return (<OnetoOne inquiry_data={this.props.inquiry_data}/>)
		}
    }
}

export default Mp_Content;