import React, { Component }from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Movie_chart extends Component {
render() {
  
return (
<TableRow>
<TableCell
style={{
  textAlign: "center"
}}>{this.props.id}</TableCell>
<TableCell><img src={this.props.image} alt="profile"/></TableCell>
<TableCell
style={{
  textAlign: "center"
}}>{this.props.name}</TableCell>
<TableCell
style={{
  textAlign: "center"
}}>{this.props.date}</TableCell>

</TableRow>
)
}
}

export default Movie_chart;