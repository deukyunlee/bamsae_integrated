import React from "react";

const Progress = ({ width, percent }) => {
  let progress = percent * width;

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${progress}px` }} className="progress" />
    </div>
  );
};

export default Progress;
