import React, { Component }from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Movie_chart extends Component {
render() {
  
return (
<TableRow>
<TableCell>{this.props.id}</TableCell>
<TableCell><img src={this.props.image} alt="profile"/></TableCell>
<TableCell>{this.props.name}</TableCell>
<TableCell>{this.props.date}</TableCell>

</TableRow>
)
}
}

export default Movie_chart;