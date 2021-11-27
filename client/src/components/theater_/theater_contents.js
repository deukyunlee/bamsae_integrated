import { Component } from 'react';
import List from './list';
import Theater_detail from './theater_detail';

class Theater_Contents extends Component {
    render() {
        if (this.props.page === "list") {
            return (<List data={this.props.data} focus={this.props.focus} handleChange={this.props.handleChange} handleFocus={this.props.handleFocus}></List>);
        }
        else if (this.props.page === "detail") {
            return (<Theater_detail selected_item={this.props.selected_item}/>);
        }
    }
}

export default Theater_Contents;