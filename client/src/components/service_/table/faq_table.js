import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Faq_table extends Component {
    render() {

        return (
            <TableRow>
                <TableCell
                    style={{
                        textAlign: "center"
                    }}>{this.props.id}</TableCell>
                <TableCell
                style={{
                        textAlign: "center"
                    }}><a id={this.props.id} onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeDetail(e.target.id);
                        this.props.getData();
                    }.bind(this)}>{this.props.name}</a></TableCell>
                <TableCell
                style={{
                        textAlign: "center"
                    }}>{this.props.date}</TableCell>
            
            </TableRow>
        )
    }
}

export default Faq_table;