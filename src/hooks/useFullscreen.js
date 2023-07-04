import { useRef } from "react";

//이미지를 화면에 채우기
export const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if(callback && typeof callback === "function"){
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if(element.current) {
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      }else if(element.current.mozRequestFullScreen){
        element.current.mozRequestFullScreen();
      }else if(element.current.webkitRequestFullScreen){
        element.current.webkitRequestFullScreen();
      }else if(element.current.msRequestFullScreen){
        element.current.msRequestFullScreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if(document.exitFullscreen){
      document.exitFullscreen();
    }else if(document.mozCancelFullScreen){
      document.mozCancelFullScreen();
    }else if(document.webkitExitFullscreen){
      document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
//사용법
//const onFullS = isFull => {
//  console.log(isFull ? "Full" : "Small");
//}
//const { element, triggerFull, exitFull } = useFullscreen(onFullS);

//<div ref={element}>
  //<img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
  //<button onClick={exitFull}>Exit</button>
//</div>
//<button onClick={triggerFull}>Full</button>