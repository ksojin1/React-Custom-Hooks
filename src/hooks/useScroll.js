import { useEffect, useState } from "react";

//스크롤 했을 떄
export const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setScroll({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);
  return scroll;
}
//사용법
//const { y } = useScroll();
//<h1 style={{ position: 'fixed', color: y > 100 ? 'blue' : 'red' }}>HELLO</h1>