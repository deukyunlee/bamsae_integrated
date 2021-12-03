import React from "react";
import logo from "./images/logo3.png";
import { Route, Link } from "react-router-dom";
import back from "./images/back.png";

const Header = (props) => {
  const { isBack } = props;
  const { setStep } = props;
  const { step } = props;
  const handleOnClick = () => {
    if (isBack) {
      if (step !== 0) {
        setStep(step - 1);
      }
    }
  };
  return (
    <>
      <div className="headerContainer">
        {isBack && (
          <img
            className="back"
            src={back}
            onClick={handleOnClick}
            width="24px"
            height="24px"
            alt="img"
          />
        )}
        <Link to="/">
          {/* <img
            className="logo"
            src={logo}
            alt="png"
            width="100px"
            height="30px"
            onClick={handleOnClick}
          ></img> */}
        </Link>
      </div>
    </>
  );
};

export default Header;