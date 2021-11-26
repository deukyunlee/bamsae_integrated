import { Component } from 'react';
import Main_A from './main_before_login';
import Movie from './movie';
import Reserve from './reserve';
import Store from './store'
import Theater from './theater';
import MyPage from './my_page';
import Service_Center from './service_center';
import MovieDetail from './movie_/movie_detail';
import Login from './login';

class Content extends Component {
    render() {
      if (this.props.page === "main") {
        return (<Main_A></Main_A>);
      } else if (this.props.page === "movie") {
        return (<Movie onChangePage={this.props.onChangePage}></Movie>);
      } else if (this.props.page === "theater") {
        return (<Theater></Theater>);
      } else if (this.props.page === "reserve") {
        return (<Reserve></Reserve>);
      } else if (this.props.page === "store") {
        return (<Store></Store>);
      } else if (this.props.page === "mypage") {
        return (<MyPage></MyPage>);
      } else if (this.props.page === "service") {
        return (<Service_Center></Service_Center>);
      } else if (this.props.page === "movie_detail") {
        return (<MovieDetail></MovieDetail>)
      }else if (this.props.page === "login") {
        return (<Login></Login>)
       }
    }
}


export default Content;