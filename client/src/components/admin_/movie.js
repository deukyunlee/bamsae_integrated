import React, {Component} from 'react';
import Movie_chart from './chart_/movie_chart';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Movie extends Component {
    render() {
        const stylebtn = {
            width: '50px',
            float: 'right'
        }
        const stylebtn2 = {
            width: '50px',
            float: 'right',
            marginRight: '20px'
        }
        const styleimage = {
            width: '100px',
            height: '100px'
        }
        const movie = [
            {
                'id': 1,
                'image': '/images/movie_image1.jpeg',
                'name': '듄',
                'date': '2021/10/20',
                'time': '155분'
            }, {
                'id': 2,
                'image': '/images/movie_image2.jpeg',
                'name': '이터널스',
                'date': '2021/11/03',
                'time': '155분'
            }, {
                'id': 3,
                'image': '/images/movie_image3.jpeg',
                'name': '장르만 로맨스',
                'date': '2021/11/17',
                'time': '113분'
            }, {
                'id': 4,
                'image': '/images/movie_image4.jpeg',
                'name': '디어 에반 헨슨',
                'date': '2021/11/17',
                'time': '137분'
            }, {
                'id': 5,
                'image': '/images/movie_image5.jpeg',
                'name': '프랜치 디스패치',
                'date': '2021/11/18',
                'time': '107분'
            }, {
                'id': 6,
                'image': '/images/movie_image6.jpeg',
                'name': '유체이탈자',
                'date': '2021/11/24',
                'time': '108분'
            }, {
                'id': 7,
                'image': '/images/movie_image7.jpeg',
                'name': '연애 빠진 로맨스',
                'date': '2021/11/24',
                'time': '95분'
            }, {
                'id': 8,
                'image': '/images/movie_image8.jpeg',
                'name': '엔칸토: 마법의 세계',
                'date': '2021/11/24',
                'time': '109분'
            }, {
                'id': 9,
                'image': '/images/movie_image9.jpeg',
                'name': '고스트버스터즈 라이즈',
                'date': '2021/12/01',
                'time': '124분'
            }, {
                'id': 10,
                'image': '/images/movie_image10.jpeg',
                'name': '라스트 나잇 인 소호',
                'date': '2021/12/01',
                'time': '117분'
            }, {
                'id': 11,
                'image': '/images/movie_image11.jpeg',
                'name': '태일이',
                'date': '2021/12/01',
                'time': '99분'
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
                    <button style={stylebtn2}>삭제</button>
                    <button style={stylebtn}>추가</button>
                    <br/>
                </div>
                <div>
                    <div>
                        <br/>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            width: 50,
                                            textAlign: "center"
                                        }}>번호</TableCell>
                                    <TableCell
                                        style={{
                                            width: 200,
                                            textAlign: "center"
                                        }}>포스터</TableCell>
                                    <TableCell
                                        style={{
                                            width: 350,
                                            textAlign: "center"
                                        }}>영화 이름</TableCell>
                                    <TableCell
                                        style={{
                                            width: 350,
                                            textAlign: "center"
                                        }}>상영예정일</TableCell>
                                    <TableCell
                                        style={{
                                            width: 350,
                                            textAlign: "center"
                                        }}>상영시간</TableCell>
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
                                            date={c.date}
                                            time={c.time}/>
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