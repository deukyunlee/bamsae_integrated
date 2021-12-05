import React, { Component } from "react";
import title from "./images/title.png";
import bsti from "./images/bsti.png";
import Header from "./header";


class Home extends Component {

    onClick = () => {
    this.props.onChangePage("test");
  };

  render() {
    return (
        <>
          <Header isBack={false} />
    
          <img
          style={{marginLeft:"500px"}}
            id="homeImg"
            src={bsti}
            alt="img"
            width="800px"
            height="240px"
          ></img><br/><br/>
          <button
          style={{marginLeft:"850px"}}
          id="homeStartBtn" class="purplebtn" onClick={function(e){
              e.preventDefault();
              this.onClick();
            }.bind(this)}>
            시작하기
          </button>
    
        </>
      );
  }
  
};

export default Home;