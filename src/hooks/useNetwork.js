import { useEffect, useState } from "react";

//네트워크 연결 확인
export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function"){
      //onchange 함수가 있는 경우 실행 
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status;
}

//사용법
// const handleNetworkChange = (online) => {
//   console.log(online ? "online" : "offline");
// }
// const onLine = useNetwork(handleNetworkChange);
// <h1>{onLine ? "Online" : "Offline"}</h1>