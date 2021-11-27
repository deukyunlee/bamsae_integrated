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
            username: "",
            inquiry_data: [],
        }
    }

    initialize() {
        const is_logined = localStorage.getItem("is_logined");
        const username_ = localStorage.getItem("username");
        if (JSON.parse(is_logined)) {
            this.setState({
                is_logined: JSON.parse(is_logined),
                username: username_,
            });
        }
    }

    componentDidMount() {
        this.initialize();
    }

    setLogin(name) {
        localStorage.setItem("is_logined", "true");
        localStorage.setItem("username", name)
    }

    setLogout() {
        localStorage.setItem("is_logined", "false")
        localStorage.removeItem("username");
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
            username={this.state.username}
            logout={function(){
                this.setLogout();
            }.bind(this)}
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
        is_logined={this.state.is_logined}
        loginSucess={function(name){
            this.setLogin(name);
        }.bind(this)}
        username={this.state.username}
        inquiry_data={this.state.inquiry_data} addInquiryData={function(arr){
            this.setState({
                inquiry_data: arr,
            })
        }.bind(this)}
    ></Content>
    <Footer></Footer>
    </div>
        );
    }
}

export default Frame;