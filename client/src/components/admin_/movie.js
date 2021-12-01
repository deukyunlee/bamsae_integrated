import React, {Component} from 'react';
import Movie_chart from './chart_/movie_chart';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Movie extends Component {
    render() {
        const styleimage = {
            width: '100px',
            height: '100px'
        }
        const movie = [
            {
                'id': 1,
                'image': '/images/5kxrrz7YXuRfySllsNV3pFwar5WP9vhn_420.jpeg',
                'name': '듄',
                'date': '2021/10/20'
            }, {
                'id': 2,
                'image': '/images/movie_image.jpeg',
                'name': '이터널스',
                'date': '2021/11/03'
            }, {
                'id': 1,
                'image': '/images/5kxrrz7YXuRfySllsNV3pFwar5WP9vhn_420.jpeg',
                'name': '장르만 로맨스',
                'date': '2021/10/20'
            }
        ]
        return (
            <div>
                <div class="tab-content">
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>영화 정보 관리</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <br/>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                    style={{
                                            width: 100,
                                            textAlign: "center"
                                        }}>번호</TableCell>
                                    <TableCell style={styleimage}
                                    style={{
                                            width: 200,
                                            textAlign: "center"
                                        }}>포스터</TableCell>
                                    <TableCell
                                    style={{
                                            width: 500,
                                            textAlign: "center"
                                        }}>영화 이름</TableCell>
                                    <TableCell
                                    style={{
                                            width: 500,
                                            textAlign: "center"
                                        }}>상영예정일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    movie.map(c => {
                                        return <Movie_chart 
                                        key={c.id} 
                                        id={c.id} 
                                        image={c.image} 
                                        name={c.name} 
                                        date={c.date}/>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>

        );
    }
}

export default Movie;