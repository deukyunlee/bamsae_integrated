import React from "react";
import Header from "./header";
import load from "./images/result/load.png";

const BeforeResult = (props) => {


  React.useEffect(() => {
    setTimeout(() => {
      props.onChangePage("result");
    }, 4000);

  }, []);

  return (
    <>
      <Header isBack={false} />
      <div className="h3Container">
        <iframe
          style={{ marginLeft: "650px" }}
          src="https://giphy.com/embed/pyqdigJ1BGli0RJQOh" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <img src={load}  style={{ marginLeft: "500px" }}></img>
      </div>
    </>
  );
};

export default BeforeResult;