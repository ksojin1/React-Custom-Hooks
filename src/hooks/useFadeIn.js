import { useEffect, useRef } from "react";

//원하는 element에 FadeIn스타일적용
export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if(typeof duration !== "number" || typeof delay !== "number") return;
    if(element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
}
//사용법
//const fadeInH1 = useFadeIn(3, 5);
//<h1 { ...fadeInH1 }></h1>