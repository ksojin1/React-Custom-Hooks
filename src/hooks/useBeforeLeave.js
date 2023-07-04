import { useEffect } from "react";

//마우스가 document에서 떠나면 작동 단, clientY 기준
export const useBeforeLeave = onBefore => {
  const handle = (event) => {
    const { clientY } = event;
    if(clientY <= 0) onBefore();
  };
  useEffect(() => {
    if(typeof onBefore != "function") return;
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  },[]);
}

//사용법
//const begForLife =  () => console.log('pls dont leave');
//useBeforeLeave(begForLife);