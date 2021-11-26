import React, { Component } from 'react';
import Navbar from './Navbar';
import Search from './index_/search_bar';
import Content from './content';
import Footer from './footer';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_logined: false,
            page: "main",
        }
    }
    render() {
        return (
            <div>
            <header class="ht-header">
      <div class="container">
        <Navbar
            onChangePage={function(code){
                this.setState({
                    page: code,
                });
            }.bind(this)}
            is_logined={this.state.is_logined}
        ></Navbar>
        <Search page={this.state.page}></Search>
      </div>
    </header>
    <Content 
        page={this.state.page}
        onChangePage={function(code){
            this.setState({
                page: code,
            });
        }.bind(this)}
    ></Content>
    <Footer></Footer>
    </div>
        );
    }
}

export default Frame;