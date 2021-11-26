import { Component } from 'react';
import MovieItem from './movie_item';

class MovieGrid extends Component {
    render() {
        var data = this.props.data; // array
        var i = 0;
        var arr = [];
        if (data.length === 0 || typeof data == "undefined")
            return (<div class="flex-wrap-movielist mv-grid-fw">영화가 존재하지 않습니다.</div>);
        while (i < data.length) {
            arr.push(<MovieItem id={data[i].id} name={data[i].name} rate={data[i].rate} onChangePage={this.props.onChangePage}></MovieItem>)
            i++;
        }
        return (
            <div class="flex-wrap-movielist mv-grid-fw">
                {arr}
            </div>            
        );
    }
}

export default MovieGrid;