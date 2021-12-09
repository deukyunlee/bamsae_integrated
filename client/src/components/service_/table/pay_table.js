import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Pay_table extends Component {
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
                    }}>{this.props.sorting}</TableCell>
                     <TableCell
                    style={{
                        textAlign: "center"
                    }}>{this.props.name}</TableCell>
                     <TableCell
                    style={{
                        textAlign: "center"
                    }}>{this.props.hour}</TableCell>
                    <TableCell
                    style={{
                        textAlign: "center"
                    }}>{this.props.salary}</TableCell>
            </TableRow>
        )
    }
}

export default Pay_table;