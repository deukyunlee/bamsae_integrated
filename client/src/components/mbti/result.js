import React from "react";
import Toast from "./toast";
import { kakaoShare, twitterShare, facebookShare } from "./share";
import facebook from "./images/facebook.png";
import kakao from "./images/kakao.png";
import twitter from "./images/twitter.png";
import link from "./images/link.png";
import Modal from "./modal";
import Header from "./header";

import result_img from "./images/result/mbti_result.png";
import result_title from "./images/result/result_title.gif";
import result_friend from "./images/result/result_friend.png";
import friend_type from "./images/result/friend_type.png";


const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};

const copy = (func) => {
  copyToClipboard("http://localhost:3000/bsti");
  func("complete");
};

const titlesize = [
  [0, 0],
  [180, 43],
  [180, 43],
  [251, 42],
  [144, 44],
];
const subtitlesize = [
  [0, 0],
  [204, 43],
  [200, 43],
  [284, 47],
  [204, 43],
];
const Result = (props) => {
  const [isShowAll, setIsShowAll] = React.useState(false);
  const [ToastStatus, setToastStatus] = React.useState(false);
  const ToastMsg = "클립보드에 URL이 복사되었습니다.";
  const showData = {
    "img":"",
    "type":1,
   
  }
  console.log(showData);
  const handleToast = () => {
    if (!ToastStatus) {
      setToastStatus(true);
    }
  };

  React.useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
      }, 1000);
    }
  }, [ToastStatus]);

  const handleRetryBtn = () => {
    props.onChangePage("home");
  };


  return (
    <>
      <Header isBack={false} />
      <div  style={{ marginLeft: "450px" }}>
      <img
        id="resultType"
        src={result_title}
        width={"1000px"}
        height={"10px"}
      /><br></br>
      <img  style={{ marginLeft: "100px",marginTop:"-100px"}}
        src={result_img}
        alt="img"
        width="800px"
        height="250px"
      ></img>
      <br></br>
      <img
      style={{marginLeft:"100px",marginTop:"-100px"}}
        src={result_friend}
        width={"700px"}
        height={"10px"}
      /><br/>
      <img
      style={{marginLeft:"200px",marginTop:"-60px"}}
        src={friend_type}
        width={"500px"}
        height={"10px"}
      /><br/><br/>

      <div id="shareContainer"
      style={{marginLeft:"300px"}}>
        <img
          className="shareIcon"
          src={kakao}
          alt="kakaotalk"
          width="65px"
          height="65px"
          onClick={kakaoShare}
        />

        <img
          className="shareIcon"
          src={facebook}
          alt="facebook"
          width="65px"
          height="65px"
          onClick={facebookShare}
        ></img>

        <img
          className="shareIcon"
          src={twitter}
          alt="twitter"
          width="65px"
          height="65px"
          onClick={twitterShare}
        ></img>
        <input type="hidden" id="urlInput" className="url-input" />

        <img
          className="shareIcon"
          src={link}
          alt="link"
          width="65px"
          height="65px"
          onClick={() => {
            copy(handleToast);
          }}
        ></img>
        {ToastStatus && (
          <>
            <Toast msg={ToastMsg} />
          </>
        )}
      </div>

      <div id="resultBtnContainer" 
       style={{marginLeft:"400px", marginTop:"50px"}}>
        <button id="resultRetry" onClick={handleRetryBtn} class="purplebtn">
          다시하기
        </button>
        
      </div>

      {isShowAll && <Modal setIsShowAll={setIsShowAll} />}
      </div>
    </>
  );
};

export default Result;