import React, { Component } from "react";
import ProgressBar from "./progress";

import q1 from "./images/question/qw1.png";
import q2 from "./images/question/qw2.png";
import q3 from "./images/question/qw3.png";
import q4 from "./images/question/qw4.png";
import q5 from "./images/question/qw5.png";
import q6 from "./images/question/qw6.png";
import q7 from "./images/question/qw7.png";
import q8 from "./images/question/qw8.png";
import q9 from "./images/question/qw9.png";
import q10 from "./images/question/qw10.png";
import q11 from "./images/question/qw11.png";
import q12 from "./images/question/qw12.png";

import Header from "./header";

var select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const Test = (props) => {
  const [step, setStep] = React.useState(0);
  const [time, setTime] = React.useState(false);
  const question = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

  const answerYes = [
    "보고싶었던 영화니깐 친구들이랑 봐줘야 재밌지",
    "당연히 영화관이지! .",
    "사람이 옆에 있어도 중앙이 영화 감상하기에는 딱이지",
    "액션 스릴러 빵빵 터지는게 재밌어!",
    "커플세트,나쵸세트 그날그날의 FEEL에 따라 고른다 ",
    "주머니에 넣어놨다가 꼬깃해져 버린다",
    "그날 그날 땡기는 영화를 고른다",
    "귀찮게 무슨 리뷰야 내 마음속에 저장!"
  ];
  const answerNo = [
    "혼자서 집중해서 감상한다 ",
    "집에서 누워서 편하게 보는게 진정한 감상이지",
    "사람이 없는 사이드가 마음이 편해",
    "잔잔하거나 유쾌한 로맨스물이 재밌어! ",
    "늘 먹던대로 콜라와 팝콘 고정메뉴로 먹는다",
    "영화표는 추억이니깐 집에 따로 모아놓는다",
    "보고싶었던 영화 리스트를 만들어 순서대로 감상한다",
    "평론가 뺨치는 리뷰를 남겨준다"
  ];



  React.useEffect(() => {
    setTime(true);
  }, [time]);
  const onClick = (num) => {
    setTime(false);
    if (step < 7) setStep(step + 1);
    else if (step === 7) {
      props.onChangePage("beforeResult");
    }
    select[step] = num;
  };


  return (
    <>
      {/* <Menu /> */}
      <Header isBack={true} step={step} setStep={setStep} />
      <ProgressBar width={300} percent={step / 7} />
<div>
      {time && (
        <div id="test">
          
          <div className="testQuestionContainer">
            <img
            style={{
              marginLeft: '150px',
              marginBottom:'20PX',
            }}
              className="testQusetion"
              src={question[step]}
              alt="img"
              width="800px"
              height="10px"
              style={{
                marginLeft: '500px'
              }}
              ></img>
          </div>
          <button
            style={{
              marginLeft: '600px'
            }}
            className="purplebtn testAnswer" 
            onClick={() => {
              onClick(1);
            }}
          >
            {answerYes[step]}
          </button>
          
          <button
            style={{
              marginTop: '20px',
              marginLeft: '30px'
            }}
            //class="purplebtn"
            className="purplebtn"
            onClick={() => {
              onClick(0);
            }}
          >
            {answerNo[step]}
          </button>
        </div>
      )}</div>
    </>
  );

};
export default Test;
//class Test extends Component {
