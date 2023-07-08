import { useEffect, useRef, useState } from "react";

function Hook_test() {
  const onFullS = isFull => {
    console.log(isFull ? "Full" : "Small");
  }
  //const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="wrap">
      {/* <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
        <button onClick={exitFull}>Exit</button>
      </div>
      <button onClick={triggerFull}>Full</button> */}
    </div>
  );
}

export default Hook_test;