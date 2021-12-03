import React, {Component} from 'react';
import Theater_Contents from './theater_/theater_contents';
import axios from 'axios';

class Theater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "list",
            focus: "SE",
            theater_id: null,
            data: [],
            schedule: [
                {
                    start_time: new Date(2021, 12, 1, 6, 0),
                    movie_name: "이터널스",
                    loc: 2,
                },
                {
                    start_time: new Date(2021, 12, 1, 8, 30),
                    movie_name: "듄",
                    loc: 1,
                },
                {
                    start_time: new Date(2021, 12, 1, 6, 0),
                    movie_name: "유체이탈자",
                    loc: 3,
                }
            ]
        }
    }
    
    componentDidMount() {
        this.getItems();
    }

    getItems = async () => {
        axios
          .get("http://localhost:5000/theater")
          .then((data_) => {
            this.setState({
              data : data_.data.data,
            });
          }
          )
          .catch(e => {
            console.error(e);
          });
      }

    handleChange = (code, id_) => {
        this.setState({
            page: code,
            theater_id : id_,
        });
    };

    handleFocus = (focus_) => {
        this.setState({
            focus : focus_,
        });
    }

    render() {
        return (
            <div class="buster-light">
                <Theater_Contents
                    page={this.state.page}
                    focus={this.state.focus}
                    data={this.state.data}
                    theater_id={this.state.theater_id}
                    handleChange={this.handleChange}
                    handleFocus={this.handleFocus}
                    schedule={this.state.schedule}></Theater_Contents>
            </div>
        );
    }
}

export default Theater;